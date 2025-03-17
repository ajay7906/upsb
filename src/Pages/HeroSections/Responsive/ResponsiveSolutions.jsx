import React from 'react';
import laptop from "./images/Laptop.jpeg";
import tablet from "./images/tablet.png";
import mobile from "./images/Mobile.png";

const ResponsiveSolutionsShowcase = () => {
  return (
    <div className="w-full bg-[#f2f2f2] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout for desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Blue asterisk logo */}
            <div className="mb-6">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 12V52M12 32H52M18 18L46 46M46 18L18 46" stroke="#0066FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Responsive Solutions, Device Friendly Design.
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Discover the power of responsive design, delivering device-friendly web solutions that adapt seamlessly across screens, ensuring optimal user experiences and engagement
            </p>

            {/* Feature buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0066FF" strokeWidth="2"/>
                  <path d="M9 8H15M9 12H15M9 16H13" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="font-medium">Easy Navigation</span>
              </div>
              
              <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L10 10L15 15L20 10" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19 6L19 18" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="font-medium">Fast Speeds</span>
              </div>
            </div>
          </div>

          {/* Right column - Device mockups */}
          <div className="w-full lg:w-1/2 relative">
            {/* Desktop and tablet mockups */}
            <div className="relative">
              {/* Desktop mockup */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={laptop} 
                  alt="Desktop version of website" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              {/* Tablet mockup */}
              <div className="absolute -bottom-12 -left-8 w-2/3 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={tablet} 
                  alt="Tablet version of website" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              {/* Mobile mockup */}
              <div className="absolute -right-6 bottom-8 w-1/3 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={mobile} 
                  alt="Mobile version of website" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSolutionsShowcase;