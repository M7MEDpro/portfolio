import { useState, useEffect } from 'react';
import {
  Thermometer,
  Droplets,
  Sun,
  Activity,
  Cpu,
  Power,
  RefreshCw,
  Terminal as TerminalIcon,
  CheckCircle2,
  ExternalLink,
  Zap,
} from 'lucide-react';

export function AgriTelemetryDashboard() {
  const [temperature, setTemperature] = useState(24.4);
  const [humidity, setHumidity] = useState(62.8);
  const [lux, setLux] = useState(840);
  const [soilMoisture, setSoilMoisture] = useState(58);
  const [fanActive, setFanActive] = useState(true);
  const [mistActive, setMistActive] = useState(false);
  const [lightsActive, setLightsActive] = useState(true);
  const [roofVentAngle, setRoofVentAngle] = useState(45);
  const [packets, setPackets] = useState<string[]>([
    'INIT: Arduino Uno R3 COM4 @ 115200 baud connected.',
    'DHT11_CAL: Setpoint band 22.0°C - 26.0°C nominal.',
    'FEEDBACK: Deterministic loop engaged [60Hz].',
    'RX [03:41:02]: T=24.4°C, H=62.8%, LDR=840 lx -> OK',
  ]);

  // Subtle real-time telemetry fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      const deltaTemp = (Math.random() - 0.5) * 0.3;
      const deltaHum = (Math.random() - 0.5) * 0.5;
      const deltaLux = Math.floor((Math.random() - 0.5) * 12);
      const deltaMoist = Math.floor((Math.random() - 0.5) * 2);

      setTemperature((t) => Number(Math.max(22, Math.min(26.5, t + deltaTemp)).toFixed(1)));
      setHumidity((h) => Number(Math.max(56, Math.min(72, h + deltaHum)).toFixed(1)));
      setLux((l) => Math.max(790, Math.min(910, l + deltaLux)));
      setSoilMoisture((m) => Math.max(54, Math.min(65, m + deltaMoist)));

      const timeStr = new Date().toTimeString().split(' ')[0];
      setPackets((prev) => [
        ...prev.slice(-3),
        `RX [${timeStr}]: T=${(24.4 + deltaTemp).toFixed(1)}°C H=${(62.8 + deltaHum).toFixed(1)}% LDR=${840 + deltaLux}lx -> Loop OK`,
      ]);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const handleTestRelay = () => {
    setMistActive(true);
    const timeStr = new Date().toTimeString().split(' ')[0];
    setPackets((prev) => [
      ...prev.slice(-3),
      `OVERRIDE [${timeStr}]: Solenoid mist valve pulsed (2000ms).`,
    ]);
    setTimeout(() => {
      setMistActive(false);
    }, 2200);
  };

  // Temp percentage in 20-30°C band
  const tempPercent = Math.min(100, Math.max(0, ((temperature - 20) / 10) * 100));

  return (
    <div className="w-full h-full flex flex-col bg-[#07090e] text-white font-sans text-xs select-none overflow-hidden justify-between">
      {/* 1. Header Bar */}
      <div className="h-8 px-3 bg-[#0a0d14] border-b border-white/10 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
          <span className="font-mono font-bold text-[11px] text-white tracking-wide">
            AGRI-TELEMETRY SCADA
          </span>
          <span className="px-1.5 py-0.5 rounded bg-[#00ff87]/10 text-[9px] font-mono text-[#00ff87] border border-[#00ff87]/30">
            IEEE ITC-Egypt 2025
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#94a3b8]">
          <span className="flex items-center gap-1 text-white/80">
            <Cpu className="w-3 h-3 text-[#00ff87]" />
            <span>Arduino Uno R3</span>
            <span className="text-[#00ff87] font-semibold">(COM4)</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#00ff87] font-semibold flex items-center gap-1">
            <Activity className="w-2.5 h-2.5 animate-pulse" />
            60Hz LOOP
          </span>
        </div>
      </div>

      {/* 2. Main Workstation Body */}
      <div className="flex-1 p-2.5 grid grid-cols-12 gap-2 overflow-hidden items-stretch">
        {/* Left Column: 4 Telemetry Gauges (7 cols) */}
        <div className="col-span-7 grid grid-cols-2 gap-2">
          {/* Gauge 1: Temperature */}
          <div className="p-2 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between hover:border-[#00ff87]/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Thermometer className="w-3 h-3 text-[#ff6b6b]" />
                DHT11 Temp
              </span>
              <span className="text-[8.5px] font-mono text-[#00ff87] bg-[#00ff87]/15 px-1 py-0.2 rounded border border-[#00ff87]/30">
                Optimal
              </span>
            </div>

            <div className="flex items-baseline justify-between my-0.5">
              <div className="text-xl font-bold font-mono text-white tabular-nums tracking-tight">
                {temperature}
                <span className="text-xs text-[#00ff87] font-normal ml-0.5">°C</span>
              </div>
              <div className="text-[8.5px] text-white/40 font-mono">22-26°C Band</div>
            </div>

            {/* Micro Gauge Meter */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00ff87] via-[#22c55e] to-[#f59e0b] rounded-full transition-all duration-700"
                style={{ width: `${tempPercent}%` }}
              />
            </div>
          </div>

          {/* Gauge 2: Humidity */}
          <div className="p-2 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between hover:border-[#38bdf8]/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Droplets className="w-3 h-3 text-[#38bdf8]" />
                DHT11 Humidity
              </span>
              <span className="text-[8.5px] font-mono text-[#38bdf8] bg-[#38bdf8]/15 px-1 py-0.2 rounded border border-[#38bdf8]/30">
                Stable
              </span>
            </div>

            <div className="flex items-baseline justify-between my-0.5">
              <div className="text-xl font-bold font-mono text-white tabular-nums tracking-tight">
                {humidity}
                <span className="text-xs text-[#38bdf8] font-normal ml-0.5">%RH</span>
              </div>
              <div className="text-[8.5px] text-white/40 font-mono">Target: 60%</div>
            </div>

            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#38bdf8] to-[#00ff87] rounded-full transition-all duration-700"
                style={{ width: `${humidity}%` }}
              />
            </div>
          </div>

          {/* Gauge 3: LDR Lux */}
          <div className="p-2 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between hover:border-[#f59e0b]/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Sun className="w-3 h-3 text-[#f59e0b]" />
                LDR Photo-Lux
              </span>
              <span className="text-[8.5px] font-mono text-[#f59e0b] bg-[#f59e0b]/15 px-1 py-0.2 rounded border border-[#f59e0b]/30">
                Daylight
              </span>
            </div>

            <div className="flex items-baseline justify-between my-0.5">
              <div className="text-xl font-bold font-mono text-white tabular-nums tracking-tight">
                {lux}
                <span className="text-xs text-[#f59e0b] font-normal ml-0.5">lx</span>
              </div>
              <div className="text-[8.5px] text-white/40 font-mono">&gt;500 lx min</div>
            </div>

            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, (lux / 1000) * 100)}%` }}
              />
            </div>
          </div>

          {/* Gauge 4: Soil Moisture */}
          <div className="p-2 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between hover:border-[#10b981]/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                Soil Moisture
              </span>
              <span className="text-[8.5px] font-mono text-[#10b981] bg-[#10b981]/15 px-1 py-0.2 rounded border border-[#10b981]/30">
                Nominal
              </span>
            </div>

            <div className="flex items-baseline justify-between my-0.5">
              <div className="text-xl font-bold font-mono text-white tabular-nums tracking-tight">
                {soilMoisture}
                <span className="text-xs text-[#10b981] font-normal ml-0.5">%</span>
              </div>
              <div className="text-[8.5px] text-white/40 font-mono">Feedback OK</div>
            </div>

            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#10b981] rounded-full transition-all duration-700"
                style={{ width: `${soilMoisture}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Relays & Serial Feed (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between gap-1.5">
          {/* Actuator Relay Card */}
          <div className="p-2 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[9.5px] font-mono">
              <span className="text-white/60 font-semibold flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-[#00ff87]" />
                RELAY MATRIX
              </span>
              <button
                onClick={handleTestRelay}
                className="flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#00ff87]/20 text-[#00ff87] hover:bg-[#00ff87]/30 transition-all text-[8.5px] font-mono"
              >
                <RefreshCw className={`w-2 h-2 ${mistActive ? 'animate-spin' : ''}`} />
                <span>Pulse Mist</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1 text-[9px] font-mono">
              {/* Fan */}
              <button
                onClick={() => setFanActive(!fanActive)}
                className={`p-1.5 rounded-lg border flex flex-col justify-between text-left transition-all ${
                  fanActive
                    ? 'bg-[#00ff87]/10 border-[#00ff87]/30 text-white'
                    : 'bg-black/30 border-white/5 text-white/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[9px]">Exhaust Fan</span>
                  <Power className={`w-2.5 h-2.5 ${fanActive ? 'text-[#00ff87]' : 'text-white/20'}`} />
                </div>
                <span className="text-[#00ff87] font-bold text-[8.5px] mt-0.5">
                  {fanActive ? '1400 RPM' : 'OFF'}
                </span>
              </button>

              {/* Mist */}
              <button
                onClick={handleTestRelay}
                className={`p-1.5 rounded-lg border flex flex-col justify-between text-left transition-all ${
                  mistActive
                    ? 'bg-[#38bdf8]/20 border-[#38bdf8]/40 text-white shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                    : 'bg-black/30 border-white/5 text-white/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[9px]">Mist Valve</span>
                  <Power className={`w-2.5 h-2.5 ${mistActive ? 'text-[#38bdf8] animate-pulse' : 'text-white/20'}`} />
                </div>
                <span className={`font-bold text-[8.5px] mt-0.5 ${mistActive ? 'text-[#38bdf8]' : 'text-white/40'}`}>
                  {mistActive ? 'PULSING' : 'STANDBY'}
                </span>
              </button>

              {/* Grow Lights */}
              <button
                onClick={() => setLightsActive(!lightsActive)}
                className={`p-1.5 rounded-lg border flex flex-col justify-between text-left transition-all ${
                  lightsActive
                    ? 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-white'
                    : 'bg-black/30 border-white/5 text-white/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[9px]">LED Grow</span>
                  <Power className={`w-2.5 h-2.5 ${lightsActive ? 'text-[#f59e0b]' : 'text-white/20'}`} />
                </div>
                <span className="text-[#f59e0b] font-bold text-[8.5px] mt-0.5">
                  {lightsActive ? '65% PWM' : 'OFF'}
                </span>
              </button>

              {/* Roof Shutter */}
              <button
                onClick={() => setRoofVentAngle((a) => (a === 45 ? 90 : 45))}
                className="p-1.5 rounded-lg bg-black/30 border border-white/5 text-white/70 flex flex-col justify-between text-left hover:border-white/20 transition-all"
              >
                <span className="font-sans text-[9px]">Vent Servo</span>
                <span className="text-white font-bold text-[8.5px] mt-0.5">
                  OPEN {roofVentAngle}°
                </span>
              </button>
            </div>
          </div>

          {/* Mini Serial Packet Stream */}
          <div className="p-1.5 rounded-xl bg-black/70 border border-white/10 font-mono flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[8.5px] text-[#00ff87] pb-1 border-b border-white/5">
              <span className="flex items-center gap-1">
                <TerminalIcon className="w-2.5 h-2.5" />
                <span>COM4 FEEDBACK STREAM</span>
              </span>
              <span className="text-white/40">115200</span>
            </div>

            <div className="space-y-0.5 text-[8px] leading-tight text-white/70 py-1 overflow-hidden">
              {packets.map((pkt, i) => (
                <div
                  key={i}
                  className={`truncate ${i === packets.length - 1 ? 'text-[#00ff87] font-semibold' : ''}`}
                >
                  &gt; {pkt}
                </div>
              ))}
            </div>

            <div className="pt-0.5 border-t border-white/5 flex items-center justify-between text-[7.5px] text-white/40">
              <span>CRC: 0x9B2F OK</span>
              <span className="text-[#00ff87]">DETERMINISTIC CLOSED-LOOP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom IEEE Xplore Citation Strip */}
      <div className="h-6 px-3 bg-[#080b10] border-t border-white/10 flex items-center justify-between text-[8.5px] font-mono text-[#8b99ad] flex-shrink-0">
        <span className="truncate max-w-[290px]">
          Paper DOI: <span className="text-[#00ff87]">10.1109/ITC-Egypt66095.2025.11186572</span>
        </span>
        <a
          href="https://doi.org/10.1109/ITC-Egypt66095.2025.11186572"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-[#00ff87] flex items-center gap-1 transition-colors"
        >
          <span>IEEE Xplore</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
