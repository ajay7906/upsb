import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import web from "./images/Web.jpeg";
import software from "./images/Software.jpeg";
import ai from "./images/Ai.jpeg";
import marketing from "./images/Marketing.jpeg";
import ui from "./images/Ui&Ux.jpeg";
import mobile from "./images/Mobile.jpeg";

const ServicesImageSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  
  // Updated services with more descriptive image names
  const services = [
    {
      id: 1,
      title: "AI Solutions",
      image: ai,
      description: "Intelligent automation and data analysis",
      slug: "ai-solutions"
    },
    {
      id: 2,
      title: "Marketing",
      image: marketing,
      description: "Strategic campaigns and brand growth",
      slug: "marketing"
    },
    {
      id: 3,
      title: "Mobile App Development",
      image: mobile,
      description: "Expert mobile services crafting innovative",
      slug: "mobile-app-development"
    },
    {
      id: 4,
      title: "Software Development",
      image: software,
      description: "Custom applications and solutions",
      slug: "software-development"
    },
    {
      id: 5,
      title: "Web Development",
      image: web,
      description: "Responsive and engaging web experiences",
      slug: "web-development"
    },
    {
        id: 6,
        title: "UI&UX Designs",
        image: ui,
        description: "Creating intuitive, and user-friendly digital",
        slug: "ui&ux-designs" 
      },
  ];

  // Auto-cycle through services (left to right)
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = prevIndex === services.length - getVisibleItems() ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isHovering, services.length]);

  // Calculate visible services based on screen size
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 768) return 2; // Small tablets
      if (window.innerWidth < 1024) return 3; // Tablets
    }
    return 4; // Desktop
  };

  // Handle navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === services.length - getVisibleItems() ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? services.length - getVisibleItems() : prevIndex - 1
    );
  };

  // Improved service click handler for navigation
  const handleServiceClick = (serviceSlug) => {
    // In a real implementation, you would use one of these:
    
    // For Next.js:
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // router.push(`/services/${serviceSlug}`);
    
    // For React Router:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate(`/services/${serviceSlug}`);
    
    // For demonstration, we'll just open in a new tab
    window.open(`/services/${serviceSlug}`, '_blank');
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={prevSlide}
            aria-label="Previous services"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={nextSlide}
            aria-label="Next services"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Services showcase */}
          <div className="overflow-hidden px-8" ref={scrollRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${activeIndex * (100 / getVisibleItems())}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="min-w-[calc(25%-16px)] sm:min-w-[calc(50%-16px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-16px)] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => handleServiceClick(service.slug)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} service`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesImageSidebar;