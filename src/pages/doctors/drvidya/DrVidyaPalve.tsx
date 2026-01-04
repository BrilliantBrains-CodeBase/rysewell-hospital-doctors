import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import Navbar from '../../../layout/Navbar'
import Footer from '../../../layout/Footer'
import HeroSection from './components/HeroSection'
import TrustHighlights from './components/TrustHighlights'
import AboutDoctorSection from './components/AboutDoctorSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import InternationalPatientsSection from './components/InternationalPatientsSection'
import TreatmentProcessSection from './components/TreatmentProcessSection'
import FaqSection from './components/FaqSection'
import DoctorLeadForm from '../../../layout/DoctorLeadForm'
import HomeopathyTestimonials from './components/HomeopathyTestimonials'

const DrVidyaPalve = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <>
      {/* 🔥 SEO META TAGS */}
      <Helmet>
        <title>
          Dr. Vidya Palve | Best Homeopathy Doctor in Pune for Chronic & Lifestyle Diseases
        </title>

        <meta
          name="description"
          content="Consult Dr. Vidya Palve, an experienced homeopathy doctor in Pune, offering personalized treatment for chronic, skin, hormonal, digestive, and lifestyle disorders. Trusted by patients worldwide."
        />

        <meta
          name="keywords"
          content="Dr Vidya Palve, homeopathy doctor in Pune, best homeopathy clinic Pune, chronic disease homeopathy, skin treatment homeopathy, hormonal imbalance treatment, international homeopathy patients"
        />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="Dr. Vidya Palve | Trusted Homeopathy Doctor in Pune" />
        <meta
          property="og:description"
          content="Personalized homeopathic care by Dr. Vidya Palve for chronic and lifestyle conditions. Serving patients across India and internationally."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rysewellhospitals.com/dr-vidya-palve" />
        <meta property="og:image" content="https://rysewellhospitals.com/og/dr-vidya-palve.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Vidya Palve | Homeopathy Specialist" />
        <meta
          name="twitter:description"
          content="Natural and holistic homeopathic treatment by Dr. Vidya Palve for long-term healing."
        />
        <meta name="twitter:image" content="https://rysewellhospitals.com/og/dr-vidya-palve.jpg" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://rysewellhospitals.com/dr-vidya-palve"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <Navbar />
      <HeroSection />
      <TrustHighlights />
      <AboutDoctorSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <InternationalPatientsSection />
      <TreatmentProcessSection />
      <HomeopathyTestimonials />
      <FaqSection />
      <DoctorLeadForm />
      <Footer />
    </>
  )
}

export default DrVidyaPalve
