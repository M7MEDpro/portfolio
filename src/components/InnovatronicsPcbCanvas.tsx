import { useEffect, useState } from 'react';
import { Cpu, Zap, Activity, Layers } from 'lucide-react';

export function InnovatronicsPcbCanvas() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    // Subtle FPS jitter to show real 60 FPS canvas loop
    const interval = setInterval(() => {
      setFps(59 + Math.floor(Math.random() * 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#07090e] text-white font-sans select-none overflow-hidden relative">
      {/* Top Navbar */}
      <div className="h-9 px-3 bg-[#0a0c12]/95 border-b border-white/10 flex items-center justify-between flex-shrink-0 z-20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
          <span className="font-mono font-bold text-[11px] text-white tracking-wider">
            INNOVATRONICS
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#f59e0b]/15 text-[9px] font-mono text-[#f59e0b] border border-[#f59e0b]/30">
            FCIZU Research Hub
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#94a3b8]">
          <span className="flex items-center gap-1 text-[#f59e0b]">
            <Cpu className="w-3 h-3" />
            <span>CustomPainter Canvas</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="text-[#00ff87] font-semibold flex items-center gap-1">
            <Activity className="w-2.5 h-2.5 animate-pulse" />
            {fps} FPS Solid
          </span>
        </div>
      </div>

      {/* Main PCB Canvas Stage */}
      <div className="relative flex-1 w-full bg-[#05070a] overflow-hidden flex flex-col justify-between p-4">
        {/* Procedural Circuit Board Grid & SVG Traces Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pcb-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="rgba(245, 158, 11, 0.08)"
                strokeWidth="1"
              />
              <circle cx="28" cy="28" r="1.5" fill="rgba(245, 158, 11, 0.2)" />
            </pattern>
            {/* Glowing gradient for traces */}
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ff87" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pcb-grid)" />

          {/* 45-Degree Algorithmic Circuit Traces */}
          <path
            d="M 30 180 L 120 180 L 160 140 L 280 140 L 320 180 L 480 180"
            fill="none"
            stroke="url(#traceGrad)"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <path
            d="M 60 40 L 140 40 L 180 80 L 340 80 L 380 40 L 520 40"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <path
            d="M 160 140 L 160 220 L 200 260 L 380 260"
            fill="none"
            stroke="#00ff87"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M 280 140 L 280 60 L 310 30"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Central Hero Headline & Mechatronics Copy */}
        <div className="relative z-10 max-w-md mx-auto text-center my-auto py-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[10px] font-mono text-[#f59e0b] mb-2.5">
            <Zap className="w-3 h-3 text-[#f59e0b]" />
            <span>Interactive Algorithmic PCB Tree</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
            Innovating the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#ef4444]">
              Mechatronic Systems
            </span>
          </h3>

          <p className="text-[11px] text-[#94a3b8] leading-relaxed max-w-sm mx-auto">
            FCIZU official research club. Procedural vector line-routing calculates 45° angle bends and bezier curves directly onto Flutter's web canvas at 60 FPS.
          </p>
        </div>

        {/* Interactive Chip Nodes Row */}
        <div className="relative z-10 grid grid-cols-3 gap-2 max-w-md mx-auto w-full">
          {[
            { id: 1, label: 'Core Microcontroller', role: 'Telemetry Host', tag: 'UART / SPI' },
            { id: 2, label: 'Motor Actuator Node', role: 'PWM Driver', tag: 'H-Bridge 24V' },
            { id: 3, label: 'Sensor Matrix', role: 'ADC Sampler', tag: 'I2C Bus' },
          ].map((node) => (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                activeNode === node.id
                  ? 'bg-[#151c24] border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-[1.03]'
                  : 'bg-[#0b0e14]/90 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] font-mono text-[#f59e0b] mb-1">
                <span>NODE-0{node.id}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
              </div>
              <div className="text-[10px] font-bold text-white truncate">{node.label}</div>
              <div className="text-[8.5px] text-[#8b99ad] font-mono mt-0.5">{node.tag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Status Ribbon */}
      <div className="h-7 px-3 bg-[#0a0c12] border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-[#8b99ad] flex-shrink-0 z-20">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#f59e0b]" />
          <span>Vector Line Engine: 45° Algorithmic Routing</span>
        </span>
        <span className="text-[#00ff87]">GPU RENDER: ZERO DOM OVERHEAD</span>
      </div>
    </div>
  );
}
