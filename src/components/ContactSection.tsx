import { useState } from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Copy, Check, FileText, ArrowUpRight, MessageSquare, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-36 bg-[#07090e] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#00ff87]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto p-8 sm:p-14 rounded-3xl bg-[#0e1319] border border-white/10 shadow-2xl">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b24] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-6 shadow-[0_0_15px_rgba(0,255,135,0.15)]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Have a system or app to build?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#10b981]">
              Let's talk directly.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed mb-8 max-w-2xl">
            Whether you need a high-performance Java backend, an asynchronous Minecraft server core, an interactive Flutter app, or embedded IoT firmware, I'm ready to collaborate.
          </p>

          {/* Email Quick Action Card */}
          <div className="p-6 rounded-2xl bg-[#141a22] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 shadow-inner">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87] flex-shrink-0 shadow-[0_0_15px_rgba(0,255,135,0.2)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#8b99ad]">Direct Email</div>
                <div className="font-heading font-bold text-base sm:text-lg text-white select-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#090d12] border border-white/10 text-xs font-semibold text-white hover:border-[#00ff87]/50 active:scale-[0.98] transition-all"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#00ff87]" />
                    <span className="text-[#00ff87]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8b99ad]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold active:scale-[0.98] transition-all"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Discord Direct Channel Card */}
          <div className="p-6 rounded-2xl bg-[#141a22] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 shadow-inner">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2] flex-shrink-0 shadow-[0_0_15px_rgba(88,101,242,0.2)]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#8b99ad]">Discord Handle</div>
                <div className="font-heading font-bold text-base sm:text-lg text-white font-mono select-all">
                  {PERSONAL_INFO.discord}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={copyDiscord}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#090d12] border border-white/10 text-xs font-semibold text-white hover:border-[#5865F2]/50 active:scale-[0.98] transition-all"
                aria-label="Copy Discord username"
              >
                {copiedDiscord ? (
                  <>
                    <Check className="w-4 h-4 text-[#00ff87]" />
                    <span className="text-[#00ff87]">Copied Username!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8b99ad]" />
                    <span>Copy: {PERSONAL_INFO.discord}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Additional Direct Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#141a22] hover:bg-[#18212c] border border-white/5 hover:border-[#00ff87]/30 text-xs font-medium text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-[#8b99ad] group-hover:text-white" />
                <span>GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8b99ad] group-hover:text-white" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#141a22] hover:bg-[#18212c] border border-white/5 hover:border-[#00ff87]/30 text-xs font-medium text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#8b99ad] group-hover:text-white" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8b99ad] group-hover:text-white" />
            </a>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohamed_Badawy_CV.pdf"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#141a22] hover:bg-[#18212c] border border-white/5 hover:border-[#00ff87]/30 text-xs font-medium text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#00ff87]" />
                <span>Download CV (PDF)</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8b99ad] group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
