'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, Tag, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SellPage() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [targetPrice, setTargetPrice] = useState('');

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);



    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File | null) => void, previewSetter: (s: string | null) => void) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setter(file);
            previewSetter(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {

            // Upload Main Image
            let finalImageUrl = "";
            if (selectedFile) {
                finalImageUrl = await uploadImage(selectedFile);
            }



            // Create Raffle logic would go here using finalImageUrl, bannerLeftUrl, etc.
            console.log("Raffle created:", { finalImageUrl });

            // Simulate API processing delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSuccess(true);
        } catch (error) {
            console.error("Error creating listing:", error);
            // Handle error state
        } finally {
            setIsSubmitting(false);
        }
    };

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const uploadRes = await fetch('http://localhost:5081/api/upload', {
            method: 'POST',
            body: formData,
        });
        if (!uploadRes.ok) throw new Error('Upload failed');
        const data = await uploadRes.json();
        return data.url;
    };

    const estimatedTicketPrice = targetPrice ? (parseInt(targetPrice) / 200).toFixed(2) : '0.00';

    if (isSuccess) {
        return (
            <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#030014]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-12 rounded-3xl text-center max-w-lg mx-4"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Listing Submitted!</h2>
                    <p className="text-slate-400 mb-8">
                        Your item is now under review by our verification team. You will be notified once it goes live.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-colors"
                    >
                        Submit Another
                    </button>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-[#030014]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
                    >
                        {t.sell.title}
                    </motion.h1>
                    <p className="text-lg text-slate-400">
                        {t.sell.subtitle}
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="glass-panel p-8 md:p-12 rounded-3xl space-y-8"
                >
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.sell.form.title}
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t.sell.form.titlePlaceholder}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {t.sell.form.category}
                            </label>
                            <div className="relative">
                                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <select className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all">
                                    <option value="watches">{t.sell.categories.watches}</option>
                                    <option value="cars">{t.sell.categories.cars}</option>
                                    <option value="tech">{t.sell.categories.tech}</option>
                                    <option value="fashion">{t.sell.categories.fashion}</option>
                                    <option value="realEstate">{t.sell.categories.realEstate}</option>
                                </select>
                            </div>
                        </div>

                        {/* Target Price */}
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                                {t.sell.form.targetPrice}
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="number"
                                    value={targetPrice}
                                    onChange={(e) => setTargetPrice(e.target.value)}
                                    placeholder="5000"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    required
                                />
                            </div>
                            {targetPrice && (
                                <p className="text-xs text-primary mt-2 font-medium">
                                    {t.sell.form.estimatedTicket} €{estimatedTicketPrice}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.sell.form.description}
                        </label>
                        <div className="relative">
                            <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                            <textarea
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                            {t.sell.form.uploadImages}
                        </label>
                        <div
                            onClick={() => document.getElementById('file-upload')?.click()}
                            className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group relative overflow-hidden"
                        >
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileSelect(e, setSelectedFile, setPreviewUrl)}
                            />

                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className="mx-auto h-48 object-contain rounded-lg shadow-lg" />
                            ) : (
                                <>
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-slate-400 text-sm">
                                        Click to upload your photo
                                    </p>
                                </>
                            )}
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
                            t.sell.form.submit
                        )}
                    </button>
                </motion.form>
            </div>
        </main>
    );
}
