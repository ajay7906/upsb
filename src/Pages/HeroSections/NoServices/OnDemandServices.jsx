


// import React from 'react';
// import { MessageCircle, Users, Cloud, Globe, Cpu, Server } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const OnDemandServices = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Custom Software Development",
//       description: "Tailored solutions that align perfectly with your business objectives and workflow requirements.",
//       icon: <Cpu className="w-8 h-8 text-white" />,
//       color: "bg-blue-600",
//       path: "/services/custom-software-development"
//     },
//     {
//       id: 2,
//       title: "Social Media Management",
//       description: "Strategic management and analytics to maximize your social media presence and engagement.",
//       icon: <MessageCircle className="w-8 h-8 text-white" />,
//       color: "bg-purple-600",
//       path: "/services/social-media"
//     },
//     {
//       id: 3,
//       title: "CRM Solutions",
//       description: "Transform customer relationships with intelligent management systems and engagement practices.",
//       icon: <Users className="w-8 h-8 text-white" />,
//       color: "bg-teal-600",
//       path: "/services/crm"
//     },
//     {
//       id: 4,
//       title: "Cloud Solutions",
//       description: "Scalable cloud infrastructure and migration services for seamless operations and open service.",
//       icon: <Cloud className="w-8 h-8 text-white" />,
//       color: "bg-orange-600",
//       path: "/services/cloud"
//     },
//     {
//       id: 5,
//       title: "Web Development",
//       description: "Create powerful, responsive websites with modern design and seamless functionality.",
//       icon: <Globe className="w-8 h-8 text-white" />,
//       color: "bg-green-600",
//       path: "/services/web-development"
//     },
//     {
//       id: 6,
//       title: "AI-Powered Tools",
//       description: "Intelligent solutions leveraging artificial intelligence to automate and optimize processes.",
//       icon: <Server className="w-8 h-8 text-white" />,
//       color: "bg-red-600",
//       path: "/services/ai"
//     }
//   ];
  
//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 -skew-y-3 -translate-y-32"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <span className="text-blue-600 font-semibold text-lg mb-2 block">OUR SERVICES</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             On-Demand <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Solutions</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Accelerate your digital transformation with our comprehensive suite of enterprise-grade solutions
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group relative bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 shadow-md hover:shadow-xl border border-gray-100"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              
//               <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
//                 {service.icon}
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{service.title}</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
//               <div className="flex items-center space-x-2">
//                 <Link
//                   to={service.path}
//                   className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors group/link"
//                 >
//                   Explore Service
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </Link>
//               </div>

//               {/* Hover effect background */}
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Link
//             to="/services"
//             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
//           >
//             View All Services
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 ml-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OnDemandServices;






import React, { useState } from 'react';
import { MessageCircle, Users, Cloud, Globe, Cpu, Server, ChevronDown, ChevronUp } from 'lucide-react';

const OnDemandServices = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions that align perfectly with your business objectives and workflow requirements.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Social Media Management",
      description: "Strategic management and analytics to maximize your social media presence and engagement.",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
    },
    {
      id: 3,
      title: "CRM Solutions",
      description: "Transform customer relationships with intelligent management systems and engagement practices.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "bg-teal-600",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for seamless operations and open service.",
      icon: <Cloud className="w-8 h-8 text-white" />,
      color: "bg-orange-600",
    },
    {
      id: 5,
      title: "Web Development",
      description: "Create powerful, responsive websites with modern design and seamless functionality.",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "bg-green-600",
    },
    {
      id: 6,
      title: "AI-Powered Tools",
      description: "Intelligent solutions leveraging artificial intelligence to automate and optimize processes.",
      icon: <Server className="w-8 h-8 text-white" />,
      color: "bg-red-600",
    }
  ];
  
  // Determine which services to display
  const displayedServices = showAllServices ? services : services.slice(0, 3);
  
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 -skew-y-3 -translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold text-lg mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            On-Demand <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accelerate your digital transformation with our comprehensive suite of enterprise-grade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 shadow-md hover:shadow-xl border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>
              
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors group/link">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            {showAllServices ? 'Show Less Services' : 'Show More Services'}
            {showAllServices ? (
              <ChevronUp className="h-5 w-5 ml-2" />
            ) : (
              <ChevronDown className="h-5 w-5 ml-2" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnDemandServices;