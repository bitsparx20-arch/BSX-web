'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero1() {
  return (
    <section id="section-hero1" className="relative overflow-hidden h-full w-full flex items-center">
      {/* Full-bleed background image - covers whole section */}
      <div className="absolute inset-0">
        <Image
          src="/img02.jpg"
          alt=""
          fill
          className="object-cover object-left"
          sizes="100vw"
          priority
        />
      </div>
      {/* Dark overlay - lighter so image shows through more */}
      <div className="absolute inset-0 bg-slate-900/15" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/25 via-slate-700/20 to-slate-800/30" aria-hidden />
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      {/* Floating background icons - left side */}
      <div className="absolute inset-0 pointer-events-none select-none w-3/5" aria-hidden>
        <span className="absolute top-[12%] left-[8%] text-blue-400/12 animate-float">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 md:w-14 md:h-14"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
        </span>
        <span className="absolute top-[28%] left-[18%] text-cyan-500/12 animate-float delay-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
        </span>
        <span className="absolute top-[55%] left-[6%] text-blue-500/10 animate-float delay-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>
        </span>
        <span className="absolute top-[18%] left-[32%] text-slate-400/12 animate-float delay-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 md:w-11 md:h-11"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.204-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><circle cx="12" cy="12" r="2.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span className="absolute bottom-[22%] left-[22%] text-indigo-400/10 animate-float delay-800">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11 md:w-12 md:h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
        </span>
        <span className="absolute top-[42%] left-[28%] text-blue-400/10 animate-float delay-1000">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m10.5-9l-9 13.5" /></svg>
        </span>
        <span className="absolute bottom-[35%] left-[12%] text-slate-500/10 animate-float delay-1200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 md:w-8 md:h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
        </span>
      </div>
      {/* Main Content - single column, wider left box */}
      <div className="relative z-10 max-w-[55rem] mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8 pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12 w-full h-full flex flex-col justify-center min-w-0 box-border">
        <div className="flex justify-start items-center min-h-0 flex-1">
          <div className="text-center lg:text-left w-full max-w-4xl">
            <div className="relative rounded-2xl p-6 lg:p-10 lg:pl-8 border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-r" />
              <div className="absolute top-0 left-0 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-b" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-left">
                <span className="block mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Custom Software & Websites
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                  Crafted by{' '}
                  <span className="font-bold text-gray-900">BITSPA</span><span className="font-bold text-orange-500">RX</span>
                </span>
              </h1>

              <div className="space-y-4 max-w-3xl mt-3 text-left">
                <p className="text-xl text-gray-600 leading-relaxed font-bold">
                  At <span className="font-semibold text-gray-900">Bitsparx</span>, we specialize in building customized software and websites that bring your company&apos;s vision to life. By combining cutting-edge technologies like Generative AI, Python, Web Development, and Automation, we create intelligent, scalable, and user-focused solutions.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-bold">
                  Whether it&apos;s streamlining operations, enhancing customer experiences, or unlocking new opportunities, our goal is to craft digital products that drive innovation and empower businesses to grow.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8 lg:mt-10">
                <Link 
                  href="/contactus" 
                  className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center group"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/service" 
                  className="text-blue-600 hover:text-blue-700 font-bold text-lg inline-flex items-center py-4"
                >
                  Explore Services
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
