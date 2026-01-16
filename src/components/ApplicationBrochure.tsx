import React from 'react';
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
    Shield, Server, Cloud, Code2, Scan, Moon, Sun
} from "lucide-react";
import { toast } from "sonner";
import brochureData from "./data/brochureData.json";

const ApplicationBrochure = () => {

    const handlePrint = () => {
        window.print();
        toast.success("Printing High-Quality Deck...");
    };

    return (
        <div className="min-h-screen bg-black text-white print:p-0 print:bg-white font-sans selection:bg-blue-500 selection:text-white">

            {/* Floating Action Button */}
            {/* <div className="fixed top-6 right-6 z-50 print:hidden animate-in fade-in slide-in-from-top-4 duration-700">
                <Button
                    onClick={handlePrint}
                    className="gap-2 bg-white text-black hover:bg-zinc-200 shadow-2xl border-0 rounded-full px-6 py-6 h-auto text-lg font-bold tracking-wide transition-all hover:scale-105"
                >
                    <Download className="h-5 w-5" />
                    Print / Save PDF
                </Button>
            </div> */}



            <div className="w-full mx-auto space-y-0 print:space-y-0 print:w-full">

                {/* ==================== SLIDE 1: COVER (Brand) ==================== */}
                <ImageSlide bg={brochureData.slide1.bgImage}>
                    <div className="h-full flex flex-col justify-center items-center text-center relative z-10 bg-black/60 backdrop-blur-sm">
                        {/*                         <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl rotate-3 border border-white/10">
                            <Globe className="h-12 w-12 text-white" />
                        </div> */}

                        <div className="space-y-4">
                            {/* <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-sm border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/10">{brochureData.slide1.tag}</span> */}
                            <h1 className="text-7xl font-black leading-tight tracking-tight">
                                {brochureData.slide1.titlePre} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{brochureData.slide1.titleMain}</span>
                            </h1>
                        </div>

                        <div className="mt-12 max-w-2xl">
                            <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                {brochureData.slide1.description}
                            </p>
                        </div>

                        <div className="absolute bottom-12 w-full flex justify-end px-16 border-t border-white/10 pt-8">
                            <div className="text-right">
                                <p className="text-3xl font-bold text-white leading-none mb-1">{brochureData.slide1.footerYear}</p>
                                <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase mb-2">{brochureData.slide1.footerLabel}</p>
                                <div className="flex gap-4 text-xs font-mono text-zinc-400 justify-end">
                                    <span>{brochureData.slide1.version}</span>
                                    <span>•</span>
                                    <span>{brochureData.slide1.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE: FEATURES OVERVIEW ==================== */}
                <ImageSlide bg={brochureData.slideFeaturesOverview.bgImage}>
                    <div className="h-full bg-slate-900/95 p-16 flex flex-col relative overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <SlideHeader icon={LayoutGrid} title1={brochureData.slideFeaturesOverview.header.title1} title2={brochureData.slideFeaturesOverview.header.title2} />

                        <div className="flex-1 flex flex-col justify-center z-10">
                            <div className="mb-8">
                                <h2 className="text-4xl font-bold leading-tight mb-4">
                                    {brochureData.slideFeaturesOverview.mainTitle.line1} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        {brochureData.slideFeaturesOverview.mainTitle.line2}
                                    </span>
                                </h2>
                                <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                                    {brochureData.slideFeaturesOverview.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-4 gap-3">
                                {brochureData.slideFeaturesOverview.featuresList.map((feature: string, idx: number) => (
                                    <div key={idx} className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                        <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-tight">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 16: ROLE ACCESS FLOW (Narrative) ==================== */}
                <ImageSlide bg={brochureData.slideRoleAccess.bgImage}>
                    <div className="h-full bg-slate-900/95 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                        {/* Header */}
                        <SlideHeader icon={Shield} title1={brochureData.slideRoleAccess.header.title1} title2={brochureData.slideRoleAccess.header.title2} color="text-rose-500" />

                        {/* 4-Column Content Flow */}
                        <div className="flex-1 grid grid-cols-4 gap-8 items-center z-10">
                            {brochureData.slideRoleAccess.roleContent.map((role: any, idx: number) => {
                                const Icon = idx === 0 ? Shield : idx === 1 ? Briefcase : idx === 2 ? Users : UserPlus;
                                return (
                                    <div key={idx} className="h-full max-h-[500px] flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">

                                        {/* Small Head */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-10 h-10 shrink-0 rounded-lg ${role.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className={`text-lg font-black uppercase tracking-wider ${role.color}`}>
                                                {role.role}
                                            </h3>
                                        </div>

                                        {/* Flow Content */}
                                        <div className="flex-1 overflow-y-auto pr-2 pl-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                            <div className="space-y-3">
                                                {role.description.map((item: string, i: number) => (
                                                    <div key={i} className="flex gap-3 items-start relative group/item">
                                                        {/* Custom Bullet Point */}
                                                        <div className={`w-1.5 h-1.5 mt-2 shrink-0 rounded-sm ${role.bg} shadow-[0_0_8px_currentColor]`} />
                                                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Visual Footer Line */}
                                        <div className={`h-1 w-12 mt-6 rounded-full ${role.bg}`} />
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 2: COMMAND CENTER ==================== */}
                < ImageSlide bg={brochureData.slide2.bgImage} >
                    <div className="h-full grid grid-cols-12 bg-gradient-to-r from-black via-slate-950/95 to-slate-900/50">
                        {/* Left Column: Features text */}
                        <div className="col-span-4 p-12 flex flex-col justify-center space-y-8 z-20">
                            <SlideHeader icon={Layers} title1={brochureData.slide2.header.title1} title2={brochureData.slide2.header.title2} />

                            <h2 className="text-4xl font-bold leading-tight">
                                {brochureData.slide2.mainTitle.line1} <br />
                                <span className="text-blue-500">{brochureData.slide2.mainTitle.line2}</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="flex items-center gap-2 font-bold text-white">
                                        <Search className="h-4 w-4 text-blue-400" /> {brochureData.slide2.features[0].title}
                                    </h4>
                                    <p className="text-zinc-400 text-sm">
                                        {brochureData.slide2.features[0].desc}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="flex items-center gap-2 font-bold text-white">
                                        <Filter className="h-4 w-4 text-orange-400" /> {brochureData.slide2.features[1].title}
                                    </h4>
                                    <p className="text-zinc-400 text-sm">
                                        {brochureData.slide2.features[1].desc}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="flex items-center gap-2 font-bold text-white">
                                        <BarChart3 className="h-4 w-4 text-green-400" /> {brochureData.slide2.features[2].title}
                                    </h4>
                                    <p className="text-zinc-400 text-sm">
                                        {brochureData.slide2.features[2].desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Visual UI Mockup */}
                        <div className="col-span-8 relative p-8 flex items-center">
                            <div className="w-full bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-6 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">

                                {/* Mock Header: Profile & Search */}
                                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">JD</div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide2.mockUI.userName}</div>
                                            <div className="text-xs text-zinc-400">{brochureData.slide2.mockUI.userRole}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-slate-800 px-3 py-1 rounded text-xs text-zinc-300 border border-slate-600">{brochureData.slide2.mockUI.filterText}</div>
                                    </div>
                                </div>

                                {/* Mock Metrics Row */}
                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    <MetricBoxSmall label="Applications" value={brochureData.slide2.mockUI.metrics.applications} color="text-blue-400" />
                                    <MetricBoxSmall label="Selected" value={brochureData.slide2.mockUI.metrics.selected} color="text-green-400" />
                                    <MetricBoxSmall label="Joined" value={brochureData.slide2.mockUI.metrics.joined} color="text-purple-400" />
                                    <MetricBoxSmall label="Backed Out" value={brochureData.slide2.mockUI.metrics.backedOut} color="text-red-400" />
                                </div>

                                {/* Mock 3-Column Feed */}
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Jobs Feed */}
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                            <Briefcase className="h-3 w-3" /> Recent Jobs
                                        </h5>
                                        <div className="bg-slate-800 p-3 rounded-lg border-l-2 border-blue-500">
                                            <div className="text-xs font-bold text-white">{brochureData.slide2.mockUI.jobs[0].role}</div>
                                            <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.jobs[0].sub}</div>
                                        </div>
                                        <div className="bg-slate-800 p-3 rounded-lg border-l-2 border-slate-600">
                                            <div className="text-xs font-bold text-white">{brochureData.slide2.mockUI.jobs[1].role}</div>
                                            <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.jobs[1].sub}</div>
                                        </div>
                                    </div>

                                    {/* Candidates Feed */}
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                            <Users className="h-3 w-3" /> Latest Activity
                                        </h5>
                                        <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
                                            <div>
                                                <div className="text-xs font-bold text-white">{brochureData.slide2.mockUI.activity[0].name}</div>
                                                <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.activity[0].status}</div>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
                                            <div>
                                                <div className="text-xs font-bold text-white">{brochureData.slide2.mockUI.activity[1].name}</div>
                                                <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.activity[1].status}</div>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                        </div>
                                    </div>

                                    {/* Interviews Feed */}
                                    <div className="space-y-3">
                                        <h5 className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                            <CalendarDays className="h-3 w-3" /> Interviews
                                        </h5>
                                        <div className="bg-slate-800 p-3 rounded-lg">
                                            <div className="flex justify-between text-xs text-white font-bold mb-1">
                                                <span>{brochureData.slide2.mockUI.interviews[0].time}</span>
                                                <span className="text-blue-400">{brochureData.slide2.mockUI.interviews[0].round}</span>
                                            </div>
                                            <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.interviews[0].desc}</div>
                                        </div>
                                        <div className="bg-slate-800 p-3 rounded-lg">
                                            <div className="flex justify-between text-xs text-white font-bold mb-1">
                                                <span>{brochureData.slide2.mockUI.interviews[1].time}</span>
                                                <span className="text-purple-400">{brochureData.slide2.mockUI.interviews[1].round}</span>
                                            </div>
                                            <div className="text-[10px] text-zinc-400">{brochureData.slide2.mockUI.interviews[1].desc}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </ImageSlide >

                {/* ==================== SLIDE 3: SMART RECRUITMENT ==================== */}
                < ImageSlide bg={brochureData.slide3.bgImage} >
                    <div className="h-full bg-slate-900/95 p-16 flex items-center relative overflow-hidden">

                        {/* Distinct Background Gradient */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/20 via-transparent to-slate-950/90 pointer-events-none" />

                        <div className="grid grid-cols-2 gap-20 w-full z-10 items-center">

                            {/* Left: Content - Using User's Exact Copy */}
                            <div className="flex flex-col justify-center space-y-10">
                                <SlideHeader icon={FileSearch} title1={brochureData.slide3.header.title1} title2={brochureData.slide3.header.title2} />

                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold leading-tight tracking-tight">
                                        {brochureData.slide3.mainTitle.line1} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{brochureData.slide3.mainTitle.line2}</span>
                                    </h2>

                                    <p className="text-xl text-zinc-300 leading-relaxed max-w-xl">
                                        {brochureData.slide3.description}
                                    </p>
                                </div>

                                <div className="space-y-6 pt-2">
                                    <div className="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                                            <Search className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-xl mb-1">{brochureData.slide3.features[0].title}</h4>
                                            <p className="text-zinc-400">{brochureData.slide3.features[0].desc}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-500/30">
                                            <HistoryIcon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-xl mb-1">{brochureData.slide3.features[1].title}</h4>
                                            <p className="text-zinc-400">{brochureData.slide3.features[1].desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Modern Card Concept */}
                            <div className="relative h-[600px] flex items-center justify-center">
                                {/* Central Smart Match Card */}
                                <div className="relative w-96 bg-slate-800 rounded-3xl border border-slate-600 shadow-2xl p-10 flex flex-col items-center text-center z-30">
                                    <div className="absolute -top-12 h-24 w-24 bg-blue-600 rounded-full flex items-center justify-center border-8 border-slate-900 shadow-xl">
                                        <CheckCircle2 className="h-10 w-10 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mt-8 mb-4">{brochureData.slide3.mockUI.title}</h3>
                                    <p className="text-blue-200 text-sm font-medium bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                                        "{brochureData.slide3.mockUI.status}"
                                    </p>
                                    <p className="text-zinc-400 text-sm italic">
                                        {brochureData.slide3.mockUI.sub}
                                    </p>
                                    <div className="mt-8 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-blue-500 animate-pulse" />
                                    </div>
                                </div>

                                {/* Static Aligned Data Elements - Perfectly Placed */}
                                <div className="absolute top-24 -right-4 p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl z-20 flex items-center gap-3">
                                    <Database className="h-8 w-8 text-purple-400" />
                                    <div>
                                        <div className="text-white font-bold">{brochureData.slide3.mockUI.dbLabel}</div>
                                        <div className="text-xs text-zinc-500">{brochureData.slide3.mockUI.dbStatus}</div>
                                    </div>
                                </div>

                                <div className="absolute bottom-24 -left-4 p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl z-20 flex items-center gap-3">
                                    <FileText className="h-8 w-8 text-orange-400" />
                                    <div>
                                        <div className="text-white font-bold">{brochureData.slide3.mockUI.resumeLabel}</div>
                                        <div className="text-xs text-zinc-500">{brochureData.slide3.mockUI.resumeStatus}</div>
                                    </div>
                                </div>

                                {/* Abstract Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10">
                                    <line x1="50%" y1="50%" x2="90%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                                    <line x1="50%" y1="50%" x2="10%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </ImageSlide >

                {/* ==================== SLIDE 4: AI RESUME PARSING ==================== */}
                <ImageSlide bg={brochureData.slide4.bgImage}>
                    <div className="h-full bg-slate-950/85 p-12 flex items-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                        <div className="grid grid-cols-2 gap-12 w-full z-10 items-center">
                            {/* Left: Content + Mock UI */}
                            <div className="flex flex-col justify-center space-y-10">
                                <div className="space-y-6">
                                    <SlideHeader icon={Sparkles} title1={brochureData.slide4.header.title1} title2={brochureData.slide4.header.title2} />

                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-bold leading-tight tracking-tight">
                                            {brochureData.slide4.mainTitle.line1} <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{brochureData.slide4.mainTitle.line2}</span>
                                        </h2>
                                        <p className="text-lg text-purple-200/80 leading-relaxed max-w-xl">
                                            {brochureData.slide4.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Mock UI Card */}
                                <div className="w-[500px] group relative overflow-hidden rounded-2xl border-2 border-dashed border-purple-500/30 bg-slate-900/60 backdrop-blur-xl p-8 cursor-pointer transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:scale-105">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors animate-pulse">
                                            <Upload className="h-8 w-8 text-purple-400" />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left">
                                            <div className="flex items-center gap-3">
                                                <h4 className="font-bold text-xl text-white">{brochureData.slide4.mockUI.uploadTitle}</h4>
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                                                    <Sparkles className="h-3 w-3 fill-white" />
                                                    {brochureData.slide4.mockUI.aiBadge}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400 mt-2">
                                                {brochureData.slide4.mockUI.uploadDesc}
                                            </p>
                                        </div>
                                        <FileText className="h-6 w-6 text-slate-600 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                </div>
                            </div>

                            {/* Right: Features List */}
                            <div className="flex flex-col justify-center h-full">
                                <div className="space-y-5 pt-2">
                                    {brochureData.slide4.features && brochureData.slide4.features.map((feature: any, idx: number) => (
                                        <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="h-14 w-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 shadow-lg shadow-purple-500/10">
                                                <CheckCircle2 className="h-7 w-7" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-xl mb-2">{feature.title}</h4>
                                                <p className="text-zinc-400 text-base leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 5: CANDIDATE MAPPING ==================== */}
                < ImageSlide bg={brochureData.slide5.bgImage} >
                    <div className="h-full bg-slate-900/90 p-0 flex relative overflow-hidden">
                        {/* Diagonal Split Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-900/20" />

                        {/* Content Container */}
                        <div className="relative z-10 flex w-full h-full">

                            {/* Left Side: Logic & Workflows */}
                            <div className="w-1/2 p-16 flex flex-col justify-center space-y-12">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <SlideHeader icon={Workflow} title1={brochureData.slide5.header.title1} title2={brochureData.slide5.header.title2} />
                                    </div>
                                    <h2 className="text-4xl font-black text-white leading-none mb-4">
                                        {brochureData.slide5.mainTitle.line1} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">{brochureData.slide5.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-l text-zinc-500 font-light border-l-4 border-blue-500 pl-6 mt-6 leading-relaxed px-2">
                                        {brochureData.slide5.description.main}<br />
                                        <span className="text-sm text-zinc-500">{brochureData.slide5.description.sub}</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-5">
                                    {/* Direct Mapping Card */}
                                    <div className="group bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-default w-full">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                <Zap className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{brochureData.slide5.options[0].title}</h3>
                                        </div>
                                        <div className="text-zinc-400 text-sm pl-14">
                                            {brochureData.slide5.options[0].desc}
                                        </div>
                                    </div>

                                    {/* Talent Pool Card */}
                                    <div className="group bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-default w-full">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                <Database className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{brochureData.slide5.options[1].title}</h3>
                                        </div>
                                        <div className="text-zinc-400 text-sm pl-14">
                                            {brochureData.slide5.options[1].desc}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Enhanced Quick Action UI Coverage */}
                            <div className="w-1/2 bg-black/30 p-12 flex items-center justify-center relative border-l border-white/5 backdrop-blur-sm">
                                {/* Decorative Blooms */}
                                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                                {/* Mock UI Container - Centered & Larger */}
                                <div className="relative w-[420px] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden transform scale-105">
                                    {/* Mock UI Header */}
                                    <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
                                        <span className="text-xs font-bold text-zinc-400 tracking-wider">{brochureData.slide5.mockUI.header}</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>

                                    {/* Mock UI Body */}
                                    <div className="p-8 space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end">
                                                <div className="text-xs text-zinc-500 uppercase font-bold">Action</div>
                                            </div>
                                            <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-inner">
                                                <UserPlus className="h-5 w-5 text-blue-400" />
                                                <span className="text-sm font-medium text-white">{brochureData.slide5.mockUI.action}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2 relative">
                                            <div className="pl-6 border-l-2 px-4 border-dashed border-slate-700 py-2">
                                                <div className="text-xs text-zinc-500 uppercase font-bold mb-2">{brochureData.slide5.mockUI.mapJobTitle}</div>
                                                <div className="bg-blue-600/10 border border-blue-500/30 p-4 rounded-xl flex justify-between items-center">
                                                    <div>
                                                        <div className="text-base font-bold text-blue-100">{brochureData.slide5.mockUI.jobName}</div>
                                                        <div className="text-[11px] text-blue-300 mt-0.5">{brochureData.slide5.mockUI.jobDetail}</div>
                                                    </div>
                                                    <div className="h-8 w-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-xs text-zinc-500 uppercase font-bold">{brochureData.slide5.mockUI.resultLabel}</div>
                                            <div className="flex items-center gap-3 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                                                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                                                <span className="text-orange-400 font-bold font-mono">
                                                    {brochureData.slide5.mockUI.resultValue}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide >

                {/* ==================== SLIDE 6: JOURNEY ==================== */}
                < ImageSlide bg={brochureData.slide6.bgImage} >
                    <div className="h-full w-full relative overflow-hidden">
                        {/* 1. Base Darkening Gradient (Left-Heavy to readable text) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20" />

                        <div className="relative z-10 w-full h-full flex p-16">

                            {/* LEFT COLUMN: Text & Stats */}
                            <div className="w-5/12 flex flex-col justify-center space-y-10 pr-12">
                                <div>
                                    <div className="mb-6">
                                        <SlideHeader icon={HistoryIcon} title1={brochureData.slide6.header.title1} title2={brochureData.slide6.header.title2} />
                                    </div>

                                    <h2 className="text-4xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl">
                                        {brochureData.slide6.mainTitle.line1} <br />
                                        <span className="text-blue-500 text-4xl">{brochureData.slide6.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-lg text-zinc-300 leading-relaxed drop-shadow-md font-light">
                                        {brochureData.slide6.description}
                                    </p>
                                </div>

                                {/* Floating Stat Cards Layered */}
                                <div className="flex gap-5">
                                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl flex-1 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{brochureData.slide6.stats.roundsLabel}</div>
                                        <div className="text-4xl font-black text-white">{brochureData.slide6.stats.roundsValue}</div>
                                    </div>
                                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl flex-1 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{brochureData.slide6.stats.feedbackLabel}</div>
                                        <div className="text-4xl font-bold text-emerald-400">{brochureData.slide6.stats.feedbackValue}</div>
                                    </div>
                                </div>

                                <div className="bg-blue-600/20 backdrop-blur-md border border-blue-500/30 p-6 rounded-2xl flex items-center justify-between shadow-xl ring-1 ring-blue-500/20" style={{ marginTop: '24px' }}>
                                    <div>
                                        <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-1">{brochureData.slide6.stats.statusLabel}</div>
                                        <div className="text-3xl font-bold text-white">{brochureData.slide6.stats.statusValue}</div>
                                    </div>
                                    <Gift className="h-10 w-10 text-blue-400 drop-shadow-glow" />
                                </div>
                            </div>

                            {/* RIGHT COLUMN: The "Overlay" Timeline Card */}
                            <div className="w-7/12 relative pl-8 flex items-center">
                                {/* The Glass Container */}
                                <div className="w-full h-[540px] bg-slate-950/80 backdrop-blur-2xl rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden relative">

                                    {/* Inner Content Padding */}
                                    <div className="absolute inset-0 p-10 overflow-hidden">

                                        {/* Timeline List */}
                                        <div className="space-y-6 relative h-full">
                                            {/* Connector Line */}
                                            <div className="absolute left-[28px] top-8 bottom-8 w-0.5 bg-slate-800 rounded-full" />

                                            {/* Item 1: Joined */}
                                            <div className="relative pl-20 group">
                                                <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-slate-950 border-4 border-slate-950 z-10 flex items-center justify-center">
                                                    <div className="h-full w-full rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                                        <UserCheck className="h-6 w-6" />
                                                    </div>
                                                </div>
                                                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:bg-slate-900 hover:border-slate-700 transition-colors duration-300">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-xl text-white">{brochureData.slide6.timeline[0].title}</h4>
                                                        <span className="text-xs text-zinc-500 font-mono">{brochureData.slide6.timeline[0].time}</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <span className="text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">{brochureData.slide6.timeline[0].tags[0]}</span>
                                                        <span className="text-[10px] font-bold uppercase bg-slate-800 text-zinc-400 px-2 py-1 rounded border border-slate-700">{brochureData.slide6.timeline[0].tags[1]}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Item 2: Offered */}
                                            <div className="relative pl-20 group">
                                                <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-slate-950 border-4 border-slate-950 z-10 flex items-center justify-center">
                                                    <div className="h-full w-full rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                                        <Gift className="h-6 w-6" />
                                                    </div>
                                                </div>
                                                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:bg-slate-900 hover:border-slate-700 transition-colors duration-300">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-xl text-white">{brochureData.slide6.timeline[1].title}</h4>
                                                        <span className="text-xs text-zinc-500 font-mono">{brochureData.slide6.timeline[1].time}</span>
                                                    </div>
                                                    <div className="text-sm text-zinc-400 mb-2 font-medium">
                                                        {brochureData.slide6.timeline[1].detailLabel} <span className="text-white font-bold ml-1">{brochureData.slide6.timeline[1].detailValue}</span>
                                                    </div>
                                                    <p className="text-xs text-zinc-500 italic border-l-2 border-slate-700 pl-2">{brochureData.slide6.timeline[1].note}</p>
                                                </div>
                                            </div>

                                            {/* Item 3: Selected */}
                                            <div className="relative pl-20 group opacity-80 hover:opacity-100 transition-opacity">
                                                <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-slate-950 border-4 border-slate-950 z-10 flex items-center justify-center">
                                                    <div className="h-full w-full rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
                                                        <CheckCircle2 className="h-6 w-6" />
                                                    </div>
                                                </div>
                                                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:bg-slate-900 hover:border-slate-700 transition-colors duration-300">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-xl text-white">{brochureData.slide6.timeline[2].title}</h4>
                                                        <span className="text-xs text-zinc-500 font-mono">{brochureData.slide6.timeline[2].time}</span>
                                                    </div>
                                                    <div className="text-sm text-zinc-400 mb-3">
                                                        {brochureData.slide6.timeline[2].detailLabel} <span className="text-white font-semibold">{brochureData.slide6.timeline[2].detailValue}</span>
                                                    </div>
                                                    <div className="text-xs bg-black/40 p-3 rounded-lg border border-slate-800 text-zinc-400">
                                                        <span className="text-green-500 font-bold mr-1">{brochureData.slide6.timeline[2].feedbackLabel}</span> {brochureData.slide6.timeline[2].feedbackValue}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide >

                {/* ==================== SLIDE 6: VERIFICATION & FRAUD ==================== */}
                {/* ==================== SLIDE 7: VERIFICATION & SECURITY ==================== */}
                <ImageSlide bg={brochureData.slide7.bgImage}>
                    <div className="h-full bg-slate-950/90 p-16 flex items-center relative overflow-hidden">
                        {/* Matrix Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                        <div className="grid grid-cols-2 gap-24 w-full z-10 items-center">
                            {/* Left: Copy */}
                            <div className="space-y-8">
                                <SlideHeader icon={ShieldCheck} title1={brochureData.slide7.header.title1} title2={brochureData.slide7.header.title2} color="text-red-500" />
                                <h2 className="text-4xl font-black text-white leading-tight">
                                    {brochureData.slide7.mainTitle.line1} <br />
                                    <span className="text-red-500">{brochureData.slide7.mainTitle.line2}</span>
                                </h2>
                                <p className="text-xl text-zinc-300">
                                    {brochureData.slide7.description}
                                </p>

                                <div className="flex gap-4 pt-8">
                                    <div className="bg-slate-900/80 border border-white/10 p-4 rounded-xl flex-1 flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-xs">
                                            <CreditCard className="w-4 h-4" /> {brochureData.slide7.checks[0].title}
                                        </div>
                                        <div className="text-xs text-zinc-500">{brochureData.slide7.checks[0].desc}</div>
                                    </div>
                                    <div className="bg-slate-900/80 border border-white/10 p-4 rounded-xl flex-1 flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs">
                                            <ScanFace className="w-4 h-4" /> {brochureData.slide7.checks[1].title}
                                        </div>
                                        <div className="text-xs text-zinc-500">{brochureData.slide7.checks[1].desc}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Security Interface */}
                            <div>
                                <div className="bg-black/90 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden w-full max-w-lg mx-auto">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{brochureData.slide7.mockUI.title}</h3>
                                            <div className="text-xs text-red-500 font-mono tracking-widest">{brochureData.slide7.mockUI.id}</div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full border border-red-900 bg-red-950/30 text-red-500 text-[10px] font-bold tracking-wide flex items-center gap-2 shadow-lg shadow-red-900/20">
                                            <ShieldAlert className="w-3 h-3" /> {brochureData.slide7.mockUI.status}
                                        </div>
                                    </div>

                                    {/* Images Row */}
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {/* Govt ID */}
                                        <div>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase mb-3 tracking-wider">{brochureData.slide7.mockUI.govtLabel}</div>
                                            <div className="aspect-square bg-zinc-900 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/5">
                                                <img src={brochureData.slide7.mockUI.govtImage} alt="Govt ID" className="w-full h-full object-cover" />

                                                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-[10px] text-zinc-200 font-bold border border-white/10 shadow-lg">
                                                    {brochureData.slide7.mockUI.govtStatus}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Live AI */}
                                        <div>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase mb-3 tracking-wider">{brochureData.slide7.mockUI.liveLabel}</div>
                                            <div className="aspect-square bg-zinc-900 rounded-2xl relative overflow-hidden flex items-center justify-center border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                                                <img src={brochureData.slide7.mockUI.liveImage} alt="Live AI" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />

                                                <div className="absolute top-4 right-4 flex items-center gap-2">
                                                    <div className="px-3 py-1.5 bg-red-600 text-[10px] text-white font-bold rounded shadow-lg tracking-wide animate-pulse">
                                                        {brochureData.slide7.mockUI.liveStatus}
                                                    </div>
                                                </div>

                                                {/* Scan Brackets Overlay (No Face) */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
                                                    <Scan className="w-32 h-32 text-red-500" strokeWidth={1} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metrics Footer */}
                                    <div className="bg-white/5 rounded-xl p-5 grid grid-cols-3 gap-4 border border-white/5">
                                        <div>
                                            <div className="text-[10px] text-red-400 font-bold uppercase mb-1">{brochureData.slide7.mockUI.metrics.scoreLabel}</div>
                                            <div className="text-3xl font-black text-red-500">{brochureData.slide7.mockUI.metrics.scoreValue}</div>
                                        </div>
                                        <div className="border-l border-white/10 pl-6">
                                            <div className="text-[10px] text-red-400 font-bold uppercase mb-1">{brochureData.slide7.mockUI.metrics.simLabel}</div>
                                            <div className="text-2xl font-bold text-white">{brochureData.slide7.mockUI.metrics.simValue}</div>
                                        </div>
                                        <div className="border-l border-white/10 pl-6 flex flex-col justify-center items-center">
                                            <div className="text-[10px] text-red-400 font-bold uppercase mb-2">{brochureData.slide7.mockUI.metrics.actionLabel}</div>
                                            <div className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer transition-colors shadow-lg shadow-red-900/50 whitespace-nowrap">
                                                {brochureData.slide7.mockUI.metrics.actionValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 8: JOB MANAGEMENT ==================== */}
                <ImageSlide bg={brochureData.slide8.bgImage}>
                    <div className="h-full bg-slate-900/90 p-16 flex items-center relative overflow-hidden">
                        {/* Background Accents */}
                        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-blue-600/5 -skew-y-12 pointer-events-none" />

                        <div className="grid grid-cols-2 gap-20 w-full z-10 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <SlideHeader icon={Briefcase} title1={brochureData.slide8.header.title1} title2={brochureData.slide8.header.title2} />

                                <h2 className="text-4xl font-bold leading-tight text-white mb-6">
                                    {brochureData.slide8.mainTitle.line1} <br />
                                    <span className="text-blue-400">{brochureData.slide8.mainTitle.line2}</span>
                                </h2>
                                {brochureData.slide8.description && (
                                    <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                                        {brochureData.slide8.description}
                                    </p>
                                )}

                                <div className="space-y-4 mb-8">
                                    {brochureData.slide8.features && brochureData.slide8.features.map((feature: any, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                                <CheckCircle2 className="h-3 w-3" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-base">{feature.title}</h4>
                                                <p className="text-sm text-zinc-400">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    <MetricCard label={brochureData.slide8.metrics.activeLabel} value={brochureData.slide8.metrics.activeValue} />
                                    <MetricCard label={brochureData.slide8.metrics.filledLabel} value={brochureData.slide8.metrics.filledValue} />
                                </div>
                            </div>

                            {/* Right Visuals */}
                            <div className="space-y-4">
                                {/* Job Cards */}
                                <div className="space-y-3 relative z-10">
                                    <JobCard title={brochureData.slide8.mockUI.job1.title} status={brochureData.slide8.mockUI.job1.status} applicants={brochureData.slide8.mockUI.job1.desc} />
                                    <div className="scale-[1.02] transform shadow-xl">
                                        <div className="bg-slate-800 rounded-xl p-6 border border-blue-500 shadow-2xl relative">
                                            <div className="absolute -right-3 -top-3 bg-blue-600 text-white rounded-full p-2 shadow-lg animate-bounce">
                                                <Plus className="h-6 w-6" />
                                            </div>
                                            <h4 className="font-bold text-lg mb-4 text-white relative flex items-center gap-2">
                                                {brochureData.slide8.mockUI.assignModal.title}
                                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">{brochureData.slide8.mockUI.assignModal.suggested}</span>
                                            </h4>
                                            <div className="mb-4">
                                                <div className="text-sm font-bold text-blue-400 mb-1">{brochureData.slide8.mockUI.job2.title}</div>
                                                <div className="text-xs text-zinc-400">{brochureData.slide8.mockUI.job2.desc} • {brochureData.slide8.mockUI.job2.applicants}</div>
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                <div className="text-xs font-bold text-zinc-500 uppercase">{brochureData.slide8.mockUI.assignModal.membersTitle}</div>
                                                {/* Member 1 */}
                                                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-white/5">
                                                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">SJ</div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-white">{brochureData.slide8.mockUI.assignModal.members[0].name}</div>
                                                        <div className="text-xs text-indigo-300">{brochureData.slide8.mockUI.assignModal.members[0].role}</div>
                                                    </div>
                                                    <CheckSquare className="h-5 w-5 text-blue-500" />
                                                </div>
                                                {/* Member 2 */}
                                                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-white/5">
                                                    <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold">MR</div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-white">{brochureData.slide8.mockUI.assignModal.members[1].name}</div>
                                                        <div className="text-xs text-pink-300">{brochureData.slide8.mockUI.assignModal.members[1].role}</div>
                                                    </div>
                                                    <div className="h-5 w-5 rounded border border-zinc-600" />
                                                </div>
                                            </div>

                                            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-10 rounded-lg">
                                                {brochureData.slide8.mockUI.assignModal.button}
                                            </Button>
                                        </div>
                                    </div>
                                    <JobCard title={brochureData.slide8.mockUI.job3.title} status={brochureData.slide8.mockUI.job3.status} applicants={brochureData.slide8.mockUI.job3.desc} />
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 9: INTERVIEWS ==================== */}
                <ImageSlide bg={brochureData.slide9.bgImage}>
                    <div className="h-full bg-indigo-950/85 backdrop-blur-sm p-16 flex flex-col relative overflow-hidden">

                        <SlideHeader icon={CalendarDays} title1={brochureData.slide9.header.title1} title2={brochureData.slide9.header.title2} />

                        <div className="flex-1 flex gap-12 items-center z-10">
                            {/* LEFT: Copy */}
                            <div className="w-5/12 space-y-8">
                                <h2 className="text-4xl font-bold leading-tight">
                                    {brochureData.slide9.mainTitle.line1} <br />
                                    {brochureData.slide9.mainTitle.line2}
                                </h2>
                                <p className="text-xl text-indigo-200 font-light leading-relaxed">
                                    {brochureData.slide9.description.main} <span className="text-white font-medium">{brochureData.slide9.description.highlight}</span>.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-indigo-900/40 rounded-xl border border-indigo-500/20">
                                        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300"><Video className="w-5 h-5" /></div>
                                        <div className="text-sm text-indigo-100" dangerouslySetInnerHTML={{ __html: brochureData.slide9.alert.replace(/"/g, '') }} />
                                    </div>
                                    <div className="flex gap-4">
                                        <GlassCard icon={Calendar} title={brochureData.slide9.cards[0]} />
                                        <GlassCard icon={MessageSquare} title={brochureData.slide9.cards[1]} />
                                        <GlassCard icon={AlertCircle} title={brochureData.slide9.cards[2]} />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: UI Visualization */}
                            <div className="w-7/12 relative h-[400px]">
                                {/* Timeline Card */}
                                <div className="absolute right-0 top-0 w-[400px] bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                                    <div className="text-xs text-zinc-500 font-bold uppercase mb-4 tracking-wider">Today's Schedule</div>
                                    <div className="space-y-4">
                                        <div className="flex gap-4 items-start opacity-50">
                                            <div className="text-zinc-500 text-xs font-mono w-12 text-right pt-1">09:00 AM</div>
                                            <div className="flex-1 p-3 rounded-lg bg-slate-800 border border-white/5">
                                                <div className="text-xs font-bold text-zinc-400 line-through">Java Developer L1</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-white text-xs font-mono w-12 text-right pt-1">11:00 AM</div>
                                            <div className="flex-1 p-3 rounded-lg bg-indigo-600/20 border border-indigo-500/50">
                                                <div className="flex justify-between items-start mb-1">
                                                    <div className="text-sm font-bold text-white">React Native Lead L2</div>
                                                    <Badge className="bg-green-500 text-white text-[10px] px-1.5 py-0">Joined</Badge>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-indigo-300">
                                                    <Video className="w-3 h-3" />
                                                    <span>Google Meet</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-zinc-400 text-xs font-mono w-12 text-right pt-1">02:30 PM</div>
                                            <div className="flex-1 p-3 rounded-lg bg-slate-800 border border-white/5">
                                                <div className="text-sm font-bold text-zinc-300">System Design L3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Notification - The Requested Feature */}
                                <div className="absolute -left-4 top-24 w-[320px] bg-white text-slate-900 p-4 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-l-4 border-indigo-600 animate-in slide-in-from-bottom-8 fade-in duration-1000 z-20">
                                    <div className="flex gap-3">
                                        <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Smartphone className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">{brochureData.slide9.floatNotification.title}</div>
                                            <div className="text-xs text-slate-500 leading-tight mt-1">
                                                L2 Round with <strong>Sarah J.</strong> starts in <span className="text-indigo-600 font-bold">5 minutes</span>.
                                            </div>
                                            <div className="mt-3 flex gap-2">
                                                <Button size="sm" className="h-7 text-xs bg-indigo-600 text-white hover:bg-indigo-700 w-full">{brochureData.slide9.floatNotification.buttonPrimary}</Button>
                                                <Button size="sm" variant="outline" className="h-7 text-xs border-slate-200">{brochureData.slide9.floatNotification.buttonSecondary}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 10: CANDIDATE LIFECYCLE (ONBOARDING) ==================== */}
                <ImageSlide bg={brochureData.slide10.bgImage}>
                    <div className="h-full bg-slate-950/90 p-16 relative overflow-hidden flex items-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                        <div className="w-full grid grid-cols-2 gap-20 relative z-10">
                            {/* Left Column: Intro + Start of Journey */}
                            <div className="flex flex-col justify-center space-y-12">
                                <div>
                                    <SlideHeader icon={Check} title1={brochureData.slide10.header.title1} title2={brochureData.slide10.header.title2} />
                                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight mt-8">
                                        {brochureData.slide10.mainTitle.line1} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">{brochureData.slide10.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-xl text-indigo-200 font-light max-w-lg leading-relaxed">
                                        {brochureData.slide10.description}
                                    </p>
                                </div>

                                {/* Stage 1: Screening (The Start) */}
                                <div className="relative group">
                                    <div className="absolute top-1/2 left-full w-20 h-0.5 bg-dashed border-t-2 border-slate-700 hidden xl:block" />
                                    <div className="bg-blue-900/40 backdrop-blur-md border border-blue-500/30 p-6 rounded-2xl relative max-w-md">
                                        <div className="absolute -top-5 left-6 bg-blue-600 rounded-full p-2 border-4 border-slate-900 shadow-lg">
                                            <ScanFace className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mt-3 text-blue-200 mb-4">{brochureData.slide10.stages[0].title}</h3>
                                        <div className="space-y-2">
                                            {brochureData.slide10.stages[0].points.map((pt: string, i: number) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 bg-slate-800/50 p-2 rounded">
                                                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-yellow-400' : 'bg-red-400'}`} /> {pt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: The Flow */}
                            <div className="relative pl-10 border-l-2 border-dashed border-slate-700/50 space-y-8 py-4">
                                {/* Stage 2: Interviews */}
                                <div className="bg-indigo-900/40 backdrop-blur-md border border-indigo-500/30 p-5 rounded-2xl relative group">
                                    <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 bg-indigo-600 rounded-full p-2 border-4 border-slate-900 shadow-lg z-20">
                                        <Video className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-indigo-200 mb-3">{brochureData.slide10.stages[1].title}</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {brochureData.slide10.stages[1].points.map((pt: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] text-zinc-300 bg-slate-800/50 p-2 rounded">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {pt}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stage 3: Offer */}
                                <div className="bg-purple-900/40 backdrop-blur-md border border-purple-500/30 p-5 rounded-2xl relative group">
                                    <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 bg-purple-600 rounded-full p-2 border-4 border-slate-900 shadow-lg z-20">
                                        <Gift className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-purple-200 mb-3">{brochureData.slide10.stages[2].title}</h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {brochureData.slide10.stages[2].points.map((pt: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 bg-slate-800/50 p-2 rounded">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> {pt}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stage 4: Onboarding */}
                                <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 p-5 rounded-2xl relative group">
                                    <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 bg-emerald-600 rounded-full p-2 border-4 border-slate-900 shadow-lg z-20">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-emerald-200 mb-3">{brochureData.slide10.stages[3].title}</h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {brochureData.slide10.stages[3].points.map((pt: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 bg-slate-800/50 p-2 rounded">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {pt}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 11: TEAMS ==================== */}
                <ImageSlide bg={brochureData.slide11.bgImage}>
                    <div className="h-full bg-blue-950/90 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

                        <SlideHeader icon={Users} title1={brochureData.slide11.header.title1} title2={brochureData.slide11.header.title2} />

                        <div className="flex-1 flex gap-12 items-center z-10">
                            {/* LEFT: Copy */}
                            <div className="w-5/12 space-y-6">
                                <h2 className="text-4xl font-bold leading-tight text-white">
                                    {brochureData.slide11.mainTitle.line1} <br />
                                    <span className="text-blue-400">{brochureData.slide11.mainTitle.line2}</span>
                                </h2>
                                <p className="text-xl text-blue-100/80 font-light leading-relaxed">
                                    {brochureData.slide11.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <MetricBoxSmall label={brochureData.slide11.metrics.membersLabel} value={brochureData.slide11.metrics.membersValue} color="text-blue-400" />
                                    <MetricBoxSmall label={brochureData.slide11.metrics.deptLabel} value={brochureData.slide11.metrics.deptValue} color="text-indigo-400" />
                                </div>
                            </div>

                            {/* RIGHT: Visual (Team Card) */}
                            <div className="w-7/12 relative">
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 p-6 rounded-2xl shadow-2xl relative">
                                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-500/20 rounded-lg">
                                                <Building2 className="h-6 w-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-white">{brochureData.slide11.mockUI.teamName}</div>
                                                <div className="text-xs text-blue-300">{brochureData.slide11.mockUI.teamBranch}</div>
                                            </div>
                                        </div>
                                        <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Active</Badge>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                            <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">JD</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-white">{brochureData.slide11.mockUI.members[0].name}</div>
                                                <div className="text-xs text-slate-400">{brochureData.slide11.mockUI.members[0].role}</div>
                                            </div>
                                            <Badge variant="outline" className="border-indigo-500/30 text-indigo-300">Lead</Badge>
                                        </div>
                                        <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">AS</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-white">{brochureData.slide11.mockUI.members[1].name}</div>
                                                <div className="text-xs text-slate-400">{brochureData.slide11.mockUI.members[1].role}</div>
                                            </div>
                                            <Badge variant="outline" className="border-blue-500/30 text-blue-300">Member</Badge>
                                        </div>
                                        <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">MJ</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-bold text-white">{brochureData.slide11.mockUI.members[2].name}</div>
                                                <div className="text-xs text-slate-400">{brochureData.slide11.mockUI.members[2].role}</div>
                                            </div>
                                            <Badge variant="outline" className="border-purple-500/30 text-purple-300">Member</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 12: CLIENTS ==================== */}
                <ImageSlide bg={brochureData.slide12.bgImage}>
                    <div className="h-full bg-slate-950/90 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accent */}
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

                        <SlideHeader icon={Building2} title1={brochureData.slide12.header.title1} title2={brochureData.slide12.header.title2} />

                        <div className="flex-1 flex gap-12 items-center z-10">

                            {/* LEFT: Copy */}
                            <div className="w-6/12 space-y-6">
                                <h2 className="text-4xl font-bold leading-tight text-white">
                                    {brochureData.slide12.mainTitle.line1} <br />
                                    <span className="text-orange-400">{brochureData.slide12.mainTitle.line2}</span>
                                </h2>
                                <p className="text-xl text-orange-100/80 font-light leading-relaxed mb-8">
                                    {brochureData.slide12.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {brochureData.slide12.features && brochureData.slide12.features.map((feature: any, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                                                <CheckCircle2 className="h-3 w-3" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-base">{feature.title}</h4>
                                                <p className="text-sm text-orange-100/60">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm text-slate-300 flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-orange-400" /> {brochureData.slide12.contactOptions[0]}
                                    </div>
                                    <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm text-slate-300 flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-orange-400" /> {brochureData.slide12.contactOptions[1]}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Visual (Client Dashboard) */}
                            <div className="w-6/12 relative">
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-orange-500/30 p-6 rounded-2xl shadow-2xl space-y-6">
                                    {/* Client Header */}
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-4">
                                            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                                                <Building2 className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-white">{brochureData.slide12.mockUI.clientName}</div>
                                                <div className="text-sm text-slate-400 flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" /> {brochureData.slide12.mockUI.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-orange-400">{brochureData.slide12.mockUI.openJobsValue}</div>
                                            <div className="text-[10px] text-slate-500 uppercase font-bold">{brochureData.slide12.mockUI.openJobsLabel}</div>
                                        </div>
                                    </div>

                                    {/* Activity Log */}
                                    <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                                        <div className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
                                            <Briefcase className="h-3 w-3" /> {brochureData.slide12.mockUI.activityLabel}
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                                <span className="text-slate-300">{brochureData.slide12.mockUI.activities[0].title}</span>
                                                <span className="text-xs text-slate-600 ml-auto">{brochureData.slide12.mockUI.activities[0].time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                                                <span className="text-slate-300">{brochureData.slide12.mockUI.activities[1].title}</span>
                                                <span className="text-xs text-slate-600 ml-auto">{brochureData.slide12.mockUI.activities[1].time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                <span className="text-slate-300">{brochureData.slide12.mockUI.activities[2].title}</span>
                                                <span className="text-xs text-slate-600 ml-auto">{brochureData.slide12.mockUI.activities[2].time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 13: ADVERSE FLOWS (Handover & Closing) ==================== */}
                <ImageSlide bg={brochureData.slide13.bgImage}>
                    <div className="h-full bg-slate-950/95 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accent - Red/Warning */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

                        <SlideHeader icon={ShieldAlert} title1={brochureData.slide13.header.title1} title2={brochureData.slide13.header.title2} color="text-red-500" />

                        <div className="flex-1 grid grid-cols-2 gap-16 items-center z-10">

                            {/* LEFT: Copy & Job Closing Alert */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold leading-tight text-white mb-4">
                                        {brochureData.slide13.mainTitle.line1} <span className="text-red-500">{brochureData.slide13.mainTitle.line2}</span> <br />
                                        {brochureData.slide13.mainTitle.line3}
                                    </h2>
                                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                                        {brochureData.slide13.description}
                                    </p>
                                </div>

                                {/* Job Closing Warning Card */}
                                <div className="bg-slate-900/90 backdrop-blur-xl border border-red-500/50 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-red-500/20 rounded-full animate-pulse">
                                            <AlertTriangle className="h-6 w-6 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{brochureData.slide13.closingCard.title}</h4>
                                            <p className="text-sm text-red-400 font-bold mt-1">
                                                {brochureData.slide13.closingCard.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-red-950/30 p-4 rounded-xl border border-red-900/50 mb-4">
                                        <p className="text-sm text-red-200 mb-2">{brochureData.slide13.closingCard.actionsLabel}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {brochureData.slide13.closingCard.badges.map((badge: string, idx: number) => (
                                                <Badge key={idx} variant="outline" className="border-red-500/30 text-red-300 bg-red-500/10">{badge}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button size="sm" variant="destructive" className="w-full bg-red-600 hover:bg-red-700">{brochureData.slide13.closingCard.buttons[0]}</Button>
                                        <Button size="sm" variant="outline" className="w-full border-slate-700 text-slate-300">{brochureData.slide13.closingCard.buttons[1]}</Button>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Employee Handover Protocol */}
                            <div className="relative">
                                {/* Handover Card */}
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                        <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
                                            <UserCheck className="h-6 w-6 text-slate-400" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-white">{brochureData.slide13.handoverCard.title}</div>
                                            <div className="text-sm text-slate-400">{brochureData.slide13.handoverCard.subtitle}</div>
                                        </div>
                                    </div>

                                    {/* Checklist */}
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                            <span className="text-sm text-green-300 font-medium flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4" /> {brochureData.slide13.handoverCard.checks[0].label}
                                            </span>
                                            <span className="text-xs text-green-500 font-bold uppercase">{brochureData.slide13.handoverCard.checks[0].status}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                            <span className="text-sm text-green-300 font-medium flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4" /> {brochureData.slide13.handoverCard.checks[1].label}
                                            </span>
                                            <span className="text-xs text-green-500 font-bold uppercase">{brochureData.slide13.handoverCard.checks[1].status}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700 rounded-xl">
                                            <span className="text-sm text-slate-300 font-medium flex items-center gap-2">
                                                <Loader2 className="h-4 w-4 animate-spin text-blue-400" /> {brochureData.slide13.handoverCard.checks[2].label}
                                            </span>
                                            <span className="text-xs text-blue-400 font-bold uppercase">{brochureData.slide13.handoverCard.checks[2].status}</span>
                                        </div>
                                    </div>

                                    {/* Assignment Transfer */}
                                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                                        <div className="flex justify-between text-xs text-slate-400 mb-2">
                                            <span>{brochureData.slide13.handoverCard.transfer.label}</span>
                                            <span>{brochureData.slide13.handoverCard.transfer.progress}</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                                            <ArrowRight className="h-3 w-3" />
                                            <span>{brochureData.slide13.handoverCard.transfer.ownerLabel}</span>
                                            <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded">{brochureData.slide13.handoverCard.transfer.ownerValue}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge - Client Inactive */}
                                <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-600 shadow-xl max-w-[200px] animate-bounce-slow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Building2 className="h-4 w-4 text-orange-400" />
                                        <span className="text-xs font-bold text-white">{brochureData.slide13.handoverCard.floatingBadge.title}</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400">
                                        {brochureData.slide13.handoverCard.floatingBadge.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 14: ENTERPRISE ECOSYSTEM (Tech Features) ==================== */}
                <ImageSlide bg={brochureData.slide14.bgImage}>
                    <div className="h-full bg-black/90 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Matrix/Grid Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

                        <SlideHeader icon={Cpu} title1={brochureData.slide14.header.title1} title2={brochureData.slide14.header.title2} color="text-cyan-400" />

                        <div className="flex-1 flex gap-16 items-center z-10">

                            {/* LEFT: Core Features List */}
                            <div className="w-5/12 space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold leading-tight text-white mb-4">
                                        {brochureData.slide14.mainTitle.line1} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{brochureData.slide14.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                                        {brochureData.slide14.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
                                        <div className="p-2 bg-cyan-500/20 rounded-lg"><Lock className="h-6 w-6 text-cyan-400" /></div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide14.features[0].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide14.features[0].desc}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                                        <div className="p-2 bg-purple-500/20 rounded-lg"><Menu className="h-6 w-6 text-purple-400" /></div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide14.features[1].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide14.features[1].desc}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all">
                                        <div className="p-2 bg-pink-500/20 rounded-lg"><Activity className="h-6 w-6 text-pink-400" /></div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide14.features[2].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide14.features[2].desc}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Visual Ecosystem Visualization */}
                            <div className="w-7/12 relative h-[500px] flex items-center justify-center">
                                {/* Central Security Core */}
                                <div className="absolute z-20 bg-black/80 backdrop-blur-xl p-8 rounded-full border border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col items-center justify-center w-64 h-64 text-center">
                                    <Fingerprint className="h-16 w-16 text-cyan-400 mb-4 animate-pulse" />
                                    <div className="text-2xl font-bold text-white">{brochureData.slide14.centerCore.title}</div>
                                    <div className="text-xs text-cyan-500 mt-2 font-mono">{brochureData.slide14.centerCore.status}</div>
                                </div>

                                {/* Orbiting Cards - Top Right (Auth) */}
                                <div className="absolute top-10 right-10 z-10 bg-slate-900/90 p-4 rounded-xl border border-white/10 w-48 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Key className="h-4 w-4 text-yellow-400" />
                                        <span className="font-bold text-sm">{brochureData.slide14.orbitCards.auth.title}</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 leading-tight">
                                        {brochureData.slide14.orbitCards.auth.desc}
                                    </p>
                                </div>

                                {/* Orbiting Cards - Bottom Right (Notifications) */}
                                <div className="absolute bottom-20 right-0 z-10 bg-slate-900/90 p-4 rounded-xl border border-white/10 w-56 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Bell className="h-4 w-4 text-green-400" />
                                        <span className="font-bold text-sm">{brochureData.slide14.orbitCards.notifications.title}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] bg-white/5 p-1 px-2 rounded flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                                            <span>{brochureData.slide14.orbitCards.notifications.items[0]}</span>
                                        </div>
                                        <div className="text-[10px] bg-white/5 p-1 px-2 rounded flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span>{brochureData.slide14.orbitCards.notifications.items[1]}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Orbiting Cards - Left (Analytics) */}
                                <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-slate-900/90 p-4 rounded-xl border border-white/10 w-48 shadow-xl animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BarChart3 className="h-4 w-4 text-orange-400" />
                                        <span className="font-bold text-sm">{brochureData.slide14.orbitCards.analytics.title}</span>
                                    </div>
                                    <div className="h-12 flex items-end justify-between gap-1 px-1">
                                        <div className="w-2 bg-orange-500/20 h-4 rounded-t relative"><div className="absolute bottom-0 w-full bg-orange-500 h-2 rounded-t"></div></div>
                                        <div className="w-2 bg-orange-500/20 h-8 rounded-t relative"><div className="absolute bottom-0 w-full bg-orange-500 h-6 rounded-t"></div></div>
                                        <div className="w-2 bg-orange-500/20 h-6 rounded-t relative"><div className="absolute bottom-0 w-full bg-orange-500 h-3 rounded-t"></div></div>
                                        <div className="w-2 bg-orange-500/20 h-10 rounded-t relative"><div className="absolute bottom-0 w-full bg-orange-500 h-8 rounded-t"></div></div>
                                    </div>
                                </div>

                                {/* Connecting Lines (Decorative) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="cyan" strokeWidth="1" />
                                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="purple" strokeWidth="1" />
                                    <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="orange" strokeWidth="1" />
                                    <circle cx="50%" cy="50%" r="150" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
                                </svg>

                            </div>

                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 15: LEAVE MANAGEMENT (Detailed Redesign) ==================== */}
                <ImageSlide bg={brochureData.slide15.bgImage}>
                    <div className="h-full bg-slate-950/95 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accents - Green/Natural */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-900/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

                        <SlideHeader icon={CalendarDays} title1={brochureData.slide15.header.title1} title2={brochureData.slide15.header.title2} color="text-green-400" />

                        <div className="flex-1 grid grid-cols-2 gap-16 items-center z-10">

                            {/* LEFT: Employee View & Stats */}
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-4xl font-bold leading-tight text-white mb-2">
                                        {brochureData.slide15.mainTitle.line1} <span className="text-green-400">{brochureData.slide15.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 font-light">
                                        {brochureData.slide15.description}
                                    </p>
                                </div>

                                {/* Mock Leave Dashboard Card */}
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-2">
                                            <div className="p-2 bg-green-500/20 rounded-lg text-xs font-bold text-green-400 flex flex-col items-center">
                                                <span>{brochureData.slide15.dashboard.stats[0].value}</span><span>{brochureData.slide15.dashboard.stats[0].label}</span>
                                            </div>
                                            <div className="p-2 bg-amber-500/20 rounded-lg text-xs font-bold text-amber-400 flex flex-col items-center">
                                                <span>{brochureData.slide15.dashboard.stats[1].value}</span><span>{brochureData.slide15.dashboard.stats[1].label}</span>
                                            </div>
                                            <div className="p-2 bg-blue-500/20 rounded-lg text-xs font-bold text-blue-400 flex flex-col items-center">
                                                <span>{brochureData.slide15.dashboard.stats[2].value}</span><span>{brochureData.slide15.dashboard.stats[2].label}</span>
                                            </div>
                                        </div>
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs h-8">
                                            <Calendar className="h-3 w-3 mr-1" /> {brochureData.slide15.dashboard.button}
                                        </Button>
                                    </div>

                                    {/* Mock Form Visual */}
                                    <div className="space-y-3 opacity-80 pointer-events-none">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-8 bg-slate-800 rounded border border-slate-700 flex items-center px-2 text-xs text-slate-400">{brochureData.slide15.dashboard.mockItems[0]}</div>
                                            <div className="h-8 bg-slate-800 rounded border border-slate-700 flex items-center px-2 text-xs text-slate-400">{brochureData.slide15.dashboard.mockItems[1]}</div>
                                        </div>
                                        <div className="h-8 bg-slate-800 rounded border border-slate-700 flex items-center px-2 text-xs text-slate-400">
                                            <Calendar className="h-3 w-3 mr-2 opacity-50" /> {brochureData.slide15.dashboard.mockItems[2]}
                                        </div>
                                        <div className="h-16 bg-slate-800 rounded border border-slate-700 p-2 text-xs text-slate-400">
                                            {brochureData.slide15.dashboard.mockItems[3]}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Manager Action Center */}
                            <div className="relative">
                                {/* Manager Approval Card */}
                                <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl relative z-10">
                                    <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">JD</div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{brochureData.slide15.managerCard.userName}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide15.managerCard.userRole}</div>
                                        </div>
                                        <Badge className="ml-auto bg-amber-500/10 text-amber-400 border-amber-500/20">{brochureData.slide15.managerCard.badge}</Badge>
                                    </div>

                                    <div className="space-y-2 mb-6 text-sm">
                                        <div className="flex justify-between text-slate-300"><span className="text-slate-500">{brochureData.slide15.managerCard.details[0].label}</span> {brochureData.slide15.managerCard.details[0].value}</div>
                                        <div className="flex justify-between text-slate-300"><span className="text-slate-500">{brochureData.slide15.managerCard.details[1].label}</span> {brochureData.slide15.managerCard.details[1].value}</div>
                                        <div className="bg-slate-950 p-3 rounded border border-white/5 text-xs text-slate-300 italic">
                                            {brochureData.slide15.managerCard.details[2].note}
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button className="flex-1 bg-green-600 hover:bg-green-700 h-9 text-xs">
                                            <CheckCircle2 className="h-3 w-3 mr-1" /> {brochureData.slide15.managerCard.actions[0]}
                                        </Button>
                                        <Button variant="destructive" className="flex-1 bg-red-600/80 hover:bg-red-700 h-9 text-xs">
                                            <XCircle className="h-3 w-3 mr-1" /> {brochureData.slide15.managerCard.actions[1]}
                                        </Button>
                                    </div>
                                </div>

                                {/* Rejection Modal Overlay (Visual) */}
                                <div className="absolute -bottom-10 -right-2 w-64 bg-slate-800 border-red-500/30 border p-4 rounded-xl shadow-2xl transform rotate-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                                    <div className="text-xs font-bold text-red-400 mb-2 flex items-center gap-1">
                                        <XCircle className="h-3 w-3" /> {brochureData.slide15.overlays.rejection.title}
                                    </div>
                                    <div className="h-16 bg-slate-950 rounded border border-red-900/30 p-2 text-xs text-slate-500 mb-2">
                                        {brochureData.slide15.overlays.rejection.text}
                                    </div>
                                    <Button size="sm" variant="ghost" className="w-full text-red-400 text-xs h-6 hover:bg-red-950">{brochureData.slide15.overlays.rejection.button}</Button>
                                </div>

                                {/* Success Toast (Visual) */}
                                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-bounce duration-[2000ms]">
                                    <CheckCircle2 className="h-3 w-3 inline mr-1" /> {brochureData.slide15.overlays.toast}
                                </div>
                            </div>

                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 16: PRODUCTIVITY & TOOLS (Refined) ==================== */}
                <ImageSlide bg={brochureData.slide16.bgImage}>
                    <div className="h-full bg-slate-950/95 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accents & Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

                        <div className="flex-1 grid grid-cols-2 gap-16 items-center z-10 w-full max-w-7xl mx-auto">

                            {/* LEFT: Copy & Quick Actions */}
                            <div className="space-y-12">
                                <div>
                                    <SlideHeader icon={LayoutGrid} title1={brochureData.slide16.header.title1} title2={brochureData.slide16.header.title2} color="text-indigo-400" />
                                    <h2 className="text-4xl font-bold leading-tight text-white mt-6 mb-2">
                                        {brochureData.slide16.mainTitle.line1} <span className="text-indigo-400">{brochureData.slide16.mainTitle.line2}</span>
                                    </h2>
                                    <p className="text-xl text-indigo-200/80 font-light leading-relaxed">
                                        {brochureData.slide16.description}
                                    </p>
                                </div>

                                {/* Quick Actions (Left Aligned) */}
                                <div className="flex gap-8 items-end">
                                    {/* Action 1 */}
                                    <div className="group flex flex-col items-center gap-4">
                                        <div className="h-20 w-20 rounded-2xl bg-indigo-600/20 border-2 border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-indigo-900/30 backdrop-blur-md">
                                            <Briefcase className="h-8 w-8 text-indigo-300 group-hover:text-white" />
                                        </div>
                                        <span className="text-base font-medium text-indigo-200 opacity-60 group-hover:opacity-100 transition-opacity">{brochureData.slide16.actions[0].label}</span>
                                    </div>
                                    {/* Center Action (Prominent) */}
                                    <div className="group flex flex-col items-center gap-4 -mb-2">
                                        <div className="h-24 w-24 rounded-3xl bg-white text-indigo-950 flex items-center justify-center shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)] group-hover:scale-110 transition-all duration-300 border-4 border-indigo-100 z-20">
                                            <Plus className="h-12 w-12 animate-pulse" />
                                        </div>
                                        <span className="text-lg font-bold text-white shadow-black drop-shadow-lg">{brochureData.slide16.actions[1].label}</span>
                                    </div>
                                    {/* Action 3 */}
                                    <div className="group flex flex-col items-center gap-4">
                                        <div className="h-20 w-20 rounded-2xl bg-indigo-600/20 border-2 border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-indigo-900/30 backdrop-blur-md">
                                            <UserPlus className="h-8 w-8 text-indigo-300 group-hover:text-white" />
                                        </div>
                                        <span className="text-base font-medium text-indigo-200 opacity-60 group-hover:opacity-100 transition-opacity">{brochureData.slide16.actions[2].label}</span>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Orbiting Widgets (Bento Grid) */}
                            <div className="grid grid-cols-2 gap-6 w-full">

                                {/* Widget 1: Task Master (Full Width) */}
                                <div className="col-span-2 bg-slate-900/60 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-6 hover:border-indigo-400 group transition-all duration-300 hover:bg-slate-900/80 shadow-2xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3 text-indigo-300 group-hover:text-white transition-colors">
                                            <CheckSquare className="h-5 w-5" />
                                            <span className="text-lg font-bold">{brochureData.slide16.widgets.taskMaster.title}</span>
                                        </div>
                                    </div>
                                    <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 mb-4 shadow-inner">
                                        <div className="text-base font-medium text-white mb-1">{brochureData.slide16.widgets.taskMaster.taskTitle}</div>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Clock className="h-3 w-3" /> {brochureData.slide16.widgets.taskMaster.time}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                                        <span>{brochureData.slide16.widgets.taskMaster.footer}</span>
                                        <div className="flex -space-x-2">
                                            <div className="h-6 w-6 rounded-full bg-indigo-500 border-2 border-slate-900 ring-2 ring-slate-900/50" />
                                            <div className="h-6 w-6 rounded-full bg-purple-500 border-2 border-slate-900 ring-2 ring-slate-900/50" />
                                        </div>
                                    </div>
                                </div>

                                {/* Widget 2: Smart Calendar */}
                                <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-6 hover:border-indigo-400 group transition-all duration-300 hover:bg-slate-900/80 shadow-2xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3 text-indigo-300 group-hover:text-white transition-colors">
                                            <CalendarDays className="h-5 w-5" />
                                            <span className="text-lg font-bold">{brochureData.slide16.widgets.calendar.title}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex gap-2 items-center group/item hover:translate-x-1 transition-transform">
                                            <div className="text-xs font-mono text-slate-400 w-8">{brochureData.slide16.widgets.calendar.events[0].time}</div>
                                            <div className="h-8 flex-1 bg-green-500/10 border-l-2 border-green-500 rounded-r-md px-2 flex items-center text-xs font-medium text-green-300 shadow-sm truncate">
                                                {brochureData.slide16.widgets.calendar.events[0].title}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center group/item hover:translate-x-1 transition-transform">
                                            <div className="text-xs font-mono text-slate-400 w-8">{brochureData.slide16.widgets.calendar.events[1].time}</div>
                                            <div className="h-8 flex-1 bg-blue-500/10 border-l-2 border-blue-500 rounded-r-md px-2 flex items-center text-xs font-medium text-blue-300 shadow-sm truncate">
                                                {brochureData.slide16.widgets.calendar.events[1].title}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center group/item hover:translate-x-1 transition-transform">
                                            <div className="text-xs font-mono text-slate-400 w-8">{brochureData.slide16.widgets.calendar.events[2].time}</div>
                                            <div className="h-8 flex-1 bg-orange-500/10 border-l-2 border-orange-500 rounded-r-md px-2 flex items-center text-xs font-medium text-orange-300 shadow-sm truncate">
                                                {brochureData.slide16.widgets.calendar.events[2].title}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Widget 3: Theme Support */}
                                <div className="bg-slate-900/60 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-6 hover:border-indigo-400 group transition-all duration-300 hover:bg-slate-900/80 shadow-2xl flex flex-col justify-between">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3 text-indigo-300 group-hover:text-white transition-colors">
                                            <Moon className="h-5 w-5" />
                                            <span className="text-lg font-bold">{brochureData.slide16.widgets.theme.title}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-xs font-bold text-white">{brochureData.slide16.widgets.theme.label}</span>
                                        <div className="w-10 h-5 bg-indigo-600 rounded-full relative shadow-inner cursor-pointer">
                                            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md" />
                                        </div>
                                    </div>

                                    <div className="text-xs text-slate-400 font-medium bg-slate-950/50 p-2 rounded-lg border border-white/5">
                                        {brochureData.slide16.widgets.theme.desc}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 17: HIERARCHICAL REPORTS ==================== */}
                <ImageSlide bg={brochureData.slide17.bgImage}>
                    <div className="h-full bg-slate-950/90 p-16 flex flex-col relative overflow-hidden">

                        {/* Background Accents */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                        <SlideHeader icon={BarChart3} title1={brochureData.slide17.header.title1} title2={brochureData.slide17.header.title2} color="text-purple-400" />

                        <div className="flex-1 flex gap-16 items-center z-10">

                            {/* LEFT: Copy */}
                            <div className="w-5/12 space-y-8">
                                <h2 className="text-4xl font-bold leading-tight text-white mb-4">
                                    {brochureData.slide17.mainTitle.line1} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{brochureData.slide17.mainTitle.line2}</span>
                                </h2>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    {brochureData.slide17.description}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            <Filter className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide17.features[0].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide17.features[0].desc}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                                            <Download className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide17.features[1].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide17.features[1].desc}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Visual Mockup */}
                            <div className="w-7/12 relative h-[500px] flex items-center">
                                {/* The Glass Terminal Window */}
                                <div className="w-full bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col transform rotate-1 hover:rotate-0 transition-all duration-700">

                                    {/* Toolbar */}
                                    <div className="bg-slate-800/50 p-4 border-b border-white/5 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/20 text-[10px]"><Users className="w-3 h-3 mr-1" /> {brochureData.slide17.mockUI.headerBadges[0]}</Badge>
                                            <Button size="sm" className="h-6 text-[10px] bg-white text-black hover:bg-zinc-200">
                                                <Download className="w-3 h-3 mr-1" /> {brochureData.slide17.mockUI.headerBadges[1]}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Grid Header */}
                                    <div className="grid grid-cols-12 gap-2 p-3 bg-slate-950 text-[10px] font-bold text-zinc-500 uppercase tracking-wider border-b border-white/5">
                                        <div className="col-span-5 pl-2">{brochureData.slide17.mockUI.gridHeader[0]}</div>
                                        <div className="col-span-2 text-center">{brochureData.slide17.mockUI.gridHeader[1]}</div>
                                        <div className="col-span-2 text-center text-blue-400">{brochureData.slide17.mockUI.gridHeader[2]}</div>
                                        <div className="col-span-3 text-right pr-2">{brochureData.slide17.mockUI.gridHeader[3]}</div>
                                    </div>

                                    {/* Grid Body */}
                                    <div className="p-2 space-y-1">

                                        {/* Row 1: Manager (Root) */}
                                        <div className="grid grid-cols-12 gap-2 p-3 bg-slate-800/30 rounded-lg items-center border border-white/5">
                                            <div className="col-span-5 flex items-center gap-3">
                                                <ChevronDown className="w-4 h-4 text-purple-400" />
                                                <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xs ring-2 ring-purple-500/10">JD</div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">{brochureData.slide17.mockUI.rows[0].name}</div>
                                                    <Badge className="bg-purple-500/20 text-purple-300 text-[9px] hover:bg-purple-500/30 px-1 py-0 h-4">{brochureData.slide17.mockUI.rows[0].role}</Badge>
                                                </div>
                                            </div>
                                            <div className="col-span-2 text-center font-mono text-white">{brochureData.slide17.mockUI.rows[0].sub}</div>
                                            <div className="col-span-2 text-center font-mono text-blue-400 font-bold bg-blue-500/10 rounded py-0.5">{brochureData.slide17.mockUI.rows[0].joined}</div>
                                            <div className="col-span-3 flex items-center gap-2 justify-end">
                                                <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500 w-[75%]" />
                                                </div>
                                                <span className="text-emerald-400 font-bold text-xs">{brochureData.slide17.mockUI.rows[0].pct}</span>
                                            </div>
                                        </div>

                                        {/* Connecting Line */}
                                        <div className="pl-6 ml-3 border-l-2 border-slate-700 space-y-1 pb-2">

                                            {/* Row 2: Team Lead */}
                                            <div className="relative">
                                                <div className="absolute -left-[26px] top-1/2 w-6 h-0.5 bg-slate-700" />
                                                <div className="grid grid-cols-12 gap-2 p-2 bg-slate-800/20 rounded-lg items-center hover:bg-slate-800/40 transition-colors">
                                                    <div className="col-span-5 flex items-center gap-3">
                                                        <ChevronDown className="w-3 h-3 text-blue-400 ml-1" />
                                                        <div className="h-7 w-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold text-[10px]">AS</div>
                                                        <div>
                                                            <div className="text-xs font-bold text-zinc-200">{brochureData.slide17.mockUI.rows[1].name}</div>
                                                            <Badge className="bg-blue-500/20 text-blue-300 text-[8px] px-1 py-0 h-3.5">{brochureData.slide17.mockUI.rows[1].role}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center text-xs font-mono text-zinc-300">{brochureData.slide17.mockUI.rows[1].sub}</div>
                                                    <div className="col-span-2 text-center text-xs font-mono text-blue-400 font-bold">{brochureData.slide17.mockUI.rows[1].joined}</div>
                                                    <div className="col-span-3 flex items-center gap-2 justify-end">
                                                        <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                                                            <div className="h-full bg-emerald-500 w-[82%]" />
                                                        </div>
                                                        <span className="text-emerald-400 font-bold text-[10px]">{brochureData.slide17.mockUI.rows[1].pct}</span>
                                                    </div>
                                                </div>

                                                {/* Connecting Line Inner */}
                                                <div className="pl-6 ml-3 border-l-2 border-slate-800 space-y-1 mt-1 pt-1">
                                                    {/* Row 3: Recruiter */}
                                                    <div className="relative">
                                                        <div className="absolute -left-[26px] top-1/2 w-6 h-0.5 bg-slate-800" />
                                                        <div className="grid grid-cols-12 gap-2 p-2 rounded-lg items-center hover:bg-white/5 transition-colors">
                                                            <div className="col-span-5 flex items-center gap-3 pl-2">
                                                                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-[9px]">MR</div>
                                                                <div>
                                                                    <div className="text-xs font-bold text-zinc-300">{brochureData.slide17.mockUI.rows[2].name}</div>
                                                                    <div className="text-[9px] text-zinc-500">{brochureData.slide17.mockUI.rows[2].role}</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-2 text-center text-xs font-mono text-zinc-400">{brochureData.slide17.mockUI.rows[2].sub}</div>
                                                            <div className="col-span-2 text-center text-xs font-mono text-blue-400">{brochureData.slide17.mockUI.rows[2].joined}</div>
                                                            <div className="col-span-3 text-right text-[10px] text-zinc-500">{brochureData.slide17.mockUI.rows[2].conv}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Footer Summary */}
                                    <div className="bg-slate-950 p-3 border-t border-white/5 flex gap-4 text-[10px] text-zinc-500 font-mono">
                                        <span>{brochureData.slide17.mockUI.footer}</span>
                                        <span>{brochureData.slide17.mockUI.sync}</span>
                                    </div>
                                </div>

                                {/* Floating Filter Tooltip */}
                                <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce-slow">
                                    <Filter className="w-3 h-3 text-purple-600" />
                                    <span className="text-xs font-bold">{brochureData.slide17.mockUI.filterTooltip}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 18: MASTER DATA (Refined) ==================== */}
                <ImageSlide bg={brochureData.slide18.bgImage}>
                    <div className="h-full bg-slate-900/95 p-16 flex flex-col relative overflow-hidden">

                        {/* Matrix Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

                        <SlideHeader icon={Settings} title1={brochureData.slide18.header.title1} title2={brochureData.slide18.header.title2} color="text-cyan-400" />

                        <div className="flex-1 flex gap-16 items-center z-10">

                            {/* LEFT: Features List */}
                            <div className="w-5/12 space-y-8">
                                <h2 className="text-4xl font-bold leading-tight text-white mb-4">
                                    {brochureData.slide18.mainTitle.line1} <br />
                                    <span className="text-cyan-400">{brochureData.slide18.mainTitle.line2}</span>
                                </h2>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    {brochureData.slide18.description}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <Database className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide18.features[0].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide18.features[0].desc}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{brochureData.slide18.features[1].title}</div>
                                            <div className="text-xs text-slate-400">{brochureData.slide18.features[1].desc}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Visual Dashboard Mockup */}
                            <div className="w-7/12 relative h-[500px]">
                                {/* Main Dashboard Card */}
                                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 shadow-2xl flex flex-col gap-6">

                                    {/* Top Row: Master Data Tiles */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2 group hover:bg-slate-800 transition-colors">
                                            <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div className="font-bold text-white text-sm">{brochureData.slide18.mockUI.tiles[0].title}</div>
                                            <div className="text-[10px] text-zinc-500 bg-black/40 px-2 py-0.5 rounded-full">{brochureData.slide18.mockUI.tiles[0].count}</div>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2 group hover:bg-slate-800 transition-colors">
                                            <div className="h-10 w-10 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div className="font-bold text-white text-sm">{brochureData.slide18.mockUI.tiles[1].title}</div>
                                            <div className="text-[10px] text-zinc-500 bg-black/40 px-2 py-0.5 rounded-full">{brochureData.slide18.mockUI.tiles[1].count}</div>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2 group hover:bg-slate-800 transition-colors">
                                            <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <div className="font-bold text-white text-sm">{brochureData.slide18.mockUI.tiles[2].title}</div>
                                            <div className="text-[10px] text-zinc-500 bg-black/40 px-2 py-0.5 rounded-full">{brochureData.slide18.mockUI.tiles[2].count}</div>
                                        </div>
                                    </div>

                                    {/* Bottom Section: Permission Matrix Mockup */}
                                    <div className="flex-1 bg-slate-950/50 rounded-xl border border-white/5 overflow-hidden flex flex-col">
                                        <div className="p-3 border-b border-white/5 flex justify-between items-center">
                                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                                <Layers className="w-3 h-3" /> {brochureData.slide18.mockUI.matrixTitle}
                                            </span>
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <div className="w-2 h-2 rounded-full bg-slate-700" />
                                            </div>
                                        </div>

                                        {/* Matrix Header */}
                                        <div className="grid grid-cols-5 p-2 bg-slate-900 border-b border-white/5 text-[10px] text-zinc-500 font-bold uppercase text-center">
                                            <div className="col-span-2 text-left pl-2">{brochureData.slide18.mockUI.matrixHeaders[0]}</div>
                                            <div>{brochureData.slide18.mockUI.matrixHeaders[1]}</div>
                                            <div>{brochureData.slide18.mockUI.matrixHeaders[2]}</div>
                                            <div>{brochureData.slide18.mockUI.matrixHeaders[3]}</div>
                                        </div>

                                        {/* Matrix Rows */}
                                        <div className="p-2 space-y-1">
                                            {/* Row 1 */}
                                            <div className="grid grid-cols-5 items-center p-2 rounded hover:bg-white/5 transition-colors">
                                                <div className="col-span-2 text-xs font-medium text-white flex items-center gap-2">
                                                    <Users className="w-3 h-3 text-blue-400" /> {brochureData.slide18.mockUI.matrixRows[0].module}
                                                </div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                            </div>
                                            {/* Row 2 */}
                                            <div className="grid grid-cols-5 items-center p-2 rounded hover:bg-white/5 transition-colors">
                                                <div className="col-span-2 text-xs font-medium text-white flex items-center gap-2">
                                                    <BarChart3 className="w-3 h-3 text-purple-400" /> {brochureData.slide18.mockUI.matrixRows[1].module}
                                                </div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                                <div className="flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-slate-700" /></div>
                                            </div>
                                            {/* Row 3 */}
                                            <div className="grid grid-cols-5 items-center p-2 rounded hover:bg-white/5 transition-colors">
                                                <div className="col-span-2 text-xs font-medium text-white flex items-center gap-2">
                                                    <Settings className="w-3 h-3 text-cyan-400" /> {brochureData.slide18.mockUI.matrixRows[2].module}
                                                </div>
                                                <div className="flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                                <div className="flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-slate-700" /></div>
                                                <div className="flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-slate-700" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 19: TECHNOLOGY STACK ==================== */}
                <ImageSlide bg={brochureData.slide19.bgImage}>
                    <div className="h-full bg-slate-900/90 p-16 flex flex-col justify-center relative overflow-hidden">

                        {/* Tech Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="text-center mb-16 relative z-10">
                            <h2 className="text-6xl font-black text-white mb-6 tracking-tight">
                                {brochureData.slide19.mainTitle.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{brochureData.slide19.mainTitle.line2}</span>
                            </h2>
                            <p className="text-2xl text-slate-400 font-light max-w-3xl mx-auto">
                                {brochureData.slide19.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-8 relative z-10">
                            {/* React */}
                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Code2 className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[0].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[0].desc}</p>
                            </div>

                            {/* Spring Boot */}
                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-green-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Server className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[1].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[1].desc}</p>
                            </div>

                            {/* PostgreSQL */}
                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Database className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[2].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[2].desc}</p>
                            </div>

                            {/* GCP */}
                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Cloud className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[3].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[3].desc}</p>
                            </div>
                        </div>

                    </div>
                </ImageSlide>

            </div >

            <style>
                {`
          @media print {
             @page { size: landscape; margin: 0; }
             body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        `}
            </style>
        </div >
    );
};

// --- Components ---

const ImageSlide = ({ bg, children }: any) => (
    <div
        className="w-full aspect-[297/210] overflow-hidden relative shadow-2xl bg-cover bg-center print:break-after-page"
        style={{ backgroundImage: `url(${bg})` }}
    >
        {/* Top Right: Logos grouped */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            {/* R Logo Component (Circular) */}
            <div className="relative w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden shrink-0 ">
                <div
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay animate-[shimmer_2s_infinite]"
                    style={{
                        background: 'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.8) 50%, transparent 65%)',
                        backgroundSize: '200% 100%',
                    }}
                />
                <span className="relative z-10 text-white font-bold text-lg">R</span>
            </div>
        </div>

        {/* Bottom Left: Brand Logo */}
        <div className="absolute bottom-6 left-6 z-50">
            <img src="/unique_hire_logo.jpg" alt="UniqueHire" className="h-10 object-contain rounded-md bg-[#fefefe] px-2  shadow-lg backdrop-blur-sm" style={{ paddingBottom: '6px' }} />
        </div>

        {children}
    </div>
);

const SlideHeader = ({ icon: Icon, title1, title2, color = "text-blue-500" }: any) => (
    <div className="flex items-center gap-4">
        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg">
            <Icon className={`h-8 w-8 ${color}`} />
        </div>
        <div className="flex flex-col justify-center">
            {title1 && <h3 className="text-xl font-black text-white uppercase tracking-wider leading-none">{title1}</h3>}
            <h3 className="text-xl font-black text-white uppercase tracking-wider leading-none">{title2}</h3>
        </div>
    </div>
);

const MetricBox = ({ label, value }: any) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
        <div className="text-4xl font-bold text-white mb-2">{value}</div>
        <div className="text-xs text-zinc-400 uppercase tracking-widest">{label}</div>
    </div>
);

const MetricBoxSmall = ({ label, value, color }: any) => (
    <div className="bg-slate-800 p-2 rounded border border-slate-700 text-center">
        <div className={`text-xl font-bold ${color}`}>{value}</div>
        <div className="text-[10px] text-zinc-500 uppercase">{label}</div>
    </div>
);

const FeatureStep = ({ step, title, desc, icon: Icon }: any) => (
    <div className="text-left bg-white/5 p-6 rounded-2xl border border-white/10 relative">
        <div className="absolute -top-4 -right-4 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white">
            {step}
        </div>
        <Icon className="h-8 w-8 text-blue-400 mb-4" />
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-zinc-400">{desc}</p>
    </div>
);

const MetricCard = ({ label, value }: any) => (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex-1 min-w-[200px]">
        <div className="text-4xl font-bold text-white mb-2 tracking-tight">{value}</div>
        <div className="text-sm text-zinc-400 font-medium">{label}</div>
    </div>
);

const JobCard = ({ title, status, applicants }: any) => (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
        <div>
            <div className="font-bold text-sm">{title}</div>
            <div className="text-xs text-zinc-500">{applicants} Applicants</div>
        </div>
        <span className="text-[10px] px-2 py-1 bg-white/10 rounded uppercase font-bold">{status}</span>
    </div>
);

const GlassCard = ({ icon: Icon, title }: any) => (
    <div className="w-40 h-40 flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm gap-4">
        <Icon className="h-10 w-10 text-white" />
        <span className="text-sm font-bold">{title}</span>
    </div>
);

const StepRow = ({ step, status }: any) => (
    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
        <span className="text-zinc-300">{step}</span>
        <span className={`text-xs ${status === 'Done' ? 'text-green-400' : 'text-zinc-500'}`}>{status}</span>
    </div>
);

const ReportItem = ({ title, desc }: any) => (
    <div className="p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-zinc-500">{desc}</p>
    </div>
);



export default ApplicationBrochure;
