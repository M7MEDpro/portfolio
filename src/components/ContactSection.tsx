import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'backend',
    timeline: '1-2-months',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#8B5CF6', '#10B981']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-neon">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Client Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Ready to Build Something <br />
              <span className="text-gradient-cyan">Remarkable?</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-sans">
            Whether you need a high-throughput Java server architecture, an offline-first Flutter application, or distributed IoT integration—I am ready to deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Direct Communication Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0D121F] border border-cyan-500/20 space-y-6">
              
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Direct Inquiries & Contracts
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  I prioritize serious inquiries and contract proposals. Expect a direct, detailed response within 12 hours.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Official Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs md:text-sm text-cyan-neon font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-mono shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Status and Location Details */}
              <div className="space-y-3 font-mono text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-neon shrink-0" />
                  <span>Timezone: Cairo (UTC+3) • Open to Rotational Shifts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Location: Cairo, Egypt • Global Remote Contracts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Verified 5.0 Rating • 8 International Commissions</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-mono"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-mono"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                  <span>{PERSONAL_INFO.discord}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Proposal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0D121F] border border-slate-800 relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Proposal Received Successfully!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. I have received your request and will review your technical requirements within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name / Organization <span className="text-cyan-neon">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Rollerite Systems"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Work Email Address <span className="text-cyan-neon">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Domain */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Project Focus Area
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition font-mono"
                      >
                        <option value="backend">High-Concurrency Java / Backend</option>
                        <option value="mobile">Flutter Cross-Platform Mobile/Desktop</option>
                        <option value="iot">IoT / Hardware-to-Cloud System</option>
                        <option value="audit">Architecture Audit & Optimization</option>
                        <option value="other">Full-Stack Technical Consultation</option>
                      </select>
                    </div>

                    {/* Expected Timeline */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition font-mono"
                      >
                        <option value="immediate">Immediate / Urgent Sprint</option>
                        <option value="1-2-months">1 – 2 Months Scope</option>
                        <option value="quarterly">Long-Term Contract / Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Project Goals & Constraints <span className="text-cyan-neon">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building, key performance requirements, or scale challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 text-black font-extrabold font-mono text-sm hover:shadow-neon-cyan transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <span>Send Commission Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    🔒 Non-disclosure agreement (NDA) honored. Direct developer response.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
