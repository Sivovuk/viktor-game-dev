export const personalInfo = {
  name: "Viktor Radovanović",
  title: "Unity Developer | C# Programmer | Freelance Game Development Specialist",
  shortTitle: "Game Developer",
  location: "Niš, Serbia",
  phone: "+381645413549",
  bio: "With over 8 years of hands-on Unity experience, I help studios and indie teams bring their game ideas to life — from prototype to polished release. I specialize in creating scalable, optimized, and visually engaging gameplay systems across 2D, 3D, mobile, and WebGL platforms.",
  email: "viktorzbpe97@gmail.com",
  roles: ["Unity Expert", "C# Programmer", "Multiplayer Specialist", "Mobile & WebGL"],
  aboutExtended: "Whether it's building smooth UI/UX, integrating multiplayer features, or optimizing for performance on mobile, I bring deep technical expertise and production-ready solutions. I'm passionate about building fun, performant, and maintainable games. If you're looking for a Unity developer who can jump into your project and deliver high-quality results, let's talk!",
  whatIOffer: [
    "Fast and clean implementation of gameplay features or prototypes",
    "Optimization for performance and scalability",
    "Reliable remote collaboration with clear communication",
    "End-to-end delivery: mechanics, systems, polish, and deployment"
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
  { name: "Design Patterns & SOA", level: 88, category: "Architecture" },
  { name: "Photon PUN / Fusion", level: 85, category: "Multiplayer" },
  { name: "Netcode for GameObjects", level: 80, category: "Multiplayer" },
  { name: "Firebase & REST APIs", level: 82, category: "Backend" },
  { name: "Performance Optimization", level: 90, category: "Core" },
  { name: "Mobile Profiling (CPU/GPU)", level: 87, category: "Optimization" },
  { name: "UI/UX & Animation", level: 85, category: "Frontend" },
  { name: "Addressables & Asset Mgmt", level: 83, category: "Optimization" },
  { name: "Custom Editor Tools", level: 80, category: "Tools" },
  { name: "Dependency Injection", level: 82, category: "Architecture" },
  { name: "Unity Test Framework", level: 78, category: "Tools" },
  { name: "Android / iOS / WebGL", level: 90, category: "Platforms" },
  { name: "Git / Jira / Trello", level: 88, category: "Tools" },
  { name: "DOTween & Animations", level: 85, category: "Frontend" }
];

export const experience = [
  {
    id: 1,
    role: "Senior Unity Developer",
    company: "The Chopor Studio",
    location: "Niš, Serbia",
    period: "Nov 2023 — Present",
    description: "Leading Unity development across multiple commercial projects including mobile apps, SDK development, and WebGL betting games.",
    highlights: [
      "iOS Mobile App: Created a Unity library imported into Xcode, displaying 3D scene elements based on server data",
      "Renovi SDK for Ads: Built an SDK package for immersive ads in 2D/3D games with REST API integration, ad mechanics, and player viewing detection",
      "Planned and organized task flow, collaborating closely with backend developers for optimized SDK delivery",
      "Virtual Marble Soccer: Developed a WebGL betting game communicating with Firebase through Node.js server"
    ]
  },
  {
    id: 2,
    role: "Medior Unity Developer",
    company: "Wasiona Studio (Stick&Rope)",
    location: "Serbia",
    period: "Jul 2022 — Jul 2023",
    description: "Core developer on Ascend the End, a multiplayer game with complex matchmaking and networking systems.",
    highlights: [
      "Designed and implemented a robust multiplayer matchmaking system for up to 100 players",
      "System architecture utilized by over 500 active users during peak hours",
      "Implemented new features, game mechanics, and network systems using Photon"
    ]
  },
  {
    id: 3,
    role: "Junior Unity Developer",
    company: "Two Desperados",
    location: "Belgrade, Serbia",
    period: "Dec 2020 — Apr 2022",
    description: "Worked on Woka Woka, a marble shooter game for mobile and WebGL platforms.",
    highlights: [
      "Developed new gameplay features and managed the ads integration system",
      "Handled debugging, Unity UI, IAP, and database management",
      "Successfully published new releases on mobile and WebGL platforms"
    ]
  },
  {
    id: 4,
    role: "Junior Unity Developer",
    company: "Exeplay",
    location: "Niš, Serbia",
    period: "Jun 2020 — Nov 2020",
    description: "Built multiple mobile games from scratch including Unblock & Roll The Ball, Balloon Sky Rise Adventure, Fall Guys 3D Slide Running, and Coin Wars.",
    highlights: [
      "Created games from scratch through to publishing on app stores",
      "Handled ads integration, IAP, UI, debugging, and database systems",
      "Worked on UI animations using DOTween, 2D character animations with rigging and sprite sheets"
    ]
  },
  {
    id: 5,
    role: "Freelance Unity Developer",
    company: "The Polygun",
    location: "Niš, Serbia",
    period: "Nov 2018 — May 2020",
    description: "Developed Urban Tale — a 2D top-down pixel art game with elements of urban life, available on Steam.",
    highlights: [
      "Built NPC systems, camera optimization, in-game economy, and memory/code optimization",
      "Created the game from scratch, including UI animations and 2D character sprite animations",
      "Published the game on Steam — achieved 90% positive reviews"
    ]
  },
  {
    id: 6,
    role: "Internship Unity Developer",
    company: "Peaksel",
    location: "Niš, Serbia",
    period: "Dec 2017 — Apr 2018",
    description: "First professional team experience, working on 100 Doors Escape From School — a puzzle game for mobile.",
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
    title: "Renovi SDK for Ads",
    category: "SDK Development",
    description: "An SDK package for immersive ads in 2D and 3D games. Uses REST API for connecting and downloading ads, with mechanics for displaying ads and player viewing detection.",
    tech: ["Unity", "C#", "REST API", "SDK Design"],
    status: "Shipped",
    year: "2024"
  },
  {
    id: 2,
    title: "Virtual Marble Soccer",
    category: "WebGL Betting Game",
    description: "A WebGL betting game built in Unity communicating with Firebase database through a Node.js server for real-time data.",
    tech: ["Unity", "WebGL", "Firebase", "Node.js"],
    status: "Shipped",
    year: "2024"
  },
  {
    id: 3,
    title: "Ascend the End",
    category: "Multiplayer Game",
    description: "Multiplayer game with a robust matchmaking system supporting up to 100 concurrent players, with 500+ active users during peak hours.",
    tech: ["Unity", "Photon", "C#", "Matchmaking"],
    status: "Shipped",
    year: "2023"
  },
  {
    id: 4,
    title: "Woka Woka",
    category: "Mobile / WebGL",
    description: "A marble shooter game for mobile and WebGL platforms with ads integration, IAP, and live-service features.",
    tech: ["Unity", "C#", "Mobile", "WebGL", "IAP"],
    status: "Shipped",
    year: "2022"
  },
  {
    id: 5,
    title: "Urban Tale",
    category: "Steam PC Game",
    description: "A 2D top-down pixel art game with elements of urban life. Features NPC systems, in-game economy, and detailed sprite animations. Available on Steam with 90% positive reviews.",
    tech: ["Unity", "C#", "Steam", "Pixel Art"],
    status: "Shipped",
    year: "2020"
  },
  {
    id: 6,
    title: "100 Doors Escape From School",
    category: "Mobile Puzzle",
    description: "A complex puzzle escape game for mobile with advanced level systems and UX optimization. Reached 5,000,000+ downloads on Android and iOS.",
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
