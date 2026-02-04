'use client';

import Link from 'next/link';
import Image from 'next/image';

const highlights = [
  { label: 'Custom solutions', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: '24/7 support', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Expert team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
];

const reasons = [
  'AI-powered & automation',
  'Scalable web & cloud',
  'Dedicated project support',
];

export default function SectionCTA() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-7rem)] max-h-[calc(100vh-7rem)] w-full flex items-center">
      {/* Half-half background: one image, left = dark overlay, right = lighter so image shows */}
      <div className="absolute inset-0">
        <Image
          src="/img01.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-blue-950/95 backdrop-blur-[2px]" aria-hidden />
          <div className="w-1/2 bg-gradient-to-r from-blue-950/70 via-slate-900/50 to-transparent" aria-hidden />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-20 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left half - content on dark side */}
          <div className="text-center lg:text-left lg:pr-6 space-y-8">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-bold text-sm tracking-widest uppercase border border-white/30 shadow-lg">
                Let&apos;s build something great
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Your Business?</span>
            </h2>
            <p className="text-lg md:text-xl text-white font-semibold max-w-xl mx-auto lg:mx-0 leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Let&apos;s build something amazing together with cutting-edge technology and innovative solutions.
            </p>
            <p className="text-base md:text-lg text-slate-100 max-w-lg mx-auto lg:mx-0 leading-[1.75] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              From idea to launch — we&apos;re with you every step of the way. Join 50+ satisfied clients who trust Bitsparx.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Link
                href="/contactus"
                className="w-full sm:w-auto bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-cyan-50 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.03] inline-flex items-center justify-center group shadow-xl"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/aboutus"
                className="w-full sm:w-auto text-white font-bold py-4 px-8 rounded-xl border-2 border-white/60 hover:border-white hover:bg-white/15 transition-all duration-300 inline-flex items-center justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white text-sm font-bold pt-2">
              {reasons.map((r) => (
                <span key={r} className="flex items-center gap-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Right half - feature cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 px-6 py-5 rounded-2xl bg-white/10 border border-white/25 text-white font-bold text-base backdrop-blur-md drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:bg-white/15 hover:border-white/35 transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/30 text-cyan-200 flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </span>
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-slate-200 font-semibold mt-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
          Trusted by startups and enterprises worldwide. No long-term contracts — just results.
        </p>
      </div>
    </section>
  );
}
