'use client';

import { useEffect, useState } from 'react';

interface RaffleTimerProps {
    targetDate: string;
}

export default function RaffleTimer({ targetDate }: RaffleTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="text-right">
            <p className="text-pink-400 text-sm font-bold mb-1 uppercase tracking-wider">Time to Raffle</p>
            <div className="flex items-center justify-end gap-2 text-white font-mono">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none">{formatNumber(timeLeft.days)}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Days</span>
                </div>
                <span className="text-gray-600 -mt-3">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none">{formatNumber(timeLeft.hours)}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Hrs</span>
                </div>
                <span className="text-gray-600 -mt-3">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none">{formatNumber(timeLeft.minutes)}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Min</span>
                </div>
                <span className="text-gray-600 -mt-3">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold leading-none text-pink-500 animate-pulse">{formatNumber(timeLeft.seconds)}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Sec</span>
                </div>
            </div>
        </div>
    );
}
