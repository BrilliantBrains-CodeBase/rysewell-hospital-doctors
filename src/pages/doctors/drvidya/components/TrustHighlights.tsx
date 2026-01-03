import { motion } from "framer-motion"
import {
  Globe,
  Video,
  HeartPulse,
  Leaf,
} from "lucide-react"

const items = [
  {
    icon: Globe,
    text: "PAN-India & International Patients",
  },
  {
    icon: Video,
    text: "Online & In-Clinic Consultations",
  },
  {
    icon: HeartPulse,
    text: "Safe for All Age Groups",
  },
  {
    icon: Leaf,
    text: "Root-Cause Healing Approach",
  },
]

const TrustHighlights = () => {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                {/* Icon */}
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  {item.text}
                </p>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default TrustHighlights
