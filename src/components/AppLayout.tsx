import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Layers, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AppLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { to: '/architecture', label: 'Architecture Diagram', icon: Layers },
        { to: '/brochure', label: 'Brochure', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-black flex">
            {/* Mobile Menu Button */}
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50 md:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Sidebar Overlay for Mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed md:relative z-50 h-screen bg-slate-950 border-r border-slate-800 transition-all duration-300 flex flex-col",
                    isOpen ? "w-64" : "w-16",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                {/* Logo */}
                <div className={cn(
                    "flex items-center gap-3 p-4 border-b border-slate-800",
                    !isOpen && "justify-center"
                )}>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    {isOpen && (
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg">RIVO</span>
                            <span className="text-slate-500 text-xs">Architecture</span>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-3 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                                    isActive
                                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white",
                                    !isOpen && "justify-center px-0"
                                )
                            }
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            {isOpen && <span className="font-medium">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Toggle Button - Desktop Only */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </Button>

                {/* Footer */}
                <div className={cn(
                    "p-4 border-t border-slate-800",
                    !isOpen && "flex justify-center"
                )}>
                    {isOpen ? (
                        <div className="text-xs text-slate-500">
                            <p>MVP v1.0</p>
                            <p className="text-slate-600">© 2026 RIVO</p>
                        </div>
                    ) : (
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className={cn(
                "flex-1 min-h-screen overflow-auto transition-all duration-300",
                "md:ml-0"
            )}>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
