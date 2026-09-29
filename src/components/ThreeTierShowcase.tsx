import { useState, useEffect } from 'react';
import { LaptopMockup } from './LaptopMockup';
import { PhoneMockup } from './PhoneMockup';
import { ServerMockup } from './ServerMockup';
import { AgriTelemetryDashboard } from './AgriTelemetryDashboard';
import { HealthLinkPhoneUI } from './HealthLinkPhoneUI';
import { ShowcaseVideo } from './ShowcaseVideo';
import { GithubIcon } from './Icons';
import {
  Globe,
  Smartphone,
  Server,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Pause,
  Play,
} from 'lucide-react';

export function ThreeTierShowcase() {
  const [webIdx, setWebIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [backendIdx, setBackendIdx] = useState(0);

  const [isWebHovered, setIsWebHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);
  const [isBackendHovered, setIsBackendHovered] = useState(false);

  // Auto-scroll / cycle projects over time (8 seconds per project)
  useEffect(() => {
    if (isWebHovered) return;
    const timer = setInterval(() => {
      setWebIdx((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, [isWebHovered]);

  useEffect(() => {
    if (isMobileHovered) return;
    const timer = setInterval(() => {
      setMobileIdx((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, [isMobileHovered]);

  useEffect(() => {
    if (isBackendHovered) return;
    const timer = setInterval(() => {
      setBackendIdx((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(timer);
  }, [isBackendHovered]);

  // 1. Full-Stack Web Projects (Displayed on 3D Laptop)
  const webProjects = [
    {
      id: 'ieee-web',
      tabName: 'IEEE Student Portal',
      title: 'IEEE Student Branch Portal & Dashboard',
      subtitle: 'Full-Stack Web Architecture • Member Management System',
      role: 'Webmaster & Lead Architect',
      organization: 'IEEE ECU Student Branch',
      orgUrl: 'https://facebook.com/IEEE.ECU.SB',
      summary:
        'Official digital platform and member portal for the university IEEE branch. Powers student onboarding, committee permissions, event registrations, and QR-code attendance check-ins for 500+ active members without downtime.',
      highlights: [
        'Secure JWT authentication with role-based access for executive leads and students.',
        'High-density responsive dashboard managing event logs, attendance, and member profiles.',
        'Zero unhandled crashes across 30+ service endpoints with clean RFC 7807 error messages.',
      ],
      stats: [
        { label: 'Active Members', value: '500+' },
        { label: 'API Endpoints', value: '30+' },
        { label: 'Branch Role', value: 'Webmaster' },
      ],
      tags: ['Java 21', 'Spring Boot 3', 'MongoDB', 'JWT Auth', 'REST API', 'Docker'],
      image: '/projects/ieee_ecu_real_portal.png',
      url: 'https://facebook.com/IEEE.ECU.SB',
      badge: 'Production Web Portal',
      statLabel: 'Active Members',
      statValue: '512 Registered',
      github: 'https://github.com/M7MEDpro/IEEE-ECU-SB-Platform',
      buttonType: 'github',
      buttonText: 'View GitHub Repository',
    },
    {
      id: 'pcb-web',
      tabName: 'Innovatronics PCB Web',
      title: 'Innovatronics Interactive PCB Web Platform',
      subtitle: 'Procedural CustomPainter Line-Routing • 60 FPS Canvas',
      role: 'Lead Frontend & Graphics Engineer',
      organization: 'Innovatronics Tech',
      orgUrl: 'https://github.com/M7MEDpro',
      summary:
        'Interactive web application featuring an animated printed circuit board (PCB) organizational tree. Coded custom mathematical line-routing algorithms in Flutter CustomPainter to draw circuit board traces dynamically at 60 FPS without DOM overhead.',
      highlights: [
        'Custom line-routing algorithm calculating 45° angle bends and bezier smoothing.',
        'Solid 60 FPS vector animations running smoothly across desktop and mobile screens.',
        'Pure web canvas rendering with zero heavy third-party graphics frameworks.',
      ],
      stats: [
        { label: 'Frame Rate', value: '60 FPS Solid' },
        { label: 'Canvas Engine', value: 'CustomPainter' },
        { label: 'Trace Routing', value: '45° Bezier' },
      ],
      tags: ['Flutter Web', 'Dart', 'CustomPainter', 'Vector Canvas', 'Algorithmic Routing'],
      url: 'https://github.com/M7MEDpro',
      badge: 'CustomPainter Canvas',
      statLabel: 'Rendering',
      statValue: '60 FPS Solid',
      buttonType: 'live',
      buttonText: 'Explore Interactive Canvas',
      liveUrl: 'https://github.com/M7MEDpro',
    },
    {
      id: 'agri-monitor',
      tabName: 'Agricultural Telemetry',
      title: 'Agricultural Monitoring & Automation Enabler',
      subtitle: 'Feedback-Based Desktop Remotely Controlled System • IEEE ITC-Egypt 2025',
      role: 'Research Co-Author & Firmware Engineer',
      organization: 'IEEE ITC-Egypt 2025 Conference',
      orgUrl: 'https://doi.org/10.1109/ITC-Egypt66095.2025.11186572',
      summary:
        'Automated feedback-based greenhouse monitoring system integrating Arduino microcontrollers with DHT11 and LDR sensors for real-time environmental control. Published in IEEE Xplore proceedings (DOI: 10.1109/ITC-Egypt66095.2025.11186572).',
      highlights: [
        'Real-time desktop telemetry loop transmitting microclimate metrics to the control console.',
        'Deterministic closed-loop feedback triggers automated ventilation, lighting, and irrigation relays.',
        'Published in IEEE Xplore after peer-review acceptance at the International Telecommunications Conference.',
      ],
      stats: [
        { label: 'Publication', value: 'IEEE Xplore' },
        { label: 'Hardware', value: 'Arduino Uno' },
        { label: 'Loop Control', value: 'Deterministic' },
      ],
      tags: ['Desktop App', 'Embedded C++', 'Arduino Uno', 'DHT11 & LDR Sensors', 'IEEE Research'],
      url: 'https://doi.org/10.1109/ITC-Egypt66095.2025.11186572',
      badge: 'Published in IEEE Xplore',
      statLabel: 'Paper DOI',
      statValue: '10.1109/ITC',
      buttonType: 'doi',
      buttonText: 'Read IEEE Publication (DOI)',
      doiUrl: 'https://doi.org/10.1109/ITC-Egypt66095.2025.11186572',
    },
  ];

  // 2. Full-Stack Mobile & Hardware IoT Projects (Displayed on 3D Phone)
  const mobileProjects = [
    {
      id: 'thauma-mobile',
      tabName: 'Thauma Journey',
      title: 'Thauma Convention Journey & Gamification App',
      subtitle: 'High-FPS Animated Ranking, Hall of Fame & Journey Guide',
      role: 'Mobile Frontend Engineer',
      organization: 'Thauma Platform',
      orgUrl: 'https://github.com/M7MEDpro',
      summary:
        'Full-stack mobile gamification application featuring interactive spiritual guide audio messages, dynamic convention map, real-time hall-of-fame leaderboards, and trophy unlocks running at solid 60 FPS with reactive Riverpod state.',
      highlights: [
        'Butter-smooth 60 FPS animations with hardware-accelerated transitions and interactive journey guide.',
        'Live ranking synchronization updating player score deltas and trophy unlock badges in real time.',
        'Adaptive touch-friendly ergonomics optimized for one-handed mobile navigation.',
      ],
      stats: [
        { label: 'Animation', value: '60 FPS Solid' },
        { label: 'Platform', value: 'Flutter' },
        { label: 'State Mgmt', value: 'Riverpod' },
      ],
      tags: ['Flutter', 'Dart', 'Riverpod', '60 FPS Animations', 'Clean Architecture'],
      badge: 'Interactive Journey',
      statLabel: 'Render Speed',
      statValue: '60 FPS',
      buttonType: 'none',
    },
    {
      id: 'messio-mobile',
      tabName: 'Smart Home IoT',
      title: 'Projecto-Messio Smart Home IoT Hub',
      subtitle: 'ESP32 Microcontroller Firmware & Flutter Mobile Controller',
      role: 'Embedded Firmware & Flutter Engineer',
      organization: 'Applied IoT Project',
      orgUrl: 'https://github.com/M7MEDpro/Projecto-Messio',
      summary:
        'End-to-end home automation system connecting ESP32 microcontroller sensors to a custom Flutter mobile app over local MQTT. Relays and environmental sensors toggle in under 40ms with full offline state fallback.',
      highlights: [
        'Non-blocking event-driven C++ firmware running on ESP32 with hardware debounce filters.',
        'Sub-40ms local round-trip latency over MQTT message broker for instant lighting and climate adjustments.',
        'Local offline state buffer keeping home appliances operational even when connection drops.',
      ],
      stats: [
        { label: 'Relay Latency', value: '<40ms' },
        { label: 'Microcontroller', value: 'ESP32 C++' },
        { label: 'Protocol', value: 'MQTT / WS' },
      ],
      tags: ['Flutter', 'Riverpod', 'C++ / ESP32', 'MQTT Broker', 'WebSockets', 'Hardware Relays'],
      badge: 'Flutter + ESP32',
      statLabel: 'Ping Loop',
      statValue: '38ms',
      github: 'https://github.com/M7MEDpro/Projecto-Messio',
      buttonType: 'github',
      buttonText: 'View GitHub Repository',
    },
    {
      id: 'healthlink-mobile',
      tabName: 'HealthLink Medical',
      title: 'HealthLink Clinical Telemetry Suite',
      subtitle: 'Patient Records & Encrypted SQLCipher Database',
      role: 'Cross-Platform Engineer',
      organization: 'Clinical Informatics Project',
      orgUrl: 'https://github.com/M7MEDpro',
      summary:
        'Healthcare application suite for patient vital statistics, appointment queues, and diagnostic histories with encrypted local database synchronization.',
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
      tags: ['Flutter Mobile', 'SQLite / SQLCipher', 'C++ Core', 'State Management'],
      image: '/assets/projects/healthlink_medical.png',
      badge: 'Encrypted Vitals',
      statLabel: 'Database',
      statValue: 'SQLCipher',
      buttonType: 'none',
    },
  ];

  // 3. High-Performance Java Backend & Systems (Displayed on 3D Server Rack)
  const backendProjects = [
    {
      id: 'devroom-systems',
      tabName: 'DevRoom Systems Core',
      title: 'DevRoom Distributed Gaming Networks & Webhook Infrastructure',
      subtitle: 'Spigot / Paper / Velocity • 10 Commissions (5.0 / 5.0 Rating)',
      role: 'Java Systems Developer',
      organization: 'DevRoom (Italy • Remote)',
      orgUrl: 'https://devroom.it',
      summary:
        'High-performance distributed Java systems for enterprise gaming networks, architecting distributed data pipelines, cross-server networking layers, and zero-tick-loss transaction webhooks. Completed 10 commercial commissions with a verified 5.0 / 5.0 client feedback score.',
      highlights: [
        'Completed 10 commercial client commissions with a verified 5.0 / 5.0 average feedback rating.',
        'Engineered cross-server networking layers bridging game instances with centralized microservices.',
        'Integrated MongoDB and MySQL connection pools with zero-latency asynchronous write queues.',
        'Standardized RESTful webhook notification handlers for automated transaction verification.',
      ],
      stats: [
        { label: 'Client Feedback', value: '5.0 / 5.0' },
        { label: 'Commissions', value: '10 Done' },
        { label: 'Tick Rate', value: '20.0 TPS' },
      ],
      tags: ['Java 21', 'Spigot / Paper API', 'Velocity Proxy', 'MongoDB', 'MySQL', 'Async Concurrency'],
      endpointsCount: '10 Commissions Done',
      engine: 'Java 21 • Paper / Velocity',
      syncLatency: '5.0 / 5.0 Rating',
      statLabel: 'Commissions',
      statValue: '10 Completed',
      badge: 'DevRoom Active Role',
      buttonType: 'org',
      buttonText: 'Visit DevRoom Platform',
      orgButtonUrl: 'https://devroom.it',
    },
    {
      id: 'spring-backend',
      tabName: 'Spring Boot 3 Core',
      title: 'IEEE ECU Core Backend API',
      subtitle: 'Spring Boot 3.2 • MongoDB • JWT RBAC Architecture',
      role: 'Webmaster & Lead Backend Architect',
      organization: 'IEEE ECU Student Branch',
      orgUrl: 'https://facebook.com/IEEE.ECU.SB',
      summary:
        'Enterprise Spring Boot 3 backend architecture powering student registrations, QR attendance, and committee permissions. Clean layered domain model built for reliability and zero unhandled crashes.',
      highlights: [
        'Domain-Driven Design cleanly separating authentication, attendance logs, and event registries into decoupled service domains.',
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
      buttonType: 'github',
      buttonText: 'View GitHub Repository',
    },
    {
      id: 'punishment-backend',
      tabName: 'PunishmentSystem Core',
      title: 'PunishmentSystem Server Core & Selective Caching',
      subtitle: 'Non-Blocking Async Queues • 80% Memory Reduction • Redis Sync',
      role: 'Systems Developer',
      organization: 'Rollerite LLC / DevRoom',
      orgUrl: 'https://rollerite.com',
      summary:
        'High-performance player moderation server core with async database operations and an intelligent selective-caching architecture, reducing memory usage by 80% and achieving sub-1ms checks with a 95%+ cache hit rate.',
      highlights: [
        'Asynchronous worker threads completely decoupling disk I/O, SQL, and Redis operations from the main server loop (20.0 TPS solid).',
        'Distributed cross-server state propagation synchronizing penalty actions within 15ms via Redis pub/sub channels.',
        'Multi-database architecture supporting SQLite, MySQL, and MongoDB with custom third-party plugin API.',
      ],
      stats: [
        { label: 'Server Tick Rate', value: '20.0 TPS' },
        { label: 'Memory Reduced', value: '80%' },
        { label: 'Cache Hit Rate', value: '95%+' },
      ],
      tags: ['Java 21', 'Paper API', 'Redis Pub/Sub', 'SQLite', 'MySQL', 'MongoDB', 'Async Queues'],
      endpointsCount: 'Sub-1ms Checks',
      engine: 'Java 21 • Redis • HikariCP',
      syncLatency: '<15ms Sync',
      statLabel: 'Server Tick Rate',
      statValue: '20.0 TPS',
      badge: 'Production Core',
      github: 'https://github.com/M7MEDpro/PunishmentSystem',
      buttonType: 'github',
      buttonText: 'View GitHub Repository',
    },
    {
      id: 'economy-backend',
      tabName: 'Economy Pipeline',
      title: 'High-Throughput Economy & Transaction Pipeline',
      subtitle: 'Multi-Threaded Financial Engine • Dual Database Persistence',
      role: 'Backend Systems Developer',
      organization: 'Commercial Server Systems',
      orgUrl: 'https://rollerite.com',
      summary:
        'High-concurrency transaction engine with dual database persistence (MySQL + MongoDB), ACID-compliant ledger logging, and thread-safe Redis cache invalidation.',
      highlights: [
        'Multi-threaded transaction pipeline eliminating balance race conditions and double-spending vulnerabilities.',
        'Dual-persistence driver archiving audit records to MongoDB while maintaining relational balances in MySQL.',
        'Automatic Redis cache invalidation maintaining real-time sub-millisecond balance checks.',
      ],
      stats: [
        { label: 'Throughput', value: '10K+ Ops/s' },
        { label: 'Persistence', value: 'MySQL + Mongo' },
        { label: 'Cache Sync', value: 'Sub-1ms' },
      ],
      tags: ['Java 21', 'Transaction Engine', 'MySQL', 'MongoDB', 'Redis Caching', 'Thread Safety'],
      endpointsCount: 'Transaction Ledger',
      engine: 'Java 21 • Dual DB Persistence',
      syncLatency: 'ACID Compliant',
      statLabel: 'Ops / Sec',
      statValue: '10K+ Ops/s',
      badge: 'Financial Pipeline',
      github: 'https://github.com/M7MEDpro/EconomySystem',
      buttonType: 'github',
      buttonText: 'View GitHub Repository',
    },
  ];

  const currentWeb = webProjects[webIdx];
  const currentMobile = mobileProjects[mobileIdx];
  const currentBackend = backendProjects[backendIdx];

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
            <span>Curated Engineering Showcase</span>
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
        <div
          className="mb-32 md:mb-44 relative"
          onMouseEnter={() => setIsWebHovered(true)}
          onMouseLeave={() => setIsWebHovered(false)}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                  Tier 01 • Web Platform & Research
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Full-Stack Website & Web Architecture
                </h3>
              </div>
            </div>

            {/* Auto-cycle indicator badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">
              {isWebHovered ? <Pause className="w-3 h-3 text-[#f59e0b]" /> : <Play className="w-3 h-3 text-[#00ff87] animate-pulse" />}
              <span>{isWebHovered ? 'Paused on Hover' : 'Auto-Cycling'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Laptop Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <LaptopMockup
                title={currentWeb.title}
                url={currentWeb.url}
                badge={currentWeb.badge}
                statLabel={currentWeb.statLabel}
                statValue={currentWeb.statValue}
                accentColor="#00ff87"
                tiltDirection="left"
              >
                {/* Custom Interactive UIs and Real Videos (Pure video, no overlays) */}
                {currentWeb.id === 'agri-monitor' ? (
                  <AgriTelemetryDashboard />
                ) : currentWeb.id === 'pcb-web' ? (
                  <div className="relative w-full h-full bg-[#05070a] overflow-hidden">
                    <ShowcaseVideo
                      src="/videos/innovatronics_demo.mp4"
                      poster="/projects/innovatronics_poster.jpg"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-[#05070a] overflow-hidden">
                    <ShowcaseVideo
                      src="/videos/ieee_ecu_portal_demo.mp4"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
              </LaptopMockup>
            </div>

            {/* Right Column: Project Details & Web Stack */}
            <div className="lg:col-span-6 space-y-6">
              {/* Project Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {webProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setWebIdx(idx)}
                    className={`relative flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all overflow-hidden ${
                      webIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.tabName}
                    {/* Animated Progress Underline for Active Tab */}
                    {webIdx === idx && !isWebHovered && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-[#00ff87] w-full animate-[progress_8s_linear]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <a
                      href={currentWeb.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00ff87] hover:underline flex items-center gap-1 group"
                    >
                      <span>{currentWeb.organization}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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

                {/* Action Link (Conditional & Verified) */}
                <div className="pt-2">
                  {currentWeb.buttonType === 'github' && currentWeb.github && (
                    <a
                      href={currentWeb.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{currentWeb.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {currentWeb.buttonType === 'doi' && currentWeb.doiUrl && (
                    <a
                      href={currentWeb.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff87]/20 border border-[#00ff87]/40 text-[#00ff87] hover:bg-[#00ff87]/30 text-xs font-semibold shadow-[0_0_15px_rgba(0,255,135,0.2)] transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{currentWeb.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {currentWeb.buttonType === 'live' && currentWeb.liveUrl && (
                    <a
                      href={currentWeb.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b]/30 text-xs font-semibold transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{currentWeb.buttonText}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 2: FULL-STACK MOBILE & HARDWARE IOT (Info on Left, Phone on Right) */}
        {/* ========================================================================= */}
        <div
          className="mb-32 md:mb-44 relative"
          onMouseEnter={() => setIsMobileHovered(true)}
          onMouseLeave={() => setIsMobileHovered(false)}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                  Tier 02 • Mobile & Embedded Hardware
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Full-Stack Mobile & Connected IoT
                </h3>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">
              {isMobileHovered ? <Pause className="w-3 h-3 text-[#f59e0b]" /> : <Play className="w-3 h-3 text-[#00ff87] animate-pulse" />}
              <span>{isMobileHovered ? 'Paused on Hover' : 'Auto-Cycling'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Project Details & Mobile Stack */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              {/* Project Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {mobileProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setMobileIdx(idx)}
                    className={`relative flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all overflow-hidden ${
                      mobileIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.tabName}
                    {mobileIdx === idx && !isMobileHovered && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-[#00ff87] w-full animate-[progress_8s_linear]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <a
                      href={currentMobile.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00ff87] hover:underline flex items-center gap-1 group"
                    >
                      <span>{currentMobile.organization}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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
                  {currentMobile.buttonType === 'github' && currentMobile.github ? (
                    <a
                      href={currentMobile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{currentMobile.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                      <ShieldCheck className="w-4 h-4 text-[#00ff87]" />
                      <span>Production Application Release</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: 3D Phone Mockup */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <PhoneMockup
                title={currentMobile.title}
                badge={currentMobile.badge}
                statLabel={currentMobile.statLabel}
                statValue={currentMobile.statValue}
                accentColor="#00ff87"
                tiltDirection="right"
              >
                {/* Mobile Mockup Content (Pure video, no overlays) */}
                {currentMobile.id === 'messio-mobile' ? (
                  <div className="relative w-full h-full bg-[#07090d] overflow-hidden">
                    <ShowcaseVideo
                      src="/videos/projecto_messio_demo.mp4"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : currentMobile.id === 'thauma-mobile' ? (
                  <div className="relative w-full h-full bg-[#0c0a17] overflow-hidden">
                    <ShowcaseVideo
                      src="/videos/thauma_demo.mp4"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : currentMobile.id === 'healthlink-mobile' ? (
                  <HealthLinkPhoneUI />
                ) : (
                  <img
                    src={currentMobile.image}
                    alt={currentMobile.title}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </PhoneMockup>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 3: HIGH-PERFORMANCE JAVA BACKEND & SYSTEMS (Server Rack on Left) */}
        {/* ========================================================================= */}
        <div
          className="relative"
          onMouseEnter={() => setIsBackendHovered(true)}
          onMouseLeave={() => setIsBackendHovered(false)}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff87]/15 border border-[#00ff87]/30 flex items-center justify-center text-[#00ff87]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00ff87] uppercase tracking-wider font-semibold">
                  Tier 03 • Server Systems & Concurrency
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Java Backend & Distributed Server Systems
                </h3>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">
              {isBackendHovered ? <Pause className="w-3 h-3 text-[#f59e0b]" /> : <Play className="w-3 h-3 text-[#00ff87] animate-pulse" />}
              <span>{isBackendHovered ? 'Paused on Hover' : 'Auto-Cycling'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Server Rack Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <ServerMockup
                title={currentBackend.title}
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
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e1217] border border-white/10">
                {backendProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setBackendIdx(idx)}
                    className={`relative flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all overflow-hidden ${
                      backendIdx === idx
                        ? 'bg-[#151c24] text-[#00ff87] border border-[#00ff87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)]'
                        : 'text-[#8b99ad] hover:text-white'
                    }`}
                  >
                    0{idx + 1} {p.tabName}
                    {backendIdx === idx && !isBackendHovered && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-[#00ff87] w-full animate-[progress_8s_linear]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Active Project Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1217] border border-white/10 shadow-2xl space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <a
                      href={currentBackend.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#00ff87] hover:underline flex items-center gap-1 group"
                    >
                      <span>{currentBackend.organization}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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
                  {currentBackend.buttonType === 'github' && currentBackend.github && (
                    <a
                      href={currentBackend.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-xs font-semibold"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{currentBackend.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {currentBackend.buttonType === 'org' && currentBackend.orgButtonUrl && (
                    <a
                      href={currentBackend.orgButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff87]/20 border border-[#00ff87]/40 text-[#00ff87] hover:bg-[#00ff87]/30 text-xs font-semibold shadow-[0_0_15px_rgba(0,255,135,0.2)] transition-all"
                    >
                      <span>{currentBackend.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
