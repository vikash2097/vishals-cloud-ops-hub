
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold gradient-text">Vishal's Cloud Ops</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-foreground focus:outline-none"
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
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a
              href="#about"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#projects"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="btn-primary w-full flex justify-center"
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
