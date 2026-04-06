import { Calendar, Monitor, Phone } from "lucide-react";

interface Props { onBookClick: () => void; }

const FinalCTA = ({ onBookClick }: Props) => (
  <section className="hero-gradient py-20 md:py-28">
    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6 fade-in-up section-heading-underline mx-auto block w-fit">
        1,00,000 Patients Have Already Made the Decision. Now It's Your Turn.
      </h2>
      <p className="text-primary-foreground/70 mb-10 fade-in-up leading-relaxed">
        Diabetes complications don't announce themselves — they build silently, over months and years, until they become a crisis. The best time to see Dr. Palve was when your sugar first went out of range. The second best time is today. Book your consultation now — in-clinic in Pune or via video from anywhere in India.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up flex-wrap">
        <button onClick={onBookClick} className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <Calendar size={18} /> Book Clinic Appointment — Pune
        </button>
        <button onClick={onBookClick} className="border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <Monitor size={18} /> Book Video Consultation — All India
        </button>
        <a href="tel:+917709862164" className="border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <Phone size={18} /> Call Now: +91 77098 62164
        </a>
      </div>
      <p className="text-primary-foreground/50 text-xs mt-6 fade-in-up">
        Appointments confirmed within minutes · In-Clinic & Online Available · Consultations in Marathi, Hindi & English
      </p>
    </div>
  </section>
);

export default FinalCTA;
