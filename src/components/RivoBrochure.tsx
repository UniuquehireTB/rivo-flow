import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Users, Briefcase, CalendarDays, ShieldCheck, BarChart3,
    Download, Globe, Layers, FileSearch, UserPlus, Workflow,
    UserCheck, MessageSquare, Lock, Smartphone, Search,
    Zap, ArrowRight, CheckCircle2, FileText, Database,
    Settings, Link as LinkIcon, AlertTriangle, Building2,
    Check, Filter, History as HistoryIcon, ScanFace, ShieldAlert,
    ChevronDown, Gift, CreditCard, MapPin, X, Video,
    Loader2, AlertCircle, Sparkles, Upload, Phone,
    Mail, Key, Bell, LogOut, Menu, Cpu,
    Activity, Fingerprint, Calendar, XCircle, CheckSquare,
    ListTodo, Clock, TrendingUp, Plus, LayoutGrid,
    Shield, Server, Cloud, Code2, Scan, Moon, Sun,
    ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2
} from "lucide-react";
import brochureData from "./data/brochureData.json";

// Slide definitions with their content functions
const SLIDES = [
    { id: 'cover', title: 'Cover', icon: Globe },
    { id: 'features', title: 'Features', icon: LayoutGrid },
    { id: 'roles', title: 'Role Access', icon: Shield },
    { id: 'command', title: 'Command Center', icon: Layers },
    { id: 'duplicate', title: 'Duplicate Detection', icon: Search },
    { id: 'ai-parsing', title: 'AI Parsing', icon: Sparkles },
    { id: 'routing', title: 'Smart Routing', icon: Workflow },
    { id: 'timeline', title: 'Audit Timeline', icon: HistoryIcon },
    { id: 'verification', title: 'Identity Verification', icon: ScanFace },
    { id: 'workflow', title: 'Hiring Workflow', icon: Briefcase },
    { id: 'scheduling', title: 'Interview Scheduling', icon: Calendar },
    { id: 'journey', title: 'Candidate Journey', icon: UserCheck },
    { id: 'teams', title: 'Team Structure', icon: Users },
    { id: 'clients', title: 'Client Management', icon: Building2 },
    { id: 'handover', title: 'Secure Handovers', icon: ShieldAlert },
    { id: 'security', title: 'Enterprise Security', icon: Lock },
    { id: 'leave', title: 'Leave Management', icon: CalendarDays },
    { id: 'productivity', title: 'Productivity', icon: Zap },
    { id: 'reports', title: 'Reports', icon: BarChart3 },
    { id: 'config', title: 'System Config', icon: Settings },
    { id: 'tech', title: 'Tech Stack', icon: Code2 },
];

const RivoBrochure = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Autoplay logic
    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide(prev => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isPlaying]);

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
        setIsPlaying(false);
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'f') {
                toggleFullscreen();
            } else if (e.key === 'Escape') {
                setIsPlaying(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, toggleFullscreen]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <div 
            ref={containerRef}
            className="w-screen h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden flex flex-col font-sans select-none relative"
        >
            {/* Header Controls */}
            <motion.div 
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
            >
                {/* Left: Logo */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm sm:text-lg">R</span>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-sm font-bold text-slate-800 tracking-wide">RIVO</h1>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Product Brochure</p>
                    </div>
                </div>

                {/* Center: Slide Counter */}
                <div className="flex items-center gap-2 sm:gap-4 bg-slate-100/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <span className="text-xs sm:text-sm font-mono font-bold text-blue-600">
                        {String(currentSlide + 1).padStart(2, '0')}
                    </span>
                    <div className="w-16 sm:w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-slate-400">
                        {String(SLIDES.length).padStart(2, '0')}
                    </span>
                </div>

                {/* Right: Controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                        onClick={() => setIsPlaying(!isPlaying)}
                        variant="ghost"
                        size="sm"
                        className="h-8 sm:h-9 px-2 sm:px-3 hover:bg-blue-50 text-slate-600"
                    >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        <span className="hidden sm:inline ml-2 text-xs font-medium">
                            {isPlaying ? 'Pause' : 'Play'}
                        </span>
                    </Button>
                    <Button
                        onClick={toggleFullscreen}
                        variant="ghost"
                        size="sm"
                        className="h-8 sm:h-9 px-2 sm:px-3 hover:bg-blue-50 text-slate-600"
                    >
                        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </Button>
                </div>
            </motion.div>

            {/* Main Slide Area */}
            <div className="flex-1 relative overflow-hidden pt-14 sm:pt-16 pb-20 sm:pb-24">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 pt-2 sm:pt-4 px-2 sm:px-4 md:px-8 pb-2 sm:pb-4"
                    >
                        <SlideContent slideIndex={currentSlide} />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <Button
                    onClick={prevSlide}
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl border border-slate-200/50 transition-all"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                </Button>
                <Button
                    onClick={nextSlide}
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl border border-slate-200/50 transition-all"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                </Button>
            </div>

            {/* Bottom Carousel Navigation */}
            <motion.div 
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200/50 py-3 sm:py-4 px-4 sm:px-8"
            >
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {SLIDES.map((slide, index) => {
                        const Icon = slide.icon;
                        const isActive = index === currentSlide;
                        const isHovered = index === hoveredSlide;

                        return (
                            <div key={slide.id} className="relative">
                                {/* Thumbnail Preview on Hover */}
                                <AnimatePresence>
                                    {isHovered && !isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                                        >
                                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-3 min-w-[160px] sm:min-w-[200px]">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                                                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                                                    </div>
                                                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{slide.title}</span>
                                                </div>
                                                <div className="text-[10px] sm:text-xs text-slate-500">
                                                    Slide {index + 1} of {SLIDES.length}
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Navigation Dot */}
                                <motion.button
                                    onClick={() => goToSlide(index)}
                                    onMouseEnter={() => setHoveredSlide(index)}
                                    onMouseLeave={() => setHoveredSlide(null)}
                                    className={`relative flex items-center justify-center transition-all duration-300 ${
                                        isActive 
                                            ? 'w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30' 
                                            : 'w-6 h-6 sm:w-8 sm:h-8 bg-slate-100 hover:bg-slate-200 rounded-full'
                                    }`}
                                    whileHover={{ scale: isActive ? 1.05 : 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isActive ? (
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    ) : (
                                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isHovered ? 'bg-blue-400' : 'bg-slate-400'}`} />
                                    )}
                                    
                                    {/* Active Indicator Ring */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-xl border-2 border-blue-400"
                                            initial={{ scale: 1, opacity: 0.5 }}
                                            animate={{ scale: 1.3, opacity: 0 }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}
                                </motion.button>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

// Slide Content Component
const SlideContent = ({ slideIndex }: { slideIndex: number }) => {
    const slideId = SLIDES[slideIndex].id;

    const commonClasses = "w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative";
    
    switch(slideId) {
        case 'cover':
            return <CoverSlide className={commonClasses} />;
        case 'features':
            return <FeaturesSlide className={commonClasses} />;
        case 'roles':
            return <RolesSlide className={commonClasses} />;
        case 'command':
            return <CommandSlide className={commonClasses} />;
        case 'duplicate':
            return <DuplicateSlide className={commonClasses} />;
        case 'ai-parsing':
            return <AiParsingSlide className={commonClasses} />;
        case 'routing':
            return <RoutingSlide className={commonClasses} />;
        case 'timeline':
            return <TimelineSlide className={commonClasses} />;
        case 'verification':
            return <VerificationSlide className={commonClasses} />;
        case 'workflow':
            return <WorkflowSlide className={commonClasses} />;
        case 'scheduling':
            return <SchedulingSlide className={commonClasses} />;
        case 'journey':
            return <JourneySlide className={commonClasses} />;
        case 'teams':
            return <TeamsSlide className={commonClasses} />;
        case 'clients':
            return <ClientsSlide className={commonClasses} />;
        case 'handover':
            return <HandoverSlide className={commonClasses} />;
        case 'security':
            return <SecuritySlide className={commonClasses} />;
        case 'leave':
            return <LeaveSlide className={commonClasses} />;
        case 'productivity':
            return <ProductivitySlide className={commonClasses} />;
        case 'reports':
            return <ReportsSlide className={commonClasses} />;
        case 'config':
            return <ConfigSlide className={commonClasses} />;
        case 'tech':
            return <TechSlide className={commonClasses} />;
        default:
            return <CoverSlide className={commonClasses} />;
    }
};

// Shared animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

// ============ SLIDE COMPONENTS ============

// 1. Cover Slide
const CoverSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slide1.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/50" />
        <motion.div 
            className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-2xl shadow-blue-500/30"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </motion.div>

            <motion.h1 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6"
                variants={fadeInUp}
            >
                {brochureData.slide1.titlePre}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                    {brochureData.slide1.titleMain}
                </span>
            </motion.h1>

            <motion.p 
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-8 md:mb-12"
                variants={fadeInUp}
            >
                {brochureData.slide1.description}
            </motion.p>

            <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                variants={fadeInUp}
            >
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    {brochureData.slide1.version}
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    {brochureData.slide1.company}
                </Badge>
            </motion.div>

            <motion.div 
                className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 sm:right-8 md:right-12 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{brochureData.slide1.footerYear}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{brochureData.slide1.footerLabel}</p>
            </motion.div>
        </motion.div>
    </div>
);

// 2. Features Slide
const FeaturesSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slideFeaturesOverview.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-blue-50/95 backdrop-blur-sm" />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <SlideHeader 
                icon={LayoutGrid} 
                title1={brochureData.slideFeaturesOverview.header.title1} 
                title2={brochureData.slideFeaturesOverview.header.title2} 
            />

            <motion.div className="flex-1 flex flex-col justify-center" variants={fadeInUp}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-4">
                    {brochureData.slideFeaturesOverview.mainTitle.line1}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 ml-2">
                        {brochureData.slideFeaturesOverview.mainTitle.line2}
                    </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mb-4 sm:mb-6 md:mb-8">
                    {brochureData.slideFeaturesOverview.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3">
                    {brochureData.slideFeaturesOverview.featuresList.map((feature: string, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group flex items-center gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/80 border border-slate-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-medium text-slate-700 leading-tight">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </div>
);

// 3. Roles Slide
const RolesSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slideRoleAccess.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-rose-50/95" />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <SlideHeader 
                icon={Shield} 
                title1={brochureData.slideRoleAccess.header.title1} 
                title2={brochureData.slideRoleAccess.header.title2}
                color="text-rose-600" 
            />

            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center mt-4">
                {brochureData.slideRoleAccess.roleContent.map((role: any, idx: number) => {
                    const icons = [Shield, Briefcase, Users, UserPlus];
                    const Icon = icons[idx];
                    const colors = ['rose', 'indigo', 'purple', 'emerald'];
                    const color = colors[idx];
                    
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="h-full flex flex-col p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/90 border border-slate-200/50 hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-${color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${color}-600`} />
                                </div>
                                <h3 className={`text-base sm:text-lg font-bold text-${color}-600 uppercase tracking-wide`}>
                                    {role.role}
                                </h3>
                            </div>

                            <div className="flex-1 space-y-2">
                                {role.description.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 mt-1.5 sm:mt-2 rounded-full bg-${color}-500`} />
                                        <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    </div>
);

// 4. Command Center Slide
const CommandSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slide2.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/98 via-white/95 to-transparent" />
        <motion.div 
            className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            {/* Left: Text Content */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <SlideHeader 
                    icon={Layers} 
                    title1={brochureData.slide2.header.title1} 
                    title2={brochureData.slide2.header.title2} 
                />
                
                <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-4 sm:mt-6 mb-2 sm:mb-4"
                    variants={fadeInUp}
                >
                    {brochureData.slide2.mainTitle.line1}
                    <span className="text-blue-600 block">{brochureData.slide2.mainTitle.line2}</span>
                </motion.h2>

                <div className="space-y-3 sm:space-y-4">
                    {brochureData.slide2.features.map((feature: any, idx: number) => {
                        const icons = [Search, Filter, BarChart3];
                        const Icon = icons[idx];
                        return (
                            <motion.div 
                                key={idx}
                                variants={fadeInUp}
                                className="flex items-start gap-3"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm sm:text-base font-bold text-slate-800">{feature.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-500">{feature.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Right: Mockup */}
            <div className="hidden lg:flex items-center justify-center p-8">
                <motion.div 
                    className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                JD
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">{brochureData.slide2.mockUI.userName}</div>
                                <div className="text-xs text-slate-500">{brochureData.slide2.mockUI.userRole}</div>
                            </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{brochureData.slide2.mockUI.filterText}</Badge>
                    </div>

                    <div className="p-4 grid grid-cols-4 gap-2">
                        <MetricBoxSmall label="Apps" value={brochureData.slide2.mockUI.metrics.applications} color="text-blue-600" />
                        <MetricBoxSmall label="Selected" value={brochureData.slide2.mockUI.metrics.selected} color="text-green-600" />
                        <MetricBoxSmall label="Joined" value={brochureData.slide2.mockUI.metrics.joined} color="text-purple-600" />
                        <MetricBoxSmall label="Backed Out" value={brochureData.slide2.mockUI.metrics.backedOut} color="text-red-600" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>
);

// Helper Components
const SlideHeader = ({ icon: Icon, title1, title2, color = "text-blue-600" }: any) => (
    <motion.div 
        className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="p-2 sm:p-3 bg-white/80 rounded-lg sm:rounded-xl border border-slate-200/50 shadow-sm">
            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
        </div>
        <div className="flex flex-col">
            {title1 && <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wide leading-none">{title1}</span>}
            <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wide leading-none">{title2}</span>
        </div>
    </motion.div>
);

const MetricBoxSmall = ({ label, value, color = "text-blue-600" }: any) => (
    <div className="bg-slate-50 p-2 sm:p-3 rounded-lg text-center border border-slate-100">
        <div className={`text-base sm:text-xl font-bold ${color}`}>{value}</div>
        <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase">{label}</div>
    </div>
);

// Remaining slides follow the same pattern - implementing key ones:

// 5. Duplicate Detection Slide
const DuplicateSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slide3.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-amber-50/95" />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <SlideHeader icon={Search} title1={brochureData.slide3.header.title1} title2={brochureData.slide3.header.title2} color="text-amber-600" />
            
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 sm:mt-6">
                {brochureData.slide3.mainTitle.line1}
                <span className="text-amber-600 ml-2">{brochureData.slide3.mainTitle.line2}</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mt-3 sm:mt-4">
                {brochureData.slide3.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                {brochureData.slide3.features.map((feature: any, idx: number) => (
                    <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="bg-white/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-200/50 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-2 sm:mb-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-800">{feature.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
);

// 6. AI Parsing Slide
const AiParsingSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slide4.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/95 via-white/90 to-slate-50/95" />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <SlideHeader icon={Sparkles} title1={brochureData.slide4.header.title1} title2={brochureData.slide4.header.title2} color="text-violet-600" />
            
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 sm:mt-6">
                {brochureData.slide4.mainTitle.line1}
                <span className="text-violet-600 ml-2">{brochureData.slide4.mainTitle.line2}</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mt-3 sm:mt-4">
                {brochureData.slide4.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {brochureData.slide4.features.map((feature: any, idx: number) => (
                    <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="bg-white/90 p-4 sm:p-5 rounded-xl border border-violet-200/50 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-2">{feature.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
);

// Simplified versions for remaining slides to keep file manageable
const RoutingSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide5.bgImage}
        icon={Workflow}
        header={brochureData.slide5.header}
        mainTitle={brochureData.slide5.mainTitle}
        description={(brochureData.slide5.description as any).main}
        color="text-cyan-600"
        accentColor="cyan"
    />
);

const TimelineSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide6.bgImage}
        icon={HistoryIcon}
        header={brochureData.slide6.header}
        mainTitle={brochureData.slide6.mainTitle}
        description={brochureData.slide6.description}
        color="text-blue-600"
        accentColor="blue"
    />
);

const VerificationSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide7.bgImage}
        icon={ScanFace}
        header={brochureData.slide7.header}
        mainTitle={brochureData.slide7.mainTitle}
        description={brochureData.slide7.description}
        color="text-rose-600"
        accentColor="rose"
    />
);

const WorkflowSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide8.bgImage}
        icon={Briefcase}
        header={brochureData.slide8.header}
        mainTitle={brochureData.slide8.mainTitle}
        description={brochureData.slide8.description}
        color="text-emerald-600"
        accentColor="emerald"
    />
);

const SchedulingSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide9.bgImage}
        icon={Calendar}
        header={brochureData.slide9.header}
        mainTitle={brochureData.slide9.mainTitle}
        description={(brochureData.slide9.description as any).main}
        color="text-orange-600"
        accentColor="orange"
    />
);

const JourneySlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide10.bgImage}
        icon={UserCheck}
        header={brochureData.slide10.header}
        mainTitle={brochureData.slide10.mainTitle}
        description={brochureData.slide10.description}
        color="text-indigo-600"
        accentColor="indigo"
    />
);

const TeamsSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide11.bgImage}
        icon={Users}
        header={brochureData.slide11.header}
        mainTitle={brochureData.slide11.mainTitle}
        description={brochureData.slide11.description}
        color="text-blue-600"
        accentColor="blue"
    />
);

const ClientsSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide12.bgImage}
        icon={Building2}
        header={brochureData.slide12.header}
        mainTitle={brochureData.slide12.mainTitle}
        description={brochureData.slide12.description}
        color="text-orange-600"
        accentColor="orange"
    />
);

const HandoverSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide13.bgImage}
        icon={ShieldAlert}
        header={brochureData.slide13.header}
        mainTitle={brochureData.slide13.mainTitle}
        description={brochureData.slide13.description}
        color="text-red-600"
        accentColor="red"
    />
);

const SecuritySlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide14.bgImage}
        icon={Lock}
        header={brochureData.slide14.header}
        mainTitle={brochureData.slide14.mainTitle}
        description={brochureData.slide14.description}
        color="text-slate-600"
        accentColor="slate"
    />
);

const LeaveSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide15.bgImage}
        icon={CalendarDays}
        header={brochureData.slide15.header}
        mainTitle={brochureData.slide15.mainTitle}
        description={brochureData.slide15.description}
        color="text-teal-600"
        accentColor="teal"
    />
);

const ProductivitySlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide16.bgImage}
        icon={Zap}
        header={brochureData.slide16.header}
        mainTitle={brochureData.slide16.mainTitle}
        description={brochureData.slide16.description}
        color="text-yellow-600"
        accentColor="yellow"
    />
);

const ReportsSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide17.bgImage}
        icon={BarChart3}
        header={brochureData.slide17.header}
        mainTitle={brochureData.slide17.mainTitle}
        description={brochureData.slide17.description}
        color="text-purple-600"
        accentColor="purple"
    />
);

const ConfigSlide = ({ className }: { className: string }) => (
    <GenericSlide 
        className={className}
        bgImage={brochureData.slide18.bgImage}
        icon={Settings}
        header={brochureData.slide18.header}
        mainTitle={brochureData.slide18.mainTitle}
        description={brochureData.slide18.description}
        color="text-cyan-600"
        accentColor="cyan"
    />
);

// 21. Tech Stack Slide
const TechSlide = ({ className }: { className: string }) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${brochureData.slide19.bgImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <motion.h2 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4"
            >
                {brochureData.slide19.mainTitle.line1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ml-2">
                    {brochureData.slide19.mainTitle.line2}
                </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-6 sm:mb-10">
                {brochureData.slide19.description}
            </motion.p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-4xl">
                {brochureData.slide19.techStack.map((tech: any, idx: number) => {
                    const icons = [Code2, Server, Database, Cloud];
                    const Icon = icons[idx];
                    const colors = ['cyan', 'green', 'blue', 'yellow'];
                    const color = colors[idx];
                    
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-${color}-500/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${color}-400`} />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{tech.title}</h3>
                            <p className="text-[10px] sm:text-xs text-slate-400">{tech.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    </div>
);

// Generic Slide Component for similar layouts
const GenericSlide = ({ className, bgImage, icon: Icon, header, mainTitle, description, color, accentColor }: any) => (
    <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-${accentColor}-50/95`} />
        <motion.div 
            className="relative z-10 h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <SlideHeader icon={Icon} title1={header?.title1} title2={header?.title2} color={color} />
            
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 sm:mt-6">
                {mainTitle?.line1}
                <span className={`${color} block sm:inline sm:ml-2`}>{mainTitle?.line2}</span>
                {mainTitle?.line3 && <span className="block">{mainTitle.line3}</span>}
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mt-3 sm:mt-4">
                {description}
            </motion.p>

            {/* Decorative Elements */}
            <motion.div 
                className={`absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-${accentColor}-500/20 to-transparent rounded-full blur-2xl`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </motion.div>
    </div>
);

export default RivoBrochure;
