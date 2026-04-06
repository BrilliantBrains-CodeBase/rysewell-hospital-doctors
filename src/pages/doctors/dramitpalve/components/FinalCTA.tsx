import { useState } from "react"
import { Loader2 } from "lucide-react"

interface FormState {
  name: string
  phone: string
  email: string
  type: string
  date: string
  timeSlot: string
  message: string
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  type: "Clinic Visit (Kothrud)",
  date: "",
  timeSlot: "",
  message: "",
}

const TIME_SLOTS = [
  "9–10 AM",
  "10–11 AM",
  "11 AM–12 PM",
  "12–1 PM",
  "2–3 PM",
  "4–5 PM",
  "6–7 PM",
]

const FinalCTA = () => {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((p) => ({ ...p, [name]: undefined }))
    }
  }

  const validate = () => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = "Required"
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = "Valid 10-digit number required"
    if (!form.date) errs.date = "Required"
    if (!form.timeSlot) errs.timeSlot = "Required"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError("")

    const endpoint = "https://script.google.com/macros/s/AKfycbwUNDGzItplW1imqvvtedl7GTQG149r7D-Rh5OPxRUl1EW912MmSEwJGN4O60d1VOwp/exec"

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
        setForm(initialForm)
      } else {
        setSubmitError(body?.message || "Submission failed. Please call +91 77098 62164.")
      }
    } catch {
      setSubmitError("Could not submit. Please call +91 77098 62164.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="appointment-form" className="py-24 bg-[#005f9c] text-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left — headline + bullets */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold font-headline leading-tight">
            Ready to Reclaim Your Health Journey?
          </h2>
          <p className="text-xl opacity-90 font-body">
            Join 1,00,000+ patients who have found clarity and health with Dr. Amit Palve's expertise.
          </p>

          <div className="space-y-4">
            {[
              { icon: "verified", text: "MBBS, MD, DNB Expert Guidance" },
              { icon: "local_hospital", text: "Best-in-class Hospital Facility" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 font-body">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">{item.icon}</span>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — inline form card */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-gray-900">
          <h3 className="text-2xl font-bold font-headline mb-8">Book Your Slot</h3>

          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <span className="material-symbols-outlined text-green-500 text-6xl block" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <p className="font-bold font-headline text-lg">Request Received!</p>
              <p className="text-gray-500 font-body text-sm">We'll confirm your appointment shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c] ${errors.name ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    maxLength={10}
                    className={`w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c] ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1 font-body">{errors.phone}</p>}
                </div>
              </div>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c]"
              />

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c]"
              >
                <option>Clinic Visit (Kothrud)</option>
                <option>Video Consultation</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c] ${errors.date ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.date && <p className="text-xs text-red-500 mt-1 font-body">{errors.date}</p>}
                </div>
                <div>
                  <select
                    name="timeSlot"
                    value={form.timeSlot}
                    onChange={handleChange}
                    className={`w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#005f9c] ${errors.timeSlot ? "ring-2 ring-red-400" : ""}`}
                  >
                    <option value="">Select Time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.timeSlot && <p className="text-xs text-red-500 mt-1 font-body">{errors.timeSlot}</p>}
                </div>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your condition (Optional)"
                rows={3}
                className="w-full bg-[#eceef1] border-none rounded-xl p-4 text-sm font-body resize-none focus:outline-none focus:ring-2 focus:ring-[#005f9c]"
              />

              {submitError && (
                <p className="text-sm text-red-500 font-body">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#005f9c] text-white py-4 rounded-xl font-bold font-body hover:bg-[#0079c4] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  "Confirm Appointment Request"
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default FinalCTA
