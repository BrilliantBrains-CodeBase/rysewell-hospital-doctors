import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: "1L+", label: "Patients Treated" },
  { value: "10+", label: "Years Exp" },
  { value: "3", label: "Premier Hospitals" },
  { value: "1", label: "Hospital Founder" },
  { value: "2", label: "Consult Ways" },
]

const StatsStrip = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#005f9c] py-12">
      <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-3 pr-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`snap-start shrink-0 w-[54vw] rounded-2xl border border-white/25 bg-white/10 p-5 text-center text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <p className="text-3xl font-bold font-headline">{stat.value}</p>
              <p className="text-xs opacity-85 uppercase tracking-tight font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid max-w-[1200px] mx-auto px-6 md:grid-cols-5 gap-8 text-center text-white">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <p className="text-3xl font-bold font-headline">{stat.value}</p>
            <p className="text-sm opacity-80 uppercase tracking-tighter font-body mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
