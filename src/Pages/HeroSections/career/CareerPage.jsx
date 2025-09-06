  

import React, { useState } from 'react';
import { Rocket, Users, Zap, Globe, HeartHandshake, GraduationCap, Briefcase, Clock, DollarSign, Palette } from 'lucide-react';
import * as XLSX from 'xlsx';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    jobId: '',
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });
  const [showForm, setShowForm] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e, jobId, jobTitle) => {
    e.preventDefault();
    const data = [{
      Job_ID: jobId,
      Job_Title: jobTitle,
      Full_Name: formData.fullName,
      Email: formData.email,
      Phone: formData.phone,
      Resume_File_Name: formData.resume ? formData.resume.name : '',
      Cover_Letter: formData.coverLetter,
      Submission_Date: new Date().toISOString()
    }];

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    
    // Generate Excel file and trigger download
    XLSX.writeFile(wb, `Application_${jobId}_${formData.fullName.replace(/\s/g, '_')}.xlsx`);

    // Reset form and close
    setFormData({
      jobId: '',
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
    setShowForm(null);
  };

  const toggleForm = (jobId) => {
    setShowForm(showForm === jobId ? null : jobId);
    setFormData({ ...formData, jobId });
  };

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
                <button 
                  onClick={() => toggleForm(job.id)}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {showForm === job.id && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Apply for {job.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Resume</label>
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleInputChange}
                          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows="4"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        ></textarea>
                      </div>
                      <div className="flex justify-end gap-4">
                        <button
                          onClick={() => setShowForm(null)}
                          className="px-4 py-2 text-gray-600 font-semibold rounded-md hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={(e) => handleSubmit(e, job.id, job.title)}
                          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
            <button 
              onClick={() => toggleForm('general')}
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
            >
              Submit Application
              <Briefcase className="w-5 h-5 ml-2" />
            </button>
            {/* <a href="#" className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all">
              Contact HR Team
              <HeartHandshake className="w-5 h-5 ml-2" />
            </a> */}
          </div>

          {showForm === 'general' && (
            <div className="mt-8 p-6 bg-white rounded-lg text-gray-900">
              <h4 className="text-lg font-semibold mb-4">General Application</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleInputChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowForm(null)}
                    className="px-4 py-2 text-gray-600 font-semibold rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e, 'general', 'General Application')}
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
