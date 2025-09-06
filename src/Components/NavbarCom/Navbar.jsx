import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, Menu, X, ArrowRight } from 'lucide-react';
import LogoImages from "./images/logoUPSB1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      if (isContactDropdownOpen && !event.target.closest('.contact-dropdown-container')) {
        setIsContactDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown, isContactDropdownOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsContactDropdownOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Custom Software Development', path: '/services/custom-software-development' },
        { name: 'Social Media Management', path: '/services/social-media' },
        { name: 'CRM Solutions', path: '/services/crm' },
        { name: 'Cloud Solutions', path: '/services/cloud' },
        // { name: 'Web Development', path: '/services/web-development' },
        { name: 'AI-Powered Tools', path: '/services/ai' }
      ]
    },
    // {
    //   name: 'Products',
    //   dropdown: [
    //     { name: 'WhatsApp API', path: '/products/whatsapp-api' },
    //     { name: 'ERP Solutions', path: '/products/erp' },
    //     { name: 'E-Commerce Platforms', path: '/products/ecommerce' },
    //     { name: 'Cybersecurity Solutions', path: '/products/cybersecurity' },
    //     { name: 'Digital Marketing Tool', path: '/products/marketing' }
    //   ]
    // },
    {
      name: 'Blog',
      dropdown: [
        { name: 'Educational Content', path: '/blog' },
        { name: 'Industry Updates', path: '/blog/industoryupdates' },
        // { name: 'SEO Insights', path: '/blog/seo' }
      ]
    },
    { name: 'Careers', path: '/careers' }
  ];

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: '+1 (555) 123-4567' },
    { icon: <Mail className="h-4 w-4" />, text: 'info@upsbindia.com' },
    { icon: <MapPin className="h-4 w-4" />, text: '123 Tech Park, Bangalore, India' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src={LogoImages} 
                alt="UPSB India" 
                className={`object-contain rounded-full transition-all duration-300 ${
                  scrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}
              />
              <span className={`font-bold text-gray-800 hidden sm:inline-block transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>UPSB India</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              !item.dropdown ? (
                <a 
                  key={index}
                  href={item.path} 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              ) : (
                <div key={index} className="relative dropdown-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(item.name);
                    }}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center relative group"
                  >
                    {item.name}
                    {activeDropdown === item.name ? (
                      <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    )}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/4 transition-all duration-300"></span>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-gray-200 overflow-hidden z-50"
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <a 
                              key={dropIndex}
                              href={dropItem.path} 
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            ))}

            {/* Contact Dropdown */}
            <div className="relative contact-dropdown-container ml-2">
              <button
                onClick={toggleContactDropdown}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center relative group"
              >
                Contact
                {isContactDropdownOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                )}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/4 transition-all duration-300"></span>
              </button>
              <AnimatePresence>
                {isContactDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h3>
                      <div className="space-y-3">
                        {contactInfo.map((info, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                              {info.icon}
                            </div>
                            <p className="ml-2 text-sm text-gray-600">{info.text}</p>
                          </div>
                        ))}
                      </div>
                      <a
                        href="/contact"
                        className="mt-4 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                      >
                        Contact Form
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg ml-2 flex items-center"
            >
              Start a Project
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                !item.dropdown ? (
                  <a 
                    key={index}
                    href={item.path} 
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={handleMobileLinkClick}
                  >
                    {item.name}
                  </a>
                ) : (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <span>{item.name}</span>
                      {activeDropdown === item.name ? (
                        <ChevronUp className="h-5 w-5 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 space-y-1 border-l-2 border-blue-100 ml-3"
                        >
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <a 
                              key={dropIndex}
                              href={dropItem.path} 
                              className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              onClick={handleMobileLinkClick}
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              ))}

              {/* Mobile Contact Section */}
              <div className="pt-2">
                <button
                  onClick={() => toggleDropdown('contact')}
                  className="flex justify-between items-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span>Contact</span>
                  {activeDropdown === 'contact' ? (
                    <ChevronUp className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'contact' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-3 border-l-2 border-blue-100 ml-3 pt-2"
                    >
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            {info.icon}
                          </div>
                          <p className="ml-2 text-sm text-gray-600">{info.text}</p>
                        </div>
                      ))}
                      <a
                        href="/contact"
                        className="block mt-2 w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                        onClick={handleMobileLinkClick}
                      >
                        Contact Form
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3">
                <a 
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-md font-medium transition-colors duration-200 shadow-md"
                  onClick={handleMobileLinkClick}
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;