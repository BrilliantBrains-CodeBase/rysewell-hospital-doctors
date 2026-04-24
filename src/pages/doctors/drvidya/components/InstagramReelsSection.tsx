import { motion } from "framer-motion"
import { Play } from "lucide-react"

const reels = [
  { id: "DV-v5UHlJTz" },
  { id: "DXRXFWCjZoh" },
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

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-85 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              {/* Fixed height to contain video + Instagram UI chrome (profile bar, action bar, likes) */}
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                scrolling="no"
                allowTransparency={true}
                allowFullScreen
                className="w-full border-0 block"
                style={{ height: "620px" }}
                title={`Patient testimonial reel ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default InstagramReelsSection
