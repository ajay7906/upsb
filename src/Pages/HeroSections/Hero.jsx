import React from 'react';
import ServiecsSidebar from "./Sidebar/ServiecsSidebar";
import ImagesSidebar from "./ImagesSidebar/ImagesSidebar";
import Case from "./CaseStudey/AllCase";
import ResponsiveSolutions from "./Responsive/ResponsiveSolutions";
import OnDemandServices from "./NoServices/OnDemandServices";
import WebFeatures from "./Features/WebFeatures";
import StartFrom from "./StartFrom/StartFrom";


import lev1 from "./images/heroSec.jpeg";


const UPSBIndiaHero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center pt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full mb-6">
              Welcome to UPSB India Technology
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Modern & Digital <br /> <span className="text-blue-600">IT Solutions </span><br />
              <span className="text-orange-400">For Your Business.</span>
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-lg">
              We, at UPSB India Technology, are not another technology company, we are
              your partner in growth, innovation, and transformation. With our
              ever-changing digital world, we are here to bring forward your
              business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/services" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-full"
              >
                Explore Our Services 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="/about" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Web Dev</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full">ERP</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full">UI/UX</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Mobile Apps</span>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full">CRM</span>
              <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full">GenAI Dev</span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full">Software Development</span>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src={lev1} 
                alt="Hero" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
    return (
      <>
          <UPSBIndiaHero/>
          <ServiecsSidebar/>    
          <ResponsiveSolutions/>
          <ImagesSidebar/>
          <OnDemandServices/>
          <Case/>       
          <WebFeatures/>
          <StartFrom/>             
      </>
    )
  }
  
  export default App;
