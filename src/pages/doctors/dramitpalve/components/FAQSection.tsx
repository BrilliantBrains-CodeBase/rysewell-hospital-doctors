import { motion } from "framer-motion"

const FAQS = [
  {
    q: "Who is Dr. Amit Palve?",
    a: "Dr. Amit Palve is a senior Diabetologist and Consultant Physician in Pune with over 10 years of experience, formerly associated with Jehangir and Manipal Hospitals.",
  },
  {
    q: "What conditions does he treat?",
    a: "He specializes in Type 1 & 2 Diabetes, BP, Thyroid, Vitamin Deficiencies, and all general internal medicine concerns.",
  },
  {
    q: "How do I book a video consultation?",
    a: "You can book directly through the 'Book Appointment' button on this page or message our WhatsApp desk at +91 77098 62164.",
  },
  {
    q: "Where is RyseWell Multispeciality located?",
    a: "We are located in Kothrud, Pune — RyseWell Multispeciality Hospital, Pune - 411038. Exact directions are provided upon booking.",
  },
]

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold font-headline text-center mb-16 text-gray-900"
        >
          Got Questions? Dr. Palve Has Answers.
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group bg-[#f2f4f7] rounded-2xl p-4 transition-all open:bg-[#eceef1]"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none font-body text-gray-900">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-[#005f9c] transition-transform group-open:rotate-180 shrink-0 ml-4">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed font-body">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
