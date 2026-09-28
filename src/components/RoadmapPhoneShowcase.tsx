import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projectsData';
import { PhoneMockup } from './PhoneMockup';
import { RoadmapGutter } from './RoadmapGutter';
import { GithubIcon } from './Icons';
import {
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export function RoadmapPhoneShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup scroll listener to determine active project & calculate overall progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate overall progress across the projects container (0 to 1)
      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable > 0) {
        const currentProgress = Math.max(
          0,
          Math.min(1, -containerTop / totalScrollable)
        );
        setScrollProgress(currentProgress);
      }

      // Check which project section is closest to viewport center
      const viewportCenter = windowHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      projectRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const elementCenter = r.top + r.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (index: number) => {
    const target = projectRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeProject = PROJECTS[activeIndex] || PROJECTS[0];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative pt-16 pb-24 md:pt-24 md:pb-36 bg-bg transition-colors duration-300"
      aria-label="Featured Projects Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-muted mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Curated Portfolio • 5 Real Implementations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text leading-tight mb-4">
            Five systems built with rigor and care.
          </h2>
          <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
            Every project below represents production code, verified client deliverables, or peer-reviewed research. No conceptual mockups or unverified claims.
          </p>
        </div>

        {/* Mobile Horizontal Stepper (<768px) */}
        <div className="md:hidden flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-surface border border-border mb-8 overflow-x-auto">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => scrollToProject(idx)}
              className={`flex-1 min-w-[58px] py-2 px-1 rounded-xl text-center font-mono text-xs transition-all ${
                activeIndex === idx
                  ? 'bg-surface-3 text-text font-bold border border-accent shadow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              {proj.number}
            </button>
          ))}
        </div>

        {/* 3-Column Layout: Left Sticky Phone, Center Roadmap Gutter, Right Scrolling Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
          {/* Column 1: Pinned Sticky Phone (Hidden on small mobile, sticky on desktop) */}
          <div className="lg:col-span-5 sticky top-24 z-20 flex flex-col items-center">
            <div className="w-full max-w-[340px] sm:max-w-[370px]">
              <PhoneMockup project={activeProject} scrollProgress={scrollProgress} />
            </div>

            {/* Current Project Quick Status Bar on Desktop */}
            <div className="mt-6 hidden lg:flex items-center justify-between w-full max-w-[340px] px-4 py-2.5 rounded-xl bg-surface/80 border border-border text-xs font-mono text-muted">
              <span>
                Project {activeProject.number} of {PROJECTS.length.toString().padStart(2, '0')}
              </span>
              <span className="flex items-center gap-1.5 text-text font-medium">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeProject.accentColor }}
                />
                {activeProject.category}
              </span>
            </div>
          </div>

          {/* Column 2: Roadmap Gutter */}
          <div className="hidden lg:block lg:col-span-1 h-full py-12">
            <RoadmapGutter
              projects={PROJECTS}
              activeIndex={activeIndex}
              onSelectProject={scrollToProject}
              scrollProgress={scrollProgress}
            />
          </div>

          {/* Column 3: Scrolling Topics */}
          <div className="lg:col-span-6 space-y-24 md:space-y-36">
            {PROJECTS.map((project, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  ref={(el) => {
                    projectRefs.current[idx] = el;
                  }}
                  className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-500 ${
                    isActive
                      ? 'bg-surface/90 border-border shadow-card-hover opacity-100 scale-100'
                      : 'bg-surface/40 border-border/50 opacity-40 hover:opacity-75 scale-[0.99]'
                  }`}
                  style={{
                    borderColor: isActive ? 'var(--border)' : undefined,
                  }}
                >
                  {/* Active highlight glow border accent */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500"
                      style={{ backgroundColor: project.accentColor }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Header metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-bold"
                        style={{
                          backgroundColor: `${project.accentColor}20`,
                          color: project.accentColor,
                        }}
                      >
                        {project.number} / {PROJECTS.length.toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        {project.category}
                      </span>
                    </div>

                    <span className="inline-flex items-center text-xs font-medium text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-border">
                      {project.role}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Subtitle / Organization */}
                  <p className="text-xs font-mono text-muted mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {project.organization}
                  </p>

                  {/* Factual Summary */}
                  <p className="text-base text-muted leading-relaxed mb-6 font-normal">
                    {project.summary}
                  </p>

                  {/* Mobile Preview Image (Visible only on small viewports where sticky phone is hidden/compact) */}
                  <div className="lg:hidden mb-6 rounded-2xl overflow-hidden border border-border bg-surface-2 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-outline"
                      loading="lazy"
                    />
                  </div>

                  {/* 3 Specific Key Features */}
                  <div className="mb-6 space-y-3 pt-2">
                    <p className="text-xs uppercase tracking-wider font-mono text-muted-dim">
                      Architecture & Implementation
                    </p>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-text">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-1 transition-colors"
                            style={{ color: project.accentColor }}
                          />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Metrics / Stats */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6 pt-2">
                    {project.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-surface-2/80 border border-border text-center"
                      >
                        <div
                          className="font-heading font-bold text-base sm:text-lg tabular"
                          style={{ color: project.accentColor }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-[11px] font-mono text-muted truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="mb-7 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-surface-2 border border-border text-xs font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-2 hover:bg-surface-3 border border-border text-xs font-semibold text-text transition-colors group focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-muted group-hover:text-text" />
                        <span>Source Repository</span>
                        <ExternalLink className="w-3 h-3 text-muted group-hover:text-text ml-0.5" />
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-[#0c1813] hover:brightness-105 text-xs font-semibold transition-all group focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <span>Live Deliverable</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.links.docs && !project.links.live && (
                      <a
                        href={project.links.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-2 hover:bg-surface-3 border border-border text-xs font-semibold text-text transition-colors group focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-accent" />
                        <span>Technical Docs</span>
                        <ExternalLink className="w-3 h-3 text-muted group-hover:text-text ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
