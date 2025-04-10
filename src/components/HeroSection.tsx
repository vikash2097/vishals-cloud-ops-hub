
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-tech-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      {/* Code pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTI5LjUzIDExLjkzYy41OS0uMzQgMS4yLS42OSAyLjExLS45M2wxLjk3LS40NXYxMS43OWwtMS4xMy4zM2MtMS4yNC4zNi0yLjM1Ljk3LTMuMjkgMS45NS0uNy43My0xLjI3IDEuNjQtMS43MSAyLjcybC0xLjU1IDMuODJ2LTIwLjA0bDEuODUuODQtLjE1LS4wN3ptLTEuNjYgMjMuMTV2MTAuNmwzLjUtLjg3YzEuMTgtLjIzIDIuMDItLjQgMi41My0uNTJsMi0uNnYtMTEuNThsLTIuOS44NmMtLjc1LjIzLTEuNC41Mi0xLjk1Ljg4LS42Ny40NS0xLjI0IDEuMS0xLjcgMS45NnptMTUuNi05LjFMMzkuNTggMjVsLS41My0uM3YyMC44M2wtMi4yNy0uNjFjLS43LS4xOS0xLjMtLjQyLTEuODEtLjctLjUtLjI3LS45NC0uNi0xLjMyLTEuMDEtLjMtLjMyLS41OC0uNjgtLjg1LTEuMXYtMjEuMDNsMi4wNS42OGMuOTYuMzMgMS42NS42NiAyLjA4Ljk3eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
              Available for new clients
            </span>
          </div>
          
          <h1 className="mb-6">
            <span className="block">Solutions Architect &</span>
            <span className="gradient-text">DevOps Expert</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Reliable MSP services tailored for small businesses, startups, and tech teams.
            Get expert support in cloud, automation, security, and remote IT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-3 flex items-center gap-2">
              Let's Work Together <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="btn-outlined text-lg px-8 py-3">
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://cdn.worldvectorlogo.com/logos/azure-1.svg" alt="Azure" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://cdn.worldvectorlogo.com/logos/kubernetes.svg" alt="Kubernetes" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
