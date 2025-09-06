import React from 'react';
import { 
  ArrowRight, 
  Users, 
  CheckCircle, 
  Star, 
  BarChart, 
  MessageSquare, 
  Database, 
  Briefcase, 
  Terminal, 
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CRMERPSolutions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-6">
                CRM & ERP Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Streamline Your Business <br />with CRM & ERP
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Optimize customer relationships and business operations with our integrated CRM and ERP solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg">
                  Get a Quote
                </button> */}
                <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium transition duration-300">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-2xl">
                <img src="https://i.pinimg.com/1200x/da/1d/8d/da1d8defb02ce92e4014f0e38a131286.jpg" alt="CRM and ERP Solutions" className="rounded-lg w-full" />
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
              Why CRM & ERP?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Unified Solutions for Business Efficiency
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our CRM and ERP solutions empower businesses to manage customer relationships and core operations seamlessly, driving growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Customer Relationship Management",
                description: "Enhance customer engagement with tools for sales, marketing, and support automation."
              },
              {
                icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
                title: "Enterprise Resource Planning",
                description: "Streamline operations with integrated modules for finance, HR, and supply chain."
              },
              {
                icon: <Database className="h-8 w-8 text-indigo-600" />,
                title: "Data Integration",
                description: "Unify data across systems for real-time insights and better decision-making."
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
              Why Choose Our CRM & ERP Solutions?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our integrated CRM and ERP systems provide a comprehensive approach to managing your business, improving efficiency, and enhancing customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Centralized Data",
                description: "Access all customer and operational data in one platform for better decision-making."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Process Automation",
                description: "Automate repetitive tasks to save time and reduce operational costs."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Scalable Solutions",
                description: "Systems that grow with your business, supporting expansion and new requirements."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
                title: "Enhanced Customer Experience",
                description: "Deliver personalized customer interactions with integrated CRM tools."
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

      {/* Implementation Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Implementation Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a structured approach to ensure seamless implementation of CRM and ERP solutions tailored to your business needs.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
            {[
              {
                step: "Needs Assessment",
                description: "We analyze your business processes and requirements to design a tailored solution.",
                icon: <MessageSquare className="h-8 w-8 text-white" />
              },
              {
                step: "System Design",
                description: "Crafting a customized CRM/ERP architecture to meet your operational and customer needs.",
                icon: <Briefcase className="h-8 w-8 text-white" />
              },
              {
                step: "Development & Customization",
                description: "Building and configuring modules to align with your workflows and goals.",
                icon: <Terminal className="h-8 w-8 text-white" />
              },
              {
                step: "Integration & Testing",
                description: "Ensuring seamless integration with existing systems and rigorous testing for reliability.",
                icon: <CheckCircle className="h-8 w-8 text-white" />
              },
              {
                step: "Training & Deployment",
                description: "Training your team and deploying the system with minimal disruption.",
                icon: <Monitor className="h-8 w-8 text-white" />
              },
              {
                step: "Support & Optimization",
                description: "Ongoing support and updates to maximize system performance and ROI.",
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
              Robust Tools for CRM & ERP Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We utilize industry-leading technologies to deliver scalable and secure CRM and ERP solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Salesforce", category: "CRM" },
              { name: "Microsoft Dynamics", category: "CRM/ERP" },
              { name: "SAP", category: "ERP" },
              { name: "Oracle NetSuite", category: "ERP" },
              { name: "Node.js", category: "Backend" },
              { name: "React", category: "Frontend" },
              { name: "PostgreSQL", category: "Database" },
              { name: "MongoDB", category: "Database" }
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
              Transforming Businesses with CRM & ERP
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See how our CRM and ERP solutions have driven success for businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Manufacturing",
                company: "Industrial Innovations Ltd.",
                challenge: "Integrate disparate systems for supply chain and customer management",
                solution: "Custom ERP with CRM integration for streamlined operations",
                result: "30% improvement in supply chain efficiency, 25% increase in customer satisfaction",
                image: "https://i.pinimg.com/1200x/b3/80/b0/b380b0b92f45237b1675f3646f4e94d5.jpg"
              },
              {
                title: "Retail",
                company: "ShopSmart Corporation",
                challenge: "Unify customer data and inventory across online and offline channels",
                solution: "Integrated CRM and ERP system with real-time data sync",
                result: "40% boost in sales, 50% reduction in inventory discrepancies",
                image: "https://i.pinimg.com/736x/6a/c6/79/6ac67960ed295036d2d7622b8a4f7809.jpg"
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
                    {/* <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                      Read full case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </button>
          </div> */}
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
              Hear from businesses that have transformed their operations with our CRM and ERP solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OK Technology's CRM solution revolutionized our customer engagement, increasing retention by 40%.",
                author: "Jennifer Martinez",
                position: "CTO, Global Innovations Inc.",
                image: "/api/placeholder/80/80"
              },
              {
                quote: "The ERP system implemented by OK streamlined our operations, saving us 20% in operational costs annually.",
                author: "David Thompson",
                position: "CEO, Insight Dynamics",
                image: "/api/placeholder/80/80"
              },
              {
                quote: "Their integrated CRM and ERP platform gave us real-time insights, boosting our decision-making speed by 50%.",
                author: "Lisa Wong",
                position: "Product Manager, ShopSmart Corporation",
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
                  {/*   <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" /> */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize with CRM & ERP?</h2>
              <p className="text-xl opacity-90">
                Let’s discuss how our integrated solutions can streamline your operations and enhance customer relationships.
              </p>
            </div>
            <div>
              <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition duration-300 shadow-lg flex items-center gap-2">
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

export default CRMERPSolutions;