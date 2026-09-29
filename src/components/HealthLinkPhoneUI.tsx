import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Heart,
  Activity,
  User,
  Database,
  Lock,
  Calendar,
  FileText,
} from 'lucide-react';

export function HealthLinkPhoneUI() {
  const [heartRate, setHeartRate] = useState(74);
  const [spo2, setSpo2] = useState(98);
  const [activeTab, setActiveTab] = useState<'vitals' | 'queue' | 'db'>('vitals');

  useEffect(() => {
    const timer = setInterval(() => {
      setHeartRate(72 + Math.floor(Math.random() * 5));
      setSpo2(Math.random() > 0.7 ? 99 : 98);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#080c14] text-white font-sans text-xs select-none overflow-hidden relative">
      {/* Top Status & Security Bar */}
      <div className="pt-7 px-4 pb-2 bg-gradient-to-b from-[#0f172a] to-transparent flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-[9px] font-mono text-[#00ff87]">
            <ShieldCheck className="w-3 h-3 text-[#00ff87]" />
            <span>SQLCIPHER AES-256</span>
          </div>
          <div className="text-[10px] font-mono text-white/40">DB: ENCRYPTED</div>
        </div>

        {/* Doctor & Patient Profile Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
              Clinical Telemetry Suite
            </div>
            <h3 className="text-sm font-heading font-bold text-white tracking-tight">
              Patient Queue • Station #04
            </h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-white/80">
            <User className="w-3.5 h-3.5 text-[#38bdf8]" />
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-1 mt-2.5 bg-white/5 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveTab('vitals')}
            className={`flex-1 py-1 rounded-lg text-[9.5px] font-mono transition-all ${
              activeTab === 'vitals'
                ? 'bg-[#00ff87] text-[#080c14] font-bold shadow-[0_0_10px_rgba(0,255,135,0.3)]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Live Vitals
          </button>
          <button
            onClick={() => setActiveTab('queue')}
            className={`flex-1 py-1 rounded-lg text-[9.5px] font-mono transition-all ${
              activeTab === 'queue'
                ? 'bg-[#00ff87] text-[#080c14] font-bold shadow-[0_0_10px_rgba(0,255,135,0.3)]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Queue (3)
          </button>
          <button
            onClick={() => setActiveTab('db')}
            className={`flex-1 py-1 rounded-lg text-[9.5px] font-mono transition-all ${
              activeTab === 'db'
                ? 'bg-[#00ff87] text-[#080c14] font-bold shadow-[0_0_10px_rgba(0,255,135,0.3)]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            SQLCipher
          </button>
        </div>
      </div>

      {/* Main Body View */}
      <div className="flex-1 px-3.5 py-1.5 overflow-y-auto no-scrollbar space-y-2">
        {activeTab === 'vitals' && (
          <>
            {/* Live ECG Wave Card */}
            <div className="p-3 rounded-2xl bg-[#0f172a]/80 border border-[#38bdf8]/30 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#38bdf8]">
                  <Activity className="w-3.5 h-3.5 text-[#38bdf8] animate-pulse" />
                  <span>LEAD-II REALTIME ECG</span>
                </div>
                <span className="text-[9px] font-mono text-[#00ff87] bg-[#00ff87]/10 px-1.5 py-0.5 rounded">
                  SYNCHRONIZED
                </span>
              </div>

              {/* Animated ECG SVG path */}
              <div className="h-14 w-full relative flex items-center justify-center my-1 bg-black/40 rounded-xl px-2 overflow-hidden border border-white/5">
                <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="ecg-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                      <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="300" height="60" fill="url(#ecg-grid)" />
                  {/* ECG Pulse Wave */}
                  <path
                    d="M 0 30 L 40 30 L 48 30 L 52 24 L 56 30 L 65 30 L 72 10 L 80 50 L 88 28 L 96 30 L 120 30 L 128 26 L 136 30 L 180 30 L 188 30 L 192 24 L 196 30 L 205 30 L 212 10 L 220 50 L 228 28 L 236 30 L 260 30 L 268 26 L 276 30 L 300 30"
                    fill="none"
                    stroke="#00ff87"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_rgba(0,255,135,0.8)]"
                  />
                </svg>
                {/* Sweep line */}
                <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent to-[#00ff87]/20 pointer-events-none animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>

              {/* Patient Name */}
              <div className="flex items-center justify-between text-[10px] text-white/70 pt-0.5">
                <span>Patient: <strong className="text-white">Omar F. (ID #84102)</strong></span>
                <span className="font-mono text-[#00ff87]">Normal Sinus</span>
              </div>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-xl bg-[#0f172a]/60 border border-white/10 text-center">
                <Heart className="w-3.5 h-3.5 text-[#ff5f56] mx-auto mb-0.5 animate-pulse" />
                <div className="text-base font-bold font-mono text-white tabular-nums">{heartRate}</div>
                <div className="text-[8.5px] font-mono text-white/50">BPM (Pulse)</div>
              </div>

              <div className="p-2 rounded-xl bg-[#0f172a]/60 border border-white/10 text-center">
                <Activity className="w-3.5 h-3.5 text-[#38bdf8] mx-auto mb-0.5" />
                <div className="text-base font-bold font-mono text-white tabular-nums">{spo2}%</div>
                <div className="text-[8.5px] font-mono text-white/50">SpO2 Oxygen</div>
              </div>

              <div className="p-2 rounded-xl bg-[#0f172a]/60 border border-white/10 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff87] mx-auto mb-0.5" />
                <div className="text-base font-bold font-mono text-white tabular-nums">120/80</div>
                <div className="text-[8.5px] font-mono text-white/50">BP (mmHg)</div>
              </div>
            </div>

            {/* Offline Encrypted Sync Banner */}
            <div className="p-2 rounded-xl bg-[#00ff87]/10 border border-[#00ff87]/25 flex items-center justify-between text-[9.5px] font-mono">
              <span className="flex items-center gap-1.5 text-white/90">
                <Database className="w-3 h-3 text-[#00ff87]" />
                <span>Encrypted Local Record: Clean</span>
              </span>
              <span className="text-[#00ff87] font-semibold">0.4ms</span>
            </div>
          </>
        )}

        {activeTab === 'queue' && (
          <div className="space-y-1.5">
            {[
              { name: 'Omar Farouk', status: 'In Consultation', time: '10:30 AM', priority: 'Urgent', color: '#ff5f56' },
              { name: 'Yasmine Taha', status: 'Cardiology Review', time: '11:15 AM', priority: 'Scheduled', color: '#38bdf8' },
              { name: 'Karim Mostafa', status: 'Post-Op Follow-up', time: '12:00 PM', priority: 'Routine', color: '#00ff87' },
              { name: 'Nour El-Din', status: 'Telemetry Log Check', time: '01:30 PM', priority: 'Routine', color: '#8b99ad' },
            ].map((p, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-[#0f172a]/60 border border-white/5 flex items-center justify-between hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <div>
                    <div className="font-heading font-bold text-xs text-white">{p.name}</div>
                    <div className="text-[9px] text-white/50 font-mono">{p.status}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] text-[#38bdf8]">{p.time}</div>
                  <span
                    className="text-[8px] font-mono px-1 py-0.2 rounded"
                    style={{ backgroundColor: `${p.color}20`, color: p.color }}
                  >
                    {p.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'db' && (
          <div className="p-3 rounded-2xl bg-[#0a0f18] border border-white/10 space-y-2 font-mono text-[9px]">
            <div className="flex items-center justify-between text-white/80 pb-1 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#00ff87]" />
                <span>SQLCipher Core v4.5.6</span>
              </span>
              <span className="text-[#00ff87]">ACTIVE</span>
            </div>

            <div className="space-y-1 text-white/60">
              <div className="flex justify-between">
                <span>Cipher Algorithm:</span>
                <span className="text-white">AES-256-CBC / GCM</span>
              </div>
              <div className="flex justify-between">
                <span>KDF Iterations:</span>
                <span className="text-white">256,000 PBKDF2</span>
              </div>
              <div className="flex justify-between">
                <span>Page Size:</span>
                <span className="text-white">4096 Bytes</span>
              </div>
              <div className="flex justify-between">
                <span>Plaintext Leak Risk:</span>
                <span className="text-[#00ff87]">0.0% (Zero-Leak)</span>
              </div>
              <div className="flex justify-between">
                <span>Decryption Latency:</span>
                <span className="text-[#00ff87]">&lt;0.8ms (C++ Core)</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-black/60 border border-white/5 text-[8px] text-[#00ff87]/90 leading-relaxed">
              &gt; PRAGMA key = &apos;[256-BIT-SECURE-KEY]&apos;;<br />
              &gt; PRAGMA cipher_page_size = 4096;<br />
              &gt; 12,480 patient records loaded into encrypted memory.
            </div>
          </div>
        )}
      </div>

      {/* Bottom Medical Tab Bar */}
      <div className="h-10 px-6 bg-[#0a0f18] border-t border-white/10 flex items-center justify-between flex-shrink-0 text-white/40">
        <Heart className="w-4 h-4 text-[#00ff87]" />
        <Calendar className="w-4 h-4 hover:text-white transition-colors" />
        <FileText className="w-4 h-4 hover:text-white transition-colors" />
        <Lock className="w-4 h-4 hover:text-white transition-colors" />
      </div>
    </div>
  );
}
