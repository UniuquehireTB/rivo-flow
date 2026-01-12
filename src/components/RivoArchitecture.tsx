import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  RotateCcw,
  Database,
  Server,
  Globe,
  ShieldCheck,
  User,
  Lock,
  Unlock,
  FileJson,
  Key,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Zap,
  Eye,
  Layers,
  Cloud,
  Activity,
  ChevronRight
} from 'lucide-react';

// --- Types ---
type Scene = 'idle' | 'walk-in' | 'auth-request' | 'auth-verify' | 'token-issue' | 'gate-open' | 'api-request' | 'backend-process' | 'db-query' | 'response' | 'inspect' | 'complete';

// --- Configuration ---
const SCENES_ORDER: Scene[] = ['idle', 'walk-in', 'auth-request', 'auth-verify', 'token-issue', 'gate-open', 'api-request', 'backend-process', 'db-query', 'response', 'inspect', 'complete'];

const NARRATION: Record<Scene, { title: string; description: string; icon: typeof Play }> = {
  'idle': { title: "System Ready", description: "RIVO Architecture Diagram is ready. Press play to begin the user journey simulation.", icon: Activity },
  'walk-in': { title: "User Arrives", description: "A new user session is detected. The browser initiates connection to the React SPA.", icon: User },
  'auth-request': { title: "Authentication Required", description: "User needs to authenticate. Credentials are sent to the Identity Provider securely.", icon: Lock },
  'auth-verify': { title: "Credential Verification", description: "Auth Server validates credentials against the secure database vault.", icon: ShieldCheck },
  'token-issue': { title: "Token Issued", description: "Identity confirmed! A secure JWT token is generated and returned to the client.", icon: Key },
  'gate-open': { title: "Gateway Authorization", description: "The API Gateway validates the token and opens the secure channel.", icon: Unlock },
  'api-request': { title: "API Request", description: "Authenticated request traverses through the gateway to backend services.", icon: ArrowRight },
  'backend-process': { title: "Business Logic", description: "Backend API orchestrates the request, coordinating with microservices.", icon: Cpu },
  'db-query': { title: "Data Retrieval", description: "Fetching persistent records from the PostgreSQL database.", icon: Database },
  'response': { title: "Response Assembly", description: "Data payload is assembled and returned through the secure channel.", icon: FileJson },
  'inspect': { title: "Data Visualization", description: "User receives and inspects the secure data in the browser.", icon: Eye },
  'complete': { title: "Journey Complete", description: "The full authentication and data flow cycle has been demonstrated.", icon: CheckCircle2 }
};

const ZONES = [
  { id: 'client', label: 'Client Zone', x: 2, y: 8, w: 16, h: 84, gradient: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-400/40' },
  { id: 'frontend', label: 'Frontend Layer', x: 20, y: 8, w: 18, h: 84, gradient: 'from-cyan-500/10 to-cyan-500/5', border: 'border-cyan-400/40' },
  { id: 'iam', label: 'Identity & Access', x: 40, y: 8, w: 22, h: 40, gradient: 'from-rose-500/10 to-rose-500/5', border: 'border-rose-400/40' },
  { id: 'gateway', label: 'API Gateway', x: 40, y: 52, w: 22, h: 40, gradient: 'from-amber-500/10 to-amber-500/5', border: 'border-amber-400/40' },
  { id: 'core', label: 'Core Services', x: 64, y: 8, w: 34, h: 84, gradient: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-400/40' },
];

const NODES: Record<string, any> = {
  user: { id: 'user', x: 10, y: 50, label: 'User', sub: 'Browser', icon: User, color: 'blue', glow: 'glow-blue' },
  spa: { id: 'spa', x: 29, y: 50, label: 'React SPA', sub: 'Port 4200', icon: Globe, color: 'cyan', glow: 'glow-cyan' },
  auth: { id: 'auth', x: 51, y: 20, label: 'Auth Server', sub: 'Port 9000', icon: ShieldCheck, color: 'rose', glow: 'glow-rose' },
  authdb: { id: 'authdb', x: 51, y: 40, label: 'Auth DB', sub: 'PostgreSQL', icon: Database, color: 'rose', glow: 'glow-rose' },
  gate: { id: 'gate', x: 51, y: 72, label: 'API Gateway', sub: 'Security', icon: Lock, color: 'amber', glow: 'glow-amber', isGate: true },
  backend: { id: 'backend', x: 75, y: 35, label: 'Backend API', sub: 'Port 8181', icon: Server, color: 'emerald', glow: 'glow-emerald' },
  service: { id: 'service', x: 90, y: 25, label: 'Microservices', sub: 'Port 8090', icon: Layers, color: 'violet', glow: 'glow-blue' },
  db: { id: 'db', x: 90, y: 55, label: 'Main DB', sub: 'PostgreSQL', icon: Database, color: 'emerald', glow: 'glow-emerald' },
  cache: { id: 'cache', x: 75, y: 72, label: 'Redis Cache', sub: 'In-Memory', icon: Zap, color: 'amber', glow: 'glow-amber' },
};

const CONNECTIONS = [
  { from: 'user', to: 'spa', label: 'HTTPS' },
  { from: 'spa', to: 'auth', label: 'OAuth 2.0', curved: true },
  { from: 'auth', to: 'authdb', label: 'Query' },
  { from: 'spa', to: 'gate', label: 'JWT Auth', curved: true },
  { from: 'gate', to: 'backend', label: 'REST API' },
  { from: 'backend', to: 'service', label: 'gRPC', curved: true },
  { from: 'backend', to: 'db', label: 'SQL' },
  { from: 'backend', to: 'cache', label: 'Redis' },
];

const CAMERA_VIEWS: Record<Scene, { x: number, y: number, scale: number }> = {
  'idle': { x: 50, y: 50, scale: 1 },
  'walk-in': { x: 20, y: 50, scale: 1.3 },
  'auth-request': { x: 40, y: 35, scale: 1.3 },
  'auth-verify': { x: 51, y: 30, scale: 1.8 },
  'token-issue': { x: 40, y: 35, scale: 1.3 },
  'gate-open': { x: 51, y: 72, scale: 2 },
  'api-request': { x: 60, y: 55, scale: 1.3 },
  'backend-process': { x: 80, y: 40, scale: 1.4 },
  'db-query': { x: 85, y: 50, scale: 1.6 },
  'response': { x: 50, y: 50, scale: 1 },
  'inspect': { x: 20, y: 50, scale: 1.5 },
  'complete': { x: 50, y: 50, scale: 1 },
};

// --- Helpers ---
const isActiveZone = (id: string, scene: Scene): boolean => {
  if (scene === 'idle' || scene === 'complete') return false;
  const map: Record<string, Scene[]> = {
    'client': ['walk-in', 'response', 'inspect'],
    'frontend': ['walk-in', 'auth-request', 'token-issue', 'api-request', 'response', 'inspect'],
    'iam': ['auth-request', 'auth-verify', 'token-issue'],
    'gateway': ['gate-open', 'api-request'],
    'core': ['api-request', 'backend-process', 'db-query', 'response'],
  };
  return map[id]?.includes(scene) ?? false;
};

const isActiveNode = (id: string, scene: Scene): boolean => {
  if (scene === 'idle') return false;
  const map: Record<Scene, string[]> = {
    'idle': [],
    'walk-in': ['user', 'spa'],
    'auth-request': ['spa', 'auth'],
    'auth-verify': ['auth', 'authdb'],
    'token-issue': ['auth', 'spa'],
    'gate-open': ['spa', 'gate'],
    'api-request': ['gate', 'backend'],
    'backend-process': ['backend', 'service', 'cache'],
    'db-query': ['backend', 'db'],
    'response': ['backend', 'gate', 'spa', 'user'],
    'inspect': ['user', 'spa'],
    'complete': [],
  };
  return map[scene]?.includes(id) ?? false;
};

const getNodeColor = (color: string): string => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    violet: 'bg-violet-500',
  };
  return colors[color] || 'bg-primary';
};

const getNodeBorder = (color: string): string => {
  const colors: Record<string, string> = {
    blue: 'border-blue-400',
    cyan: 'border-cyan-400',
    rose: 'border-rose-400',
    amber: 'border-amber-400',
    emerald: 'border-emerald-400',
    violet: 'border-violet-400',
  };
  return colors[color] || 'border-primary';
};

const getNodeText = (color: string): string => {
  const colors: Record<string, string> = {
    blue: 'text-blue-600',
    cyan: 'text-cyan-600',
    rose: 'text-rose-600',
    amber: 'text-amber-600',
    emerald: 'text-emerald-600',
    violet: 'text-violet-600',
  };
  return colors[color] || 'text-primary';
};

// --- Main Component ---
const RivoArchitecture = () => {
  const [scene, setScene] = useState<Scene>('idle');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    let timeout: NodeJS.Timeout;
    const timings: Record<Scene, number> = {
      'idle': 500,
      'walk-in': 2500,
      'auth-request': 3000,
      'auth-verify': 2500,
      'token-issue': 2500,
      'gate-open': 2000,
      'api-request': 2500,
      'backend-process': 2500,
      'db-query': 2500,
      'response': 3000,
      'inspect': 3500,
      'complete': 0,
    };

    const currentIndex = SCENES_ORDER.indexOf(scene);
    if (currentIndex < SCENES_ORDER.length - 1) {
      timeout = setTimeout(() => {
        setScene(SCENES_ORDER[currentIndex + 1]);
      }, timings[scene]);
    } else {
      setIsPlaying(false);
    }

    return () => clearTimeout(timeout);
  }, [scene, isPlaying]);

  const cam = CAMERA_VIEWS[scene];
  const currentSceneIndex = SCENES_ORDER.indexOf(scene);
  const NarrationIcon = NARRATION[scene].icon;

  const handleReset = () => {
    setIsPlaying(false);
    setScene('idle');
  };

  const handlePlayPause = () => {
    if (scene === 'complete') {
      setScene('idle');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-screen h-screen bg-background overflow-hidden flex flex-col select-none">
      
      {/* Header */}
      <header className="flex-none h-16 bg-card border-b border-border flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">RIVO Architecture</h1>
              <p className="text-xs text-muted-foreground">Interactive System Diagram</p>
            </div>
          </div>
          
          <div className="h-8 w-px bg-border mx-2" />
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
            isPlaying 
              ? 'bg-emerald-100 border border-emerald-300' 
              : scene === 'complete' 
                ? 'bg-blue-100 border border-blue-300'
                : 'bg-muted border border-border'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isPlaying ? 'bg-emerald-500 animate-pulse' : scene === 'complete' ? 'bg-blue-500' : 'bg-muted-foreground'
            }`} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${
              isPlaying ? 'text-emerald-700' : scene === 'complete' ? 'text-blue-700' : 'text-muted-foreground'
            }`}>
              {isPlaying ? 'Simulating' : scene === 'complete' ? 'Complete' : 'Ready'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            onClick={handlePlayPause}
            className={`px-6 font-semibold transition-all duration-300 ${
              isPlaying 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                {scene === 'complete' ? 'Replay' : 'Start Journey'}
              </>
            )}
          </Button>
          <Button 
            onClick={handleReset}
            variant="outline"
            className="border-border hover:bg-muted"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Main Viewport */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-3xl" />
        </div>

        {/* Canvas Container */}
        <motion.div
          className="absolute origin-center"
          style={{ 
            width: 1400, 
            height: 800, 
            left: '50%', 
            top: '50%',
            marginLeft: -700,
            marginTop: -400,
          }}
          animate={{
            scale: cam.scale,
            x: (50 - cam.x) * 14,
            y: (50 - cam.y) * 8,
          }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Zones */}
          {ZONES.map(zone => (
            <motion.div
              key={zone.id}
              className={`absolute rounded-3xl border-2 border-dashed transition-all duration-700 ${zone.border}`}
              style={{ 
                left: `${zone.x}%`, 
                top: `${zone.y}%`, 
                width: `${zone.w}%`, 
                height: `${zone.h}%` 
              }}
              animate={{
                opacity: isActiveZone(zone.id, scene) ? 1 : 0.3,
                scale: isActiveZone(zone.id, scene) ? 1 : 0.98,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${zone.gradient} transition-opacity duration-500 ${
                isActiveZone(zone.id, scene) ? 'opacity-100' : 'opacity-30'
              }`} />
              <div className="absolute -top-3 left-6 px-3 py-1 bg-card border border-border rounded-full shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {zone.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {CONNECTIONS.map((conn, i) => {
              const fromNode = NODES[conn.from];
              const toNode = NODES[conn.to];
              const x1 = (fromNode.x / 100) * 1400;
              const y1 = (fromNode.y / 100) * 800;
              const x2 = (toNode.x / 100) * 1400;
              const y2 = (toNode.y / 100) * 800;
              
              const isActive = isActiveNode(conn.from, scene) && isActiveNode(conn.to, scene);
              
              const midX = (x1 + x2) / 2;
              const midY = (y1 + y2) / 2;
              const curveOffset = conn.curved ? 50 : 0;
              
              const path = conn.curved 
                ? `M ${x1} ${y1} Q ${midX} ${midY - curveOffset} ${x2} ${y2}`
                : `M ${x1} ${y1} L ${x2} ${y2}`;

              return (
                <g key={i}>
                  {/* Base Line */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth={isActive ? 3 : 2}
                    strokeOpacity={isActive ? 0.8 : 0.3}
                    strokeLinecap="round"
                    animate={{ 
                      strokeOpacity: isActive ? 0.8 : 0.3,
                      strokeWidth: isActive ? 3 : 2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Glow Line */}
                  {isActive && (
                    <motion.path
                      d={path}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth={4}
                      strokeLinecap="round"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Connection Label */}
                  {conn.label && (
                    <motion.g
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <rect
                        x={midX - 30}
                        y={midY - (conn.curved ? curveOffset/2 + 8 : 8)}
                        width={60}
                        height={16}
                        rx={8}
                        fill="hsl(var(--card))"
                        stroke="hsl(var(--border))"
                        strokeWidth={1}
                      />
                      <text
                        x={midX}
                        y={midY - (conn.curved ? curveOffset/2 - 2 : -2)}
                        textAnchor="middle"
                        className="text-[9px] font-mono fill-muted-foreground"
                      >
                        {conn.label}
                      </text>
                    </motion.g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {Object.values(NODES).map((node: any) => (
            <ArchitectureNode 
              key={node.id} 
              {...node} 
              active={isActiveNode(node.id, scene)}
              scene={scene}
            />
          ))}

          {/* Data Packets */}
          <DataPackets scene={scene} nodes={NODES} />

          {/* Inspection Overlay */}
          <AnimatePresence>
            {scene === 'inspect' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute z-50"
                style={{ left: '18%', top: '25%' }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl animate-pulse" />
                  <div className="relative bg-card border-2 border-blue-400 rounded-2xl p-5 shadow-2xl max-w-xs">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Data Received</h3>
                        <p className="text-xs text-muted-foreground">Secure Response</p>
                      </div>
                      <div className="ml-auto px-2 py-1 bg-emerald-100 rounded-full">
                        <span className="text-xs font-bold text-emerald-700">200 OK</span>
                      </div>
                    </div>
                    <pre className="text-xs font-mono text-foreground bg-muted rounded-lg p-3 overflow-hidden">
{`{
  "id": "U-1029",
  "role": "ADMIN",
  "access": "GRANTED",
  "permissions": ["read", "write"],
  "secure": true
}`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,hsl(var(--background))_100%)] opacity-60" />
      </div>

      {/* Footer Narration */}
      <footer className="flex-none bg-card border-t border-border z-50">
        {/* Progress Bar */}
        <div className="h-1 bg-muted relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentSceneIndex / (SCENES_ORDER.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex items-center justify-between px-8 py-5">
          {/* Scene Info */}
          <div className="flex items-center gap-6">
            <motion.div 
              key={scene}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <NarrationIcon className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={scene}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Scene {currentSceneIndex + 1}/{SCENES_ORDER.length}
                  </span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {scene.replace('-', ' ')}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  {NARRATION[scene].title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  {NARRATION[scene].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scene Timeline */}
          <div className="flex items-center gap-1">
            {SCENES_ORDER.map((s, i) => (
              <motion.button
                key={s}
                onClick={() => { setScene(s); setIsPlaying(false); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= currentSceneIndex 
                    ? 'bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground/30'
                } ${i === currentSceneIndex ? 'scale-125' : ''}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Architecture Node Component ---
const ArchitectureNode = ({ id, x, y, label, sub, icon: Icon, color, active, isGate, scene }: any) => {
  const isOpen = scene === 'gate-open' || scene === 'api-request' || scene === 'backend-process' || scene === 'db-query' || scene === 'response';

  if (isGate) {
    return (
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ left: `${x}%`, top: `${y}%` }}
        animate={{ scale: active ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`relative w-20 h-24 rounded-2xl border-3 flex items-center justify-center transition-all duration-500 ${
            isOpen 
              ? 'bg-emerald-50 border-emerald-400 shadow-lg' 
              : 'bg-rose-50 border-rose-400'
          }`}
          animate={{ 
            boxShadow: isOpen 
              ? '0 0 40px -10px hsl(160 70% 45% / 0.5)' 
              : '0 0 40px -10px hsl(350 80% 55% / 0.5)'
          }}
        >
          <motion.div
            animate={{ rotateY: isOpen ? 100 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="origin-left"
          >
            {isOpen ? (
              <Unlock className="w-10 h-10 text-emerald-600" />
            ) : (
              <Lock className="w-10 h-10 text-rose-600" />
            )}
          </motion.div>
          
          {/* Status Badge */}
          <div className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
            isOpen ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
          }`}>
            {isOpen ? 'OPEN' : 'LOCKED'}
          </div>
        </motion.div>
        
        <div className="mt-3 text-center">
          <div className="text-sm font-bold text-foreground">{label}</div>
          <div className="text-[10px] text-muted-foreground font-mono">{sub}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ 
        scale: active ? 1.1 : 0.95,
        opacity: active ? 1 : 0.6,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className={`relative w-20 h-20 rounded-2xl bg-card border-2 flex items-center justify-center overflow-hidden transition-all duration-300 ${
          active ? `${getNodeBorder(color)} shadow-xl` : 'border-border'
        }`}
        animate={{
          boxShadow: active 
            ? `0 0 40px -10px var(--tw-shadow-color)` 
            : '0 4px 20px -4px hsl(var(--foreground) / 0.08)',
        }}
        style={{ 
          '--tw-shadow-color': active ? `hsl(var(--rivo-${color}))` : undefined 
        } as React.CSSProperties}
      >
        <Icon className={`w-9 h-9 transition-colors duration-300 ${
          active ? getNodeText(color) : 'text-muted-foreground'
        }`} />
        
        {/* Scan Line Effect */}
        {active && (
          <div className="absolute inset-0 scan-line animate-scan opacity-50" />
        )}
        
        {/* Glow Ring */}
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute inset-0 rounded-2xl border-2 ${getNodeBorder(color)} animate-pulse`}
            style={{ margin: -4 }}
          />
        )}
      </motion.div>

      <div className="mt-3 text-center">
        <div className={`text-sm font-bold transition-colors duration-300 ${
          active ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          {label}
        </div>
        <div className="text-[10px] text-muted-foreground font-mono">{sub}</div>
      </div>
    </motion.div>
  );
};

// --- Data Packets Component ---
const DataPackets = ({ scene, nodes }: { scene: Scene; nodes: Record<string, any> }) => {
  const packets = useMemo(() => {
    const getPacket = (from: string, to: string, icon: any, label: string, color: string, delay = 0) => ({
      from: nodes[from],
      to: nodes[to],
      icon,
      label,
      color,
      delay,
    });

    switch (scene) {
      case 'walk-in':
        return [getPacket('user', 'spa', User, 'Session', '#3b82f6', 0)];
      case 'auth-request':
        return [getPacket('spa', 'auth', Lock, 'Credentials', '#f43f5e', 0)];
      case 'auth-verify':
        return [
          getPacket('auth', 'authdb', Database, 'Query', '#f43f5e', 0),
          getPacket('authdb', 'auth', CheckCircle2, 'Verified', '#10b981', 1),
        ];
      case 'token-issue':
        return [getPacket('auth', 'spa', Key, 'JWT Token', '#eab308', 0)];
      case 'gate-open':
        return [getPacket('spa', 'gate', Key, 'Auth', '#eab308', 0)];
      case 'api-request':
        return [getPacket('gate', 'backend', ArrowRight, 'Request', '#10b981', 0)];
      case 'backend-process':
        return [
          getPacket('backend', 'service', Zap, 'gRPC', '#8b5cf6', 0),
          getPacket('service', 'backend', FileJson, 'Data', '#8b5cf6', 1),
        ];
      case 'db-query':
        return [
          getPacket('backend', 'db', Database, 'SQL', '#10b981', 0),
          getPacket('db', 'backend', FileJson, 'Records', '#10b981', 1),
        ];
      case 'response':
        return [
          getPacket('backend', 'gate', FileJson, 'Response', '#10b981', 0),
          getPacket('gate', 'spa', FileJson, 'Payload', '#10b981', 0.8),
          getPacket('spa', 'user', FileJson, 'Display', '#3b82f6', 1.6),
        ];
      default:
        return [];
    }
  }, [scene, nodes]);

  return (
    <>
      {packets.map((packet, i) => (
        <DataPacket key={`${scene}-${i}`} {...packet} />
      ))}
    </>
  );
};

// --- Single Data Packet ---
const DataPacket = ({ from, to, icon: Icon, label, color, delay = 0 }: any) => {
  const fromX = (from.x / 100) * 1400;
  const fromY = (from.y / 100) * 800;
  const toX = (to.x / 100) * 1400;
  const toY = (to.y / 100) * 800;

  return (
    <motion.div
      className="absolute z-40 pointer-events-none"
      initial={{ 
        left: fromX, 
        top: fromY, 
        opacity: 0, 
        scale: 0 
      }}
      animate={{ 
        left: toX, 
        top: toY, 
        opacity: [0, 1, 1, 0], 
        scale: [0.5, 1, 1, 0.5] 
      }}
      transition={{ 
        duration: 1.5, 
        delay, 
        ease: [0.25, 1, 0.5, 1],
        times: [0, 0.2, 0.8, 1]
      }}
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 w-14 h-14 rounded-full blur-xl opacity-60"
          style={{ backgroundColor: color }}
        />
        
        {/* Packet */}
        <div 
          className="relative w-12 h-12 rounded-full border-2 flex items-center justify-center bg-card shadow-xl"
          style={{ borderColor: color }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        
        {/* Label */}
        {label && (
          <div 
            className="absolute -bottom-6 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-bold bg-card border shadow-sm"
            style={{ borderColor: color, color }}
          >
            {label}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RivoArchitecture;
