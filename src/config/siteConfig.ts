export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Data Engineering' | 'AI & ML' | 'Web Apps' | 'DSA & Systems';
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
  name: "Hameem Baba",
  role: "Data Engineer & AI / Python Developer",
  tagline: "Turning data into insights and ideas into real-world applications.",
  location: "India",
  status: "Open for Data Engineering & AI Roles",
  contactEmail: "hameembaba08@gmail.com",

  themes: [
    {
      id: "dark-matrix",
      name: "Dark Cyber (Default)",
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
    { name: "GitHub", url: "https://github.com/Hameeem", handle: "@Hameeem", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hameembaba08/", handle: "Hameem Baba", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/hameem8/", handle: "hameem8", icon: "code" },
    { name: "Portfolio Repo", url: "https://github.com/Hameeem/MyPortfolio", handle: "MyPortfolio", icon: "github" },
  ],

  projects: [
    {
      id: "netflix-dashboard",
      title: "Netflix Analytics Dashboard",
      subtitle: "Streamlit & Plotly Interactive Data Analytics",
      description: "Interactive data analytics dashboard built using Python, Streamlit, Pandas, Plotly, and WordCloud to analyze Netflix movies and TV shows datasets.",
      category: "Data Engineering",
      tags: ["Python", "Streamlit", "Plotly", "Pandas", "WordCloud"],
      featured: true,
      link: "https://github.com/Hameeem/Netflix_Dashboard",
      github: "https://github.com/Hameeem/Netflix_Dashboard",
      year: "2024",
      role: "Lead Developer",
      accentColor: "#00ff88",
    },
    {
      id: "dataflowx",
      title: "DataFlowX",
      subtitle: "End-to-End Data Pipeline Architecture",
      description: "Distributed data ingestion and ETL pipeline for processing large-scale datasets using PySpark, Hadoop, and SQL databases.",
      category: "Data Engineering",
      tags: ["PySpark", "Hadoop", "SQL", "ETL", "Python"],
      featured: true,
      link: "https://github.com/Hameeem",
      github: "https://github.com/Hameeem",
      year: "2024",
      role: "Architect & Engineer",
      accentColor: "#00e5ff",
    },
    {
      id: "detective-dank",
      title: "Detective Dank",
      subtitle: "AI-Powered Fact Checking & NLP Assistant",
      description: "An AI-assisted fact-checking application leveraging Natural Language Processing to analyze news veracity and source credibility.",
      category: "AI & ML",
      tags: ["Python", "NLP", "Machine Learning", "Transformers"],
      featured: true,
      link: "https://github.com/Hameeem",
      github: "https://github.com/Hameeem",
      year: "2024",
      role: "AI Developer",
      accentColor: "#ff007f",
    },
    {
      id: "auto-complete-trie",
      title: "Trie Auto-Complete System",
      subtitle: "Prefix-Tree Data Structure Engine",
      description: "Optimized Prefix Tree (Trie) data structure implementation in Python & Jupyter Notebook for high-speed word completion and search indexing.",
      category: "DSA & Systems",
      tags: ["Python", "Algorithms", "Trie Data Structure", "Jupyter"],
      featured: true,
      link: "https://github.com/Hameeem/Auto-Complete-System-Trie-based-",
      github: "https://github.com/Hameeem/Auto-Complete-System-Trie-based-",
      year: "2024",
      role: "Developer",
      accentColor: "#38bdf8",
    },
    {
      id: "arduino-smart-glasses",
      title: "Arduino Smart Glasses",
      subtitle: "Hardware Assistive Device for Visually Impaired",
      description: "Assistive smart glasses powered by Arduino sensors to detect obstacles and provide real-time audio distance feedback.",
      category: "Web Apps",
      tags: ["Arduino", "Embedded C++", "Hardware", "Sensors"],
      featured: false,
      link: "https://github.com/Hameeem",
      github: "https://github.com/Hameeem",
      year: "2023",
      role: "Hardware & Software Dev",
      accentColor: "#fbd38d",
    },
    {
      id: "python-dsa-training",
      title: "Python DSA Master Suite",
      subtitle: "Data Structures & Algorithms Repository",
      description: "Comprehensive repository of LeetCode problem solutions, algorithm implementations, and competitive coding notes.",
      category: "DSA & Systems",
      tags: ["Python", "LeetCode", "Data Structures", "Algorithms"],
      featured: false,
      link: "https://github.com/Hameeem/Python-DSA-training",
      github: "https://github.com/Hameeem/Python-DSA-training",
      year: "2024",
      role: "Maintainer",
      accentColor: "#00ff88",
    },
  ] as Project[],

  experience: [
    {
      year: "2023 — Present",
      role: "Computer Science & Data Science Student",
      company: "University Studies",
      location: "India",
      description: "Specializing in Data Engineering, Distributed Systems, Algorithms, and Machine Learning. Active problem solver on LeetCode.",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Data Structures", "LeetCode"],
    },
    {
      year: "2024",
      role: "Data Engineering & AI Project Developer",
      company: "Independent Projects",
      location: "India",
      description: "Engineered real-world data pipelines (DataFlowX), analytics dashboards (Netflix Dashboard), and AI NLP assistants (Detective Dank).",
      skills: ["Streamlit", "Plotly", "Hadoop", "PySpark", "MySQL", "Docker"],
    },
  ] as ExperienceItem[],

  experiments: [
    {
      id: "particle-mesh",
      title: "Interactive Spring Mesh Physics",
      type: "canvas",
      description: "Move your mouse across the grid to deform vector particles connected by elastic spring forces.",
      tags: ["Canvas API", "Spring Math"],
    },
    {
      id: "matrix-colorizer",
      title: "SVG Matrix Duotone Studio",
      type: "svg",
      description: "Real-time feColorMatrix pipeline transforming graphics into high-contrast cyber duotones.",
      tags: ["SVG Filters", "Color Matrices"],
    },
    {
      id: "synth-bleep",
      title: "WebAudio Synthesizer Node",
      type: "audio",
      description: "Interactive browser audio oscillator generating 8-bit sound effects.",
      tags: ["WebAudio API", "Oscillator"],
    },
  ] as Experiment[],

  articles: [
    {
      id: "building-dataflowx",
      title: "Building End-to-End Data Pipelines with Python & Spark",
      excerpt: "Architecting scalable data engineering pipelines from raw ingestion to clean analytical storage.",
      date: "August 2024",
      readTime: "7 min read",
      tags: ["Data Engineering", "Python", "Spark"],
      link: "https://github.com/Hameeem",
    },
    {
      id: "trie-autocomplete-deep-dive",
      title: "Optimizing Prefix Search with Trie Data Structures",
      excerpt: "How Trie trees achieve O(L) lookup times for instant search completion systems.",
      date: "June 2024",
      readTime: "5 min read",
      tags: ["Data Structures", "Algorithms", "Python"],
      link: "https://github.com/Hameeem",
    },
    {
      id: "leetcode-problem-solving",
      title: "Patterns for Mastering LeetCode & DSA",
      excerpt: "Key strategies for sliding windows, two-pointers, and graph traversals in Python.",
      date: "April 2024",
      readTime: "6 min read",
      tags: ["LeetCode", "DSA", "Python"],
      link: "https://github.com/Hameeem",
    },
  ] as Article[],
};
