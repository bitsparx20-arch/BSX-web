'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden min-h-[100dvh]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Background Images */}
      <div className="absolute top-20 right-10 opacity-10">
        {/* <Image 
          src="/hero.png" 
          alt="Hero Background" 
          width={400} 
          height={300}
          className="object-contain"
        /> */}
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        {/* <Image 
          src="/hero1.png" 
          alt="Hero Background" 
          width={300} 
          height={200}
          className="object-contain"
        /> */}
      </div>
      
      {/* BITSPARX Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-9xl font-black text-blue-600 rotate-12 transform scale-150">BITSPARX</div>
      </div>

      {/* Tech Watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Python Watermark */}
        <div className="absolute top-20 left-8 opacity-15">
          <div className="text-7xl font-black text-blue-400/60 rotate-12 transform scale-100 drop-shadow-lg">Python</div>
        </div>
        
        {/* GenAI Watermark */}
        <div className="absolute top-40 right-12 opacity-15">
          <div className="text-6xl font-black text-cyan-400/60 -rotate-6 transform scale-100 drop-shadow-lg">GenAI</div>
        </div>
        
        {/* Web Watermark */}
        <div className="absolute top-60 left-1/4 opacity-15">
          <div className="text-8xl font-black text-blue-400/60 rotate-3 transform scale-100 drop-shadow-lg">Web</div>
        </div>
        
        {/* Software Watermark */}
        <div className="absolute top-80 right-1/4 opacity-15">
          <div className="text-6xl font-black text-purple-500/60 -rotate-12 transform scale-100 drop-shadow-lg">Software</div>
        </div>
        
        {/* React Watermark */}
        <div className="absolute top-32 right-1/3 opacity-15">
          <div className="text-5xl font-black text-cyan-500/60 rotate-8 transform scale-100 drop-shadow-lg">React</div>
        </div>
        
        {/* Cloud Watermark */}
        <div className="absolute top-70 left-1/2 opacity-15">
          <div className="text-7xl font-black text-cyan-500/60 -rotate-3 transform scale-100 drop-shadow-lg">Cloud</div>
        </div>
        
        {/* API Watermark */}
        <div className="absolute top-90 left-1/6 opacity-15">
          <div className="text-6xl font-black text-blue-400/60 rotate-15 transform scale-100 drop-shadow-lg">API</div>
        </div>
        
        {/* Mobile Watermark */}
        <div className="absolute top-50 left-2/3 opacity-15">
          <div className="text-5xl font-black text-cyan-400/60 -rotate-8 transform scale-100 drop-shadow-lg">Mobile</div>
        </div>
        
        {/* AI Watermark */}
        <div className="absolute top-100 right-1/6 opacity-15">
          <div className="text-6xl font-black text-purple-400/60 rotate-5 transform scale-100 drop-shadow-lg">AI</div>
        </div>
        
        {/* DevOps Watermark */}
        <div className="absolute top-30 left-1/3 opacity-15">
          <div className="text-5xl font-black text-cyan-400/60 -rotate-10 transform scale-100 drop-shadow-lg">DevOps</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-7rem)] flex items-center py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8">
              
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Custom Tech, Crafted for You
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 tracking-wide">
                by{' '}
                <span className="relative inline-block font-black">
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-pulse drop-shadow-sm">
                    BITSPARX
                  </span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                  <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="absolute top-1/2 -right-2 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
              At <span className="font-semibold text-gray-800">Bitsparx</span>, we transform ideas into powerful digital solutions. From custom websites to scalable software, we design and build technology tailored to your business needs. Our goal is simple — to spark innovation and help brands grow in the digital age.
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center group"
              >
                <span>Get Started for Free</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/aboutus" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Device Mockups */}
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative mx-auto lg:mx-0 w-full max-w-md">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-md p-4 h-64">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      {/* BITSPARX Branding Elements */}
                      <div className="absolute top-8 right-4 text-xs font-bold text-blue-600 opacity-80">BITSPARX</div>
                      <div className="absolute bottom-6 right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -right-8 lg:-right-16">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-2 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-xl p-3 h-48 w-32">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold">4:04</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      {/* BITSPARX Mobile Branding */}
                      <div className="absolute bottom-2 left-2 text-[6px] font-bold text-blue-600 opacity-80">BITSPARX</div>
                      <div className="absolute top-1/2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BITSPARX Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400 rounded-full opacity-40 animate-bounce delay-500"></div>
            <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-50 animate-ping"></div>
            {/* BITSPARX Text Elements */}
            <div className="absolute top-16 right-16 text-xs font-bold text-blue-600 opacity-60 rotate-12">BITS</div>
            <div className="absolute bottom-16 left-16 text-xs font-bold text-cyan-600 opacity-60 -rotate-12">SPARX</div>
          </div>
        </div>
      </div>


    </section>
  );
}
