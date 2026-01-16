import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Layers, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AppLayout = () => {
    // Default to false (closed) so it doesn't cover content initially
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Hover state for the trigger zone
    const [isHoveringTrigger, setIsHoveringTrigger] = useState(false);

    const navItems = [
        { to: '/architecture', label: 'Architecture Diagram', icon: Layers },
        { to: '/brochure', label: 'Brochure', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-black flex relative">
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

            {/* Hover Trigger Zone (Invisible rail on the left) */}
            {!isOpen && !isMobileOpen && (
                <div
                    className="fixed top-0 left-0 h-screen w-4 z-[60] bg-transparent hover:bg-blue-500/10 transition-colors cursor-pointer group flex items-center justify-center"
                    onMouseEnter={() => setIsHoveringTrigger(true)}
                    onMouseLeave={() => setIsHoveringTrigger(false)}
                    onClick={() => setIsOpen(true)}
                >
                    {/* Only show the arrow hint when hovering the trigger zone */}
                    <div className={cn(
                        "transition-all duration-300 transform",
                        isHoveringTrigger ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}>
                        <div className="w-6 h-12 bg-blue-600 rounded-r-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
                            <ChevronRight className="h-4 w-4 text-white" />
                        </div>
                    </div>
                </div>
            )}

            {/* Sidebar - Now FIXED OVERLAY */}
            <aside
                className={cn(
                    "fixed z-50 h-screen bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 flex flex-col shadow-2xl top-0 left-0",
                    isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full", // Simply hide it off-screen when closed
                    isMobileOpen ? "translate-x-0" : "" // Handle mobile separately if needed, but the above line handles desktop logic
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-3 p-4 border-b border-slate-800">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-lg">RIVO</span>
                        <span className="text-slate-500 text-xs">Architecture</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-3 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => {
                                setIsMobileOpen(false);
                                setIsOpen(false); // Auto-close on selection for better UX in overlay mode
                            }}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                                    isActive
                                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                )
                            }
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Close Button - Desktop */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 shadow-xl z-50 hidden md:flex"
                    onClick={() => setIsOpen(false)}
                >
                    <ChevronLeft className="h-3 w-3" />
                </Button>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800">
                    <div className="text-xs text-slate-500">
                        <p>MVP v1.0</p>
                        <p className="text-slate-600">© 2026 RIVO</p>
                    </div>
                </div>
            </aside>

            {/* Click-away overlay when desktop sidebar is open (optional but good for UX) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] hidden md:block"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 min-h-screen w-full relative">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
