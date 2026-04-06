# Apps Script Integration Specification

Primary backend: Google Apps Script Web App
Source files:
- apps-script/Code.gs
- apps-script/README.md

## Endpoint
- Base URL: value of VITE_APPS_SCRIPT_WEB_APP_URL
- Intake action: GET {baseUrl}?action=intake&...

## Intake Contract
Required fields:
- name
- phone
- date
- timeSlot

Optional fields:
- email
- type
- message

Additional metadata fields expected by current frontend:
- leadId
- status=pending_confirmation
- source=website_booking_modal
- timezone=Asia/Kolkata
- submittedAt (ISO string)

## Success Response
{
  "ok": true,
  "status": "received",
  "leadId": "lead_...",
  "confirmationUrl": "https://.../exec?leadId=lead_..."
}

## Error Patterns
- 400 for validation issues
- 409 for duplicate lead detected in dedupe window
- 500 for internal/config failures

## Deduplication
- Fingerprint generated from phone|date|timeSlot|type
- Cache-based dedupe window (default 5 minutes)

## Google Sheet Data Flow
1. Intake writes to Raw Leads sheet
2. Doctor receives notification email with confirmation link
3. Doctor opens confirmation link with leadId
4. Lead status updated and copied to Confirmed Appointments sheet
5. Patient receives confirmation email when applicable

## Script Properties
- SPREADSHEET_ID (required)
- DOCTOR_EMAIL (required)
- TIMEZONE (optional; default Asia/Kolkata)
- DEDUPE_WINDOW_MS (optional)
- RAW_LEADS_SHEET_NAME (optional)
- CONFIRMED_SHEET_NAME (optional)
- SENDER_NAME (optional)
- WEB_APP_URL (optional fallback)

## Frontend Env Variable
- VITE_APPS_SCRIPT_WEB_APP_URL

## Migration Rule
When porting to Rysewell, preserve this request/response contract unless backend and frontend are changed together in one release.
