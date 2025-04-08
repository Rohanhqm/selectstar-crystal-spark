
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Team members data
const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Crystal Researcher",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Head of Material Science",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Emily Tanaka",
    role: "Crystal Engineering Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const About = () => {
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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* About Us */}
        <div className="flex flex-col lg:flex-row items-center mb-24">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">D-Crystal</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1998, D-Crystal has been at the forefront of crystal research and technology development for over two decades. Our mission is to pioneer innovative crystal engineering solutions that drive advancement across multiple industries.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We combine deep scientific expertise with cutting-edge technological capabilities to create custom crystal solutions that address complex challenges and open new possibilities for our clients worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-1">Our Mission</h4>
                <p className="text-gray-600">Advancing crystal technology for a better future</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Our Vision</h4>
                <p className="text-gray-600">Leading the next generation of materials science</p>
              </div>
            </div>
            <Button className="bg-dpurple hover:bg-dpurple-dark">Learn Our Story</Button>
          </div>
          
          <div className="w-full lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="D-Crystal research lab" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-gradient-hero rounded-lg shadow-lg text-white">
                <p className="font-bold">25+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Led by world-renowned researchers and engineers with decades of experience in crystal science and technology development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-dpurple">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
