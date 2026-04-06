import { motion } from "framer-motion"

interface VideoConsultSectionProps {
  onBookClick: () => void
}

const CHECKLIST = [
  "Secure & Private Consultations",
  "Digital Prescriptions Sent Instantly",
  "Follow-up Reminders & Health Tips",
]

const VideoConsultSection = ({ onBookClick }: VideoConsultSectionProps) => {
  return (
    <section id="video-consult" className="py-24 bg-[#005f9c] text-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — text + checklist */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold font-headline leading-tight">
            Can't Visit the Clinic? Consult Virtually.
          </h2>
          <p className="text-lg opacity-90 font-body leading-relaxed">
            Experience the same level of care and precision through our high-definition
            tele-consultation platform.
          </p>

          <div className="space-y-4">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-center gap-3 font-body text-sm">
                <span
                  className="material-symbols-outlined text-[#cee5ff]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={onBookClick}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-body"
          >
            Book Video Consultation
          </button>
        </motion.div>

        {/* Right — YouTube video embed */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Iqrw2EavirY"
              title="Dr. Amit Palve - Video Consultation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[2rem]"
            />
          </div>

          {/* Availability badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#005f9c] rounded-xl px-5 py-2.5 shadow-xl font-body font-semibold text-xs whitespace-nowrap flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Slots Available — Weekdays &amp; Weekends
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default VideoConsultSection
