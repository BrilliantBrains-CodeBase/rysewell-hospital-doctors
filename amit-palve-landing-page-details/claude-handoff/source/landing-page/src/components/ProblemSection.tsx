import { RefreshCw, AlertTriangle, Frown } from "lucide-react";

const ProblemSection = () => (
  <section className="bg-secondary py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center fade-in-up section-heading-underline mx-auto block w-fit">
        Your Blood Sugar Numbers Keep Changing. Your Doctor's Advice Doesn't.
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12 fade-in-up leading-relaxed">
        You're checking your sugar every day. Avoiding sweets. Taking your medication. And yet — your HbA1c is still not where it should be. Sound familiar? Most diabetes patients in India receive the same standard prescription and the same generic advice — without anyone actually looking at why their sugar isn't controlled, what complications may already be developing, or how to build a long-term plan that works for their real life. That changes when you consult Dr. Amit Palve.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <RefreshCw size={32} />, title: "Uncontrolled blood sugar despite medication" },
          { icon: <AlertTriangle size={32} />, title: "Silent complications developing unnoticed" },
          { icon: <Frown size={32} />, title: "Generic advice that doesn't work for your life" },
        ].map((c, i) => (
          <div key={i} className="bg-background rounded-xl p-6 text-center card-hover fade-in-up border border-border shadow-sm">
            <div className="text-primary mb-4 flex justify-center">{c.icon}</div>
            <p className="text-foreground font-semibold">{c.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
