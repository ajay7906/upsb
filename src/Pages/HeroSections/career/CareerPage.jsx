import React, { useState } from 'react';

const CareerPage = () => {
  const [activeJobId, setActiveJobId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for a Senior Software Engineer to design, develop and implement high-quality software solutions.',
      requirements: [
        'Bachelors degree in Computer Science or related field',
        '5+ years experience in software development',
        'Strong knowledge of JavaScript, React, and Node.js',
        'Experience with cloud services (AWS, Azure, or GCP)',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and develop high-quality software solutions',
        'Collaborate with cross-functional teams to define and implement new features',
        'Write clean, maintainable, and efficient code',
        'Troubleshoot, debug and upgrade existing systems',
        'Stay up-to-date with emerging trends and technologies'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      description: 'We are seeking a talented UX/UI Designer to create amazing user experiences and interfaces for our products.',
      requirements: [
        'Bachelors degree in Design, HCI, or related field',
        '3+ years of experience in UX/UI design',
        'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
        'Portfolio showcasing design projects',
        'Understanding of user-centered design principles'
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Conduct user research and usability testing',
        'Collaborate with product managers and engineers',
        'Design intuitive user interfaces for web and mobile applications',
        'Develop and maintain design systems'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      description: 'We are looking for a Product Manager to lead the development of innovative software products.',
      requirements: [
        'Bachelors degree in Business, Computer Science, or related field',
        '4+ years experience in product management',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Experience with Agile methodologies'
      ],
      responsibilities: [
        'Define product vision, strategy, and roadmap',
        'Gather and prioritize product requirements',
        'Work closely with engineering, design, and marketing teams',
        'Analyze market trends and competition',
        'Drive product launches and iterations'
      ]
    }
  ];

  const toggleJobDetails = (id) => {
    setActiveJobId(activeJobId === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert("Application submitted successfully!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Software Company</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Services</a>
              <a href="#" className="text-blue-600 font-medium">Careers</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
            <button className="md:hidden text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">We're building the future of software. Come work with talented individuals on challenging problems in a collaborative environment.</p>
          <a href="#open-positions" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            View Open Positions
          </a>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We push the boundaries of what's possible through creative thinking and cutting-edge technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of teamwork and diverse perspectives to solve complex problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">We build trust through transparency, accountability, and ethical decision-making.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Competitive Salary</h3>
              <p className="text-gray-600">We offer market-leading compensation packages to attract and retain top talent.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Remote-First Culture</h3>
              <p className="text-gray-600">Work from anywhere with flexible schedules designed for productivity and work-life balance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities, career advancement, and mentorship programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Comprehensive Benefits</h3>
              <p className="text-gray-600">Health insurance, retirement plans, paid time off, and wellness programs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleJobDetails(job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.department} • {job.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-4">
                      {job.type}
                    </span>
                    <svg 
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${activeJobId === job.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {activeJobId === job.id && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6 mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mt-6 mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  
                  <button 
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    onClick={() => document.getElementById('application-form').scrollIntoView({behavior: 'smooth'})}
                  >
                    Apply for this Position
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Apply Now</h2>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                  <select
                    id="position"
                    name="position"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume URL</label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
   
    </div>
  );
};

export default CareerPage;