import React from 'react'

const Footer = () => {
  return (
    <div>
            {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-[#0F4C81] via-[#1a5a96] to-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

            {/* ABOUT US */}
            <div>
              <img 
                src="/Rysewell-logo.webp" 
                alt="Rysewell Hospital" 
                className="h-12 sm:h-16 w-auto mb-4 sm:mb-6"
              />
              <h4 className="text-base sm:text-lg font-bold mb-4">About Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm opacity-90">
                <li>
                  <a
                    href="https://rysewellhospitals.com/about-the-rysewell-hospital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    About Rysewell Hospital
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/doctor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Our Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/information-for-patients/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Patient Information
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/about-the-palve-hospital/patient-testimonials/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm opacity-90">
                <li>
                  <a
                    href="https://rysewellhospitals.com/contact-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/diagnostic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Book Lab Tests
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/treatment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Find Treatments
                  </a>
                </li>
                <li>
                  <a
                    href="https://rysewellhospitals.com/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Read Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Connect With Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm opacity-90">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100090442359211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/palve_hospital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@drpalvehospitalpvtltd-jp1yi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dr-palve-hospital-private-limited/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 sm:space-y-4 text-sm opacity-90">
                <div>
                  <p className="font-semibold mb-1">Call Us:</p>
                  <a 
                    href="tel:+917709862164" 
                    className="text-[#63a8e4] hover:text-white transition-colors font-bold text-base"
                  >
                    +91 77098 62164
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Email:</p>
                  <a
                    href="mailto:info@rysewellhospitals.com"
                    className="hover:text-[#63a8e4] transition-colors break-all"
                  >
                    info@rysewellhospitals.com
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:help@rysewellhospitals.com"
                    className="hover:text-[#63a8e4] transition-colors break-all"
                  >
                    help@rysewellhospitals.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm opacity-80">
            © {new Date().getFullYear()} Rysewell Hospitals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
