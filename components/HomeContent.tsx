'use client';

import RaffleCard from '@/components/RaffleCard';
import Hero from '@/components/Hero';
import { useLanguage } from '@/context/LanguageContext';
import { Raffle } from '@/lib/api';

export default function HomeContent({ raffles }: { raffles: Raffle[] }) {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen pb-20">
            <Hero />

            <div id="raffles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2">{t.home.liveRaffles}</h2>
                        <p className="text-slate-400">{t.home.dontMiss}</p>
                    </div>
                    <button className="text-primary font-bold hover:text-accent transition-colors">
                        {t.home.viewAll} &rarr;
                    </button>
                </div>

                {raffles.length === 0 ? (
                    <div className="text-center py-20 glass-panel rounded-3xl">
                        <h2 className="text-2xl font-bold text-white mb-2">{t.home.noRaffles}</h2>
                        <p className="text-slate-400">{t.home.checkBack}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {raffles.map((raffle) => (
                            <RaffleCard key={raffle.id} raffle={raffle} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
