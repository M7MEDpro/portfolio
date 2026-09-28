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
    <section id="skills" className="py-20 md:py-28 bg-surface/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-muted mb-4">
            <Wrench className="w-3.5 h-3.5 text-accent" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text leading-tight mb-4">
            Skills grounded in production experience.
          </h2>
          <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
            Technologies I have deployed to live networks, programmed microcontrollers with, or written client plugins for.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <div
                key={cat.title}
                className="p-6 sm:p-8 rounded-3xl bg-surface border border-border hover:border-accent/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-text">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted font-normal">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-6 space-y-3.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-surface-2/60 border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                      >
                        <div>
                          <span className="font-semibold text-sm text-text">
                            {skill.name}
                          </span>
                          <p className="text-xs text-muted font-mono leading-tight mt-0.5">
                            {skill.note}
                          </p>
                        </div>
                        <span className="self-start sm:self-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-surface border border-border text-muted">
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
