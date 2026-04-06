import { Check, Monitor } from "lucide-react";

interface Props { onBookClick: () => void; }

const checklist = [
  "Review your complete medical history, reports & current medications",
  "Diagnose the root cause behind uncontrolled blood sugar or symptoms",
  "Deliver a fully personalised treatment and medication plan",
  "Recommend dietary, lifestyle & monitoring adjustments",
  "Answer every question you have — in Marathi, Hindi or English",
  "Issue digital prescriptions valid across India",
];

const VideoConsultSection = ({ onBookClick }: Props) => (
  <section id="video-consult" className="bg-secondary py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-3 section-heading-underline mx-auto block w-fit fade-in-up">
        Can't Visit the Clinic? Dr. Palve Comes to You — Online.
      </h2>
      <p className="text-primary text-center mb-4 fade-in-up font-medium">World-class diabetes care, now accessible from your home — anywhere in India.</p>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 fade-in-up">
        Whether you're in another city, managing a busy schedule, or simply prefer the comfort of home — Dr. Amit Palve's Video Consultation service brings expert medical care directly to your screen.
      </p>
      <div className="max-w-2xl mx-auto mb-10">
        {checklist.map((c, i) => (
          <div key={i} className="flex items-start gap-3 mb-3 fade-in-up">
            <Check className="text-primary mt-0.5 shrink-0" size={18} />
            <span className="text-foreground/80">{c}</span>
          </div>
        ))}
      </div>
      <p className="text-foreground font-bold text-center text-lg mb-4 fade-in-up">
        No travel. No waiting rooms. No compromise on quality of care.
      </p>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 fade-in-up text-sm">
        Patients from across Maharashtra, Nashik, Mumbai, Nagpur and beyond consult Dr. Palve regularly via video — and receive the same depth of care as an in-person visit.
      </p>
      <div className="text-center fade-in-up">
        <button onClick={onBookClick} className="btn-primary text-lg flex items-center gap-2 mx-auto">
          <Monitor size={20} /> Book Your Video Consultation Now
        </button>
        <p className="text-muted-foreground text-xs mt-4">Slots available on weekdays & weekends · Confirmation within minutes · Secure, private video platform</p>
      </div>
    </div>
  </section>
);

export default VideoConsultSection;
