import { motion } from "framer-motion"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#d0e4ff]/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold font-headline text-center mb-16 text-gray-900"
        >
          1,00,000+ Reasons to Trust Dr. Amit Palve
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-sm relative"
        >
          {/* Large quote mark */}
          <div className="absolute -top-6 -left-6 text-[#005f9c] opacity-20">
            <span className="material-symbols-outlined" style={{ fontSize: "9rem", lineHeight: 1 }}>
              format_quote
            </span>
          </div>

          <div className="relative z-10 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl font-headline italic leading-relaxed text-gray-800 mb-8">
              "I had uncontrolled Type 2 diabetes for 8 years before meeting Dr. Palve. His
              detailed plan and constant encouragement helped me bring my HbA1c from 9.5 to 6.2
              in just 4 months. He doesn't just give pills; he gives hope."
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#d0e4ff] flex items-center justify-center font-bold font-headline text-[#005f9c] text-xl">
                S
              </div>
              <div className="text-left">
                <p className="font-bold font-body text-gray-900">Suresh M.</p>
                <p className="text-sm text-gray-500 font-body">Pune Resident, Patient since 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
