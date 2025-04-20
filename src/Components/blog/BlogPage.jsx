import React, { useState } from 'react';

const BlogPage = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  
  // Sample blog posts data - you would replace this with your actual content
  const blogPosts = [
    {
      id: 1,
      title: "How UI/UX Design Impacts Customer Engagement",
      excerpt: "Discover how thoughtful UI/UX design can significantly increase customer engagement and conversion rates for your business.",
      category: "UI/UX Design",
      date: "April 3, 2025",
      author: "Rahul Sharma",
      image: "/api/placeholder/800/450",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Essential Cybersecurity Practices for Small Businesses",
      excerpt: "Small businesses are increasingly becoming targets for cyber attacks. Learn the essential security practices to protect your business.",
      category: "Cyber Security",
      date: "March 28, 2025",
      author: "Priya Patel",
      image: "/api/placeholder/800/450",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Future of Mobile App Development in India",
      excerpt: "Explore the latest trends and technologies shaping the future of mobile application development in the Indian market.",
      category: "Mobile App Development",
      date: "March 20, 2025",
      author: "Vikram Singh",
      image: "/api/placeholder/800/450",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Choosing the Right CRM Solution for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect CRM solution that aligns with your business goals and improves customer relationships.",
      category: "Custom CRM Development",
      date: "March 15, 2025",
      author: "Anjali Desai",
      image: "/api/placeholder/800/450",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "How APIs Are Transforming Business Integration",
      excerpt: "Learn how modern API development is enabling seamless integration between different systems and applications for businesses.",
      category: "API Development",
      date: "March 10, 2025",
      author: "Arjun Mehta",
      image: "/api/placeholder/800/450",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "E-commerce Trends That Will Dominate in 2025",
      excerpt: "Stay ahead of the competition with these emerging e-commerce trends that are set to reshape online retail in 2025.",
      category: "eCommerce Development",
      date: "March 5, 2025",
      author: "Neha Gupta",
      image: "/api/placeholder/800/450",
      readTime: "6 min read"
    }
  ];

  // Categories with count for sidebar
  const categories = [
    { name: "UI/UX Design", count: 8 },
    { name: "Cyber Security", count: 12 },
    { name: "Website Development", count: 15 },
    { name: "eCommerce Development", count: 9 },
    { name: "Mobile App Development", count: 14 },
    { name: "Custom CRM Development", count: 6 },
    { name: "API Development", count: 7 }
  ];

  // Popular posts for sidebar
  const popularPosts = [
    { title: "10 UI Design Principles Every Developer Should Know", date: "February 28, 2025" },
    { title: "How to Secure Your E-commerce Website from Threats", date: "February 15, 2025" },
    { title: "The Impact of 5G on Mobile App Development", date: "January 30, 2025" }
  ];
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with email: ${subscriberEmail}`);
    setSubscriberEmail('');
  };

  return (
    <div className="bg-gray-50">
      {/* Blog Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UPSB Tech Blog</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Insights, trends, and expert advice on technology, development, and digital transformation
          </p>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Posts */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav aria-label="Page navigation">
                <ul className="flex space-x-2">
                  <li>
                    <a href="#" className="px-3 py-2 border rounded text-gray-600 hover:bg-gray-100">Previous</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 border rounded bg-blue-600 text-white">1</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 border rounded text-gray-600 hover:bg-gray-100">2</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 border rounded text-gray-600 hover:bg-gray-100">3</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 border rounded text-gray-600 hover:bg-gray-100">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search Bar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full py-2 px-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-2.5">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 pb-2 border-b last:border-0">
                    <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Popular Posts</h3>
              <ul>
                {popularPosts.map((post, index) => (
                  <li key={index} className="mb-4 pb-4 border-b last:border-0 last:pb-0">
                    <a href="#" className="block hover:text-blue-600">
                      <h4 className="font-medium text-gray-800">{post.title}</h4>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
              <form onSubmit={handleSubscribe}>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need expert tech services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you with your next project. From UI/UX design to custom CRM development, we've got you covered.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-800 hover:bg-blue-100 font-bold py-2 px-6 rounded-lg transition-colors">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-lg transition-colors">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;