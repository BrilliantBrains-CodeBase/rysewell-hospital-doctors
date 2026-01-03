import { motion } from "framer-motion"
import {
  Video,
  Globe,
  Package,
  RefreshCcw,
} from "lucide-react"

const countries = [
  "AE UAE",
  "GB UK",
  "US USA",
  "AU Australia",
  "CA Canada",
  "SG Singapore",
  "DE Germany",
  "NZ New Zealand",
]

const steps = [
  {
    step: "STEP 01",
    icon: Video,
    title: "Book Online Consultation",
    description:
      "Schedule a convenient time slot for your video consultation.",
  },
  {
    step: "STEP 02",
    icon: Globe,
    title: "Virtual Consultation",
    description:
      "Connect with Dr. Vidya Palve via secure video call from anywhere.",
  },
  {
    step: "STEP 03",
    icon: Package,
    title: "Receive Treatment Plan",
    description:
      "Get personalized remedies with guidance on obtaining medicines.",
  },
  {
    step: "STEP 04",
    icon: RefreshCcw,
    title: "Continuous Follow-up",
    description:
      "Regular check-ins to monitor progress and adjust treatment.",
  },
]

const InternationalPatientsSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-5 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            International Patients
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Healing Knows
            <br />
            <span className="text-[#0F4C81]">No Boundaries</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Connect with Dr. Vidya Palve from anywhere in the world. Our
            time-zone friendly consultations make quality homeopathic care
            accessible globally.
          </p>
        </motion.div>

        {/* ================= COUNTRIES ================= */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {countries.map((country, index) => (
            <motion.span
              key={country}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              {country}
            </motion.span>
          ))}
        </div>

        {/* ================= STEPS ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-xs font-semibold text-gray-400">
                  {step.step}
                </p>

                <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default InternationalPatientsSection
