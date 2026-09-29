import { useState, useEffect } from 'react';
import {
  Trophy,
  Flame,
  Crown,
  Medal,
  Award,
  Sparkles,
  ChevronUp,
  Image as ImageIcon,
} from 'lucide-react';

export function ThaumaPhoneUI() {
  const [viewMode, setViewMode] = useState<'interactive' | 'screenshot'>('interactive');
  const [scoreBoost, setScoreBoost] = useState(0);

  // Simulate 60fps Riverpod live score deltas
  useEffect(() => {
    const timer = setInterval(() => {
      setScoreBoost((s) => s + Math.floor(Math.random() * 20));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#0c0a17] text-white font-sans text-xs select-none overflow-hidden relative">
      {/* Top Header */}
      <div className="pt-7 px-4 pb-2 bg-gradient-to-b from-[#1b1434] to-transparent flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[9px] font-mono text-[#f59e0b]">
            <Flame className="w-3 h-3 text-[#f59e0b] animate-bounce" />
            <span>60 FPS RIVERPOD ENGINE</span>
          </div>
          {/* Switcher button */}
          <button
            onClick={() => setViewMode(viewMode === 'interactive' ? 'screenshot' : 'interactive')}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[9px] font-mono text-white/80 transition-all border border-white/10"
          >
            <ImageIcon className="w-2.5 h-2.5" />
            <span>{viewMode === 'interactive' ? 'Original UI' : 'Live Mockup'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#a78bfa] uppercase tracking-wider font-semibold">
              لوحة الشرف وترتيب الفرق
            </div>
            <h3 className="text-sm font-heading font-bold text-white tracking-tight">
              Thauma Convention Leaderboard
            </h3>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#00ff87] bg-[#00ff87]/10 px-2 py-0.5 rounded-full border border-[#00ff87]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>
      </div>

      {viewMode === 'screenshot' ? (
        <div className="flex-1 p-2 flex flex-col items-center justify-center overflow-hidden">
          <img
            src="/assets/projects/thauma_09_hall_of_fame_leaderboard.png"
            alt="Thauma Original Hall of Fame"
            className="w-full h-full object-contain rounded-xl border border-white/10"
          />
        </div>
      ) : (
        /* Interactive 60fps Leaderboard View */
        <div className="flex-1 px-3.5 py-1 overflow-y-auto no-scrollbar space-y-2">
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-3 gap-1.5 items-end pt-2 pb-1">
            {/* 2nd Place */}
            <div className="p-2 rounded-2xl bg-[#18132e]/90 border border-white/10 text-center flex flex-col items-center">
              <Medal className="w-4 h-4 text-[#94a3b8] mb-0.5" />
              <div className="font-heading font-bold text-[11px] text-white">كوتارد</div>
              <div className="text-[9px] font-mono text-[#94a3b8]">Team #2</div>
              <div className="mt-1 font-mono font-bold text-[11px] text-white/90">
                1,280 <span className="text-[8px] text-white/50">pts</span>
              </div>
            </div>

            {/* 1st Place (Gold / Hero) */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-b from-[#f59e0b]/20 to-[#18132e] border border-[#f59e0b]/50 text-center flex flex-col items-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Crown className="w-5 h-5 text-[#f59e0b] mb-0.5 animate-pulse" />
              <span className="px-1.5 py-0.2 rounded bg-[#f59e0b] text-[#0c0a17] text-[8px] font-bold font-mono mb-0.5">
                #1 RANK
              </span>
              <div className="font-heading font-bold text-xs text-white">كابجراس</div>
              <div className="text-[9px] font-mono text-[#f59e0b]">Team #1</div>
              <div className="mt-1 font-mono font-bold text-xs text-[#00ff87] flex items-center gap-0.5">
                <span>{1420 + scoreBoost}</span>
                <span className="text-[8px] text-white/50">pts</span>
                <ChevronUp className="w-2.5 h-2.5 text-[#00ff87]" />
              </div>
            </div>

            {/* 3rd Place */}
            <div className="p-2 rounded-2xl bg-[#18132e]/90 border border-white/10 text-center flex flex-col items-center">
              <Award className="w-4 h-4 text-[#d97706] mb-0.5" />
              <div className="font-heading font-bold text-[11px] text-white">ميجالومانيا</div>
              <div className="text-[9px] font-mono text-[#d97706]">Team #3</div>
              <div className="mt-1 font-mono font-bold text-[11px] text-white/90">
                1,150 <span className="text-[8px] text-white/50">pts</span>
              </div>
            </div>
          </div>

          {/* Ranking List */}
          <div className="space-y-1.5 pt-1">
            {[
              { rank: '#4', name: 'متلازمة فريجولي', team: 'Team #4', pts: 980, color: '#38bdf8' },
              { rank: '#5', name: 'أوتوسكوبيك', team: 'Team #5', pts: 890, color: '#a78bfa' },
              { rank: '#6', name: 'شيزوفرينيا', team: 'Team #6', pts: 820, color: '#f43f5e' },
            ].map((r, i) => (
              <div
                key={i}
                className="p-2 rounded-xl bg-[#15102a]/80 border border-white/5 flex items-center justify-between hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] text-white"
                    style={{ backgroundColor: `${r.color}30`, color: r.color }}
                  >
                    {r.rank}
                  </span>
                  <div>
                    <div className="font-heading font-bold text-xs text-white">{r.name}</div>
                    <div className="text-[8.5px] text-white/50 font-mono">{r.team}</div>
                  </div>
                </div>
                <div className="font-mono text-xs text-white/90 font-bold">
                  {r.pts} <span className="text-[8.5px] text-white/40">pts</span>
                </div>
              </div>
            ))}
          </div>

          {/* Riverpod State Sync Chip */}
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/60">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#a78bfa]" />
              <span>Riverpod Reactive State Sync</span>
            </span>
            <span className="text-[#00ff87]">60.0 FPS</span>
          </div>
        </div>
      )}

      {/* Bottom Nav Bar */}
      <div className="h-10 px-6 bg-[#130e26] border-t border-white/10 flex items-center justify-between flex-shrink-0 text-white/40">
        <Trophy className="w-4 h-4 text-[#f59e0b]" />
        <Award className="w-4 h-4 hover:text-white transition-colors" />
        <Flame className="w-4 h-4 hover:text-white transition-colors" />
      </div>
    </div>
  );
}
