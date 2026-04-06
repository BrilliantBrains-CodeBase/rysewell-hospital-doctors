import { MapPin, Phone, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Dr. Amit Palve</h3>
      <p className="text-primary-foreground/60 text-sm mb-4">
        MBBS · MD · DNB (Medicine) | Consultant Physician & Diabetologist | Founder & Director, RyseWell Multispeciality Hospital, Pune
      </p>
      <div className="flex items-center justify-center gap-4 text-primary-foreground/50 text-sm mb-6 flex-wrap">
        <span className="flex items-center gap-1"><MapPin size={14} /> Pune, Maharashtra</span>
        <span className="flex items-center gap-1"><Phone size={14} /> +91 77098 62164</span>
        <span className="flex items-center gap-1"><Globe size={14} /> rysewellhospitals.com</span>
      </div>
      <div className="flex justify-center gap-6 mb-6">
        {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
          <a key={s} href="#" className="text-primary-foreground/40 hover:text-primary transition-colors text-sm">{s}</a>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="text-primary-foreground/30 text-xs">
          © 2025 Dr. Amit Palve. All Rights Reserved. | Designed by Brilliant Brains
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
