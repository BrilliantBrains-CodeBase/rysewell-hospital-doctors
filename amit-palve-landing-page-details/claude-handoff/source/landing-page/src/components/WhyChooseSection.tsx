import { CheckCircle, ShieldCheck, GraduationCap, Building, MonitorSmartphone, Languages } from "lucide-react";

const reasons = [
  { icon: <CheckCircle size={28} />, title: "1,00,000+ Patients Successfully Treated", desc: "A track record that very few diabetologists in Pune — or Maharashtra — can match." },
  { icon: <ShieldCheck size={28} />, title: "DNB-Qualified Diabetes Specialist", desc: "Not a general physician dabbling in diabetes — a formally trained, board-certified specialist whose entire focus is metabolic and diabetic care." },
  { icon: <GraduationCap size={28} />, title: "Trained at Pune's Top 3 Hospitals", desc: "Jehangir, Manipal & Sahyadri — rigorous clinical environments that shaped a doctor capable of handling even the most complex cases." },
  { icon: <Building size={28} />, title: "Founder of an Integrated Hospital", desc: "Dr. Palve didn't just practice medicine — he built an entire multispeciality hospital around the gaps he saw in diabetes care. That's a different level of commitment." },
  { icon: <MonitorSmartphone size={28} />, title: "Both In-Clinic & Video Consultations", desc: "Accessible whether you're in Pune's Kothrud or a village in Vidarbha. Distance is no longer a barrier to expert care." },
  { icon: <Languages size={28} />, title: "Speaks Your Language — Literally", desc: "Consultations in Marathi, Hindi, and English. Because understanding your doctor shouldn't require a dictionary." },
];

const WhyChooseSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12 section-heading-underline mx-auto block w-fit fade-in-up">
        Why 1,00,000+ Patients Trust Dr. Amit Palve With Their Health
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="bg-background rounded-xl p-6 shadow-md card-hover fade-in-up border border-border">
            <div className="text-primary mb-3">{r.icon}</div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
