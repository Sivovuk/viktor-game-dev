export const personalInfo = {
  name: "Viktor Radovanović",
  title: "Game Developer",
  location: "Serbia",
  bio: "With over 8 years of hands-on Unity experience, I help studios and indie teams bring their game ideas to life — from prototype to polished release.",
  email: "viktor@gamedev.rs",
  roles: ["Unity Expert", "Gameplay Architect", "Performance Optimizer", "Multiplayer Specialist"],
  aboutExtended: "I'm a senior Unity developer based in Serbia with a deep passion for crafting interactive experiences. Over the past 8+ years, I've shipped games across mobile, PC, and VR — working with studios ranging from scrappy two-person indie teams to 50+ person production houses. My approach blends clean architecture with pragmatic problem-solving. I believe great games are built on solid foundations: modular code, smart design patterns, and relentless optimization. When I'm not building games, I'm mentoring junior developers, contributing to open-source tools, or prototyping weird mechanics that may never see the light of day.",
  socialLinks: {
    github: "https://github.com/viktorrad",
    linkedin: "https://linkedin.com/in/viktorrad",
    twitter: "https://twitter.com/viktorrad"
  }
};

export const skills = [
  { name: "Unity Engine", level: 95, category: "Core" },
  { name: "C# Programming", level: 92, category: "Core" },
  { name: "Shader Programming (HLSL)", level: 78, category: "Graphics" },
  { name: "3D Math & Physics", level: 85, category: "Core" },
  { name: "Game Architecture", level: 90, category: "Architecture" },
  { name: "Multiplayer / Networking", level: 82, category: "Networking" },
  { name: "Performance Optimization", level: 88, category: "Core" },
  { name: "AR / VR Development", level: 75, category: "Platforms" },
  { name: "UI / UX Implementation", level: 80, category: "Frontend" },
  { name: "CI/CD & Version Control", level: 83, category: "Tools" },
  { name: "AI & Pathfinding", level: 77, category: "Gameplay" },
  { name: "Animation Systems", level: 81, category: "Graphics" }
];

export const experience = [
  {
    id: 1,
    role: "Senior Unity Developer",
    company: "GameForge Studios",
    location: "Remote / Belgrade",
    period: "2021 — Present",
    description: "Leading Unity development for multiple commercial titles across mobile and PC platforms.",
    highlights: [
      "Architected a scalable multiplayer framework used across 3 shipped titles",
      "Reduced load times by 40% through asset bundling and memory optimization",
      "Mentored a team of 4 junior developers, establishing code review practices",
      "Implemented custom ECS-based systems for real-time strategy gameplay"
    ]
  },
  {
    id: 2,
    role: "Unity Developer",
    company: "Pixel Dynamics",
    location: "Novi Sad, Serbia",
    period: "2018 — 2021",
    description: "Core developer on mobile and casual game projects with millions of downloads.",
    highlights: [
      "Developed a mobile puzzle game that reached 1.2M+ downloads on Google Play",
      "Built custom Unity Editor tools that cut level design time by 60%",
      "Optimized rendering pipeline for low-end mobile devices (60fps on budget phones)",
      "Integrated analytics, ads, and IAP systems across multiple titles"
    ]
  },
  {
    id: 3,
    role: "Junior Game Developer",
    company: "IndieWorks Collective",
    location: "Niš, Serbia",
    period: "2016 — 2018",
    description: "Started my professional journey building game prototypes and learning production workflows.",
    highlights: [
      "Prototyped 10+ game concepts, 3 of which moved to full production",
      "Implemented physics-based puzzle mechanics and procedural level generation",
      "Designed and built responsive UI systems using Unity's Canvas framework",
      "Contributed to a VR demo showcased at a regional tech conference"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Shadowfall Arena",
    category: "Multiplayer Action",
    description: "A fast-paced 4v4 arena battler with real-time networking, dynamic ability systems, and competitive matchmaking.",
    tech: ["Unity", "Mirror Networking", "C#", "Shader Graph"],
    status: "Shipped",
    year: "2024"
  },
  {
    id: 2,
    title: "Neon Drift",
    category: "Mobile Racing",
    description: "Synthwave-styled endless racer for mobile with procedural track generation and online leaderboards.",
    tech: ["Unity", "C#", "Google Play Services", "Addressables"],
    status: "Shipped",
    year: "2023"
  },
  {
    id: 3,
    title: "Echoes of Eternity",
    category: "Story-driven RPG",
    description: "Narrative RPG with branching dialogue, turn-based combat, and hand-crafted pixel environments.",
    tech: ["Unity", "Ink Dialogue", "C#", "Custom AI"],
    status: "In Development",
    year: "2025"
  },
  {
    id: 4,
    title: "VR Forge",
    category: "VR Sandbox",
    description: "A VR creation tool letting users sculpt, paint, and animate 3D objects in an immersive workspace.",
    tech: ["Unity", "OpenXR", "C#", "Custom Shaders"],
    status: "Shipped",
    year: "2022"
  },
  {
    id: 5,
    title: "Tiny Realms",
    category: "Casual Strategy",
    description: "Minimalist kingdom builder with resource management, turn-based battles, and cloud saves.",
    tech: ["Unity", "Firebase", "C#", "DOTween"],
    status: "Shipped",
    year: "2021"
  },
  {
    id: 6,
    title: "ProceduralDungeonKit",
    category: "Open Source Tool",
    description: "A modular dungeon generation toolkit for Unity with customizable rulesets and real-time preview.",
    tech: ["Unity", "C#", "Custom Editor", "GitHub"],
    status: "Open Source",
    year: "2023"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
