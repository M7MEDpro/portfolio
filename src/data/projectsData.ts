export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  organization: string;
  summary: string;
  keyFeatures: string[];
  tags: string[];
  accentColor: string;
  image: string;
  device: 'laptop' | 'phone';
  stats: { label: string; value: string }[];
  links: {
    github?: string;
    live?: string;
    docs?: string;
  };
  mockupBadge: string;
  mockupStatLabel: string;
  mockupStatValue: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
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
  project: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export const PERSONAL_INFO = {
  name: "Mohamed Badawy",
  handle: "M7MEDpro",
  title: "Systems Engineer & Full-Stack Developer",
  location: "Cairo, Egypt",
  bio: "I'm Mohamed Badawy. I build distributed Java server systems, responsive cross-platform Flutter applications, and connected IoT hardware that stay fast and reliable under heavy production traffic.",
  email: "bdwym2007@gmail.com",
  github: "https://github.com/M7MEDpro",
  linkedin: "https://www.linkedin.com/in/mohamedbadawy-b608b5361",
  cvUrl: "/Mohamed_Badawy_CV.pdf",
  status: "Available for select freelance contracts & full-time roles",
};

export const PROJECTS: Project[] = [
  {
    id: "ieee-ecu-platform",
    number: "01",
    title: "IEEE Student Branch Portal",
    subtitle: "Enterprise Backend Architecture & Member Platform",
    category: "Web & Backend",
    role: "Lead Backend Architect",
    organization: "IEEE ECU Student Branch",
    summary:
      "Engineered the official member portal and backend for our university's IEEE branch. Handles student onboarding, committee permissions, and QR-code attendance for 500+ active members without downtime.",
    keyFeatures: [
      "Spring Boot 3 + MongoDB database secured with cryptographically salted JWT authorization tokens.",
      "Granular role-based access control (RBAC) separating student attendees, committee heads, and executive admins.",
      "Comprehensive RFC 7807 problem details handler eliminating cryptic runtime exceptions across 30+ service endpoints."
    ],
    tags: ["Java 21", "Spring Boot", "MongoDB", "JWT Auth", "Docker", "REST API"],
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
      docs: "https://github.com/M7MEDpro"
    },
    mockupBadge: "Production Web Portal",
    mockupStatLabel: "Active Sessions",
    mockupStatValue: "482 / 500",
  },
  {
    id: "projecto-messio",
    number: "02",
    title: "Projecto-Messio Smart Home IoT",
    subtitle: "ESP32 Microcontroller Firmware & Flutter App",
    category: "IoT & Mobile",
    role: "Embedded Firmware & Flutter Engineer",
    organization: "Applied IoT Project",
    summary:
      "End-to-end smart home automation system connecting ESP32 microcontrollers to a custom Flutter mobile app over local MQTT. Relays and sensors toggle in under 40ms with full offline state fallback.",
    keyFeatures: [
      "Event-driven C++ firmware running on ESP32 microcontrollers with hardware interrupt debouncing and safe relay states.",
      "Sub-40ms local round-trip latency over MQTT message broker for instant lighting and climate adjustments.",
      "Offline-first state machine buffering commands locally during network drops and reconciling safely upon reconnect."
    ],
    tags: ["Flutter", "ESP32 / C++", "MQTT Broker", "WebSockets", "IoT Sensors", "Embedded"],
    accentColor: "#00ff87",
    image: "/assets/projects/smart_home_iot.png",
    device: "phone",
    stats: [
      { label: "Switch Latency", value: "<40ms" },
      { label: "Microcontroller", value: "ESP32 C++" },
      { label: "Protocol", value: "MQTT" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    mockupBadge: "Flutter + ESP32",
    mockupStatLabel: "Ping Loop",
    mockupStatValue: "38ms",
  },
  {
    id: "punishment-system",
    number: "03",
    title: "PunishmentSystem Server Core",
    subtitle: "High-Concurrency Non-Blocking Moderation Engine",
    category: "Distributed Systems",
    role: "Systems Developer",
    organization: "Rollerite LLC (Commercial Contract)",
    summary:
      "Asynchronous player moderation engine built for high-traffic Minecraft server networks. Keeps server tick rates pinned at a perfect 20 TPS by moving all disk and database lookups to worker threads.",
    keyFeatures: [
      "Zero server tick loss: completely offloads SQL and Redis operations to background asynchronous worker threads.",
      "Cross-server penalty sync under 15ms across distributed Paper and Velocity proxy nodes via Redis pub/sub.",
      "Delivered commercially for Rollerite LLC (5.0/5.0 client feedback across 8 client commissions)."
    ],
    tags: ["Java", "Paper / Velocity API", "Redis Pub/Sub", "MySQL", "HikariCP", "Multi-Threading"],
    accentColor: "#38bdf8",
    image: "/projects/user_project_banner.png",
    device: "laptop",
    stats: [
      { label: "Server Tick Rate", value: "20.0 TPS" },
      { label: "Network Sync", value: "<15ms" },
      { label: "Commissions", value: "8 Delivered" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://rollerite.com"
    },
    mockupBadge: "Rollerite Contract",
    mockupStatLabel: "Main Thread Load",
    mockupStatValue: "0.2ms / 50ms",
  },
  {
    id: "thauma-mobile",
    number: "04",
    title: "Thauma Leaderboard & Gamification",
    subtitle: "High-FPS Animated Ranking & Trophy App",
    category: "Mobile Application",
    role: "Mobile Frontend Engineer",
    organization: "Thauma Platform",
    summary:
      "Mobile gamification and hall-of-fame application featuring smooth animated leaderboards, achievement trophies, and responsive ranking lists running at solid 60 FPS.",
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
      { label: "Rendering", value: "60 FPS" },
      { label: "Platform", value: "Flutter" },
      { label: "State", value: "Reactive" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    mockupBadge: "Hall of Fame UI",
    mockupStatLabel: "Render Speed",
    mockupStatValue: "60 FPS",
  },
  {
    id: "innovatronics-pwa",
    number: "05",
    title: "Innovatronics Interactive PCB Web",
    subtitle: "Procedural Canvas Graphics & Algorithmic Routing",
    category: "Interactive Graphics",
    role: "Lead Frontend Engineer",
    organization: "Innovatronics Tech",
    summary:
      "Interactive web application featuring an animated printed circuit board (PCB) organizational tree. Coded custom mathematical line-routing algorithms in Flutter CustomPainter to draw circuit board traces dynamically.",
    keyFeatures: [
      "Custom line-routing algorithm calculating 45-degree angle bends and smooth bezier connector curves between nodes.",
      "Solid 60 FPS vector animations running smoothly across desktop browsers and mobile touchscreens.",
      "Pure Flutter web canvas rendering with zero heavy third-party canvas libraries or DOM lag."
    ],
    tags: ["Flutter Web", "Dart", "CustomPainter", "Vector Graphics", "Algorithmic Routing"],
    accentColor: "#f59e0b",
    image: "/assets/projects/innovationics_tech.png",
    device: "laptop",
    stats: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Engine", value: "CustomPainter" },
      { label: "Trace Routing", value: "45° Bezier" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://github.com/M7MEDpro"
    },
    mockupBadge: "CustomPainter Engine",
    mockupStatLabel: "Canvas FPS",
    mockupStatValue: "60 FPS Solid",
  },
  {
    id: "healthlink-suite",
    number: "06",
    title: "HealthLink Cross-Platform Suite",
    subtitle: "Healthcare Telemetry & Encrypted Records",
    category: "Cross-Platform Engineering",
    role: "Cross-Platform Mobile Engineer",
    organization: "Clinical Informatics Project",
    summary:
      "Multi-platform healthcare management suite spanning Flutter desktop, Flutter mobile, and shared native C++ data processing routines with encrypted local SQLite database synchronization.",
    keyFeatures: [
      "Single Flutter codebase providing tailored interfaces for clinical tablet workstations and handheld phones.",
      "Local SQLite database encrypted with SQLCipher for confidential records and instantaneous offline search.",
      "Shared native C++ processing layer for fast record decryption without UI stutter."
    ],
    tags: ["Flutter Desktop", "Flutter Mobile", "C++ Core", "SQLite Encrypted", "State Management"],
    accentColor: "#ec4899",
    image: "/assets/projects/healthlink_medical.png",
    device: "laptop",
    stats: [
      { label: "Platforms", value: "3 Targets" },
      { label: "Database", value: "SQLCipher" },
      { label: "Sync Engine", value: "Delta Protocol" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    mockupBadge: "Desktop & Mobile",
    mockupStatLabel: "Encrypted DB",
    mockupStatValue: "SQLCipher",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    description: "Multi-threaded architectures, clean APIs, and low-latency servers.",
    skills: [
      { name: "Java (17 / 21)", level: "Production", note: "Multi-threaded concurrency, Spring Boot 3, Spigot/Paper engines" },
      { name: "Spring Boot", level: "Production", note: "Clean architecture, REST endpoints, JWT auth, database repositories" },
      { name: "C / C++", level: "Working", note: "Embedded systems, memory management, native hardware drivers" },
      { name: "Python", level: "Working", note: "Data processing scripts, automation, machine learning pipelines" }
    ]
  },
  {
    title: "Mobile & Frontend",
    description: "Responsive cross-platform apps and custom interactive graphics.",
    skills: [
      { name: "Flutter & Dart", level: "Production", note: "Mobile & Desktop, CustomPainter, Riverpod, clean state management" },
      { name: "TypeScript / React", level: "Working", note: "Modern web frontends, component architecture, Tailwind CSS" },
      { name: "CustomPainter Graphics", level: "Production", note: "Interactive canvas layout algorithms, custom vector charts" }
    ]
  },
  {
    title: "Data & Realtime",
    description: "Fast persistence, real-time message brokers, and background queues.",
    skills: [
      { name: "MongoDB", level: "Production", note: "Document modeling, aggregation pipelines, replica indexing" },
      { name: "MySQL / PostgreSQL", level: "Production", note: "Schema design, relational indexing, HikariCP connection pooling" },
      { name: "Redis", level: "Production", note: "Pub/Sub channels, caching layers, distributed synchronization" },
      { name: "MQTT & WebSockets", level: "Production", note: "Low-overhead bidirectional telemetry for IoT & live apps" }
    ]
  },
  {
    title: "Hardware & DevOps",
    description: "Microcontroller telemetry, containerized workflows, and Linux servers.",
    skills: [
      { name: "ESP32 / Arduino", level: "Production", note: "Non-blocking firmware loops, sensor integration, hardware interrupts" },
      { name: "Docker", level: "Working", note: "Containerized environments, multi-stage builds, compose networks" },
      { name: "Git & Linux", level: "Daily", note: "CI workflows, server deployment, shell automation, SSH management" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "devroom",
    role: "Java Plugin Developer",
    company: "DevRoom",
    period: "March 2026 – Present",
    type: "Current Role",
    description: "Developing and maintaining high-performance Java systems for enterprise gaming networks, architecting distributed data pipelines, and optimizing server tick rates.",
    achievements: [
      "Engineered cross-server networking layers bridging game instances with centralized microservices.",
      "Integrated MongoDB and MySQL connection pools with zero-latency asynchronous write queues.",
      "Standardized RESTful webhook notification handlers for automated transaction verification."
    ],
    skills: ["Java 21", "Spigot / Paper API", "Velocity Proxy", "MongoDB", "MySQL", "Async Concurrency"],
    badge: "Current Role"
  },
  {
    id: "rollerite",
    role: "Java Plugin & Systems Developer",
    company: "Rollerite LLC",
    period: "October 2025 – Present",
    type: "Commercial Freelance",
    description: "Delivered 8 bespoke commercial commissions for global clients with a verified 4.83 / 5.00 average client rating across all projects.",
    achievements: [
      "Designed and delivered 8 custom production plugins meeting strict client acceptance criteria.",
      "Maintained a 4.83/5.00 rating across 6 detailed client reviews with consistent on-time delivery.",
      "Solved low-latency data synchronization challenges using Redis pub/sub and thread-safe data structures."
    ],
    skills: ["Java", "Paper API", "Redis", "MySQL", "BungeeCord", "Commercial Delivery"],
    badge: "4.83 / 5.0 Rating"
  },
  {
    id: "ieee-ecu",
    role: "Vice PR & Workshop Instructor",
    company: "IEEE ECU Student Branch",
    period: "2024 – Present",
    type: "Student Leadership",
    description: "Spearheaded technical development for branch web infrastructure, instructed peer data structures workshops, and mentored junior engineering students.",
    achievements: [
      "Architected the official student branch platform using Spring Boot and MongoDB.",
      "Taught core data structures and algorithms workshops to university students.",
      "Co-organized national engineering events including Made in Egypt (MIE) Closing Ceremony."
    ],
    skills: ["Spring Boot", "Data Structures", "Technical Instruction", "Public Relations"],
    badge: "Leadership"
  },
  {
    id: "itc-egypt-2025",
    role: "Published Research Co-Author",
    company: "IEEE ITC-Egypt 2025 Conference",
    period: "Published 2025",
    type: "Academic Research",
    description: "Co-authored peer-reviewed research paper: 'Agricultural Monitoring and Automation Enabler: Feedback-Based Desktop Remotely Controlled System' (DOI: 10.1109/ITC-Egypt66095.2025.11186572).",
    achievements: [
      "Designed an automated feedback-based greenhouse monitoring system integrating Arduino microcontrollers with DHT11 and LDR sensors.",
      "Engineered real-time desktop communication loop for microclimate control and environmental telemetry.",
      "Published in IEEE Xplore after peer-review acceptance at the International Telecommunications Conference."
    ],
    skills: ["Academic Research", "Embedded C++", "Sensor Integration", "IEEE Documentation"],
    badge: "Published Research"
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "review-1",
    client: "Rollerite Client Commission #4",
    project: "Custom Server Core & Queue Pipeline",
    rating: 5.0,
    review: "Fast delivery, clean code, and zero tick loss on our 300-player peak network. Mohamed communicated every step of the way.",
    date: "January 2026",
    verified: true
  },
  {
    id: "review-2",
    client: "Rollerite Client Commission #6",
    project: "Cross-Server Moderation Suite",
    rating: 5.0,
    review: "Delivered exactly what was specified with async MySQL queries. Will definitely hire again for our next infrastructure update.",
    date: "February 2026",
    verified: true
  },
  {
    id: "review-3",
    client: "Rollerite Client Commission #2",
    project: "Economy & Transaction Sync Plugin",
    rating: 4.8,
    review: "Very solid technical foundation. Handled unexpected Redis disconnects gracefully with zero transaction data loss.",
    date: "December 2025",
    verified: true
  }
];
