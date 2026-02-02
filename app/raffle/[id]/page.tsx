import { getRaffleById } from '@/lib/api';
import PurchaseTokens from '@/components/PurchaseTokens';
import Link from 'next/link';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { ArrowLeft, ShieldCheck, Clock, Trophy, ArrowUpRight, Medal } from 'lucide-react';
import RaffleTimer from '@/components/RaffleTimer';

export default async function RaffleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js 15, params might be a promise, but in 14 it's an object. 
    // To be safe, we access it directly as it's likely 14 based on create-next-app output.
    // However, if the user is on 15 (can happen with @latest), we might need await params.
    // Let's assume standard access for now, but add error logging if ID is missing.

    const { id } = await params;
    const raffle = await getRaffleById(id);

    if (!raffle) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">404</h1>
                <h2 className="text-2xl font-bold mb-8">Raffle Not Found</h2>
                <p className="text-gray-400 mb-8">The raffle you are looking for might have ended or does not exist.</p>
                <Link href="/" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-all backdrop-blur-md border border-white/10">
                    Back to Home
                </Link>
            </div>
        );
    }

    const percentage = Math.min(raffle.fundingPercentage, 100);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Raffles
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Image (7 cols) */}
                    <div className="lg:col-span-7">

                        <div className="flex gap-4 items-stretch">
                            {/* Left Banner */}
                            {raffle.bannerLeftUrl && (
                                <div className="w-24 hidden md:block rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                    <img src={raffle.bannerLeftUrl} alt="Offer" className="w-full h-full object-cover" />
                                </div>
                            )}

                            {/* Main Image */}
                            <div className="relative flex-1 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                {raffle.imageUrl ? (
                                    <img
                                        src={raffle.imageUrl}
                                        alt={raffle.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-600">No Image</div>
                                )}

                                {/* Status Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/10 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                                        {raffle.status}
                                    </span>
                                </div>

                                {/* External Link Overlay (Desktop) */}
                                {raffle.externalLinkUrl && (
                                    <div className="absolute bottom-6 right-6 z-20 hidden md:block">
                                        <a
                                            href={raffle.externalLinkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg flex items-center gap-2"
                                        >
                                            {raffle.externalLinkText || "Check Offer"} <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Right Banner */}
                            {raffle.bannerRightUrl && (
                                <div className="w-24 hidden md:block rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                    <img src={raffle.bannerRightUrl} alt="Offer" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>

                        {/* Mobile External Link (Visible only on mobile) */}
                        {raffle.externalLinkUrl && (
                            <div className="mt-4 md:hidden">
                                <a
                                    href={raffle.externalLinkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg"
                                >
                                    {raffle.externalLinkText || "Check Offer"}
                                </a>
                            </div>
                        )}

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                <ShieldCheck className="w-8 h-8 text-cyan-400 mb-2" />
                                <span className="text-sm font-bold">Provably Fair</span>
                                <span className="text-xs text-gray-500">Blockchain Verified</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
                                <span className="text-sm font-bold">Guaranteed Winner</span>
                                <span className="text-xs text-gray-500">if a goal is hit</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                <Medal className="w-8 h-8 text-pink-400 mb-2" />
                                <span className="text-sm font-bold">Brand Quality</span>
                                <span className="text-xs text-gray-500">3 year Guarantee</span>
                            </div>
                        </div>

                        {/* Social Impact & Rewards Section */}
                        {/* Social Impact & Rewards Section */}
                        <div className="mt-8 border-t border-white/10 pt-8">
                            <div className="flex flex-wrap items-center gap-8 text-slate-500 text-sm font-medium">
                                {/* Charity Impact (Always Visible) */}
                                <div className="max-w-[150px]">
                                    <span className="block text-white font-bold mb-1">Winkko for Charity</span>
                                    <span className="text-xs leading-tight block">A portion of every token sold goes to charity</span>
                                </div>

                                {/* Optional Brand Discount */}
                                {raffle.consolationPrizeType === 'Discount' && (
                                    <>
                                        <div className="hidden sm:block w-px h-10 bg-white/10" />
                                        <div className="max-w-[200px]">
                                            <span className="block text-accent font-bold mb-1">
                                                {raffle.consolationPrizeValue} Discount
                                            </span>
                                            <span className="text-xs leading-tight block">
                                                Get a discount on {raffle.title.split(' ').slice(0, 2).join(' ')} with your ticket
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Info & Action (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{raffle.title}</h1>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">{raffle.description}</p>

                        {/* Progress Card */}
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 mb-8 shadow-xl">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Total Raised</p>
                                    <p className="text-3xl font-bold text-white">€{raffle.collectedAmount.toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400 text-sm mb-1">Target</p>
                                    <p className="text-xl font-bold text-gray-300">€{raffle.targetAmount.toLocaleString()}</p>
                                </div>
                            </div>

                            <ProgressBar value={percentage} className="h-6 mb-4" />

                            <div className="flex justify-between items-end text-sm font-medium">
                                <span className="text-cyan-400 mb-1">{percentage.toFixed(1)}% Funded</span>
                                <RaffleTimer targetDate={raffle.endTime} />
                            </div>
                        </div>

                        {/* Purchase Action */}
                        <PurchaseTokens raffleId={raffle.id} ticketPrice={raffle.ticketPrice} />
                    </div>
                </div>
            </div>
        </div>
    );
}
