import React, { useState, useEffect, useRef } from 'react';

const ServicesSidebar = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { name: "Branding & Design", route: "" },
    { name: "SEO", route: "" },
    { name: "IT Services", route: "" },
    { name: "Cyber Security", route: "" },
    { name: "UI & UX Design", route: "" },
    { name: "Web Development", route: "" },
    { name: "Software Development", route: "" },
    { name: "API Development", route: "" },
    { name: "E-Commerce Solutions", route: "" },
    { name: "Mobile App", route: "" },
    { name: "CRM", route: "" },
    { name: "GenAI Development", route: "" },
    { name: "ERP", route: "" },
    { name: "Digital Marketing Tools", route: "" }
  ];

  // Duplicate services for smooth infinite scrolling
  const extendedServices = [...services, ...services];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scrolling when it reaches half the length
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, [isPaused]);

  return (
    <div 
      className="w-full bg-blue-700 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto py-4 whitespace-nowrap"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          display: 'flex',
          gap: '20px',
          whiteSpace: 'nowrap'
        }}
      >
        {extendedServices.map((service, index) => (
          <a
            key={index}
            href={service.route}
            className="flex items-center flex-shrink-0 cursor-pointer px-4 py-2 mx-2 transition-all duration-300 rounded-md no-underline bg-blue-800 hover:bg-blue-900"
            style={{ minWidth: 'max-content' }}
          >
            <span className="text-white text-2xl mr-2">✱</span>
            <span className="font-medium text-lg whitespace-nowrap text-white">{service.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesSidebar;
