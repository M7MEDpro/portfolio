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
} from 'lucide-react';

export function AgriTelemetryDashboard() {
  const [temperature, setTemperature] = useState(24.6);
  const [humidity, setHumidity] = useState(62.4);
  const [lux, setLux] = useState(845);
  const [fanActive, setFanActive] = useState(true);
  const [mistActive, setMistActive] = useState(false);
  const [lightsActive, setLightsActive] = useState(true);
  const [roofVentAngle, setRoofVentAngle] = useState(45);
  const [packets, setPackets] = useState<string[]>([
    'INIT: Arduino Uno R3 COM4 @ 115200 baud connected.',
    'DHT11_CALIBRATE: Temperature setpoint band 22.0°C - 26.0°C.',
    'FEEDBACK_LOOP: Closed-loop deterministic logic active.',
    'RX [03:41:02]: T=24.6°C, H=62.4%, LDR=845 lx -> Nominal',
    'RELAY_01: Exhaust fan 1400 RPM engaged [Temp > 24.0°C]',
  ]);

  // Simulate subtle real-time telemetry fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      const deltaTemp = (Math.random() - 0.5) * 0.4;
      const deltaHum = (Math.random() - 0.5) * 0.6;
      const deltaLux = Math.floor((Math.random() - 0.5) * 15);

      setTemperature((t) => Number(Math.max(22, Math.min(27, t + deltaTemp)).toFixed(1)));
      setHumidity((h) => Number(Math.max(55, Math.min(75, h + deltaHum)).toFixed(1)));
      setLux((l) => Math.max(780, Math.min(920, l + deltaLux)));

      const timeStr = new Date().toTimeString().split(' ')[0];
      setPackets((prev) => [
        ...prev.slice(-4),
        `RX [${timeStr}]: T=${(24.6 + deltaTemp).toFixed(1)}°C H=${(62.4 + deltaHum).toFixed(1)}% LDR=${845 + deltaLux}lx -> Feedback Loop Valid`,
      ]);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const handleTestRelay = () => {
    setMistActive(true);
    const timeStr = new Date().toTimeString().split(' ')[0];
    setPackets((prev) => [
      ...prev.slice(-4),
      `MANUAL_OVERRIDE [${timeStr}]: Solenoid mist valve pulsed (2000ms).`,
    ]);
    setTimeout(() => {
      setMistActive(false);
    }, 2500);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#07090e] text-white font-sans text-xs select-none overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="h-9 px-3 bg-[#0a0d14] border-b border-white/10 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
          <span className="font-mono font-bold text-[11px] text-white tracking-wide">
            AGRI-TELEMETRY CONTROL
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-[#00ff87] border border-[#00ff87]/30">
            IEEE ITC-Egypt 2025
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#94a3b8]">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#00ff87]" />
            <span className="hidden md:inline">Arduino Uno:</span>
            <span className="text-white font-bold">COM4 @ 115200</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="text-[#00ff87] font-semibold flex items-center gap-1">
            <Activity className="w-2.5 h-2.5 animate-pulse" />
            LOOP: 60Hz
          </span>
        </div>
      </div>

      {/* Main Console Grid */}
      <div className="flex-1 p-3 grid grid-cols-12 gap-2.5 overflow-hidden">
        {/* Left Column: 4 Live Telemetry Gauges */}
        <div className="col-span-12 sm:col-span-7 grid grid-cols-2 gap-2">
          {/* Temperature (DHT11) */}
          <div className="p-2.5 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Thermometer className="w-3 h-3 text-[#ff5f56]" />
                DHT11 Temp
              </span>
              <span className="text-[9px] font-mono text-[#00ff87] bg-[#00ff87]/10 px-1 py-0.2 rounded">
                Optimal
              </span>
            </div>
            <div className="my-1">
              <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                {temperature} <span className="text-xs text-[#00ff87]">°C</span>
              </div>
              <div className="text-[9px] text-[#8b99ad] font-mono">Target: 22.0 - 26.0 °C</div>
            </div>
            {/* Simulated Live Sparkline */}
            <div className="h-4 w-full flex items-end gap-0.5">
              {[40, 55, 60, 48, 70, 65, 80, 75, 85, 78, 88].map((val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#00ff87]/40 rounded-t transition-all duration-500"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>

          {/* Humidity (DHT11) */}
          <div className="p-2.5 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Droplets className="w-3 h-3 text-[#38bdf8]" />
                DHT11 Humidity
              </span>
              <span className="text-[9px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-1 py-0.2 rounded">
                Stable
              </span>
            </div>
            <div className="my-1">
              <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                {humidity} <span className="text-xs text-[#38bdf8]">%RH</span>
              </div>
              <div className="text-[9px] text-[#8b99ad] font-mono">Target: 55 - 70 %RH</div>
            </div>
            {/* Bar meter */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#38bdf8] to-[#00ff87] rounded-full transition-all duration-700"
                style={{ width: `${humidity}%` }}
              />
            </div>
          </div>

          {/* Light Intensity (LDR) */}
          <div className="p-2.5 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <Sun className="w-3 h-3 text-[#f59e0b]" />
                LDR Photo-Lux
              </span>
              <span className="text-[9px] font-mono text-[#f59e0b] bg-[#f59e0b]/10 px-1 py-0.2 rounded">
                Daylight
              </span>
            </div>
            <div className="my-1">
              <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                {lux} <span className="text-xs text-[#f59e0b]">Lux</span>
              </div>
              <div className="text-[9px] text-[#8b99ad] font-mono">Daylight Threshold: &gt;500</div>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full transition-all duration-700"
                style={{ width: `${(lux / 1000) * 100}%` }}
              />
            </div>
          </div>

          {/* Soil Moisture & Loop Status */}
          <div className="p-2.5 rounded-xl bg-[#0d1219] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8b99ad] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                Soil Moisture
              </span>
              <span className="text-[9px] font-mono text-[#10b981] bg-[#10b981]/10 px-1 py-0.2 rounded">
                Good
              </span>
            </div>
            <div className="my-1">
              <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                58 <span className="text-xs text-[#10b981]">%</span>
              </div>
              <div className="text-[9px] text-[#8b99ad] font-mono">Closed-Loop Relay: Ready</div>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#10b981] rounded-full" style={{ width: '58%' }} />
            </div>
          </div>
        </div>

        {/* Right Column: Closed-Loop Actuators & Terminal */}
        <div className="col-span-12 sm:col-span-5 flex flex-col gap-2">
          {/* Actuator Relay Status Box */}
          <div className="p-2.5 rounded-xl bg-[#0d1219] border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-white/60">ACTUATOR RELAYS</span>
              <button
                onClick={handleTestRelay}
                className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#00ff87]/20 text-[#00ff87] hover:bg-[#00ff87]/30 transition-all font-mono text-[9px]"
              >
                <RefreshCw className={`w-2.5 h-2.5 ${mistActive ? 'animate-spin' : ''}`} />
                <span>Test Pulse</span>
              </button>
            </div>

            {/* Relays List */}
            <div className="space-y-1">
              {/* Relay 1: Fan */}
              <div
                onClick={() => setFanActive(!fanActive)}
                className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/5 cursor-pointer hover:border-[#00ff87]/30 transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <Power
                    className={`w-3 h-3 ${fanActive ? 'text-[#00ff87]' : 'text-white/30'}`}
                  />
                  <span className="text-[10px] text-white">Exhaust Fan</span>
                </div>
                <span className="font-mono text-[9px] text-[#00ff87] font-semibold">
                  {fanActive ? '1400 RPM' : 'OFF'}
                </span>
              </div>

              {/* Relay 2: Mist Valve */}
              <div
                onClick={handleTestRelay}
                className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/5 cursor-pointer hover:border-[#38bdf8]/30 transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <Power
                    className={`w-3 h-3 ${mistActive ? 'text-[#38bdf8] animate-pulse' : 'text-white/30'}`}
                  />
                  <span className="text-[10px] text-white">Irrigation Mist</span>
                </div>
                <span
                  className={`font-mono text-[9px] font-semibold ${mistActive ? 'text-[#38bdf8]' : 'text-white/40'}`}
                >
                  {mistActive ? 'PULSING (AUTO)' : 'STANDBY'}
                </span>
              </div>

              {/* Relay 3: Grow Lights */}
              <div
                onClick={() => setLightsActive(!lightsActive)}
                className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/5 cursor-pointer hover:border-[#f59e0b]/30 transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <Power
                    className={`w-3 h-3 ${lightsActive ? 'text-[#f59e0b]' : 'text-white/30'}`}
                  />
                  <span className="text-[10px] text-white">LED Grow Array</span>
                </div>
                <span className="font-mono text-[9px] text-[#f59e0b] font-semibold">
                  {lightsActive ? '65% PWM' : 'OFF'}
                </span>
              </div>

              {/* Roof Shutter */}
              <div
                onClick={() => setRoofVentAngle((a) => (a === 45 ? 90 : 45))}
                className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/5 cursor-pointer hover:border-white/20 transition-all"
              >
                <span className="text-[10px] text-white pl-4">Roof Vent Servo</span>
                <span className="font-mono text-[9px] text-white/80">
                  OPEN {roofVentAngle}°
                </span>
              </div>
            </div>
          </div>

          {/* Mini Serial Packet Stream */}
          <div className="flex-1 p-2 rounded-xl bg-black/60 border border-white/10 font-mono flex flex-col justify-between overflow-hidden">
            <div className="flex items-center gap-1.5 text-[9px] text-[#00ff87] pb-1 border-b border-white/5">
              <TerminalIcon className="w-2.5 h-2.5" />
              <span>SERIAL FEEDBACK LOG [115200 BAUD]</span>
            </div>

            <div className="space-y-0.5 text-[8.5px] leading-tight text-white/70 overflow-hidden py-1">
              {packets.map((pkt, i) => (
                <div
                  key={i}
                  className={`truncate ${i === packets.length - 1 ? 'text-[#00ff87] font-semibold' : ''}`}
                >
                  &gt; {pkt}
                </div>
              ))}
            </div>

            <div className="pt-1 border-t border-white/5 flex items-center justify-between text-[8px] text-white/40">
              <span>CRC: 0x9B2F OK</span>
              <span className="text-[#00ff87]">CLOSED-LOOP DETERMINISTIC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom IEEE Xplore Citation Strip */}
      <div className="h-6 px-3 bg-[#080b10] border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-[#8b99ad] flex-shrink-0">
        <span className="truncate max-w-[280px]">
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
