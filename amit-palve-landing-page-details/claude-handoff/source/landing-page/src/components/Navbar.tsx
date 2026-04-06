import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Video Consult", href: "#video-consult" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-heading text-xl md:text-2xl font-bold ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Dr. Amit Palve<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`hover:text-primary transition-colors text-sm font-medium ${scrolled ? "text-foreground/80" : "text-primary-foreground/80"}`}>
              {l.label}
            </a>
          ))}
          <button onClick={onBookClick} className="btn-primary text-sm">Book Appointment</button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 shadow-lg">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium border-b border-border/50">
              {l.label}
            </a>
          ))}
          <button onClick={() => { onBookClick(); setMenuOpen(false); }} className="btn-primary w-full mt-4 text-center">Book Appointment</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
