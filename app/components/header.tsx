'use client'
import { useState } from "react"
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center group">
                            <div className="relative">
                                <img 
                                    src="/logo1.png" 
                                    alt="Bitsparx Logo" 
                                    className="h-28 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl group-hover:rotate-1"
                                />
                                {/* Animated Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-110 group-hover:scale-125"></div>
                                {/* Floating Tech Elements */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500 delay-200"></div>
                                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500 delay-300"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link 
                            href="/" 
                            className="text-gray-700 hover:text-blue-600 px-5 py-3 rounded-xl text-base font-semibold transition-all duration-500 hover:bg-white/80 backdrop-blur-sm relative group hover:scale-105 hover:shadow-lg"
                        >
                            <span className="relative z-10 group-hover:translate-y-[-2px] transition-all duration-500">Home</span>
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                        </Link>
                        <Link 
                            href="/aboutus" 
                            className="text-gray-700 hover:text-blue-600 px-5 py-3 rounded-xl text-base font-semibold transition-all duration-500 hover:bg-white/80 backdrop-blur-sm relative group hover:scale-105 hover:shadow-lg"
                        >
                            <span className="relative z-10 group-hover:translate-y-[-2px] transition-all duration-500">About Us</span>
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                        </Link>
                        <Link 
                            href="/service" 
                            className="text-gray-700 hover:text-blue-600 px-5 py-3 rounded-xl text-base font-semibold transition-all duration-500 hover:bg-white/80 backdrop-blur-sm relative group hover:scale-105 hover:shadow-lg"
                        >
                            <span className="relative z-10 group-hover:translate-y-[-2px] transition-all duration-500">Services</span>
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
                        </Link>
                        {/*  */}
                        <Link 
                            href="/contactus" 
                            className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 relative group flex items-center space-x-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm scale-110 group-hover:scale-125"></div>
                            <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="relative z-10">Contact Us</span>
                            {/* Floating Elements */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500"></div>
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-4 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-sm rounded-xl mx-4">
                    <Link 
                        href="/" 
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/aboutus" 
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link 
                        href="/service" 
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/team" 
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Team
                    </Link>
                    <Link 
                        href="/contactus" 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mx-2 relative group"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <svg className="w-6 h-6 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="relative z-10 font-semibold">Contact Us</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
