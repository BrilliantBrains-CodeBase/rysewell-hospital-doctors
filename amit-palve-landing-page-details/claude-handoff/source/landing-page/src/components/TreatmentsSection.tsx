import { Droplets, HeartPulse, ChevronRight } from "lucide-react";

const diabetology = [
  "Type 1 & Type 2 Diabetes Management",
  "Pre-Diabetes, Insulin Resistance & Metabolic Syndrome",
  "Insulin Therapy Initiation & Optimisation",
  "HbA1c Control & Long-Term Glycaemic Management",
  "Diabetic Neuropathy (Nerve Damage)",
  "Diabetic Nephropathy (Kidney Complications)",
  "Diabetic Retinopathy Monitoring & Prevention",
  "Gestational Diabetes (Diabetes in Pregnancy)",
  "Obesity-Linked Diabetes & Lifestyle Disorders",
];

const general = [
  "Hypertension & Blood Pressure Management",
  "Thyroid Disorders (Hypothyroidism & Hyperthyroidism)",
  "Viral Fevers, Infections & Acute Illnesses",
  "Vitamin Deficiencies (B12, D3, Iron)",
  "Preventive Health Screenings & Annual Check-Ups",
  "Chronic Disease Monitoring & Long-Term Care",
];

const TreatmentsSection = () => (
  <section id="treatments" className="bg-cream py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-3 section-heading-underline mx-auto block w-fit fade-in-up">
        Comprehensive Care for Diabetes, Metabolism & General Health
      </h2>
      <p className="text-muted-foreground text-center mb-12 fade-in-up">
        Whether you're newly diagnosed or managing long-term complications — Dr. Palve has the expertise to help.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background rounded-xl p-8 shadow-lg card-hover fade-in-up border border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Droplets className="text-primary" size={24} /> Diabetology — Primary Specialisation
          </h3>
          <ul className="space-y-2">
            {diabetology.map((t, i) => <li key={i} className="text-muted-foreground text-sm flex items-start gap-2"><ChevronRight className="text-primary mt-0.5 shrink-0" size={14} />{t}</li>)}
          </ul>
        </div>
        <div className="bg-background rounded-xl p-8 shadow-lg card-hover fade-in-up border border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <HeartPulse className="text-primary" size={24} /> General Physician & Internal Medicine
          </h3>
          <ul className="space-y-2">
            {general.map((t, i) => <li key={i} className="text-muted-foreground text-sm flex items-start gap-2"><ChevronRight className="text-primary mt-0.5 shrink-0" size={14} />{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
