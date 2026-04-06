# Google Apps Script booking automation

This folder contains the booking intake and confirmation automation.

## What it does

- Accepts booking submissions from the React lead form.
- Stores raw leads in a Google Sheet.
- Sends the patient acknowledgment email.
- Sends the doctor notification email with a confirmation link.
- Handles doctor confirmation clicks and moves the lead to a confirmed state.

## Script properties to configure

Set these in Apps Script under Project Settings -> Script properties:

- `SPREADSHEET_ID` - Google Sheet that stores the lead data.
- `DOCTOR_EMAIL` - Destination for the doctor notification email.
- `TIMEZONE` - Defaults to `Asia/Kolkata`.
- `DEDUPE_WINDOW_MS` - Defaults to `300000`.
- `RAW_LEADS_SHEET_NAME` - Defaults to `Raw Leads`.
- `CONFIRMED_SHEET_NAME` - Defaults to `Confirmed Appointments`.
- `SENDER_NAME` - Defaults to `Dr. Amit Palve Appointments`.

## Setup notes

1. Create a new Apps Script project from the Apps Script editor.
2. Copy the contents of `Code.gs` into a script file in that project.
3. Set the script properties above in Project Settings.
4. Deploy as a web app and authorize access when prompted.
5. Copy the deployed web app URL into `VITE_APPS_SCRIPT_WEB_APP_URL` for the frontend.

## No-manifest path

This setup does not rely on a checked-in `appsscript.json` file.

Apps Script will manage scopes through the editor/runtime authorization flow when you first run or deploy the project. That keeps the repository independent from Apps Script manifest packaging.

`Code.gs` uses the deployed service URL when available and falls back to a `WEB_APP_URL` script property only if needed.

## Frontend endpoint

The booking modal reads the Apps Script endpoint from `VITE_APPS_SCRIPT_WEB_APP_URL`.