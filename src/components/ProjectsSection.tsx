
import { 
  ArrowUpRight, 
  Globe, 
  Server, 
  ShieldCheck, 
  Workflow 
} from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: "Cloudflare Proxy to Google Cloud",
    description: "Set up a secure reverse proxy using Cloudflare Workers to route traffic to Google Cloud Storage, implementing custom caching rules and security headers.",
    tags: ["Cloudflare", "GCP", "Security", "Proxy"]
  },
  {
    icon: Server,
    title: "Advanced Plex Media Server",
    description: "Designed and implemented a comprehensive media server solution using Docker containers with Plex, Sonarr, Radarr and optimized 4K streaming.",
    tags: ["Docker", "Media Server", "Nginx", "Linux"]
  },
  {
    icon: ShieldCheck,
    title: "DNS & Reverse Proxy Config",
    description: "Configured high-availability DNS system with Cloudflare and IONOS, implementing secure reverse proxy with detailed monitoring and failover.",
    tags: ["DNS", "HA", "Proxy", "Security"]
  },
  {
    icon: Workflow,
    title: "CI/CD Pipeline Setup",
    description: "Implemented a robust CI/CD pipeline using GitLab CI/CD, Docker, and Kubernetes for automated testing and deployment of microservices.",
    tags: ["CI/CD", "Docker", "K8s", "GitLab"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-brand-100/60 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Featured Projects
          </div>
          <h2 className="mb-6">Recent Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Check out some of my recent projects and see how I've helped clients solve 
            their technical challenges with tailored solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm card-hover"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-lg bg-brand-100/60 flex items-center justify-center text-brand-700">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="bg-secondary/10 text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                    Case Study
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-muted text-muted-foreground border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors">
                  View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-brand-50 to-tech-50 border border-brand-100/40 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm currently available for new projects and would love to discuss how I can help you achieve your technical goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#services" className="btn-outlined">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
