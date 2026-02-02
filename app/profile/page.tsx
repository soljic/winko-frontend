'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Ticket, History, Trophy, Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProfilePage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'active' | 'history' | 'winnings'>('active');

    // Mock Data
    const user = {
        name: "Filip Soljic",
        balance: 1000000.00,
        activeRaffles: [
            { id: 1, title: "Tesla Model 3", tickets: 5, status: "Live", drawDate: "2025-12-10" }
        ],
        history: [
            { id: 2, title: "Rolex Submariner", tickets: 2, status: "Lost", drawDate: "2025-11-28" }
        ]
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-[#030014]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header & Balance */}
                <div className="glass-panel p-8 rounded-3xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-primary/25">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                            <p className="text-slate-400 text-sm">Member since Dec 2025</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[200px] text-center">
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">{t.profile.balance}</p>
                        <p className="text-3xl font-bold text-white">€{user.balance.toLocaleString()}</p>
                        <button className="mt-3 text-xs font-bold text-primary hover:text-white transition-colors">
                            + Add Funds
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'active' ? 'bg-primary text-white' : 'bg-white/5 text-slate-400 hover:text-white'
                            }`}
                    >
                        <Ticket className="w-4 h-4" /> {t.profile.tabs.active}
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'history' ? 'bg-primary text-white' : 'bg-white/5 text-slate-400 hover:text-white'
                            }`}
                    >
                        <History className="w-4 h-4" /> {t.profile.tabs.history}
                    </button>
                    <button
                        onClick={() => setActiveTab('winnings')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'winnings' ? 'bg-primary text-white' : 'bg-white/5 text-slate-400 hover:text-white'
                            }`}
                    >
                        <Trophy className="w-4 h-4" /> {t.profile.tabs.winnings}
                    </button>
                </div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 rounded-3xl min-h-[300px]"
                >
                    {activeTab === 'active' && (
                        <div className="space-y-4">
                            {user.activeRaffles.length > 0 ? (
                                user.activeRaffles.map((raffle) => (
                                    <div key={raffle.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                                                <Ticket className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold">{raffle.title}</h3>
                                                <p className="text-slate-400 text-sm">{raffle.tickets} Tickets • Draws on {raffle.drawDate}</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
                                            {raffle.status}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-slate-500">
                                    {t.profile.empty.active}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="space-y-4">
                            {user.history.map((raffle) => (
                                <div key={raffle.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 opacity-75">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                                            <History className="w-6 h-6 text-slate-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{raffle.title}</h3>
                                            <p className="text-slate-400 text-sm">{raffle.tickets} Tickets • Ended {raffle.drawDate}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-bold rounded-full">
                                        {raffle.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'winnings' && (
                        <div className="text-center py-12 text-slate-500">
                            <Trophy className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            {t.profile.empty.winnings}
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
