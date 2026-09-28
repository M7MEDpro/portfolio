import { ArrowDown, Mail, ShieldCheck, Cpu, Smartphone, Layers, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projectsData';

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const proofChips = [
    { label: "Java 21 & Spring Boot", icon: Layers },
    { label: "Paper & Velocity Distributed", icon: ShieldCheck },
    { label: "Flutter Cross-Platform", icon: Smartphone },
    { label: "ESP32 Embedded C++", icon: Cpu },
    { label: "IEEE Research Co-Author", icon: Award },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-text font-medium">{PERSONAL_INFO.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.12] mb-6">
            I build backend systems, Flutter apps, and connected hardware.
          </h1>

          {/* Supporting paragraph */}
          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl font-normal">
            Software engineering student and systems developer based in Cairo. Focused on low-latency Java architectures, clean domain modeling, and responsive hardware-integrated mobile applications.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-[#0c1813] font-semibold text-sm hover:brightness-105 active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span>Explore 5 Real Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border text-text font-semibold text-sm hover:bg-surface-2 hover:border-accent active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Verified technical track record badges */}
          <div className="pt-8 border-t border-border">
            <p className="text-xs uppercase tracking-wider font-mono text-muted-dim mb-3.5">
              Verified Technical Competencies
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {proofChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-muted hover:text-text transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent" />
                    <span>{chip.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
