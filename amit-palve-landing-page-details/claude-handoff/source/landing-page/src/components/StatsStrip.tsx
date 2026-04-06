const stats = [
  { value: 100000, suffix: "+", label: "Patients Treated", prefix: "" },
  { value: 10, suffix: "+", label: "Years of Experience", prefix: "" },
  { value: 3, suffix: "", label: "Premier Hospital Trainings", prefix: "" },
  { value: 1, suffix: "", label: "Integrated Hospital Founded", prefix: "" },
  { value: 2, suffix: "", label: "Ways to Consult — Clinic & Online", prefix: "" },
];

const StatsStrip = () => (
  <section className="bg-primary py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="fade-in-up">
            <div
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground"
              data-countup
              data-target={s.value}
              data-suffix={s.suffix}
              data-prefix={s.prefix}
            >
              0
            </div>
            <p className="text-primary-foreground/70 text-sm font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
