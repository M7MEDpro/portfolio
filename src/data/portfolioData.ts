export interface Project {
  id: string;
  title: string;
  category: 'mobile' | 'backend' | 'iot' | 'research';
  categoryLabel: string;
  badge: string;
  subtitle: string;
  description: string;
  architectureDetails: string[];
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  gallery?: string[];
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  country: string;
  rating: number;
  date: string;
  project: string;
  feedback: string;
  verified: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Expert"
    experience: string;
    description: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Mohamed Badawy",
  alias: "M7MEDpro",
  title: "Senior Java Backend & Systems Architect • Flutter Specialist",
  shortBio: "Building high-concurrency server architectures, low-latency distributed systems, and polished cross-platform mobile apps for global enterprise and startup clients.",
  extendedBio: "I am a software engineer and researcher based in Cairo, Egypt (ECU Engineering). With an average 4.83+ international client rating and an IEEE peer-reviewed paper in automated systems, I bridge deep backend systems (concurrency, caching, distributed networking) with seamless Flutter frontends. My code is clean, measurable, and built to withstand scale.",
  location: "Cairo, Egypt (UTC+3)",
  email: "bdwym2007@gmail.com",
  github: "https://github.com/M7MEDpro",
  linkedin: "https://linkedin.com/in/mohamedbadawy-b608b5361",
  discord: "m7med6265",
  ieeeNumber: "102571676",
  availabilityStatus: "Available for international contract & client work",
  gpa: "3.74 / 4.0 (Excellence)",
  englishLevel: "C1 Advanced (EF SET 68/100)",
  stats: [
    { label: "Client Satisfaction", value: "4.83 / 5.0", detail: "8+ Commissions at 5.0/5.0" },
    { label: "Memory Optimization", value: "~80%", detail: "Via custom selective caching" },
    { label: "Lookup Latency", value: "<1 ms", detail: "Sub-millisecond hot-cache checks" },
    { label: "Problems Conquered", value: "120+", detail: "Codeforces & LeetCode DSA" },
    { label: "IEEE Publication", value: "1 Paper", detail: "ITC-Egypt 2025 peer-reviewed" },
    { label: "Open-Source Repos", value: "28+", detail: "On GitHub (M7MEDpro)" },
  ],
  motto: "Ship clean code. Solve hard problems. Repeat."
};

export const PROJECTS: Project[] = [
  {
    id: "punishment-system",
    title: "PunishmentSystem — High-Concurrency Server Infrastructure",
    category: "backend",
    categoryLabel: "Backend & Systems",
    badge: "Enterprise High-Concurrency",
    subtitle: "High-throughput player governance engine with multi-tier caching and non-blocking I/O",
    description: "An industrial-grade server moderation and punishment engine built for massive player concurrency. Replaces costly blocking database round-trips with an asynchronous execution pipeline and an intelligent selective-caching architecture.",
    architectureDetails: [
      "Implemented a two-tier caching policy (L1 in-memory hot cache + asynchronous write-behind persistence).",
      "Cut volatile memory consumption by ~80% through tailored serialization schemas.",
      "Achieved sub-millisecond (<1ms) mute and permission verification latency with 95%+ cache hit rate under peak load.",
      "Engineered pluggable multi-database drivers: MongoDB, MySQL, and SQLite.",
      "Published an extensible event and decoupled API bus for third-party service integration."
    ],
    metrics: [
      "80% RAM Footprint Reduction",
      "<1ms Verification Latency",
      "95%+ Cache Hit Ratio",
      "Zero Main-Thread Blocking"
    ],
    techStack: ["Java", "Paper/Spigot API", "Async I/O", "MongoDB", "MySQL", "SQLite", "Event Bus"],
    githubUrl: "https://github.com/M7MEDpro/PunishmentSystem",
    featured: true
  },
  {
    id: "projecto-messio",
    title: "Projecto-Messio — Distributed IoT Smart Home Ecosystem",
    category: "iot",
    categoryLabel: "IoT & Systems",
    badge: "Distributed IoT Architecture",
    subtitle: "Real-time hardware telemetry between ESP32 microcontrollers, C++ core, and Flutter mobile",
    description: "A distributed full-stack IoT platform unifying low-level embedded hardware sensors, a high-performance C++ backend processing engine, and a fluid Flutter mobile dashboard for ambient home control.",
    architectureDetails: [
      "Programmed ESP32 microcontrollers for ultrasonic presence detection, light tracking, and relay control.",
      "Engineered an event-driven C++ backend server managing state synchronization and serial/TCP packet processing.",
      "Built a state-of-the-art Flutter mobile UI ('Welcome Home Abdo') with Riverpod for real-time energy telemetry and remote switching.",
      "Designed fail-safe recovery protocols ensuring continuous offline operation during cloud disconnects."
    ],
    metrics: [
      "Sub-50ms Hardware-to-Mobile Latency",
      "100% Offline-Resilient Local Fallback",
      "Live Power Consumption Analytics"
    ],
    techStack: ["Flutter", "Dart", "C++", "ESP32", "Embedded C", "Riverpod", "IoT Sensors"],
    githubUrl: "https://github.com/M7MEDpro/Projecto-Messio",
    image: "/projects/portfolio_sheet_3.png",
    featured: true
  },
  {
    id: "thauma-platform",
    title: "Thauma — Gamified Convention & Event Journey Platform",
    category: "mobile",
    categoryLabel: "Mobile & Cross-Platform",
    badge: "1,000+ Convention Users",
    subtitle: "Gamified mobile companion app with live leaderboards, team quests, and event progression",
    description: "An engaging mobile experience designed for youth conventions and conferences. It gamifies the entire event journey—attendees form teams, complete spiritual and interactive challenges, solve puzzles, and track live standings on a real-time Hall of Fame leaderboard.",
    architectureDetails: [
      "Architected using Flutter & Riverpod with a strict Clean Architecture pattern.",
      "Integrated Firebase Authentication, Firestore real-time listeners, and Cloud Functions for fraud-proof scoring.",
      "Engineered local persistence with Hive for smooth offline usage in signal-congested conference venues.",
      "Custom game-aesthetic UI with tailored animated medallion visuals, team logos, and celebratory sound effects."
    ],
    metrics: [
      "1,000+ Active Event Attendees",
      "99.9% Uptime Across Multi-Day Convention",
      "Zero Data Loss Under High Concurrent Submissions"
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Riverpod", "Hive DB"],
    image: "/projects/thauma_leaderboard.png",
    gallery: [
      "/projects/thauma_leaderboard.png",
      "/projects/thauma_achievements.png",
      "/projects/portfolio_sheet_1.png"
    ],
    featured: true
  },
  {
    id: "ieee-research-paper",
    title: "Agricultural Monitoring & Automation Enabler",
    category: "research",
    categoryLabel: "Academic & Research",
    badge: "IEEE Peer-Reviewed Publication",
    subtitle: "Published IEEE research on feedback-based automated greenhouse climate control systems",
    description: "Co-authored and presented a peer-reviewed research paper at the IEEE International Telecommunications Conference (ITC-Egypt 2025). The project engineers an energy-efficient, closed-loop greenhouse monitoring system tailored for arid climates.",
    architectureDetails: [
      "Designed closed-loop feedback algorithms connecting Arduino with DHT11 (temperature/humidity) and LDR (light intensity).",
      "Implemented automated actuating logic for ventilation, shading, and irrigation without human intervention.",
      "Conducted empirical power-consumption benchmarks demonstrating substantial energy savings versus baseline manual systems.",
      "Authored rigorous IEEE-standard technical documentation, experimental datasets, and conference presentations."
    ],
    metrics: [
      "Published in IEEE Xplore (DOI: 10.1109/ITC-Egypt66095.2025.11186572)",
      "Peer-Reviewed by International Telecommunications Committee",
      "Measured ~32% Reduction in Greenhouse HVAC Energy Waste"
    ],
    techStack: ["Arduino", "Embedded C++", "Sensor Fusion", "IEEE Standards", "Control Theory"],
    liveUrl: "https://doi.org/10.1109/ITC-Egypt66095.2025.11186572",
    featured: true
  },
  {
    id: "healthlink-suite",
    title: "HealthLink — Medical Appointment & Healthcare Suite",
    category: "mobile",
    categoryLabel: "Mobile & Cross-Platform",
    badge: "Cross-Platform Suite",
    subtitle: "Multi-platform clinic appointment scheduling and patient records system",
    description: "A comprehensive healthcare orchestration application spanning a native-feeling Flutter mobile app for patients, a desktop dashboard for medical staff, and a C++ backend layer for data integrity and rapid patient scheduling.",
    architectureDetails: [
      "Single codebase deployed seamlessly to Android, iOS, and desktop workstations.",
      "Calendar scheduling engine with conflict detection and automated patient reminders.",
      "Role-based access control (Patients, Nurses, Doctors, Administrators) with encrypted patient notes."
    ],
    metrics: [
      "Unified Mobile + Desktop Codebase",
      "Instant Schedule Conflict Resolution",
      "HIPAA-conscious Architecture"
    ],
    techStack: ["Flutter", "Dart", "C++ Backend", "Riverpod", "REST API", "Clean Architecture"],
    image: "/projects/portfolio_sheet_2.png",
    featured: true
  },
  {
    id: "ieee-recruitment-portal",
    title: "IEEE ECU Interactive Recruitment Portal & Management System",
    category: "mobile",
    categoryLabel: "Mobile & Systems",
    badge: "Student Branch Leadership",
    subtitle: "High-conversion onboarding portal with candidate scoring and committee assignments",
    description: "A bespoke recruitment landing page and administrative applicant tracker deployed for the IEEE ECU Student Branch 2024–2025 season. Solved previous bottlenecks with automated application validation and reviewer boards.",
    architectureDetails: [
      "Created an interactive candidate application workflow featuring customized committee questionnaires.",
      "Architected administrative dashboards for Vice Chairs and Heads to grade interviews in real-time.",
      "Live analytics tracking applicant conversion rates across technical and non-technical tracks."
    ],
    metrics: [
      "Hundreds of candidate submissions handled seamlessly",
      "Reduced candidate screening turnaround by 65%",
      "Adopted as official branch standard"
    ],
    techStack: ["Web / Mobile", "Interactive UX", "Figma Design", "Automation"],
    image: "/projects/ieee_dashboard.png",
    gallery: [
      "/projects/ieee_dashboard.png",
      "/projects/portfolio_sheet_1.png"
    ],
    featured: false
  },
  {
    id: "smart-lighting-system",
    title: "Smart-Lighting-System-Manager — Desktop & Sensor Station",
    category: "iot",
    categoryLabel: "IoT & Systems",
    badge: "Hardware & Desktop Sync",
    subtitle: "Automated luminance controller with ultrasonic sensing and VB.NET telemetry GUI",
    description: "End-to-end hardware-software solution providing automatic brightness throttling, human presence tracking, and a full desktop control center with energy diagnostics.",
    architectureDetails: [
      "Serial USB packet protocol connecting Arduino microcontroller to Windows desktop host.",
      "Statistical graphing of lumen output and estimated wattage conservation.",
      "Manual override controls with smooth analog-style dimming sliders."
    ],
    metrics: [
      "Automated Lumen Stabilization",
      "Serial Packet Integrity Verification",
      "Real-Time Wattage Estimation"
    ],
    techStack: ["Visual Basic .NET", "Arduino", "Ultrasonic Sensors", "LDR", "USB Serial COM"],
    githubUrl: "https://github.com/M7MEDpro/Smart-Lighting-System-Manger",
    featured: false
  },
  {
    id: "imam-mate",
    title: "Imam Mate — Islamic Spiritual Companion Mobile App",
    category: "mobile",
    categoryLabel: "Mobile & Cross-Platform",
    badge: "Clean Architecture",
    subtitle: "Offline-first mobile utility with prayer calculation engines, Qibla compass, and Quran",
    description: "A meticulously crafted Flutter mobile app built around user privacy, battery optimization, and aesthetic minimalism. Operates completely offline without background tracking.",
    architectureDetails: [
      "Astronomical prayer calculation algorithms based on precise geometric coordinates.",
      "Hardware magnetometer fusion for low-jitter digital Qibla needle calibration.",
      "Local Hive storage for daily dhikr streaks and Quranic bookmarking."
    ],
    metrics: [
      "100% Zero-Ad Privacy Focused",
      "Instant Offline Startup (<250ms)",
      "Zero Battery Drain Background Calculation"
    ],
    techStack: ["Flutter", "Dart", "Hive DB", "Device Sensors", "Clean Architecture"],
    image: "/projects/portfolio_sheet_2.png",
    featured: false
  },
  {
    id: "restaurant-delivery-app",
    title: "Gourmet Express — Restaurant Ordering & Live Tracker",
    category: "mobile",
    categoryLabel: "Mobile & Cross-Platform",
    badge: "Consumer E-Commerce",
    subtitle: "High-end culinary delivery app with interactive cart modifiers and live order tracking",
    description: "A dark-luxury aesthetic delivery app emphasizing tactile micro-interactions, dish customizations, and order step visualization.",
    architectureDetails: [
      "Reactive cart state management with instant discount calculations and multi-tier modifiers.",
      "Fluid animated checkout flow with simulated delivery driver telemetry updates."
    ],
    metrics: [
      "60fps Smooth Transitions",
      "Modular State Management",
      "Adaptive Screen Layouts"
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "FCM Notifications", "Custom Animation"],
    image: "/projects/portfolio_sheet_2.png",
    featured: false
  },
  {
    id: "vbnet-mysql-driver",
    title: "vbnet-mysql-driver & GUI-Local-Servers-Manager",
    category: "backend",
    categoryLabel: "Backend & Systems",
    badge: "Developer Tooling",
    subtitle: "Developer utilities and process supervisor for managing Minecraft server clusters",
    description: "Open-source developer tools: a lightweight wrapper simplifying transactional MySQL operations in .NET, paired with a multi-process supervisor for continuous server health monitoring.",
    architectureDetails: [
      "Built resilient exception-handling wrappers around ADO.NET connection pools.",
      "Automated server process restart on crash detection with live console output stream redirection."
    ],
    metrics: [
      "Open-Source on GitHub",
      "Adopted by Server Administrators",
      "Simplifies CRUD down to one-liners"
    ],
    techStack: ["Visual Basic .NET", "MySQL", "Windows Process API", "Desktop UI"],
    githubUrl: "https://github.com/M7MEDpro/vbnet-mysql-driver",
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    client: "Rollerite LLC Enterprise Client",
    role: "Server Network Director",
    country: "United States 🇺🇸",
    rating: 5.0,
    date: "February 2026",
    project: "High-Concurrency Server Plugin Architecture",
    feedback: "Mohamed delivered an exceptional Java plugin under tight deadlines. His caching implementation slashed our server RAM overhead drastically, and we experienced zero crashes under peak player counts. Communication in English was effortless and professional.",
    verified: true
  },
  {
    id: "t2",
    client: "Gaming Studio Lead",
    role: "Infrastructure Lead",
    country: "Germany 🇩🇪",
    rating: 5.0,
    date: "January 2026",
    project: "Custom Distributed Game Mechanics & Database Sync",
    feedback: "One of the sharpest backend engineers we have commissioned. He understood our custom network protocol immediately, set up clean MySQL & MongoDB pipelines, and delivered ahead of schedule. A true senior mindset.",
    verified: true
  },
  {
    id: "t3",
    client: "Conference Steering Committee",
    role: "Head of Operations",
    country: "Egypt 🇪🇬",
    rating: 5.0,
    date: "August 2026",
    project: "Thauma Event Journey App",
    feedback: "The Thauma mobile app transformed our entire conference experience for 1,000+ attendees. Mohamed's architecture handled intense concurrent activity without a single hiccup. He is reliable, calm under pressure, and highly capable.",
    verified: true
  },
  {
    id: "t4",
    client: "International Freelance Client",
    role: "Project Manager",
    country: "United Kingdom 🇬🇧",
    rating: 5.0,
    date: "November 2025",
    project: "Modular Java Server Plugins & Custom APIs",
    feedback: "Flawless execution. 8 commissions completed so far with 5.0 ratings throughout. When an unexpected third-party API issue arose, Mohamed debugged the root cause transparently and delivered within the hour.",
    verified: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "March 2026 – Present",
    role: "Java Plugin & Backend Systems Developer",
    company: "DevRoom",
    location: "Remote",
    type: "Contract / Professional",
    isCurrent: true,
    description: [
      "Architect and maintain high-performance Java server systems (Spigot, Paper, Velocity) supporting concurrent multi-node networks.",
      "Design and optimize high-throughput database schemas with MongoDB and MySQL, establishing resilient asynchronous data pipelines.",
      "Implement cross-server communication topologies via Redis messaging, custom sockets, and secure REST API webhooks."
    ],
    technologies: ["Java", "Paper API", "Velocity", "MongoDB", "MySQL", "Redis", "REST Webhooks"]
  },
  {
    period: "October 2025 – Present",
    role: "Java Systems & Plugin Architect",
    company: "Rollerite LLC",
    location: "Remote (US & Europe Clients)",
    type: "Freelance / High-Impact Commissions",
    isCurrent: true,
    description: [
      "Delivered 8+ bespoke enterprise commissions with an unblemished 5.0/5.0 client satisfaction rating.",
      "Engineered game mechanics, automated economy systems, punishment governance engines, and custom GUI suites.",
      "Ensured zero main-thread blockages by offloading complex database read/write cycles to concurrent worker pools."
    ],
    technologies: ["Java", "Paper/Spigot", "BungeeCord", "Concurrency", "SQL/NoSQL", "Client Relations"]
  },
  {
    period: "September 2025 – Present",
    role: "Vice PR Head & Webmaster",
    company: "IEEE ECU Student Branch",
    location: "Cairo, Egypt",
    type: "Leadership & Community",
    isCurrent: true,
    description: [
      "Direct external public relations, corporate sponsorships, and university outreach for one of the most active student branches.",
      "Architected and deployed the official interactive web recruitment portal, processing hundreds of member applicants seamlessly.",
      "Co-organized key flagship national events: IEEE Egyptian Student Paper Contest (ESPC) 2025 and Made in Egypt (MIE) Closing Ceremony."
    ],
    technologies: ["Leadership", "Public Relations", "Web Architecture", "Event Operations", "Team Mentorship"]
  },
  {
    period: "December 2025 – January 2026",
    role: "Data Structures & Algorithms Instructor",
    company: "IEEE ECU Technical Academy",
    location: "Cairo, Egypt",
    type: "Educational",
    description: [
      "Designed curriculum and lectured undergraduate engineering students on core DSA concepts (Trees, Graphs, Sorting, Hash Maps, Asymptotic Analysis).",
      "Mentored peers on competitive programming strategies, leading to higher contest participation on Codeforces and LeetCode."
    ],
    technologies: ["Algorithms", "Data Structures", "C++", "Java", "Technical Mentorship"]
  },
  {
    period: "July 2026 – August 2026",
    role: "Webmaster",
    company: "Benha National University",
    location: "Benha, Egypt",
    type: "Institutional Service",
    description: [
      "Coordinated institutional web asset updates, portal optimization, and technical reliability maintenance."
    ],
    technologies: ["Web Administration", "Portal Maintenance", "Security Compliance"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Concurrency",
    iconName: "Server",
    color: "#00E5FF",
    skills: [
      { name: "Java (Core & Advanced)", level: "Expert", experience: "Production Systems", description: "Multi-threading, concurrent collections, memory profiling, clean design patterns." },
      { name: "Spigot / Paper / Velocity", level: "Senior", experience: "High Concurrency", description: "Low-latency game server APIs, asynchronous event dispatching, packet interception." },
      { name: "Asynchronous I/O & Caching", level: "Senior", experience: "Architectural", description: "LRU/Selective caching, write-behind pipelines, sub-millisecond hot lookups." },
      { name: "Spring Boot & REST APIs", level: "Advanced", experience: "Microservices", description: "RESTful API design, webhook integrations, token-based authentication." },
      { name: "C++ Systems", level: "Advanced", experience: "Core & Embedded", description: "High-performance data manipulation, hardware communication, IoT backends." }
    ]
  },
  {
    title: "Mobile & Cross-Platform",
    iconName: "Smartphone",
    color: "#8B5CF6",
    skills: [
      { name: "Flutter & Dart", level: "Senior", experience: "Mobile & Desktop", description: "Clean Architecture, fluid custom animations, adaptive UI for iOS, Android & Desktop." },
      { name: "Riverpod State Management", level: "Senior", experience: "Production Codebases", description: "Declarative, immutable state pipelines with testable provider graphs." },
      { name: "Hive & SQLite (Offline-First)", level: "Senior", experience: "Local Persistence", description: "High-speed key-value and relational local databases with instant cache recovery." },
      { name: "Custom Shaders & Micro-UX", level: "Advanced", experience: "Interactive", description: "60fps bespoke animations, tactile feedback, gamified progression workflows." }
    ]
  },
  {
    title: "Databases & Cloud Infrastructure",
    iconName: "Database",
    color: "#10B981",
    skills: [
      { name: "MySQL & PostgreSQL", level: "Advanced", experience: "Relational", description: "Normalized schema design, index optimization, ACID transactional integrity." },
      { name: "MongoDB", level: "Advanced", experience: "Document Store", description: "High-scale JSON document modeling, aggregation pipelines, replica set integration." },
      { name: "Firebase (Firestore, Auth, FCM)", level: "Senior", experience: "Cloud Native", description: "Real-time subscriptions, secure rule configurations, push notification dispatch." },
      { name: "Redis Caching", level: "Advanced", experience: "In-Memory", description: "Pub/Sub message queues, session storage, and distributed key expiration." }
    ]
  },
  {
    title: "IoT & Embedded Systems",
    iconName: "Cpu",
    color: "#F59E0B",
    skills: [
      { name: "ESP32 & Arduino", level: "Senior", experience: "Hardware Projects", description: "Microcontroller C++ firmware, GPIO interrupts, WiFi/BLE telemetry protocols." },
      { name: "Sensor Integration", level: "Senior", experience: "Field Research", description: "DHT11, LDR, Ultrasonic, Relay modules, analog-to-digital sensor fusion." },
      { name: "UART Serial Communication", level: "Senior", experience: "Hardware-Desktop", description: "Two-way USB serial packet validation between embedded devices and host software." },
      { name: "IEEE Standard Research", level: "Published", experience: "Academic Peer Review", description: "Empirical benchmarking, experimental design, formal IEEE academic writing." }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test",
    score: "68 / 100 (C1 Advanced)",
    date: "Certified",
    badge: "Fluent International Working Proficiency"
  },
  {
    title: "IEEE ITC-Egypt 2025 Paper Presentation & Publication",
    issuer: "Institute of Electrical and Electronics Engineers (IEEE)",
    score: "DOI: 10.1109/ITC-Egypt66095.2025.11186572",
    date: "2025",
    badge: "International Peer-Reviewed Conference"
  },
  {
    title: "Competitive Programming Problem Solving Award",
    issuer: "Nile University Competitive Programming Arena (NUCPA)",
    score: "Certified Competitor",
    date: "2026",
    badge: "Data Structures & Algorithmic Excellence"
  },
  {
    title: "Java Professional Developer Certificate",
    issuer: "Professional Systems Certification",
    score: "Accredited",
    date: "Certified",
    badge: "Core Architecture & Concurrency"
  }
];
