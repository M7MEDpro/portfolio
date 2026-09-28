import { useEffect, useState } from 'react';
import type { Project } from '../data/projectsData';
import { Wifi, Battery, Activity } from 'lucide-react';

interface PhoneMockupProps {
  project: Project;
  scrollProgress: number; // 0 to 1
}

export function PhoneMockup({ project, scrollProgress }: PhoneMockupProps) {
  const [currentTime, setCurrentTime] = useState('9:41');

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

  // Calculate subtle scroll-linked tilt: rotateY oscillates smoothly between -7deg and +7deg
  // based on scrollProgress across the 5 projects
  const tiltY = Math.sin(scrollProgress * Math.PI * 4) * 6; // -6deg to +6deg
  const tiltX = 4 + Math.cos(scrollProgress * Math.PI * 2) * 2; // 2deg to 6deg

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none pointer-events-none sm:pointer-events-auto">
      {/* Ambient soft radial glow matching current project accent */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* 3D tilt container */}
      <div
        className="relative transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `perspective(1200px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
        }}
      >
        {/* Outer Phone Shell (Concentric 44px radius) */}
        <div className="relative w-full aspect-[9/18.8] rounded-[44px] bg-[#10141c] p-3 shadow-phone-frame border border-[#2b3345] ring-1 ring-white/10 overflow-hidden">
          {/* Hardware buttons on edges */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#252d3d] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-[#252d3d] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-[#252d3d] rounded-l-sm" aria-hidden="true" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-[#252d3d] rounded-r-sm" aria-hidden="true" />

          {/* Inner Display (Concentric 38px radius: 44px - 6px padding = 38px) */}
          <div className="relative w-full h-full rounded-[38px] bg-[#0c0f15] overflow-hidden flex flex-col border border-white/5">
            {/* Dynamic Island Pill & Speaker */}
            <div className="absolute top-2.5 inset-x-0 z-30 flex justify-center items-center pointer-events-none">
              <div className="h-6 w-28 bg-black rounded-full flex items-center justify-between px-2.5 border border-white/10 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#171a21] border border-white/10 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#2a3a55]" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a1510] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Mobile Status Bar */}
            <div className="relative z-20 pt-3 px-6 pb-1 flex justify-between items-center text-[11px] font-mono text-white/70">
              <span className="font-semibold tracking-tight">{currentTime}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-[2px] items-end h-2.5">
                  <span className="w-[2px] h-1 bg-white/70 rounded-xs" />
                  <span className="w-[2px] h-1.5 bg-white/70 rounded-xs" />
                  <span className="w-[2px] h-2 bg-white/70 rounded-xs" />
                  <span className="w-[2px] h-2.5 bg-white/70 rounded-xs" />
                </div>
                <Wifi className="w-3 h-3 text-white/70" />
                <Battery className="w-3.5 h-3.5 text-white/70" />
              </div>
            </div>

            {/* Project Screen Content with Cross-fade transition */}
            <div className="relative flex-1 w-full overflow-hidden flex flex-col justify-between pt-4 pb-3 px-3">
              {/* Project Image Viewport */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#141822] border border-white/10 flex flex-col justify-between">
                {/* Visual Screenshot */}
                <div className="relative w-full h-44 overflow-hidden bg-[#0e1219]">
                  <img
                    key={project.id}
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="w-full h-full object-cover object-top transition-opacity duration-500 opacity-90 hover:opacity-100 img-outline"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141822] via-[#141822]/20 to-transparent" />
                </div>

                {/* Live Telemetry / System Card */}
                <div className="p-3.5 flex flex-col justify-end space-y-2.5 z-10">
                  {/* Status chip */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/40 border border-white/10 text-white/90">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-ping"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      {project.screenDetails.status}
                    </span>
                    <span className="text-[10px] font-mono text-white/60">
                      {project.screenDetails.badge}
                    </span>
                  </div>

                  {/* Primary Metric Box */}
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-0.5">
                      <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3 text-white/60" />
                        {project.screenDetails.metricLabel}
                      </span>
                      <span
                        className="font-bold tabular text-xs"
                        style={{ color: project.accentColor }}
                      >
                        {project.screenDetails.metricValue}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: '78%',
                          backgroundColor: project.accentColor,
                        }}
                      />
                    </div>
                  </div>

                  {/* Architecture & Stack subtext */}
                  <p className="text-[10px] text-white/70 font-mono leading-tight px-0.5">
                    {project.screenDetails.subtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="py-2 flex justify-center items-center pointer-events-none">
              <div className="w-32 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
