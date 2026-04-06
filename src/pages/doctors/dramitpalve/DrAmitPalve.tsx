import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { FaWhatsapp } from "react-icons/fa"

import Footer from "../../../layout/Footer"
import DrAmitNavbar from "./components/DrAmitNavbar"
import HeroSection from "./components/HeroSection"
import CredibilitySection from "./components/CredibilitySection"
import ProblemSection from "./components/ProblemSection"
import AboutSection from "./components/AboutSection"
import TreatmentsSection from "./components/TreatmentsSection"
import WhyChooseSection from "./components/WhyChooseSection"
import HowItWorks from "./components/HowItWorks"
import VideoConsultSection from "./components/VideoConsultSection"
import YouTubeShortsSection from "./components/YouTubeShortsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import FAQSection from "./components/FAQSection"
import FinalCTA from "./components/FinalCTA"
import MobileBottomNav from "./components/MobileBottomNav"

const DrAmitPalve = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const scrollToInlineForm = () => {
    document.querySelector("#appointment-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Helmet>
        <title>Dr. Amit Palve | Pune's Most Trusted Diabetologist — 1,00,000+ Patients</title>
        <meta
          name="description"
          content="Consult Dr. Amit Palve, Pune's leading Diabetologist & Physician. MBBS · MD · DNB. Expert in Diabetes Management, Metabolic Disorders & Preventive Care. In-clinic & video consultations."
        />
        <meta
          name="keywords"
          content="Dr Amit Palve, diabetologist Pune, best diabetes doctor Pune, HbA1c treatment, video consultation diabetologist, RyseWell Hospital Kothrud"
        />
        <meta property="og:title" content="Dr. Amit Palve | Pune's Leading Diabetologist & Consultant Physician" />
        <meta
          property="og:description"
          content="1,00,000+ patients treated. Expert Physician & Diabetologist. In-clinic in Pune & video consultations across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rysewellhospitals.com/doctor/dr-amit-palve" />
        <meta property="og:image" content="https://rysewellhospitals.com/og/dr-amit-palve.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Amit Palve | Diabetologist & Physician, Pune" />
        <meta name="twitter:description" content="1,00,000+ patients. Expert diabetes care in Pune & online across India." />
        <link rel="canonical" href="https://rysewellhospitals.com/doctor/dr-amit-palve" />
      </Helmet>

      {/* 1 — Navbar */}
      <DrAmitNavbar onBookClick={scrollToInlineForm} />

      {/* 2 — Hero */}
      <HeroSection onBookClick={scrollToInlineForm} />

      {/* 3 — Credibility: stats + trust signals */}
      <CredibilitySection />

      {/* 5 — Problem Section */}
      <ProblemSection onBookClick={scrollToInlineForm} />

      {/* 6 — About Section */}
      <AboutSection />

      {/* 7 — Treatments */}
      <TreatmentsSection />

      {/* 8 — Why Choose */}
      <WhyChooseSection />

      {/* 9 — How It Works */}
      <HowItWorks onBookClick={scrollToInlineForm} />

      {/* 10 — Video Consult */}
      <VideoConsultSection onBookClick={scrollToInlineForm} />

      {/* 11 — YouTube Shorts */}
      <YouTubeShortsSection />

      {/* 12 — Testimonials */}
      <TestimonialsSection />

      {/* 13 — FAQ */}
      <FAQSection />

      {/* 14 — Final CTA + Inline Form */}
      <FinalCTA />

      {/* 15 — Footer */}
      <Footer />

      {/* Floating WhatsApp — desktop */}
      <a
        href="https://wa.me/917709862164"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full w-14 h-14 items-center justify-center shadow-xl transition-transform hover:scale-110"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav onBookClick={scrollToInlineForm} />
    </>
  )
}

export default DrAmitPalve
