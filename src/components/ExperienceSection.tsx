import { EXPERIENCES, CLIENT_REVIEWS } from '../data/projectsData';
import { Briefcase, Star, CheckCircle, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-bg relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00ff87]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1217] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-4 shadow-[0_0_15px_rgba(0,255,135,0.15)]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial & Academic Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Experience and client delivery.
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed">
            Roles, commercial client commissions, and peer-reviewed research. Verified on-time delivery with zero tick stalls or unhandled downtime.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Experience Timeline
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-white/10">
              {EXPERIENCES.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-[#090c10] border-2 border-[#00ff87] group-hover:scale-125 transition-transform shadow-[0_0_10px_#00ff87]" />

                  <div className="p-6 rounded-3xl bg-[#0e1217] border border-white/10 hover:border-[#00ff87]/40 transition-all duration-300 shadow-xl">
                    {/* Role header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-lg font-bold text-white">
                        {item.role}
                      </h4>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30 shadow-[0_0_8px_rgba(0,255,135,0.2)]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8b99ad] mb-3.5">
                      <span className="text-[#00ff87] font-semibold">{item.company}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>

                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullet achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-white/90">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00ff87] flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-[#151a22] text-[11px] font-mono text-[#8b99ad]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback & Research Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Verified Client Feedback
            </h3>

            {/* Rollerite Summary Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-heading font-bold text-lg text-white">
                    Rollerite LLC Commissions
                  </div>
                  <div className="text-xs font-mono text-[#8b99ad]">
                    Commercial Java Server Plugins
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/40 text-[#00ff87] font-mono font-bold text-sm shadow-[0_0_12px_rgba(0,255,135,0.2)]">
                  <Star className="w-4 h-4 fill-[#00ff87] text-[#00ff87]" />
                  <span>4.83 / 5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-[#141a22] text-center text-xs font-mono">
                <div>
                  <div className="font-bold text-lg text-white">8</div>
                  <div className="text-[#8b99ad]">Commissions Completed</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-[#00ff87]">100%</div>
                  <div className="text-[#8b99ad]">On-Time Delivery</div>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="space-y-3.5">
                {CLIENT_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-[#141a22]/70 border border-white/5 text-xs space-y-2 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white font-mono">
                        {rev.client}
                      </span>
                      <div className="flex items-center text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(rev.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#94a3b8] italic leading-relaxed">
                      "{rev.review}"
                    </p>
                    <div className="text-[11px] font-mono text-white/40 flex justify-between pt-1">
                      <span>{rev.project}</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Publication Highlight */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e1217] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87] flex-shrink-0 shadow-[0_0_12px_rgba(0,255,135,0.2)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    IEEE ITC-Egypt 2025 Paper
                  </h4>
                  <p className="text-xs font-mono text-[#8b99ad]">
                    International Telecommunications Conference
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Co-authored research on "Smart Greenhouse Automation with Closed-Loop Sensor Telemetry", accepted after peer review for its embedded C++ firmware architecture and deterministic telemetry loops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
