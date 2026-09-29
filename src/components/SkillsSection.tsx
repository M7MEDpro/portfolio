import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/projectsData';
import {
  Terminal,
  Smartphone,
  Database,
  Cpu,
  Sparkles,
  Zap,
  Code2,
} from 'lucide-react';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  const categoryIcons: Record<string, typeof Terminal> = {
    'Backend & Systems Concurrency': Terminal,
    'Mobile & Interactive Graphics': Smartphone,
    'Databases & Persistence': Database,
    'IoT Telemetry & DevOps': Cpu,
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-20 md:py-36 bg-[#07090d] border-y border-white/5 relative overflow-hidden">
      {/* Background Soft Emerald Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00ff87]/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0e1217] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-6 shadow-[0_0_20px_rgba(0,255,135,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Architecture & Stacks</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Battle-tested engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] via-[#22c55e] to-[#10b981]">
              capabilities.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed">
            High-concurrency Java server backends, reactive Flutter mobile apps with Riverpod, and embedded C++ microcontroller loops that hold steady under production stress.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10 max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                  : 'text-[#8b99ad] hover:text-white'
              }`}
            >
              All Stacks ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeTab === cat.title
                    ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                    : 'text-[#8b99ad] hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.title] || Code2;

            return (
              <div
                key={cat.title}
                className="p-6 sm:p-8 rounded-3xl bg-[#0d1217]/90 border border-white/10 hover:border-[#00ff87]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,255,135,0.08)]"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3.5 mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,135,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-[#8b99ad] font-normal mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List in Bento Card */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-2xl bg-[#131922]/80 border border-white/5 hover:border-[#00ff87]/30 hover:bg-[#161e2a] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/skill"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white group-hover/skill:text-[#00ff87] transition-colors">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/40 border border-white/10 text-white/70">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-[#94a3b8] font-sans leading-tight">
                            {skill.note}
                          </p>
                        </div>

                        {/* Benchmark Metric Pill */}
                        {skill.metric && (
                          <div className="self-start sm:self-center flex-shrink-0 px-2.5 py-1 rounded-lg bg-[#00ff87]/10 border border-[#00ff87]/30 font-mono text-[11px] font-bold text-[#00ff87] shadow-[0_0_10px_rgba(0,255,135,0.15)] flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-[#00ff87]" />
                            <span>{skill.metric}</span>
                          </div>
                        )}
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
