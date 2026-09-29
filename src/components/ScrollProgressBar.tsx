import { useEffect, useState } from 'react';

interface SectionMarker {
  id: string;
  label: string;
}

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections: SectionMarker[] = [
    { id: 'hero', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setScrollProgress(progress);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center select-none"
      aria-label="Scroll Progress Bar"
    >
      {/* Glassmorphic Cyber Column */}
      <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-[#0a0d13]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.8),0_0_15px_rgba(0,255,135,0.1)]">
        {/* Digital Percentage Pill */}
        <div className="font-mono text-[9px] font-bold text-[#00ff87] tabular-nums tracking-tighter mb-1">
          {Math.round(scrollProgress)}%
        </div>

        {/* Section Navigation Nodes */}
        <div className="relative flex flex-col items-center gap-4 py-1">
          {/* Vertical Background Track */}
          <div className="absolute top-1.5 bottom-1.5 w-[2px] bg-white/10 rounded-full" />

          {/* Active Glowing Progress Fill */}
          <div
            className="absolute top-1.5 w-[2px] bg-gradient-to-b from-[#00ff87] to-[#10b981] rounded-full transition-all duration-150 shadow-[0_0_8px_#00ff87]"
            style={{ height: `${Math.min(96, scrollProgress)}%` }}
          />

          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group relative z-10 flex items-center justify-center p-1 focus:outline-none"
                aria-label={`Jump to ${sec.label}`}
              >
                {/* Dot Node */}
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00ff87] scale-125 shadow-[0_0_10px_#00ff87] ring-2 ring-[#00ff87]/30'
                      : 'bg-white/20 hover:bg-white/60 group-hover:scale-110'
                  }`}
                />

                {/* Floating Tooltip Label on Hover (to the left) */}
                <div className="absolute right-7 px-2.5 py-1 rounded-lg bg-[#0e1217] border border-[#00ff87]/30 text-[10px] font-mono font-medium text-white shadow-xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
                  <span className="text-[#00ff87] mr-1">#</span>
                  {sec.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Pulsing Bottom Node */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff87]/40 animate-pulse mt-1" />
      </div>
    </div>
  );
}
