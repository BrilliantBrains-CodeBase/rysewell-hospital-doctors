import { Award, Users, Building } from "lucide-react";
import drPhoto from "@/assets/dr-amit-palve.png";

const AboutSection = () => (
  <section id="about" className="bg-background py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center fade-in-up">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <img src={drPhoto} alt="Dr. Amit Palve — Consultant Physician & Diabetologist" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <div className="fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 section-heading-underline">
            The Doctor Behind 1,00,000 Patient Recoveries
          </h2>
          <p className="text-primary font-medium mt-6 mb-4 text-sm">
            MBBS · MD · DNB in Medicine | Consultant Physician & Diabetologist | Founder, RyseWell Multispeciality Hospital
          </p>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
            <p>Dr. Amit Palve is not just a doctor — he is Pune's most sought-after Diabetologist and Consultant Physician, trusted by over one lakh patients for his rare combination of clinical precision, genuine empathy, and results that speak for themselves.</p>
            <p>Armed with MBBS, MD, and DNB qualifications in Medicine, Dr. Palve has dedicated his career to one of India's most pressing health crises: diabetes and its devastating complications. His clinical training at three of Pune's most prestigious institutions — Jehangir Hospital, Manipal Hospital, and Sahyadri Hospital — gave him expertise in managing complex, multi-system conditions that most physicians simply aren't equipped to handle.</p>
            <p>In December 2017, Dr. Palve turned his vision into reality — founding what is today RyseWell Multispeciality Hospital, a fully integrated center for diabetes care, cardiac health, and general medicine. Built from the ground up on a single belief: that every patient deserves world-class, personalised care — regardless of how complex their condition is.</p>
            <p>Over the past decade, Dr. Palve has built a reputation not just for treating diabetes — but for transforming how his patients live with it.</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-4 mt-6 italic text-foreground/80">
            "Diabetes doesn't have to define your life. With the right plan, the right support, and the right doctor — you can live fully, healthily, and confidently." — Dr. Amit Palve
          </blockquote>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: <Award size={14} />, label: "MBBS · MD · DNB in Medicine" },
              { icon: <Users size={14} />, label: "1,00,000+ Patients" },
              { icon: <Building size={14} />, label: "Founder, RyseWell Hospital" },
            ].map((b, i) => (
              <span key={i} className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
