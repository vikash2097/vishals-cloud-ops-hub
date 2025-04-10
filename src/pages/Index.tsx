
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for anchor links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        // Offset for fixed header
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      });
    });

    // Update document title
    document.title = "Vishal's Cloud Ops - DevOps & Cloud Engineering Services";
    
    // Add scroll reveal effect to sections
    const revealSections = () => {
      const sections = document.querySelectorAll('section[id]:not(#hero)');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('animate-fade-up');
          section.classList.remove('opacity-0');
        }
      });
    };
    
    // Initially hide all sections except hero
    document.querySelectorAll('section[id]:not(#hero)').forEach(section => {
      section.classList.add('opacity-0');
    });
    
    // Run on page load and scroll
    revealSections();
    window.addEventListener('scroll', revealSections);
    
    return () => {
      window.removeEventListener('scroll', revealSections);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
