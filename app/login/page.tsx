'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const { t } = useLanguage();
    const { login } = useAuth();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5081/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();

            // Login via context (this updates Navbar immediately)
            login({
                name: data.name || formData.email.split('@')[0], // Fallback if name not returned
                email: formData.email,
                role: data.role,
                token: data.token
            });

            // Redirect based on role
            if (data.role === 'Admin' || data.role === 'Brand') {
                router.push('/dashboard');
            } else {
                router.push('/profile');
            }

        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
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
                        <h1 className="text-3xl font-bold text-white mb-2">{t.auth.login.title}</h1>
                        <p className="text-slate-400 text-sm">{t.auth.login.subtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {t.auth.login.email}
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
                                {t.auth.login.password}
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
                                    {t.auth.login.submit} <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            {t.auth.login.noAccount}{' '}
                            <Link href="/register" className="text-primary font-bold hover:text-white transition-colors">
                                {t.auth.login.register}
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
