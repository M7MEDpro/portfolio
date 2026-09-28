import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/projectsData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

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
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Name / Brand */}
        <a
          href="#"
          className="group flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
          aria-label="Mohamed Badawy - Home"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border group-hover:border-accent transition-colors bg-surface flex-shrink-0">
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
            <span className="font-heading font-semibold text-[1.05rem] text-text tracking-tight group-hover:text-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-muted flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Cairo, EG
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted hover:text-text rounded-md hover:bg-surface transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="h-4 w-px bg-border mx-2" aria-hidden="true" />

          {/* Resume Link */}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-text bg-surface hover:bg-surface-2 border border-border rounded-lg transition-colors group"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-text transition-colors" />
          </a>

          {/* Theme Toggle */}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-surface text-muted hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-base font-medium text-muted hover:text-text hover:bg-surface-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border flex items-center justify-between">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-text bg-surface-2 border border-border rounded-lg w-full justify-center"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-4 h-4 text-muted" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
