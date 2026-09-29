import { SKILL_CATEGORIES } from '../data/projectsData';
import { Terminal, Cpu, Database, Smartphone, Wrench } from 'lucide-react';

export function SkillsSection() {
  const categoryIcons = [
    Terminal,
    Smartphone,
    Database,
    Cpu,
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#090c10] border-y border-white/5 relative overflow-hidden">
      {/* Background soft ambient green lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00ff87]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1217] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-4 shadow-[0_0_15px_rgba(0,255,135,0.15)]">
            <Wrench className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Technologies I write and deploy daily.
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed">
            From high-throughput server backends and custom canvas engines to microcontroller firmware and message brokers.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <div
                key={cat.title}
                className="p-6 sm:p-8 rounded-3xl bg-[#0e1319]/80 border border-white/10 hover:border-[#00ff87]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#00ff87]/10 border border-[#00ff87]/20 flex items-center justify-center text-[#00ff87] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,135,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#8b99ad] font-normal">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-6 space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-[#141a23]/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-[#141a23] transition-colors"
                      >
                        <div>
                          <span className="font-semibold text-sm text-white">
                            {skill.name}
                          </span>
                          <p className="text-xs text-[#8b99ad] font-mono leading-tight mt-0.5">
                            {skill.note}
                          </p>
                        </div>
                        <span className="self-start sm:self-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#090d12] border border-white/10 text-[#00ff87]">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
