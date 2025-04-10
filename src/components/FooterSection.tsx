
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">Vishal's Cloud Ops</div>
            <p className="text-muted-foreground max-w-md mb-6">
              Professional DevOps and cloud engineering services for businesses of all sizes.
              Specializing in infrastructure automation, security, and system administration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-brand-600 hover:border-brand-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-brand-600 hover:border-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-brand-600 hover:border-brand-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@vishals.com" 
                className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-brand-600 hover:border-brand-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Cloud & Infrastructure</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">DevOps & Automation</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Security & Authentication</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">System Administration</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Databases & Caching</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">End-User Computing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-brand-600 transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-brand-600 transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-brand-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Vishal's Cloud Ops. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
