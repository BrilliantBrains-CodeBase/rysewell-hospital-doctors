import { motion } from "framer-motion"

const REASONS = [
  { icon: "verified_user", title: "Hospital Affiliations", desc: "Direct association with Pune's top-tier hospitals like Jehangir & Manipal." },
  { icon: "person_apron", title: "Patient-First Philosophy", desc: "Treatment plans designed around your food preferences and daily schedule." },
  { icon: "clinical_notes", title: "Evidence Based Care", desc: "The latest protocols in Diabetology focused on science and outcomes." },
  { icon: "schedule", title: "Minimal Wait Times", desc: "Respecting your time with organized appointment scheduling at RyseWell." },
  { icon: "devices", title: "Telehealth Integrated", desc: "Consult from the comfort of your home via seamless video calls." },
  { icon: "monitoring", title: "Holistic Tracking", desc: "Regular monitoring of all metabolic markers, not just fasting sugar." },
]

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold font-headline text-center mb-16 text-gray-900"
        >
          Why 1,00,000+ Patients Trust Dr. Amit Palve
        </motion.h2>

        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pr-6">
            {REASONS.map((r, idx) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="snap-start shrink-0 w-[84vw] p-8 rounded-3xl bg-[#f7f9fc] border border-gray-200/60 transition-all group"
              >
                <span className="material-symbols-outlined text-3xl text-[#005f9c] mb-4 block group-hover:scale-110 transition-transform">
                  {r.icon}
                </span>
                <h4 className="font-bold text-lg mb-2 font-headline text-gray-900">{r.title}</h4>
                <p className="text-sm text-gray-500 font-body leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {REASONS.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="p-8 rounded-3xl bg-[#f7f9fc] border border-gray-200/60 hover:border-[#005f9c]/30 transition-all group"
            >
              <span className="material-symbols-outlined text-3xl text-[#005f9c] mb-4 block group-hover:scale-110 transition-transform">
                {r.icon}
              </span>
              <h4 className="font-bold text-lg mb-2 font-headline text-gray-900">{r.title}</h4>
              <p className="text-sm text-gray-500 font-body leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
