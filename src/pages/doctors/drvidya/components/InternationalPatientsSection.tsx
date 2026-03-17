import { motion } from "framer-motion"

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

// ✅ Just update these two paths with your actual images
const STEPS_IMAGE_DESKTOP = "/Internationaldesktop.jpg"   // shown on md+ screens
const STEPS_IMAGE_MOBILE  = "/Internationmobile.jpg"    // shown on small screens

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

        {/* ================= STEPS IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          {/* Desktop image — hidden on mobile */}
          <img
            src={STEPS_IMAGE_DESKTOP}
            alt="4 steps to get started: Book consultation, Virtual consultation, Receive treatment plan, Continuous follow-up"
            className="hidden md:block w-full object-contain"
          />

          {/* Mobile image — hidden on desktop */}
          <img
            src={STEPS_IMAGE_MOBILE}
            alt="4 steps to get started: Book consultation, Virtual consultation, Receive treatment plan, Continuous follow-up"
            className="block md:hidden w-full object-contain"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default InternationalPatientsSection