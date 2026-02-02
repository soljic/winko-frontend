'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

const carouselItems = [
    {
        id: 1,
        image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg",
        title: "Tesla Model 3 Performance",
        price: "€5.00"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop",
        title: "Rolex Submariner Date",
        price: "€50.00"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1287&auto=format&fit=crop",
        title: "Luxury Penthouse in Zagreb",
        price: "€200.00"
    }
];

export default function Hero() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles className="w-3 h-3" /> {t.hero.newDrop}
                        </div>

                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[0.9]">
                            {t.hero.title1} <br />
                            <span className="text-gradient">{t.hero.title2}</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="#raffles" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group">
                                {t.hero.startWinning} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/how-it-works" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/10 backdrop-blur-md">
                                {t.hero.howItWorks}
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
                            <div>
                                <span className="block text-sm font-medium text-slate-400 mb-1">Powered by</span>
                                <img
                                    src="/assets/hl-logo-new.png"
                                    alt="Hrvatska Lutrija"
                                    className="h-10 w-auto opacity-100 hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <span className="block text-2xl font-bold text-white">15k+</span>
                                {t.hero.activePlayers}
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Visual Carousel */}
                    <div className="relative hidden lg:flex justify-center items-center h-[450px]">
                        <div className="relative w-[600px] h-[450px] animate-float">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <div className="relative z-10 glass-panel p-3 rounded-3xl h-full w-full rotate-[-6deg] overflow-hidden">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                            <img
                                                src={carouselItems[currentIndex].image}
                                                alt={carouselItems[currentIndex].title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Gradient overlay for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            <div className="absolute bottom-6 left-6 right-6">
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <h3 className="text-white font-bold text-xl mb-1">{carouselItems[currentIndex].title}</h3>
                                                        <p className="text-accent font-semibold">{carouselItems[currentIndex].price} <span className="text-slate-400 font-normal text-sm">/ {t.hero.ticket}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                            {carouselItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-white/20 w-1.5 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
