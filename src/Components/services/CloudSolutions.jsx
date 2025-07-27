import React from 'react';
import { 
  ArrowRight, 
  Cloud, 
  CheckCircle, 
  Star, 
  BarChart, 
  MessageSquare, 
  Database, 
  Server, 
  Terminal, 
  Monitor
} from 'lucide-react';

const CloudSolutions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Cloud Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform with <br />Cloud-Powered Solutions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Leverage the power of the cloud to enhance scalability, security, and efficiency for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg">
                  Get a Quote
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-2xl">
                <img src="/api/placeholder/600/450" alt="Cloud Solutions" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Overview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Cloud Solutions?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Scalable, Secure, and Efficient Cloud Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our cloud solutions empower businesses to optimize operations, reduce costs, and achieve agility with cutting-edge cloud technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="h-8 w-8 text-indigo-600" />,
                title: "Cloud Infrastructure",
                description: "Build and manage scalable cloud environments tailored to your business needs."
              },
              {
                icon: <Server className="h-8 w-8 text-indigo-600" />,
                title: "Cloud Migration",
                description: "Seamlessly transition your applications and data to the cloud with minimal downtime."
              },
              {
                icon: <Database className="h-8 w-8 text-indigo-600" />,
                title: "Cloud Management",
                description: "Optimize performance and costs with comprehensive cloud management and monitoring."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our cloud solutions provide flexibility, security, and cost-efficiency to drive your digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Scalability",
                description: "Easily scale resources up or down to meet demand without infrastructure constraints."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Cost Efficiency",
                description: "Reduce IT costs with pay-as-you-go models and optimized resource management."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Enhanced Security",
                description: "Protect your data with advanced security measures and compliance standards."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Business Agility",
                description: "Accelerate innovation with rapid deployment and flexible cloud environments."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Cloud Implementation Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure seamless cloud adoption and optimization for your business.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
            {[
              {
                step: "Assessment",
                description: "Evaluate your current infrastructure and define cloud strategy requirements.",
                icon: <MessageSquare className="h-8 w-8 text-white" />
              },
              {
                step: "Planning & Design",
                description: "Create a tailored cloud architecture to meet your business objectives.",
                icon: <Cloud className="h-8 w-8 text-white" />
              },
              {
                step: "Migration",
                description: "Execute seamless migration of applications and data to the cloud.",
                icon: <Server className="h-8 w-8 text-white" />
              },
              {
                step: "Testing & Validation",
                description: "Ensure performance, security, and compatibility through rigorous testing.",
                icon: <CheckCircle className="h-8 w-8 text-white" />
              },
              {
                step: "Deployment",
                description: "Roll out the cloud solution with minimal disruption to your operations.",
                icon: <Monitor className="h-8 w-8 text-white" />
              },
              {
                step: "Management & Support",
                description: "Provide ongoing monitoring, optimization, and support for your cloud environment.",
                icon: <Database className="h-8 w-8 text-white" />
              }
            ].map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}>
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-indigo-600 font-bold text-xl mb-2">{step.step}</div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="bg-indigo-600 p-4 rounded-full z-10">
                    {step.icon}
                  </div>
                </div>
                <div className="md:w-1/2 md:px-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Technologies We Use
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leading Cloud Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We leverage industry-leading cloud platforms and tools to deliver secure and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "AWS", category: "Cloud Platform" },
              { name: "Microsoft Azure", category: "Cloud Platform" },
              { name: "Google Cloud", category: "Cloud Platform" },
              { name: "Docker", category: "Containerization" },
              { name: "Kubernetes", category: "Orchestration" },
              { name: "Terraform", category: "Infrastructure" },
              { name: "PostgreSQL", category: "Database" },
              { name: "Node.js", category: "Backend" }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-indigo-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-World Cloud Success
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See how our cloud solutions have transformed businesses with scalability and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                company: "SecureBank International",
                challenge: "Modernize legacy systems with scalable cloud infrastructure",
                solution: "Migrated to AWS with microservices architecture for flexibility",
                result: "40% reduction in IT costs, 99.99% system uptime",
                image: "/api/placeholder/600/400"
              },
              {
                title: "E-Commerce",
                company: "ShopSmart Corporation",
                challenge: "Handle peak traffic during sales without downtime",
                solution: "Implemented Azure-based auto-scaling cloud solution",
                result: "50% faster load times, 30% increase in sales capacity",
                image: "/api/placeholder/600/400"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md text-sm font-medium mb-2">
                      {study.title}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{study.company}</h3>
                    <div className="space-y-3 text-gray-600 mb-4">
                      <div className="flex items-start">
                        <div className="bg-gray-200 p-1 rounded mr-3 mt-1">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Challenge:</span> {study.challenge}
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-1 rounded mr-3 mt-1">
                          <CheckCircle className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Solution:</span> {study.solution}
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                          <BarChart className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Result:</span> {study.result}
                        </div>
                      </div>
                    </div>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                      Read full case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our cloud solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OK Technology's cloud migration reduced our infrastructure costs by 35% while improving performance.",
                author: "Jennifer Martinez",
                position: "CTO, SecureBank International",
                image: "/api/placeholder/80/80"
              },
              {
                quote: "Their Azure-based solution handled our peak traffic seamlessly, boosting customer satisfaction.",
                author: "Lisa Wong",
                position: "Product Manager, ShopSmart Corporation",
                image: "/api/placeholder/80/80"
              },
              {
                quote: "The cloud management services provided by OK ensured 99.99% uptime for our critical systems.",
                author: "David Thompson",
                position: "CEO, Insight Dynamics",
                image: "/api/placeholder/80/80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Embrace the Cloud?</h2>
              <p className="text-xl opacity-90">
                Let’s discuss how our cloud solutions can drive scalability and efficiency for your business.
              </p>
            </div>
            <div>
              <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition duration-300 shadow-lg flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold mb-6">OK Technology</h3>
              <p className="text-gray-400 mb-6">
                Transforming businesses through innovative technology solutions since 2010.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Software</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Analytics & AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">White Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} OK Technology, Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudSolutions;