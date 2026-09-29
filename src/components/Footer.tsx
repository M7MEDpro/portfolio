import { useEffect, useState } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projectsData';

export function Footer() {
  const [cairoTime, setCairoTime] = useState('');

  useEffect(() => {
    const updateCairoTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCairoTime(timeStr);
      } catch {
        setCairoTime('Cairo Time');
      }
    };

    updateCairoTime();
    const interval = setInterval(updateCairoTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#070809] border-t border-white/5 text-xs text-[#8b99ad]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="font-semibold text-white">
              {PERSONAL_INFO.name} ({PERSONAL_INFO.handle})
            </p>
            <p className="text-[#546274] font-mono text-[11px]">
              Engineered with React 19, TypeScript, and Tailwind CSS. Hosted on Vercel.
            </p>
          </div>

          {/* Cairo Local Time */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1217] border border-white/10 font-mono text-[11px] text-[#8b99ad] shadow-inner">
            <Clock className="w-3.5 h-3.5 text-[#00ff87]" />
            <span>Cairo, EG: {cairoTime}</span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0e1217] hover:bg-[#141a22] border border-white/10 text-[#8b99ad] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
