import { motion } from "framer-motion"
import { Play } from "lucide-react"

const testimonialShorts = [
  { id: "cYNgQBiq4aY" },
  { id: "BWYMAiWVj4w" },
  { id: "6kcvGuXql4I" },
]

const InstagramReelsSection = () => {
  return (
    <section className="bg-[#f7f9fc] py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            <Play size={14} fill="currentColor" />
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Hear It From Our <span className="text-[#0F4C81]">Patients</span>
          </h2>
        </motion.div>

        {/* Shorts Grid — 3 columns on md+, single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {testimonialShorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              {/* 9:16 portrait aspect ratio */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                  title={`Patient testimonial ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default InstagramReelsSection
