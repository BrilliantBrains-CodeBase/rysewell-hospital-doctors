
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

const DrVidyaPalve = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustHighlights />
      <AboutDoctorSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <InternationalPatientsSection />
      <TreatmentProcessSection />
      <FaqSection />
      <DoctorLeadForm />
      <Footer />
    </div>
  )
}

export default DrVidyaPalve
