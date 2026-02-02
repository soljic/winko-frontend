'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wallet, Menu, User, Bell, LogOut, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { t } = useLanguage();
    const { user, logout } = useAuth();
    const pathname = usePathname();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    // Mock Push Notification Listener (Azure DevOps / Notification Hubs Placeholder)
    useEffect(() => {
        if (user) {
            console.log("Initializing Azure Notification Hub connection for user:", user.email);
            // In a real app, this would connect to SignalR or register a Service Worker
        }
    }, [user]);

    if (pathname?.startsWith('/dashboard')) {
        return null;
    }

    const notifications = [
        { id: 1, title: t.notifications.types.win, message: "You won the Tesla Model 3 Raffle!", type: "win", time: "2m ago" },
        { id: 2, title: t.notifications.types.draw, message: "Rolex Submariner draw is starting soon.", type: "info", time: "1h ago" }
    ];

    const handleLogout = () => {
        logout();
        setIsProfileOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">
                        W
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Winko</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.liveRaffles}</Link>
                    {user?.role === 'Brand' || user?.role === 'BrandPartner' ? (
                        <Link href="/dashboard" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Dashboard</Link>
                    ) : null}
                    <Link href="/how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.howItWorks}</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    {user ? (
                        <>
                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsNotifOpen(!isNotifOpen)}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors relative"
                                >
                                    <Bell className="w-5 h-5" />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                </button>

                                <AnimatePresence>
                                    {isNotifOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full right-0 mt-4 w-80 bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden z-50 p-2 shadow-2xl shadow-black/50"
                                        >
                                            <div className="px-4 py-2 border-b border-white/10 mb-2">
                                                <h3 className="text-white font-bold text-sm">{t.notifications.title}</h3>
                                            </div>
                                            <div className="space-y-1">
                                                {notifications.map(n => (
                                                    <div key={n.id} className="p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <span className={`text-xs font-bold ${n.type === 'win' ? 'text-emerald-400' : 'text-blue-400'}`}>{n.title}</span>
                                                            <span className="text-[10px] text-slate-500">{n.time}</span>
                                                        </div>
                                                        <p className="text-slate-300 text-xs leading-relaxed">{n.message}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/5"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                        {user.name.charAt(0)}
                                    </div>
                                    <span className="text-sm font-bold text-white hidden sm:block">{user.name.split(' ')[0]}</span>
                                </button>

                                <AnimatePresence>
                                    {isProfileOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full right-0 mt-4 w-48 bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden z-50 py-1 shadow-2xl shadow-black/50"
                                        >
                                            <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                                                <User className="w-4 h-4" /> {t.profile.title}
                                            </Link>
                                            {user.role === 'Admin' || user.role === 'Brand' || user.role === 'BrandPartner' ? (
                                                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                                                    <Settings className="w-4 h-4" /> Dashboard
                                                </Link>
                                            ) : null}
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors text-left"
                                            >
                                                <LogOut className="w-4 h-4" /> {t.dashboard.nav.logout}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    ) : (
                        <Link href="/login" className="hidden md:flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors border border-white/5">
                            <Wallet className="w-4 h-4" />
                            {t.nav.connectWallet}
                        </Link>
                    )}

                    <button className="md:hidden text-white p-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
