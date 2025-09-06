import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle, 
  Star, 
  BarChart, 
  Globe, 
  Smartphone, 
  Monitor, 
  Terminal,
  Zap,
  Users,
  TrendingUp,
  Heart,
  Target,
  Calendar,
  PieChart,
  ChevronRight,
  
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaSolutions = () => {
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-cyan-400 opacity-20 rounded-full"></div>
        
        <div className="container mx-auto px-6 py-28 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                <Zap className="h-4 w-4 mr-2" />
                Social Media Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Amplify Your Brand <br />With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">Social Media</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                Boost your online presence with our comprehensive social media management and marketing solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center">
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
                  <TrendingUp className="h-5 w-5 mr-2 text-yellow-300" />
                  <span className="text-sm">Proven Results</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-yellow-300" />
                  <span className="text-sm">Audience Targeting</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-yellow-300" />
                  <span className="text-sm">Engagement Growth</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-5">
                  <div className="w-full h-full mx-auto rotate-6 opacity-30 bg-gradient-to-r from-yellow-400 to-amber-500 blur-lg"></div>
                </div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="bg-gradient-to-br from-blue-700 to-cyan-600 p-1 rounded-xl">
                    <div className="bg-gray-900 rounded-lg overflow-hidden p-4">
                      <div className="flex mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex space-x-4 mb-4">
                          <div className="bg-blue-600/20 p-2 rounded-lg">
                            <div className="h-3 w-16 bg-blue-500 rounded"></div>
                            <div className="h-2 w-12 bg-blue-400/50 rounded mt-2"></div>
                          </div>
                          <div className="bg-cyan-600/20 p-2 rounded-lg">
                            <div className="h-3 w-20 bg-cyan-500 rounded"></div>
                            <div className="h-2 w-14 bg-cyan-400/50 rounded mt-2"></div>
                          </div>
                          <div className="bg-amber-600/20 p-2 rounded-lg">
                            <div className="h-3 w-14 bg-amber-500 rounded"></div>
                            <div className="h-2 w-10 bg-amber-400/50 rounded mt-2"></div>
                          </div>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                            <div className="ml-2">
                              <div className="h-2 w-24 bg-gray-500 rounded"></div>
                              <div className="h-2 w-16 bg-gray-600 rounded mt-2"></div>
                            </div>
                          </div>
                          <div className="h-3 w-full bg-gray-600 rounded mt-3"></div>
                          <div className="h-3 w-3/4 bg-gray-600 rounded mt-2"></div>
                        </div>
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
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-50 -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Why Social Media Solutions?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Engage, Connect, and Grow Your Audience
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our social media solutions empower businesses to build strong online communities, drive engagement, and achieve marketing goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Social Media Management",
                description: "Streamline content creation, scheduling, and analytics across multiple platforms.",
                features: ["Content Strategy", "Platform Management", "Community Engagement"]
              },
              {
                icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                title: "Targeted Advertising",
                description: "Create and optimize ad campaigns to reach your ideal audience effectively.",
                features: ["Audience Targeting", "Ad Creative", "Campaign Optimization"]
              },
              {
                icon: <Monitor className="h-10 w-10 text-blue-600" />,
                title: "Analytics & Insights",
                description: "Gain actionable insights with advanced analytics to refine your strategy.",
                features: ["Performance Tracking", "ROI Analysis", "Competitive Analysis"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
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
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart className="h-4 w-4 mr-2" />
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Social Media Solutions?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our solutions help you maximize your social media presence, engage your audience, and drive measurable business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                title: "Increased Brand Visibility",
                description: "Expand your reach and build brand awareness across social platforms."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                title: "Enhanced Engagement",
                description: "Foster meaningful interactions with your audience to build loyalty."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                title: "Data-Driven Strategies",
                description: "Leverage analytics to optimize campaigns and maximize ROI."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                title: "Scalable Campaigns",
                description: "Adaptable solutions that grow with your business and marketing needs."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Social Media Strategy Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a strategic approach to ensure your social media campaigns are effective, engaging, and aligned with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "We analyze your brand, audience, and goals to create a tailored social media strategy.",
                icon: <MessageSquare className="h-8 w-8 text-white" />
              },
              {
                step: "02",
                title: "Content Creation",
                description: "Crafting engaging content, including visuals and copy, to resonate with your audience.",
                icon: <Globe className="h-8 w-8 text-white" />
              },
              {
                step: "03",
                title: "Campaign Execution",
                description: "Launching and managing campaigns across platforms with precise targeting.",
                icon: <Smartphone className="h-8 w-8 text-white" />
              },
              {
                step: "04",
                title: "Monitoring & Analytics",
                description: "Tracking performance and analyzing data to optimize campaign results.",
                icon: <BarChart className="h-8 w-8 text-white" />
              },
              {
                step: "05",
                title: "Optimization",
                description: "Refining strategies based on insights to maximize engagement and ROI.",
                icon: <CheckCircle className="h-8 w-8 text-white" />
              },
              {
                step: "06",
                title: "Reporting & Support",
                description: "Providing detailed reports and ongoing support to ensure long-term success.",
                icon: <Monitor className="h-8 w-8 text-white" />
              }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Terminal className="h-4 w-4 mr-2" />
              Technologies We Use
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Tools for Social Media Success
            </h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              We leverage cutting-edge tools to manage, analyze, and optimize your social media presence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Hootsuite", category: "Management", color: "bg-orange-500/10" },
              { name: "Sprout Social", category: "Management", color: "bg-green-500/10" },
              { name: "Google Analytics", category: "Analytics", color: "bg-yellow-500/10" },
              { name: "Meta Business Suite", category: "Advertising", color: "bg-blue-500/10" },
              { name: "Buffer", category: "Scheduling", color: "bg-red-500/10" },
              { name: "Canva", category: "Content Creation", color: "bg-teal-500/10" },
              { name: "Later", category: "Visual Planning", color: "bg-purple-500/10" },
              { name: "Brandwatch", category: "Analytics", color: "bg-pink-500/10" }
            ].map((tech, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-white/10 ${tech.color}`}>
                <div className="bg-white/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-center">{tech.name}</h3>
                <p className="text-sm text-blue-200 text-center">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Driving Impact with Social Media
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover how our social media solutions have helped businesses boost engagement and grow their brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Retail",
                company: "ShopSmart Corporation",
                challenge: "Increase online engagement and drive e-commerce sales",
                solution: "Targeted social media campaigns with personalized content",
                result: "45% increase in engagement, 30% boost in online sales",
                color: "bg-blue-500"
              },
              {
                title: "Hospitality",
                company: "Elite Resorts",
                challenge: "Build brand awareness and attract new customers",
                solution: "Comprehensive social media strategy with influencer partnerships",
                result: "50% growth in followers, 25% increase in bookings",
                color: "bg-cyan-500"
              }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100">
                <div className="p-8">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
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
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
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
                  {/* <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center group-hover:translate-x-2 transition-transform">
                    Read full case study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg font-semibold">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from businesses that have amplified their brand with our social media solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OK Technology's social media strategy skyrocketed our engagement, doubling our follower base in just three months.",
                author: "Lisa Wong",
                position: "Marketing Director, ShopSmart Corporation",
                avatar: "LW"
              },
              {
                quote: "Their targeted ad campaigns delivered a 35% increase in conversions, exceeding our expectations.",
                author: "James Carter",
                position: "CEO, Elite Resorts",
                avatar: "JC"
              },
              {
                quote: "The analytics tools provided by OK gave us deep insights, allowing us to refine our strategy and boost ROI.",
                author: "Sarah Lee",
                position: "CMO, TrendSetters Inc.",
                avatar: "SL"
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 font-semibold text-blue-700">
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

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "89%", label: "Increase in Engagement", icon: <Heart className="h-8 w-8 mx-auto mb-4" /> },
              { number: "2.3x", label: "ROI Improvement", icon: <TrendingUp className="h-8 w-8 mx-auto mb-4" /> },
              { number: "57%", label: "Cost Reduction", icon: <PieChart className="h-8 w-8 mx-auto mb-4" /> },
              { number: "500+", label: "Campaigns Managed", icon: <Target className="h-8 w-8 mx-auto mb-4" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-cyan-800/50"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-40 h-40 bg-yellow-400 opacity-20 rounded-full"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Social Media Presence?</h2>
              <p className="text-xl opacity-90">
                Let's discuss how our social media solutions can help you engage your audience and grow your brand.
              </p>
            </div>
            <div>
              <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
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

export default SocialMediaSolutions;