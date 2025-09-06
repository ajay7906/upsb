import React from 'react';
import About1 from './images/about1.jpeg';

import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  Users, 
  Award, 
  Calendar, 
  Globe, 
  Heart, 
  Code, 
  Cpu, 
  Server, 
  Shield, 
  BarChart, 
  Star, 
  CheckCircle, 
  Clock, 
  Coffee, 
  Terminal, 
  Database,
  Cloud,
  Wifi,
  Smartphone,
  Monitor,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Leading IT Solutions Since 2023
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                We Build Technology <br />That Builds Your Business
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Transforming businesses through innovative tech solutions and unparalleled expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg">
                  <Link to="/services/custom-software-development">Our Services</Link>
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium transition duration-300">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-2xl">
                <img src={About1} alt="IT solutions" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10">
          <div className="container mx-auto px-6 py-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-5xl font-bold">2+</p>
                <p className="text-sm md:text-base mt-2 opacity-80">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold">100+</p>
                <p className="text-sm md:text-base mt-2 opacity-80">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold">50+</p>
                <p className="text-sm md:text-base mt-2 opacity-80">IT Specialists</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold">10+</p>
                <p className="text-sm md:text-base mt-2 opacity-80">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Company Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-indigo-100 absolute -top-6 -left-6 w-full h-full rounded-xl"></div>
                <div className="relative z-10">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea80f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Our office" className="rounded-xl shadow-lg w-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-4 p-2">
                    <div className="bg-green-500 text-white p-3 rounded-full">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">ISO 27001 Certified</p>
                      <p className="text-sm text-gray-500">Information Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                About Our Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Pioneering Technology Solutions for Tomorrow's Challenges
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2023, OK Technology has quickly established itself as a leader in providing innovative IT 
                solutions to businesses worldwide. Our journey began with a passionate team dedicated to leveraging 
                technology for business success.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We specialize in custom software development, cloud solutions, cybersecurity, and digital 
                transformation strategies that help businesses adapt and thrive in an increasingly digital world. 
                Our client-centric approach and commitment to excellence have earned us a reputation for delivering 
                high-quality solutions that drive tangible business results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-md">
                    <Code className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Custom Development</h3>
                    <p className="text-gray-600">Tailored software solutions to address your unique challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-md">
                    <Cloud className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Cloud Expertise</h3>
                    <p className="text-gray-600">Seamless migration and optimization of cloud infrastructure</p>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                Learn more about our approach
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Core Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive IT Solutions Tailored to Your Needs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a wide range of IT services designed to help your business grow, 
              innovate, and maintain a competitive edge in today's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-indigo-600" />,
                title: "Custom Software Development",
                description: "Bespoke applications built from the ground up to address your specific business requirements and challenges.",
                features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
              },
              {
                icon: <Cloud className="h-8 w-8 text-indigo-600" />,
                title: "Cloud Solutions",
                description: "Harness the power of the cloud with our expertise in migration, optimization, and management services.",
                features: ["Cloud Migration", "AWS/Azure/GCP", "Serverless Architecture", "Cloud Security"]
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Cybersecurity",
                description: "Protect your digital assets with our comprehensive security assessment and implementation services.",
                features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
              },
              {
                icon: <Database className="h-8 w-8 text-indigo-600" />,
                title: "Data Analytics & AI",
                description: "Transform raw data into actionable insights with our advanced analytics and AI solutions.",
                features: ["Business Intelligence", "Machine Learning", "Predictive Analytics", "Data Visualization"]
              },
              {
                icon: <Wifi className="h-8 w-8 text-indigo-600" />,
                title: "IT Infrastructure",
                description: "Build, optimize, and maintain robust IT infrastructure that scales with your business needs.",
                features: ["Network Design", "Server Management", "Virtualization", "Disaster Recovery"]
              },
              {
                icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
                title: "Digital Transformation",
                description: "Navigate your organization's digital journey with our strategic consulting and implementation.",
                features: ["Digital Strategy", "Process Automation", "Legacy Modernization", "Technology Roadmap"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Cutting-Edge Technologies Powering Your Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We utilize a modern, industry-leading technology stack to build scalable, secure, and innovative solutions tailored to your needs.
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                category: "Frontend",
                technologies: [
                  { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
                  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg" },
                  { name: "Angular", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg" },
                  { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" }
                ]
              },
              {
                category: "Backend",
                technologies: [
                  { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
                  { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
                  { name: "NET Core", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg" },
                  { name: "Go", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg" }
                ]
              },
              {
                category: "Cloud & DevOps",
                technologies: [
                  { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
                  { name: "Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg" },
                  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg" },
                  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg" }
                ]
              },
              {
                category: "Database & AI",
                technologies: [
                  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
                  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
                  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg" },
                  { name: "Snowflake", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snowflake.svg" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          className="h-10 w-10 object-contain"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">{tech.name}</h4>
                          <p className="text-sm text-gray-500">{category.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              2+ Years of Excellence in Technology
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From our founding in 2023 to becoming a trusted technology partner, our journey is defined 
              by innovation and a commitment to client success.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: "2023",
                  title: "The Beginning",
                  description: "OK Technology was founded with a vision to deliver innovative software solutions for businesses worldwide.",
                  icon: <Calendar className="h-8 w-8 text-white" />
                },
                {
                  year: "2024",
                  title: "First Major Client",
                  description: "Secured our first major client, establishing our reputation for delivering high-quality solutions.",
                  icon: <Briefcase className="h-8 w-8 text-white" />
                },
                {
                  year: "2025",
                  title: "Global Reach & Innovation",
                  description: "Expanded our services to 10+ countries and launched new AI and cloud-focused initiatives.",
                  icon: <Globe className="h-8 w-8 text-white" />
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-12">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-indigo-600 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="bg-indigo-600 p-4 rounded-full z-10">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:px-12">
                    {/* Empty div for layout on alternate sides */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Brilliant Minds Behind Our Success
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our team combines technical expertise, industry knowledge, and creative thinking to deliver 
              innovative solutions that drive our clients' success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", title: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "Samantha Lee", title: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "Michael Chen", title: "Head of Software Development", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "Rachel Kim", title: "Chief Product Officer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "David Williams", title: "Head of Cybersecurity", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "Emma Rodriguez", title: "Cloud Solutions Architect", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "James Wilson", title: "AI Research Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
              { name: "Olivia Park", title: "UX/UI Design Director", image: "https://images.unsplash.com/photo-1487412729047-f66b6c6d9f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            {/* <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md">
              <Users className="h-5 w-5" />
              View Full Team
            </button> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say About Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the businesses we've helped transform 
              through our innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OK Technology's custom software solution has completely transformed our operations, resulting in a 40% increase in efficiency and significant cost savings.",
                author: "Jennifer Martinez",
                position: "CTO, Global Innovations Inc.",
                image: "https://images.unsplash.com/photo-1487412947147-9967a3a2e759?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              },
              {
                quote: "The cloud migration strategy implemented by the OK team was seamless and exceeded all our expectations. Their expertise and attention to detail are unmatched.",
                author: "Robert Chen",
                position: "IT Director, TechFirst Solutions",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              },
              {
                quote: "Working with OK Technology has been a game-changer for our cybersecurity posture. Their proactive approach has protected us from numerous potential threats.",
                author: "Sarah Johnson",
                position: "CISO, SecureFinance Ltd.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              },
              {
                quote: "The data analytics platform built by OK has given us insights we never thought possible, driving strategic decisions that have accelerated our growth.",
                author: "David Thompson",
                position: "CEO, Insight Dynamics",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              },
              {
                quote: "From concept to deployment, OK Technology delivered our mobile application on time and on budget. The user feedback has been overwhelmingly positive.",
                author: "Lisa Wong",
                position: "Product Manager, MobileTech",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              },
              {
                quote: "OK's AI implementation has revolutionized our customer support, reducing response times by 60% while maintaining exceptional quality of service.",
                author: "Michael Peterson",
                position: "Head of Customer Experience, ServicePro",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
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

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Impact Across Industries
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore how our technology solutions have helped businesses across various 
              industries overcome challenges and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                company: "SecureBank International",
                challenge: "Modernize legacy systems while ensuring robust security and compliance",
                solution: "Custom API layer connecting legacy systems with new digital channels",
                result: "68% reduction in transaction processing time, 99.99% uptime",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Healthcare",
                company: "MediCare Solutions",
                challenge: "Streamline patient data management across multiple facilities",
                solution: "Cloud-based healthcare data platform with advanced analytics",
                result: "47% improvement in care coordination, $2.5M annual savings",
                image: "https://dashtechinc.com/wp-content/uploads/2024/01/Medical-Device-Software-Development-Connecting-Technology-and-Healthcare-1-1024x405.jpg"
              },
              {
                title: "Retail",
                company: "ShopSmart Corporation",
                challenge: "Create omnichannel customer experience with real-time inventory",
                solution: "Integrated e-commerce platform with AI-powered recommendations",
                result: "32% increase in online sales, 45% reduction in cart abandonment",
                image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              },
              {
                title: "Manufacturing",
                company: "Industrial Innovations Ltd.",
                challenge: "Optimize production processes and reduce operational inefficiencies",
                solution: "IoT-enabled manufacturing system with predictive maintenance",
                result: "22% improvement in operational efficiency, 35% reduction in downtime",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              }
            ].map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
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
          
          {/* <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90">
                Let's discuss how our technology solutions can help you overcome challenges, 
                drive innovation, and achieve your business goals.
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

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <div className="sticky top-20">
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Get in Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Whether you're interested in our services, have a project in mind, or simply want to 
                  learn more about how we can help your business, our team is here to assist you.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Main Headquarters</h3>
                      <p className="text-gray-600">Ground Floor, Gali no 27, B-2/671, Lal Mandir Rd, Harsh Vihar, Delhi, 110093</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">(+91) 95541 56674</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">upsbindiatech@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
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
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="service">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Custom Software Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="security">Cybersecurity</option>
                      <option value="data">Data Analytics & AI</option>
                      <option value="infrastructure">IT Infrastructure</option>
                      <option value="digital">Digital Transformation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      rows="4"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  
                  <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;