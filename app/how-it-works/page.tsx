'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, Ticket, Trophy, ShieldCheck, ArrowRight, Store, Briefcase, Coins, RefreshCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState<'buyer' | 'seller' | 'brand'>('buyer');
    const { t } = useLanguage();

    const tabs = [
        { id: 'buyer', label: t.howItWorks.tabs.buyer, icon: Ticket },
        // { id: 'seller', label: t.howItWorks.tabs.seller, icon: Store }, // Hidden for now
        { id: 'brand', label: t.howItWorks.tabs.brand, icon: Briefcase },
    ];

    const content = {
        buyer: {
            title: t.howItWorks.buyer.title,
            description: t.howItWorks.buyer.desc,
            steps: [
                { ...t.howItWorks.buyer.steps[0], icon: Search, color: "from-violet-500 to-fuchsia-500" },
                { ...t.howItWorks.buyer.steps[1], icon: Ticket, color: "from-cyan-500 to-blue-500" },
                { ...t.howItWorks.buyer.steps[2], icon: Coins, color: "from-emerald-500 to-teal-500" },
                { ...t.howItWorks.buyer.steps[3], icon: Trophy, color: "from-amber-500 to-orange-500" }
            ]
        },
        seller: {
            title: t.howItWorks.seller.title,
            description: t.howItWorks.seller.desc,
            steps: [
                { ...t.howItWorks.seller.steps[0], icon: Store, color: "from-pink-500 to-rose-500" },
                { ...t.howItWorks.seller.steps[1], icon: Coins, color: "from-violet-500 to-purple-500" },
                { ...t.howItWorks.seller.steps[2], icon: ShieldCheck, color: "from-blue-500 to-indigo-500" },
                { ...t.howItWorks.seller.steps[3], icon: RefreshCcw, color: "from-green-500 to-emerald-500" }
            ]
        },
        brand: {
            title: t.howItWorks.brand.title,
            description: t.howItWorks.brand.desc,
            steps: [
                { ...t.howItWorks.brand.steps[0], icon: Briefcase, color: "from-orange-500 to-red-500" },
                { ...t.howItWorks.brand.steps[1], icon: Search, color: "from-yellow-500 to-amber-500" },
                { ...t.howItWorks.brand.steps[2], icon: Trophy, color: "from-cyan-500 to-sky-500" },
                { ...t.howItWorks.brand.steps[3], icon: Coins, color: "from-fuchsia-500 to-pink-500" }
            ]
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-20 overflow-hidden bg-[#030014]">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                >
                    {t.howItWorks.title.split('Winko')[0]} <span className="text-gradient">Winko</span> {t.howItWorks.title.split('Winko')[1]}
                </motion.h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    {t.howItWorks.subtitle}
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-20 px-4">
                <div className="glass-panel p-2 rounded-full flex flex-wrap justify-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <tab.icon className="w-5 h-5" />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{content[activeTab].title}</h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{content[activeTab].description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content[activeTab].steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel p-8 rounded-3xl relative group hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                        <step.icon className="w-8 h-8 text-white drop-shadow-md" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed text-sm">{step.desc}</p>

                                    {/* Connector Line (Desktop) */}
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/10 to-transparent z-0" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 mt-32 text-center">
                <div className="glass-panel p-12 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />

                    <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
                        {t.howItWorks.cta.title}
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                            {t.howItWorks.cta.browse} <ArrowRight className="w-5 h-5" />
                        </Link>
                        {/* <Link href="/sell" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
                            {t.howItWorks.cta.sell}
                        </Link> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
