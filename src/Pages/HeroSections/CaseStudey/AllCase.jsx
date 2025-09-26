import React, { useState, useEffect, useRef } from 'react';
import lev1 from "./images/APPCase.jpeg";
import lev2 from "./images/DashboardAnalytics.jpeg";
import lev3 from "./images/E-commerce.jpeg";
import lev4 from "./images/HealthTracking.jpeg";
import lev5 from "./images/FinancialServices.jpeg";
import lev6 from "./images/SchoolERP.jpeg";
import lev7 from "./images/Hall.jpeg";

const CaseStudyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  
  // Sample case study data
  const caseStudies = [
    {
      id: 1,
      name: "Flight Booking App",
      image: lev1,
      description: "Mobile app redesign for seamless flight booking experience"
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      image: lev2,
      description: "Data visualization dashboard for business intelligence"
    },
    {
      id: 3,
      name: "E-commerce Platform",
      image: lev3,
      description: "Modern shopping experience with intuitive navigation"
    },
    {
      id: 4,
      name: "Health Tracking App",
      image: lev4,
      description: "Personal wellness monitoring with detailed insights"
    },
    {
      id: 5,
      name: "Financial Services Portal",
      image: lev5,
      description: "Secure banking interface with transaction management"
    },
    {
        id: 6,
        name: "School ERP",
        image: lev6,
        description: "Comprehensive School ERP solution streamlining administration, academics, finance, and communication with automation"
    },
    {
      id: 7,
      name: "Marriage Hall Website",
      image: lev7,
      description: "Elegant marriage hall website showcasing venues, services, pricing, and booking options with stunning visuals, seamless navigation"
    },
  ];

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [caseStudies.length]);
  
  // Scroll to active case study when activeIndex changes
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[activeIndex];
      
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index);
    // In a real application, you would navigate to the service page here
    console.log(`Navigating to case study: ${caseStudies[index].name}`);
  };

  return (
    <div className="w-full bg-gray-900 text-white py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-400 mb-4">Latest Case Studies</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Let's Explore Our Latest <br /><span className="text-blue-400 relative inline-block">
            Case Studies
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"></span>
          </span>
        </h2>
      </div>
      
      {/* Case Studies Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-6 px-4 md:px-8 lg:px-16 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {caseStudies.map((study, index) => (
          <div 
            key={study.id}
            className={`flex-shrink-0 w-64 md:w-80 mx-3 bg-white bg-opacity-10 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer transform ${
              activeIndex === index ? 'scale-105 shadow-xl' : 'scale-100'
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative h-48 md:h-64">
              <img 
                src={study.image} 
                alt={study.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold mb-2">{study.name}</h3>
              <p className="text-sm text-gray-300">{study.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-blue-400 w-4' : 'bg-gray-500'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to case study ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyShowcase;