import { MessageCircle } from "lucide-react"
import { useLocation } from "react-router-dom"

const GlobalWhatsAppBubble = () => {
  const { pathname } = useLocation()

  if (pathname === "/thank-you") {
    return null
  }

  const isDrAmitRoute = pathname === "/doctor/dr-amit-palve"
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to book a consultation. Please share available slots."
  )

  return (
    <div
      className={`fixed right-5 bottom-24 md:bottom-6 z-40 ${
        isDrAmitRoute ? "md:hidden" : ""
      }`}
    >
      <a
        href={`https://wa.me/917709862164?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 hover:bg-[#1ebe5d]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  )
}

export default GlobalWhatsAppBubble
