
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 elegant-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-warm/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-warm-dark/20 to-transparent"></div>
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-warm/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-warm/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yMiAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTIyYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0yMiAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block animate-fade-in">
            <span className="inline-flex items-center rounded-full border border-warm/20 bg-warm-dark/50 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Available for new clients
            </span>
          </div>
          
          <h1 className="mb-10 animate-slide-down">
            <span className="block font-serif text-white mb-3 font-light">Solutions Architect &</span>
            <span className="gradient-text font-serif">DevOps Expert</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Reliable MSP services tailored for small businesses, startups, and tech teams.
            Get expert support in cloud, automation, security, and remote IT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="bg-warm hover:bg-warm-dark text-white text-base px-8 py-3.5 flex items-center gap-2 shadow-elegant rounded-md transition-all">
              Let's Work Together <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="border border-warm/30 text-white bg-warm/30 hover:bg-warm/50 backdrop-blur-sm text-base px-8 py-3.5 rounded-md hover:shadow-sm transition-all">
              Explore Services
            </a>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-8 animate-fade-in opacity-60 hover:opacity-100 transition-opacity" style={{ animationDelay: "0.5s" }}>
            <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-8 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.worldvectorlogo.com/logos/azure-1.svg" alt="Azure" className="h-8 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" className="h-8 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.worldvectorlogo.com/logos/kubernetes.svg" alt="Kubernetes" className="h-8 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" className="h-8 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
