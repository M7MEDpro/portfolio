import { useState } from 'react';
import { LaptopMockup } from './LaptopMockup';
import { PhoneMockup } from './PhoneMockup';
import { ServerMockup } from './ServerMockup';
import { GithubIcon } from './Icons';
import {
  Globe,
  Smartphone,
  Server,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export function ThreeTierShowcase() {
  // State for active project tab inside each tier
  const [webProjectIdx, setWebProjectIdx] = useState(0);
  const [mobileProjectIdx, setMobileProjectIdx] = useState(0);
  const [backendProjectIdx, setBackendProjectIdx] = useState(0);

  // 1. Full-Stack Web Projects (Displayed on Laptop)
  const webProjects = [
    {
      id: 'ieee-web',
      title: 'IEEE Student Branch Portal',
      subtitle: 'Production Member Dashboard & Event Engine',
      role: 'Lead Full-Stack Web Architect',
      organization: 'IEEE ECU Student Branch',
      summary:
        'Complete web portal for the university IEEE branch. Powers student onboarding, committee permissions, and QR-code attendance check-ins for 500+ active members without downtime.',
      highlights: [
        'Secure JWT authentication with role-based access for committee leads and students.',
        'High-density responsive dashboard managing event logs, attendance, and member profiles.',
        'Zero unhandled crashes across 30+ service endpoints with clean client error messages.',
      ],
      stats: [
        { label: 'Active Members', value: '500+' },
        { label: 'Endpoints', value: '30+' },
        { label: 'Uptime', value: '99.9%' },
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot API', 'MongoDB', 'Vite'],
      image: '/projects/ieee_dashboard.png',
      url: 'https://ieee.ecu.edu.eg',
      badge: 'Production Portal',
      statLabel: 'Active Members',
      statValue: '512 Registered',
      github: 'https://github.com/M7MEDpro/IEEE-ECU-SB-Platform',
    },
    {
      id: 'pcb-web',
      title: 'Innovatronics PCB Interactive Engine',
      subtitle: 'Procedural Vector Canvas & Algorithmic Routing',
      role: 'Lead Frontend & Graphics Engineer',
      organization: 'Innovatronics Tech',
      summary:
        'Interactive web application featuring an animated printed circuit board (PCB) organizational tree. Coded mathematical line-routing algorithms in Flutter CustomPainter to render traces dynamically.',
      highlights: [
        'Custom line-routing algorithm with 45° angle bends and bezier smoothing.',
        'Solid 60 FPS vector animations running smoothly on desktop and mobile touchscreens.',
        'Pure web canvas rendering with zero heavy third-party DOM libraries.',
      ],
      stats: [
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Canvas Engine', value: 'Custom' },
        { label: 'Trace Routing', value: '45° Bezier' },
      ],
      tags: ['Flutter Web', 'Dart', 'CustomPainter', 'Vector Canvas', 'Algorithmic Routing'],
      image: '/assets/projects/innovationics_tech.png',
      url: 'https://innovatronics.tech',
      badge: 'CustomPainter Canvas',
      statLabel: 'Rendering',
      statValue: '60 FPS Solid',
      github: 'https://github.com/M7MEDpro',
    },
  ];

  // 2. Full-Stack Mobile & Hardware IoT Projects (Displayed on Phone)
  const mobileProjects = [
    {
      id: 'messio-mobile',
      title: 'Projecto-Messio Smart Home IoT',
      subtitle: 'ESP32 Firmware & Realtime Mobile Controller',
      role: 'Embedded Firmware & Flutter Engineer',
      organization: 'Applied IoT Project',
      summary:
        'End-to-end home automation connecting ESP32 microcontroller sensors to a custom Flutter mobile app over local MQTT. Relays and environmental sensors toggle in under 40ms.',
      highlights: [
        'Non-blocking event-driven C++ firmware running on ESP32 microcontrollers with hardware debounce filters.',
        'Sub-40ms local round-trip latency over MQTT message broker for instant lighting and climate adjustments.',
        'Local offline buffer keeping home devices operational even when internet connection drops.',
      ],
      stats: [
        { label: 'Relay Latency', value: '<40ms' },
        { label: 'Microcontroller', value: 'ESP32' },
        { label: 'Protocol', value: 'MQTT / WS' },
      ],
      tags: ['Flutter', 'Dart', 'C++ / ESP32', 'MQTT Broker', 'WebSockets', 'Hardware Relays'],
      image: '/assets/projects/smart_home_iot.png',
      badge: 'Flutter + ESP32',
      statLabel: 'Ping Loop',
      statValue: '38ms',
      github: 'https://github.com/M7MEDpro',
    },
    {
      id: 'thauma-mobile',
      title: 'Thauma Leaderboard & Gamification',
      subtitle: 'High-FPS Animated Ranking & Trophy App',
      role: 'Mobile Frontend Engineer',
      organization: 'Thauma Platform',
      summary:
        'Mobile gamification application featuring real-time hall-of-fame leaderboards, achievement trophies, and responsive ranking lists running at solid 60 FPS.',
      highlights: [
        'Butter-smooth 60 FPS animations with hardware-accelerated particle effects and staggered list transitions.',
        'Live ranking synchronization updating player score deltas and trophy unlock badges instantly.',
        'Adaptive touch-friendly ergonomics optimized for one-handed mobile navigation.',
      ],
      stats: [
        { label: 'Animation', value: '60 FPS' },
        { label: 'Platform', value: 'Flutter' },
        { label: 'State', value: 'Riverpod' },
      ],
      tags: ['Flutter', 'Dart', '60 FPS Animations', 'Riverpod', 'Clean Architecture'],
      image: '/assets/projects/thauma_09_hall_of_fame_leaderboard.png',
      badge: 'Hall of Fame UI',
      statLabel: 'Render Speed',
      statValue: '60 FPS',
      github: 'https://github.com/M7MEDpro',
    },
    {
      id: 'healthlink-mobile',
      title: 'HealthLink Clinical Telemetry',
      subtitle: 'Patient Records & Encrypted Database',
      role: 'Cross-Platform Engineer',
      organization: 'Clinical Informatics Project',
      summary:
        'Healthcare mobile application for patient vital statistics, appointment queues, and diagnostic histories with encrypted local database synchronization.',
      highlights: [
        'Local SQLite database encrypted with SQLCipher for confidential records and instant offline search.',
        'Tailored touch ergonomics designed for clinical handheld tablets and smartphones.',
        'Shared native C++ processing layer for fast record decryption without UI stutter.',
      ],
      stats: [
        { label: 'Database', value: 'SQLCipher' },
        { label: 'Sync', value: 'Realtime' },
        { label: 'Target', value: 'Mobile/Tablet' },
      ],
      tags: ['Flutter Mobile', 'C++ Core', 'SQLCipher Encrypted', 'State Management'],
      image: '/assets/projects/healthlink_medical.png',
      badge: 'Encrypted Vitals',
      statLabel: 'Database',
      statValue: 'SQLCipher',
      github: 'https://github.com/M7MEDpro',
    },
  ];

  // 3. High-Performance Java Backend & Spring Boot (Displayed on Server Rack)
  const backendProjects = [
    {
      id: 'spring-backend',
      title: 'IEEE ECU Core Backend API',
      subtitle: 'Spring Boot 3.2 • MongoDB • JWT RBAC Architecture',
      role: 'Lead Backend Systems Architect',
      organization: 'IEEE ECU Student Branch',
      summary:
        'Enterprise Spring Boot 3 backend architecture powering student registrations, QR attendance, and committee permissions. Clean layered domain model built for reliability and zero crashes.',
      highlights: [
        'Domain-Driven Design (DDD) cleanly separating authentication, attendance logs, and event registries into decoupled service domains.',
        'Cryptographically salted JWT authorization tokens with role-based permissions (Students, Leads, Admins).',
        'RFC 7807 problem details handler guaranteeing structured, actionable error payloads across 30+ service endpoints.',
      ],
      stats: [
        { label: 'API Endpoints', value: '30+' },
        { label: 'Architecture', value: 'Clean DDD' },
        { label: 'Error Handling', value: 'RFC 7807' },
      ],
      tags: ['Java 21', 'Spring Boot 3', 'MongoDB', 'JWT / RBAC', 'Docker', 'REST API'],
      endpointsCount: '30+ Endpoints',
      engine: 'Java 21 • Spring Boot 3.2',
      syncLatency: 'Cluster Healthy',
      statLabel: 'Active Sessions',
      statValue: '482 / 500',
      badge: 'Production Backend',
      github: 'https://github.com/M7MEDpro/IEEE-ECU-SB-Platform',
    },
    {
      id: 'java-distributed',
      title: 'High-Concurrency Java Server Core',
      subtitle: 'Non-Blocking Async Queues • Redis Pub/Sub Synchronization',
      role: 'Java Systems Developer',
      organization: 'Rollerite LLC (Commercial Contract)',
      summary:
        'High-performance distributed Java server system handling non-blocking player moderation, bans, mutes, and transaction queues across distributed server proxy nodes without tick loss.',
      highlights: [
        'Asynchronous worker threads completely decoupling disk I/O, SQL, and Redis operations from the main server loop (20.0 TPS solid).',
        'Distributed cross-server state propagation synchronizing penalty actions within 15ms via Redis pub/sub channels.',
        'Dual-layer connection pooling (HikariCP + Redis) with automatic offline reconciliation and fallback query buffers.',
      ],
      stats: [
        { label: 'Server Tick Rate', value: '20.0 TPS' },
        { label: 'Cross-Node Sync', value: '<15ms' },
        { label: 'Commissions', value: '8 Delivered' },
      ],
      tags: ['Java 21', 'Distributed Systems', 'Redis Pub/Sub', 'MySQL', 'HikariCP', 'Async Queues'],
      endpointsCount: 'Multi-Server Proxy',
      engine: 'Java 21 • Redis • HikariCP',
      syncLatency: '<15ms Sync',
      statLabel: 'Server Tick Rate',
      statValue: '20.0 TPS',
      badge: 'Rollerite Commercial',
      github: 'https://github.com/M7MEDpro',
    },
  ];

  const currentWeb = webProjects[webProjectIdx];
  const currentMobile = mobileProjects[mobileProjectIdx];
  const currentBackend = backendProjects[backendProjectIdx];

  return (
    <section id="projects" className="relative py-20 md:py-36 bg-[#070809] overflow-hidden">
      {/* Background Circuit Grid & Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00ff87]/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0e1217] border border-[#00ff87]/30 text-xs font-mono text-[#00ff87] mb-6 shadow-[0_0_20px_rgba(0,255,135,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Three Production Pillars</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Web. Mobile. Backend.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] via-[#22c55e] to-[#10b981]">
              Engineered from scratch.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed max-w-2xl mx-auto">
            Explore my real projects and technical stacks across three specialized engineering tiers: Full-Stack Web on Laptop, Full-Stack Mobile on Phone, and Java Backend on Server.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TIER 1: FULL-STACK WEBSITE & WEB ARCHITECTURE (Laptop on Left, Info on Right) */}
        {/* ========================================================================= */}
        <div className="mb-32 md:mb-44 relative">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                Tier 01 • Web Platform
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Full-Stack Website & Web Architecture
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Laptop Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <LaptopMockup
                title={currentWeb.title}
                category="Web Platform"
                image={currentWeb.image}
                url={currentWeb.url}
                badge={currentWeb.badge}
                statLabel={currentWeb.statLabel}
                statValue={currentWeb.statValue}
                accentColor="#00ff87"
                tiltDirection="left"
              />
            </div>

            {/* Right Column: Project Details & Web Stack */}
            <div className="lg:col-span-6 space-y-6">
              {/* Project Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {webProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setWebProjectIdx(idx)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                      webProjectIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00ff87]">
                      {currentWeb.organization}
                    </span>
                    <span className="text-xs font-medium text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {currentWeb.role}
                    </span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    {currentWeb.title}
                  </h4>
                  <p className="text-xs font-mono text-[#8b99ad] mt-0.5">
                    {currentWeb.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {currentWeb.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs uppercase font-mono text-white/50 tracking-wider">
                    Engineering Highlights
                  </div>
                  {currentWeb.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff87] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {currentWeb.stats.map((s, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="font-heading font-bold text-base text-[#00ff87] tabular">
                        {s.value}
                      </div>
                      <div className="text-[10px] font-mono text-white/50">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Web Stack Chips */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-white/50 mb-2">Web Technology Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentWeb.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#141b24] border border-white/10 text-xs font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={currentWeb.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository & Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 2: FULL-STACK MOBILE & HARDWARE IOT (Info on Left, Phone on Right) */}
        {/* ========================================================================= */}
        <div className="mb-32 md:mb-44 relative">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                Tier 02 • Mobile & Hardware
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Full-Stack Mobile & Connected IoT
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Project Details & Mobile Stack */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              {/* Project Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {mobileProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setMobileProjectIdx(idx)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                      mobileProjectIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00ff87]">
                      {currentMobile.organization}
                    </span>
                    <span className="text-xs font-medium text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {currentMobile.role}
                    </span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    {currentMobile.title}
                  </h4>
                  <p className="text-xs font-mono text-[#8b99ad] mt-0.5">
                    {currentMobile.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {currentMobile.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs uppercase font-mono text-white/50 tracking-wider">
                    Firmware & Mobile Highlights
                  </div>
                  {currentMobile.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff87] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {currentMobile.stats.map((s, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="font-heading font-bold text-base text-[#00ff87] tabular">
                        {s.value}
                      </div>
                      <div className="text-[10px] font-mono text-white/50">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mobile Stack Chips */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-white/50 mb-2">Mobile & Hardware Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentMobile.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#141b24] border border-white/10 text-xs font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={currentMobile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository & Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Phone Mockup */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <PhoneMockup
                title={currentMobile.title}
                category="Mobile Application"
                image={currentMobile.image}
                badge={currentMobile.badge}
                statLabel={currentMobile.statLabel}
                statValue={currentMobile.statValue}
                accentColor="#00ff87"
                tiltDirection="right"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 3: HIGH-PERFORMANCE JAVA BACKEND & SPRING BOOT (Server Rack on Left) */}
        {/* ========================================================================= */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                Tier 03 • Server Systems
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Java Backend & Spring Boot Systems
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Server Rack Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <ServerMockup
                title={currentBackend.title}
                category="Java Backend Systems"
                badge={currentBackend.badge}
                statLabel={currentBackend.statLabel}
                statValue={currentBackend.statValue}
                accentColor="#00ff87"
                tiltDirection="left"
                endpointsCount={currentBackend.endpointsCount}
                engine={currentBackend.engine}
                syncLatency={currentBackend.syncLatency}
              />
            </div>

            {/* Right Column: Project Details & Backend Stack */}
            <div className="lg:col-span-6 space-y-6">
              {/* Project Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {backendProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setBackendProjectIdx(idx)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                      backendProjectIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00ff87]">
                      {currentBackend.organization}
                    </span>
                    <span className="text-xs font-medium text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {currentBackend.role}
                    </span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    {currentBackend.title}
                  </h4>
                  <p className="text-xs font-mono text-[#8b99ad] mt-0.5">
                    {currentBackend.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {currentBackend.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs uppercase font-mono text-white/50 tracking-wider">
                    Systems & Concurrency Architecture
                  </div>
                  {currentBackend.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff87] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {currentBackend.stats.map((s, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="font-heading font-bold text-base text-[#00ff87] tabular">
                        {s.value}
                      </div>
                      <div className="text-[10px] font-mono text-white/50">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Backend Stack Chips */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-white/50 mb-2">Backend & Distributed Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentBackend.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#141b24] border border-white/10 text-xs font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={currentBackend.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository & Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
