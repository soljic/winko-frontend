'use client';

import { motion } from 'framer-motion';
import { DollarSign, Package, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DashboardPage() {
    const { t } = useLanguage();

    const stats = [
        { label: t.dashboard.overview.totalRevenue, value: "€124,500", change: "+12%", icon: DollarSign, color: "text-emerald-400" },
        { label: t.dashboard.overview.activeDrops, value: "3", change: "+1", icon: Package, color: "text-blue-400" },
        { label: t.dashboard.overview.totalTickets, value: "24,900", change: "+18%", icon: Users, color: "text-purple-400" },
        { label: t.dashboard.overview.engagement, value: "8.4%", change: "+2.1%", icon: TrendingUp, color: "text-pink-400" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">{t.dashboard.overview.title}</h1>
                <div className="text-sm text-slate-400">Last updated: Just now</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full flex items-center gap-1">
                                {stat.change} <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity / Chart Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-panel p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Revenue Overview</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full bg-primary/20 rounded-t-lg relative group hover:bg-primary/40 transition-colors" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    €{h * 1000}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-500 uppercase font-bold">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">{t.dashboard.overview.recentActivity}</h3>
                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <div>
                                    <p className="text-white text-sm font-medium">Ticket #8293 Sold</p>
                                    <p className="text-slate-500 text-xs">2 minutes ago • Tesla Drop</p>
                                </div>
                                <div className="ml-auto text-emerald-400 text-sm font-bold">+€5.00</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
