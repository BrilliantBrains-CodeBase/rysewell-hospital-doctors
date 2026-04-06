# Claude Frontend Agent Prompt

You are a senior frontend engineer working inside the Rysewell website repository.

Your task is to recreate the Dr. Amit Palve landing page using the attached handoff package with high behavioral and visual fidelity.

## Inputs You Must Use
- source/landing-page (React source files)
- source/content-map.md
- source/rysewell-structure-map.md
- design/stitch/dr-amit-palve-landing.html
- design/stitch/dr-amit-palve-mobile.html
- forms/lead-form-spec.md
- apps-script/Code.gs
- apps-script/integration-spec.md

## Rysewell Placement (Mandatory)
This implementation must be added in the doctors area with the same structure style as Dr Vidya.

- Existing reference structure in Rysewell:
  - src/pages/doctors/drvidya/
  - src/pages/doctors/drvidya/components/
  - src/pages/doctors/drvidya/DrVidyaPalve.tsx

- Required new structure for Dr Amit:
  - src/pages/doctors/dramitpalve/
  - src/pages/doctors/dramitpalve/components/
  - src/pages/doctors/dramitpalve/DrAmitPalve.tsx

Do not replace or modify Dr Vidya page behavior. Add Dr Amit page as a parallel doctor page.

## Non-Negotiable Requirements
1. Keep section order exactly as defined in source/content-map.md.
2. Preserve booking funnel behavior and CTA placement.
3. Keep Google Apps Script as the primary lead submission backend.
4. Preserve lead form fields, validation rules, and success/error/loading states.
5. Preserve request contract: action=intake and metadata payload fields.
6. Match mobile and desktop layout intent from stitch references.
7. Preserve trust-first medical tone and key conversion copy.
8. Follow the Dr Vidya page architecture pattern for foldering, composition style, and route registration style.

## Technical Implementation Guidance
- Implement in the Rysewell code style and architecture.
- Keep doctor-page composition consistent with DrVidyaPalve implementation style.
- Keep component-level separation by section for maintainability.
- Keep accessibility standards:
  - semantic headings and landmarks
  - keyboard accessible modal
  - label association and focus visibility
  - adequate color contrast
- Keep performance reasonable on mobile:
  - avoid heavy JS animation loops
  - optimize image usage
  - keep bundle additions minimal

## Lead Form Integration
Use env variable VITE_APPS_SCRIPT_WEB_APP_URL and submit via GET with query parameters including action=intake.

Expected success condition:
- HTTP ok
- JSON has ok=true and status=received

On failure:
- show user-facing form error state and preserve current UX fallback behavior.

## Delivery Checklist
1. Landing page route renders all sections in correct order.
2. Booking modal opens from all CTA triggers.
3. Form validation parity achieved.
4. Apps Script submission works with expected payload shape.
5. Responsive behavior verified for mobile and desktop.
6. No TypeScript/build errors.
7. Dr Amit page is wired into routes using the same pattern as Dr Vidya.

## Output Required
- Commit-ready frontend code
- Small implementation note summarizing:
  - files created/updated
  - any deviations from source and why
  - how to configure env var
  - test steps used
