
// testimonials.data.ts
export const testimonials = [
  {
    name: "Alex Parkinson",
    company: "UK Patient",
    image: "https://images.unsplash.com/photo-1739590441594-8e4e35a8a813?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdlcm1hbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    feedback:
      "Homeopathic treatment by Dr. Vidya Palve helped me regain balance naturally. The healing was gentle yet deeply effective."
  },
  {
    name: "Maria Gomez",
    company: "Spain Patient",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtySiQiW5UTWHTefQdmOAeSRiB4A6ZGiQjtw&s",
    feedback:
      "I suffered from chronic migraines for years. With personalized homeopathy, my condition improved without side effects."
  },
  {
    name: "Anita Sharma",
    company: "India Patient",
    image: "https://www.shutterstock.com/image-photo/positive-beautiful-20s-indian-girl-260nw-2449701273.jpg",
    feedback:
      "The approach was holistic and precise. Instead of suppressing symptoms, the root cause was treated."
  },
  {
    name: "Daniel Weber",
    company: "Germany Patient",
    image: "https://t3.ftcdn.net/jpg/00/90/65/82/360_F_90658211_6txAL6OKPm8OFxdwkC9yw6mTqS6ayjav.jpg",
    feedback:
      "Homeopathy restored my energy and clarity. I highly recommend Dr. Vidya Palve for long-term healing."
  }
]



import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { useEffect } from "react"

const HomeopathyTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false
      })
    ]
  )

  // ✅ Pause on hover AND resume correctly
  useEffect(() => {
    if (!emblaApi) return
    const autoScroll = emblaApi.plugins()?.autoScroll

    const onMouseEnter = () => autoScroll?.stop()
    const onMouseLeave = () => autoScroll?.play()

    emblaApi.containerNode().addEventListener("mouseenter", onMouseEnter)
    emblaApi.containerNode().addEventListener("mouseleave", onMouseLeave)

    return () => {
      emblaApi.containerNode().removeEventListener("mouseenter", onMouseEnter)
      emblaApi.containerNode().removeEventListener("mouseleave", onMouseLeave)
    }
  }, [emblaApi])

  // 🔁 Duplicate slides for seamless infinite illusion
  const infiniteSlides = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-[#f7f9fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What Patients Say Worldwide
        </h2>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-8 px-6">
          {infiniteSlides.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] sm:min-w-[340px]"
            >
              {/* CARD — matches your image */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                
                {/* Content */}
                <div className="p-8 min-h-[220px]">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.feedback}
                  </p>

                  {/* Quote icon */}
                  <span className="absolute top-6 right-6 text-6xl text-[#e6ecff] font-serif">
                    ”
                  </span>
                </div>

                {/* Bottom Profile Bar */}
                <div className="bg-[#0F4C81] pt-12 pb-6 text-center relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-white absolute left-1/2 -top-8 -translate-x-1/2 object-cover"
                  />

                  <h4 className="text-white font-semibold mt-6">
                    {item.name}
                  </h4>
                  <p className="text-white/80 text-xs mt-1">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeopathyTestimonials
