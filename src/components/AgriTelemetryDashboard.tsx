import { useState, useEffect, useMemo } from 'react';
import {
  Thermometer,
  Droplets,
  Sun,
  Activity,
  Cpu,
  RefreshCw,
  Terminal as TerminalIcon,
  CheckCircle2,
  ExternalLink,
  Zap,
  Wind,
  Gauge,
  ShieldCheck,
} from 'lucide-react';

export function AgriTelemetryDashboard() {
  // Telemetry core state
  const [temp, setTemp] = useState(24.3);
  const [humidity, setHumidity] = useState(62.4);
  const [lux, setLux] = useState(842);
  const [soilMoisture, setSoilMoisture] = useState(58);
  const [cycleCount, setCycleCount] = useState(482910);

  // Relay states
  const [fanActive, setFanActive] = useState(true);
  const [fanRpm, setFanRpm] = useState(1420);
  const [mistActive, setMistActive] = useState(false);
  const [lightsActive, setLightsActive] = useState(true);
  const [ventAngle, setVentAngle] = useState(45);
  const [autoMode, setAutoMode] = useState(true);

  // Historical telemetry points for live SVG spline charts (last 14 samples)
  const [history, setHistory] = useState([
    { t: 24.1, h: 63.1 },
    { t: 24.2, h: 62.9 },
    { t: 24.1, h: 63.0 },
    { t: 24.3, h: 62.7 },
    { t: 24.4, h: 62.5 },
    { t: 24.3, h: 62.4 },
    { t: 24.5, h: 62.1 },
    { t: 24.4, h: 62.3 },
    { t: 24.2, h: 62.6 },
    { t: 24.3, h: 62.5 },
    { t: 24.4, h: 62.2 },
    { t: 24.3, h: 62.4 },
    { t: 24.5, h: 62.0 },
    { t: 24.3, h: 62.4 },
  ]);

  // Serial Packet Stream
  const [packets, setPackets] = useState<
    { time: string; hex: string; decoded: string; crc: string }[]
  >([
    {
      time: '15:20:10',
      hex: '55 AA 04 18 3E 4C 03 4C',
      decoded: 'T:24.3°C H:62.5% L:843lx M:58%',
      crc: '0x9B28',
    },
    {
      time: '15:20:12',
      hex: '55 AA 04 18 3E 4B 03 4E',
      decoded: 'T:24.4°C H:62.2% L:845lx M:58%',
      crc: '0x9B34',
    },
    {
      time: '15:20:14',
      hex: '55 AA 04 18 3E 4C 03 4D',
      decoded: 'T:24.3°C H:62.4% L:842lx M:58%',
      crc: '0x9B2F',
    },
  ]);

  // Live real-time telemetry fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      const dTemp = (Math.random() - 0.48) * 0.25;
      const dHum = (Math.random() - 0.52) * 0.4;
      const dLux = Math.floor((Math.random() - 0.5) * 8);
      const dSoil = Math.floor((Math.random() - 0.5) * 1.2);

      const nextTemp = Number(Math.max(23.2, Math.min(25.4, temp + dTemp)).toFixed(1));
      const nextHum = Number(Math.max(59.5, Math.min(65.0, humidity + dHum)).toFixed(1));
      const nextLux = Math.max(810, Math.min(880, lux + dLux));
      const nextSoil = Math.max(55, Math.min(62, soilMoisture + dSoil));

      setTemp(nextTemp);
      setHumidity(nextHum);
      setLux(nextLux);
      setSoilMoisture(nextSoil);
      setCycleCount((c) => c + 120);

      if (fanActive) {
        setFanRpm(Math.round(1380 + (nextTemp - 22.0) * 35));
      }

      setHistory((prev) => [...prev.slice(1), { t: nextTemp, h: nextHum }]);

      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const hexTemp = Math.round(nextTemp * 10).toString(16).toUpperCase().padStart(2, '0');
      const hexHum = Math.round(nextHum * 10).toString(16).toUpperCase().padStart(2, '0');
      const hexLux = nextLux.toString(16).toUpperCase().padStart(4, '0');
      const hexSoil = nextSoil.toString(16).toUpperCase().padStart(2, '0');
      const randCrc = '0x' + Math.floor(0x9000 + Math.random() * 0x0fff).toString(16).toUpperCase();

      setPackets((prev) => [
        ...prev.slice(-2),
        {
          time: timeStr,
          hex: `55 AA 04 ${hexTemp} ${hexHum} ${hexLux.slice(0, 2)} ${hexLux.slice(2)} ${hexSoil}`,
          decoded: `T:${nextTemp}°C H:${nextHum}% L:${nextLux}lx M:${nextSoil}%`,
          crc: randCrc,
        },
      ]);
    }, 2400);

    return () => clearInterval(timer);
  }, [temp, humidity, lux, soilMoisture, fanActive]);

  const handlePulseMist = () => {
    setMistActive(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setPackets((prev) => [
      ...prev.slice(-2),
      {
        time: timeStr,
        hex: '55 AA 08 FF 00 00 07 D0',
        decoded: 'CMD: SOLENOID_PULSE 2000ms [ACK]',
        crc: '0xACE1',
      },
    ]);
    setTimeout(() => {
      setMistActive(false);
    }, 2200);
  };

  // Sparklines
  const tempSvgPath = useMemo(() => {
    const min = 22.0;
    const max = 26.0;
    const w = 48;
    const h = 16;
    const points = history.map((pt, i) => {
      const x = (i / (history.length - 1)) * w;
      const normalizedY = (pt.t - min) / (max - min);
      const y = h - normalizedY * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${points.join(' L ')}`;
  }, [history]);

  const humSvgPath = useMemo(() => {
    const min = 58.0;
    const max = 66.0;
    const w = 48;
    const h = 16;
    const points = history.map((pt, i) => {
      const x = (i / (history.length - 1)) * w;
      const normalizedY = (pt.h - min) / (max - min);
      const y = h - normalizedY * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${points.join(' L ')}`;
  }, [history]);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#040609] text-white font-sans text-xs select-none overflow-hidden p-1.5 gap-1.5 border border-[#1b2533]">
      {/* ========================================================================= */}
      {/* 1. COMPACT TOP STATUS HEADER                                              */}
      {/* ========================================================================= */}
      <div className="h-6 px-2.5 bg-gradient-to-r from-[#090d15] via-[#0e1422] to-[#090d15] rounded-lg border border-white/10 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-ping absolute opacity-70" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />
          </div>
          <span className="font-mono font-black text-[11px] text-white tracking-wider">
            AGRI-SCADA <span className="text-[#00ff87]">PRO</span>
          </span>
          <span className="px-1.5 py-0.2 rounded bg-[#00ff87]/15 text-[8px] font-mono text-[#00ff87] border border-[#00ff87]/30">
            IEEE ITC-2025
          </span>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-mono">
          <div className="flex items-center gap-1 px-1.5 py-0.2 rounded bg-white/5 border border-white/10">
            <Cpu className="w-2.5 h-2.5 text-[#38bdf8]" />
            <span className="text-white/60">Uno R3</span>
            <span className="text-[#00ff87] font-semibold">(COM4)</span>
          </div>

          <div className="flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87]">
            <Activity className="w-2.5 h-2.5 animate-pulse" />
            <span className="font-bold">60Hz Loop (16.6ms)</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-white/40">
            <span>Uptime:</span>
            <span className="text-white/80 tabular-nums">74h</span>
            <span className="text-white/20">|</span>
            <span>Cycles:</span>
            <span className="text-[#00ff87] tabular-nums">{cycleCount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. 4 PANORAMIC TELEMETRY CARDS (TOP ROW)                                  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-4 gap-1.5 flex-shrink-0">
        {/* Metric 1: DHT11 Temp */}
        <div className="p-1.5 rounded-lg bg-gradient-to-b from-[#0b1019] to-[#070b12] border border-white/10 hover:border-[#00ff87]/40 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-mono text-[#8b99ad] flex items-center gap-1">
              <Thermometer className="w-2.5 h-2.5 text-[#ff5252]" />
              <span>Temp</span>
            </span>
            <span className="text-[7px] font-mono text-[#00ff87] bg-[#00ff87]/15 px-1 rounded">
              Optimal
            </span>
          </div>

          <div className="flex items-baseline justify-between my-0.5">
            <div className="text-base font-bold font-mono text-white tabular-nums leading-none">
              {temp}
              <span className="text-[10px] text-[#00ff87] font-normal ml-0.5">°C</span>
            </div>
            <svg viewBox="0 0 48 16" className="w-12 h-3.5 overflow-visible">
              <path d={tempSvgPath} fill="none" stroke="#00ff87" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex justify-between text-[7px] font-mono text-white/40">
            <span>22-26°C Band</span>
            <span className="text-[#00ff87]">Δ -0.2°C</span>
          </div>
        </div>

        {/* Metric 2: DHT11 Humidity */}
        <div className="p-1.5 rounded-lg bg-gradient-to-b from-[#0b1019] to-[#070b12] border border-white/10 hover:border-[#38bdf8]/40 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-mono text-[#8b99ad] flex items-center gap-1">
              <Droplets className="w-2.5 h-2.5 text-[#38bdf8]" />
              <span>Humidity</span>
            </span>
            <span className="text-[7px] font-mono text-[#38bdf8] bg-[#38bdf8]/15 px-1 rounded">
              Stable
            </span>
          </div>

          <div className="flex items-baseline justify-between my-0.5">
            <div className="text-base font-bold font-mono text-white tabular-nums leading-none">
              {humidity}
              <span className="text-[10px] text-[#38bdf8] font-normal ml-0.5">%</span>
            </div>
            <svg viewBox="0 0 48 16" className="w-12 h-3.5 overflow-visible">
              <path d={humSvgPath} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex justify-between text-[7px] font-mono text-white/40">
            <span>Target: 60%</span>
            <span className="text-[#38bdf8]">Dew 16.8°</span>
          </div>
        </div>

        {/* Metric 3: LDR Lux */}
        <div className="p-1.5 rounded-lg bg-gradient-to-b from-[#0b1019] to-[#070b12] border border-white/10 hover:border-[#f59e0b]/40 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-mono text-[#8b99ad] flex items-center gap-1">
              <Sun className="w-2.5 h-2.5 text-[#f59e0b]" />
              <span>Light Lux</span>
            </span>
            <span className="text-[7px] font-mono text-[#f59e0b] bg-[#f59e0b]/15 px-1 rounded">
              Daylight
            </span>
          </div>

          <div className="flex items-baseline justify-between my-0.5">
            <div className="text-base font-bold font-mono text-white tabular-nums leading-none">
              {lux}
              <span className="text-[10px] text-[#f59e0b] font-normal ml-0.5">lx</span>
            </div>
            <span className="text-[8px] font-mono text-[#f59e0b] font-bold">&gt;500 lx</span>
          </div>

          <div className="flex justify-between text-[7px] font-mono text-white/40">
            <span>PPFD: {(lux / 54).toFixed(1)}</span>
            <span className="text-[#f59e0b]">Photoperiod</span>
          </div>
        </div>

        {/* Metric 4: Soil Moisture */}
        <div className="p-1.5 rounded-lg bg-gradient-to-b from-[#0b1019] to-[#070b12] border border-white/10 hover:border-[#10b981]/40 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-mono text-[#8b99ad] flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-[#10b981]" />
              <span>Soil Moist.</span>
            </span>
            <span className="text-[7px] font-mono text-[#10b981] bg-[#10b981]/15 px-1 rounded">
              Capacitive
            </span>
          </div>

          <div className="flex items-baseline justify-between my-0.5">
            <div className="text-base font-bold font-mono text-white tabular-nums leading-none">
              {soilMoisture}
              <span className="text-[10px] text-[#10b981] font-normal ml-0.5">%</span>
            </div>
            <span className="text-[8px] font-mono text-[#10b981] font-bold">0.74V</span>
          </div>

          <div className="flex justify-between text-[7px] font-mono text-white/40">
            <span>Root-Zone OK</span>
            <span className="text-[#10b981]">Idle</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CENTER SPLIT: RELAY CONTROLLER (LEFT) & SERIAL TERMINAL (RIGHT)        */}
      {/* ========================================================================= */}
      <div className="flex-1 grid grid-cols-12 gap-1.5 overflow-hidden items-stretch min-h-0">
        
        {/* Left: Actuator Relay Controller Matrix (6 cols) */}
        <div className="col-span-6 p-1.5 rounded-lg bg-[#0b1019] border border-white/10 flex flex-col justify-between gap-1 shadow-sm">
          <div className="flex items-center justify-between text-[9px] font-mono pb-0.5 border-b border-white/5">
            <span className="text-white/80 font-bold flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-[#00ff87]" />
              <span>RELAY MATRIX</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setAutoMode(!autoMode)}
                className={`px-1.5 py-0.2 rounded text-[7px] font-mono font-bold transition-all cursor-pointer ${
                  autoMode
                    ? 'bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/40'
                    : 'bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/40'
                }`}
                title="Toggle Auto/Manual Mode"
              >
                {autoMode ? 'AUTO-PID' : 'MANUAL'}
              </button>
              <button
                onClick={handlePulseMist}
                className="flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-[#00ff87]/20 text-[#00ff87] hover:bg-[#00ff87]/30 active:scale-95 transition-all text-[7px] font-mono font-semibold cursor-pointer"
                title="Trigger Mist Solenoid"
              >
                <RefreshCw className={`w-2 h-2 ${mistActive ? 'animate-spin' : ''}`} />
                <span>Pulse</span>
              </button>
            </div>
          </div>

          {/* 4 Relays in 2x2 grid */}
          <div className="grid grid-cols-2 gap-1 text-[8px] font-mono flex-1 items-stretch">
            {/* Relay 1: Exhaust Fan */}
            <button
              onClick={() => setFanActive(!fanActive)}
              className={`p-1 rounded-md border flex items-center justify-between transition-all cursor-pointer ${
                fanActive
                  ? 'bg-[#00ff87]/10 border-[#00ff87]/40 text-white'
                  : 'bg-black/40 border-white/5 text-white/40'
              }`}
            >
              <div className="flex items-center gap-1">
                <Wind className={`w-2.5 h-2.5 text-[#00ff87] ${fanActive ? 'animate-spin' : ''}`} style={{ animationDuration: '1.2s' }} />
                <span className="font-sans font-medium text-[8.5px]">Fan</span>
              </div>
              <span className="text-[#00ff87] font-bold text-[7.5px] tabular-nums">
                {fanActive ? `${fanRpm} RPM` : 'OFF'}
              </span>
            </button>

            {/* Relay 2: Mist Valve */}
            <button
              onClick={handlePulseMist}
              className={`p-1 rounded-md border flex items-center justify-between transition-all cursor-pointer ${
                mistActive
                  ? 'bg-[#38bdf8]/20 border-[#38bdf8]/50 text-white shadow-[0_0_10px_rgba(56,189,248,0.3)] animate-pulse'
                  : 'bg-black/40 border-white/5 text-white/40'
              }`}
            >
              <div className="flex items-center gap-1">
                <Droplets className={`w-2.5 h-2.5 ${mistActive ? 'text-[#38bdf8]' : 'text-white/40'}`} />
                <span className="font-sans font-medium text-[8.5px]">Mist</span>
              </div>
              <span className={`font-bold text-[7.5px] ${mistActive ? 'text-[#38bdf8]' : 'text-white/40'}`}>
                {mistActive ? 'PULSE' : 'STANDBY'}
              </span>
            </button>

            {/* Relay 3: LED Grow Lights */}
            <button
              onClick={() => setLightsActive(!lightsActive)}
              className={`p-1 rounded-md border flex items-center justify-between transition-all cursor-pointer ${
                lightsActive
                  ? 'bg-[#f59e0b]/10 border-[#f59e0b]/40 text-white'
                  : 'bg-black/40 border-white/5 text-white/40'
              }`}
            >
              <div className="flex items-center gap-1">
                <Sun className={`w-2.5 h-2.5 ${lightsActive ? 'text-[#f59e0b]' : 'text-white/40'}`} />
                <span className="font-sans font-medium text-[8.5px]">LED Grow</span>
              </div>
              <span className="text-[#f59e0b] font-bold text-[7.5px]">
                {lightsActive ? '65% PWM' : 'OFF'}
              </span>
            </button>

            {/* Relay 4: Shutter Vent Servo */}
            <button
              onClick={() => setVentAngle((a) => (a === 45 ? 90 : a === 90 ? 0 : 45))}
              className="p-1 rounded-md bg-black/40 border border-white/10 text-white flex items-center justify-between hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <Gauge className="w-2.5 h-2.5 text-[#34d399]" />
                <span className="font-sans font-medium text-[8.5px]">Vent</span>
              </div>
              <span className="text-white font-bold text-[7.5px]">
                {ventAngle}°
              </span>
            </button>
          </div>
        </div>

        {/* Right: High-Density UART Serial Telemetry Stream (6 cols) */}
        <div className="col-span-6 p-1.5 rounded-lg bg-black/90 border border-white/10 font-mono flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-[8px] pb-0.5 border-b border-white/10">
            <span className="text-[#00ff87] font-bold flex items-center gap-1">
              <TerminalIcon className="w-2.5 h-2.5" />
              <span>COM4 UART TELEMETRY</span>
            </span>
            <span className="text-white/40 font-mono text-[7px]">115200 8-N-1</span>
          </div>

          <div className="space-y-0.5 text-[7px] leading-tight text-white/80 py-0.5 overflow-hidden font-mono flex-1 flex flex-col justify-center">
            {packets.map((pkt, i) => (
              <div
                key={i}
                className={`flex items-baseline justify-between gap-1 truncate ${
                  i === packets.length - 1 ? 'text-[#00ff87] font-semibold' : 'text-white/60'
                }`}
              >
                <span className="text-white/30 truncate">[{pkt.time}]</span>
                <span className="truncate text-white/80">{pkt.decoded}</span>
                <span className="text-[#f59e0b] text-[6.5px]">{pkt.crc}</span>
              </div>
            ))}
          </div>

          <div className="pt-0.5 border-t border-white/5 flex items-center justify-between text-[7px] text-white/40">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-2 h-2 text-[#00ff87]" />
              <span className="text-white/70">CRC-16 PASS</span>
            </span>
            <span className="text-[#00ff87] font-semibold">CLOSED-LOOP PID</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM ACADEMIC PUBLICATION FOOTER STRIP                               */}
      {/* ========================================================================= */}
      <div className="h-5 px-2 bg-[#080b10] rounded-md border border-white/10 flex items-center justify-between text-[8px] font-mono text-[#8b99ad] flex-shrink-0">
        <div className="flex items-center gap-1.5 truncate">
          <span className="px-1 py-0.2 rounded bg-white/10 text-white/70 text-[7px] font-bold">
            IEEE XPLORE
          </span>
          <span className="truncate max-w-[280px]">
            DOI: <span className="text-[#00ff87] font-semibold">10.1109/ITC-Egypt66095.2025.11186572</span>
          </span>
        </div>

        <a
          href="https://doi.org/10.1109/ITC-Egypt66095.2025.11186572"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-[#00ff87] flex items-center gap-1 transition-colors text-[7.5px] font-semibold"
        >
          <span>View Paper</span>
          <ExternalLink className="w-2.5 h-2.5 text-[#00ff87]" />
        </a>
      </div>
    </div>
  );
}
