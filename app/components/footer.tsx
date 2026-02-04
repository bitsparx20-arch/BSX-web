'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 border-t border-gray-800">
      {/* Background Elements - contained by footer's relative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Link href="/" className="flex items-center group">
                  <div className="relative">
                    <Image 
                      src="/logo_black1.png" 
                      alt="Bitsparx Logo" 
                      width={64}
                      height={64}
                      className="h-16 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-110 group-hover:scale-125"></div>
                  </div>
                </Link>
              </div>
              
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed text-sm">
                At Bitsparx, we transform ideas into powerful digital solutions. From custom websites to scalable software, we design and build technology tailored to your business needs.
              </p>
              
              <div className="flex space-x-4">
                <div className="relative group">
                  <Link href="mailto:bitsparx20@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-700">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  {/* Email Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="text-center">
                      <div>bitsparx20@gmail.com</div>
                      <div>admin@bitsparx.com</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
                <Link href="https://www.linkedin.com/company/bitsparx11/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-700">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Custom Software</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">AI and Technology Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Automation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Consulting</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/aboutus" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Bitsparx. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              {/* <Link href="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
