'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    ] as const;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/5"
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase text-xs font-bold">{language}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-32 glass-panel rounded-xl overflow-hidden py-1 z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors ${language === lang.code ? 'text-primary font-bold' : 'text-slate-300'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                {lang.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
