import { Calendar, Monitor } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroProps) => (
  <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-white/5 blur-xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-white/3 blur-2xl" />

    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-0 w-full relative z-10">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 fade-in-up">
          Pune's Most Trusted Diabetologist — Chosen by 1,00,000+ Patients.
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-6 fade-in-up font-body leading-relaxed">
          Expert Physician & Diabetologist Specialising in Diabetes Complications, Metabolic Disorders & Preventive Care — Available In-Person in Pune & Online Across India.
        </p>
        <p className="text-primary-foreground/60 text-sm md:text-base mb-8 fade-in-up font-body">
          ★★★★★ 1,00,000+ Patients Treated · 10 Years of Clinical Excellence · In-Clinic & Video Consultations · Marathi · Hindi · English
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
          <button onClick={onBookClick} className="btn-primary text-base md:text-lg flex items-center justify-center gap-2">
            <Calendar size={20} /> Book Clinic Visit — Pune
          </button>
          <button onClick={onBookClick} className="btn-outline-primary text-base md:text-lg flex items-center justify-center gap-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Monitor size={20} /> Start Video Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
