import { motion } from "framer-motion"

const HeroSection = () => {
  const scrollToLeadForm = () => {
    const el = document.getElementById("doctor-lead-form")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#EEF5FF]">
      {/* Soft background accent */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0F4C81]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Tag */}
          <span className="inline-block mb-6 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            Advanced Homeopathy
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
            Heal Naturally.
            <br />
            <span className="text-[#0F4C81]">Live Fully.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Advanced homeopathic care guided by experience, empathy, and evidence-based practice.
          </p>

          {/* Doctor Info */}
          <div className="mt-8 space-y-1">
            <p className="font-semibold text-gray-900">
              Led by Dr. Vidya Palve
            </p>
            <p className="text-gray-600">
              Senior Homeopathic Physician
            </p>
            <p className="mt-3 text-sm text-gray-600">
              • Consulted by patients across India & internationally
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <button
              onClick={scrollToLeadForm}
              className="rounded-xl bg-[#0F4C81] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/30 hover:bg-[#09375E] transition"
            >
              Book Consultation
            </button>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/917709862164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#0F4C81] px-8 py-3 text-sm font-semibold text-[#0F4C81] hover:bg-[#0F4C81]/5 transition"
            >
              💬 WhatsApp Consultation
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-gradient-to-br from-[#0F4C81]/20 to-[#0F4C81]/5 p-3">
            <img
              src="/DrVidyaPalve.webp"
              alt="Dr. Vidya Palve"
              className="h-full w-full rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection
