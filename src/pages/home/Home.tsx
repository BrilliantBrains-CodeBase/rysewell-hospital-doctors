import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Phone, MapPin, Clock, Award, CheckCircle, Star } from "lucide-react"
import Footer from "../../layout/Footer"
import Navbar from "../../layout/Navbar"

const doctors = [
  {
    name: "Dr. Amit Palve",
    metaurl: "doctor/dr-amit-palve",
    image: "/DrAmitPalve.webp",
    role: "Founder & Director, RyseWell Multispeciality Hospital",
    specialization: "Consultant Physician & Diabetologist",
    experience: "15+ Years Experience",
    rating: 4.9,
    patients: "5000+",
  },
  {
    name: "Dr. Vidya Palve",
    metaurl: "doctor/dr-vidya-palve",
    image: "/public/DrVidyaPalve.webp",
    role: "Associate Medical Director & Co-Founder",
    specialization: "Consultant Homeopath",
    experience: "10+ Years Experience",
    rating: 4.8,
    patients: "3000+",
  },
  {
    name: "Dr. Mayank Pathak",
    metaurl: "doctor/dr-mayank-pathak",
    image: "public/doctor-mayank.webp",
    role: "Consultant Orthopedic Surgeon",
    specialization: "Orthopedics & Joint Replacement",
    experience: "10+ Years Experience",
    rating: 4.9,
    patients: "4000+",
  },
]

const trustIndicators = [
  { icon: Award, text: "15+ Years of Excellence", color: "text-blue-600" },
  { icon: CheckCircle, text: "12,000+ Happy Patients", color: "text-green-600" },
  { icon: Star, text: "4.9★ Average Rating", color: "text-yellow-600" },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#1a5a96] to-[#2563a8] py-12 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-semibold text-white">Pune's Most Trusted Hospital</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Meet Our Expert Doctors
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
                Compassionate care delivered by experienced specialists at RyseWell Multispeciality Hospital
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
                {trustIndicators.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 shadow-lg"
                  >
                    <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              >
                <a
                  href="https://rysewellhospitals.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#63a8e4] hover:bg-[#4a90ca] text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all text-base sm:text-lg"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  Book Free Consultation
                </a>
                <a
                  href="tel:+917709862164"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0F4C81] font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all text-base sm:text-lg"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  Call: +91 77098 62164
                </a>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DOCTORS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Medical Experts
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Board-certified specialists dedicated to your health and wellbeing
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-800">{doc.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0F4C81]/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                  <span className="text-xs font-semibold text-white">{doc.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F4C81] mb-2">
                  {doc.name}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  {doc.role}
                </p>

                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  {doc.specialization}
                </p>

                {/* Patient Count */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{doc.patients} Patients Treated</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => navigate(`/${doc.metaurl}`)}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#0F4C81] to-[#1a5a96] py-3 text-sm font-bold text-white hover:shadow-lg transition-all hover:scale-105"
                  >
                    View Profile
                  </button>
                  <a
                    href="tel:+917709862164"
                    className="flex-1 rounded-xl bg-[#63a8e4] py-3 text-sm font-bold text-white hover:bg-[#4a90ca] transition-all hover:scale-105 text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0F4C81] via-[#1a5a96] to-[#2563a8] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://rysewellhospitals.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0F4C81] hover:bg-gray-50 font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-base sm:text-lg"
            >
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              Book Appointment
            </a>
            <a
              href="tel:+917709862164"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#63a8e4] text-white hover:bg-[#4a90ca] font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-base sm:text-lg"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= LOCATION MAP ================= */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Hospital
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Conveniently located in the heart of Pune
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968273.3443577632!2d72.80760903125004!3d18.559707999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1007c7cd871%3A0x5787762908e1fd99!2sDr%20Palve%20Multispecialty%20Hospital%2C%20Pune%20%7C%20%231%20for%20Expert%20Doctors%20%26%20Advanced%20Diagnostics!5e0!3m2!1sen!2sin!4v1731478980821!5m2!1sen!2sin"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <MapPin className="h-8 w-8 text-[#0F4C81] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-sm text-gray-600">Pune, Maharashtra</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <Clock className="h-8 w-8 text-[#0F4C81] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Working Hours</h4>
              <p className="text-sm text-gray-600">24/7 Emergency Care</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <Phone className="h-8 w-8 text-[#0F4C81] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
              <a href="tel:+917709862164" className="text-sm text-[#0F4C81] font-semibold hover:underline">
                +91 77098 62164
              </a>
            </div>
          </div>
        </div>
      </section>

          <Footer />

    </div>
  )
}

export default Home