import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

interface DrAmitNavbarProps {
  onBookClick: () => void
}

const DrAmitNavbar = ({ onBookClick }: DrAmitNavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-white/80 backdrop-blur-xl shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        {/* Brand */}
        <a href="/doctor/dr-amit-palve" className="text-xl font-bold tracking-tight text-[#005f9c] font-headline">
          Dr. Amit Palve
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: "About", id: "#about" },
            { label: "Treatments", id: "#treatments" },
            { label: "Results", id: "#testimonials" },
            { label: "FAQ", id: "#faq" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="text-slate-600 font-medium hover:text-[#005f9c] transition-colors text-sm font-body"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/917709862164"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#25D366] hover:bg-blue-50 rounded-full transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <button
            onClick={onBookClick}
            className="bg-[#005f9c] text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all text-sm font-body"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </nav>
  )
}

export default DrAmitNavbar
