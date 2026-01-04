import { motion } from "framer-motion"
import { CheckCircle, PhoneCall, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ConsultationSuccess = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F4C81] to-[#09375E] overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white max-w-xl w-full mx-4 rounded-3xl shadow-2xl p-10 md:p-14 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="text-[#0F4C81]" size={72} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Consultation Booked Successfully
        </h1>

        {/* Sub text */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Thank you for reaching out to <span className="font-semibold">Rysewell Hospitals</span>.
          Your consultation request has been received, and our care team will contact you shortly.
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />

        {/* What happens next */}
        <div className="text-left space-y-4 text-sm text-gray-700">
          <p className="font-semibold text-gray-900">
            What happens next?
          </p>
          <ul className="space-y-3">
            <li>• Our team will review your details</li>
            <li>• A confirmation call will be made shortly</li>
            <li>• You will receive consultation guidance</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white hover:bg-[#09375E] transition"
          >
            Back to Home
            <ArrowRight size={16} />
          </button>

          <a
            href="https://wa.me/917709862164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            <PhoneCall size={16} />
            WhatsApp Support
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-gray-500">
          Your information is securely handled and will never be shared.
        </p>
      </motion.div>
    </section>
  )
}

export default ConsultationSuccess
