'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle Tech Watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 opacity-8">
          <div className="text-5xl font-light text-blue-300/40 rotate-6">AI</div>
        </div>
        <div className="absolute top-48 right-20 opacity-8">
          <div className="text-4xl font-light text-cyan-300/40 -rotate-3">Python</div>
        </div>
        <div className="absolute top-64 left-1/3 opacity-8">
          <div className="text-6xl font-light text-blue-300/40 rotate-2">Web</div>
        </div>
        <div className="absolute top-80 right-1/3 opacity-8">
          <div className="text-4xl font-light text-purple-300/40 -rotate-6">Auto</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 lg:pt-6 lg:pb-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Custom Software & Websites
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-light text-gray-500">
                  Crafted by{' '}
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    BITSPARX
                  </span>
                </span>
              </h1>

              {/* Description */}
              <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At <span className="font-medium text-gray-800">Bitsparx</span>, we specialize in building customized software and websites that bring your company's vision to life. By combining cutting-edge technologies like Generative AI, Python, Web Development, and Automation, we create intelligent, scalable, and user-focused solutions.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether it's streamlining operations, enhancing customer experiences, or unlocking new opportunities, our goal is to craft digital products that drive innovation and empower businesses to grow.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-8 py-3 rounded-xl font-medium text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center group"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/service" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-3 rounded-xl font-medium text-base transition-all duration-300 border border-white/20 inline-flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image 
                src="/hero2.png" 
                alt="Bitsparx Custom Software & Websites" 
                width={600} 
                height={400}
                className="object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center mb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Our Core Technologies
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
          {/* Generative AI */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Generative AI
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Intelligent automation and AI-powered solutions
              </p>
            </div>
          </div>

          {/* Python */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Python Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Robust backend solutions and data processing
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern, responsive websites and applications
              </p>
            </div>
          </div>

          {/* Automation */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                Automation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Streamline operations with intelligent solutions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600">
              Let's build something amazing together with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contactus" 
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center group"
              >
                <span>Get Started Today</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/aboutus" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 border border-white/20 inline-flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
