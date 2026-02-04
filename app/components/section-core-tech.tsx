'use client';

import { motion } from 'framer-motion';

const techCards = [
  {
    title: 'Generative AI',
    desc: 'Intelligent automation and AI-powered solutions that learn and adapt to your workflows.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-500/10 to-pink-500/10',
    delay: 0,
  },
  {
    title: 'Python Development',
    desc: 'Robust backend solutions, APIs, and data processing pipelines built for scale.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-500/10 to-cyan-500/10',
    delay: 0.05,
  },
  {
    title: 'Web Development',
    desc: 'Modern, responsive websites and web applications with cutting-edge UX.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9',
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-cyan-500/10 to-blue-500/10',
    delay: 0.1,
  },
  {
    title: 'Automation',
    desc: 'Streamline operations with RPA, scripts, and intelligent process automation.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-cyan-500 to-blue-500',
    hoverGradient: 'from-orange-500/10 to-cyan-500/10',
    delay: 0.15,
  },
  {
    title: 'Data & Analytics',
    desc: 'Turn raw data into insights with dashboards, ML models, and real-time reporting.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-500/10 to-teal-500/10',
    delay: 0.2,
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure, CI/CD, and cloud-native deployment and monitoring.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    gradient: 'from-indigo-500 to-purple-500',
    hoverGradient: 'from-indigo-500/10 to-purple-500/10',
    delay: 0.25,
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function SectionCoreTech() {
  return (
    <section className="relative overflow-hidden h-full w-full flex flex-col">
      {/* Split background - orange left, black right (swapped) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-br from-orange-400/20 via-orange-500/25 to-orange-700/30" />
        <div className="w-1/2 bg-black" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content - no scroll, fits viewport */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 w-full flex flex-col flex-1 min-h-0">
          {/* Header - stronger typography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4 lg:mb-5 flex-shrink-0"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-[0_0_24px_rgba(251,146,60,0.3)]">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Core Technologies
              </span>
            </h2>
            <p className="mt-2 text-base lg:text-lg font-bold text-white max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              We leverage cutting-edge technologies to deliver exceptional results — from AI and automation to cloud and data.
            </p>
          </motion.div>

          {/* Tech cards grid - compact, no scroll */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-5 flex-1 min-h-0">
          {techCards.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: item.delay }}
              className="group relative rounded-2xl border border-black/40 bg-orange-950/30 backdrop-blur-md p-4 lg:p-5 text-left transition-all duration-300 hover:border-black/60 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`relative w-10 h-10 lg:w-11 lg:h-11 mb-3 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="relative text-lg lg:text-xl font-extrabold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{item.title}</h3>
              <p className="relative text-orange-100 text-base leading-snug font-semibold">{item.desc}</p>
            </motion.div>
          ))}
        </div>

          {/* Stats strip - bolder numbers and labels */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl border border-orange-300/50 bg-orange-50/95 backdrop-blur-md px-6 py-4 lg:px-10 lg:py-5 flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-100/50 via-transparent to-orange-100/50 pointer-events-none" />
            <div className="relative grid grid-cols-3 gap-6 lg:gap-10 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black drop-shadow-[0_2px_4px_rgba(251,146,60,0.2)]">
                    {stat.value}
                  </p>
                  <p className="text-sm font-extrabold text-orange-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-orange-400 font-bold text-sm mt-3 flex-shrink-0"
          >
            Trusted by startups and enterprises worldwide
          </motion.p>
        </div>
      </div>
    </section>
  );
}
