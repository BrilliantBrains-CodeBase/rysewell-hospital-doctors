import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonialShorts = [
  { id: "cYNgQBiq4aY" },
  { id: "BWYMAiWVj4w" },
  { id: "6kcvGuXql4I" },
  { id: "vJS6O5Q5pz0" },
]

const InstagramReelsSection = () => {
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const update = () => {
      const newIpv = window.innerWidth >= 640 ? 3 : 1
      setItemsPerView(ipv => {
        if (ipv !== newIpv) setCurrent(0)
        return newIpv
      })
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = testimonialShorts.length - itemsPerView
  const isCarousel = maxIndex > 0

  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(maxIndex, i + 1))

  return (
    <section className="bg-[#f7f9fc] py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
            <Play size={14} fill="currentColor" />
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Hear It From Our <span className="text-[#0F4C81]">Patients</span>
          </h2>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">

          {/* Track viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-(current * (100 / itemsPerView))}%)` }}
            >
              {testimonialShorts.map((short, index) => (
                <div
                  key={short.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow bg-white">
                    <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                        title={`Patient testimonial ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          {isCarousel && current > 0 && (
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {isCarousel && current < maxIndex && (
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {isCarousel && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#0F4C81]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default InstagramReelsSection
