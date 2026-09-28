import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-[#0D111A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-[#090D15]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-neon border border-cyan-500/30">
                {project.categoryLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-400 border border-violet-500/30">
                {project.badge}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white [text-wrap:balance]">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1 [text-wrap:pretty]">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors duration-150 active:scale-[0.96]"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Gallery / Main Image with neutral outline */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 max-h-80 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 outline outline-1 outline-white/10 -outline-offset-1"
              />
            </div>
          )}

          {/* Overview Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-neon flex items-center gap-1.5 mb-2 font-semibold">
              <Layers className="w-4 h-4" /> Architectural Overview
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed [text-wrap:pretty]">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid with tabular-nums */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-3 font-semibold">
              <Zap className="w-4 h-4" /> Measurable Engineering Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#141925] border border-emerald-500/20 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-slate-200 tabular-nums">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 flex items-center gap-1.5 mb-3 font-semibold">
              <Cpu className="w-4 h-4" /> Implementation Deep-Dive
            </h4>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon shrink-0 mt-2"></span>
                  <span className="leading-relaxed [text-wrap:pretty]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
              Tech Stack & Ecosystem
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-[#090D15] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium transition-colors duration-150 active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4" /> View Source on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-neon border border-cyan-500/40 text-xs font-mono font-medium transition-colors duration-150 active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" /> View IEEE DOI Publication
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors duration-150 active:scale-[0.98]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
