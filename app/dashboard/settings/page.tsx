'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Bell, Key, Save, Upload, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SettingsPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'api'>('profile');
    const [showPassword, setShowPassword] = useState(false);

    const tabs = [
        { id: 'profile', label: t.dashboard.settings.tabs.profile, icon: User },
        { id: 'security', label: t.dashboard.settings.tabs.security, icon: Lock },
        { id: 'notifications', label: t.dashboard.settings.tabs.notifications, icon: Bell },
        { id: 'api', label: t.dashboard.settings.tabs.api, icon: Key },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">{t.dashboard.settings.title}</h1>
                <p className="text-slate-400">{t.dashboard.settings.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Settings Navigation */}
                <div className="glass-panel p-4 rounded-2xl h-fit">
                    <nav className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${activeTab === tab.id
                                        ? 'bg-primary/20 text-primary font-bold border border-primary/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="md:col-span-3">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass-panel p-8 rounded-3xl"
                    >
                        {activeTab === 'profile' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border-2 border-dashed border-white/20 hover:border-primary/50 cursor-pointer transition-colors group">
                                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">{t.dashboard.settings.profile.logo}</h3>
                                        <p className="text-slate-400 text-sm">Recommended: 400x400px</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                            {t.dashboard.settings.profile.brandName}
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Tesla Motors"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                            {t.dashboard.settings.profile.website}
                                        </label>
                                        <input
                                            type="url"
                                            defaultValue="https://tesla.com"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                            {t.dashboard.settings.profile.bio}
                                        </label>
                                        <textarea
                                            rows={4}
                                            defaultValue="Accelerating the world's transition to sustainable energy."
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex justify-end">
                                    <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors flex items-center gap-2">
                                        <Save className="w-4 h-4" />
                                        {t.dashboard.settings.profile.save}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                        {t.dashboard.settings.security.currentPassword}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                            {t.dashboard.settings.security.newPassword}
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                            {t.dashboard.settings.security.confirmPassword}
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-end">
                                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors">
                                        {t.dashboard.settings.security.update}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div>
                                        <h4 className="text-white font-bold">Email Notifications</h4>
                                        <p className="text-slate-400 text-sm">Receive updates about your drops and sales.</p>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div>
                                        <h4 className="text-white font-bold">Push Notifications</h4>
                                        <p className="text-slate-400 text-sm">Get real-time alerts on your browser.</p>
                                    </div>
                                    <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'api' && (
                            <div className="space-y-6">
                                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-sm">
                                    Use these keys to integrate Tokko with your own inventory system. Keep them secret!
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                        Public Key
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            readOnly
                                            value="pk_live_51M..."
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-400 font-mono text-sm"
                                        />
                                        <button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                        Secret Key
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="password"
                                            readOnly
                                            value="sk_live_..."
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-400 font-mono text-sm"
                                        />
                                        <button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors">
                                            Reveal
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
