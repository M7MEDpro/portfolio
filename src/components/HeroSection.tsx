import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  ShieldCheck, 
  Zap, 
  Star
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState<'cache' | 'concurrency' | 'metrics'>('cache');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for International Contracts & Commissions</span>
              <span className="text-slate-400">• Cairo (UTC+3)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              Architecting <span className="text-gradient-cyan">High-Concurrency</span> Java Systems & <span className="text-gradient-violet">Production Flutter</span> Apps.
            </h1>

            {/* Executive Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed [text-wrap:pretty]">
              Senior software engineer specializing in low-latency distributed backends, custom memory caching architectures, and fluid cross-platform mobile apps. Co-author of an <span className="text-cyan-neon font-semibold">IEEE peer-reviewed publication</span> with a proven <span className="text-emerald-400 font-semibold">4.83/5.0 international client track record</span>.
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111624] border border-cyan-500/30 text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-neon" />
                <span>IEEE Published Researcher</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111624] border border-emerald-500/30 text-emerald-300">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>5.0 / 5.0 Rating (8 Commissions)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111624] border border-violet-500/30 text-violet-300">
                <Zap className="w-3.5 h-3.5 text-violet-400" />
                <span>C1 Advanced English (EF SET 68)</span>
              </div>
            </div>

            {/* Action Buttons with 44px min hit area and tactile active states */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold font-mono text-sm hover:shadow-neon-cyan transition-transform duration-150 active:scale-[0.98]"
              >
                <span>Explore Proof of Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm border border-slate-700 hover:border-cyan-500/40 transition-colors duration-150 active:scale-[0.98]"
              >
                <span>Hire for Commission</span>
              </a>

              <a
                href="/Mohamed_Badawy_Resume.docx"
                download="Mohamed_Badawy_Resume.docx"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs border border-slate-800 transition-colors duration-150 active:scale-[0.98]"
                title="Download Official Resume"
              >
                <Download className="w-4 h-4 text-cyan-neon" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900/60 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-neon font-mono text-xs border border-slate-800 transition-colors duration-150 active:scale-[0.98]"
                title="Launch CLI Terminal"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>CLI (⌘K)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Senior Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-violet-500/20 shadow-2xl">
              <div className="bg-[#0B0F19] rounded-[14px] p-6 space-y-5 border border-slate-800/80 text-left">
                
                {/* Header with Simulator Tabs */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-neon animate-pulse"></span>
                    <span className="font-semibold text-white">System Architecture Hub</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                    <button
                      onClick={() => setActiveTab('cache')}
                      className={`px-2.5 py-1 rounded transition-colors duration-150 ${activeTab === 'cache' ? 'bg-cyan-500/20 text-cyan-neon' : 'text-slate-400'}`}
                    >
                      L1/L2 Cache
                    </button>
                    <button
                      onClick={() => setActiveTab('concurrency')}
                      className={`px-2.5 py-1 rounded transition-colors duration-150 ${activeTab === 'concurrency' ? 'bg-cyan-500/20 text-cyan-neon' : 'text-slate-400'}`}
                    >
                      Concurrency
                    </button>
                    <button
                      onClick={() => setActiveTab('metrics')}
                      className={`px-2.5 py-1 rounded transition-colors duration-150 ${activeTab === 'metrics' ? 'bg-cyan-500/20 text-cyan-neon' : 'text-slate-400'}`}
                    >
                      Trust
                    </button>
                  </div>
                </div>

                {/* Tab 1: Caching Engine */}
                {activeTab === 'cache' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Selective Caching Pipeline:</span>
                      <span className="text-emerald-400 font-bold tabular-nums">-80% Memory</span>
                    </div>

                    {/* Visual Comparison Bar */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span>Unoptimized Traditional Server</span>
                          <span className="text-rose-400 font-bold tabular-nums">100% RAM Load</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500/80 w-[95%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span>Mohamed's Selective Caching</span>
                          <span className="text-cyan-neon font-bold tabular-nums">20% RAM (&lt;1ms)</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[20%] animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 font-mono text-[11px] text-slate-300 space-y-1">
                      <p className="text-cyan-neon font-semibold">⚡ PunishmentSystem Live Benchmark:</p>
                      <p>• Lookup Latency: <span className="text-white font-bold tabular-nums">&lt; 0.84ms</span></p>
                      <p>• Cache Hit Ratio: <span className="text-emerald-400 font-bold tabular-nums">96.8%</span></p>
                      <p>• Backing Store: <span className="text-violet-400">Async MongoDB + MySQL</span></p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Concurrency & Threads */}
                {activeTab === 'concurrency' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Thread Dispatcher Architecture:</span>
                      <span className="text-cyan-neon font-bold tabular-nums">0ms Main Stall</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block">Game / UI Thread</span>
                        <span className="text-emerald-400 font-bold text-sm tabular-nums">60.0 FPS</span>
                        <span className="text-[10px] text-slate-500 block">Non-blocking dispatch</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block">Async Worker Pool</span>
                        <span className="text-cyan-neon font-bold text-sm tabular-nums">8 Workers</span>
                        <span className="text-[10px] text-slate-500 block">Lock-free ring buffer</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300">
                      <span className="text-violet-400 font-semibold block mb-0.5">Distributed IoT Engine:</span>
                      <p className="text-slate-400 [text-wrap:pretty]">ESP32 UART packet parsing decoupled from Flutter render loop via Riverpod state providers.</p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Client Trust */}
                {activeTab === 'metrics' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold tabular-nums">Verified 5.0 Rating</span>
                    </div>

                    <blockquote className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 italic leading-relaxed [text-wrap:pretty]">
                      "Mohamed delivered an exceptional Java plugin under tight deadlines. His caching implementation slashed our server RAM overhead drastically. Zero crashes under peak player counts."
                    </blockquote>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                      <span>— Rollerite LLC Client (USA 🇺🇸)</span>
                      <span className="text-cyan-neon font-bold tabular-nums">8 Commissions Done</span>
                    </div>
                  </div>
                )}

                {/* Quick Interactive Terminal Banner with 44px hit area */}
                <div 
                  onClick={onOpenTerminal}
                  className="min-h-[44px] cursor-pointer group flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/15 border border-cyan-500/30 transition-colors duration-150 text-xs font-mono active:scale-[0.99]"
                >
                  <div className="flex items-center gap-2 text-cyan-neon">
                    <TerminalIcon className="w-4 h-4" />
                    <span>Run interactive developer CLI</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors duration-150">Press ⌘K ❯</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Ribbon with Tabular Numerals */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 tabular-nums">
                  {stat.value}
                </span>
                <span className="block text-xs font-mono font-semibold text-cyan-neon [text-wrap:balance]">
                  {stat.label}
                </span>
                <span className="block text-[11px] text-slate-400 leading-tight [text-wrap:pretty]">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
