
import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-tech-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-100/60 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Contact Me
          </div>
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how I can support your IT infrastructure or automation needs.
            Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-border">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a topic</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="DevOps">DevOps & Automation</option>
                  <option value="Security">Security Solutions</option>
                  <option value="System Administration">System Administration</option>
                  <option value="Database Services">Database Services</option>
                  <option value="End-User Computing">End-User Computing</option>
                  <option value="Networking">Networking</option>
                  <option value="Backup Solutions">Backup & Recovery</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell me about your project or inquiry"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-100/60 flex items-center justify-center text-brand-700 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <p className="text-muted-foreground">Indore, India</p>
                    <p className="text-muted-foreground text-sm mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-100/60 flex items-center justify-center text-brand-700 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Email</h4>
                    <a href="mailto:contact@vishals.com" className="text-brand-600 hover:text-brand-800 transition-colors">
                      contact@vishals.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-100/60 flex items-center justify-center text-brand-700 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Phone</h4>
                    <a href="tel:+911234567890" className="text-brand-600 hover:text-brand-800 transition-colors">
                      +91 12345 67890
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for new projects and consulting engagements.
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <span className="text-sm font-medium">Within 24 hours</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Working Hours</span>
                  <span className="text-sm font-medium">Flexible</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Time Zone</span>
                  <span className="text-sm font-medium">IST (GMT+5:30)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-500/90 to-tech-500/90 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
              <p className="mb-4 text-white/80">
                Let me help you take your IT infrastructure to the next level.
              </p>
              <a 
                href="mailto:contact@vishals.com"
                className="inline-flex items-center justify-center rounded-md bg-white text-brand-700 px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactSection;
