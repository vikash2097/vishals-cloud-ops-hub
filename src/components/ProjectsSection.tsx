
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
    <section id="projects" className="section-padding elegant-dark">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-elegant-800/60 px-3 py-1 text-sm font-medium text-elegant-100 mb-4">
            Featured Projects
          </div>
          <h2 className="mb-6 font-serif text-elegant-50">Recent Client Success Stories</h2>
          <p className="text-lg text-elegant-200 max-w-2xl mx-auto">
            Check out some of my recent projects and see how I've helped clients solve 
            their technical challenges with tailored solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rich-glass rounded-md overflow-hidden shadow-elegant card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-7">
                <div className="flex justify-between items-start mb-5">
                  <div className="h-14 w-14 rounded-md bg-elegant-800/60 border border-elegant-700/30 flex items-center justify-center text-elegant-200">
                    <project.icon className="h-7 w-7" />
                  </div>
                  <div className="bg-rich-700/20 text-rich-300 rounded-full px-3 py-1.5 text-xs font-medium border border-rich-600/20">
                    Case Study
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-elegant-100">{project.title}</h3>
                <p className="text-elegant-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center rounded-full border border-elegant-700/30 px-2.5 py-1 text-xs font-medium bg-elegant-800/50 text-elegant-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-sm font-medium text-rich-300 hover:text-rich-200 transition-colors group">
                  View Case Study 
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 border border-elegant-800/30 rounded-md p-10 text-center bg-gradient-to-r from-elegant-900 to-rich-950/90 shadow-elegant">
          <h3 className="text-2xl font-bold mb-4 font-serif text-elegant-50">Ready to start your project?</h3>
          <p className="text-elegant-200 max-w-2xl mx-auto mb-8">
            I'm currently available for new projects and would love to discuss how I can help you achieve your technical goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#contact" className="bg-rich-700 hover:bg-rich-800 text-elegant-50 px-8 py-3 text-base rounded-md transition-all">
              Contact Me
            </a>
            <a href="#services" className="border border-elegant-700 text-elegant-100 bg-elegant-800/30 hover:bg-elegant-800/50 backdrop-blur-sm px-8 py-3 text-base rounded-md transition-all">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
