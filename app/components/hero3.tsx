'use client'
import { useState } from "react"
import Link from 'next/link';

export default function Hero3() {



    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden min-h-[100dvh] pt-5">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>



            {/* Floating Tech Icons - Properly Distributed */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
                {/* Top Row - Evenly spaced */}
                <div className="absolute top-16 left-1/4 animate-bounce">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                </div>
                <div className="absolute top-20 right-1/4 animate-bounce delay-300">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                
                {/* Middle Left - Balanced positioning */}
                <div className="absolute top-1/3 left-8 animate-bounce delay-700">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                </div>
                
                {/* Middle Right - Balanced positioning */}
                <div className="absolute top-1/3 right-8 animate-bounce delay-500">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                </div>
                
                {/* Bottom Row - Evenly spaced */}
                <div className="absolute bottom-20 left-1/3 animate-bounce delay-1000">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-16 right-1/3 animate-bounce delay-200">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-7rem)] flex items-center py-8 lg:py-12">
                <div className="text-center mb-16 w-full">
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            BITSPARX
                        </span>
                        <br />
                        <span className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Custom Tech, Crafted for You</span>
                    </h2>
                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                    We transform ideas into powerful digital solutions. From custom websites to scalable software, we design and build technology tailored to your business needs. Our goal is simple — to spark innovation and help brands grow in the digital age.
                    </p>
                    

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-sm sm:text-base text-gray-600">Clients</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">10+</div>
                            <div className="text-sm sm:text-base text-gray-600">Core Technologies</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-2">100%</div>
                            <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="relative group">
                            {/* Video Container */}
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => setVideoPopUp(true)}>
                                <video 
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/hero.png"
                                >
                                    <source src="/video11.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                
                                {/* Video Info */}
                                {/* <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-bold text-gray-900">Learn about us!</h3>
                                                <p className="text-sm text-gray-600">Watch the video to know more about us</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-medium text-gray-900">1 min</div>
                                                <div className="text-xs text-gray-500">Duration</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Call to Action */}
                        {/* <div className="text-center mt-12">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> */}
                                {/* <button 
                                    onClick={() => setVideoPopUp(true)}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                    Watch Full Session
                                </button> */}
                                {/* <a href="/courses" className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20">
                                    Explore All Courses
                                </a> */}
                            {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoPoppedUp && (
                <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 p-4">
                    <div className="absolute inset-0 w-full h-full bg-black/90 backdrop-blur-md" onClick={() => setVideoPopUp(false)}></div>
                    <div className="relative z-10 w-full max-w-5xl">
                        <button
                            className="w-10 h-10 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                            onClick={() => setVideoPopUp(false)}
                        >
                            <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                        <video 
                            className="w-full rounded-xl sm:rounded-2xl shadow-3xl" 
                            controls 
                            autoPlay={true}
                            poster="/hero.png"
                        >
                            <source src="/video11.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </section>
    )
}