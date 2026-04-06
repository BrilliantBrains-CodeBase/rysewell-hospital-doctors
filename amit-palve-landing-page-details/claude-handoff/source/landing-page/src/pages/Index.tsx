import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import StatsStrip from "@/components/StatsStrip";
import TreatmentsSection from "@/components/TreatmentsSection";
import VideoConsultSection from "@/components/VideoConsultSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  useScrollAnimation();
  useCountUp();

  return (
    <>
      <Navbar onBookClick={openModal} />
      <HeroSection onBookClick={openModal} />
      <TrustBar />
      <ProblemSection />
      <AboutSection />
      <StatsStrip />
      <TreatmentsSection />
      <VideoConsultSection onBookClick={openModal} />
      <WhyChooseSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA onBookClick={openModal} />
      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* WhatsApp Float */}
      <a href="https://wa.me/917709862164" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <MessageCircle size={28} />
      </a>
    </>
  );
};

export default Index;
