const DrAmitFooter = () => {
  return (
    <footer className="bg-slate-950 text-white rounded-t-[3rem] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* Brand + Social */}
        <div className="col-span-1">
          <h4 className="text-2xl font-headline font-bold mb-6">Dr. Amit Palve</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-body">
            Pune's leading expert in Diabetology and Internal Medicine. Committed to excellence in patient care.
          </p>
          <div className="flex gap-4">
            {["social_leaderboard", "video_library", "share"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#005f9c] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold mb-6 tracking-widest uppercase text-xs text-[#9bcaff] font-body">Quick Links</h5>
          <ul className="space-y-4 text-sm text-slate-400 font-body">
            {[
              { label: "Home", href: "/doctor/dr-amit-palve" },
              { label: "About Dr. Palve", href: "#about" },
              { label: "Treatments", href: "#treatments" },
              { label: "Results", href: "#testimonials" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-bold mb-6 tracking-widest uppercase text-xs text-[#9bcaff] font-body">Services</h5>
          <ul className="space-y-4 text-sm text-slate-400 font-body">
            {[
              "Diabetes Management",
              "Thyroid Care",
              "General Medicine",
              "Video Consult",
            ].map((s) => (
              <li key={s}>
                <a href="#treatments" className="hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-bold mb-6 tracking-widest uppercase text-xs text-[#9bcaff] font-body">Contact</h5>
          <ul className="space-y-4 text-sm text-slate-400 font-body">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#9bcaff] text-sm mt-0.5 shrink-0">location_on</span>
              RyseWell Multispeciality Hospital, Kothrud, Pune - 411038
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#9bcaff] text-sm shrink-0">phone</span>
              <a href="tel:+917709862164" className="hover:text-white transition-colors">+91 77098 62164</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#9bcaff] text-sm shrink-0">mail</span>
              <a href="mailto:info@rysewellhospitals.com" className="hover:text-white transition-colors">
                info@rysewellhospitals.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-body">
        <p>© 2025 Dr. Amit Palve. Pune's Leading Diabetologist. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Patient Portal"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default DrAmitFooter
