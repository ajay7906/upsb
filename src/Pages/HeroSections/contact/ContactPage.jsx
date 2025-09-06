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
import { Link } from 'react-router-dom';

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
      {/* <section className="py-20 px-6 bg-gray-50">
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
      </section> */}

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
                <Link to="/contact">Contact our support team</Link>
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
            {/* <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition duration-300 shadow-lg flex items-center gap-2">
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-medium transition duration-300 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Live Chat
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;