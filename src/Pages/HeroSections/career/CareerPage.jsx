import React from 'react';
import { Rocket, Users, Zap, Globe, HeartHandshake, GraduationCap, Briefcase, Clock, DollarSign, Palette } from 'lucide-react';

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      experience: "5+ years"
    },
    {
      id: 2,
      title: "UX Designer",
      type: "Contract",
      location: "Hybrid",
      department: "Design",
      experience: "3+ years"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "On-site",
      department: "Operations",
      experience: "4+ years"
    },
    {
      id: 4,
      title: "Product Manager",
      type: "Full-time",
      location: "Remote",
      department: "Management",
      experience: "6+ years"
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, title: "Remote Flexibility", description: "Work from anywhere in the world" },
    { icon: <HeartHandshake className="w-6 h-6" />, title: "Health & Wellness", description: "Comprehensive medical coverage" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning Budget", description: "$2k annual education stipend" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Tech Setup", description: "Latest hardware & software" },
    { icon: <Clock className="w-6 h-6" />, title: "Flex Hours", description: "Tailored work schedule" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Competitive Salary", description: "Top 10% market rates" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 px-6 py-2 rounded-full mb-6">
            <Rocket className="w-5 h-5 mr-2" />
            <span className="font-medium">We're Hiring!</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Shape the Future of Tech <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join our team of innovators and disruptors building cutting-edge solutions that transform industries.
          </p>
          <a href="#openings" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all">
            Explore Opportunities
            <Zap className="w-5 h-5 ml-2 fill-current" />
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-600">Join Our Team?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're more than just a workplace - we're a community of passionate professionals pushing boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with industry experts in a supportive, cross-functional environment that values every voice.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Palette className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Creative Freedom</h3>
              <p className="text-gray-600">
                Bring your ideas to life with autonomy and resources to experiment and innovate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Build products used by millions worldwide while maintaining sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-blue-600">Openings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across our global teams and help us build tomorrow's solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {job.experience} experience
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee <span className="text-blue-600">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and unique perks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Can't find the perfect role? We're always looking for exceptional talent.
            Send us your resume and tell us how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all">
              Submit Application
              <Briefcase className="w-5 h-5 ml-2" />
            </a>
            <a href="#" className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all">
              Contact HR Team
              <HeartHandshake className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;