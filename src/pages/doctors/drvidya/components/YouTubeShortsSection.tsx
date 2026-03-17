import { motion } from "framer-motion"
import { Play } from "lucide-react"

const shorts = [
  {
    id: "6o4GDnctgwA",
    title: "Short 1",
  },
  {
    id: "mwmwft_rwow",
    title: "Short 2",
  },
  {
    id: "4iJxwDO8F_0",
    title: "Short 3",
  },
]

const YouTubeShortsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

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
            Watch Our Shorts
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Health Tips in <span className="text-[#0F4C81]">60 Seconds</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {shorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              {/* Portrait video embed — 9:16 aspect ratio */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                  title={short.title}
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

export default YouTubeShortsSection