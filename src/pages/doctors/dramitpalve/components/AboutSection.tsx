import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — doctor image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="w-full max-w-105 md:max-w-110 aspect-10/11 bg-[#d0e4ff] rounded-[2.5rem] relative z-10 overflow-hidden shadow-xl">
            <img
              src="/DrAmitPalve.webp"
              alt="Dr. Amit Palve"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold font-headline leading-tight text-gray-900">
            The Doctor Behind 1,00,000 Patient Recoveries
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-body">
            With over 10 years of clinical experience, Dr. Amit Palve has established himself as a
            cornerstone of metabolic health in Pune. His journey through Manipal, Jehangir, and
            Sahyadri Hospitals has culminated in the founding of RyseWell Multispeciality.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {["Expertise", "Care", "Technology"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#eceef1] text-[#005f9c] font-bold rounded-full text-xs tracking-widest uppercase font-body"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#005f9c] pl-6 italic text-xl text-[#005f9c] font-headline py-2">
            "My goal is not just to treat sugar levels, but to help my patients reclaim their life and freedom."
          </blockquote>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
