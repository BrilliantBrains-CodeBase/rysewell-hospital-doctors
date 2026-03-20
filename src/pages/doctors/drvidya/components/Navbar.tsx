import { Phone, MessageCircle } from "lucide-react"

const Navbar = () => {

  const whatsappMessage = encodeURIComponent(
    "Hi, I’d like to book a consultation with Dr. Vidya Palve. Could you please share the available slots and next steps?"
  )

  const whatsappLink = `https://wa.me/917709862164?text=${whatsappMessage}`

  const scrollToForm = () => {
    const element = document.getElementById("doctor-lead-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      {/* ================= STICKY CTA BAR (Mobile) ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0F4C81] to-[#1a5a96] shadow-2xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* WHATSAPP CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 mr-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#1ebe5d] hover:scale-105 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>

          {/* SCROLL CTA */}
          <button
            onClick={scrollToForm}
            className="flex-1 ml-2 flex items-center justify-center gap-2 rounded-xl bg-[#63a8e4] px-4 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            <span>Book Now</span>
          </button>
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
              
              {/* WHATSAPP BUTTON */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#1ebe5d] hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>

              {/* SCROLL BUTTON */}
              <button
                onClick={scrollToForm}
                className="rounded-xl bg-[#63a8e4] px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Book Appointment
              </button>
            </div>

            {/* MOBILE WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center gap-1 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar