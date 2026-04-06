import { useState, useEffect, useRef } from "react"
import { X, CheckCircle, Loader2 } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormState {
  name: string
  phone: string
  email: string
  type: string
  date: string
  timeSlot: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  date?: string
  timeSlot?: string
}

const TIME_SLOTS = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
  "6:00 PM - 7:00 PM",
]

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  type: "In-Clinic",
  date: "",
  timeSlot: "",
  message: "",
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm)
      setErrors({})
      setIsSubmitting(false)
      setIsSuccess(false)
      setSubmitError("")
    }
  }, [isOpen])

  // Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required."
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required."
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number."
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address."
    }
    if (!form.date) newErrors.date = "Please select a date."
    if (!form.timeSlot) newErrors.timeSlot = "Please select a time slot."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError("")

    const endpoint = import.meta.env.VITE_APPS_SCRIPT_WEB_APP_URL

    if (!endpoint) {
      setSubmitError("Booking service is not configured. Please call us at +91 77098 62164.")
      setIsSubmitting(false)
      return
    }

    try {
      const params = new URLSearchParams({
        action: "intake",
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        type: form.type,
        date: form.date,
        timeSlot: form.timeSlot,
        message: form.message.trim(),
        leadId: `lead_${crypto.randomUUID()}`,
        status: "pending_confirmation",
        source: "website_booking_modal",
        timezone: "Asia/Kolkata",
        submittedAt: new Date().toISOString(),
      })

      const res = await fetch(`${endpoint}?${params.toString()}`)
      const body = await res.json()

      if (res.ok && body?.ok === true && body?.status === "received") {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        setSubmitError(
          body?.message || "We could not submit your request. Please call us at +91 77098 62164."
        )
      }
    } catch {
      setSubmitError(
        "We could not submit your request right now. Please call us directly at +91 77098 62164."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Book Your Consultation</h2>
            <p className="text-sm text-gray-500 mt-0.5">Dr. Amit Palve · MBBS · MD · DNB</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900">Appointment Request Sent!</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Thank you! We've received your request and will confirm your appointment shortly. Check your email for a receipt.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40 ${
                    errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40 ${
                    errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40 ${
                    errors.email ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Consultation Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40"
                >
                  <option value="In-Clinic">In-Clinic (Pune)</option>
                  <option value="Video Consultation">Video Consultation</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40 ${
                    errors.date ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
              </div>

              {/* Time Slot */}
              <div>
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={form.timeSlot}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40 ${
                    errors.timeSlot ? "border-red-400 bg-red-50" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errors.timeSlot && <p className="text-xs text-red-500 mt-1">{errors.timeSlot}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Symptoms <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your condition or any questions..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/40"
                />
              </div>

              {/* Submit Error */}
              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {submitError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F4C81] hover:bg-[#09375E] text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Appointment"
                )}
              </button>

              <p className="text-xs text-center text-gray-400">
                Your information is private and secure. Confirmation within minutes.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingModal
