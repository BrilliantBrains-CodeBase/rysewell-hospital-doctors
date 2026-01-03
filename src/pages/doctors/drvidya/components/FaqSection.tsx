import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is homeopathy safe?",
    answer:
      "Yes, homeopathy is considered safe when prescribed by a qualified practitioner. Remedies are non-toxic, gentle, and suitable for people of all age groups, including children and the elderly.",
  },
  {
    question: "How long does homeopathic treatment take to show results?",
    answer:
      "The timeline varies depending on the condition, its duration, and individual response. Acute conditions may improve quickly, while chronic conditions require consistent treatment over time for lasting results.",
  },
  {
    question:
      "Can I take homeopathic medicines along with allopathic treatment?",
    answer:
      "Yes, homeopathy can be safely taken alongside allopathic medicines. It is important to inform your doctor about all ongoing treatments so care can be coordinated effectively.",
  },
  {
    question: "How do online consultations work?",
    answer:
      "Online consultations are conducted via secure video calls. You can book a slot, discuss your symptoms in detail, and receive a personalized treatment plan from the comfort of your home.",
  },
  {
    question:
      "How do I receive my medicines for international consultations?",
    answer:
      "For international patients, medicines can be sourced locally with guidance or shipped through trusted channels depending on location and availability.",
  },
  {
    question: "What conditions can be treated with homeopathy?",
    answer:
      "Homeopathy can support a wide range of conditions including chronic illnesses, skin and hair issues, digestive disorders, respiratory problems, hormonal imbalances, mental well-being concerns, and pediatric conditions.",
  },
]

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-28">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            FAQs
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Clear answers to common questions about homeopathic care and
            consultations.
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-gray-900"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
