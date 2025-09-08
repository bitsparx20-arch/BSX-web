'use client';

import Link from 'next/link';

export default function Hero2() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden py-16 lg:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Innovation Driven</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
            <br />
            <span className="text-gray-800">That Drive Growth</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We specialize in creating cutting-edge technology solutions that help businesses scale, innovate, and succeed in the digital age.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path d="M7 2a1 1 0 000 2h6a1 1 0 100-2H7zM7 16a1 1 0 100 2h6a1 1 0 100-2H7z" />
              </svg>
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
