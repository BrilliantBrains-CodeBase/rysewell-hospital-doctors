import { motion } from "framer-motion"
import {
  ClipboardList,
  Search,
  Pill,
  LineChart,
} from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "In-Depth Consultation",
    description:
      "Comprehensive review of your health history, symptoms, lifestyle, and emotional state.",
  },
  {
    step: "02",
    icon: Search,
    title: "Root-Cause Analysis",
    description:
      "Identifying the underlying factors contributing to your health concerns.",
  },
  {
    step: "03",
    icon: Pill,
    title: "Personalised Treatment",
    description:
      "Custom-selected homeopathic remedies matched to your unique constitution.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Continuous Monitoring",
    description:
      "Regular follow-ups to track progress and refine your treatment plan.",
  },
]

const TreatmentProcessSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-5 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            How Treatment Works
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Path to
            <br />
            <span className="text-[#0F4C81]">Natural Healing</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A systematic, patient-centered approach that ensures comprehensive
            care from your first consultation to complete recovery.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mt-28">

          {/* Animated Line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[60%] left-0 right-0 h-px bg-gray-300 origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step Number (background) */}
                  <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-6xl font-extrabold text-gray-300">
                    {item.step}
                  </span>

                  {/* Icon ABOVE the line */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.2,
                    }}
                    className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] relative z-10"
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TreatmentProcessSection
