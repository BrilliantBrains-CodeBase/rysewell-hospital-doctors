import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Who is Dr. Amit Palve?", a: "Dr. Amit Palve is a Consultant Physician and Diabetologist based in Pune with MBBS, MD, and DNB qualifications in Medicine. He is the Founder of RyseWell Multispeciality Hospital and has treated over 1,00,000 patients over a 10-year career." },
  { q: "What conditions does Dr. Amit Palve treat?", a: "Dr. Palve specialises in Type 1 and Type 2 diabetes, pre-diabetes, insulin therapy, diabetic neuropathy, nephropathy, retinopathy, gestational diabetes, hypertension, thyroid disorders, and general internal medicine." },
  { q: "Does Dr. Amit Palve offer online or video consultations?", a: "Yes. Dr. Palve offers full video consultations for patients across India — including report review, diagnosis, personalised treatment plans, and digital prescriptions. The quality of care is equal to an in-person visit." },
  { q: "How do I book a video consultation with Dr. Amit Palve?", a: "Click the \"Book Video Consultation\" button on this page, choose your preferred date and time, and receive instant confirmation." },
  { q: "Where is Dr. Amit Palve's clinic located?", a: "Dr. Palve practices at RyseWell Multispeciality Hospital, Pune, Maharashtra." },
  { q: "What makes Dr. Palve different from other diabetologists in Pune?", a: "Dr. Palve has treated over 1 lakh patients, holds a DNB specialisation in Medicine, trained at Jehangir, Manipal and Sahyadri hospitals, and founded his own integrated hospital. His combination of clinical depth and patient-first approach is unmatched." },
  { q: "What languages does Dr. Amit Palve speak?", a: "Dr. Palve conducts consultations in Marathi, Hindi, and English." },
  { q: "Is Dr. Amit Palve available on weekends?", a: "Yes, both in-clinic and video consultation slots are available on weekdays and weekends. Check availability when booking." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12 section-heading-underline mx-auto block w-fit fade-in-up">
          Got Questions? Dr. Palve Has Answers.
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-secondary rounded-xl border border-border overflow-hidden fade-in-up">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span>{f.q}</span>
                {openIndex === i ? <Minus className="text-primary shrink-0" size={18} /> : <Plus className="text-primary shrink-0" size={18} />}
              </button>
              <div className={`faq-answer px-6 ${openIndex === i ? "open" : ""}`}>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
