# Lead Form Specification

Source of truth: src/components/BookingModal.tsx

## Fields
1. name
- Type: text
- Required: yes
- Rule: non-empty after trim

2. phone
- Type: text
- Required: yes
- Rule: must match regex ^[6-9]\d{9}$
- Meaning: valid 10-digit Indian mobile number starting with 6-9

3. email
- Type: email
- Required: no
- Rule: if present, must match ^[^\s@]+@[^\s@]+\.[^\s@]+$

4. type
- Type: select
- Required: no
- Default: In-Clinic
- Allowed values: In-Clinic, Video Consultation

5. date
- Type: date
- Required: yes

6. timeSlot
- Type: select
- Required: yes
- Current values:
  - 9:00 AM - 10:00 AM
  - 10:00 AM - 11:00 AM
  - 11:00 AM - 12:00 PM
  - 12:00 PM - 1:00 PM
  - 4:00 PM - 5:00 PM
  - 5:00 PM - 6:00 PM
  - 6:00 PM - 7:00 PM

7. message
- Type: textarea
- Required: no

## Submission
- Method: GET
- Endpoint: import.meta.env.VITE_APPS_SCRIPT_WEB_APP_URL
- Required query param: action=intake

## Payload Shape
{
  name: string,
  phone: string,
  email: string,
  type: string,
  date: string,
  timeSlot: string,
  message: string,
  leadId: string,                 // lead_ + uuid
  status: "pending_confirmation",
  source: "website_booking_modal",
  timezone: "Asia/Kolkata",
  submittedAt: string             // ISO timestamp
}

## Success Condition
- HTTP response ok
- Parsed JSON response has:
  - ok === true
  - status === "received"

## UI States
- Default form state
- Inline validation error state
- Loading submit state (button disabled + spinner)
- Success state (confirmation message)
- Failure state (form-level error)
