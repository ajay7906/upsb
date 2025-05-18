// import React, { useState } from 'react';
// import LogoImages from "./images/logoUPSB1.jpg";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   // Common styles for text
//   const linkStyles = "text-[#1a1a1a] font-semibold hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm";
//   const dropdownItemStyles = "block px-4 py-2 text-[#1a1a1a] font-semibold hover:bg-gray-100 text-sm";
//   const mobileItemStyles = "block px-3 py-2 rounded-md text-[#1a1a1a] font-semibold text-base";
//   const mobileDropdownItemStyles = "block px-3 py-2 text-[#1a1a1a] font-semibold text-sm";

//   return (
//     <nav className="bg-[#f2f2f2] text-[#1a1a1a] left-0 right-0 py-2 px-2 fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold">
//               <img 
//                 src= {LogoImages} 
//                 alt="Logo" 
//                 className="w-[66px] h-[66px] object-contain rounded-full"
//               />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <a href="#" className={linkStyles}>Home</a>
//             <a href="#" className={linkStyles}>About</a>

//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('services')}
//                 className={linkStyles}
//               >
//                 Services
//               </button>
//               {activeDropdown === 'services' && (
//                 <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
//                   <a href="#" className={dropdownItemStyles}>Custom Software Development</a>
//                   <a href="#" className={dropdownItemStyles}>Social Media Management</a>
//                   <a href="#" className={dropdownItemStyles}>CRM</a>
//                   <a href="#" className={dropdownItemStyles}>Cloud Solutions</a>
//                   <a href="#" className={dropdownItemStyles}>Web Development</a>
//                   <a href="#" className={dropdownItemStyles}>AI-Powered Tools</a>
//                 </div>
//               )}
//             </div>

//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('products')}
//                 className={linkStyles}
//               >
//                 Products
//               </button>
//               {activeDropdown === 'products' && (
//                 <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
//                   <a href="#" className={dropdownItemStyles}>WhatsApp API</a>
//                   <a href="#" className={dropdownItemStyles}>ERP Solutions</a>
//                   <a href="#" className={dropdownItemStyles}>E-Commerce Platforms</a>
//                   <a href="#" className={dropdownItemStyles}>Cybersecurity Solutions</a>
//                   <a href="#" className={dropdownItemStyles}>Digital Marketing Tool</a>
//                 </div>
//               )}
//             </div>

//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('blogs')}
//                 className={linkStyles}
//               >
//                 Blog
//               </button>
//               {activeDropdown === 'blogs' && (
//                 <div className="absolute bg-white rounded-md mt-2 w-48 shadow-lg">
//                   <a href="#" className={dropdownItemStyles}>Educational Content</a>
//                   <a href="#" className={dropdownItemStyles}>Regular Updates</a>
//                   <a href="#" className={dropdownItemStyles}>SEO Benefits</a>
//                 </div>
//               )}
//             </div>

//             <a href="#" className={linkStyles}>Careers</a>

//             <button className="bg-[#072273] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-semibold">
//               Start a Project
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-[#011526] hover:text-gray-500 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#F2F2F2]">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#" className={mobileItemStyles}>Home</a>
//             <a href="#" className={mobileItemStyles}>About</a>
            
//             <button
//               onClick={() => toggleDropdown('services')}
//               className={`${mobileItemStyles} w-full text-left`}
//             >
//               Services
//             </button>
//             {activeDropdown === 'services' && (
//               <div className="pl-5">
//                 <a href="#" className={mobileDropdownItemStyles}>Custom Software Development</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Social Media Management</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Cloud Solutions</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Web Development</a>
//                 <a href="#" className={mobileDropdownItemStyles}>CRM</a>
//                 <a href="#" className={mobileDropdownItemStyles}>AI-Powered Tools</a>
//                 <a href="#" className={mobileDropdownItemStyles}>UI/UX Design</a>
//               </div>
//             )}

//             <button
//               onClick={() => toggleDropdown('products')}
//               className={`${mobileItemStyles} w-full text-left`}
//             >
//               Products
//             </button>
//             {activeDropdown === 'products' && (
//               <div className="pl-5">
//                 <a href="#" className={mobileDropdownItemStyles}>WhatsApp API</a>
//                 <a href="#" className={mobileDropdownItemStyles}>ERP Solutions</a>
//                 <a href="#" className={mobileDropdownItemStyles}>E-Commerce Platforms</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Cybersecurity Solutions</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Digital Marketing Tools</a>
//               </div>
//             )}

//             <button
//               onClick={() => toggleDropdown('blog')}
//               className={`${mobileItemStyles} w-full text-left`}
//             >
//               Blog
//             </button>
//             {activeDropdown === 'blog' && (
//               <div className="pl-5">
//                 <a href="#" className={mobileDropdownItemStyles}>Educational Content</a>
//                 <a href="#" className={mobileDropdownItemStyles}>Regular Updates</a>
//                 <a href="#" className={mobileDropdownItemStyles}>SEO Benefits</a>
//               </div>
//             )}

//             <a href="#" className={mobileItemStyles}>Careers</a>

//             <button className="bg-[#072273] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-semibold w-full text-left">
//               Start a Project
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




































// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import LogoImages from "./images/logoUPSB1.jpg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Handle click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (activeDropdown && !event.target.closest('.dropdown-container')) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [activeDropdown]);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   // Close mobile menu when clicking a link
//   const handleMobileLinkClick = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   // Navigation items
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     {
//       name: 'Services',
//       dropdown: [
//         { name: 'Custom Software Development', path: '/services/software-development' },
//         { name: 'Social Media Management', path: '/services/social-media' },
//         { name: 'CRM', path: '/services/crm' },
//         { name: 'Cloud Solutions', path: '/services/cloud' },
//         { name: 'Web Development', path: '/services/web-development' },
//         { name: 'AI-Powered Tools', path: '/services/ai' }
//       ]
//     },
//     {
//       name: 'Products',
//       dropdown: [
//         { name: 'WhatsApp API', path: '/products/whatsapp-api' },
//         { name: 'ERP Solutions', path: '/products/erp' },
//         { name: 'E-Commerce Platforms', path: '/products/ecommerce' },
//         { name: 'Cybersecurity Solutions', path: '/products/cybersecurity' },
//         { name: 'Digital Marketing Tool', path: '/products/marketing' }
//       ]
//     },
//     {
//       name: 'Blog',
//       dropdown: [
//         { name: 'Educational Content', path: '/blog/educational' },
//         { name: 'Regular Updates', path: '/blog/updates' },
//         { name: 'SEO Benefits', path: '/blog/seo' }
//       ]
//     },
//     { name: 'Careers', path: '/careers' }
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="flex items-center space-x-2">
//               <img 
//                 src={LogoImages} 
//                 alt="UPSB India" 
//                 className={`object-contain rounded-full transition-all duration-300 ${
//                   scrolled ? 'w-12 h-12' : 'w-16 h-16'
//                 }`}
//               />
//               <span className="font-bold text-lg text-gray-800 hidden sm:inline-block">UPSB India</span>
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
//             {navItems.map((item, index) => (
//               !item.dropdown ? (
//                 <a 
//                   key={index}
//                   href={item.path} 
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   {item.name}
//                 </a>
//               ) : (
//                 <div key={index} className="relative dropdown-container">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleDropdown(item.name);
//                     }}
//                     className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
//                   >
//                     {item.name}
//                     <svg 
//                       className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   <AnimatePresence>
//                     {activeDropdown === item.name && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
//                       >
//                         <div className="py-1">
//                           {item.dropdown.map((dropItem, dropIndex) => (
//                             <a 
//                               key={dropIndex}
//                               href={dropItem.path} 
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                             >
//                               {dropItem.name}
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               )
//             ))}

//             <a 
//               href="/contact"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg ml-2"
//             >
//               Start a Project
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white border-t"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
//               {navItems.map((item, index) => (
//                 !item.dropdown ? (
//                   <a 
//                     key={index}
//                     href={item.path} 
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//                     onClick={handleMobileLinkClick}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <div key={index} className="space-y-1">
//                     <button
//                       onClick={() => toggleDropdown(item.name)}
//                       className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//                     >
//                       <span>{item.name}</span>
//                       <svg 
//                         className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'transform rotate-180' : ''}`}
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
                    
//                     <AnimatePresence>
//                       {activeDropdown === item.name && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="pl-6 space-y-1 border-l-2 border-blue-100 ml-3"
//                         >
//                           {item.dropdown.map((dropItem, dropIndex) => (
//                             <a 
//                               key={dropIndex}
//                               href={dropItem.path} 
//                               className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                               onClick={handleMobileLinkClick}
//                             >
//                               {dropItem.name}
//                             </a>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ))}
              
//               <div className="pt-4">
//                 <a 
//                   href="/contact"
//                   className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors duration-200 shadow-md"
//                   onClick={handleMobileLinkClick}
//                 >
//                   Start a Project
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar; 











































// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import LogoImages from "./images/logoUPSB1.jpg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Handle click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (activeDropdown && !event.target.closest('.dropdown-container')) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [activeDropdown]);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   // Close mobile menu when clicking a link
//   const handleMobileLinkClick = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   // Navigation items
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     {
//       name: 'Services',
//       dropdown: [
//         { name: 'Custom Software Development', path: '/services/software-development' },
//         { name: 'Social Media Management', path: '/services/social-media' },
//         { name: 'CRM', path: '/services/crm' },
//         { name: 'Cloud Solutions', path: '/services/cloud' },
//         { name: 'Web Development', path: '/services/web-development' },
//         { name: 'AI-Powered Tools', path: '/services/ai' }
//       ]
//     },
//     {
//       name: 'Products',
//       dropdown: [
//         { name: 'WhatsApp API', path: '/products/whatsapp-api' },
//         { name: 'ERP Solutions', path: '/products/erp' },
//         { name: 'E-Commerce Platforms', path: '/products/ecommerce' },
//         { name: 'Cybersecurity Solutions', path: '/products/cybersecurity' },
//         { name: 'Digital Marketing Tool', path: '/products/marketing' }
//       ]
//     },
//     {
//       name: 'Blog',
//       dropdown: [
//         { name: 'Educational Content', path: '/blog' },
//         { name: 'Regular Updates', path: '/blog/updates' },
//         { name: 'SEO Benefits', path: '/blog/seo' }
//       ]
//     },
//     { name: 'Careers', path: '/careers' }
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="flex items-center space-x-2">
//               <img 
//                 src={LogoImages} 
//                 alt="UPSB India" 
//                 className={`object-contain rounded-full transition-all duration-300 ${
//                   scrolled ? 'w-12 h-12' : 'w-16 h-16'
//                 }`}
//               />
//               <span className="font-bold text-lg text-gray-800 hidden sm:inline-block">UPSB India</span>
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
//             {navItems.map((item, index) => (
//               !item.dropdown ? (
//                 <a 
//                   key={index}
//                   href={item.path} 
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   {item.name}
//                 </a>
//               ) : (
//                 <div key={index} className="relative dropdown-container">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleDropdown(item.name);
//                     }}
//                     className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
//                   >
//                     {item.name}
//                     <svg 
//                       className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   <AnimatePresence>
//                     {activeDropdown === item.name && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
//                       >
//                         <div className="py-1">
//                           {item.dropdown.map((dropItem, dropIndex) => (
//                             <a 
//                               key={dropIndex}
//                               href={dropItem.path} 
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                             >
//                               {dropItem.name}
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               )
//             ))}

//             <a 
//               href="/contact"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg ml-2"
//             >
//               Start a Project
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white border-t"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
//               {navItems.map((item, index) => (
//                 !item.dropdown ? (
//                   <a 
//                     key={index}
//                     href={item.path} 
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//                     onClick={handleMobileLinkClick}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <div key={index} className="space-y-1">
//                     <button
//                       onClick={() => toggleDropdown(item.name)}
//                       className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//                     >
//                       <span>{item.name}</span>
//                       <svg 
//                         className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.name ? 'transform rotate-180' : ''}`}
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
                    
//                     <AnimatePresence>
//                       {activeDropdown === item.name && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="pl-6 space-y-1 border-l-2 border-blue-100 ml-3"
//                         >
//                           {item.dropdown.map((dropItem, dropIndex) => (
//                             <a 
//                               key={dropIndex}
//                               href={dropItem.path} 
//                               className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                               onClick={handleMobileLinkClick}
//                             >
//                               {dropItem.name}
//                             </a>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ))}
              
//               <div className="pt-4">
//                 <a 
//                   href="/contact"
//                   className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors duration-200 shadow-md"
//                   onClick={handleMobileLinkClick}
//                 >
//                   Start a Project
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;   














































































































































































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
        { name: 'Custom Software Development', path: '/services/software-development' },
        { name: 'Social Media Management', path: '/services/social-media' },
        { name: 'CRM Solutions', path: '/services/crm' },
        { name: 'Cloud Solutions', path: '/services/cloud' },
        { name: 'Web Development', path: '/services/web-development' },
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
        { name: 'Industry Updates', path: '/blog/updates' },
        { name: 'SEO Insights', path: '/blog/seo' }
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