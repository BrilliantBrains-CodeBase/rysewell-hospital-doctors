import { Phone, MapPin, Clock, Award, CheckCircle, Star } from "lucide-react"

const trustIndicators = [
  { icon: Award, text: "15+ Years of Excellence", color: "text-blue-600" },
  { icon: CheckCircle, text: "12,000+ Happy Patients", color: "text-green-600" },
  { icon: Star, text: "4.9★ Average Rating", color: "text-yellow-600" },
]

const Navbar = () => {
  return (
    <div>
      {/* ================= STICKY CTA BAR (Mobile) ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0F4C81] to-[#1a5a96] shadow-2xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="tel:+917709862164"
            className="flex-1 mr-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0F4C81] shadow-lg hover:scale-105 transition-transform"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <a
            href="https://rysewellhospitals.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 ml-2 flex items-center justify-center gap-2 rounded-xl bg-[#63a8e4] px-4 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            <span>Book Now</span>
          </a>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-[#115897] backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <img
                src="/Rysewell-logo.webp"
                alt="Rysewell Multispeciality Hospital"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+917709862164"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0F4C81] to-[#1a5a96] px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="h-5 w-5" />
                <span>+91 77098 62164</span>
              </a>
              <a
                href="https://rysewellhospitals.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#63a8e4] px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Book Appointment
              </a>
            </div>

            {/* MOBILE CALL BUTTON */}
            <a
              href="tel:+917709862164"
              className="md:hidden flex items-center gap-1 rounded-lg bg-[#0F4C81] px-3 py-2 text-xs font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
