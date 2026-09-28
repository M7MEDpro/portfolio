export interface ProjectScreenDetail {
  type: 'image' | 'hybrid' | 'topology';
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
  accentColor: string; // e.g. #9ccfb5
  glowColor: string; // softer rgba
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
  title: "Backend Engineer & Systems Developer",
  location: "Cairo, Egypt",
  education: "B.Sc. in Software Engineering & Information Technology, Egyptian Chinese University (ECU)",
  bio: "I build reliable backend systems, cross-platform Flutter applications, and connected hardware telemetry. Focused on low-latency architectures, clean domain modeling, and comfortable digital products.",
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
    title: "IEEE ECU Student Branch Platform",
    subtitle: "Enterprise Backend Architecture & Core API",
    category: "Backend Systems",
    role: "Lead Backend Architect",
    organization: "IEEE ECU Student Branch",
    summary:
      "Engineered the official backend infrastructure powering member onboarding, role-based committee dispatch, and high-concurrency event telemetry with RFC 7807 resilience.",
    keyFeatures: [
      "Layered Domain-Driven Design (DDD) separating authentication, attendance logs, and event registries into decoupled service domains.",
      "Granular Role-Based Access Control (RBAC) backed by JWT authorization tokens and cryptographically salted member credentials.",
      "Comprehensive RFC 7807 problem details handler guaranteeing structured, actionable error payloads across 30+ service endpoints."
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "JWT / RBAC", "Docker", "REST API", "RFC 7807"],
    accentColor: "#9ccfb5", // calm sage green
    glowColor: "rgba(156, 207, 181, 0.16)",
    image: "/assets/projects/ieee_ecu_portal.png",
    stats: [
      { label: "Endpoints", value: "30+" },
      { label: "Architecture", value: "Clean DDD" },
      { label: "Spec", value: "RFC 7807" }
    ],
    links: {
      github: "https://github.com/M7MEDpro/IEEE-ECU-SB-Platform",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "hybrid",
      status: "Cluster Online",
      metricLabel: "Active Sessions",
      metricValue: "482 / 500",
      subtext: "Spring Boot 3.2 • MongoDB Atlas • RBAC Protected",
      badge: "Production API",
      accent: "#9ccfb5"
    }
  },
  {
    id: "punishment-system",
    number: "02",
    title: "PunishmentSystem Server Core",
    subtitle: "Low-Latency Distributed Moderation Engine",
    category: "Distributed Systems",
    role: "Java Plugin Developer",
    organization: "Rollerite LLC (Freelance)",
    summary:
      "Built a non-blocking moderation and penalty distribution architecture for high-concurrency game server clusters, completely eliminating tick stalls.",
    keyFeatures: [
      "Asynchronous database worker threads decoupling disk I/O and Redis publish/subscribe from the 20-TPS Minecraft server main loop.",
      "Distributed cross-server penalty propagation synchronizing state within 15ms across Paper and Velocity proxy nodes.",
      "Dual-layer connection pooling (HikariCP + Redis) with automatic offline reconciliation and fallback query buffers."
    ],
    tags: ["Java", "Paper / Velocity API", "Redis Pub/Sub", "MySQL", "HikariCP", "Distributed Systems"],
    accentColor: "#85a9ec", // calm periwinkle blue
    glowColor: "rgba(133, 169, 236, 0.16)",
    image: "/projects/thauma_leaderboard.png",
    stats: [
      { label: "Server Tick Rate", value: "20.0 TPS" },
      { label: "Sync Latency", value: "<15ms" },
      { label: "Commissions", value: "8 Delivered" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://rollerite.com"
    },
    screenDetails: {
      type: "hybrid",
      status: "Cluster Synchronized",
      metricLabel: "Main Thread Load",
      metricValue: "0.2ms / 50ms",
      subtext: "Paper 1.20+ • Redis Pub/Sub • Zero Tick Loss",
      badge: "Verified Client Delivery",
      accent: "#85a9ec"
    }
  },
  {
    id: "innovatronics-pwa",
    number: "03",
    title: "Innovatronics Interactive Experience",
    subtitle: "Procedural PCB Graphics & Flutter Web Engine",
    category: "Interactive Web & Flutter",
    role: "Lead Frontend Engineer",
    organization: "Innovatronics Tech",
    summary:
      "Designed and coded a responsive web application featuring an interactive PCB-inspired organization tree rendered via hardware-accelerated CustomPainter routines.",
    keyFeatures: [
      "Algorithmic trace connector router calculating dynamic orthogonal and 45-degree bezier routing paths between hierarchical committee nodes.",
      "Staggered entrance interpolation rendering 60fps vector animations without third-party canvas overhead or DOM lag.",
      "Fully responsive touch and mouse interactions adapting dynamically from small smartphone screens to 4K displays."
    ],
    tags: ["Flutter Web", "Dart", "CustomPainter", "Vector Graphics", "Algorithmic Routing"],
    accentColor: "#d99b64", // warm copper amber
    glowColor: "rgba(217, 155, 100, 0.16)",
    image: "/assets/projects/innovationics_tech.png",
    stats: [
      { label: "Rendering", value: "60 FPS" },
      { label: "Engine", value: "CustomPainter" },
      { label: "State", value: "Reactive" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      live: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "hybrid",
      status: "Canvas Active",
      metricLabel: "Trace Compute",
      metricValue: "60 FPS",
      subtext: "Flutter Canvas • Orthogonal Routing • Zero DOM Jank",
      badge: "Interactive Graphics",
      accent: "#d99b64"
    }
  },
  {
    id: "projecto-messio",
    number: "04",
    title: "Projecto-Messio Smart IoT Telemetry",
    subtitle: "Hardware Firmware & Real-Time Mobile Controller",
    category: "IoT & Embedded C++",
    role: "Embedded Firmware & App Developer",
    organization: "Applied IoT Initiative",
    summary:
      "Architected a complete hardware-to-cloud automation hub connecting ESP32 microcontroller sensors to a synchronized Flutter control interface via lightweight MQTT.",
    keyFeatures: [
      "Event-driven C++ firmware running on ESP32 microcontrollers with non-blocking timer loops, debounced interrupts, and sleep optimization.",
      "Bi-directional MQTT messaging broker facilitating sub-50ms round-trip state synchronization for relays, sensors, and environmental monitors.",
      "Offline-first fault-tolerant state machine buffering telemetry during network outages and flushing safely on reconnect."
    ],
    tags: ["Flutter", "C++ / ESP32", "MQTT Broker", "WebSockets", "IoT Sensors", "Embedded Firmware"],
    accentColor: "#72b8aa", // soft sage teal
    glowColor: "rgba(114, 184, 170, 0.16)",
    image: "/assets/projects/smart_home_iot.png",
    stats: [
      { label: "Ping Loop", value: "<50ms" },
      { label: "Core", value: "ESP32 (C++)" },
      { label: "Protocol", value: "MQTT / WS" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "hybrid",
      status: "Telemetry Live",
      metricLabel: "Loop Latency",
      metricValue: "38ms",
      subtext: "ESP32 Firmware • MQTT Broker • Relay Active",
      badge: "Embedded & Mobile",
      accent: "#72b8aa"
    }
  },
  {
    id: "healthlink-suite",
    number: "05",
    title: "HealthLink Clinical Suite",
    subtitle: "Multi-Platform Healthcare & Vitals Synchronizer",
    category: "Cross-Platform Engineering",
    role: "Cross-Platform Mobile Engineer",
    organization: "Clinical Informatics Project",
    summary:
      "Developed a HIPAA-conscious cross-platform clinical management suite spanning Flutter mobile, Flutter desktop, and shared high-speed data parsing routines.",
    keyFeatures: [
      "Shared business logic across mobile and desktop clients ensuring consistent appointment queues and diagnostic records.",
      "Local encrypted SQLite storage layer for offline medical telemetry with instantaneous delta synchronization.",
      "Adaptive touch and mouse ergonomics tailoring dense data tables for desktop workstations and quick glance cards for mobile devices."
    ],
    tags: ["Flutter Desktop", "Flutter Mobile", "C++ Integration", "SQLite Encrypted", "State Management"],
    accentColor: "#cf8a9b", // soft dusty rose
    glowColor: "rgba(207, 138, 155, 0.16)",
    image: "/assets/projects/healthlink_medical.png",
    stats: [
      { label: "Platforms", value: "Desktop & Mobile" },
      { label: "Storage", value: "Encrypted SQLite" },
      { label: "Sync", value: "Delta Protocol" }
    ],
    links: {
      github: "https://github.com/M7MEDpro",
      docs: "https://github.com/M7MEDpro"
    },
    screenDetails: {
      type: "hybrid",
      status: "Clinical DB Encrypted",
      metricLabel: "Sync Status",
      metricValue: "100% Synced",
      subtext: "Flutter Cross-Platform • SQLite Cipher • HIPAA Compliant",
      badge: "Clinical App",
      accent: "#cf8a9b"
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    description: "Robust server architectures, clean APIs, and low-latency concurrency.",
    skills: [
      { name: "Java (17 / 21)", level: "Production", note: "Multi-threaded concurrency, Spring Boot 3, Spigot/Paper engines" },
      { name: "Spring Boot", level: "Production", note: "Clean architecture, Domain-Driven Design (DDD), RFC 7807" },
      { name: "C / C++", level: "Intermediate", note: "Embedded systems, memory management, native hardware drivers" },
      { name: "Python", level: "Working", note: "Data processing scripts, automation, machine learning pipelines" }
    ]
  },
  {
    title: "Mobile & Frontend",
    description: "Fluid cross-platform applications and custom graphics rendering.",
    skills: [
      { name: "Flutter & Dart", level: "Production", note: "Mobile & Desktop, CustomPainter, Riverpod, clean state management" },
      { name: "TypeScript / React", level: "Working", note: "Modern web frontends, component architecture, Tailwind CSS" },
      { name: "CustomPainter Graphics", level: "Production", note: "Interactive canvas layout algorithms, custom vector charts" }
    ]
  },
  {
    title: "Data & Networking",
    description: "Fast persistence, real-time message brokers, and distributed data queues.",
    skills: [
      { name: "MongoDB", level: "Production", note: "Document modeling, aggregation pipelines, replica indexing" },
      { name: "MySQL / PostgreSQL", level: "Production", note: "Schema design, relational indexing, HikariCP pooling" },
      { name: "Redis", level: "Production", note: "Pub/Sub channels, caching layers, distributed synchronization" },
      { name: "MQTT & WebSockets", level: "Production", note: "Low-overhead bidirectional telemetry for IoT & live apps" }
    ]
  },
  {
    title: "Hardware & DevOps",
    description: "Microcontroller telemetry, containerized workflows, and reproducible environments.",
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
    type: "Full-Time / Contract",
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
    type: "Freelance Client Work",
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
    type: "Student Leadership & Volunteer",
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
