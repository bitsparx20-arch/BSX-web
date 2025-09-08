'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const [activeService, setActiveService] = useState('automation');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const openModal = (serviceKey: string) => {
    setSelectedService(services[serviceKey as keyof typeof services]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = {
    automation: {
      title: "Automation Services",
      description: "Boost efficiency and eliminate repetitive manual tasks with Bitsparx's automation solutions. Whether automating routine office workflows, business processes, or software integrations, our team uses cutting-edge Python and RPA (Robotic Process Automation) to streamline operations, increase productivity, and free your team to focus on strategic business goals.",
      features: [
        "Python Scripting & Automation",
        "Generative AI & AI Integration",
        "Data entry automation",
        "Task scheduling",
        "API interactions",
        "AI-powered tool integration"
      ],
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    webDevelopment: {
      title: "Web Development",
      description: "Engage audiences with fast, responsive, and search-optimized websites, built for success in today's digital marketplace. Bitsparx specializes in seamless full stack development using React.js and Tailwind CSS for scalable web applications.",
      features: [
        "Full Stack Development",
        "React.js & Tailwind CSS",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Scalable architecture"
      ],
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    software: {
      title: "Custom Software Solutions",
      description: "Get bespoke software tailor-made for unique business requirements, automating and digitizing processes exactly the way you need. Our custom solutions are designed to integrate seamlessly with your existing systems.",
      features: [
        "Bespoke software development",
        "System integration",
        "Process digitization",
        "Custom workflows",
        "API development",
        "Database design"
      ],
      icon: "💻",
      color: "from-green-500 to-emerald-500"
    },
    data: {
      title: "Data Scraping & Management",
      description: "Transform raw web and internal data into valuable insights with customized scraping and automated data management services. We help you extract, process, and analyze data to drive informed business decisions.",
      features: [
        "Web scraping solutions",
        "Data processing",
        "Automated data management",
        "Data analytics",
        "Database optimization",
        "Real-time data feeds"
      ],
      icon: "📊",
      color: "from-orange-500 to-red-500"
    },
    server: {
      title: "Server Maintenance & Management",
      description: "Enjoy peace of mind with ongoing server monitoring, updates, and backup solutions for high availability and data security. Our team ensures your infrastructure runs smoothly and securely.",
      features: [
        "24/7 server monitoring",
        "Automated updates",
        "Backup solutions",
        "Security hardening",
        "Performance optimization",
        "Disaster recovery"
      ],
      icon: "🖥️",
      color: "from-indigo-500 to-blue-500"
    },
    marketing: {
      title: "Digital Marketing & SEO Optimization",
      description: "Enhance your company's visibility and reach through proven digital marketing tactics, complete with SEO strategies that are automated for real-time monitoring and optimization.",
      features: [
        "SEO optimization",
        "Content marketing",
        "Social media management",
        "PPC campaigns",
        "Analytics & reporting",
        "Automated monitoring"
      ],
      icon: "📈",
      color: "from-teal-500 to-green-500"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

             {/* Tech Watermarks */}
       <div className="absolute inset-0 pointer-events-none hidden sm:block">
         <div className="absolute top-40 right-12 opacity-10">
           <div className="text-3xl sm:text-5xl font-black text-cyan-400/40 -rotate-6 transform scale-100">Solutions</div>
         </div>
         <div className="absolute bottom-40 left-1/4 opacity-10">
           <div className="text-4xl sm:text-7xl font-black text-purple-500/40 rotate-3 transform scale-100">Innovation</div>
         </div>
       </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="block mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Bitsparx Services
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 tracking-wide">
              Empowering Your Business with Innovative Digital Solutions
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
            From automation to web development, we provide comprehensive digital solutions that drive growth, 
            efficiency, and innovation. Our expertise spans the entire technology spectrum, ensuring your 
            business stays ahead in the digital age.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`group relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm ${
                  activeService === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-md ring-1 ring-white/20`
                    : 'bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white hover:shadow-md border border-white/30 hover:border-white/50'
                }`}
              >
                {/* Background Glow for Active State */}
                {activeService === key && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-lg blur-md opacity-15 animate-pulse`}></div>
                )}
                
                {/* Content */}
                <div className="relative z-10 flex items-center space-x-1.5">
                  <span className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </span>
                  <span className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200">
                    {service.title.split(' ')[0]}
                  </span>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 ${
                  activeService === key ? 'bg-white' : 'bg-gray-900'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Details */}
        <div className="mb-12 sm:mb-16">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`transition-all duration-700 ${
                activeService === key ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'
              }`}
            >
                             <div className="bg-white/90 backdrop-blur-md rounded-lg p-2 sm:p-2.5 shadow-md border border-white/30 hover:shadow-lg transition-all duration-150 hover:scale-[1.002]">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
                   {/* Service Content */}
                   <div className="lg:col-span-2 space-y-2 sm:space-y-2.5">
                     {/* Header with Enhanced Icon */}
                     <div className="flex items-center mb-2 sm:mb-2.5 group">
                       <div className="relative mr-2">
                         <div className={`w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-150 group-hover:scale-105`}>
                           <span className="text-sm sm:text-base">{service.icon}</span>
                         </div>
                         {/* Glow Effect */}
                         <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-md blur-sm opacity-10 group-hover:opacity-15 transition-all duration-150`}></div>
                       </div>
                       <div>
                         <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5 group-hover:text-gray-800 transition-colors duration-150">
                           {service.title}
                         </h2>
                         <div className={`w-6 sm:w-7 h-0.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                       </div>
                     </div>
                    
                    {/* Enhanced Description */}
                    <div className="relative">
                      <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                        {service.description}
                      </p>
                      {/* Decorative Quote Mark */}
                      <div className={`absolute -top-0.5 -left-0.5 text-sm sm:text-lg text-gray-200 font-serif opacity-10`}>"</div>
                    </div>
                    
                    {/* Enhanced Features Section */}
                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-1 flex items-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Features
                      </h3>
                      <div className="grid gap-0.5">
                        {service.features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-center p-0.5 bg-gradient-to-r from-gray-50 to-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-100 group/feature"
                          >
                            <div className={`w-0.5 h-0.5 bg-gradient-to-r ${service.color} rounded-full mr-1 group-hover/feature:scale-110 transition-transform duration-100`}></div>
                            <span className="text-xs text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-100">
                              {feature}
                            </span>
                            <div className="ml-auto opacity-0 group-hover/feature:opacity-100 transition-opacity duration-100">
                              <svg className={`w-1.5 h-1.5 text-transparent bg-gradient-to-r ${service.color} bg-clip-text`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Service Visual */}
                  <div className="lg:col-span-1 relative group h-48 sm:h-full mt-4 lg:mt-0">
                    {/* Main Visual Container */}
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-150 group-hover:scale-105 relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1 right-1 w-4 sm:w-5 h-4 sm:h-5 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-1.5 left-1.5 w-2 sm:w-3 h-2 sm:h-3 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 border border-white/20 rounded-full"></div>
                      </div>
                      
                      {/* Main Icon */}
                      <div className="text-white text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-150 relative z-10">
                        {service.icon}
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-1.5 left-2 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute top-1/3 right-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-700"></div>
                    </div>
                    
                    {/* Enhanced Floating Elements */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white/95 backdrop-blur-sm rounded-md shadow-sm flex items-center justify-center border border-white/50 group-hover:scale-105 transition-transform duration-150">
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r ${service.color} rounded-full animate-pulse`}></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/95 backdrop-blur-sm rounded-md shadow-sm flex items-center justify-center border border-white/50 group-hover:scale-105 transition-transform duration-150">
                      <div className={`w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${service.color} rounded-full animate-bounce`}></div>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r ${service.color} rounded-full opacity-60`}></div>
                  </div>
                </div>
                
                {/* Bottom Action Bar */}
                <div className="mt-2 sm:mt-3 pt-2 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center space-x-1 sm:space-x-1.5">
                      <div className="flex items-center space-x-1">
                        <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Available Now</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-2 h-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-gray-600">24/7 Support</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => openModal(key)}
                      className={`px-2 sm:px-2.5 py-1 bg-gradient-to-r ${service.color} text-white rounded text-xs font-medium hover:shadow-sm transition-all duration-100 hover:scale-105`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Complete Service Portfolio</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(services).map(([key, service]) => (
              <div
                key={key}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveService(key)}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                  <span className="text-xl sm:text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{service.title}</h3>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description.length > 120 
                    ? `${service.description.substring(0, 120)}...` 
                    : service.description
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Bitsparx */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose Bitsparx?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Innovation First</h3>
                <p className="text-blue-100 text-sm sm:text-base">Cutting-edge technology and creative solutions that set you apart from the competition.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-blue-100 text-sm sm:text-base">Quick turnaround times without compromising on quality or attention to detail.</p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Client Focused</h3>
                <p className="text-blue-100 text-sm sm:text-base">Your success is our priority. We work closely with you to ensure every solution meets your exact needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how our services can transform your business. Get in touch with our team to explore the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contactus" 
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20 inline-flex items-center justify-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedService.color} p-4 sm:p-6 rounded-t-2xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">{selectedService.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{selectedService.title}</h2>
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg">Comprehensive Service Details</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Service Overview</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Key Features & Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${selectedService.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose This Service?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Fast Delivery</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Quick turnaround times without compromising quality</p>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quality Assured</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Rigorous testing and quality control processes</p>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:col-span-2 lg:col-span-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">24/7 Support</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Round-the-clock assistance and maintenance</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link 
                    href="/contactus" 
                    className={`bg-gradient-to-r ${selectedService.color} hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center`}
                  >
                    <span>Get Started Today</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <button
                    onClick={closeModal}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
