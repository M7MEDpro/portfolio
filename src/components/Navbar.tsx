import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Proof of Work', href: '#projects' },
    { label: 'Client Feedback', href: '#testimonials' },
    { label: 'Skill Matrix', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-colors duration-200">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-200 ${
          scrolled 
            ? 'bg-[#090D15]/85 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-black/60' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src="/avatar/badawy.png" 
              alt="Mohamed Badawy" 
              className="w-9 h-9 rounded-xl border border-cyan-500/40 object-cover group-hover:scale-105 transition-transform duration-200 outline outline-1 outline-white/10 -outline-offset-1" 
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#07090E] rounded-full animate-pulse"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-sm md:text-base tracking-tight group-hover:text-cyan-neon transition-colors duration-150">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-neon border border-cyan-500/30">
                {PERSONAL_INFO.alias}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block font-mono">
              Systems & Mobile Architect
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-neon transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-neon hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="min-h-[40px] flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-cyan-neon border border-slate-700/60 text-xs font-mono transition-colors duration-150 active:scale-[0.98]"
            title="Open Interactive Terminal"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-neon" />
            <span>Terminal</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400 border border-slate-700">⌘K</kbd>
          </button>

          <a
            href="#contact"
            className="min-h-[40px] flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold text-xs font-mono hover:shadow-neon-cyan transition-transform duration-150 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTerminal}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-slate-800 text-cyan-neon border border-slate-700"
            aria-label="Terminal"
          >
            <TerminalIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl bg-[#090D15]/95 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {PERSONAL_INFO.availabilityStatus}
            </span>
          </div>

          <nav className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-cyan-neon transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-neon text-black font-semibold text-center text-xs font-mono"
            >
              Book an Architecture Call / Hire
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
