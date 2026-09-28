import { useState } from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Copy, Check, FileText, ArrowUpRight, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface border border-border shadow-sm">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-border text-xs font-mono text-muted mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>Initiate Contact</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text leading-tight mb-4">
            Let's build something durable together.
          </h2>

          <p className="text-base sm:text-lg text-muted font-normal leading-relaxed mb-8 max-w-2xl">
            Whether you need a high-performance backend, an asynchronous game server architecture, an interactive Flutter application, or embedded IoT firmware, I am ready to help.
          </p>

          {/* Email Quick Action Card */}
          <div className="p-6 rounded-2xl bg-surface-2/80 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-accent-dim border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted">Direct Email</div>
                <div className="font-heading font-bold text-base sm:text-lg text-text select-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-semibold text-text hover:border-accent active:scale-[0.98] transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-[#0c1813] text-xs font-semibold hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Additional Direct Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-border">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-surface-2 hover:bg-surface-3 border border-border text-xs font-medium text-text transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-muted group-hover:text-text" />
                <span>GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-text" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-surface-2 hover:bg-surface-3 border border-border text-xs font-medium text-text transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-muted group-hover:text-text" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-text" />
            </a>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-surface-2 hover:bg-surface-3 border border-border text-xs font-medium text-text transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-accent" />
                <span>Download CV</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-text" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
