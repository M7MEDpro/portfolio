import { EXPERIENCES, CLIENT_REVIEWS } from '../data/projectsData';
import { Briefcase, Star, CheckCircle, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-muted mb-4">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>Track Record & Delivery</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text leading-tight mb-4">
            Work experience & client delivery.
          </h2>
          <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
            Roles, commercial plugin commissions, and academic research milestones. Every engagement delivered with direct communication and verifiable results.
          </p>
        </div>

        {/* 2-Column Layout: Left Experience Timeline, Right Verified Client Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl font-bold text-text mb-6 flex items-center gap-2">
              <span>Experience Timeline</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[2px] before:bg-border">
              {EXPERIENCES.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-110 transition-transform" />

                  <div className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors">
                    {/* Role header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-lg font-bold text-text">
                        {item.role}
                      </h4>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-dim text-accent border border-accent/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted mb-3.5">
                      <span className="text-accent font-semibold">{item.company}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullet achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-text/90">
                          <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-surface-2 text-[11px] font-mono text-muted"
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
            <h3 className="font-heading text-xl font-bold text-text mb-6 flex items-center gap-2">
              <span>Verified Client Feedback</span>
            </h3>

            {/* Rollerite Summary Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-heading font-bold text-lg text-text">
                    Rollerite LLC Commissions
                  </div>
                  <div className="text-xs font-mono text-muted">
                    Bespoke Java & Network Systems
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-accent-dim border border-accent/30 text-accent font-mono font-bold text-sm">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>4.83 / 5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-surface-2 text-center text-xs font-mono">
                <div>
                  <div className="font-bold text-base text-text">8</div>
                  <div className="text-muted">Commissions Delivered</div>
                </div>
                <div>
                  <div className="font-bold text-base text-accent">100%</div>
                  <div className="text-muted">On-Time Completion</div>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="space-y-4">
                {CLIENT_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-xl bg-surface-2/60 border border-border text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-text font-mono">
                        {rev.client}
                      </span>
                      <div className="flex items-center text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(rev.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-muted-dim'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted italic leading-relaxed">
                      "{rev.review}"
                    </p>
                    <div className="text-[11px] font-mono text-muted-dim flex justify-between">
                      <span>{rev.project}</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Publication Highlight */}
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-dim border border-accent/20 flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text text-base">
                    IEEE ITC-Egypt 2025 Publication
                  </h4>
                  <p className="text-xs font-mono text-muted">
                    International Telecommunications Conference
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Co-authored research on "Smart Greenhouse Automation with Closed-Loop Sensor Telemetry", accepted after peer review for its embedded firmware architecture and deterministic telemetry loops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
