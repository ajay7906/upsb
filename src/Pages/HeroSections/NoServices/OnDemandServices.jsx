import React from 'react';
import { Smartphone, Users, Cloud, ShoppingCart, Code, Server } from 'lucide-react';

const OnDemandServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions that align perfectly with your business objectives and workflow requirements.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "CRM Solutions",
      description: "Transform customer relationships with intelligent management systems and analytics.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for seamless operations.",
      icon: <Cloud className="w-8 h-8 text-white" />,
      color: "bg-orange-500",
    },
    {
      id: 4,
      title: "Marketplace Development",
      description: "Create powerful e-commerce platforms with seamless payment integrations.",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "API Integration",
      description: "Secure and efficient API development and third-party system integrations.",
      icon: <Code className="w-8 h-8 text-white" />,
      color: "bg-red-500",
    },
    {
      id: 6,
      title: "Hosting Solutions",
      description: "High-performance hosting with 99.9% uptime and enterprise-grade security.",
      icon: <Server className="w-8 h-8 text-white" />,
      color: "bg-indigo-500",
    }
  ];
  
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            On-Demand <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Tech Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your digital transformation with our comprehensive suite of enterprise-grade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-100"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                >
                  Explore Service
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
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
                </a>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="hidden lg:block absolute left-0 right-0 -mt-32 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default OnDemandServices;