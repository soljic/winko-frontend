'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface RaffleCardProps {
    raffle: {
        id: string;
        title: string;
        imageUrl: string;
        ticketPrice: number;
        collectedAmount: number;
        targetAmount: number;
        fundingPercentage: number;
        endTime: string;
    };
}

export default function RaffleCard({ raffle }: RaffleCardProps) {
    const { t } = useLanguage();
    const percentage = Math.min(raffle.fundingPercentage, 100);
    const timeLeft = new Date(raffle.endTime).toLocaleDateString(); // Simplified for MVP

    return (
        <Link href={`/raffle/${raffle.id}`} className="group block">
            <div className="glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 relative h-full flex flex-col">

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    {raffle.imageUrl ? (
                        <img
                            src={raffle.imageUrl}
                            alt={raffle.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">No Image</div>
                    )}

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                        <div className="flex items-center justify-between mb-2">
                            <span className="bg-primary/20 backdrop-blur-md text-primary-foreground px-3 py-1 rounded-full text-xs font-bold border border-primary/20 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {timeLeft}
                            </span>
                            <span className="text-cyan-400 font-bold text-sm">
                                {percentage.toFixed(0)}% {t.card.funded}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight group-hover:text-primary transition-colors">
                            {raffle.title}
                        </h3>

                        <div className="flex items-end justify-between mt-4">
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{t.card.ticketPrice}</p>
                                <p className="text-xl font-bold text-white">€{raffle.ticketPrice}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar (Bottom Edge) */}
                <div className="h-1 bg-slate-800 w-full">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </Link>
    );
}
