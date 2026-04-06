# Rysewell Structure Map (Dr Amit Integration)

Use this as the target implementation structure inside the Rysewell repository.

## Existing Pattern To Mirror
- Existing doctor page path pattern:
  - src/pages/doctors/drvidya/
  - src/pages/doctors/drvidya/components/
  - src/pages/doctors/drvidya/DrVidyaPalve.tsx

## New Target For Dr Amit
Create Dr Amit page using the same folder and naming approach:

- src/pages/doctors/dramitpalve/
- src/pages/doctors/dramitpalve/components/
- src/pages/doctors/dramitpalve/DrAmitPalve.tsx

## Component Mapping (Suggested)
Map source landing components into Dr Amit doctor-page components under the new folder.

- Navbar
- HeroSection
- TrustBar
- ProblemSection
- AboutSection
- StatsStrip
- TreatmentsSection
- VideoConsultSection
- WhyChooseSection
- HowItWorks
- TestimonialsSection
- FAQSection
- FinalCTA
- Footer
- BookingModal

## Routing/Entry Integration Rule
- Follow the same import and route registration style currently used by DrVidyaPalve in the Rysewell app.
- Do not change Dr Vidya page behavior.
- Add Dr Amit page as a parallel doctor page, not as a replacement.

## Shared Assets and Styling
- Keep styles and utilities consistent with existing Rysewell architecture.
- If Dr Vidya uses shared layout wrappers, reuse the same pattern for Dr Amit.
- If common doctor-page components exist, prefer reuse over duplication.

## Backend Integration Rule
- Keep lead submission connected to Google Apps Script via VITE_APPS_SCRIPT_WEB_APP_URL.
- Preserve form payload and validation parity from lead-form-spec.md.
