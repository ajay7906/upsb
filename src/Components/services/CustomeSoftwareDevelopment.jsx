import React from 'react';
import { 
  ArrowRight, 
  Code, 
  CheckCircle, 
  Star, 
  BarChart, 
  MessageSquare, 
  Monitor, 
  Smartphone, 
  Server, 
  Terminal,
  Zap,
  Users,
  Shield,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftwareDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-purple-500 opacity-10 rounded-full"></div>
        
        <div className="container mx-auto px-6 py-28 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Zap className="h-4 w-4 mr-2" />
                Custom Software Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bespoke Software <br />Built for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Success</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                We craft tailored software solutions that address your unique business challenges and drive measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button> */}
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center">
                  <Link to="/contact">Contact Us</Link>
                  <MessageSquare className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-12">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-cyan-400" />
                  <span className="text-sm">Client-Centric Approach</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-cyan-400" />
                  <span className="text-sm">Enterprise Grade Security</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-cyan-400" />
                  <span className="text-sm">On-Time Delivery</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-5">
                  <div className="w-full h-full mx-auto rotate-6 opacity-30 bg-gradient-to-r from-cyan-400 to-blue-400 blur-lg"></div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-xl">
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <div className="bg-gray-800 px-4 py-3 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="p-4 text-white font-mono text-sm">
                        <div className="text-cyan-400">// Custom software solutions</div>
                        <div className="text-cyan-400">// Tailored to your needs</div>
                        <div className="my-2"></div>
                        <div><span className="text-purple-400">function</span> <span className="text-yellow-300">transformBusiness</span>() {'{'}</div>
                        <div className="ml-4"><span className="text-green-400">return</span> <span className="text-blue-300">success</span>;</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Overview Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-indigo-50 -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Why Custom Software?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tailored Solutions for Your Unique Needs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our custom software development services are designed to deliver scalable, efficient, and innovative solutions that align perfectly with your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="h-10 w-10 text-indigo-600" />,
                title: "Web Applications",
                description: "Robust and responsive web applications built to enhance user experience and streamline operations.",
                features: ["Progressive Web Apps", "SPA/MPA Architecture", "Cloud Integration"]
              },
              {
                icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications designed for seamless performance across devices.",
                features: ["iOS & Android", "Cross-Platform", "Offline Capabilities"]
              },
              {
                icon: <Server className="h-10 w-10 text-indigo-600" />,
                title: "Enterprise Software",
                description: "Comprehensive software solutions to optimize complex business processes and boost productivity.",
                features: ["ERP Systems", "CRM Solutions", "Workflow Automation"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-indigo-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart className="h-4 w-4 mr-2" />
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Custom Software Solutions?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our custom software development services offer unmatched flexibility, scalability, and performance to drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Tailored to Your Needs",
                description: "Solutions designed specifically for your business processes, ensuring perfect alignment with your goals."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Scalable Architecture",
                description: "Software built to grow with your business, supporting increased demand and new features seamlessly."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Seamless Integration",
                description: "Integrate with existing systems and third-party services for a cohesive technology ecosystem."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Ongoing Support",
                description: "Continuous maintenance and updates to ensure your software remains secure and up-to-date."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Code className="h-4 w-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Proven Development Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a structured yet flexible approach to ensure your software project is delivered on time, within budget, and to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements, business goals, and technical needs to define the project scope.",
                icon: <MessageSquare className="h-8 w-8 text-white" />
              },
              {
                step: "02",
                title: "Design",
                description: "Crafting intuitive UI/UX designs and technical architecture to ensure a seamless user experience.",
                icon: <Code className="h-8 w-8 text-white" />
              },
              {
                step: "03",
                title: "Development",
                description: "Building robust, scalable, and secure software using agile methodologies and best practices.",
                icon: <Terminal className="h-8 w-8 text-white" />
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Rigorous testing to ensure functionality, performance, and security meet the highest standards.",
                icon: <CheckCircle className="h-8 w-8 text-white" />
              },
              {
                step: "05",
                title: "Deployment",
                description: "Seamless deployment to your environment with minimal disruption to your operations.",
                icon: <Server className="h-8 w-8 text-white" />
              },
              {
                step: "06",
                title: "Support & Maintenance",
                description: "Ongoing support to keep your software running smoothly and up-to-date.",
                icon: <Monitor className="h-8 w-8 text-white" />
              }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-indigo-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Terminal className="h-4 w-4 mr-2" />
              Technologies We Use
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cutting-Edge Tools for Superior Software
            </h2>
            <p className="text-indigo-200 text-lg max-w-3xl mx-auto">
              We leverage the latest technologies to build robust, scalable, and future-proof software solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", category: "Frontend", color: "bg-blue-500/10" },
              { name: "Angular", category: "Frontend", color: "bg-red-500/10" },
              { name: "Vue.js", category: "Frontend", color: "bg-green-500/10" },
              { name: "Node.js", category: "Backend", color: "bg-green-600/10" },
              { name: ".NET Core", category: "Backend", color: "bg-purple-500/10" },
              { name: "Python", category: "Backend", color: "bg-yellow-500/10" },
              { name: "Java", category: "Backend", color: "bg-red-600/10" },
              { name: "MongoDB", category: "Database", color: "bg-green-700/10" }
            ].map((tech, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-white/10 ${tech.color}`}>
                <div className="bg-white/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-center">{tech.name}</h3>
                <p className="text-sm text-indigo-200 text-center">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-World Impact of Our Software
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover how our custom software solutions have transformed businesses across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                company: "SecureBank International",
                challenge: "Modernize legacy banking systems for digital channels",
                solution: "Custom API-driven web application with real-time transaction processing",
                result: "68% reduction in transaction processing time, 99.99% uptime",
                color: "bg-blue-500"
              },
              {
                title: "Retail",
                company: "ShopSmart Corporation",
                challenge: "Create a unified platform for online and in-store sales",
                solution: "Custom e-commerce platform with real-time inventory sync",
                result: "32% increase in online sales, 45% reduction in cart abandonment",
                color: "bg-purple-500"
              }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100">
                <div className="p-8">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
                    {study.title}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{study.company}</h3>
                  <div className="space-y-4 text-gray-600 mb-6">
                    <div className="flex items-start">
                      <div className="bg-gray-200 p-2 rounded-lg mr-4 mt-1">
                        <MessageSquare className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Challenge:</span> {study.challenge}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Solution:</span> {study.solution}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                        <BarChart className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Result:</span> {study.result}
                      </div>
                    </div>
                  </div>
                  <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center group-hover:translate-x-2 transition-transform">
                    Read full case study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg font-semibold">
              <Link to="/services/custom-software-development">View All Case Studies</Link>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our custom software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OK Technology delivered a custom web application that transformed our customer engagement, boosting retention by 35%.",
                author: "Jennifer Martinez",
                position: "CTO, Global Innovations Inc.",
                avatar: "JM"
              },
              {
                quote: "The mobile app developed by OK Technology exceeded our expectations, with seamless performance and outstanding user feedback.",
                author: "Lisa Wong",
                position: "Product Manager, MobileTech",
                avatar: "LW"
              },
              {
                quote: "Their enterprise software streamlined our operations, saving us millions annually in operational costs.",
                author: "David Thompson",
                position: "CEO, Insight Dynamics",
                avatar: "DT"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 font-semibold text-indigo-700">
                    {testimonial.avatar}
                  </div>
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
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/50 to-purple-800/50"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-40 h-40 bg-cyan-400 opacity-20 rounded-full"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Custom Software?</h2>
              <p className="text-xl opacity-90">
                Let's discuss how our tailored software solutions can solve your challenges and drive your business forward.
              </p>
            </div>
            <div>
              <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Link to="/contact">Schedule a Consultation</Link>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default CustomSoftwareDevelopment;