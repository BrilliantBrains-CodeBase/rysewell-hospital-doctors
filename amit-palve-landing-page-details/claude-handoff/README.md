# Claude Handoff Package for Rysewell Landing Page

This folder packages the existing Dr. Amit Palve landing page implementation and all supporting references needed to recreate it in the Rysewell website repository using a Claude frontend agent.

## Folder Structure
- source/
  - landing-page/ (current React implementation snapshot)
  - content-map.md (section/copy mapping)
  - rysewell-structure-map.md (target placement in src/pages/doctors)
- design/
  - stitch/ (desktop and mobile stitch HTML references)
  - visual-parity-checklist.md
- forms/
  - lead-form-spec.md
- apps-script/
  - Code.gs
  - README.md
  - integration-spec.md
- prompts/
  - claude-frontend-agent.md

## Attach These Files/Folders To Rysewell Task
1. Entire source/landing-page folder
2. source/content-map.md
3. source/rysewell-structure-map.md
4. design/stitch/dr-amit-palve-landing.html
5. design/stitch/dr-amit-palve-mobile.html
6. design/visual-parity-checklist.md
7. forms/lead-form-spec.md
8. apps-script/Code.gs
9. apps-script/README.md
10. apps-script/integration-spec.md
11. prompts/claude-frontend-agent.md

## Rysewell Target Placement
- Add Dr Amit page in doctors area with the same structure as Dr Vidya:
  - src/pages/doctors/dramitpalve/
  - src/pages/doctors/dramitpalve/components/
  - src/pages/doctors/dramitpalve/DrAmitPalve.tsx
- Keep Dr Vidya implementation untouched.
- Register Dr Amit route using the same routing pattern already used for Dr Vidya.

## Existing Landing Data Included
- Full section component code and page composition
- Existing copy hierarchy and trust messaging
- Doctor image asset and supporting styles
- Build/config context from current repo

## Lead Form Details Included
- Field definitions and required/optional rules
- Validation patterns (phone/email)
- Payload contract and expected success response
- Error handling expectations

## Apps Script Design and Working Included
- Intake endpoint contract and action routing
- Google Sheet write model and dedupe behavior
- Doctor confirmation flow and patient notification sequence
- Required script properties and deployment guidance

## Recommended Execution Sequence in Rysewell
1. Read prompts/claude-frontend-agent.md fully.
2. Attach all artifacts listed above to Claude run.
3. Implement landing page route and components.
4. Place implementation under src/pages/doctors/dramitpalve using Dr Vidya pattern.
5. Configure VITE_APPS_SCRIPT_WEB_APP_URL in env.
6. Validate desktop/mobile parity and booking flow.

## Acceptance Criteria
- Section order parity maintained
- CTA and booking funnel parity maintained
- Form validation and submit behavior parity maintained
- Apps Script integration functional
- Build succeeds with no type errors
