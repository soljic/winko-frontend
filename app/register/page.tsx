'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, User, Loader2, ArrowRight, Briefcase, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const { t } = useLanguage();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [role, setRole] = useState<'Customer' | 'Brand'>('Customer');

    const [formData, setFormData] = useState({ username: '', email: '', password: '', website: '' });
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5081/api';
            const response = await fetch(`${apiUrl}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, role }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await response.json();

            // Auto login after register
            login({
                name: data.name || formData.username,
                email: formData.email,
                role: data.role,
                token: data.token
            });

            // Redirect based on role
            if (data.role === 'Admin' || data.role === 'Brand' || data.role === 'BrandPartner') {
                router.push('/dashboard');
            } else {
                router.push('/profile');
            }

        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-[#030014] flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 rounded-3xl"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">{t.auth.register.title}</h1>
                        <p className="text-slate-400 text-sm">{t.auth.register.subtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Role Selection */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button
                                type="button"
                                onClick={() => setRole('Customer')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${role === 'Customer'
                                    ? 'bg-primary/20 border-primary text-white'
                                    : 'bg-black/20 border-white/10 text-slate-400 hover:bg-white/5'
                                    }`}
                            >
                                <ShoppingBag className="w-6 h-6" />
                                <span className="text-xs font-bold">{t.auth.register.roles.customer}</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('Brand')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${role === 'Brand'
                                    ? 'bg-primary/20 border-primary text-white'
                                    : 'bg-black/20 border-white/10 text-slate-400 hover:bg-white/5'
                                    }`}
                            >
                                <Briefcase className="w-6 h-6" />
                                <span className="text-xs font-bold">{t.auth.register.roles.brand}</span>
                            </button>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {role === 'Brand' ? t.auth.register.brandName : t.auth.register.username}
                            </label>
                            <div className="relative">
                                {role === 'Brand' ? (
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                ) : (
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                )}
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {role === 'Brand' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                    {t.auth.register.website}
                                </label>
                                <div className="relative">
                                    <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input
                                        type="url"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                        placeholder="https://..."
                                    />
                                </div>
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {t.auth.register.email}
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {t.auth.register.password}
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    {t.auth.register.submit} <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            {t.auth.register.hasAccount}{' '}
                            <Link href="/login" className="text-primary font-bold hover:text-white transition-colors">
                                {t.auth.register.login}
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
