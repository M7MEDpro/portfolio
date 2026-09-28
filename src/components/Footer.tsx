import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal as TerminalIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const [cairoTime, setCairoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format for Cairo (UTC+3)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCairoTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-800 bg-[#070A11] relative text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/avatar/badawy.png"
                alt="Mohamed Badawy"
                className="w-10 h-10 rounded-xl border border-cyan-500/40 object-cover"
              />
              <div>
                <span className="font-display font-bold text-white text-lg block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-cyan-neon">
                  {PERSONAL_INFO.alias} • Systems & Mobile Architect
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-sans">
              Specialized in high-concurrency Java backend engines, distributed IoT architectures, and production-grade Flutter applications. Designed for longevity, resilience, and maximum throughput.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Cairo Time: <strong className="text-white">{cairoTime || 'UTC+3'}</strong></span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-slate-300 font-semibold uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#architecture" className="hover:text-cyan-neon transition">Architecture Pillars</a></li>
              <li><a href="#projects" className="hover:text-cyan-neon transition">Verified Deliverables</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-neon transition">Client Trust (5.0)</a></li>
              <li><a href="#skills" className="hover:text-cyan-neon transition">Skill Matrix</a></li>
              <li><a href="#experience" className="hover:text-cyan-neon transition">Experience Roadmap</a></li>
              <li><a href="#contact" className="hover:text-cyan-neon transition">Commission / Hire</a></li>
            </ul>
          </div>

          {/* Connect & Actions */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs">
            <span className="text-slate-300 font-semibold uppercase tracking-wider block">
              Connect & CLI
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              </a>
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-neon hover:bg-cyan-500/20 transition"
                title="Terminal CLI"
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>CLI (⌘K)</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              Motto: <span className="italic text-slate-300">"{PERSONAL_INFO.motto}"</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Mohamed Badawy (M7MEDpro). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Crafted with strict engineering standards</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-neon border border-slate-800 transition"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
