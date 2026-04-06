import { motion } from "framer-motion"

interface HeroSectionProps {
  onBookClick: () => void
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#005f9c] to-[#0079c4] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left — 7 cols */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Star badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <span className="text-yellow-400 mr-2">★★★★★</span>
            <span className="text-sm font-medium tracking-wide font-body">Trusted by 1,00,000+ Patients</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold font-headline leading-[1.1] -tracking-tight">
            Pune's Most Trusted Diabetologist &amp; Consultant Physician
          </h1>

          {/* Subtext */}
          <p className="text-lg opacity-90 max-w-xl leading-relaxed font-body">
            Precision care for diabetes reversal and general health. Leading expertise from Jehangir &amp; Manipal Hospitals, now at RyseWell Multispeciality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookClick}
              className="bg-white text-[#005f9c] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-lg font-body"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Clinic Visit
            </button>
            <button
              onClick={onBookClick}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-body"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
              </svg>
              Start Video Consultation
            </button>
          </div>
        </motion.div>

        {/* Right — 5 cols */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="aspect-[4/5] bg-[#d0e4ff] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img
              src="/DrAmitPalve.webp"
              alt="Dr. Amit Palve — Consultant Physician & Diabetologist"
              className="w-full h-full object-cover"
            />
            {/* Card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
              <p className="text-[#005f9c] font-bold text-xs tracking-widest uppercase mb-1 font-body">Affiliated With</p>
              <p className="text-gray-900 font-semibold font-headline text-lg">RyseWell Multispeciality Hospital</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection
