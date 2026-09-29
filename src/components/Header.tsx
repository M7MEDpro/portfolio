import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Full Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070809]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Name / Brand */}
        <a
          href="#"
          className="group flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#00ff87] rounded-xl p-1"
          aria-label="Mohamed Badawy - Home"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00ff87]/30 group-hover:border-[#00ff87] transition-all bg-[#0e1217] flex-shrink-0 shadow-[0_0_12px_rgba(0,255,135,0.2)]">
            <img
              src="/avatar/badawy.png"
              alt="Mohamed Badawy avatar"
              className="w-full h-full object-cover"
              width="40"
              height="40"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-[1.05rem] text-white tracking-tight group-hover:text-[#00ff87] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-[#8b99ad] flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" aria-hidden="true" />
              Cairo, EG
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#8b99ad] hover:text-white rounded-full hover:bg-white/5 transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-xs font-mono font-bold text-[#04120a] btn-neon rounded-full transition-all"
          >
            Hire Badawy
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-[#0e1217] text-[#8b99ad] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00ff87]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070809]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#8b99ad] hover:text-white hover:bg-white/5 rounded-xl transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 text-xs font-mono font-bold text-[#04120a] btn-neon rounded-xl"
            >
              Hire Badawy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
