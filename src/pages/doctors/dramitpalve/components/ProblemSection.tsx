import { motion } from "framer-motion"

interface ProblemSectionProps {
  onBookClick: () => void
}

const PROBLEMS = [
  {
    icon: "trending_up",
    title: "Uncontrolled Sugar",
    desc: "Spiking glucose levels despite regular medication can lead to fatigue and long-term worry.",
  },
  {
    icon: "emergency_home",
    title: "Fear of Complications",
    desc: "Constant anxiety about heart health, kidney function, and vision due to chronic diabetes.",
  },
  {
    icon: "assignment_late",
    title: "Confusing Plans",
    desc: "Generic diet charts that don't fit your lifestyle or cultural eating habits in Pune.",
  },
]

const ProblemSection = ({ onBookClick }: ProblemSectionProps) => {
  return (
    <section className="py-24 bg-[#f2f4f7]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold font-headline mb-16 text-gray-900"
        >
          Living With Diabetes Shouldn't Feel Like a Battle
        </motion.h2>

        <div className="md:hidden -mx-6 px-6 mb-12 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pr-6">
            {PROBLEMS.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="snap-start shrink-0 w-[84vw] bg-white p-8 rounded-3xl text-left border-b-4 border-[#005f9c]"
              >
                <span className="material-symbols-outlined text-4xl text-[#005f9c] mb-4 block">{p.icon}</span>
                <h3 className="text-xl font-bold mb-3 font-headline">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed font-body text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {PROBLEMS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl text-left border-b-4 border-[#005f9c]"
            >
              <span className="material-symbols-outlined text-4xl text-[#005f9c] mb-4 block">{p.icon}</span>
              <h3 className="text-xl font-bold mb-3 font-headline">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed font-body text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={onBookClick}
          className="bg-[#005f9c] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all font-body"
        >
          Book Your Consultation
        </motion.button>
      </div>
    </section>
  )
}

export default ProblemSection
