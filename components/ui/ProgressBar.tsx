'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
}

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
    const percentage = Math.min((value / max) * 100, 100);

    return (
        <div className={cn("h-4 bg-gray-800 rounded-full overflow-hidden", className)}>
            <motion.div
                className="h-full bg-gradient-to-r from-pink-500 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    );
}
