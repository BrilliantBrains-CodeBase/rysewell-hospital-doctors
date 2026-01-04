import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F4C81] via-[#1a5a96] to-[#0F4C81] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <img
              src="/Rysewell-logo.webp"
              alt="Rysewell Hospital"
              className="h-14 sm:h-16 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed opacity-90">
              Rysewell Multispeciality Hospital is committed to delivering
              compassionate, advanced, and patient-centric healthcare
              services with trusted medical expertise.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-90">
              {[
                ["Book Appointment", "https://rysewellhospitals.com/contact-us/"],
                ["Book Lab Tests", "https://rysewellhospitals.com/diagnostic/"],
                ["Find Treatments", "https://rysewellhospitals.com/treatment"],
                ["Blogs", "https://rysewellhospitals.com/blog/"]
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#63a8e4] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + ADDRESS */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact & Address</h4>

            <div className="space-y-4 text-sm opacity-90">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#63a8e4]" />
                <p className="leading-relaxed">
                  Sr.No.46, H.No. 1A + 1B, Plot No.1, Opp Dwarka Garden,
                  Govind Nagar Co-Op Hsg. Soc. Ltd.,
                  Chandan Nagar, Pune – 411014, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#63a8e4]" />
                <a
                  href="tel:+917709862164"
                  className="font-semibold hover:text-white"
                >
                  +91 77098 62164
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#63a8e4]" />
                <a
                  href="mailto:info@rysewellhospitals.com"
                  className="hover:text-[#63a8e4]"
                >
                  info@rysewellhospitals.com
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Connect With Us</h4>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rysewellmultispeciality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#63a8e4] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/100090442359211/about/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#63a8e4] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/company/rysewellmultispeacility-hospital-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#63a8e4] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-5">
        <p className="text-center text-xs sm:text-sm opacity-80">
          © {new Date().getFullYear()} Rysewell Hospitals. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
