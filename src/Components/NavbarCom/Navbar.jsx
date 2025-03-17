import React, { useState } from 'react';
import LogoImages from "./images/logoUPSB1.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Common styles for text
  const linkStyles = "text-[#1a1a1a] font-semibold hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm";
  const dropdownItemStyles = "block px-4 py-2 text-[#1a1a1a] font-semibold hover:bg-gray-100 text-sm";
  const mobileItemStyles = "block px-3 py-2 rounded-md text-[#1a1a1a] font-semibold text-base";
  const mobileDropdownItemStyles = "block px-3 py-2 text-[#1a1a1a] font-semibold text-sm";

  return (
    <nav className="bg-[#f2f2f2] text-[#1a1a1a] left-0 right-0 py-2 px-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              <img 
                src= {LogoImages} 
                alt="Logo" 
                className="w-[66px] h-[66px] object-contain rounded-full"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className={linkStyles}>Home</a>
            <a href="#" className={linkStyles}>About</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className={linkStyles}
              >
                Services
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
                  <a href="#" className={dropdownItemStyles}>Custom Software Development</a>
                  <a href="#" className={dropdownItemStyles}>Social Media Management</a>
                  <a href="#" className={dropdownItemStyles}>CRM</a>
                  <a href="#" className={dropdownItemStyles}>Cloud Solutions</a>
                  <a href="#" className={dropdownItemStyles}>Web Development</a>
                  <a href="#" className={dropdownItemStyles}>AI-Powered Tools</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className={linkStyles}
              >
                Products
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
                  <a href="#" className={dropdownItemStyles}>WhatsApp API</a>
                  <a href="#" className={dropdownItemStyles}>ERP Solutions</a>
                  <a href="#" className={dropdownItemStyles}>E-Commerce Platforms</a>
                  <a href="#" className={dropdownItemStyles}>Cybersecurity Solutions</a>
                  <a href="#" className={dropdownItemStyles}>Digital Marketing Tool</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('blogs')}
                className={linkStyles}
              >
                Blog
              </button>
              {activeDropdown === 'blogs' && (
                <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
                  <a href="#" className={dropdownItemStyles}>Educational Content</a>
                  <a href="#" className={dropdownItemStyles}>Regular Updates</a>
                  <a href="#" className={dropdownItemStyles}>SEO Benefits</a>
                </div>
              )}
            </div>

            <a href="#" className={linkStyles}>Careers</a>

            <button className="bg-[#072273] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-semibold">
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#011526] hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F2F2F2]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className={mobileItemStyles}>Home</a>
            <a href="#" className={mobileItemStyles}>About</a>
            
            <button
              onClick={() => toggleDropdown('services')}
              className={`${mobileItemStyles} w-full text-left`}
            >
              Services
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-5">
                <a href="#" className={mobileDropdownItemStyles}>Custom Software Development</a>
                <a href="#" className={mobileDropdownItemStyles}>Social Media Management</a>
                <a href="#" className={mobileDropdownItemStyles}>Cloud Solutions</a>
                <a href="#" className={mobileDropdownItemStyles}>Web Development</a>
                <a href="#" className={mobileDropdownItemStyles}>CRM</a>
                <a href="#" className={mobileDropdownItemStyles}>AI-Powered Tools</a>
                <a href="#" className={mobileDropdownItemStyles}>UI/UX Design</a>
              </div>
            )}

            <button
              onClick={() => toggleDropdown('products')}
              className={`${mobileItemStyles} w-full text-left`}
            >
              Products
            </button>
            {activeDropdown === 'products' && (
              <div className="pl-5">
                <a href="#" className={mobileDropdownItemStyles}>WhatsApp API</a>
                <a href="#" className={mobileDropdownItemStyles}>ERP Solutions</a>
                <a href="#" className={mobileDropdownItemStyles}>E-Commerce Platforms</a>
                <a href="#" className={mobileDropdownItemStyles}>Cybersecurity Solutions</a>
                <a href="#" className={mobileDropdownItemStyles}>Digital Marketing Tools</a>
              </div>
            )}

            <button
              onClick={() => toggleDropdown('blog')}
              className={`${mobileItemStyles} w-full text-left`}
            >
              Blog
            </button>
            {activeDropdown === 'blog' && (
              <div className="pl-5">
                <a href="#" className={mobileDropdownItemStyles}>Educational Content</a>
                <a href="#" className={mobileDropdownItemStyles}>Regular Updates</a>
                <a href="#" className={mobileDropdownItemStyles}>SEO Benefits</a>
              </div>
            )}

            <a href="#" className={mobileItemStyles}>Careers</a>

            <button className="bg-[#072273] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-semibold w-full text-left">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;