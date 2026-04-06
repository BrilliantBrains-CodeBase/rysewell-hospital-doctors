import { motion } from "framer-motion"

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-24 bg-[#d0e4ff]/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold font-headline mb-16 text-center text-gray-900"
        >
          Comprehensive Care for Pune
        </motion.h2>

        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pr-6">
            {/* Diabetology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="snap-start shrink-0 w-[84vw] bg-white p-8 rounded-4xl shadow-sm"
            >
              <div className="w-16 h-16 bg-[#005f9c]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#005f9c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-headline text-gray-900">Diabetology</h3>
              <ul className="space-y-4">
                {[
                  "Type 1 & Type 2 Diabetes Management",
                  "Gestational Diabetes (Pregnancy)",
                  "Diabetic Foot & Complication Care",
                  "Diabetes Reversal Consultation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-500 font-body text-sm">
                    <span className="material-symbols-outlined text-[#005f9c] text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* General Physician */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="snap-start shrink-0 w-[84vw] bg-white p-8 rounded-4xl shadow-sm"
            >
              <div className="w-16 h-16 bg-[#005f9c]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#005f9c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-headline text-gray-900">General Physician</h3>
              <ul className="space-y-4">
                {[
                  "Hypertension (BP) & Thyroid Disorders",
                  "Fever, Infections & Seasonal Illness",
                  "Vitamin Deficiencies & Lifestyle Health",
                  "Annual Executive Health Checkups",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-500 font-body text-sm">
                    <span className="material-symbols-outlined text-[#005f9c] text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {/* Diabetology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-[#005f9c]/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#005f9c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 font-headline text-gray-900">Diabetology</h3>
            <ul className="space-y-4">
              {[
                "Type 1 & Type 2 Diabetes Management",
                "Gestational Diabetes (Pregnancy)",
                "Diabetic Foot & Complication Care",
                "Diabetes Reversal Consultation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-500 font-body text-sm">
                  <span className="material-symbols-outlined text-[#005f9c] text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* General Physician */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-[#005f9c]/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#005f9c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 font-headline text-gray-900">General Physician</h3>
            <ul className="space-y-4">
              {[
                "Hypertension (BP) & Thyroid Disorders",
                "Fever, Infections & Seasonal Illness",
                "Vitamin Deficiencies & Lifestyle Health",
                "Annual Executive Health Checkups",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-500 font-body text-sm">
                  <span className="material-symbols-outlined text-[#005f9c] text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentsSection
