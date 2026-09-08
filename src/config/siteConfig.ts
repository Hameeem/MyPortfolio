export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Creative Tech' | 'Web Apps' | 'Interactive' | 'Open Source';
  tags: string[];
  featured: boolean;
  link?: string;
  github?: string;
  year: string;
  role: string;
  accentColor: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Experiment {
  id: string;
  title: string;
  type: 'canvas' | 'audio' | 'svg';
  description: string;
  demoUrl?: string;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export const siteConfig = {
  name: "Robb Owen",
  role: "Independent Creative Developer",
  tagline: "Building ambitious, accessible, and delight-infused web experiences.",
  location: "South Wales, UK",
  status: "Available for freelance projects & creative engineering",
  contactEmail: "hello@robbowen.digital",

  themes: [
    {
      id: "dark-matrix",
      name: "Dark Neon (Default)",
      colors: {
        bg: "#070a12",
        text: "#f0f9ff",
        subtext: "#7dd3fc",
        line: "#00ff88",
        fill: "#38bdf8",
        accent: "#00e5ff",
        duo: "#00ff88",
        card: "#0f172a",
      },
    },
    {
      id: "cyberpunk",
      name: "Cyber Neon",
      colors: {
        bg: "#0c0f1d",
        text: "#e2f3f5",
        subtext: "#86a3c3",
        line: "#00ffcc",
        fill: "#1f2942",
        accent: "#ff007f",
        duo: "#00ffcc",
        card: "#161b2e",
      },
    },
    {
      id: "blorenge",
      name: "Sky Blorenge",
      colors: {
        bg: "#f4f9fc",
        text: "#0f1b61",
        subtext: "#526b80",
        line: "#7f00e0",
        fill: "#aadcec",
        accent: "#ff5e7e",
        duo: "#aadcec",
        card: "#ffffff",
      },
    },
    {
      id: "sunset",
      name: "Warm Sunburst",
      colors: {
        bg: "#fff8f0",
        text: "#4a1e1b",
        subtext: "#7c4a43",
        line: "#d94e34",
        fill: "#fbd38d",
        accent: "#ed8936",
        duo: "#fbd38d",
        card: "#ffffff",
      },
    },
  ],

  socials: [
    { name: "Bluesky", url: "https://bsky.app", handle: "@robbowen.digital", icon: "cloud" },
    { name: "GitHub", url: "https://github.com/robb0wen", handle: "@robb0wen", icon: "github" },
    { name: "Instagram", url: "https://instagram.com/robb0wen", handle: "@robb0wen", icon: "instagram" },
    { name: "RSS Feed", url: "/feed.xml", handle: "Subscribe to RSS", icon: "rss" },
  ],

  projects: [
    {
      id: "duotone-canvas",
      title: "Duotone SVG Shader Studio",
      subtitle: "Real-time generative vector filter pipeline",
      description: "An interactive browser tool for applying hardware-accelerated duotone SVG color matrices and matrix transforms to web graphics in real time.",
      category: "Creative Tech",
      tags: ["SVG Filters", "React", "WebGL", "Canvas API"],
      featured: true,
      link: "#",
      github: "https://github.com/robb0wen",
      year: "2024",
      role: "Creator & Lead Dev",
      accentColor: "#aadcec",
    },
    {
      id: "vector-physics",
      title: "Kinetic Drift Engine",
      subtitle: "Physics-based interactive UI micro-interactions",
      description: "Lightweight Javascript physics library for adding playful inertia, cursor tracking, and organic magnetic drift to vector illustrations.",
      category: "Interactive",
      tags: ["TypeScript", "Physics Engine", "Framer Motion"],
      featured: true,
      link: "#",
      github: "https://github.com/robb0wen",
      year: "2024",
      role: "Maintainer",
      accentColor: "#fbd38d",
    },
    {
      id: "accessible-design-system",
      title: "Vivid Design Token Suite",
      subtitle: "High-contrast, WCAG AAA compliant web components",
      description: "A comprehensive component library combining bold retro-modern aesthetics with strict accessibility standards and dynamic screen-reader support.",
      category: "Web Apps",
      tags: ["Next.js", "Tailwind CSS", "ARIA", "Radix UI"],
      featured: true,
      link: "#",
      github: "https://github.com/robb0wen",
      year: "2023",
      role: "Architect",
      accentColor: "#a7f3d0",
    },
    {
      id: "retro-sound-synth",
      title: "WebAudio MicroSynth",
      subtitle: "Browser-based 8-bit sound fx generator",
      description: "A nostalgic WebAudio API synthesizer for generating micro UI sound effects, retro bleeps, and interactive audio feedback.",
      category: "Open Source",
      tags: ["Web Audio API", "JavaScript", "Audio Worklets"],
      featured: false,
      link: "#",
      github: "https://github.com/robb0wen",
      year: "2023",
      role: "Creator",
      accentColor: "#ff007f",
    },
  ] as Project[],

  experience: [
    {
      year: "2020 — Present",
      role: "Independent Creative Developer",
      company: "Robb Owen Digital",
      location: "South Wales",
      description: "Partnering with design agencies, startups, and institutions to craft bespoke interactive sites, custom SVG animations, and high-impact web apps.",
      skills: ["React/Next.js", "SVG Animation", "TypeScript", "Tailwind CSS", "Creative Tech"],
    },
    {
      year: "2017 — 2020",
      role: "Lead Front-End Engineer",
      company: "Apex Design Studio",
      location: "Cardiff, UK",
      description: "Architected component systems and spearheaded interactive motion guidelines for international clients across media and finance.",
      skills: ["JavaScript (ES6+)", "UI Motion", "Design Systems", "Web Performance"],
    },
    {
      year: "2014 — 2017",
      role: "Interactive Developer",
      company: "Digital Crafts Co.",
      location: "Bristol, UK",
      description: "Built experimental canvas installations, responsive web applications, and immersive brand microsites.",
      skills: ["HTML5 Canvas", "CSS Animations", "UX Prototyping"],
    },
  ] as ExperienceItem[],

  experiments: [
    {
      id: "particle-mesh",
      title: "Interactive Spring Mesh",
      type: "canvas",
      description: "Move your mouse across the canvas to distort an interconnected lattice of spring-loaded vector particles.",
      tags: ["Canvas API", "Spring Physics"],
    },
    {
      id: "duotone-tester",
      title: "SVG Matrix Colorizer",
      type: "svg",
      description: "Live feColorMatrix playground demonstrating two-tone image maps in real-time.",
      tags: ["SVG Filters", "Color Science"],
    },
    {
      id: "retro-bleep",
      title: "Cursor Sound Trigger",
      type: "audio",
      description: "Hover over interactive nodes to produce pitch-shifted WebAudio tones.",
      tags: ["WebAudio API", "Synthesizer"],
    },
  ] as Experiment[],

  articles: [
    {
      id: "svg-vector-physics",
      title: "Making Vector Avatars Feel Alive with Mouse Inertia",
      excerpt: "How to use linear interpolation (lerp) and trigonometry to give SVG illustrations fluid head-tilt and eye-tracking movement.",
      date: "August 2024",
      readTime: "6 min read",
      tags: ["Creative Code", "SVG", "Math"],
      link: "#",
    },
    {
      id: "bold-yet-accessible",
      title: "Designing Bold Retro UIs Without Sacrificing WCAG Standards",
      excerpt: "Combining high-contrast border lines, duotone color palettes, and full keyboard navigation accessibility.",
      date: "May 2024",
      readTime: "8 min read",
      tags: ["Accessibility", "CSS", "Design Systems"],
      link: "#",
    },
    {
      id: "building-digital-craftsmanship",
      title: "The Art of Web Micro-Interactions",
      excerpt: "Small details that transform standard web pages into memorable digital experiences.",
      date: "January 2024",
      readTime: "5 min read",
      tags: ["UX", "Animation", "Web Dev"],
      link: "#",
    },
  ] as Article[],
};
