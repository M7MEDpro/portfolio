import { useEffect, useState, useRef } from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneMockupProps {
  title: string;
  category?: string;
  image: string;
  badge?: string;
  statLabel?: string;
  statValue?: string;
  accentColor?: string;
  tiltDirection?: 'left' | 'right';
}

export function PhoneMockup({
  title,
  image,
  badge = 'Flutter Mobile',
  statLabel = 'Latency',
  statValue = '<38ms',
  accentColor = '#00ff87',
  tiltDirection = 'right',
}: PhoneMockupProps) {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
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

  const baseRotY = tiltDirection === 'left' ? -12 : 12;
  const rotY = baseRotY + mouseOffset.x * 12;
  const rotX = 8 - mouseOffset.y * 10;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto select-none py-4"
      style={{ perspective: '1400px' }}
    >
      {/* Ambient soft radial glow */}
      <div
        className="absolute -inset-8 rounded-full blur-[80px] opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(0, 255, 135, 0.1) 40%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* 3D Tilted Chassis */}
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer Titanium Frame (Concentric 46px outer radius) */}
        <div className="relative w-full aspect-[9/18.8] rounded-[46px] bg-[#0c1015] p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(0,255,135,0.2)] border border-[#232d3d] ring-1 ring-white/10 overflow-hidden">
          {/* Side Hardware Buttons */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-[#1f2736] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-[#1f2736] rounded-r-sm" aria-hidden="true" />

          {/* Inner Display (Concentric 40px radius: 46px - 6px padding = 40px) */}
          <div className="relative w-full h-full rounded-[40px] bg-[#07090d] overflow-hidden flex flex-col border border-white/10">
            {/* Dynamic Island Pill with camera */}
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

            {/* Full-Height Screen Image Viewport */}
            <div className="relative flex-1 w-full overflow-hidden flex flex-col justify-between">
              {/* Actual Project Screenshot */}
              <img
                src={image}
                alt={`${title} mobile preview`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Top and Bottom soft vignette overlays for readability */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Bottom HUD Overlay */}
              <div className="relative z-20 mt-auto p-3 m-2.5 rounded-2xl bg-[#090d12]/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-[#00ff87]/20 text-[#00ff87] text-[10px] font-mono font-bold">
                    {badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/60">
                    {statLabel}: <span className="text-[#00ff87] font-bold">{statValue}</span>
                  </span>
                </div>
                <div className="text-xs font-semibold text-white truncate">
                  {title}
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="py-2 flex justify-center items-center pointer-events-none z-20">
              <div className="w-32 h-1 bg-white/35 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
