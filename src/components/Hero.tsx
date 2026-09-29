import { ArrowRight, Mail, Terminal, Layers, Cpu, Smartphone, Award } from 'lucide-react';
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
    { label: "Paper & Velocity Systems", icon: Terminal },
    { label: "Flutter Mobile & Desktop", icon: Smartphone },
    { label: "ESP32 Embedded C++", icon: Cpu },
    { label: "IEEE Research Co-Author", icon: Award },
  ];

  return (
    <section className="relative pt-14 pb-20 md:pt-24 md:pb-32 overflow-hidden text-center">
      {/* Ambient Neon Glow Spot in Background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00ff87]/15 to-[#10b981]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1217] border border-[#00ff87]/30 text-xs font-mono text-muted mb-8 shadow-[0_0_20px_rgba(0,255,135,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" aria-hidden="true" />
          <span className="text-white font-medium">{PERSONAL_INFO.status}</span>
        </div>

        {/* Main Sentra-style Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          High-Throughput Backend.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] via-[#22c55e] to-[#10b981]">
            Low-Latency Systems.
          </span>
        </h1>

        {/* Human, authentic bio paragraph */}
        <p className="text-base sm:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
          I'm Mohamed Badawy. I build distributed Java server systems, responsive cross-platform Flutter applications, and connected IoT hardware that perform with zero lag under real-world scale.
        </p>

        {/* Sentra-style Glowing Slider Pill Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="group relative flex items-center justify-between pl-2 pr-6 py-2 rounded-full glow-pill-container text-white transition-all hover:border-[#00ff87]/50 active:scale-[0.98]"
          >
            {/* Glowing neon green handle pill */}
            <span className="flex items-center justify-center px-4 py-2.5 rounded-full btn-neon text-xs font-bold font-mono tracking-tight mr-4">
              Explore 5 Projects
            </span>
            <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
              <span>View Live Builds</span>
              <ArrowRight className="w-4 h-4 text-[#00ff87] group-hover:translate-x-1.5 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0d1217] hover:bg-[#141b22] border border-white/10 hover:border-[#00ff87]/40 text-white font-semibold text-xs font-mono active:scale-[0.98] transition-all"
          >
            <Mail className="w-4 h-4 text-[#00ff87]" />
            <span>Contact Badawy</span>
          </a>
        </div>

        {/* Sentra-style Metrics Row (500+ / 300+ / 12) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#0d1217]/70 border border-white/10 backdrop-blur-xl shadow-2xl mb-12">
          <div className="text-center p-2">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-[#00ff87] tabular">
              20.0 TPS
            </div>
            <div className="text-xs font-mono text-white/60 mt-1">Zero Server Tick Loss</div>
          </div>

          <div className="text-center p-2 border-l border-white/10">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-white tabular">
              4.83 / 5.0
            </div>
            <div className="text-xs font-mono text-white/60 mt-1">Client Satisfaction</div>
          </div>

          <div className="text-center p-2 border-l border-white/10">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-[#00ff87] tabular">
              30+
            </div>
            <div className="text-xs font-mono text-white/60 mt-1">Production Endpoints</div>
          </div>

          <div className="text-center p-2 border-l border-white/10">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-white tabular">
              &lt;40ms
            </div>
            <div className="text-xs font-mono text-white/60 mt-1">Local MQTT Telemetry</div>
          </div>
        </div>

        {/* Proof Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {proofChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0d12] border border-white/5 text-xs text-white/70 hover:text-white hover:border-[#00ff87]/30 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#00ff87]" />
                <span>{chip.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
