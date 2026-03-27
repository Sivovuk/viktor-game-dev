export const personalInfo = {
  name: "Viktor Radovanović",
  title: "Senior Unity Developer | Multiplayer & Systems Engineer | C#",
  shortTitle: "Senior Unity Developer",
  location: "Niš, Serbia",
  phone: "+381645413549",
  bio: "With 8+ years of experience in Unity and C#, I specialize in building scalable game systems and multiplayer architecture for competitive and live-service games.",
  bioExtended: "I've worked across mobile, WebGL, and PC platforms, contributing to shipped titles and production-ready systems, including PvP multiplayer, SDK development, and full-cycle game production. My focus is on clean architecture, performance, and systems that scale under real-world conditions — not just prototypes.",
  email: "viktorzbpe97@gmail.com",
  roles: ["Multiplayer Systems", "Game Architecture", "Performance Optimization", "Cross-Platform"],
  coreExpertise: [
    {
      title: "Multiplayer Systems",
      desc: "Photon (PUN/Fusion), Netcode, matchmaking, synchronization, session flow — I build networked gameplay that holds up under real player loads."
    },
    {
      title: "Game Systems Architecture",
      desc: "Modular design, maintainable codebases, and gameplay frameworks that your team can build on — not fight against."
    },
    {
      title: "Performance Optimization",
      desc: "CPU/GPU profiling, memory management, and mobile optimization so your game runs smooth where it matters most."
    },
    {
      title: "Gameplay Systems",
      desc: "Combat, AI/NPC systems, economy, and progression — the core loops that keep players engaged and coming back."
    },
    {
      title: "Backend Integration",
      desc: "REST APIs, Firebase, real-time data handling — I connect your game to the services that power live operations."
    },
    {
      title: "Cross-Platform Delivery",
      desc: "Mobile (iOS/Android), WebGL, and PC — I ship on the platforms your players are on, with optimized builds for each."
    }
  ],
  whatIBring: [
    "I design and build systems from scratch, not just extend existing ones",
    "I've worked with live products and real player bases — not just prototypes",
    "I prioritize performance, scalability, and maintainability in every system I build",
    "I'm comfortable working across gameplay, networking, and production pipelines",
    "I deliver features and systems in production environments on schedule"
  ],
  selectedHighlights: [
    "Built multiplayer systems supporting large player counts (battle royale / PvP environments)",
    "Developed and shipped games on Steam, mobile, and WebGL",
    "Contributed to products with live users and monetization systems (ads, IAP)",
    "Worked on SDK development for in-game advertising systems"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/viktor-radovanovic",
    portfolio: "https://thechoporgamestudio.wixsite.com/viktor-gd-portfolio",
    website: "https://thechoporgamestudio.wixsite.com/t-a-b"
  },
  languages: [
    { name: "Serbian", level: "Native or Bilingual" },
    { name: "English", level: "Professional Working" }
  ],
  education: [
    {
      institution: "Alfa Univerzitet",
      degree: "Bachelor's degree, Information Technology",
      period: "2018 — 2022"
    },
    {
      institution: "Univerzitet Metropolitan",
      degree: "Bachelor's degree, Information Technology",
      period: "2016 — 2018"
    }
  ],
  certifications: [
    "Peaksel Unity developer internship certification",
    "Ultimate Guide to Game Development with Unity",
    "Learn Professional Pixel Art & Animation for Games",
    "Make Online Games Using Unity's NEW Multiplayer Framework",
    "Presentation Tips for Pitching to Investors"
  ]
};

export const skills = [
  { name: "Unity (2D/3D)", level: 95, category: "Core" },
  { name: "C# / OOP / SOLID", level: 92, category: "Core" },
  { name: "Photon PUN / Fusion", level: 88, category: "Multiplayer" },
  { name: "Netcode for GameObjects", level: 83, category: "Multiplayer" },
  { name: "Game Systems Architecture", level: 90, category: "Architecture" },
  { name: "Matchmaking & Session Flow", level: 85, category: "Multiplayer" },
  { name: "CPU/GPU Profiling", level: 88, category: "Performance" },
  { name: "Memory Management", level: 87, category: "Performance" },
  { name: "Combat & AI/NPC Systems", level: 84, category: "Gameplay" },
  { name: "Firebase & REST APIs", level: 82, category: "Backend" },
  { name: "Mobile (iOS/Android)", level: 90, category: "Platforms" },
  { name: "WebGL & PC", level: 85, category: "Platforms" },
  { name: "Custom Editor Tools", level: 80, category: "Tools" },
  { name: "Dependency Injection", level: 82, category: "Architecture" },
  { name: "Agile Methodologies", level: 85, category: "Tools" },
  { name: "DOTween & UI Animation", level: 83, category: "Gameplay" }
];

export const experience = [
  {
    id: 1,
    role: "Lead Developer",
    company: "The Chopor Studio",
    location: "Serbia",
    period: "Jun 2024 — Present",
    description: "Leading development of a large-scale PvP Battle Royale game focused on competitive multiplayer gameplay.",
    highlights: [
      "Architecting the multiplayer networking stack from the ground up",
      "Implementing authoritative server gameplay systems and player synchronization",
      "Building scalable gameplay and combat systems for high-intensity PvP matches",
      "Managing a team of 10+ developers and artists, coordinating production and technical direction",
      "Designing task pipelines, sprint planning, and production workflows",
      "Optimizing CPU, GPU, and network performance for multiplayer scalability",
      "Creating tools and debugging utilities to streamline development and testing"
    ]
  },
  {
    id: 2,
    role: "Freelance Senior Unity Developer",
    company: "Upwork",
    location: "Niš, Serbia",
    period: "Nov 2023 — Mar 2026",
    description: "Worked on multiple products spanning mobile, SDK development, and WebGL platforms, focusing on performance, scalability, and cross-platform integration.",
    highlights: [
      "iOS Mobile App: Developed Unity as a Library integration within a native iOS (Xcode) application with dynamic 3D scene rendering from server data",
      "Renovi SDK: Built a Unity SDK for immersive in-game advertising across 2D/3D environments with REST API integration and viewability detection",
      "Virtual Marble Soccer: Developed a WebGL betting game with real-time Firebase communication via Node.js backend",
      "Led task planning, workflow organization, and development structure across all projects"
    ]
  },
  {
    id: 3,
    role: "Medior Developer",
    company: "Wasiona Studio (Stick&Rope)",
    location: "Serbia",
    period: "Jul 2022 — Jul 2023",
    description: "Core developer on a PvP arena looter shooter with complex matchmaking and real-time networking systems.",
    highlights: [
      "Designed and implemented multiplayer matchmaking supporting up to 100 players per session",
      "Developed real-time networking with Photon — synchronization, room lifecycle, and session management",
      "Built core gameplay systems: combat, weapons, loot, and progression",
      "Optimized network performance to support ~500 concurrent users during peak hours"
    ]
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Two Desperados",
    location: "Belgrade, Serbia",
    period: "Dec 2020 — Apr 2022",
    description: "Worked on a marble shooter game for mobile and WebGL, focusing on feature development, monetization, and live operations.",
    highlights: [
      "Developed new gameplay features improving player engagement and retention",
      "Implemented and maintained ads management system (rewarded, interstitial) for stable monetization",
      "Integrated In-App Purchases with product configuration, purchase flow, and validation",
      "Performed cross-platform debugging (mobile & WebGL), improving stability"
    ]
  },
  {
    id: 5,
    role: "Junior Developer",
    company: "Exeplay",
    location: "Niš, Serbia",
    period: "Jun 2020 — Nov 2020",
    description: "Built multiple mobile games from scratch across full development cycles — from concept to release on app stores.",
    highlights: [
      "Developed complete game systems from scratch: gameplay mechanics, progression, and core loops",
      "Led implementation of monetization systems including ads and IAP",
      "Created UI animations using Tween libraries and 2D character animations with rigging and sprite sheets",
      "Successfully published multiple mobile games from scratch across gameplay, UI, monetization, and release pipelines"
    ]
  },
  {
    id: 6,
    role: "Junior Developer",
    company: "The Polygun",
    location: "Niš, Serbia",
    period: "Nov 2018 — May 2020",
    description: "Developed Urban Tale — a 2D top-down pixel art game with urban life simulation, released on Steam.",
    highlights: [
      "Designed and implemented scalable NPC systems with behaviors, interactions, and daily routines",
      "Developed and balanced the in-game economy: progression, resources, and player incentives",
      "Optimized camera systems, memory management, and code for performance and stability",
      "Shipped on Steam — achieved ~90% positive user reviews"
    ]
  },
  {
    id: 7,
    role: "Internship Unity Developer",
    company: "Peaksel",
    location: "Niš, Serbia",
    period: "Dec 2017 — Apr 2018",
    description: "First professional team experience, working on 100 Doors Escape From School — a mobile puzzle game.",
    highlights: [
      "Built new levels and level systems for a complex puzzle escape game",
      "Optimized memory usage and enhanced UX functionality",
      "Published on Android & iOS — game reached 5,000,000+ downloads"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "PvP Battle Royale",
    category: "Competitive Multiplayer",
    description: "Large-scale PvP Battle Royale with authoritative server gameplay, player synchronization, and scalable combat systems for high-intensity matches.",
    tech: ["Unity", "Netcode", "C#", "Multiplayer"],
    status: "In Development",
    year: "2024"
  },
  {
    id: 2,
    title: "Renovi SDK",
    category: "SDK / Ad Platform",
    description: "Unity SDK for immersive in-game advertising across 2D/3D environments with REST API integration, ad lifecycle management, and viewability detection.",
    tech: ["Unity", "C#", "REST API", "SDK Design"],
    status: "Shipped",
    year: "2024"
  },
  {
    id: 3,
    title: "Virtual Marble Soccer",
    category: "WebGL Betting Game",
    description: "WebGL betting game with real-time Firebase communication via Node.js backend, data synchronization, and browser-optimized performance.",
    tech: ["Unity", "WebGL", "Firebase", "Node.js"],
    status: "Shipped",
    year: "2024"
  },
  {
    id: 4,
    title: "Ascend the End",
    category: "PvP Arena Looter Shooter",
    description: "Multiplayer PvP arena looter shooter with matchmaking for 100 players, combat systems, loot progression, and ~500 peak concurrent users.",
    tech: ["Unity", "Photon", "C#", "Matchmaking"],
    status: "Shipped",
    year: "2023"
  },
  {
    id: 5,
    title: "Urban Tale",
    category: "Steam PC Game",
    description: "2D top-down pixel art game with urban life simulation — NPC systems, in-game economy, and detailed sprite animations. ~90% positive reviews on Steam.",
    tech: ["Unity", "C#", "Steam", "Pixel Art"],
    status: "Shipped",
    year: "2020"
  },
  {
    id: 6,
    title: "100 Doors Escape From School",
    category: "Mobile Puzzle",
    description: "Complex puzzle escape game with advanced level systems and UX optimization. Published on Android and iOS.",
    tech: ["Unity", "C#", "Android", "iOS"],
    status: "5M+ Downloads",
    year: "2018"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
