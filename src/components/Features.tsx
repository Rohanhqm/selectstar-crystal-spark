
import React, { useEffect } from 'react';
import { Check, PenTool, Zap, Shield, Star, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <PenTool className="h-8 w-8 text-dpurple" />,
    title: "Advanced Crystal Design",
    description: "Custom crystal engineering for precise applications in various industries, from electronics to medicine."
  },
  {
    icon: <Zap className="h-8 w-8 text-dpurple" />,
    title: "Energy Efficiency",
    description: "Developing energy-efficient crystal technologies that reduce power consumption and environmental impact."
  },
  {
    icon: <Shield className="h-8 w-8 text-dpurple" />,
    title: "Enhanced Durability",
    description: "Creating crystal structures with superior strength and resilience for demanding applications."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-dpurple" />,
    title: "Data Analysis",
    description: "Advanced analytics to optimize crystal properties and performance metrics for your specific needs."
  },
  {
    icon: <Star className="h-8 w-8 text-dpurple" />,
    title: "Quality Assurance",
    description: "Rigorous testing protocols to ensure consistent crystal quality and performance reliability."
  }
];

const Features = () => {
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
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Crystal Technology</span> Features
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our cutting-edge crystal research and development can transform your industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col items-start animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-3 rounded-lg bg-dpurple/10 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-dpurple mr-2" />
                  <span className="text-sm text-gray-600">Industry-leading quality</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-dpurple mr-2" />
                  <span className="text-sm text-gray-600">Research-backed solutions</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-hero rounded-2xl p-10 text-white animate-on-scroll">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-white/80">
                Join the companies already benefiting from our crystal technologies
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-dpurple rounded-lg font-medium hover:bg-white/90 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
