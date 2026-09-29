import { useEffect, useState, useRef } from 'react';
import { Server, Terminal } from 'lucide-react';

interface ServerMockupProps {
  title: string;
  category?: string;
  badge?: string;
  statLabel?: string;
  statValue?: string;
  accentColor?: string;
  tiltDirection?: 'left' | 'right';
  endpointsCount?: string;
  engine?: string;
  syncLatency?: string;
}

export function ServerMockup({
  title,
  badge = 'Distributed Core',
  statLabel = 'Server Tick Rate',
  statValue = '20.0 TPS',
  accentColor = '#00ff87',
  tiltDirection = 'left',
  endpointsCount = '30+ Endpoints',
  engine = 'Java 21 • Spring Boot 3',
  syncLatency = '<15ms Sync',
}: ServerMockupProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [pulseTick, setPulseTick] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouseOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', () => setMouseOffset({ x: 0, y: 0 }));
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const baseRotY = tiltDirection === 'left' ? -8 : 8;
  const rotY = baseRotY + mouseOffset.x * 10;
  const rotX = 7 - mouseOffset.y * 8;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] mx-auto select-none py-6"
      style={{ perspective: '1400px' }}
    >
      {/* Ambient Neon Glow underneath */}
      <div
        className="absolute -inset-6 rounded-3xl blur-[75px] opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(0, 255, 135, 0.1) 45%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* 3D Tilted Server Rack Unit */}
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Server Chassis (Dark Obsidian Titanium 2U Enclosure) */}
        <div className="relative w-full rounded-2xl bg-[#0c1017] p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(0,255,135,0.2)] border border-[#232e3f] ring-1 ring-white/10 overflow-hidden flex flex-col space-y-3.5">
          {/* Top Rack Ear & Hardware Faceplate Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            {/* Left status LEDs */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00ff87]/15 border border-[#00ff87]/30 text-[#00ff87] text-[10px] font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                <span>ONLINE {statValue}</span>
              </div>
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                CLUSTER NODE #01
              </span>
            </div>

            {/* Right Hardware ID & Engine Badge */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-[10px]">
                {engine}
              </span>
            </div>
          </div>

          {/* Integrated Datacenter Telemetry Terminal (OLED Screen) */}
          <div className="rounded-xl bg-[#06080c] border border-white/10 p-3.5 font-mono text-xs text-white/90 relative overflow-hidden shadow-inner">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between text-[11px] text-white/40 pb-2 mb-2.5 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00ff87]" />
                <span className="text-white/70 font-semibold">{title}</span>
              </div>
              <span className="text-[#00ff87]">{syncLatency}</span>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[10px] text-white/40">{statLabel}</div>
                <div className="text-sm font-bold text-[#00ff87] tabular">{statValue}</div>
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[10px] text-white/40">Main Thread</div>
                <div className="text-sm font-bold text-sky-400 tabular">0.2ms / 50ms</div>
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[10px] text-white/40">DB Queue</div>
                <div className="text-sm font-bold text-white tabular">Async Non-blocking</div>
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[10px] text-white/40">Pool / Sync</div>
                <div className="text-sm font-bold text-amber-400 tabular">Redis + Hikari</div>
              </div>
            </div>

            {/* Simulated Live Console Logs */}
            <div className="space-y-1 text-[10px] text-white/60">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00ff87]">[AUTH]</span>
                <span>JWT Salted Session Verified • RBAC Filter Applied</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sky-400">[ASYNC]</span>
                <span>Database Worker Dispatched • 0 Stalled Threads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">[REDIS]</span>
                <span>Cluster Channel Pub/Sub Heartbeat Acknowledged</span>
              </div>
            </div>
          </div>

          {/* Server Drive Bays & Ventilated Honeycomb Faceplate */}
          <div className="grid grid-cols-6 gap-2 pt-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-6 rounded-md bg-[#121822] border border-white/5 flex items-center justify-between px-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: i === (pulseTick % 6) ? '#00ff87' : 'rgba(0, 255, 135, 0.2)',
                    boxShadow: i === (pulseTick % 6) ? '0 0 6px #00ff87' : 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom Rack Lip */}
          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#00ff87]" />
              <span>{endpointsCount}</span>
            </div>
            <span className="text-white/70 font-semibold">{badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
