import React from 'react';
import { Phone,Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Circuit board background pattern - SVG lines for animation effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 L100 50 M50 0 L50 100 M25 25 L75 75 M75 25 L25 75" stroke="#4299e1" strokeWidth="1" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded transform rotate-45">
                <div className="transform -rotate-45 text-white font-bold">UPSB</div>
              </div>
              <span className="ml-3 text-2xl font-bold text-amber-100">UPSB India Technology</span>
            </div>
            
            <p className="text-gray-300">
              Financial planners help people to gain knowledge aboutw
            </p>
            
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div className="ml-3">
                <div className="text-gray-400">Phone Number</div>
                <div className="text-white font-semibold">(+91) 95541 56674</div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <div className="ml-3">
                <div className="text-gray-400">Email Id</div>
                <div className="text-white font-semibold">upsbindiatech@gmail.com</div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-100">Quick Link</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <ChevronRight size={18} className="text-blue-500" />
                <Link to="/services/custom-software-development" className="hover:text-blue-400 transition-colors">Service</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={18} className="text-blue-500" />
                <Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={18} className="text-blue-500" />
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={18} className="text-blue-500" />
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
         
          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-100">Follow Us</h3>
            <p className="text-gray-300 mb-4">
              The Latest News, Articles, Sent To Your Inbox Weekly.
            </p>
            <div className="flex space-x-2 mt-6">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.53 18.4L9.5 13H7V10h2.5V8c0-2.56 1.17-4 3.9-4H16v3h-1.67C13.18 7 13 7.93 13 8.83V10h3l-.5 3H13v5.4a10 10 0 006.5-8.9A10 10 0 109.53 18.4z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.3a9.8 9.8 0 01-2.83.78 5 5 0 002.17-2.72 9.9 9.9 0 01-3.13 1.19 4.92 4.92 0 00-8.38 4.48A13.94 13.94 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06c0 2.38 1.7 4.37 3.95 4.82a5 5 0 01-2.21.08 4.94 4.94 0 004.6 3.42 9.87 9.87 0 01-6.1 2.1c-.4 0-.79-.02-1.17-.07a14 14 0 007.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0024 4.3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© Copyright 2025, UPSB India Technology | All Rights Reserved. </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;