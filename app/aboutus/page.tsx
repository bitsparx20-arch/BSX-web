'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden py-12 sm:py-16 md:py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* BITSPARX Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none hidden sm:block">
          <div className="text-6xl sm:text-8xl md:text-9xl font-black text-blue-600 rotate-12 transform scale-150">BITSPARX</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="block mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                We Are BITSPARX
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 mb-6 sm:mb-8 tracking-wide">
              Custom Tech, Crafted for You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
              At Bitsparx, we believe every idea has the potential to spark something extraordinary. We are a passionate team of creators, developers, and problem-solvers dedicated to transforming concepts into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transforming Ideas Into Reality
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                From custom websites to scalable software, we don't just build technology — we craft experiences tailored to your unique business needs. Whether you're a startup finding your digital footing or an established brand aiming to innovate, we design solutions that grow with you.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200">
                  <span className="text-blue-700 font-semibold text-sm sm:text-base">Custom Solutions</span>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-200">
                  <span className="text-purple-700 font-semibold text-sm sm:text-base">Scalable Technology</span>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-200">
                  <span className="text-cyan-700 font-semibold text-sm sm:text-base">Business Growth</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg p-2 shadow-2xl">
                <div className="bg-white rounded-md p-4 sm:p-6 h-64 sm:h-80">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-2/3"></div>
                    <div className="absolute top-8 right-4 text-xs font-bold text-blue-600 opacity-80">BITSPARX</div>
                    <div className="absolute bottom-6 right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-light px-4">
                To empower businesses with technology that inspires, simplifies, and accelerates growth in the digital age.
              </p>
            </div>
          </div>
          
          {/* Mission Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Inspire</h4>
              <p className="text-sm sm:text-base text-gray-600">We create technology that sparks innovation and drives creative thinking.</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Simplify</h4>
              <p className="text-sm sm:text-base text-gray-600">We make complex technology simple and accessible for everyone.</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Accelerate</h4>
              <p className="text-sm sm:text-base text-gray-600">We help businesses grow faster with powerful digital solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What We Do
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We specialize in creating custom digital solutions that drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Custom Websites */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Custom Websites</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Sleek, responsive, and designed to engage your audience with modern web technologies.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full mr-2 sm:mr-3"></div>
                    Modern UI/UX
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    Performance Optimized
                  </li>
                </ul>
              </div>
            </div>

            {/* Scalable Software */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Scalable Software</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Robust solutions that evolve with your business and handle growth seamlessly.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3"></div>
                    Cloud Architecture
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mr-2 sm:mr-3"></div>
                    Microservices
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3"></div>
                    Auto-scaling
                  </li>
                </ul>
              </div>
            </div>

            {/* Tailored Tech */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Tailored Tech</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Every solution is crafted to fit your needs, not forced to adapt to generic templates.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full mr-2 sm:mr-3"></div>
                    Custom Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    Business Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full mr-2 sm:mr-3"></div>
                    Ongoing Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitsparx Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Bitsparx?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Because we don't just deliver code — we deliver value, creativity, and results. Our approach blends technical expertise with a deep understanding of business goals, ensuring technology works for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Technical Excellence</h4>
                    <p className="text-sm sm:text-base text-gray-600">We use cutting-edge technologies and best practices to build robust, scalable solutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Creative Innovation</h4>
                    <p className="text-sm sm:text-base text-gray-600">We think outside the box to create unique solutions that set you apart from the competition.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Understanding</h4>
                    <p className="text-sm sm:text-base text-gray-600">We take time to understand your business goals and challenges to deliver solutions that truly work.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Proven Results</h4>
                    <p className="text-sm sm:text-base text-gray-600">Our track record speaks for itself - we deliver measurable results that drive business growth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-2 shadow-2xl">
                <div className="bg-white rounded-xl p-6 sm:p-8 h-80 sm:h-96">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-600">BITSPARX Dashboard</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded w-full"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-4/5"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-2/3"></div>
                    <div className="absolute top-12 right-6 text-xs font-bold text-blue-600 opacity-80">SUCCESS</div>
                    <div className="absolute bottom-8 right-6 w-12 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Spark Innovation?
          </h3>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Together, let's spark innovation and build the future of your brand. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              href="/contactus" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center group"
            >
              <span>Get Started Today</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/service" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
