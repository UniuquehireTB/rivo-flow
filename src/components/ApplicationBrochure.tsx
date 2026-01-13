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
        <div className="min-h-screen bg-black text-white p-8 print:p-0 print:bg-white font-sans selection:bg-blue-500 selection:text-white">

            <div className="max-w-[297mm] mx-auto space-y-0 print:space-y-0 print:w-full">

                {/* ==================== SLIDE 1: COVER (Brand) ==================== */}
                <ImageSlide bg={brochureData.slide1.bgImage}>
                    <div className="h-full flex flex-col justify-center items-center text-center relative z-10 bg-black/60 backdrop-blur-sm">
                        <div className="space-y-4">
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

                {/* ==================== SLIDE: ROLE ACCESS ==================== */}
                <ImageSlide bg={brochureData.slideRoleAccess.bgImage}>
                    <div className="h-full bg-slate-900/95 p-16 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                        <SlideHeader icon={Shield} title1={brochureData.slideRoleAccess.header.title1} title2={brochureData.slideRoleAccess.header.title2} color="text-rose-500" />

                        <div className="flex-1 grid grid-cols-4 gap-8 items-center z-10">
                            {brochureData.slideRoleAccess.roleContent.map((role: any, idx: number) => {
                                const Icon = idx === 0 ? Shield : idx === 1 ? Briefcase : idx === 2 ? Users : UserPlus;
                                return (
                                    <div key={idx} className="h-full max-h-[500px] flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-10 h-10 shrink-0 rounded-lg ${role.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className={`text-lg font-black uppercase tracking-wider ${role.color}`}>
                                                {role.role}
                                            </h3>
                                        </div>

                                        <div className="flex-1 overflow-y-auto pr-2 pl-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                            <div className="space-y-3">
                                                {role.description.map((item: string, i: number) => (
                                                    <div key={i} className="flex gap-3 items-start relative group/item">
                                                        <div className={`w-1.5 h-1.5 mt-2 shrink-0 rounded-sm ${role.bg} shadow-[0_0_8px_currentColor]`} />
                                                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={`h-1 w-12 mt-6 rounded-full ${role.bg}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 2: COMMAND CENTER ==================== */}
                <ImageSlide bg={brochureData.slide2.bgImage}>
                    <div className="h-full grid grid-cols-12 bg-gradient-to-r from-black via-slate-950/95 to-slate-900/50">
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

                        <div className="col-span-8 relative p-8 flex items-center">
                            <div className="w-full bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-6 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
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

                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    <MetricBoxSmall label="Applications" value={brochureData.slide2.mockUI.metrics.applications} color="text-blue-400" />
                                    <MetricBoxSmall label="Selected" value={brochureData.slide2.mockUI.metrics.selected} color="text-green-400" />
                                    <MetricBoxSmall label="Joined" value={brochureData.slide2.mockUI.metrics.joined} color="text-purple-400" />
                                    <MetricBoxSmall label="Backed Out" value={brochureData.slide2.mockUI.metrics.backedOut} color="text-red-400" />
                                </div>

                                <div className="grid grid-cols-3 gap-4">
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
                </ImageSlide>

                {/* ==================== SLIDE 3: DUPLICATE DETECTION ==================== */}
                <ImageSlide bg={brochureData.slide3.bgImage}>
                    <div className="h-full bg-slate-900/95 p-16 flex items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/20 via-transparent to-slate-950/90 pointer-events-none" />

                        <div className="grid grid-cols-2 gap-20 w-full z-10 items-center">
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

                            <div className="relative h-[600px] flex items-center justify-center">
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

                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10">
                                    <line x1="50%" y1="50%" x2="90%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                                    <line x1="50%" y1="50%" x2="10%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </ImageSlide>

                {/* ==================== SLIDE 4: AI RESUME PARSING ==================== */}
                <ImageSlide bg={brochureData.slide4.bgImage}>
                    <div className="h-full bg-slate-950/85 p-12 flex items-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                        <div className="grid grid-cols-2 gap-12 w-full z-10 items-center">
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
                <ImageSlide bg={brochureData.slide5.bgImage}>
                    <div className="h-full bg-slate-900/90 p-0 flex relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-900/20" />

                        <div className="relative z-10 flex w-full h-full">
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

                            <div className="w-1/2 bg-black/30 p-12 flex items-center justify-center relative border-l border-white/5 backdrop-blur-sm">
                                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                                <div className="relative w-[420px] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden transform scale-105">
                                    <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
                                        <span className="text-xs font-bold text-zinc-400 tracking-wider">{brochureData.slide5.mockUI.header}</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>

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
                </ImageSlide>

                {/* ==================== SLIDE 6: UNIFIED TIMELINE ==================== */}
                <ImageSlide bg={brochureData.slide6.bgImage}>
                    <div className="h-full w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20" />

                        <div className="relative z-10 w-full h-full flex p-16">
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

                            <div className="w-7/12 relative pl-8 flex items-center">
                                <div className="w-full h-[540px] bg-slate-950/80 backdrop-blur-2xl rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 p-10 overflow-hidden">
                                        <div className="space-y-6 relative h-full">
                                            <div className="absolute left-[28px] top-8 bottom-8 w-0.5 bg-slate-800 rounded-full" />

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
                </ImageSlide>

                {/* ==================== SLIDE 19: TECHNOLOGY STACK ==================== */}
                <ImageSlide bg={brochureData.slide19.bgImage}>
                    <div className="h-full bg-slate-900/90 p-16 flex flex-col justify-center relative overflow-hidden">
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
                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Code2 className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[0].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[0].desc}</p>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-green-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Server className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[1].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[1].desc}</p>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-20 w-20 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Database className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{brochureData.slide19.techStack[2].title}</h3>
                                <p className="text-sm text-slate-400">{brochureData.slide19.techStack[2].desc}</p>
                            </div>

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

            </div>

            <style>
                {`
          @media print {
             @page { size: landscape; margin: 0; }
             body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        `}
            </style>
        </div>
    );
};

// --- Components ---

const ImageSlide = ({ bg, children }: any) => (
    <div
        className="w-full aspect-[297/210] overflow-hidden relative shadow-2xl bg-cover bg-center print:break-after-page"
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            <div className="relative w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden shrink-0">
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

const MetricBoxSmall = ({ label, value, color }: any) => (
    <div className="bg-slate-800 p-2 rounded border border-slate-700 text-center">
        <div className={`text-xl font-bold ${color}`}>{value}</div>
        <div className="text-[10px] text-zinc-500 uppercase">{label}</div>
    </div>
);

export default ApplicationBrochure;
