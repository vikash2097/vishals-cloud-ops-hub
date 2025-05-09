
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "He's fast and understands and fixes every issue I have had so far. I'm impressed with his depth of knowledge across multiple platforms.",
    author: "Client",
    role: "March 2025",
    rating: 5
  },
  {
    quote: "Efficiently set up everything with no lag. Brilliant work. He managed to solve our complex infrastructure issues that other consultants couldn't figure out.",
    author: "Client",
    role: "March 2025",
    rating: 5
  },
  {
    quote: "Vishal is extremely knowledgeable in AWS and cloud infrastructure. He helped us migrate our entire platform with zero downtime.",
    author: "Technology Startup",
    role: "February 2025",
    rating: 5
  },
  {
    quote: "Excellent communication skills and deep technical knowledge. We've been working with Vishal for over a year on our DevOps needs.",
    author: "E-commerce Client",
    role: "January 2025",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-rich-600 text-rich-600" />
      ));
  };

  return (
    <section id="testimonials" className="section-padding bg-elegant-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-heading">
            Testimonials
          </div>
          <h2 className="mb-6 font-serif text-elegant-950">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it — here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-elegant-100 rounded-md p-7 shadow-elegant card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-5">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="mb-8">
                <p className="text-lg text-foreground italic leading-relaxed">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rich-600 to-elegant-700 flex items-center justify-center text-white font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center bg-elegant-100 text-elegant-800 rounded-full px-4 py-2 text-sm font-medium border border-elegant-200 mb-5 shadow-subtle">
            <Star className="h-4 w-4 fill-rich-600 text-rich-600 mr-2" />
            <span>98% Client Satisfaction Rate</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-serif text-elegant-950">Ready to join my list of satisfied clients?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how I can help solve your technical challenges and improve your IT infrastructure.
          </p>
          <a href="#contact" className="bg-rich-700 hover:bg-rich-800 text-elegant-50 px-8 py-3 text-base inline-block rounded-md transition-all">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
