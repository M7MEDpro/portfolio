import React, { useState } from 'react';
import { Server, Smartphone, Database, Cpu, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);

  const icons = [Server, Smartphone, Database, Cpu];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-neon">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
              Engineering <span className="text-gradient-cyan">Skill Matrix</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-sans [text-wrap:pretty]">
            Technical depth anchored in production systems, mathematical problem solving, and low-latency architectural patterns.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Server;
            const isSelected = selectedDomain === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDomain(idx)}
                className={`p-5 rounded-2xl border text-left transition-colors duration-150 active:scale-[0.98] flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#141A29] to-[#0E1322] border-cyan-500 shadow-neon-cyan/50'
                    : 'bg-[#0B0F19]/80 border-slate-800/90 hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${isSelected ? 'text-cyan-neon' : 'text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 tabular-nums">
                    {cat.skills.length} Competencies
                  </span>
                </div>
                <div>
                  <h3 className={`font-display font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    Click to inspect stack
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Skills Detail */}
        <div className="rounded-2xl p-8 bg-[#0D121F] border border-cyan-500/20 shadow-2xl text-left">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-neon uppercase tracking-wider block mb-1">
                Domain Specification
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                {SKILL_CATEGORIES[selectedDomain].title}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-neon border border-cyan-500/30">
              Verified Production Proficiency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[selectedDomain].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-xl bg-[#121726] border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-150 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-white text-base">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-neon font-semibold text-[11px]">
                      {skill.level}
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {skill.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans [text-wrap:pretty]">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
