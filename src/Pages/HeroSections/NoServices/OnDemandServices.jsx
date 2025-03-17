import React from 'react';
import { Smartphone, Users, Cloud, ShoppingCart, Code, Server } from 'lucide-react';

const OnDemandServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "CRM",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 3,
      title: "Cloud Solution",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 4,
      title: "Marketplace Development",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 5,
      title: "API Integration Services",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 6,
      title: "Hosting Solutions",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
      icon: <Server className="w-6 h-6 text-blue-500" />,
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">On-Demand Services</h1>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Discover our comprehensive range of digital solutions designed to help your business thrive in the modern marketplace.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg p-8 transition-all hover:shadow-lg group relative"
          >
            <div className="mb-8">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors">
              {service.title}
            </h2>
            
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="absolute bottom-8 left-8">
              <a 
                href="#" 
                className="text-blue-500 font-medium flex items-center group-hover:text-blue-600 transition-colors"
              >
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnDemandServices;