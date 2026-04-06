import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Three years of uncontrolled diabetes, four different doctors, and nothing worked. After just 6 months with Dr. Palve, my HbA1c dropped from 10.4 to 6.7. I finally feel like myself again.", name: "Suresh M.", location: "Pune" },
  { text: "He explained everything in Marathi — simply, patiently, and without making me feel judged. His treatment plan was realistic and it actually worked. My blood pressure and sugar are both controlled now.", name: "Sunita K.", location: "Hadapsar" },
  { text: "I was sceptical about a video consultation. But Dr. Palve reviewed all my reports, spent 30 minutes with me, and gave me a complete plan — all on a video call from Nashik. I didn't miss anything compared to a clinic visit.", name: "Rahul D.", location: "Nashik" },
  { text: "My mother is 68 and had multiple diabetes complications. Dr. Palve managed everything — her sugar, her kidney markers, her thyroid — with one cohesive plan. He's the only doctor she trusts now.", name: "Priya S.", location: "Nagar Road, Pune" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-secondary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 section-heading-underline mx-auto block w-fit fade-in-up">
          1,00,000+ Reasons to Trust Dr. Amit Palve. Here Are a Few.
        </h2>
        <div className="relative min-h-[200px] fade-in-up">
          <div className="bg-background rounded-xl p-8 border border-border shadow-md relative">
            <Quote className="text-primary/20 absolute top-4 left-4" size={40} />
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-amber-400" size={16} />)}
            </div>
            <p className="text-foreground/90 text-lg italic leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <p className="text-primary font-semibold">— {testimonials[current].name}, {testimonials[current].location}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
