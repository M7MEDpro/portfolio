import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0A0E18]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Client Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
              Verified Client <span className="text-gradient-cyan">Track Record</span>
            </h2>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-left max-w-sm">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-sm tabular-nums">4.83 / 5.00 Overall Rating</span>
            </div>
            <p className="text-slate-400 text-[11px] [text-wrap:pretty]">
              8 completed enterprise commissions with 5.0/5.0 average reviews across US, European & regional clients.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative rounded-2xl p-7 bg-[#0D121F] border border-slate-800 hover:border-emerald-500/40 transition-colors duration-200 flex flex-col justify-between space-y-6 hover:shadow-2xl"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-base">
                        {test.client}
                      </span>
                      <span className="text-xs">{test.country}</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-neon block">
                      {test.role}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Project Context */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                  Commission: <span className="text-slate-200">{test.project}</span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-300 text-sm leading-relaxed italic relative pl-4 border-l-2 border-cyan-500/40 [text-wrap:pretty]">
                  "{test.feedback}"
                </blockquote>
              </div>

              {/* Verified badge */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Commission
                </span>
                <span className="tabular-nums">{test.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
