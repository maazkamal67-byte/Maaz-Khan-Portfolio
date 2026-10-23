import { Project, Service, Testimonial, SkillCategory } from "../types";

export const ALL_PROJECTS: Project[] = [
  {
    id: "elite-suite",
    title: "Elite Business Suite",
    subtitle: "Enterprise Cloud Infrastructure & Management Dashboard",
    devTime: "120+ Hours",
    scaleScore: "9.9/10",
    lastUpdated: "2026",
    deploymentStatus: "Live Production",
    statusBadge: "Verified Deployed",
    benchmarkFps: 120,
    lighthouseScore: 100,
    description: "Production cloud operations hub featuring real-time infrastructure metrics, responsive telemetry monitors, and an ultra-fast virtual DOM architecture. Engineered specifically for high-throughput enterprise visualization with mathematical precision.\n\nDeveloping this suite required stripping down heavy third-party dependencies and creating an ultra-lean component lattice. The interface achieves instant sub-second paint cycles, responsive data grids, and strict type safety across every interactive node.",
    link: "https://elite-business-suite-851803530549.asia-southeast1.run.app/",
    tags: ["React 19", "Analytics", "Enterprise UI", "TypeScript"],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "WebSockets"],
    features: [
      "Sub-1.2s Real-time Canvas Telemetry Streaming",
      "Dynamic Glassmorphic HUD and High-Contrast Contrast",
      "Zero-latency State Mutation & Session Persistence",
      "Custom Virtual DOM Subtree Memoization Engine"
    ],
    metrics: [
      { label: "Rendering Latency", value: "< 1.0ms" },
      { label: "Lighthouse Score", value: "100 / 100" },
      { label: "First Contentful Paint", value: "0.6s" }
    ],
    architectureNotes: "Decoupled global telemetry bus from presentation layers using custom selective subscriber hooks to eliminate unnecessary component redraws."
  },
  {
    id: "portfolio-hud",
    title: "Maaz Khan Architecture Portfolio",
    subtitle: "Modern Space-Black HUD & Interactive Developer Sandbox",
    devTime: "80+ Hours",
    scaleScore: "9.8/10",
    lastUpdated: "2026",
    deploymentStatus: "Live Production",
    statusBadge: "Active Edge",
    benchmarkFps: 120,
    lighthouseScore: 99,
    description: "Next-generation personal portfolio and architecture sandbox showcasing high-density engineering metrics, real-time command palette (Cmd+K), interactive CLI terminal, and live cost estimator.\n\nBuilt entirely with strict TypeScript and modern Tailwind styling. Features zero template lag, smooth motion animations, and responsive fluid geometric layouts tailored for desktop and mobile viewports.",
    link: "https://maaz-khan-portfolio-851803530549.asia-southeast1.run.app/",
    tags: ["React 19", "Tailwind CSS", "Motion", "Architecture"],
    techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "Vite"],
    features: [
      "Interactive Developer CLI Terminal & Command HUD",
      "Live Dynamic Project Cost & Timeline Estimator",
      "Interactive Codebase Architecture Inspector",
      "WCAG AA Compliant High-Contrast Aesthetic"
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Time to Interactive", value: "0.8s" },
      { label: "Type Safety", value: "100% Strict" }
    ],
    architectureNotes: "Strict CSS-first atomic design system paired with tree-shaken Lucide vectors and lazy component rendering."
  },
  {
    id: "aura-ai",
    title: "AURA Generative AI Interface",
    subtitle: "Context-Aware Agentic Generative UI & LLM Workspace",
    devTime: "140+ Hours",
    scaleScore: "9.9/10",
    lastUpdated: "2026",
    deploymentStatus: "Available on Fiverr",
    statusBadge: "Client Offering",
    benchmarkFps: 120,
    lighthouseScore: 98,
    description: "Autonomous AI Chatbot Interface powered by Google AI Studio integration framework. Context-aware conversational agent with semantic routing and real-time streaming generative UI.\n\nAURA seamlessly translates raw Large Language Model streams into fluid, structured React architectures. As output is dynamically buffered, the interface instantly evaluates semantic context and interpolates the appropriate UI micro-components on the fly.",
    link: "https://www.fiverr.com/s/m582w17",
    tags: ["Google AI Studio", "Generative UI", "Gemini 2.5", "LLM"],
    techStack: ["React 19", "TypeScript", "Google GenAI SDK", "Tailwind CSS", "Motion"],
    features: [
      "Dynamic System Prompt Optimization",
      "Streaming Generative UI Component Hydration",
      "Encrypted Local Chat History & State Caching",
      "Multi-turn Semantic Routing with Fallback Safeguards"
    ],
    metrics: [
      { label: "Streaming TTFB", value: "180ms" },
      { label: "Token Processing", value: "95 tokens/s" },
      { label: "Integration", value: "Google AI Studio" }
    ],
    architectureNotes: "Custom server-sent streaming parser that maps JSON chunks to dynamically compiled React UI primitives in real-time."
  },
  {
    id: "nexus-system",
    title: "Modular SaaS Architecture Framework",
    subtitle: "Type-Safe Component Library & High-Density UI System",
    devTime: "95+ Hours",
    scaleScore: "9.7/10",
    lastUpdated: "2026",
    deploymentStatus: "Available on Fiverr",
    statusBadge: "Client Offering",
    benchmarkFps: 120,
    lighthouseScore: 100,
    description: "Modular enterprise UI component library engineered to accelerate SaaS development. Includes custom data grids, keyboard navigation HUDs, accessible modal systems, and responsive theme layers.",
    link: "https://www.fiverr.com/s/m582w17",
    tags: ["Design System", "Enterprise UI", "TypeScript", "Performance"],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix Primitives"],
    features: [
      "Zero-overhead Cross-Component Event Dispatcher",
      "Sandboxed Styling with CSS Custom Properties",
      "Dynamic Lazy Route Code Splitting",
      "Accessible WCAG AA Contrast Ratios"
    ],
    metrics: [
      { label: "Component Count", value: "150+" },
      { label: "Load Time", value: "< 1.2s" },
      { label: "Reliability", value: "100%" }
    ],
    architectureNotes: "Atomic design structure with pure functional components and strict zero-side-effect rendering hooks."
  }
];

export const ALL_SERVICES: Service[] = [
  {
    id: "ai-website-dev",
    title: "AI Website Design & Development",
    tagline: "High-Performance Modern Web Apps with Google AI Studio",
    description: "I architect and develop ultra-responsive, visually refined web applications leveraging modern React, TypeScript, and Google AI Studio capabilities. The result is a lightning-fast digital presence built to convert, scale, and captivate visitors.\n\nEvery interface is built from scratch with clean typography, responsive layout dynamics, and custom micro-interactions that elevate your brand.",
    percent: "99%",
    deliverables: [
      "Custom Pixel-Perfect React 19 Frontend Architecture",
      "Google AI Studio & Gemini Model Integration",
      "Sub-1.5s Load Time Performance Optimization",
      "Complete Responsive Design for Mobile & Desktop",
      "Clean, Documented & Maintainable TypeScript Codebase"
    ],
    techUsed: ["React 19", "TypeScript", "Google AI Studio", "Tailwind CSS", "Motion"],
    turnaroundTime: "3-5 Days"
  },
  {
    id: "google-idx-workflow",
    title: "Full-Stack Cloud Development (Google IDX)",
    tagline: "Cloud Workspaces, Multi-Tenant Backends & Fast Deployment",
    description: "End-to-end full-stack web application development executed inside Google IDX cloud environments. Seamlessly integrating Node.js backends, RESTful APIs, and secure database connections for robust production delivery.\n\nEnsures zero environment mismatches between development and final deployment on Cloud Run or modern cloud hosts.",
    percent: "98%",
    deliverables: [
      "Full-Stack Architecture Setup in Google IDX",
      "Node.js / Express REST API Development",
      "Persistent Data Layer & State Management",
      "Continuous Deployment to Google Cloud Run",
      "Environment Variables & Security Hardening"
    ],
    techUsed: ["Google IDX", "Node.js", "Express", "Cloud Run", "TypeScript"],
    turnaroundTime: "4-7 Days"
  },
  {
    id: "performance-engine",
    title: "Performance & Core Web Vitals Optimization",
    tagline: "Lighthouse 100/100 & Sub-1.5s Boot Speed Guarantee",
    description: "Speed is structurally embedded into the fundamental design. I implement aggressive asset minification, lazy loading strategies, and optimal edge cache configurations to deliver sub-1.5s time-to-interactive load times.\n\nScrutinizes First Contentful Paint (FCP) and Cumulative Layout Shift (CLS) thresholds, securing validated 99-100 Lighthouse benchmark scores.",
    percent: "100%",
    deliverables: [
      "Guaranteed Sub-1.5s Time-to-Interactive (TTI)",
      "Zero Cumulative Layout Shift (CLS = 0.00)",
      "Lighthouse 99-100 Benchmark Scores Across All Metrics",
      "Optimized Asset Tree-Shaking & Bundle Compression"
    ],
    techUsed: ["Web Vitals", "Edge Caching", "PostCSS", "Web Workers"],
    turnaroundTime: "2-3 Days",
    showGauge: true
  },
  {
    id: "enterprise-ui",
    title: "Enterprise UX/UI & Design Systems",
    tagline: "Design Systems, High-Density Dashboards & Modern SaaS",
    description: "Construction of scalable, robust design systems and custom component libraries meticulously engineered for corporate applications. The visual identity language strictly enforces a high-contrast minimalist, luxury aesthetic prioritizing deep slate canvases and pristine geometric dividers.\n\nTypography tracks, baseline alignments, and whitespace ratios are standardized through CSS variables to broadcast a premium, unified brand presence.",
    percent: "96%",
    deliverables: [
      "Custom Enterprise Design System & Token Library",
      "High-Density Data Visualizations with Recharts & Canvas",
      "Keyboard Navigation HUDs & Command Palettes (Cmd+K)",
      "Accessible WCAG AA Compliant Contrast & Spacing"
    ],
    techUsed: ["Tailwind CSS", "Recharts", "Lucide Icons", "Radix Primitives"],
    turnaroundTime: "5-8 Days"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Core architectural disciplines for high-frequency virtual DOM operations and fluid UX.",
    skills: [
      { name: "React 19 / 18", level: 98, tag: "Expert" },
      { name: "TypeScript (Strict)", level: 96, tag: "Expert" },
      { name: "Tailwind CSS v4", level: 99, tag: "Master" },
      { name: "Motion & Animation", level: 94, tag: "Advanced" },
      { name: "Next.js / Vite SPA", level: 95, tag: "Expert" },
      { name: "State Architecture", level: 97, tag: "Expert" }
    ]
  },
  {
    title: "AI & Model Integration",
    iconName: "Cpu",
    description: "Connecting modern LLM endpoints to real-time generative interfaces.",
    skills: [
      { name: "Google AI Studio (Gemini)", level: 97, tag: "Expert" },
      { name: "Prompt Engineering", level: 96, tag: "Expert" },
      { name: "Generative UI Streaming", level: 94, tag: "Advanced" },
      { name: "Semantic Routing & Context", level: 90, tag: "Advanced" },
      { name: "Google IDX Workspaces", level: 98, tag: "Master" },
      { name: "Context Window Tuning", level: 92, tag: "Advanced" }
    ]
  },
  {
    title: "Performance & Systems",
    iconName: "Zap",
    description: "Ensuring sub-millisecond execution and flawless edge delivery.",
    skills: [
      { name: "Lighthouse 100/100 Tuning", level: 100, tag: "Master" },
      { name: "Sub-1.2s FCP Optimizations", level: 99, tag: "Master" },
      { name: "WebSockets & Telemetry", level: 92, tag: "Advanced" },
      { name: "Node.js & Express REST", level: 90, tag: "Proficient" },
      { name: "Bundle Tree-Shaking", level: 96, tag: "Expert" },
      { name: "CI/CD & Cloud Run", level: 91, tag: "Advanced" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    client: "Fiverr Pro Client",
    role: "Verified Enterprise Buyer",
    company: "Fiverr Platform Order",
    avatar: "FP",
    comment: "Maaz Khan is exceptionally fast and precise. He delivered our modern React & TypeScript dashboard ahead of schedule with flawless responsiveness and sub-second load times.",
    rating: 5,
    project: "Elite Business Suite"
  },
  {
    id: "2",
    client: "Tech Founder",
    role: "Founder & Product Lead",
    company: "Fiverr Client Engagement",
    avatar: "TF",
    comment: "The AI interface Maaz built using Google AI Studio and Gemini models transformed our prototype into a production-ready application. Clean code, zero bugs, and great communication.",
    rating: 5,
    project: "AI Web Application"
  },
  {
    id: "3",
    client: "Digital Agency Lead",
    role: "Engineering Director",
    company: "Contract Delivery",
    avatar: "DA",
    comment: "Exceptional eye for high-contrast luxury UI design combined with rock-solid TypeScript architecture. He sets a very high standard for modern web craftsmanship.",
    rating: 5,
    project: "Custom Web Application"
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Lead Frontend & AI Web Developer",
    company: "Freelance & Fiverr Pro Services",
    period: "2024 - Present",
    location: "Remote / Global",
    description: "Designing and building high-performance React applications, Google AI Studio integrations, and custom responsive interfaces for international clients with 100% 5-star delivery satisfaction.",
    highlights: [
      "Built 25+ production-grade React & TypeScript software modules",
      "Achieved sub-1.5s load times across client deployments",
      "Engineered streaming generative UI design systems powered by Google AI Studio"
    ]
  },
  {
    role: "React & Cloud Web Developer",
    company: "Google IDX & Cloud Projects",
    period: "2025 - 2026",
    location: "Remote",
    description: "Developing modern web architectures and interactive dashboards in Google IDX cloud environments with deployment on Google Cloud Run.",
    highlights: [
      "Engineered high-performance real-time telemetry dashboards and interactive sandboxes",
      "Implemented strict TypeScript type systems with 0% runtime type errors",
      "Integrated secure API communication and dynamic responsive layouts"
    ]
  }
];
