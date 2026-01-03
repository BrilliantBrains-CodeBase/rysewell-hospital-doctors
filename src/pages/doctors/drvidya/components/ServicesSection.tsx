import { motion } from "framer-motion"
import {
  Activity,
  Sparkles,
  Heart,
  Apple,
  Wind,
  Brain,
  Baby,
  Flame,
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description:
      "Addressing the root causes of long-term conditions for enduring relief and better overall health.",
  },
  {
    icon: Sparkles,
    title: "Skin & Hair Restoration",
    description:
      "Natural therapies for dermatological conditions and boosting hair growth and strength.",
  },
  {
    icon: Heart,
    title: "Women’s Health & Wellness",
    description:
      "Holistic support for hormonal balance, reproductive health, and vitality.",
  },
  {
    icon: Apple,
    title: "Digestive Health & Comfort",
    description:
      "Restoring gut health and effectively treating digestive disorders for optimal wellness.",
  },
  {
    icon: Wind,
    title: "Respiratory & Allergy Solutions",
    description:
      "Safe and effective treatments for asthma, allergies, and other respiratory issues.",
  },
  {
    icon: Brain,
    title: "Mental & Emotional Well-Being",
    description:
      "Healing treatments for anxiety, stress, sleep issues, and emotional imbalances.",
  },
  {
    icon: Baby,
    title: "Pediatric Homeopathy",
    description:
      "Gentle, child-friendly remedies designed for safe, effective care for children's health needs.",
  },
  {
    icon: Flame,
    title: "Pain Management & Inflammation",
    description:
      "Natural relief from chronic pain and inflammation, promoting better movement and comfort.",
  },
]

const ServicesSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-5 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Comprehensive Care for
            <br />
            <span className="text-[#0F4C81]">Complete Well-Being</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Personalized homeopathic treatments addressing a wide range of
            health conditions with a focus on lasting recovery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] group-hover:bg-[#0F4C81]/20 transition">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
