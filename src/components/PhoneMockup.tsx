import { useEffect, useState, useRef } from 'react';
import type { Project } from '../data/projectsData';
import {
  Wifi,
  Battery,
  Shield,
  Cpu,
  Radio,
  Users,
  QrCode,
  Thermometer,
  Lightbulb,
  Fan,
  Activity,
  Server,
  Lock,
} from 'lucide-react';

interface PhoneMockupProps {
  project: Project;
  scrollProgress: number; // 0 to 1
}

export function PhoneMockup({ project, scrollProgress }: PhoneMockupProps) {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse coordinates for interactive 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate dynamic 3D tilt and curved horizontal sway
  // Project-linked rotation: tilts left/right based on scroll progress and mouse position
  const scrollTiltY = Math.sin(scrollProgress * Math.PI * 3.5) * 15; // -15deg to +15deg
  const scrollTiltX = 8 + Math.cos(scrollProgress * Math.PI * 2) * 5; // 3deg to 13deg
  const scrollTiltZ = Math.sin(scrollProgress * Math.PI * 2) * -3; // -3deg to +3deg
  const curvedSwayX = Math.sin(scrollProgress * Math.PI * 3) * 24; // -24px to +24px horizontal curve

  const finalTiltY = scrollTiltY + mousePos.x * 10;
  const finalTiltX = scrollTiltX - mousePos.y * 8;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] sm:max-w-[370px] mx-auto select-none"
      style={{ perspective: '1400px' }}
    >
      {/* Dynamic Ambient Neon Glow underneath matching active project */}
      <div
        className="absolute -inset-10 rounded-full blur-[80px] opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, rgba(0, 255, 135, 0.1) 40%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Floating 3D Isometric Accent Chips (Inspired by Sentra reference) */}
      <div
        className="hidden sm:block absolute -left-12 top-28 z-30 transition-transform duration-500 pointer-events-none"
        style={{
          transform: `translateY(${Math.sin(scrollProgress * 6) * 14}px) rotate(-8deg)`,
        }}
      >
        <div className="p-3 rounded-2xl bg-[#0c1015]/90 border border-[#00ff87]/30 shadow-[0_0_20px_rgba(0,255,135,0.25)] backdrop-blur-md flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-[#00ff87]/15 flex items-center justify-center text-[#00ff87]">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-mono leading-tight">
            <div className="text-[#00ff87] font-bold">20.0 TPS</div>
            <div className="text-white/60">Zero Lag</div>
          </div>
        </div>
      </div>

      <div
        className="hidden sm:block absolute -right-12 bottom-36 z-30 transition-transform duration-500 pointer-events-none"
        style={{
          transform: `translateY(${Math.cos(scrollProgress * 6) * 14}px) rotate(6deg)`,
        }}
      >
        <div className="p-3 rounded-2xl bg-[#0c1015]/90 border border-[#00ff87]/30 shadow-[0_0_20px_rgba(0,255,135,0.25)] backdrop-blur-md flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-[#00ff87]/15 flex items-center justify-center text-[#00ff87]">
            <Radio className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-mono leading-tight">
            <div className="text-[#00ff87] font-bold">&lt;40ms</div>
            <div className="text-white/60">MQTT Sync</div>
          </div>
        </div>
      </div>

      {/* 3D Tilted & Curved Phone Frame */}
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translateX(${curvedSwayX}px) rotateY(${finalTiltY}deg) rotateX(${finalTiltX}deg) rotateZ(${scrollTiltZ}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer Titanium Phone Shell (Concentric 46px outer radius) */}
        <div className="relative w-full aspect-[9/19.2] rounded-[46px] bg-[#0c0f14] p-3 shadow-phone-3d border border-[#232d3d] ring-1 ring-white/10 overflow-hidden">
          {/* Side Hardware Buttons */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-[#1f2736] rounded-r-sm" aria-hidden="true" />

          {/* Inner Display (Concentric 40px radius: 46px - 6px padding = 40px) */}
          <div className="relative w-full h-full rounded-[40px] bg-[#07090d] overflow-hidden flex flex-col border border-white/10">
            {/* Dynamic Island Pill with camera and green status dot */}
            <div className="absolute top-2.5 inset-x-0 z-30 flex justify-center items-center pointer-events-none">
              <div className="h-6 w-28 bg-black rounded-full flex items-center justify-between px-2.5 border border-white/15 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#151a22] border border-white/10 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#24334a]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#00ff87] font-bold">5G</span>
                </div>
              </div>
            </div>

            {/* Mobile Status Bar */}
            <div className="relative z-20 pt-3 px-6 pb-2 flex justify-between items-center text-[11px] font-mono text-white/80">
              <span className="font-semibold tracking-tight">{currentTime}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-[2px] items-end h-2.5">
                  <span className="w-[2px] h-1 bg-white/80 rounded-xs" />
                  <span className="w-[2px] h-1.5 bg-white/80 rounded-xs" />
                  <span className="w-[2px] h-2 bg-white/80 rounded-xs" />
                  <span className="w-[2px] h-2.5 bg-white/80 rounded-xs" />
                </div>
                <Wifi className="w-3 h-3 text-white/80" />
                <Battery className="w-3.5 h-3.5 text-white/80" />
              </div>
            </div>

            {/* FULL-HEIGHT APP SCREEN VIEWPORT (Completely fills the screen, crystal-clear!) */}
            <div className="relative flex-1 w-full overflow-hidden flex flex-col justify-between p-3">
              {/* Project 1: IEEE Student Branch Platform */}
              {project.screenDetails.type === 'ieee_portal' && (
                <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0d131c] via-[#090d14] to-[#05080c] p-3.5 border border-white/10 text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#00ff87]/20 border border-[#00ff87]/40 flex items-center justify-center text-[#00ff87] font-bold text-xs">
                          Σ
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">IEEE ECU Portal</div>
                          <div className="text-[9px] font-mono text-[#00ff87]">● Cluster Healthy</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#00ff87]/15 text-[#00ff87] text-[10px] font-mono font-semibold">
                        RBAC Live
                      </span>
                    </div>

                    {/* Member Stats Card */}
                    <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center text-xs text-white/70 mb-1">
                        <span>Active Members</span>
                        <span className="font-bold text-sm text-[#00ff87] font-mono">512 Registered</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-[#00ff87] h-full w-[88%] rounded-full shadow-[0_0_8px_#00ff87]" />
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-white/50 flex justify-between">
                        <span>Spring Boot 3.2</span>
                        <span>MongoDB Atlas</span>
                      </div>
                    </div>

                    {/* Quick Action Rows */}
                    <div className="mt-3 space-y-2">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs">
                          <QrCode className="w-4 h-4 text-[#00ff87]" />
                          <span>QR Attendance Engine</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#00ff87]">Ready</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs">
                          <Shield className="w-4 h-4 text-sky-400" />
                          <span>JWT Salted Session</span>
                        </div>
                        <span className="text-[10px] font-mono text-sky-400">Valid</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs">
                          <Users className="w-4 h-4 text-amber-400" />
                          <span>Committee Dispatch</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/60">30 Endpoints</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center font-mono text-[10px] text-white/70">
                    <span className="text-[#00ff87] font-bold">RFC 7807</span> • Zero Uncaught Exceptions
                  </div>
                </div>
              )}

              {/* Project 2: PunishmentSystem Server Core */}
              {project.screenDetails.type === 'punishment' && (
                <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0a121c] via-[#060a10] to-[#040609] p-3.5 border border-white/10 text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold text-xs">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Server Core Audit</div>
                          <div className="text-[9px] font-mono text-sky-400">● 20.0 TPS Pinned</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-400 text-[10px] font-mono font-semibold">
                        Rollerite
                      </span>
                    </div>

                    {/* Server Performance Card */}
                    <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center text-xs text-white/70 mb-1">
                        <span>Main Thread Tick</span>
                        <span className="font-bold text-sm text-sky-400 font-mono">0.2ms / 50ms</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-sky-400 h-full w-[12%] rounded-full shadow-[0_0_8px_#38bdf8]" />
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-white/50 flex justify-between">
                        <span>Paper 1.20+ Engine</span>
                        <span>HikariCP Pool</span>
                      </div>
                    </div>

                    {/* Live Moderation Log stream */}
                    <div className="mt-3 space-y-2 font-mono text-[10px]">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-white/80">#042 Async Ban Record</span>
                        <span className="text-emerald-400">12ms sync</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-white/80">#043 Redis Pub/Sub Pulse</span>
                        <span className="text-sky-400">Broadcast</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-white/80">#044 MySQL Offline Queue</span>
                        <span className="text-amber-400">0 Stalled</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center font-mono text-[10px] text-white/70">
                    <span className="text-sky-400 font-bold">4.83 / 5.0 Rating</span> • 8 Commercial Deliveries
                  </div>
                </div>
              )}

              {/* Project 3: Innovatronics PCB Interactive Web */}
              {project.screenDetails.type === 'pcb_web' && (
                <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#181208] via-[#0d0a04] to-[#060401] p-3.5 border border-amber-500/20 text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Innovatronics PCB</div>
                          <div className="text-[9px] font-mono text-amber-400">● 60 FPS Render</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] font-mono font-semibold">
                        CustomPainter
                      </span>
                    </div>

                    {/* Procedural PCB Circuit Board Visualization */}
                    <div className="mt-3 p-3 rounded-xl bg-black/60 border border-amber-500/30 relative h-36 flex flex-col justify-center items-center overflow-hidden">
                      {/* Circuit traces SVG */}
                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 120">
                        <path
                          d="M 20 60 L 60 60 L 80 30 L 140 30 L 160 50 L 180 50"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="2"
                          strokeDasharray="4 2"
                        />
                        <path
                          d="M 20 60 L 60 60 L 80 90 L 140 90 L 160 70 L 180 70"
                          fill="none"
                          stroke="#00ff87"
                          strokeWidth="2"
                        />
                        <circle cx="80" cy="30" r="4" fill="#f59e0b" />
                        <circle cx="80" cy="90" r="4" fill="#00ff87" />
                        <circle cx="140" cy="30" r="4" fill="#f59e0b" />
                        <circle cx="140" cy="90" r="4" fill="#00ff87" />
                      </svg>
                      <div className="relative z-10 px-3 py-1 rounded-full bg-[#181208]/90 border border-amber-500/40 text-[10px] font-mono text-amber-300">
                        Trace Routing: 45° Bezier
                      </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-center font-mono text-[10px]">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-amber-400 font-bold text-xs">60 FPS</div>
                        <div className="text-white/50">Fluid Canvas</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-emerald-400 font-bold text-xs">0 DOM Lag</div>
                        <div className="text-white/50">Hardware Accel</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Pill */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center font-mono text-[10px] text-white/70">
                    <span className="text-amber-400 font-bold">Pure Flutter Web</span> • Responsive Vector Canvas
                  </div>
                </div>
              )}

              {/* Project 4: Projecto-Messio Smart Home IoT */}
              {project.screenDetails.type === 'smart_home' && (
                <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0a1712] via-[#050f0b] to-[#020805] p-3.5 border border-[#00ff87]/20 text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#00ff87]/20 border border-[#00ff87]/40 flex items-center justify-center text-[#00ff87] font-bold text-xs">
                          <Radio className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Welcome Home, Abdo</div>
                          <div className="text-[9px] font-mono text-[#00ff87]">● ESP32 Online (&lt;38ms)</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#00ff87]/15 text-[#00ff87] text-[10px] font-mono font-semibold">
                        MQTT Live
                      </span>
                    </div>

                    {/* Room Environment Card */}
                    <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-[#00ff87]" />
                        <div>
                          <div className="text-xs font-bold text-white">24.5°C</div>
                          <div className="text-[9px] font-mono text-white/50">Living Room Climate</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-[#00ff87]/20 text-[#00ff87] font-mono text-[10px]">
                        48% Humidity
                      </span>
                    </div>

                    {/* Device Relay Toggles */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#00ff87]/10 border border-[#00ff87]/30 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                          <Lightbulb className="w-4 h-4 text-[#00ff87]" />
                          <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                        </div>
                        <div className="mt-2 font-bold text-[11px]">Main Light</div>
                        <div className="text-[9px] font-mono text-[#00ff87]">Active (ON)</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                          <Fan className="w-4 h-4 text-white/60" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <div className="mt-2 font-bold text-[11px] text-white/80">Cooling Fan</div>
                        <div className="text-[9px] font-mono text-white/40">Standby (OFF)</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Latency Pill */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center font-mono text-[10px] text-white/70">
                    <span className="text-[#00ff87] font-bold">Sub-40ms Loop</span> • Resilient Offline Buffer
                  </div>
                </div>
              )}

              {/* Project 5: HealthLink Clinical Suite */}
              {project.screenDetails.type === 'healthlink' && (
                <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#180b14] via-[#0f060d] to-[#080206] p-3.5 border border-pink-500/20 text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 font-bold text-xs">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">HealthLink Clinical</div>
                          <div className="text-[9px] font-mono text-pink-400">● Encrypted SQLite</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 text-[10px] font-mono font-semibold">
                        HIPAA Ready
                      </span>
                    </div>

                    {/* Vitals Telemetry Card */}
                    <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center text-xs text-white/70 mb-1">
                        <span>Patient Vitals Telemetry</span>
                        <span className="font-bold text-sm text-pink-400 font-mono">74 BPM</span>
                      </div>
                      {/* Heartbeat Wave SVG */}
                      <svg className="w-full h-8 stroke-pink-400 fill-none" viewBox="0 0 100 20">
                        <path d="M 0 10 L 30 10 L 35 2 L 40 18 L 45 4 L 50 14 L 55 10 L 100 10" strokeWidth="1.5" />
                      </svg>
                      <div className="mt-1 text-[10px] font-mono text-white/50 flex justify-between">
                        <span>Oxygen: 98% SpO2</span>
                        <span>BP: 120/80</span>
                      </div>
                    </div>

                    {/* Encrypted Sync Status */}
                    <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <Lock className="w-4 h-4 text-pink-400" />
                        <span>SQLCipher 256-bit</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Synced</span>
                    </div>
                  </div>

                  {/* Bottom Verification */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center font-mono text-[10px] text-white/70">
                    <span className="text-pink-400 font-bold">Cross-Platform</span> • Mobile & Desktop
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="py-2 flex justify-center items-center pointer-events-none">
              <div className="w-32 h-1 bg-white/35 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
