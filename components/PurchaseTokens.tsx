'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Ticket } from 'lucide-react';

interface PurchaseTokensProps {
    raffleId: string;
    ticketPrice: number;
}

export default function PurchaseTokens({ raffleId, ticketPrice }: PurchaseTokensProps) {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);

    const handlePurchase = async () => {
        setLoading(true);
        try {
            // Mock API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert(`Successfully purchased ${quantity} tokens for €${(quantity * ticketPrice).toFixed(2)}!`);
        } catch (error) {
            alert('Purchase failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold text-white">Buy Tickets</h3>
                    <p className="text-gray-400 text-sm">Increase your winning chances</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-xl">
                    <span className="text-2xl font-bold text-white">€{ticketPrice}</span>
                    <span className="text-gray-400 text-xs ml-1">/ticket</span>
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-black/50 p-2 rounded-2xl border border-white/5 mb-8">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                >
                    <Minus className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">{quantity}</span>
                    <span className="text-xs text-gray-500">Tickets</span>
                </div>

                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            {/* Summary */}
            <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/10">
                <span className="text-gray-400">Total Cost</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    €{(quantity * ticketPrice).toFixed(2)}
                </span>
            </div>

            {/* Action Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePurchase}
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-5 rounded-2xl shadow-lg shadow-pink-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
            >
                {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        <Ticket className="w-6 h-6" />
                        Purchase {quantity} Tickets
                    </>
                )}
            </motion.button>

            <p className="text-center text-xs text-gray-500 mt-4">
                By purchasing, you agree to our Terms & Conditions.
            </p>
        </div>
    );
}
