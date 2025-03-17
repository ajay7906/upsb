import React from 'react';
import { ArrowRight } from 'lucide-react';
import sale from "./images/Sale1.png";

const BusinessLandingPage = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-indigo-500 transform -rotate-45"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-indigo-500 transform -rotate-45"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
              Are you ready to start a project?
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6">
              We are eager to hear from you
            </h2>
            <p className="text-gray-600 mb-8">
              We provide the best solutions for your business needs. Our team
              of experts is dedicated to delivering high-quality services tailored
              to your requirements.
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-full bg-gray-200 rounded-full absolute transform translate-x-1/4 -translate-y-1/8"></div>
            <div className="relative z-10 p-4 md:p-0 flex justify-center items-center h-full">
              <div className="bg-white rounded-full p-2 shadow-lg w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
                <img 
                  src= {sale} 
                  alt="Business professional with laptop"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-indigo-500 transform -rotate-45"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-indigo-500 transform -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLandingPage;