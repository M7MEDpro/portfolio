import React from 'react';
import { Cpu, Zap, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

export const SeniorHighlights: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "High-Concurrency Server Architecture",
      subtitle: "Java • Spigot/Paper/Velocity • Multi-Threading",
      description: "Architecting enterprise gaming and microservice backends that withstand high player spikes without main-thread hiccups. Zero-downtime asynchronous pipelines decoupled from synchronous game ticks.",
      metrics: ["Sub-1ms tick execution", "Non-blocking database queues", "Cross-server packet routing"],
      badge: "Backend Core",
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "group-hover:border-cyan-500/50",
      accent: "text-cyan-neon"
    },
    {
      icon: Zap,
      title: "Intelligent Selective Caching",
      subtitle: "Memory Optimization • 80% RAM Footprint Slash",
      description: "Eliminating database I/O bottlenecks with custom two-tier caching strategies. Volatile hot records reside in memory with instant eviction, synchronizing asynchronously with MySQL and MongoDB.",
      metrics: ["~80% RAM footprint reduction", "95%+ cache hit ratio", "Zero blocking read penalties"],
      badge: "Performance Engineering",
      color: "from-violet-500/20 to-violet-500/5",
      borderColor: "group-hover:border-violet-500/50",
      accent: "text-violet-400"
    },
    {
      icon: Layers,
      title: "Full-Stack Hardware to Mobile Sync",
      subtitle: "ESP32 • C++ Engine • Flutter (Mobile & Desktop)",
      description: "Connecting raw physical sensor hardware (ultrasonic, LDR, relays) to responsive consumer mobile dashboards. Event-driven C++ middleware guarantees reliable serial and WiFi packet integrity.",
      metrics: ["Sub-50ms device-to-app latency", "Fail-safe offline autonomy", "Cross-platform parity (iOS/Android/Desktop)"],
      badge: "Distributed IoT",
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "group-hover:border-emerald-500/50",
      accent: "text-emerald-400"
    },
    {
      icon: ShieldCheck,
      title: "Peer-Reviewed Scientific Rigor",
      subtitle: "IEEE ITC-Egypt Published Author • Algorithmic Rigor",
      description: "Empirical benchmarking and technical documentation meeting strict IEEE publication standards. 120+ algorithmic challenges conquered on Codeforces and LeetCode, ensuring mathematically optimal solutions.",
      metrics: ["Official IEEE DOI publication", "Rigorous closed-loop feedback testing", "Data structures & graph theory mastery"],
      badge: "Research & DSA",
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "group-hover:border-amber-500/50",
      accent: "text-amber-400"
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#0A0E18]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-neon">
              <span>Senior Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
              Built for Performance, <br />
              <span className="text-gradient-cyan">Engineered for Scale.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-sans [text-wrap:pretty]">
            Every codebase I architect adheres to strict low-latency constraints, defensive memory management, and verifiable real-world benchmarks.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-7 bg-gradient-to-b ${pillar.color} border border-slate-800/90 ${pillar.borderColor} transition-colors duration-200 hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-900/90 border border-slate-800 ${pillar.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-neon transition-colors duration-150 [text-wrap:balance]">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 [text-wrap:pretty]">
                  {pillar.description}
                </p>

                {/* Metrics list */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {pillar.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle className={`w-3.5 h-3.5 ${pillar.accent} shrink-0`} />
                      <span className="tabular-nums">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
