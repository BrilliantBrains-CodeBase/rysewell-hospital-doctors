import { motion } from "framer-motion"

interface HowItWorksProps {
  onBookClick: () => void
}

const STEPS = [
  { num: "1", title: "Book", desc: "Select your time slot online or call our dedicated desk." },
  { num: "2", title: "Consult", desc: "In-depth 1-on-1 session with Dr. Palve at clinic or video call." },
  { num: "3", title: "Live Better", desc: "Follow the precision plan and watch your markers improve." },
]

const HowItWorks = ({ onBookClick }: HowItWorksProps) => {
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
          Get Expert Diabetes Care — In 3 Simple Steps
        </motion.h2>

        <div className="md:hidden -mx-6 px-6 mb-16 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pr-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="snap-start shrink-0 w-[84vw] bg-white rounded-3xl p-6"
              >
                <div className="w-20 h-20 bg-[#005f9c] rounded-full flex items-center justify-center text-white mx-auto mb-5 text-2xl font-bold shadow-lg font-headline">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-2 font-headline text-gray-900">{step.title}</h4>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connector line between steps */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#005f9c]/20" />

          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative z-10 bg-[#f2f4f7] px-4"
            >
              <div className="w-24 h-24 bg-[#005f9c] rounded-full flex items-center justify-center text-white mx-auto mb-6 text-3xl font-bold shadow-lg font-headline">
                {step.num}
              </div>
              <h4 className="text-xl font-bold mb-2 font-headline text-gray-900">{step.title}</h4>
              <p className="text-gray-500 font-body text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={onBookClick}
          className="bg-[#005f9c] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform font-body"
        >
          Book My Appointment Now
        </motion.button>
      </div>
    </section>
  )
}

export default HowItWorks
