// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     message: ''
//   });
  
//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     error: false,
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simulate form submission
//     setFormStatus({ submitted: true, error: false, message: 'Your message has been sent successfully! We will get back to you soon.' });
    
//     // Reset form after submission
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       service: '',
//       message: ''
//     });
    
//     // In a real implementation, you would send the form data to your server here
//   };

//   const services = [
//     'Custom Software Development',
//     'Web Development',
//     'Mobile App Development',
//     'Cloud Solutions',
//     'UI/UX Design',
//     'CRM Implementation',
//     'ERP Solutions',
//     'AI & Machine Learning',
//     'Digital Marketing',
//     'Other'
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-24 pb-16">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Get in <span className="text-blue-600">Touch</span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Have a project in mind or questions about our services? We're here to help turn your ideas into reality.
//             </p>
//           </motion.div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <motion.div 
//             className="lg:w-2/5"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
//                     <p className="text-gray-600 mt-1">+91 9876543210</p>
//                     <p className="text-gray-600">Mon-Fri from 9am to 6pm</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Email</h3>
//                     <p className="text-gray-600 mt-1">info@upsbindia.com</p>
//                     <p className="text-gray-600">sales@upsbindia.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Location</h3>
//                     <p className="text-gray-600 mt-1">
//                       123 Tech Park, Sector 15<br />
//                       Gurugram, Haryana 122001<br />
//                       India
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
//                     <svg className="w-5 h-5 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
//                     <svg className="w-5 h-5 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
//                     <svg className="w-5 h-5 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
//                     <svg className="w-5 h-5 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div 
//             className="lg:w-3/5"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
//               {formStatus.submitted ? (
//                 <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
//                   <div className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium">{formStatus.message}</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="John Doe"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="john@example.com"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="Your Company Ltd."
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service You're Interested In</label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service}>{service}</option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Tell us about your project or inquiry..."
//                       required
//                     ></textarea>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <input
//                       id="privacy"
//                       name="privacy"
//                       type="checkbox"
//                       className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
//                       required
//                     />
//                     <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
//                       I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to UPSB India processing my data for the purpose of contacting me.
//                     </label>
//                   </div>
                  
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Map Section */}
//         <motion.div 
//           className="mt-16 rounded-xl overflow-hidden shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="bg-gray-200 h-96 w-full">
//             {/* Replace with your actual Google Maps embed */}
//             <div className="relative w-full h-full bg-gray-300 flex items-center justify-center">
//               <p className="text-gray-600 text-center px-4">
//                 Google Maps embed would be placed here.<br />
//                 For implementation, use Google Maps API or iframe embed code.
//               </p>
//             </div>
//           </div>
//         </motion.div>
        
//         {/* FAQ Section */}
//         <motion.div 
//           className="mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
//             <p className="text-gray-600 mt-2">Find quick answers to common questions</p>
//           </div>
          
//           <div className="max-w-3xl mx-auto">
//             <div className="space-y-6">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <button className="w-full flex justify-between items-center p-6 text-left">
//                   <span className="text-lg font-semibold text-gray-800">What services does UPSB India offer?</span>
//                   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <div className="px-6 pb-6">
//                   <p className="text-gray-600">
//                     UPSB India offers a wide range of IT solutions including custom software development, web and mobile app development, cloud solutions, UI/UX design, CRM implementation, ERP solutions, AI & machine learning services, and digital marketing.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <button className="w-full flex justify-between items-center p-6 text-left">
//                   <span className="text-lg font-semibold text-gray-800">How long does it take to complete a project?</span>
//                   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <div className="px-6 pb-6">
//                   <p className="text-gray-600">
//                     Project timelines vary greatly depending on the scope, complexity, and requirements. After our initial consultation, we'll provide you with a detailed estimate of the expected time frame for your specific project. We pride ourselves on delivering quality solutions on schedule.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <button className="w-full flex justify-between items-center p-6 text-left">
//                   <span className="text-lg font-semibold text-gray-800">Do you provide ongoing support and maintenance?</span>
//                   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <div className="px-6 pb-6">
//                   <p className="text-gray-600">
//                     Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly after launch. Our team is available to handle updates, bug fixes, and new feature implementations as your business grows and evolves.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage; 
































































import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Users,
  Globe,
  Headphones,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <br />Amazing Together
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to learn more about our services, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
            {/* Contact Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Locations</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-700">Headquarters</p>
                  <p>123 Tech Plaza, San Francisco, CA 94105</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">European Office</p>
                  <p>45 Innovation St, London, UK EC1V 3FD</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Asia Office</p>
                  <p>78 Digital Ave, Singapore 038989</p>
                </div>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone & Email</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-700">General Inquiries</p>
                  <p>+1 (555) 123-4567</p>
                  <p>info@oktechnology.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Sales Team</p>
                  <p>+1 (555) 987-6543</p>
                  <p>sales@oktechnology.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Support</p>
                  <p>support@oktechnology.com</p>
                </div>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-700">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM (PST)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Weekend Support</p>
                  <p>Emergency support available 24/7</p>
                </div>
                <div className="pt-4">
                  <button className="flex items-center justify-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors mx-auto">
                    Book a Meeting
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <div className="sticky top-20">
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Contact Form
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Have questions about our services or want to discuss a potential project? Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <Headphones className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">24/7 Support</h3>
                      <p className="text-gray-600">Our technical support team is available around the clock for urgent inquiries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <CheckCircle className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Quick Response</h3>
                      <p className="text-gray-600">We guarantee a response to all inquiries within one business day.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Dedicated Team</h3>
                      <p className="text-gray-600">Your inquiry will be handled by experts in the relevant field.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      rows="6"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Global Presence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Offices Around the World
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With teams across multiple time zones, we're always close to our clients no matter where they're located.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                country: "United States",
                address: "123 Tech Plaza, Innovation District, CA 94105",
                phone: "+1 (555) 123-4567",
                email: "us@oktechnology.com",
                image: "/api/placeholder/600/400"
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "45 Innovation Street, London EC1V 3FD",
                phone: "+44 20 7946 0958",
                email: "uk@oktechnology.com",
                image: "/api/placeholder/600/400"
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "78 Digital Avenue, Singapore 038989",
                phone: "+65 6011 8080",
                email: "sg@oktechnology.com",
                image: "/api/placeholder/600/400"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={office.image} alt={`${office.city} office`} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{office.city}</h3>
                      <p className="text-gray-500">{office.country}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-indigo-500" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-indigo-500" />
                      <p>{office.email}</p>
                    </div>
                  </div>
                  
                  <button className="mt-6 text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                    View on map
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Here are answers to some of the questions we get asked most frequently.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What types of projects does OK Technology typically work on?",
                  answer: "We specialize in custom software development, cloud solutions, cybersecurity, data analytics, and digital transformation projects across various industries including finance, healthcare, retail, and manufacturing."
                },
                {
                  question: "How do I get started with a project?",
                  answer: "Simply contact us through this form or give us a call. We'll schedule an initial consultation to understand your requirements, then provide a proposal with project scope, timeline, and cost estimates."
                },
                {
                  question: "What is your typical response time for support requests?",
                  answer: "Our standard response time is within 4 business hours for support requests. For critical issues, we provide 24/7 emergency support with a 1-hour response time guarantee."
                },
                {
                  question: "Do you offer ongoing maintenance and support?",
                  answer: "Yes, we offer various maintenance and support packages tailored to your needs, from basic bug fixes to comprehensive ongoing development and 24/7 monitoring."
                },
                {
                  question: "How do you ensure the security of our data?",
                  answer: "We implement industry-standard security protocols including encryption, access controls, regular audits, and compliance with relevant regulations. We're also ISO 27001 certified for information security management."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Didn't find what you're looking for?</p>
              <button className="flex items-center justify-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors mx-auto">
                Contact our support team
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Ready to Get Started?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Schedule a free consultation with our experts to explore how we can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition duration-300 shadow-lg flex items-center gap-2">
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-medium transition duration-300 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;