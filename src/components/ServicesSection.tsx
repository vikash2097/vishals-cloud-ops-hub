
import { 
  Cloud, 
  Cog, 
  ShieldCheck, 
  Terminal, 
  Database, 
  Laptop, 
  Network, 
  HardDrive,
  CheckCircle2
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Expert setup and management of cloud environments for optimal performance and cost efficiency.",
    services: ["AWS", "Cloudflare", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with continuous integration and delivery solutions.",
    services: ["CI/CD Pipelines", "Ansible", "Prometheus", "Grafana", "Jenkins", "GitLab CI"]
  },
  {
    icon: ShieldCheck,
    title: "Security & Authentication",
    description: "Implement robust security solutions to protect your infrastructure and data.",
    services: ["SSO", "LDAP", "SAML", "Keycloak", "HTTPS", "Bind", "DNSMasq"]
  },
  {
    icon: Terminal,
    title: "System Administration",
    description: "Professional management and optimization of your operating systems and servers.",
    services: ["Linux", "Windows", "macOS", "Proxmox", "NGINX", "Apache"]
  },
  {
    icon: Database,
    title: "Databases & Caching",
    description: "Setup, optimization, and maintenance of database systems and caching solutions.",
    services: ["MySQL", "PostgreSQL", "MariaDB", "DynamoDB", "Redis", "Memcached"]
  },
  {
    icon: Laptop,
    title: "End-User Computing",
    description: "Comprehensive support for your end-user computing needs and remote work solutions.",
    services: ["Desktop Support", "Mobile Device Management", "VDI", "Remote Support", "Workspace Management"]
  },
  {
    icon: Network,
    title: "Networking",
    description: "Design and implementation of secure and efficient network infrastructure.",
    services: ["VPN", "Firewalls", "Load Balancing", "DNS", "DHCP", "SD-WAN"]
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description: "Protect your business with reliable backup and disaster recovery solutions.",
    services: ["Disaster Recovery", "Backup Solutions", "High Availability", "Business Continuity"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-muted/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-heading">
            Services
          </div>
          <h2 className="mb-6 font-heading">Comprehensive IT Solutions</h2>
          <p className="text-lg text-muted-foreground">
            From cloud infrastructure to end-user support, I provide a complete range of IT services
            tailored to meet the unique needs of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 shadow-subtle card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                <category.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 font-heading">{category.title}</h3>
              
              <p className="text-muted-foreground mb-5">
                {category.description}
              </p>
              
              <div className="space-y-2 mt-5 pt-4 border-t border-border">
                {category.services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    <CheckCircle2 className="service-icon" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading">Need a custom solution?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I specialize in tailoring IT solutions to meet your specific business requirements.
            Let's discuss how I can help you achieve your goals.
          </p>
          <a href="#contact" className="btn-primary px-8 py-3 text-base">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
