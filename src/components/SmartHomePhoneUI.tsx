import { useState } from 'react';
import {
  Power,
  Sun,
  Wind,
  Lock,
  Wifi,
  Settings,
  Zap,
  Activity,
} from 'lucide-react';

export function SmartHomePhoneUI() {
  const [acOn, setAcOn] = useState(true);
  const [lightsOn, setLightsOn] = useState(true);
  const [locked, setLocked] = useState(true);
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="w-full h-full flex flex-col bg-[#0b0f15] text-white font-sans text-xs select-none overflow-hidden relative">
      {/* Top Status Bar & Dynamic Island Padding */}
      <div className="pt-8 px-4 pb-2 bg-gradient-to-b from-[#111822] to-transparent">
        {/* Welcome Header */}
        <div className="flex items-center justify-between mt-1 mb-3">
          <div>
            <span className="text-[10px] font-mono text-[#00ff87] tracking-wider uppercase font-semibold">
              Projecto-Messio IoT
            </span>
            <h3 className="text-base font-heading font-bold text-white tracking-tight">
              WELCOME HOME <span className="text-[#00ff87]">BADAWY</span>
            </h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
            <Settings className="w-4 h-4" />
          </div>
        </div>

        {/* Quick Weather & Energy Cards */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#141b24]/90 border border-white/10 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#00ff87]/15 flex items-center justify-center text-[#00ff87]">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#8b99ad]">Weather</div>
              <div className="font-heading font-bold text-xs text-white">24°C Sunny</div>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#141b24]/90 border border-white/10 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#38bdf8]/15 flex items-center justify-center text-[#38bdf8]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#8b99ad]">Power Load</div>
              <div className="font-heading font-bold text-xs text-white">1.2 kW/h</div>
            </div>
          </div>
        </div>

        {/* Room Filter Pills */}
        <div className="flex items-center gap-1.5 py-1">
          {['All', 'Living Room', 'Lab', 'Bed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                activeTab === tab
                  ? 'bg-[#00ff87] text-[#07090d] font-bold shadow-[0_0_10px_rgba(0,255,135,0.3)]'
                  : 'bg-white/5 text-[#8b99ad] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Devices Grid */}
      <div className="flex-1 px-4 py-2 space-y-2 overflow-y-auto no-scrollbar">
        {/* Device 1: Smart Inverter AC */}
        <div
          onClick={() => setAcOn(!acOn)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
            acOn
              ? 'bg-[#131b26] border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.12)]'
              : 'bg-[#0e1218] border-white/5 opacity-60'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                acOn ? 'bg-[#00ff87]/20 text-[#00ff87]' : 'bg-white/5 text-white/40'
              }`}
            >
              <Wind className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Inverter AC</div>
              <div className="text-[10px] text-[#8b99ad] font-mono">
                {acOn ? 'Cool 21°C • Fan Auto' : 'Powered Off'}
              </div>
            </div>
          </div>
          <div
            className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
              acOn ? 'bg-[#00ff87]' : 'bg-white/20'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-[#07090d] transition-transform ${
                acOn ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Device 2: Ambient Lighting Strip */}
        <div
          onClick={() => setLightsOn(!lightsOn)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
            lightsOn
              ? 'bg-[#131b26] border-[#38bdf8]/40 shadow-[0_0_15px_rgba(56,189,248,0.12)]'
              : 'bg-[#0e1218] border-white/5 opacity-60'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                lightsOn ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-white/5 text-white/40'
              }`}
            >
              <Power className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Ambient Strip Light</div>
              <div className="text-[10px] text-[#8b99ad] font-mono">
                {lightsOn ? '75% • Emerald Noir' : 'Standby'}
              </div>
            </div>
          </div>
          <div
            className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
              lightsOn ? 'bg-[#38bdf8]' : 'bg-white/20'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-[#07090d] transition-transform ${
                lightsOn ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Device 3: Smart Door Lock */}
        <div
          onClick={() => setLocked(!locked)}
          className="p-3 rounded-2xl bg-[#131b26] border border-white/10 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Smart Security Lock</div>
              <div className="text-[10px] text-[#8b99ad] font-mono">
                {locked ? 'SECURED • Locked' : 'UNLOCKED • Disarmed'}
              </div>
            </div>
          </div>
          <span
            className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
              locked ? 'bg-[#00ff87]/20 text-[#00ff87]' : 'bg-red-500/20 text-red-400'
            }`}
          >
            {locked ? 'LOCKED' : 'OPEN'}
          </span>
        </div>
      </div>

      {/* Bottom Live Hardware Telemetry Banner */}
      <div className="p-3 bg-[#080b10] border-t border-white/10 flex-shrink-0">
        <div className="p-2 rounded-xl bg-[#0f151e] border border-white/5 flex items-center justify-between text-[9px] font-mono">
          <div className="flex items-center gap-1.5 text-white/80">
            <Wifi className="w-3 h-3 text-[#00ff87]" />
            <span>ESP32-WROOM-32E</span>
          </div>
          <div className="flex items-center gap-1 text-[#00ff87] font-bold">
            <Activity className="w-2.5 h-2.5 animate-pulse" />
            <span>MQTT 38ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
