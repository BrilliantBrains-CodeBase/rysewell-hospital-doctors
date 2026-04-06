interface MobileBottomNavProps {
  onBookClick: () => void
}

const MobileBottomNav = ({ onBookClick }: MobileBottomNavProps) => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="md:hidden bg-white border-t border-slate-100 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 z-50">
      {/* Home */}
      <a
        href="/doctor/dr-amit-palve"
        className="flex flex-col items-center justify-center bg-blue-50 text-[#005f9c] rounded-xl px-3 py-1.5"
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="text-[11px] font-medium mt-0.5 font-body">Home</span>
      </a>

      {/* Treatments */}
      <button
        onClick={() => scrollTo("#treatments")}
        className="flex flex-col items-center justify-center text-slate-500 px-3 py-1.5 hover:text-[#005f9c] transition-colors"
      >
        <span className="material-symbols-outlined text-xl">medical_services</span>
        <span className="text-[11px] font-medium mt-0.5 font-body">Treatments</span>
      </button>

      {/* Call */}
      <a
        href="tel:+917709862164"
        className="flex flex-col items-center justify-center text-slate-500 px-3 py-1.5 hover:text-[#005f9c] transition-colors"
      >
        <span className="material-symbols-outlined text-xl">call</span>
        <span className="text-[11px] font-medium mt-0.5 font-body">Call</span>
      </a>

      {/* Book */}
      <button
        onClick={onBookClick}
        className="flex flex-col items-center justify-center bg-[#005f9c] text-white rounded-xl px-4 py-1.5 shadow-md"
      >
        <span className="material-symbols-outlined text-xl">calendar_month</span>
        <span className="text-[11px] font-bold mt-0.5 font-body">Book</span>
      </button>
    </nav>
  )
}

export default MobileBottomNav
