import { motion } from "framer-motion"
import {
  Target,
  Sparkles,
  ShieldCheck,
  Clock,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Root-Cause Focused Care",
    description:
      "We don’t just treat symptoms—we identify and address the underlying cause of your health concerns.",
  },
  {
    icon: Sparkles,
    title: "Personalised Remedies",
    description:
      "Every treatment plan is tailored to your unique constitution and health profile.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Non-Toxic",
    description:
      "Homeopathic medicines are gentle, without side effects, and safe for all ages.",
  },
  {
    icon: Clock,
    title: "Long-Term Recovery",
    description:
      "Our focus is on permanent healing, not temporary relief from symptoms.",
  },
  {
    icon: Globe,
    title: "Global Online Consultations",
    description:
      "Access quality homeopathic care from anywhere in the world via online consultations.",
  },
]

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag */}
          <span className="inline-block mb-6 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The Difference in
            <br />
            <span className="text-[#0F4C81]">Our Approach</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            With a commitment to holistic healing and personalized care, we offer
            a treatment experience that addresses your complete well-being, not
            just isolated symptoms.
          </p>

          {/* Image */}
          <div className="mt-14 relative">
            <div className="absolute inset-0 rounded-3xl bg-[#0F4C81]/20 blur-2xl scale-110" />
            <img
              src="/homoeopathy-img-2.png"
              alt="Holistic homeopathic treatment approach"
              className="relative h-[260px] w-[360px] md:h-[320px] md:w-[520px] rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUsSection
