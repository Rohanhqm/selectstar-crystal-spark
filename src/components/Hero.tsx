
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Add animation on page load
    const animated = document.querySelectorAll('.animate-on-scroll');
    animated.forEach(element => {
      element.classList.add('is-visible');
    });
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" id="home">
      {/* Background gradient element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-dpurple-light/20 to-transparent opacity-60 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cutting Edge <span className="gradient-text">Crystal Research</span> and Technologies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              D-Crystal is dedicated to pioneering groundbreaking research in crystal engineering and development, enabling the next generation of technological innovations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-hero hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg">
                Explore Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-dpurple text-dpurple hover:bg-dpurple-light/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-2">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Crystal research technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <div className="p-6 glass-card text-center">
            <h3 className="text-4xl font-bold mb-2 gradient-text">25+</h3>
            <p className="text-gray-600">Years of Research Experience</p>
          </div>
          <div className="p-6 glass-card text-center">
            <h3 className="text-4xl font-bold mb-2 gradient-text">100+</h3>
            <p className="text-gray-600">Published Studies</p>
          </div>
          <div className="p-6 glass-card text-center">
            <h3 className="text-4xl font-bold mb-2 gradient-text">50+</h3>
            <p className="text-gray-600">Industry Partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
