import { useEffect, useState, useRef } from 'react';

interface LaptopMockupProps {
  title: string;
  category?: string;
  image?: string;
  url?: string;
  badge?: string;
  statLabel?: string;
  statValue?: string;
  accentColor?: string;
  tiltDirection?: 'left' | 'right';
  children?: React.ReactNode;
}

export function LaptopMockup({
  title,
  image,
  url = 'https://badawy.dev',
  badge = 'Production Build',
  statLabel = 'Status',
  statValue = 'Active 60 FPS',
  accentColor = '#00ff87',
  tiltDirection = 'left',
  children,
}: LaptopMockupProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
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
  const rotX = 6 - mouseOffset.y * 8;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] mx-auto select-none py-6"
      style={{ perspective: '1400px' }}
    >
      {/* Ambient Neon Glow underneath */}
      <div
        className="absolute -inset-6 rounded-3xl blur-[70px] opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(0, 255, 135, 0.08) 50%, transparent 75%)`,
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
        {/* Laptop Screen Lid */}
        <div className="relative w-full aspect-[16/10.5] rounded-2xl bg-[#0f131a] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(0,255,135,0.15)] border border-[#263142] ring-1 ring-white/10 overflow-hidden flex flex-col">
          {/* Top Bezel with Camera & Sensor */}
          <div className="relative h-6 bg-[#090c10] rounded-t-xl px-3 flex items-center justify-between border-b border-white/5">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            {/* Browser Address Bar Pill */}
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-white/50 max-w-[220px] truncate">
              <span className="text-[#00ff87]">https://</span>
              <span className="text-white/80 truncate">{url.replace('https://', '')}</span>
            </div>

            {/* Quick status dot */}
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#00ff87]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Screen Content Viewport (Interactive Custom UI OR High-Resolution Image + HUD Overlay) */}
          <div className="relative flex-1 w-full rounded-b-xl overflow-hidden bg-[#07090d] group">
            {children ? (
              <div className="w-full h-full relative z-10 overflow-hidden">
                {children}
              </div>
            ) : (
              <>
                {/* Project Screenshot */}
                {image && (
                  <img
                    src={image}
                    alt={`${title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom HUD Bar on Screen */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between p-2 rounded-xl bg-[#0d1217]/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#00ff87]/20 text-[#00ff87] font-mono font-bold text-[10px]">
                      {badge}
                    </span>
                    <span className="text-xs font-semibold text-white truncate max-w-[180px]">
                      {title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-white/50">{statLabel}:</span>
                    <span className="font-bold text-[#00ff87]">{statValue}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Laptop Keyboard Deck & Base */}
        <div className="relative w-[106%] -left-[3%] h-4 bg-gradient-to-b from-[#1b232e] to-[#0c0f14] rounded-b-xl border-t border-white/20 shadow-2xl flex justify-center items-start">
          {/* Front Opening Notch */}
          <div className="w-20 h-1.5 bg-[#080a0e] rounded-b-md mx-auto" />
        </div>
      </div>
    </div>
  );
}
