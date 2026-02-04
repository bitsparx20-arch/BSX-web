'use client'
import { useState } from "react"
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useWindowSize } from './useWindowSize';

// FloatingPhone Component
const FloatingPhone = () => {
    return (
        <div
            style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-30deg) rotateX(15deg)",
            }}
            className="rounded-[24px] bg-orange-500/20"
        >
            <motion.div
                initial={{
                    transform: "translateZ(8px) translateY(-2px)",
                }}
                animate={{
                    transform: "translateZ(32px) translateY(-8px)",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                }}
                className="relative h-[560px] w-[320px] rounded-[24px] border-2 border-b-4 border-r-4 border-white/30 border-l-gray-300/20 border-t-gray-300/20 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-1 pl-[3px] pt-[3px] shadow-2xl"
            >
                <HeaderBar />
                <Screen />
            </motion.div>
        </div>
    );
};

const HeaderBar = () => {
    return (
        <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-black"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
                <motion.svg 
                    className="w-4 h-4 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </motion.svg>
                <motion.svg 
                    className="w-4 h-4 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
            </div>
        </>
    );
};

const Screen = () => {
    return (
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            {/* Background decorative elements */}
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-orange-500/10 blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-500"></div>
            
            {/* Logo with glow effect */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: 1
                }}
                transition={{ 
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.8, delay: 0.3 }
                }}
                className="relative z-10"
            >
                <div className="relative">
                    <Image
                        src="/logo_black1.png"
                        alt="BitsparX Logo"
                        width={180}
                        height={60}
                        className="object-contain relative z-10"
                    />
                    {/* Glow effect behind logo */}
                    <motion.div
                        className="absolute inset-0 bg-orange-500/20 blur-xl -z-10"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
            
            {/* Floating elements around logo */}
            <motion.div
                className="absolute top-16 left-8 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400/30"
                animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute top-20 right-12 w-10 h-10 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400/30"
                animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute bottom-20 left-12 w-8 h-8 bg-cyan-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/30"
                animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
                <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute bottom-16 right-8 w-9 h-9 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-400/30"
                animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            >
                <svg className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
            </motion.div>
            
            {/* Control buttons at bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-3">
                <motion.button 
                    className="flex-1 rounded-lg border border-gray-700/50 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm py-3 text-sm font-semibold text-white hover:from-gray-700/90 hover:to-gray-600/90 transition-all shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                        boxShadow: [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Get Started
                </motion.button>
                <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </motion.div>
            </div>
            
            {/* Status indicators */}
            <motion.div
                className="absolute top-8 left-4 flex items-center gap-2 z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">Online</span>
            </motion.div>
            
            {/* Notification badge */}
            <motion.div
                className="absolute top-8 right-4 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center z-10"
                animate={{ 
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <span className="text-[10px] text-white font-bold">3</span>
            </motion.div>
            
            {/* Additional animated particles and icons */}
            <motion.div
                className="absolute top-12 left-4 w-6 h-6 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400/30"
                animate={{ 
                    y: [0, -6, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute top-24 right-6 w-7 h-7 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400/30"
                animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, -8, 0]
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
                <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute bottom-24 left-6 w-6 h-6 bg-cyan-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/30"
                animate={{ 
                    y: [0, 6, 0],
                    rotate: [0, 8, 0]
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
                <svg className="w-3 h-3 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
            </motion.div>
            
            <motion.div
                className="absolute bottom-28 right-4 w-7 h-7 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-400/30"
                animate={{ 
                    y: [0, 5, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
                <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
            </motion.div>
            
            {/* Animated particles */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full"
                animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
                animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                    x: [0, 3, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full"
                animate={{ 
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, 5, 0]
                }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
                className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ 
                    scale: [1, 1.7, 1],
                    opacity: [0.4, 1, 0.4],
                    x: [0, -3, 0]
                }}
                transition={{ duration: 2.3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-300 rounded-full"
                animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.1, repeat: Infinity, delay: 0.6 }}
            />
        </div>
    );
};

// Vertical Accordion Component
const VerticalAccordion = () => {
    const [open, setOpen] = useState(accordionItems[0].id);

    return (
        <div className="flex flex-col lg:flex-row h-full w-full min-h-0 shadow-2xl overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none bg-gray-900/95 backdrop-blur-sm border border-gray-800/80 lg:border-r-0">
            {accordionItems.map((item) => {
                return (
                    <AccordionPanel
                        key={item.id}
                        open={open}
                        setOpen={setOpen}
                        id={item.id}
                        Icon={item.Icon}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
};

const AccordionPanel = ({ open, setOpen, id, Icon, title, imgSrc, description }: {
    open: number;
    setOpen: (id: number) => void;
    id: number;
    Icon: React.ComponentType<{ className?: string }>;
    title: string;
    imgSrc: string;
    description: string;
}) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-gray-800 hover:bg-gray-700 transition-colors p-3 border-r-[1px] border-b-[1px] border-gray-700 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden lg:block text-lg font-medium text-white rotate-180"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-lg font-medium text-white">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-gradient-to-br from-orange-500 to-orange-600 text-white grid place-items-center rounded-lg">
                    <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
                </div>
                <span className="w-4 h-4 bg-gray-800 group-hover:bg-gray-700 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-gray-700 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-3 bg-black/60 backdrop-blur-sm text-white"
                        >
                            <p className="text-sm lg:text-base">{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "250px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

// Icon Components
const DollarIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BellIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const BarChartIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const accordionItems = [
    {
        id: 1,
        title: "Automate",
        Icon: PlayIcon,
        imgSrc: "/img01.jpg",
        description: "Streamline your operations with intelligent automation solutions. Reduce manual work and boost productivity with our custom automation services.",
    },
    {
        id: 2,
        title: "Develop",
        Icon: BarChartIcon,
        imgSrc: "/img02.jpg",
        description: "Build powerful web applications and custom software tailored to your business needs. From concept to deployment, we bring your ideas to life.",
    },
    {
        id: 3,
        title: "Scale",
        Icon: BellIcon,
        imgSrc: "/img03.jpg",
        description: "Grow your business with scalable solutions designed for the future. Our technology adapts as your needs evolve, ensuring long-term success.",
    },
    {
        id: 4,
        title: "Innovate",
        Icon: DollarIcon,
        imgSrc: "/img04.jpg",
        description: "Leverage cutting-edge AI and modern technologies to stay ahead of the competition. Transform your business with innovative digital solutions.",
    },
];

export default function Hero3() {
    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <section className="relative overflow-hidden h-full w-full flex items-center">
            {/* Split Background - Left: dark with hint of orange, Right: orange gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 right-1/2 bg-gradient-to-r from-orange-950/40 via-orange-950/20 to-black"></div>
                <div className="absolute inset-y-0 right-0 left-1/2 bg-gradient-to-br from-orange-300/40 via-orange-500/35 to-orange-700/40 backdrop-blur-[1px]"></div>
            </div>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Orange Section Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top right corner elements */}
                <div className="absolute top-16 right-16 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg transform rotate-12 animate-float">
                    <svg className="w-10 h-10 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                
                {/* Middle right elements */}
                <div className="absolute top-1/3 right-24 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg transform -rotate-12 animate-float delay-400">
                    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
                
                {/* Bottom right corner elements */}
                <div className="absolute bottom-24 right-20 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-lg transform rotate-6 animate-float delay-800">
                    <svg className="w-12 h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                </div>
                
                {/* Top center-right elements */}
                <div className="absolute top-32 right-1/3 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg transform rotate-45 animate-float delay-600">
                    <svg className="w-7 h-7 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                </div>
                
                {/* Middle center-right elements */}
                <div className="absolute top-1/2 right-32 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg transform -rotate-12 animate-float delay-200">
                    <svg className="w-9 h-9 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                </div>
                
                {/* Bottom center-right elements */}
                <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg transform rotate-12 animate-float delay-1000">
                    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                </div>
                
                {/* Geometric shapes for visual interest */}
                <div className="absolute top-24 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white/35 rounded-full animate-pulse delay-700"></div>
                
                {/* Large decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>




            <div className="relative z-10 h-full w-full flex items-stretch py-8 lg:py-0">
                {/* Left Column - Content (stays in flow with padding) */}
                <div className="w-full lg:w-1/2 flex items-center pl-8 sm:pl-12 lg:pl-16 xl:pl-24 pr-4 sm:pr-6 lg:pr-4 order-2 lg:order-1">
                    <div className="text-left max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
                            <motion.span
                                className="block mb-2"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.06 } },
                                    hidden: {},
                                }}
                            >
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 8 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-white"
                                    style={{ textShadow: '0 0 24px rgba(255,255,255,0.35), 0 0 48px rgba(255,255,255,0.15)' }}
                                >
                                    BITSPA
                                </motion.span>
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.92 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="text-orange-500"
                                    style={{ textShadow: '0 0 24px rgba(249,115,22,0.5), 0 0 48px rgba(249,115,22,0.25)' }}
                                >
                                    RX
                                </motion.span>
                            </motion.span>
                            <span className="block text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Custom Tech, Crafted for You</span>
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8 sm:mb-10">
                            We transform ideas into powerful digital solutions. From custom websites to scalable software, we design and build technology tailored to your business needs. Our goal is simple — to spark innovation and help brands grow in the digital age.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center">
                            <button 
                                onClick={() => setVideoPopUp(true)}
                                className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
                            >
                                Explore Products
                            </button>
                            <Link 
                                href="/contactus"
                                className="text-blue-400 hover:text-blue-300 font-bold text-base sm:text-lg transition-colors duration-200 inline-flex items-center justify-center py-4"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Vertical Accordion: full height, covers entire orange section */}
                <div className="order-first lg:order-2 w-full lg:w-1/2 h-[320px] sm:h-[380px] lg:h-full min-h-0 flex items-stretch overflow-hidden lg:rounded-l-2xl">
                    <VerticalAccordion />
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