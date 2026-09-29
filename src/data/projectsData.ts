export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  organization: string;
  orgUrl?: string;
  summary: string;
  keyFeatures: string[];
  tags: string[];
  accentColor: string;
  image?: string;
  device: 'laptop' | 'phone';
  stats: { label: string; value: string }[];
  links: {
    github?: string;
    live?: string;
    doi?: string;
  };
  mockupBadge: string;
  mockupStatLabel: string;
  mockupStatValue: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    note: string;
    metric?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export interface ClientReview {
  id: string;
  client: string;
  clientOrg?: string;
  project: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export const PERSONAL_INFO = {
  name: "Mohamed Badawy",
  handle: "M7MEDpro",
  title: "Java Backend Developer • Flutter Engineer • Distributed Systems",
  roles: "Webmaster @ IEEE ECU | Former Webmaster @ IEEE BNU",
  location: "Cairo, Egypt",
  education: "Software Engineering & IT, Egyptian Chinese University (GPA 3.74/4.0)",
  bio: "Systems engineer and full-stack developer based in Cairo, Egypt. Specializing in low-latency Java backend architectures, high-performance Flutter applications, and connected IoT microcontroller firmware.",
  email: "bdwym2007@gmail.com",
  github: "https://github.com/M7MEDpro",
  linkedin: "https://www.linkedin.com/in/mohamedbadawy-b608b5361",
  discord: "m7med6265",
  discordUrl: "https://discord.com/users/m7med6265",
  cvUrl: "/Mohamed_Badawy_CV.pdf",
  status: "Available for select backend contracts & engineering roles",
};

export const PROJECTS: Project[] = [
  {
    id: "ieee-ecu-platform",
    number: "01",
    title: "IEEE Student Branch Portal & Dashboard",
    subtitle: "Enterprise Backend Architecture & Member Platform",
    category: "Full-Stack Web & Backend",
    role: "Webmaster & Lead Architect",
    organization: "IEEE ECU Student Branch",
    orgUrl: "https://facebook.com/IEEE.ECU.SB",
    summary:
      "Engineered the official member portal and backend for our university's IEEE branch. Powers student onboarding, committee permissions, event registration, and QR-code attendance for 500+ active members without downtime.",
    keyFeatures: [
      "Spring Boot 3 + MongoDB database secured with cryptographically salted JWT authorization tokens.",
      "Granular role-based access control (RBAC) separating student attendees, committee heads, and executive admins.",
      "Comprehensive RFC 7807 problem details handler eliminating cryptic runtime exceptions across 30+ service endpoints."
    ],
    tags: ["Java 21", "Spring Boot 3", "MongoDB", "JWT Auth", "Docker", "REST API"],
    accentColor: "#00ff87",
    image: "/projects/ieee_dashboard.png",
    device: "laptop",
    stats: [
      { label: "Active Members", value: "500+" },
      { label: "API Endpoints", value: "30+" },
      { label: "Architecture", value: "Clean DDD" }
    ],
    links: {
      github: "https://github.com/M7MEDpro/IEEE-ECU-SB-Platform",
      live: "https://facebook.com/IEEE.ECU.SB"
    },
    mockupBadge: "Production Web Portal",
    mockupStatLabel: "Active Sessions",
    mockupStatValue: "482 / 500",
  },
  {
    id: "innovatronics-pcb",
    number: "02",
    title: "Innovatronics Interactive PCB Web Platform",
    subtitle: "Hardware-Accelerated Vector Graphics & Algorithmic Routing",
    category: "Interactive Graphics",
    role: "Lead Frontend & Graphics Engineer",
    organization: "Innovatronics Tech",
    orgUrl: "https://github.com/M7MEDpro",
    summary:
      "Interactive web application featuring an animated printed circuit board (PCB) organizational tree. Coded custom mathematical line-routing algorithms in Flutter CustomPainter to draw circuit board traces dynamically at 60 FPS.",
    keyFeatures: [
      "Custom line-routing algorithm calculating 45-degree angle bends and smooth connector curves between nodes.",
      "Solid 60 FPS vector animations running smoothly across desktop browsers and mobile touchscreens.",
      "Pure Flutter web canvas rendering with zero heavy third-party canvas libraries or DOM lag."
    ],
    tags: ["Flutter Web", "Dart", "CustomPainter", "Vector Graphics", "Algorithmic Routing"],
    accentColor: "#f59e0b",
    device: "laptop",
    stats: [
      { label: "Frame Rate", value: "60 FPS Solid" },
      { label: "Engine", value: "CustomPainter" },
      { label: "Trace Routing", value: "45° Algorithmic" }
    ],
    links: {
      live: "https://github.com/M7MEDpro"
    },
    mockupBadge: "CustomPainter Engine",
    mockupStatLabel: "Canvas FPS",
    mockupStatValue: "60 FPS Solid",
  },
  {
    id: "agricultural-telemetry",
    number: "03",
    title: "Agricultural Monitoring & Automation Enabler",
    subtitle: "Feedback-Based Desktop Remotely Controlled System • IEEE ITC-Egypt 2025",
    category: "Embedded & Desktop Telemetry",
    role: "Research Co-Author & Firmware Engineer",
    organization: "IEEE ITC-Egypt 2025 Conference",
    orgUrl: "https://doi.org/10.1109/ITC-Egypt66095.2025.11186572",
    summary:
      "Automated feedback-based greenhouse monitoring system integrating Arduino microcontrollers with DHT11 and LDR sensors for real-time environmental control. Published in IEEE Xplore proceedings (DOI: 10.1109/ITC-Egypt66095.2025.11186572).",
    keyFeatures: [
      "Real-time desktop telemetry loop transmitting microclimate metrics to the central control console.",
      "Deterministic closed-loop feedback triggers automated ventilation, lighting, and irrigation solenoid relays.",
      "Peer-reviewed and published in IEEE Xplore after rigorous acceptance at the International Telecommunications Conference."
    ],
    tags: ["Desktop App", "Embedded C++", "Arduino Uno", "DHT11 & LDR Sensors", "Closed-Loop Feedback", "IEEE Research"],
    accentColor: "#00ff87",
    device: "laptop",
    stats: [
      { label: "Publication", value: "IEEE Xplore" },
      { label: "Hardware", value: "Arduino / C++" },
      { label: "Loop Control", value: "Deterministic" }
    ],
    links: {
      doi: "https://doi.org/10.1109/ITC-Egypt66095.2025.11186572"
    },
    mockupBadge: "Published Research",
    mockupStatLabel: "Paper DOI",
    mockupStatValue: "10.1109/ITC",
  },
  {
    id: "projecto-messio",
    number: "04",
    title: "Projecto-Messio Smart Home IoT Hub",
    subtitle: "ESP32 Microcontroller Firmware & Flutter Mobile App",
    category: "IoT & Mobile",
    role: "Embedded Firmware & Flutter Engineer",
    organization: "Applied IoT Project",
    orgUrl: "https://github.com/M7MEDpro/Projecto-Messio",
    summary:
      "End-to-end smart home automation system connecting ESP32 microcontrollers to a custom Flutter mobile app over local MQTT. Relays and sensors toggle in under 40ms with full offline state fallback.",
    keyFeatures: [
      "Event-driven C++ firmware running on ESP32 microcontrollers with hardware interrupt debouncing and safe relay states.",
      "Sub-40ms local round-trip latency over MQTT message broker for instant lighting and climate adjustments.",
      "Offline-first state machine buffering commands locally during network drops and reconciling safely upon reconnect."
    ],
    tags: ["Flutter", "ESP32 / C++", "MQTT Broker", "WebSockets", "IoT Sensors", "Embedded"],
    accentColor: "#00ff87",
    device: "phone",
    stats: [
      { label: "Switch Latency", value: "<40ms" },
      { label: "Microcontroller", value: "ESP32 C++" },
      { label: "Protocol", value: "MQTT" }
    ],
    links: {
      github: "https://github.com/M7MEDpro/Projecto-Messio"
    },
    mockupBadge: "Flutter + ESP32",
    mockupStatLabel: "Ping Loop",
    mockupStatValue: "38ms",
  },
  {
    id: "thauma-mobile",
    number: "05",
    title: "Thauma Convention & Gamification App",
    subtitle: "High-FPS Animated Ranking, Leaderboards & Trophies",
    category: "Mobile Application",
    role: "Mobile Frontend Engineer",
    organization: "Thauma Platform",
    orgUrl: "https://github.com/M7MEDpro",
    summary:
      "Mobile gamification and event journey application featuring butter-smooth animated leaderboards, achievement trophies, and responsive ranking lists running at solid 60 FPS.",
    keyFeatures: [
      "Butter-smooth 60 FPS animations with hardware-accelerated particle effects and staggered list transitions.",
      "Real-time ranking synchronization updating player score deltas and trophy unlock badges instantly.",
      "Adaptive touch-friendly ergonomics optimized for one-handed navigation on modern mobile displays."
    ],
    tags: ["Flutter", "Dart", "60 FPS Animations", "Riverpod", "Clean Architecture"],
    accentColor: "#a855f7",
    image: "/assets/projects/thauma_09_hall_of_fame_leaderboard.png",
    device: "phone",
    stats: [
      { label: "Rendering", value: "60 FPS Solid" },
      { label: "Platform", value: "Flutter" },
      { label: "State", value: "Reactive" }
    ],
    links: {},
    mockupBadge: "Hall of Fame UI",
    mockupStatLabel: "Render Speed",
    mockupStatValue: "60 FPS",
  },
  {
    id: "punishment-system",
    number: "06",
    title: "PunishmentSystem High-Performance Core",
    subtitle: "High-Concurrency Async Database & Intelligent Selective Caching",
    category: "Distributed Systems & Concurrency",
    role: "Systems Developer",
    organization: "DevRoom / Rollerite LLC",
    orgUrl: "https://devroom.it",
    summary:
      "High-performance player moderation server core with async database operations and an intelligent selective-caching architecture, reducing memory usage by 80% and achieving sub-1ms checks with a 95%+ cache hit rate.",
    keyFeatures: [
      "Zero server tick loss: completely offloads SQL and Redis operations to background asynchronous worker threads.",
      "Reduces memory consumption by 80% via intelligent selective caching while maintaining sub-1ms check latency.",
      "Multi-database architecture supporting SQLite, MySQL, and MongoDB with custom third-party plugin API."
    ],
    tags: ["Java 21", "Spigot / Paper API", "Redis Pub/Sub", "MySQL", "MongoDB", "Async Concurrency"],
    accentColor: "#38bdf8",
    device: "laptop",
    stats: [
      { label: "Server Tick Rate", value: "20.0 TPS" },
      { label: "Memory Reduced", value: "80%" },
      { label: "Cache Hit Rate", value: "95%+" }
    ],
    links: {
      github: "https://github.com/M7MEDpro/PunishmentSystem",
      live: "https://devroom.it"
    },
    mockupBadge: "Production Core",
    mockupStatLabel: "Main Thread Load",
    mockupStatValue: "0.2ms / 50ms",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems Concurrency",
    description: "Multi-threaded architectures, clean APIs, and low-latency servers.",
    iconName: "Terminal",
    skills: [
      { name: "Java (17 / 21)", level: "Production", note: "Multi-threaded concurrency, Spring Boot 3, Spigot/Paper engines", metric: "20.0 TPS Solid" },
      { name: "Spring Boot 3", level: "Production", note: "Clean architecture, REST endpoints, JWT auth, RFC 7807 error handling", metric: "30+ Endpoints" },
      { name: "C / C++", level: "Production", note: "Embedded firmware, memory management, native hardware drivers", metric: "Non-blocking" },
      { name: "Async Multi-Threading", level: "Production", note: "Worker thread pools, race-condition mitigation, lock-free structures", metric: "Zero Tick Loss" }
    ]
  },
  {
    title: "Mobile & Interactive Graphics",
    description: "Responsive cross-platform apps and custom interactive canvas rendering.",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter & Dart", level: "Production", note: "Mobile & Desktop, clean architecture, responsive layouts", metric: "60 FPS Smooth" },
      { name: "Riverpod", level: "Production", note: "Reactive state management, immutable providers, dependency injection", metric: "Reactive State" },
      { name: "CustomPainter Graphics", level: "Production", note: "Algorithmic line routing, 45° bezier bends, hardware-accelerated canvas", metric: "0ms DOM lag" },
      { name: "TypeScript / React", level: "Working", note: "Modern web frontends, component architecture, Tailwind CSS, Vite", metric: "Type-Safe" }
    ]
  },
  {
    title: "Databases & Persistence",
    description: "Fast persistence, local encryption, real-time message brokers, and background queues.",
    iconName: "Database",
    skills: [
      { name: "SQLite & SQLCipher", level: "Production", note: "Local embedded database, encrypted patient/client storage, offline sync", metric: "Encrypted DB" },
      { name: "MongoDB", level: "Production", note: "Document modeling, aggregation pipelines, replica indexing", metric: "High Density" },
      { name: "MySQL / PostgreSQL", level: "Production", note: "Relational schema design, HikariCP connection pooling, ACID ledgers", metric: "ACID Safe" },
      { name: "Redis Pub/Sub", level: "Production", note: "Cross-server event propagation, caching layers, distributed synchronization", metric: "Sub-1ms Sync" }
    ]
  },
  {
    title: "IoT Telemetry & DevOps",
    description: "Microcontroller telemetry, message brokers, and Linux servers.",
    iconName: "Cpu",
    skills: [
      { name: "MQTT & WebSockets", level: "Production", note: "Low-overhead bidirectional telemetry for IoT & live apps", metric: "<40ms Telemetry" },
      { name: "ESP32 & Arduino", level: "Production", note: "Non-blocking firmware loops, sensor integration (DHT11, LDR, relays)", metric: "Realtime Loops" },
      { name: "Docker", level: "Working", note: "Containerized environments, multi-stage builds, compose networks", metric: "Isolated" },
      { name: "Git & Linux Servers", level: "Daily", note: "CI workflows, server deployment, shell automation, SSH management", metric: "99.9% Uptime" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "devroom",
    role: "Java Systems Developer",
    company: "DevRoom",
    companyUrl: "https://devroom.it",
    period: "March 2026 – Present",
    type: "Active Role • Remote",
    badge: "★ 5.0 / 5.0 Rating • 10 Commissions Completed",
    description:
      "Architecting and maintaining high-performance Java server systems (Spigot/Paper/Velocity), covering distributed backend logic, database design (MongoDB, MySQL), cross-server networking, and REST API/webhook integrations. Completed 10 client commissions with a flawless 5.0 / 5.0 average client rating.",
    achievements: [
      "Completed 10 commercial commissions with a verified 5.0 / 5.0 client feedback score.",
      "Architected cross-server networking layers bridging game instances with centralized microservices.",
      "Integrated MongoDB and MySQL connection pools with zero-latency asynchronous write queues.",
      "Standardized RESTful webhook notification handlers for automated transaction verification."
    ],
    skills: ["Java 21", "Spigot / Paper API", "Velocity Proxy", "MongoDB", "MySQL", "Async Concurrency", "Redis Pub/Sub"]
  },
  {
    id: "ieee-ecu",
    role: "Webmaster & Vice Head of Public Relations",
    company: "IEEE ECU Student Branch",
    companyUrl: "https://facebook.com/IEEE.ECU.SB",
    period: "July 2025 – Present",
    type: "Current Technical Leadership",
    badge: "Webmaster & Vice PR",
    description:
      "Serving as current Webmaster and Vice Head of Public Relations. Leading development and maintenance of the branch web platforms, member registration portals, and backend infrastructure while teaching data structures.",
    achievements: [
      "Current Webmaster: Architecting official student branch platform using Spring Boot 3 and MongoDB.",
      "Data Structures Instructor (Dec 2025 – Jan 2026): Taught core C++ data structures and memory management to peer students.",
      "Event Organizer: Co-organized IEEE Egyptian Student Paper Contest (ESPC 2025) and Made in Egypt (MIE) Closing Ceremony at ECU."
    ],
    skills: ["Spring Boot 3", "MongoDB", "Data Structures", "Technical Instruction", "Public Relations"]
  },
  {
    id: "ieee-bnu",
    role: "Former Webmaster",
    company: "IEEE BNU Student Branch",
    companyUrl: "https://bnu.edu.eg",
    period: "2024 – 2025",
    type: "Former Technical Leadership",
    badge: "Former Webmaster",
    description:
      "Previously served as Webmaster for the IEEE Benha National University (BNU) student branch, building web infrastructure, event registration flows, and member communication channels.",
    achievements: [
      "Architected and deployed responsive web interfaces and digital platforms for IEEE BNU branch activities.",
      "Managed branch digital assets, domain records, and automated member registration pipelines.",
      "Collaborated with executive branch committees to support national IEEE engineering competitions."
    ],
    skills: ["Web Development", "Portal Architecture", "DNS & Hosting", "Team Coordination"]
  },
  {
    id: "rollerite",
    role: "Java Plugin & Systems Developer",
    company: "Rollerite LLC",
    companyUrl: "https://rollerite.com",
    period: "October 2025 – Present",
    type: "Commercial Freelance • Remote",
    badge: "4.83 / 5.0 Rating",
    description:
      "Built and maintained modular Java plugin systems (Spigot/Paper/BungeeCord) for global clients, handling the full lifecycle from requirements to deployment with SQL/NoSQL data modeling and distributed system design.",
    achievements: [
      "Delivered 8 bespoke commercial commissions for global clients with a verified 4.83 / 5.00 average rating across 6 detailed client reviews.",
      "Maintained 100% on-time delivery across all contracted milestones.",
      "Solved low-latency data synchronization challenges using Redis pub/sub channels."
    ],
    skills: ["Java", "Paper API", "Redis", "MySQL", "BungeeCord", "Commercial Delivery"]
  },
  {
    id: "itc-egypt-2025",
    role: "Published Research Co-Author",
    company: "IEEE ITC-Egypt 2025 Conference",
    companyUrl: "https://doi.org/10.1109/ITC-Egypt66095.2025.11186572",
    period: "Published 2025",
    type: "Peer-Reviewed Academic Research",
    badge: "Published in IEEE Xplore",
    description:
      "Co-authored peer-reviewed research paper: 'Agricultural Monitoring and Automation Enabler: Feedback-Based Desktop Remotely Controlled System' (DOI: 10.1109/ITC-Egypt66095.2025.11186572).",
    achievements: [
      "Designed an automated feedback-based greenhouse monitoring system integrating Arduino microcontrollers with DHT11 and LDR sensors.",
      "Engineered real-time desktop communication loop for microclimate control and environmental telemetry.",
      "Published in IEEE Xplore after peer-review acceptance at the International Telecommunications Conference."
    ],
    skills: ["Academic Research", "Embedded C++", "Arduino", "Sensor Integration", "IEEE Standards"]
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "review-devroom-1",
    client: "DevRoom Client Commission #10",
    clientOrg: "DevRoom",
    project: "High-Concurrency Server Core & Sync Queue",
    rating: 5.0,
    review: "Flawless delivery. Handled our peak server network without a single dropped packet or tick drop. Mohamed writes clean, production-grade Java and communicates with extreme clarity.",
    date: "March 2026",
    verified: true
  },
  {
    id: "review-devroom-2",
    client: "DevRoom Client Commission #7",
    clientOrg: "DevRoom",
    project: "Distributed Webhook & Transaction Engine",
    rating: 5.0,
    review: "Architected our async MySQL and Redis sync seamlessly. Sub-millisecond lookup times and rock-solid reliability under pressure. 5 stars all around.",
    date: "February 2026",
    verified: true
  },
  {
    id: "review-rollerite-1",
    client: "Rollerite Client Commission #4",
    clientOrg: "Rollerite LLC",
    project: "Cross-Server Moderation Suite",
    rating: 5.0,
    review: "Fast delivery, clean code, and zero tick loss on our 300-player peak network. Mohamed communicated every step of the way.",
    date: "January 2026",
    verified: true
  },
  {
    id: "review-rollerite-2",
    client: "Rollerite Client Commission #6",
    clientOrg: "Rollerite LLC",
    project: "Economy & Transaction Sync Pipeline",
    rating: 4.8,
    review: "Delivered exactly what was specified with async database queries. Very solid technical foundation with Redis failover.",
    date: "December 2025",
    verified: true
  }
];

export const ACADEMIC_CERTIFICATES = [
  {
    title: "Certificate of Participation and Presentation",
    issuer: "ITC-Egypt 2025 (IEEE Conference)",
    date: "2025",
    note: "Presented published paper on Agricultural Monitoring & Feedback Automation",
    badge: "IEEE Conference"
  },
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test",
    date: "2025",
    note: "Score: 68/100 (Proficient C1 Advanced)",
    badge: "C1 Advanced"
  },
  {
    title: "Problem Solving Certificate",
    issuer: "Nile University Competitive Programming Arena (NUCPA)",
    date: "2026",
    note: "Algorithms, Data Structures & Competitive Arena",
    badge: "Algorithms"
  }
];
