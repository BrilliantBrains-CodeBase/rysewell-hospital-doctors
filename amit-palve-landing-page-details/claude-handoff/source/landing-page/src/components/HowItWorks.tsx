import { CalendarCheck, FileText, ClipboardList, HeartHandshake } from "lucide-react";

const steps = [
  { num: 1, icon: <CalendarCheck size={28} />, title: "Book Your Appointment", desc: "Choose an in-clinic visit at RyseWell Multispeciality Hospital, Pune — or a video consultation from anywhere in India. Instant confirmation. Zero hassle." },
  { num: 2, icon: <FileText size={28} />, title: "Share Your Health History", desc: "Bring or upload your past reports, prescriptions, and test results. Dr. Palve reviews everything — not just your latest sugar reading." },
  { num: 3, icon: <ClipboardList size={28} />, title: "Receive Your Personalised Plan", desc: "Walk away with a treatment plan built specifically for you — your condition, your lifestyle, your goals. No templates. No guesswork." },
  { num: 4, icon: <HeartHandshake size={28} />, title: "Stay Supported, Long-Term", desc: "Follow-up appointments, medication adjustments, complication screening, and ongoing monitoring — Dr. Palve stays with you through every stage of your health journey." },
];

const HowItWorks = () => (
  <section className="bg-cream py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12 section-heading-underline mx-auto block w-fit fade-in-up">
        Your Path to Better Health — In 4 Simple Steps
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="text-center fade-in-up relative">
            <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-4 text-primary-foreground">
              {s.icon}
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
