import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const STATS = [
  { icon: "groups",         value: "1,00,000+", label: "Patients Treated" },
  { icon: "verified",       value: "10+",        label: "Years of Experience" },
  { icon: "clinical_notes", value: "98%",         label: "Patient Satisfaction" },
  { icon: "local_hospital", value: "3",           label: "Premier Trainings" },
  { icon: "devices",        value: "500+",        label: "Consultations / Month" },
  { icon: "location_city",  value: "Pune",        label: "RyseWell Hospital" },
]

// ── Mobile auto-slide ──────────────────────────────────────────────────────
const MobileSlider = () => {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setIdx((i) => (i + 1) % STATS.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  const stat = STATS[idx]

  return (
    <div className="md:hidden py-10 px-6 overflow-hidden">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          initial={{ opacity: 0, x: 60 * dir }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 * dir }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="flex items-center justify-center gap-5"
        >
          <span
            className="material-symbols-outlined text-white/80 shrink-0"
            style={{ fontSize: "2.5rem", fontVariationSettings: "'FILL' 1" }}
          >
            {stat.icon}
          </span>
          <div>
            <p className="text-3xl font-bold font-headline text-white leading-none">{stat.value}</p>
            <p className="text-sm text-white/70 font-body mt-1">{stat.label}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {STATS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-5 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Desktop row — no boxes, just icon + stat + label ──────────────────────
const DesktopRow = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="hidden md:flex max-w-[1200px] mx-auto px-6 py-12 items-center justify-between"
    >
      {STATS.map((s, idx) => (
        <>
          <div
            key={s.label}
            className={`flex items-center gap-3 text-white transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <span
              className="material-symbols-outlined text-white/60 shrink-0"
              style={{ fontSize: "1.75rem", fontVariationSettings: "'FILL' 1" }}
            >
              {s.icon}
            </span>
            <div>
              <p className="text-2xl font-bold font-headline leading-none">{s.value}</p>
              <p className="text-xs text-white/65 font-body mt-0.5 uppercase tracking-wide">{s.label}</p>
            </div>
          </div>

          {/* Divider — not after last */}
          {idx < STATS.length - 1 && (
            <div key={`div-${idx}`} className="h-10 w-px bg-white/20 shrink-0" />
          )}
        </>
      ))}
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────
const CredibilitySection = () => (
  <section className="bg-[#005f9c]">
    <DesktopRow />
    <MobileSlider />
  </section>
)

export default CredibilitySection
