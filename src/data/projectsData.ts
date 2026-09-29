export interface ProjectScreenDetail {
  type: 'smart_home' | 'ieee_portal' | 'punishment' | 'pcb_web' | 'healthlink';
  status: string;
  metricLabel: string;
  metricValue: string;
  subtext: string;
  badge: string;
  accent: string;
}

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
  accentColor: string; // e.g. #00ff87
  glowColor: string;
  image: string;
  stats: { label: string; value: string }[];
  links: {
    github?: string;
    live?: string;
    docs?: string;
  };
  screenDetails: ProjectScreenDetail;
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
  bio: "I'm Mohamed Badawy. I engineer high-throughput Java server systems, cross-platform Flutter mobile applications, and connected IoT hardware that stay fast and reliable under heavy production traffic.",
  email: "bdwym2007@gmail.com",
  github: "https://github.com/M7MEDpro",
  linkedin: "https://www.linkedin.com/in/badawy-dev/",
  cvUrl: "/Mohamed_Badawy_CV.pdf",
  status: "Available for select freelance contracts & full-time roles",
};

export const PROJECTS: Project[] = [
  {
    id: "ieee-ecu-platform",
    number: "01",
    title: "IEEE Student Branch Platform",
    subtitle: "Full-Stack Backend & Member Portal",
    category: "Backend Systems",
    role: "Lead Backend Developer",
    organization: "IEEE ECU Student Branch",
    summary:
      "Built the official backend powering member onboarding, workshop registrations, and role-based permissions for over 500 active university students.",
    keyFeatures: [
      "Spring Boot 3 + MongoDB backend securing student records with cryptographically signed JWT auth.",
      "Granular role-based access for student members, committee leads, and executive admins.",
      "Standardized error handling across all 30+ service endpoints with zero unhandled runtime crashes."
    ],
    tags: ["Java 21", "Spring Boot", "MongoDB", "JWT Auth", "Docker", "REST API"],
    accentColor: "#00ff87", // Neon emerald
    glowColor: "rgba(0, 255, 135, 0.25)",
    image: "/assets/projects/ieee_ecu_portal.png",
    stats: [
      { label: "Active Members", value: "500+" },
      { label: "API Endpoints", value: "30+" },
      { label: "Server Stack", value: "Spring Boot" }
    ],
    links: {
      github: "https://github.com/M7MEDpro/IEEE-ECU-SB-Platform",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "ieee_portal",
      status: "Cluster Online",
      metricLabel: "Active Sessions",
      metricValue: "482 / 500",
      subtext: "Spring Boot 3.2 • MongoDB • JWT Protected",
      badge: "Production API",
      accent: "#00ff87"
    }
  },
  {
    id: "punishment-system",
    number: "02",
    title: "High-Concurrency Moderation Core",
    subtitle: "Non-Blocking Distributed Server Engine",
    category: "Distributed Systems",
    role: "Systems Developer",
    organization: "Rollerite LLC (Commercial Contract)",
    summary:
      "Engineered an asynchronous penalty and player moderation architecture for high-traffic Minecraft server networks. Keeps server tick rates pinned at a perfect 20 TPS.",
    keyFeatures: [
      "Zero server tick loss: offloads all database queries and Redis messages to async background worker threads.",
      "Syncs bans, mutes, and warning records across distributed server nodes in under 15ms via Redis pub/sub.",
      "Delivered commercially for Rollerite LLC with a 4.83/5.0 verified client satisfaction rating."
    ],
    tags: ["Java", "Paper / Velocity API", "Redis Pub/Sub", "MySQL", "HikariCP", "Multi-Threading"],
    accentColor: "#38bdf8", // Electric cyan
    glowColor: "rgba(56, 189, 248, 0.25)",
    image: "/projects/thauma_leaderboard.png",
    stats: [
      { label: "Server Tick Rate", value: "20.0 TPS" },
      { label: "Network Sync", value: "<15ms" },
      { label: "Commissions", value: "8 Done" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://rollerite.com"
    },
    screenDetails: {
      type: "punishment",
      status: "Network Synced",
      metricLabel: "Main Thread Load",
      metricValue: "0.2ms / 50ms",
      subtext: "Paper 1.20+ • Redis Pub/Sub • 20 TPS",
      badge: "Rollerite Contract",
      accent: "#38bdf8"
    }
  },
  {
    id: "innovatronics-pwa",
    number: "03",
    title: "Innovatronics Interactive PCB Web",
    subtitle: "Custom Canvas Graphics & Algorithmic Routing",
    category: "Interactive Graphics",
    role: "Lead Frontend Engineer",
    organization: "Innovatronics Tech",
    summary:
      "Designed and coded a responsive web application featuring an animated printed circuit board (PCB) organizational tree rendered via CustomPainter routines.",
    keyFeatures: [
      "Custom mathematical line-routing algorithm drawing 45-degree angle bends and smooth bezier connector traces.",
      "Solid 60 FPS vector animations running smoothly on both mobile touchscreens and desktop monitors.",
      "Pure Flutter web rendering with zero heavy third-party canvas libraries or DOM lag."
    ],
    tags: ["Flutter Web", "Dart", "CustomPainter", "Vector Graphics", "Algorithmic Routing"],
    accentColor: "#f59e0b", // Warm circuit amber
    glowColor: "rgba(245, 158, 11, 0.25)",
    image: "/assets/projects/innovationics_tech.png",
    stats: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Canvas Engine", value: "Custom" },
      { label: "Trace Routing", value: "45° Bezier" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "pcb_web",
      status: "Canvas Active",
      metricLabel: "Trace Rendering",
      metricValue: "60 FPS",
      subtext: "Flutter Canvas • Orthogonal Routing • Zero Lag",
      badge: "Interactive Graphics",
      accent: "#f59e0b"
    }
  },
  {
    id: "projecto-messio",
    number: "04",
    title: "ESP32 Smart Home & IoT Hub",
    subtitle: "Embedded Firmware & Real-Time Mobile Controller",
    category: "IoT & Embedded C++",
    role: "Embedded Firmware & App Developer",
    organization: "Applied IoT Project",
    summary:
      "End-to-end automation connecting ESP32 microcontroller sensors to a synchronized Flutter mobile controller over local MQTT. Instant relay switching in under 40ms.",
    keyFeatures: [
      "Event-driven C++ firmware running on ESP32 microcontrollers with non-blocking timers and debounce filters.",
      "Sub-40ms local round-trip latency for lights, climate control, and environmental telemetry over MQTT.",
      "Resilient offline mode that safely queues state changes locally if the internet connection drops."
    ],
    tags: ["Flutter", "C++ / ESP32", "MQTT Broker", "WebSockets", "IoT Hardware", "Sensors"],
    accentColor: "#00ff87", // Neon green
    glowColor: "rgba(0, 255, 135, 0.25)",
    image: "/assets/projects/smart_home_iot.png",
    stats: [
      { label: "Switch Latency", value: "<40ms" },
      { label: "Controller", value: "ESP32 C++" },
      { label: "Protocol", value: "MQTT / WS" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "smart_home",
      status: "Telemetry Live",
      metricLabel: "Ping Latency",
      metricValue: "38ms",
      subtext: "ESP32 Firmware • MQTT Broker • Relays Active",
      badge: "Embedded & App",
      accent: "#00ff87"
    }
  },
  {
    id: "healthlink-suite",
    number: "05",
    title: "HealthLink Cross-Platform Suite",
    subtitle: "Healthcare Vitals & Encrypted Records",
    category: "Cross-Platform Engineering",
    role: "Cross-Platform Mobile Engineer",
    organization: "Clinical Informatics Project",
    summary:
      "Cross-platform healthcare management app running on mobile tablets, phones, and desktop workstations with encrypted local SQLite database synchronization.",
    keyFeatures: [
      "Single Flutter codebase providing tailored interfaces for clinical tablet workstations and handheld phones.",
      "Local database encrypted with SQLCipher for confidential patient records and instant offline search.",
      "Shared native C++ data processing layer handling encrypted files with zero UI stutter."
    ],
    tags: ["Flutter Desktop", "Flutter Mobile", "C++ Core", "SQLite Encrypted", "State Management"],
    accentColor: "#ec4899", // Neon rose
    glowColor: "rgba(236, 72, 153, 0.25)",
    image: "/assets/projects/healthlink_medical.png",
    stats: [
      { label: "Platforms", value: "Desktop & Mobile" },
      { label: "Database", value: "SQLCipher" },
      { label: "Sync Engine", value: "Delta Protocol" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "healthlink",
      status: "DB Encrypted",
      metricLabel: "Sync Status",
      metricValue: "100% Synced",
      subtext: "Flutter Cross-Platform • SQLCipher • Instant Search",
      badge: "Clinical App",
      accent: "#ec4899"
    }
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
      { name: "ESP32 / Embedded", level: "Production", note: "Non-blocking firmware loops, sensor integration, hardware interrupts" },
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
    role: "Technical PR & Workshop Instructor",
    company: "IEEE ECU Student Branch",
    period: "2024 – Present",
    type: "Student Leadership",
    description: "Spearheaded technical development for branch web infrastructure, instructed hands-on engineering workshops, and mentored junior engineering students.",
    achievements: [
      "Architected the official student branch platform using Spring Boot and MongoDB.",
      "Conducted practical training workshops on object-oriented programming, Git workflows, and API design.",
      "Co-managed technical public relations and digital event registration operations."
    ],
    skills: ["Spring Boot", "Technical Instruction", "Public Relations", "Team Mentorship"],
    badge: "Leadership"
  },
  {
    id: "itc-egypt-2025",
    role: "Research Co-Author",
    company: "IEEE ITC-Egypt 2025 Conference",
    period: "Accepted 2025",
    type: "Academic Research",
    description: "Co-authored peer-reviewed research paper: 'Smart Greenhouse Automation with Closed-Loop Sensor Telemetry' presented at the International Telecommunications Conference.",
    achievements: [
      "Formulated mathematical models for closed-loop environmental sensor telemetry and actuator triggers.",
      "Engineered the embedded C++ telemetry firmware transmitting microclimate metrics to the centralized cloud.",
      "Successfully defended research methodology for academic acceptance by the IEEE review board."
    ],
    skills: ["Academic Research", "C++ Firmware", "IoT Telemetry", "Mathematical Modeling"],
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
