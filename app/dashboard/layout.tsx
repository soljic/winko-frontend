'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PlusCircle, Settings, LogOut, Box } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { t } = useLanguage();

    const navItems = [
        { href: '/dashboard', label: t.dashboard.nav.overview, icon: LayoutDashboard },
        { href: '/dashboard/create-drop', label: t.dashboard.nav.createDrop, icon: PlusCircle },
        { href: '/dashboard/settings', label: t.dashboard.nav.settings, icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#030014] flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-xl fixed h-full z-40 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Winko <span className="text-xs text-primary font-normal">Brand</span></span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary/20 text-primary font-bold border border-primary/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors w-full">
                        <LogOut className="w-5 h-5" />
                        {t.dashboard.nav.logout}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 pt-24 md:pt-8">
                {children}
            </main>
        </div>
    );
}
