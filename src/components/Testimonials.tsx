
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "D-Crystal's innovative approach to crystal engineering has dramatically improved our product performance while reducing costs.",
    name: "Alex Thompson",
    title: "CTO, TechVision Inc.",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "The research team at D-Crystal helped us overcome significant materials challenges that had been limiting our product development for years.",
    name: "Jessica Wong",
    title: "Head of R&D",
    company: "Quantum Systems",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "We've been working with D-Crystal for over five years, and their crystal technologies have been integral to our recent breakthroughs in medical imaging.",
    name: "Dr. Marcus Chen",
    title: "Medical Director",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Learn how our crystal technologies have helped businesses across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Quote className="h-10 w-10 text-dpurple opacity-50 mb-6" />
              <p className="text-gray-700 mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-10">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos would go here - using placeholder divs */}
            <div className="h-12 w-32 rounded-md bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">TechCorp</span>
            </div>
            <div className="h-12 w-32 rounded-md bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Innovex</span>
            </div>
            <div className="h-12 w-32 rounded-md bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">GlobalTech</span>
            </div>
            <div className="h-12 w-32 rounded-md bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">FutureSys</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
