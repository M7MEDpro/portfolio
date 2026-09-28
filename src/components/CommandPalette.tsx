import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      command: 'init',
      output: (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="text-cyan-neon font-mono font-medium">⚡ M7MEDpro Terminal v2.4 (Active Session)</p>
          <p className="text-slate-400">Welcome! Type <span className="text-cyan-neon font-semibold">help</span> to explore commands, or click any suggestion below.</p>
        </div>
      ),
      timestamp: 'Ready'
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p className="text-cyan-neon font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-violet-400 font-bold">bio</span> — Executive engineering overview</div>
              <div><span className="text-violet-400 font-bold">skills</span> — Full stack skill matrix</div>
              <div><span className="text-violet-400 font-bold">projects</span> — Key production deliverables</div>
              <div><span className="text-violet-400 font-bold">stats</span> — Production performance benchmarks</div>
              <div><span className="text-violet-400 font-bold">contact</span> — Reach out directly / hire</div>
              <div><span className="text-violet-400 font-bold">cv</span> — Download official resume</div>
              <div><span className="text-violet-400 font-bold">clear</span> — Wipe terminal output</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300 font-sans">
            <p className="font-semibold text-white text-sm">{PERSONAL_INFO.name} ({PERSONAL_INFO.alias})</p>
            <p className="text-cyan-neon font-mono">{PERSONAL_INFO.title}</p>
            <p className="text-slate-400 leading-relaxed">{PERSONAL_INFO.extendedBio}</p>
            <div className="flex items-center gap-3 pt-1 text-slate-400 font-mono text-[11px]">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🎓 GPA: {PERSONAL_INFO.gpa}</span>
              <span>🌐 English: {PERSONAL_INFO.englishLevel}</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs space-y-2.5">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500/40 pl-2">
                <p className="font-mono font-semibold text-cyan-neon text-[11px] uppercase tracking-wider">{cat.title}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cat.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/60 text-[10px]">
                      {s.name} <span className="text-cyan-400 font-mono">({s.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs space-y-2">
            <p className="text-cyan-neon font-mono">Top Featured Engineering Projects:</p>
            <div className="space-y-1.5">
              {PROJECTS.slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between p-1.5 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40">
                  <div>
                    <span className="font-medium text-white">{p.title.split('—')[0]}</span>
                    <span className="text-[10px] text-slate-400 block">{p.subtitle}</span>
                  </div>
                  {onSelectProject && (
                    <button
                      onClick={() => {
                        onSelectProject(p.id);
                        onClose();
                      }}
                      className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-neon hover:bg-cyan-500/30 text-[10px] font-mono"
                    >
                      View
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'stats':
        outputNode = (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {PERSONAL_INFO.stats.map((st, sIdx) => (
              <div key={sIdx} className="p-2 rounded bg-slate-800/80 border border-slate-700/40">
                <span className="text-cyan-neon font-mono font-bold text-sm block">{st.value}</span>
                <span className="text-white font-medium text-[11px] block">{st.label}</span>
                <span className="text-slate-400 text-[10px] block">{st.detail}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1.5 font-mono text-slate-300">
            <p className="text-cyan-neon font-semibold">Direct Communication Channels:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white underline hover:text-cyan-neon">{PERSONAL_INFO.email}</a></p>
            <p>💬 Discord: <span className="text-white font-bold">{PERSONAL_INFO.discord}</span></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-neon underline">mohamedbadawy</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-neon underline">M7MEDpro</a></p>
            <p className="text-emerald-400 text-[11px] pt-1">🟢 Status: {PERSONAL_INFO.availabilityStatus}</p>
          </div>
        );
        break;

      case 'cv':
        outputNode = (
          <div className="text-xs space-y-1.5 font-mono">
            <p className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Ready for download:
            </p>
            <a
              href="/Mohamed_Badawy_Resume.docx"
              download="Mohamed_Badawy_Resume.docx"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              <Download className="w-3.5 h-3.5" /> Download Mohamed_Badawy_Resume.docx
            </a>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: "{cmd}". Type <span className="text-cyan-neon underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid operations.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output: outputNode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      }
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0B0F19] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080B12] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 ml-3 text-xs font-mono text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-neon" />
              <span>m7medpro@architecture-node:~$</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            aria-label="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-400 flex items-center gap-1"><Sparkles className="w-3 h-3 text-cyan-neon" /> Quick:</span>
          {['bio', 'skills', 'projects', 'stats', 'contact', 'cv'].map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-neon transition border border-slate-700/50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Output Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              {item.command !== 'init' && (
                <div className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-neon">root@m7medpro:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{item.timestamp}</span>
                </div>
              )}
              <div className="pl-3 border-l border-cyan-500/20">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#080B12] border-t border-slate-800">
          <span className="text-cyan-neon font-mono text-sm">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'bio', 'projects', 'stats', 'contact'..."
            className="flex-1 bg-transparent text-sm font-mono text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-neon hover:bg-cyan-500/30 transition text-xs font-mono flex items-center gap-1"
          >
            <span>Exec</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
