import heroImage from "./images/heroSec.jpeg";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiecsSidebar from "./Sidebar/ServiecsSidebar";
import ImagesSidebar from "./ImagesSidebar/ImagesSidebar";
import Case from "./CaseStudey/AllCase";
import ResponsiveSolutions from "./Responsive/ResponsiveSolutions";
import OnDemandServices from "./NoServices/OnDemandServices";
import WebFeatures from "./Features/WebFeatures";
import StartFrom from "./StartFrom/StartFrom";
import { X } from 'lucide-react';
import { Link } from "react-router-dom";

// Popup Component
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Let's Connect!
                </h2>
                <p className="text-gray-600">
                  We'd love to hear from you. Send us a message.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const UPSBIndiaHero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    { name: "Web Dev", color: "bg-blue-100 text-blue-600" },
    { name: "ERP", color: "bg-orange-100 text-orange-600" },
    { name: "UI/UX", color: "bg-pink-100 text-pink-600" },
    { name: "Mobile Apps", color: "bg-blue-100 text-blue-600" },
    { name: "CRM", color: "bg-orange-100 text-orange-600" },
    { name: "GenAI Dev", color: "bg-red-100 text-red-600" },
    { name: "Software Development", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center pt-16 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-16">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full mb-6 font-medium shadow-sm transform transition hover:scale-105">
              🚀 Welcome to UPSB India Technology
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Next-Gen Digital <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                IT Solutions
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                For Smart Business
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              At UPSB India Technology, we're your strategic partner in digital innovation. 
              Harness our cutting-edge solutions to transform your business and stay ahead 
              in the digital revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                to="/services/custom-software-development" 
                className="flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <a 
                href="/about" 
                className="flex items-center justify-center px-6 py-3.5 border-2 border-gray-200 bg-white hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-xl font-semibold transition-all duration-300"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-500 font-medium">Trusted solutions for:</p>
              <div className="flex overflow-x-auto pb-3 gap-3 scrollbar-hide">
                {services.map((service, index) => (
                  <span 
                    key={index}
                    className={`${service.color} px-4 py-2 rounded-full font-medium shadow-sm whitespace-nowrap transition-all duration-300 hover:shadow-md cursor-default`}
                  >
                    {service.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <div className="relative max-w-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 blur-2xl opacity-30 rounded-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-1 transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="Digital Solutions" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">24/7 Technical Support</p>
                      <p className="text-xs text-gray-600">Expert assistance whenever you need</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set a timer to show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      
      {/* Add the ContactPopup component */}
      <ContactPopup isOpen={showPopup} onClose={handleClosePopup} />
    </>
  )
}

export default App;