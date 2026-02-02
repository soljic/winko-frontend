'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Calendar, DollarSign, Tag, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CreateDropPage() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="h-[60vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-12 rounded-3xl text-center max-w-lg mx-4"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Campaign Launched!</h2>
                    <p className="text-slate-400 mb-8">
                        Your drop "Tesla Model 3" is now scheduled and will go live on the selected date.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-colors"
                    >
                        Create Another
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">{t.dashboard.createDrop.title}</h1>
                <p className="text-slate-400">{t.dashboard.createDrop.subtitle}</p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-panel p-8 rounded-3xl space-y-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Name */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.dashboard.createDrop.form.productName}
                        </label>
                        <input
                            type="text"
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                            required
                        />
                    </div>

                    {/* Retail Value */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.dashboard.createDrop.form.retailValue}
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="number"
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Ticket Price */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.dashboard.createDrop.form.ticketPrice}
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="number"
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Dates */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.dashboard.createDrop.form.startDate}
                        </label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="date"
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.dashboard.createDrop.form.endDate}
                        </label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="date"
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                        {t.dashboard.createDrop.form.description}
                    </label>
                    <textarea
                        rows={4}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                        required
                    />
                </div>

                {/* Optional Rewards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            Reward Type (Optional)
                        </label>
                        <select
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none"
                        >
                            <option value="">None</option>
                            <option value="Discount">Brand Discount</option>
                            <option value="Cash">Cash Back</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            Reward Value (e.g. 15%)
                        </label>
                        <div className="relative">
                            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="10-20% Off"
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Marketing Enhancements (Optional) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                        Marketing Enhancements <span className="text-slate-500 text-sm font-normal ml-2">(Optional)</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* External Action Link */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                External Action Link
                            </label>
                            <input
                                type="url"
                                placeholder="https://brand.com/sale"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Action Button Text */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                Action Button Text
                            </label>
                            <input
                                type="text"
                                placeholder="Check other deals"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Left Side Banner */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                Left Side Banner URL
                            </label>
                            <div className="relative">
                                <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="url"
                                    placeholder="https://example.com/banner-left.jpg"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Right Side Banner */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                Right Side Banner URL
                            </label>
                            <div className="relative">
                                <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="url"
                                    placeholder="https://example.com/banner-right.jpg"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assets Upload */}
                <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                        {t.dashboard.createDrop.form.uploadAssets}
                    </label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <Upload className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-slate-400 text-sm">
                            Upload high-res product shots and campaign banners.
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        t.dashboard.createDrop.form.submit
                    )}
                </button>
            </motion.form>
        </div>
    );
}
