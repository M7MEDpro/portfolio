import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Zap, Eye, Filter } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend & High-Concurrency' },
    { id: 'mobile', label: 'Flutter & Cross-Platform' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'research', label: 'Academic & IEEE' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-neon">
              <span>Verified Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight [text-wrap:balance]">
              Featured <span className="text-gradient-cyan">Proof of Work</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-sans [text-wrap:pretty]">
            From high-throughput server plugins saving 80% RAM to gamified mobile applications handling 1,000+ attendees and published IEEE research.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto text-xs font-mono border-b border-slate-800">
          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[38px] px-4 py-2 rounded-xl whitespace-nowrap transition-colors duration-150 active:scale-[0.98] ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-neon-cyan'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0D121F] border border-slate-800/90 hover:border-cyan-500/40 transition-colors duration-200 flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Media Preview (if available) or Cyber Banner */}
              {project.image ? (
                <div 
                  className="relative h-48 overflow-hidden bg-slate-950 border-b border-slate-800/80 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 outline outline-1 outline-white/10 -outline-offset-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Over Media */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/75 backdrop-blur-md text-cyan-neon border border-cyan-500/30">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500 text-black text-[11px] font-mono font-bold">
                      <Eye className="w-3 h-3" /> View Architecture
                    </span>
                  </div>
                </div>
              ) : (
                <div 
                  className="h-28 bg-gradient-to-br from-slate-900 via-[#101625] to-slate-950 border-b border-slate-800/80 p-5 flex flex-col justify-between cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-neon border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-neon transition-colors duration-150 flex items-center gap-1">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {project.categoryLabel}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-display font-bold text-white group-hover:text-cyan-neon transition-colors duration-150 cursor-pointer [text-wrap:balance]"
                  >
                    {project.title.split('—')[0]}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed [text-wrap:pretty]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Metric Highlights with Tabular Numbers */}
                <div className="space-y-1.5 py-2 border-y border-slate-800/60 font-mono text-xs">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-[11px]">
                      <Zap className="w-3 h-3 text-cyan-neon shrink-0" />
                      <span className="tabular-nums">{m}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900/60 text-slate-400 text-[10px] font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links with minimum touch area */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono text-cyan-neon hover:underline flex items-center gap-1 font-semibold py-1"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors duration-150 active:scale-[0.96]"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-neon transition-colors duration-150 active:scale-[0.96]"
                        title="Publication / Live Link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
