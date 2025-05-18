import React from 'react';
import { 
  Clock, 
  Tag, 
  ArrowRight, 
  MessageSquare, 
  BookOpen, 
  Send, 
  Rocket, 
  Code,
  Cloud,
  Cpu,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';

const IndutoryUpdate = () => {
  const articles = [
    {
      id: 1,
      title: "The Rise of Quantum Computing in Modern Applications",
      category: "Quantum Tech",
      excerpt: "Exploring how quantum computing is revolutionizing data security and complex problem solving...",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      image: "bg-blue-100",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Edge AI: Bringing Intelligence to the Network Edge",
      category: "Artificial Intelligence",
      excerpt: "How edge computing combined with AI is transforming real-time data processing...",
      date: "Mar 14, 2024",
      readTime: "6 min read",
      image: "bg-purple-100",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Blockchain Beyond Cryptocurrency: Enterprise Solutions",
      category: "Blockchain",
      excerpt: "Enterprise adoption of blockchain technology in supply chain and identity management...",
      date: "Mar 13, 2024",
      readTime: "7 min read",
      image: "bg-green-100",
      icon: <Database className="w-6 h-6" />
    },
    // Add more articles as needed
  ];

  const categories = [
    "All Topics",
    "Artificial Intelligence",
    "Quantum Computing",
    "Blockchain",
    "Cloud Tech",
    "Cybersecurity",
    "IoT"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6 space-x-2">
              <Rocket className="w-6 h-6" />
              <span className="font-medium">Tech Trends 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Latest in Technology <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Stay ahead with cutting-edge insights into emerging technologies shaping our digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {articles.map((article) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${article.image} p-3 rounded-lg`}>
                      {article.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2 rounded-lg ${
                    num === 1 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8" />
                <h3 className="text-xl font-bold">Tech Insights Newsletter</h3>
              </div>
              <p className="mb-6">Get weekly updates on emerging technologies straight to your inbox</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 border border-white/30"
                />
                <button className="w-full flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Trending Topics</h3>
              <div className="space-y-4">
                {[
                  "AI Governance Frameworks",
                  "Quantum Cryptography",
                  "Metaverse Architecture",
                  "Sustainable Cloud Solutions",
                  "6G Network Development"
                ].map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <Tag className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default IndutoryUpdate;