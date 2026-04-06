/*
 * Apps Script web-app implementation for booking intake and confirmation.
 * Paste this file into the Apps Script editor; no checked-in manifest is required.
 */

const APP_CONFIG = {
  spreadsheetId: PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID") || "",
  doctorEmail: PropertiesService.getScriptProperties().getProperty("DOCTOR_EMAIL") || "info@rysewellhospitals.com",
  timezone: PropertiesService.getScriptProperties().getProperty("TIMEZONE") || "Asia/Kolkata",
  dedupeWindowMs: Number(PropertiesService.getScriptProperties().getProperty("DEDUPE_WINDOW_MS") || 300000),
  rawLeadsSheetName: PropertiesService.getScriptProperties().getProperty("RAW_LEADS_SHEET_NAME") || "Raw Leads",
  confirmedSheetName: PropertiesService.getScriptProperties().getProperty("CONFIRMED_SHEET_NAME") || "Confirmed Appointments",
  senderName: PropertiesService.getScriptProperties().getProperty("SENDER_NAME") || "Dr. Amit Palve Appointments",
};

const RAW_LEADS_HEADERS = [
  "lead_id",
  "lead_fingerprint",
  "submitted_at_ist",
  "submitted_at_iso",
  "name",
  "phone",
  "email",
  "consultation_type",
  "preferred_date",
  "preferred_time_slot",
  "message",
  "status",
  "source",
  "timezone",
  "confirmation_url",
];

const CONFIRMED_HEADERS = RAW_LEADS_HEADERS.concat(["confirmed_at_ist", "confirmed_at_iso"]);

function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action === "intake") {
      return handleIntake_(e.parameter);
    }

    if (e && e.parameter && e.parameter.leadId) {
      return handleConfirmation_(e.parameter.leadId);
    }

    return jsonResponse_(200, {
      ok: true,
      service: "appointment-automation",
      message: "Apps Script endpoint is running.",
    });
  } catch (error) {
    return handleError_(error);
  }
}

function doPost(e) {
  try {
    const payload = parseRequestBody_(e);
    return handleIntake_(payload);
  } catch (error) {
    return handleError_(error);
  }
}

function handleIntake_(payload) {
  const clean = normalizeLead_(payload);

  if (!clean.name || !clean.phone || !clean.date || !clean.timeSlot) {
    return jsonResponse_(400, {
      ok: false,
      reason: "validation_failed",
      message: "Name, phone, date, and time slot are required.",
    });
  }

  if (!/^[6-9]\d{9}$/.test(clean.phone)) {
    return jsonResponse_(400, {
      ok: false,
      reason: "invalid_phone",
      message: "Valid 10-digit phone required.",
    });
  }

  const fingerprint = [clean.phone, clean.date, clean.timeSlot, clean.type].join("|").toLowerCase();
  if (isDuplicateLead_(fingerprint)) {
    return jsonResponse_(409, {
      ok: false,
      reason: "duplicate_recent",
      message: "A similar booking was already received recently.",
    });
  }

  const leadId = clean.leadId || generateLeadId_();
  const confirmationUrl = buildConfirmationUrl_(leadId);
  if (!confirmationUrl) {
    throw new Error("WEB_APP_URL is not configured");
  }

  const submittedAt = clean.submittedAt || new Date().toISOString();
  const record = {
    lead_id: leadId,
    lead_fingerprint: fingerprint,
    submitted_at_ist: formatDateTime_(submittedAt, clean.timezone),
    submitted_at_iso: submittedAt,
    name: clean.name,
    phone: clean.phone,
    email: clean.email,
    consultation_type: clean.type,
    preferred_date: clean.date,
    preferred_time_slot: clean.timeSlot,
    message: clean.message,
    status: clean.status,
    source: clean.source,
    timezone: clean.timezone,
    confirmation_url: confirmationUrl,
  };

  const sheet = getOrCreateSheet_(APP_CONFIG.rawLeadsSheetName, RAW_LEADS_HEADERS);
  appendRow_(sheet, RAW_LEADS_HEADERS, record);

  if (record.email) {
    sendPatientReceiptEmail_(record);
  }

  sendDoctorNotificationEmail_(record);

  return jsonResponse_(200, {
    ok: true,
    status: "received",
    leadId: leadId,
    confirmationUrl: confirmationUrl,
  });
}

function handleConfirmation_(leadId) {
  const safeLeadId = String(leadId || "").trim();
  if (!safeLeadId) {
    return confirmationPage_("Invalid confirmation link", "Lead ID is missing in the URL.", null, "error");
  }

  const spreadsheet = getSpreadsheet_();
  const rawSheet = getOrCreateSheet_(APP_CONFIG.rawLeadsSheetName, RAW_LEADS_HEADERS);
  const confirmedSheet = getOrCreateSheet_(APP_CONFIG.confirmedSheetName, CONFIRMED_HEADERS);
  const match = findLeadById_(rawSheet, safeLeadId);

  if (!match) {
    return confirmationPage_("Appointment not found", "No booking lead was found for this confirmation link.", { lead_id: safeLeadId }, "error");
  }

  const currentStatus = String(match.rowData.status || "").toLowerCase();
  if (currentStatus === "confirmed") {
    return confirmationPage_("Appointment already confirmed", "This appointment was already confirmed earlier.", match.rowData, "info");
  }

  const confirmedAtIso = new Date().toISOString();
  const updatedRow = Object.assign({}, match.rowData, {
    status: "confirmed",
    confirmed_at_ist: formatDateTime_(confirmedAtIso, APP_CONFIG.timezone),
    confirmed_at_iso: confirmedAtIso,
  });

  updateSheetRow_(rawSheet, match.rowNumber, RAW_LEADS_HEADERS, updatedRow);
  appendRow_(confirmedSheet, CONFIRMED_HEADERS, updatedRow);

  if (updatedRow.email) {
    sendPatientConfirmationEmail_(updatedRow);
  }

  return confirmationPage_("Appointment confirmed", "The appointment has been confirmed successfully.", updatedRow, "success");
}

function confirmationPage_(title, subtitle, record, tone) {
  const toneStyles = {
    success: { badgeBg: "#dcfce7", badgeText: "#166534", border: "#86efac" },
    info: { badgeBg: "#dbeafe", badgeText: "#1e40af", border: "#93c5fd" },
    error: { badgeBg: "#fee2e2", badgeText: "#991b1b", border: "#fca5a5" },
  };
  const style = toneStyles[tone] || toneStyles.info;
  const safeRecord = record || {};

  const detailsRows = [
    pageDetailRow_("Lead ID", safeRecord.lead_id || "N/A"),
    pageDetailRow_("Patient Name", safeRecord.name || "N/A"),
    pageDetailRow_("Phone", safeRecord.phone || "N/A"),
    pageDetailRow_("Email", safeRecord.email || "N/A"),
    pageDetailRow_("Consultation Type", safeRecord.consultation_type || "N/A"),
    pageDetailRow_("Preferred Date", safeRecord.preferred_date || "N/A"),
    pageDetailRow_("Preferred Time Slot", safeRecord.preferred_time_slot || "N/A"),
    pageDetailRow_("Status", safeRecord.status || "N/A"),
  ].join("");

  const html = [
    '<!doctype html>',
    '<html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />',
    '<title>Appointment Confirmation</title>',
    '<style>',
    'body{margin:0;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;}',
    '.wrap{max-width:760px;margin:48px auto;padding:0 16px;}',
    '.card{background:#fff;border:1px solid #e2e8f0;border-radius:14px;box-shadow:0 8px 24px rgba(15,23,42,.07);overflow:hidden;}',
    '.head{padding:22px;border-bottom:1px solid #e2e8f0;}',
    '.badge{display:inline-block;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:700;}',
    '.title{margin:12px 0 6px;font-size:28px;line-height:1.2;}',
    '.sub{margin:0;color:#475569;font-size:15px;}',
    '.body{padding:20px 22px 24px;}',
    '.table{width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;}',
    '.table td{padding:10px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;}',
    '.table tr:last-child td{border-bottom:none;}',
    '.k{width:34%;color:#334155;background:#f8fafc;font-weight:700;}',
    '.v{color:#0f172a;}',
    '.foot{margin-top:14px;color:#64748b;font-size:12px;}',
    '</style></head><body>',
    '<div class="wrap"><div class="card">',
    '<div class="head">',
    '<span class="badge" style="background:' + style.badgeBg + ';color:' + style.badgeText + ';border:1px solid ' + style.border + ';">Doctor Portal</span>',
    '<h1 class="title">' + escapeHtml_(title) + '</h1>',
    '<p class="sub">' + escapeHtml_(subtitle) + '</p>',
    '</div>',
    '<div class="body">',
    '<table class="table">' + detailsRows + '</table>',
    '<p class="foot">Generated by Dr. Amit Palve appointment automation.</p>',
    '</div></div></div>',
    '</body></html>',
  ].join("");

  return HtmlService.createHtmlOutput(html)
    .setTitle("Appointment Confirmation")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function pageDetailRow_(label, value) {
  return '<tr><td class="k">' + escapeHtml_(label) + '</td><td class="v">' + escapeHtml_(value) + '</td></tr>';
}

function normalizeLead_(payload) {
  const body = payload || {};
  return {
    leadId: String(body.leadId || "").trim(),
    name: String(body.name || "").trim(),
    phone: String(body.phone || "").trim(),
    email: String(body.email || "").trim(),
    type: String(body.type || "In-Clinic").trim(),
    date: String(body.date || "").trim(),
    timeSlot: String(body.timeSlot || "").trim(),
    message: String(body.message || "").trim(),
    status: String(body.status || "pending_confirmation").trim(),
    source: String(body.source || "website_booking_modal").trim(),
    timezone: String(body.timezone || APP_CONFIG.timezone).trim() || APP_CONFIG.timezone,
    submittedAt: String(body.submittedAt || "").trim(),
  };
}

function buildConfirmationUrl_(leadId) {
  const webAppUrl = getWebAppUrl_();
  if (!webAppUrl) {
    return "";
  }

  return webAppUrl.replace(/\/?$/, "") + "?leadId=" + encodeURIComponent(leadId);
}

function getWebAppUrl_() {
  try {
    const serviceUrl = ScriptApp.getService().getUrl();
    if (serviceUrl) {
      return serviceUrl;
    }
  } catch (error) {
    // Fall back to a configured URL if the deployed service URL is unavailable.
  }

  return PropertiesService.getScriptProperties().getProperty("WEB_APP_URL") || "";
}

function sendPatientReceiptEmail_(record) {
  const subject = "Appointment request received | Dr. Amit Palve";
  const html = [
    '<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#111827">',
    '<h2 style="margin-bottom:8px">Thank you, ' + escapeHtml_(record.name) + '</h2>',
    '<p style="margin-top:0">We have received your appointment request. Our team will review and send confirmation shortly.</p>',
    '<div style="background:#f3f4f6;padding:16px;border-radius:8px">',
    '<p><strong>Consultation Type:</strong> ' + escapeHtml_(record.consultation_type) + '</p>',
    '<p><strong>Preferred Date:</strong> ' + escapeHtml_(record.preferred_date) + '</p>',
    '<p><strong>Preferred Time Slot:</strong> ' + escapeHtml_(record.preferred_time_slot) + '</p>',
    '<p><strong>Lead ID:</strong> ' + escapeHtml_(record.lead_id) + '</p>',
    '</div>',
    '<p style="font-size:12px;color:#6b7280">Please keep this lead ID for reference.</p>',
    '</div>',
  ].join("");

  MailApp.sendEmail({
    to: record.email,
    subject: subject,
    htmlBody: html,
    name: APP_CONFIG.senderName,
  });
}

function sendDoctorNotificationEmail_(record) {
  const subject = "New appointment lead | " + record.name;
  const html = [
    '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#111827">',
    '<h2 style="margin-bottom:8px">New Appointment Lead</h2>',
    '<table style="border-collapse:collapse;width:100%">',
    tableRow_("Lead ID", record.lead_id),
    tableRow_("Name", record.name),
    tableRow_("Phone", record.phone),
    tableRow_("Email", record.email || "N/A"),
    tableRow_("Type", record.consultation_type),
    tableRow_("Date", record.preferred_date),
    tableRow_("Time Slot", record.preferred_time_slot),
    tableRow_("Message", record.message || "N/A"),
    '</table>',
    '<div style="margin-top:18px;padding:14px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px">',
    '<p style="margin:0 0 10px 0"><strong>Confirm this patient appointment:</strong></p>',
    '<a href="' + escapeHtml_(record.confirmation_url) + '" style="display:inline-block;background:#1d4ed8;color:#ffffff;text-decoration:none;padding:10px 14px;border-radius:6px;font-weight:700">Confirm Appointment</a>',
    '</div>',
    '</div>',
  ].join("");

  MailApp.sendEmail({
    to: APP_CONFIG.doctorEmail,
    subject: subject,
    htmlBody: html,
    name: APP_CONFIG.senderName,
  });
}

function sendPatientConfirmationEmail_(record) {
  const subject = "Appointment confirmed | Dr. Amit Palve";
  const html = [
    '<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#111827">',
    '<h2 style="margin-bottom:8px">Your appointment is confirmed</h2>',
    '<p style="margin-top:0">Hello ' + escapeHtml_(record.name) + ', your appointment has been confirmed.</p>',
    '<div style="background:#f3f4f6;padding:16px;border-radius:8px">',
    '<p><strong>Consultation Type:</strong> ' + escapeHtml_(record.consultation_type) + '</p>',
    '<p><strong>Preferred Date:</strong> ' + escapeHtml_(record.preferred_date) + '</p>',
    '<p><strong>Preferred Time Slot:</strong> ' + escapeHtml_(record.preferred_time_slot) + '</p>',
    '<p><strong>Lead ID:</strong> ' + escapeHtml_(record.lead_id) + '</p>',
    '</div>',
    '</div>',
  ].join("");

  MailApp.sendEmail({
    to: record.email,
    subject: subject,
    htmlBody: html,
    name: APP_CONFIG.senderName,
  });
}

function parseRequestBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error("Invalid JSON payload");
  }
}

function getSpreadsheet_() {
  if (!APP_CONFIG.spreadsheetId) {
    throw new Error("SPREADSHEET_ID is not configured");
  }

  return SpreadsheetApp.openById(APP_CONFIG.spreadsheetId);
}

function getOrCreateSheet_(sheetName, headers) {
  const spreadsheet = getSpreadsheet_();
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  ensureHeaders_(sheet, headers);
  return sheet;
}

function ensureHeaders_(sheet, headers) {
  const lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    sheet.appendRow(headers);
    return;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const matches = headers.every(function (header, index) {
    return String(currentHeaders[index] || "").trim() === header;
  });

  if (!matches) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function appendRow_(sheet, headers, record) {
  const row = headers.map(function (header) {
    return record[header] || "";
  });

  sheet.appendRow(row);
}

function updateSheetRow_(sheet, rowNumber, headers, record) {
  const row = headers.map(function (header) {
    return record[header] || "";
  });

  sheet.getRange(rowNumber, 1, 1, headers.length).setValues([row]);
}

function findLeadById_(sheet, leadId) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return null;
  }

  const headers = values[0].map(function (header) {
    return String(header || "").trim();
  });
  const leadIdIndex = headers.indexOf("lead_id");

  if (leadIdIndex === -1) {
    throw new Error("lead_id column is missing from the Raw Leads sheet");
  }

  for (var rowIndex = 1; rowIndex < values.length; rowIndex += 1) {
    if (String(values[rowIndex][leadIdIndex] || "").trim() === String(leadId || "").trim()) {
      return {
        rowNumber: rowIndex + 1,
        rowData: rowToObject_(headers, values[rowIndex]),
      };
    }
  }

  return null;
}

function rowToObject_(headers, values) {
  const record = {};
  headers.forEach(function (header, index) {
    record[header] = values[index] || "";
  });
  return record;
}

function isDuplicateLead_(fingerprint) {
  const cache = CacheService.getScriptCache();
  const cacheKey = "lead_fp_" + fingerprint;
  const cached = cache.get(cacheKey);

  if (cached) {
    return true;
  }

  cache.put(cacheKey, String(Date.now()), Math.floor(APP_CONFIG.dedupeWindowMs / 1000));
  return false;
}

function generateLeadId_() {
  return "lead_" + Utilities.getUuid().replace(/-/g, "");
}

function formatDateTime_(isoString, timeZone) {
  return Utilities.formatDate(new Date(isoString), timeZone || APP_CONFIG.timezone, "dd MMM yyyy, hh:mm a");
}

function tableRow_(label, value) {
  return '<tr><td style="padding:8px;border:1px solid #e5e7eb"><strong>' + escapeHtml_(label) + '</strong></td><td style="padding:8px;border:1px solid #e5e7eb">' + escapeHtml_(value) + '</td></tr>';
}

function escapeHtml_(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonResponse_(statusCode, body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleError_(error) {
  return jsonResponse_(500, {
    ok: false,
    reason: "server_error",
    message: error instanceof Error ? error.message : "Unknown error",
  });
}