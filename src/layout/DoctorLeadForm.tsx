import { useState } from "react"
import { motion } from "framer-motion"
import { User, Phone, Mail, MessageSquare, ShieldCheck } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"


const DoctorLeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate =useNavigate();

  const location = useLocation()

const doctorUrl =
  window.location.origin + location.pathname

const doctorSlug =
  location.pathname.split("/").filter(Boolean).pop() || ""

const doctorName = doctorSlug
  .replace(/-/g, " ")
  .replace(/\b\w/g, char => char.toUpperCase())


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError(null)

  try {
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwrH5593c9_qM14sPZyrEEjG3hyc54vrLnesuvXKHtV7emx436va1ZkmFIH_A_VnS1w/exec"

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      doctorName,
      doctorUrl,
    }

    // ✅ FIRE-AND-FORGET (NO CORS ISSUES)
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    })

    // ✅ RESET FORM
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    })

    // ✅ REDIRECT
    navigate("/consultation-booking-successful")

  } catch (err) {
    console.error("Error submitting form:", err)
    setError("Something went wrong. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <section
      id="doctor-lead-form"
      className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] to-[#09375E]"
    >
      {/* glow accents */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-white">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-5 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
            Book Consultation
          </span>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Begin Your
            <br />
            Healing Journey
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Take the first step toward natural, personalized healing.
            Share your concern and consult directly with an experienced
            homeopathic physician.
          </p>

          {/* Trust points */}
          <ul className="mt-10 space-y-4 text-sm text-white/90">
            {[
              "Confidential & secure consultations",
              "Personalized treatment plans",
              "Online & in-clinic consultations available",
              "Trusted by patients across India & globally",
            ].map(point => (
              <li key={point} className="flex items-start gap-3">
                <ShieldCheck size={18} className="mt-0.5 text-white" />
                {point}
              </li>
            ))}
          </ul>

          {/* WhatsApp fallback */}
          <a
            href="https://wa.me/917709862164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-12 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            💬 Prefer WhatsApp? Chat with us instantly
          </a>
        </motion.div>

        {/* ================= FORM CARD ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="rounded-3xl bg-white p-10 shadow-2xl text-gray-900"
        >
          <h3 className="text-2xl font-bold mb-2">
            Request a Consultation
          </h3>

          <p className="text-sm text-gray-600 mb-8">
            Fill in your details and we'll get back to you shortly.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-5">

            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 pl-11 pr-4 py-3 text-sm focus:border-[#0F4C81] focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 pl-11 pr-4 py-3 text-sm focus:border-[#0F4C81] focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (optional)"
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 pl-11 pr-4 py-3 text-sm focus:border-[#0F4C81] focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your health concern"
                disabled={isSubmitting}
                className="w-full rounded-xl border border-gray-300 pl-11 pr-4 py-3 text-sm focus:border-[#0F4C81] focus:outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full rounded-xl bg-[#0F4C81] py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#09375E] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Book My Consultation"
            )}
          </button>

          <p className="mt-4 text-xs text-gray-500 text-center">
            Your information is private & will never be shared.
          </p>
        </motion.form>

      </div>
    </section>
  )
}

export default DoctorLeadForm