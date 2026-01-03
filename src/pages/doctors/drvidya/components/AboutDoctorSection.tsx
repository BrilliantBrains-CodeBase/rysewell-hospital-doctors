import { motion } from "framer-motion"

const AboutDoctorSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      
      {/* soft background accent */}
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#0F4C81]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Tag */}
          <span className="inline-block mb-6 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            About the Doctor
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
            Compassionate Care,
            <br />
            <span className="text-[#0F4C81]">Lasting Results</span>
          </h2>

          {/* Copy */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            With decades of experience in homeopathic medicine, Dr. Vidya Palve
            has dedicated her practice to understanding the unique constitution
            of each patient. Her approach goes beyond treating symptoms — she
            focuses on identifying the root cause of illness.
          </p>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
            By blending traditional homeopathic principles with modern medical
            understanding, she creates personalized treatment plans that support
            the body’s natural healing abilities. Patients across India and
            internationally trust her for holistic, long-term care.
          </p>

          {/* Quote */}
          <div className="mt-12 relative rounded-2xl bg-white p-6 shadow-sm border border-gray-200 max-w-xl">
            <span className="absolute -top-4 -left-4 text-6xl text-[#0F4C81]/20 leading-none">
              “
            </span>
            <p className="text-lg italic text-gray-800">
              Every patient is unique. Your treatment should be too.
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              — Dr. Vidya Palve
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-14"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#0F4C81]/20 blur-2xl scale-110" />
            <img
              src="/drvidyaclinic.webp"
              alt="Dr. Vidya Palve Clinic"
              className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "10K+", label: "Patients Healed" },
              { value: "15+", label: "Countries" },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-4xl font-extrabold text-[#0F4C81]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutDoctorSection
