
import { BadgeCheck, Clock, GraduationCap, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="relative z-10 bg-white shadow-xl rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Vishal - DevOps Expert" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-2xl">Vishal Kumar</h3>
                  <p className="text-muted-foreground mb-4">DevOps Engineer & Cloud Architect</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700 border-brand-200">
                      AWS Certified
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-tech-50 text-tech-700 border-tech-200">
                      Kubernetes
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700 border-brand-200">
                      DevOps
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-tech-50 text-tech-700 border-tech-200">
                      Cloud Architecture
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-brand-500 to-tech-500 rounded-lg"></div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-muted-foreground text-sm">Success Rate</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">87+</div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1,300+</div>
                  <div className="text-muted-foreground text-sm">Hours</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-muted-foreground text-sm">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-100/60 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
              About Me
            </div>
            <h2 className="mb-6">Solutions Architect & DevOps Expert</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                I'm Vishal, a top-rated freelancer with 98% job success on Upwork, specializing in scalable cloud architecture, secure networks, and DevOps automation.
              </p>
              
              <p>
                With over 8 years of experience in the field, I've completed more than 87 projects, totaling 1,300+ hours of work helping clients optimize their infrastructure, improve security, and automate deployments.
              </p>
              
              <p>
                My expertise spans across multiple cloud providers including AWS, Azure, and Google Cloud, as well as containerization technologies like Docker and Kubernetes. I'm passionate about designing efficient, secure, and scalable systems that help businesses focus on their core competencies.
              </p>
              
              <p>
                Whether you need help with cloud migration, infrastructure optimization, or implementing DevOps practices, I'm here to provide reliable and professional support tailored to your specific needs.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-muted rounded-lg p-4">
                <h4 className="text-lg font-medium mb-2">Technical Proficiency</h4>
                <p className="text-muted-foreground">Deep expertise across cloud platforms and infrastructure technologies</p>
              </div>
              
              <div className="border border-muted rounded-lg p-4">
                <h4 className="text-lg font-medium mb-2">Problem Solver</h4>
                <p className="text-muted-foreground">Strategic approach to complex technical challenges</p>
              </div>
              
              <div className="border border-muted rounded-lg p-4">
                <h4 className="text-lg font-medium mb-2">Clear Communication</h4>
                <p className="text-muted-foreground">Explaining complex concepts in understandable terms</p>
              </div>
              
              <div className="border border-muted rounded-lg p-4">
                <h4 className="text-lg font-medium mb-2">Client Focused</h4>
                <p className="text-muted-foreground">Dedicated to delivering results that exceed expectations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
