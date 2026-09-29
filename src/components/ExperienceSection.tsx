import { EXPERIENCES, CLIENT_REVIEWS, ACADEMIC_CERTIFICATES } from '../data/projectsData';
import { Briefcase, Star, CheckCircle, Award, ExternalLink, ShieldCheck } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-36 bg-[#07090e] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00ff87]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1217] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-4 shadow-[0_0_15px_rgba(0,255,135,0.15)]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial & Academic Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Production experience & client trust.
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed">
            High-performance Java roles, verified commercial commissions, and peer-reviewed published IEEE research.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>Experience Timeline</span>
              <span className="text-xs font-mono text-[#00ff87] px-2 py-0.5 rounded bg-[#00ff87]/10 border border-[#00ff87]/20">
                10 Commissions @ 5.0/5.0
              </span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-white/10">
              {EXPERIENCES.map((item, idx) => (
                <div key={item.id} className="relative group">
                  {/* Timeline indicator node */}
                  <div
                    className={`absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-[#090c10] border-2 transition-transform shadow-[0_0_10px_#00ff87] group-hover:scale-125 ${
                      idx === 0
                        ? 'border-[#00ff87] ring-4 ring-[#00ff87]/20'
                        : 'border-[#00ff87]'
                    }`}
                  />

                  <div
                    className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-xl ${
                      idx === 0
                        ? 'bg-[#0e141d] border-[#00ff87]/40 shadow-[0_0_30px_rgba(0,255,135,0.08)]'
                        : 'bg-[#0e1217] border-white/10 hover:border-[#00ff87]/40'
                    }`}
                  >
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

                    {/* Company with Link */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8b99ad] mb-3.5">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ff87] font-semibold hover:underline flex items-center gap-1 group/link"
                        >
                          <span>{item.company}</span>
                          <ExternalLink className="w-3 h-3 group-link:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <span className="text-[#00ff87] font-semibold">{item.company}</span>
                      )}
                      <span>•</span>
                      <span>{item.period}</span>
                      <span>•</span>
                      <span className="text-white/60">{item.type}</span>
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

          {/* Client Feedback & Verification Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Verified Client Feedback
            </h3>

            {/* DevRoom & Rollerite Combined Summary Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e1217] border border-[#00ff87]/30 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-heading font-bold text-lg text-white">
                    DevRoom & Client Commissions
                  </div>
                  <div className="text-xs font-mono text-[#8b99ad]">
                    Commercial Java Server Architecture
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/40 text-[#00ff87] font-mono font-bold text-sm shadow-[0_0_12px_rgba(0,255,135,0.2)]">
                  <Star className="w-4 h-4 fill-[#00ff87] text-[#00ff87]" />
                  <span>5.0 / 5.0</span>
                </div>
              </div>

              {/* Verified Metrics Counter */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-[#141a22] text-center text-xs font-mono">
                <div>
                  <div className="font-bold text-xl text-white">10</div>
                  <div className="text-[#8b99ad]">DevRoom Commissions</div>
                </div>
                <div>
                  <div className="font-bold text-xl text-[#00ff87]">5.0 / 5.0</div>
                  <div className="text-[#8b99ad]">Flawless Client Rating</div>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="space-y-3.5">
                {CLIENT_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-[#141a22]/70 border border-white/5 text-xs space-y-2 hover:border-[#00ff87]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white font-mono flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00ff87]" />
                        <span>{rev.client}</span>
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
                  <a
                    href="https://doi.org/10.1109/ITC-Egypt66095.2025.11186572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#00ff87] hover:underline flex items-center gap-1"
                  >
                    <span>DOI: 10.1109/ITC-Egypt66095.2025.11186572</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Co-authored research on "Agricultural Monitoring and Automation Enabler: Feedback-Based Desktop Remotely Controlled System", accepted after rigorous peer review for its deterministic sensor loops.
              </p>
            </div>

            {/* Verified Academic & Competition Certificates */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e1217] border border-white/10 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase text-[#00ff87] tracking-wider font-semibold">
                Verified Credentials
              </div>
              <div className="space-y-2">
                {ACADEMIC_CERTIFICATES.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3 rounded-2xl bg-[#141a22]/60 border border-white/5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-xs text-white">{cert.title}</div>
                      <div className="text-[10px] text-[#8b99ad] font-mono">{cert.issuer} • {cert.date}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#00ff87] bg-[#00ff87]/10 border border-[#00ff87]/30 flex-shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
