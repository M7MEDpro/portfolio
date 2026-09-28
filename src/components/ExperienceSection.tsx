import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0E18]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-neon">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Experience & <span className="text-gradient-cyan">Leadership</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-sans">
            A proven record of client contract execution, technical student branch leadership, and algorithmic education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 md:pl-8 border-l-2 border-slate-800 hover:border-cyan-500/60 transition-colors group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    exp.isCurrent
                      ? 'bg-cyan-neon border-[#07090E] shadow-neon-cyan'
                      : 'bg-slate-800 border-slate-700 group-hover:bg-cyan-500'
                  }`} />

                  <div className="p-6 rounded-2xl bg-[#0D121F] border border-slate-800 group-hover:border-slate-700 transition space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-cyan-neon font-semibold block">
                          {exp.company}
                        </span>
                        <h3 className="text-lg font-display font-bold text-white">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location} • {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-neon shrink-0 mt-1" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Box */}
            <div className="p-6 rounded-2xl bg-[#0D121F] border border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-2 text-cyan-neon font-mono text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-white text-base">
                  Bachelor of Engineering
                </h3>
                <p className="text-xs text-cyan-neon font-mono">
                  Software Engineering & Information Technology
                </p>
                <p className="text-xs text-slate-400">
                  Faculty of Engineering and Technology, Egyptian Chinese University (ECU)
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">2024 – 2029</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                    GPA: 3.74 / 4.0
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Honors */}
            <div className="p-6 rounded-2xl bg-[#0D121F] border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Honors & Certifications
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div key={cIdx} className="pb-3 border-b border-slate-800/60 last:border-0 last:pb-0 space-y-1">
                    <h4 className="text-xs font-display font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-neon">
                      {cert.issuer}
                    </p>
                    <span className="inline-block text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* English Proficiency Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30 space-y-2">
              <span className="text-xs font-mono text-violet-400 font-semibold block">
                🌐 International Communication
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certified <span className="text-white font-bold">C1 Advanced English</span> (EF SET 68/100). Fluent technical dialogue, real-time client sprint syncs, and formal documentation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
