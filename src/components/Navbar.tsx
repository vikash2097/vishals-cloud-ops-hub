
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-warm-dark/90 border-b border-warm/30 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-white font-serif">Vishal's <span className="text-warm-light">Cloud Ops</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-light hover:text-white transition-colors text-sm">
            About
          </a>
          <a href="#services" className="text-light hover:text-white transition-colors text-sm">
            Services
          </a>
          <a href="#projects" className="text-light hover:text-white transition-colors text-sm">
            Projects
          </a>
          <a href="#testimonials" className="text-light hover:text-white transition-colors text-sm">
            Testimonials
          </a>
          <a href="#contact" className="bg-warm hover:bg-warm-light text-white px-4 py-2 rounded-md transition-all text-sm">
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden rich-glass animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a
              href="#about"
              className="py-2 text-light hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="py-2 text-light hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#projects"
              className="py-2 text-light hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="py-2 text-light hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-warm hover:bg-warm-light text-white py-2 w-full flex justify-center rounded-md"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
