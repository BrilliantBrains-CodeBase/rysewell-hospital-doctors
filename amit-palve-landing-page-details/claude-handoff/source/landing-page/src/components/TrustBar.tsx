import { Building2, GraduationCap, UserCheck, Monitor, Star } from "lucide-react";

const stats = [
  { icon: <Building2 className="text-primary" size={24} />, label: "RyseWell Multispeciality Hospital" },
  { icon: <GraduationCap className="text-primary" size={24} />, label: "MBBS · MD · DNB in Medicine" },
  { icon: <UserCheck className="text-primary" size={24} />, label: "10 Years Experience" },
  { icon: <Monitor className="text-primary" size={24} />, label: "Video Consultations Available" },
  { icon: <Star className="text-primary" size={24} />, label: "1,00,000+ Patients Treated" },
];

const TrustBar = () => (
  <section className="bg-background py-8 border-y border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3 justify-center text-center md:text-left fade-in-up">
            {s.icon}
            <span className="text-sm font-medium text-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
