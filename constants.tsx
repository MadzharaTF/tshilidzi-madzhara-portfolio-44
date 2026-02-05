
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Tshilidzi Faith Madzhara",
  role: "AI Prompt Engineering Intern",
  email: "iedziey@icloud.com",
  phone: "0677218406",
  location: "Johannesburg, ZA",
  bio: "Passionate AI Prompt Engineering Intern dedicated to mastering the art and science of generative AI. Currently focused on refining large language model outputs, exploring complex prompt architectures, and learning to bridge the gap between human intent and machine execution through structured data analysis and iterative experimentation.",
  brandingStatement: "Learning to harness the power of Generative AI through precision prompting and data-driven iteration.",
  summary: "An aspiring AI specialist currently interning in prompt development and data analysis. Dedicated to learning high-impact model optimization and effective AI communication strategies to solve real-world problems.",
  social: {
    github: "https://github.com/MadzharaTF",
    linkedin: "https://www.linkedin.com/in/faith-madzhara-85ab94221",
    twitter: "https://twitter.com"
  },
  education: [
    {
      institution: "Richfield",
      degree: "Diploma in Information Technology",
      period: "2022 - 2024"
    },
    {
      institution: "Richfield",
      degree: "CompTIA A+",
      period: "2021"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "p3",
    title: "Talu OS",
    category: "Neural Intelligence",
    description: "Autonomous conversational engine built for high-stakes information retrieval and logic-driven task automation.",
    longDescription: "Talu is a next-generation AI interface that operates within professional digital ecosystems. It leverages a proprietary RAG (Retrieval-Augmented Generation) pipeline to process high-velocity data streams, providing mission-critical insights with near-zero latency.",
    techStack: ["RAG Architecture", "Vector Synthesis", "NLP", "Python"],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1510511459019-5dee997ddfef?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    ],
    demoUrl: "https://m365.cloud.microsoft/chat/?titleId=T_73a29d16-6cdd-3955-7885-a0b463237406&source=embedded-builder",
    githubUrl: "https://github.com/MadzharaTF",
    documentation: {
      overview: "Autonomous intelligence hub for enterprise-grade data synthesis.",
      architecture: "Vector-embedded neural pipeline with strictly governed safety filters and context-aware reasoning modules.",
      results: "30% efficiency gain in complex query resolution with verified 98% factual grounding accuracy.",
      challenges: "Mitigating high-frequency context drift and optimizing low-latency inference on dense datasets."
    }
  },
  {
    id: "p4",
    title: "Talu Matrix Assistance",
    category: "Educational AI",
    description: "Intelligent academic navigator for Grade 11 & 12 students to optimize high school performance and university transitions.",
    longDescription: "Talu Matrix Assistance is an AI-powered student advisor designed to bridge the information gap between high school curriculum and higher education. It provides personalized career path mapping, university entrance requirement analysis (APS calculation), and automated application tracking to ensure a seamless varsity transition for South African learners.",
    techStack: ["LLM Frameworks", "Vector Knowledge Base", "Educational Data", "React"],
    images: [
      "https://images.unsplash.com/photo-1523050335392-9bc5675e7df5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
    ],
    demoUrl: "https://arena-berry-21220384.figma.site/",
    githubUrl: "https://github.com/MadzharaTF",
    documentation: {
      overview: "End-to-end guidance platform for secondary and tertiary educational alignment.",
      architecture: "Knowledge-graph integration coupled with RAG pipelines to deliver real-time career guidance and academic performance tracking based on local university entrance criteria.",
      results: "Streamlined varsity application processes for early-phase users, reducing requirement confusion by 45%.",
      challenges: "Aggregating highly variable university admission point scores (APS) and faculty-specific requirements into a unified logical schema."
    }
  },
  {
    id: "p1",
    title: "Sentinel Vision",
    category: "Predictive Analytics",
    description: "Deep learning analytics platform tracking sentiment trajectories and emotional shifts across global data streams.",
    longDescription: "A high-fidelity dashboard engineered to analyze high-frequency linguistic data. It identifies subtle market trends and emotional vectors using state-of-the-art Transformer models, visualizing findings through neon-cyan abstract clusters.",
    techStack: ["PyTorch", "HuggingFace", "BigData", "Pandas"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&q=80&w=1200"
    ],
    demoUrl: "https://word-whisperer-dash.vercel.app/",
    githubUrl: "https://github.com/MadzharaTF",
    documentation: {
      overview: "Tactical NLP suite for automated sentiment forecasting and narrative tracking.",
      architecture: "Ensemble Transformer architecture with real-time telemetry ingestion and predictive scoring hooks.",
      results: "91.5% accuracy in complex sentiment classification across multi-source streaming environments.",
      challenges: "Processing sarcastic and idiomatic data packets with high contextual precision."
    }
  },
  {
    id: "p2",
    title: "Career Architect",
    category: "Generative Apps",
    description: "Optimization engine for market-driven professional material synthesis utilizing large-scale data analysis.",
    longDescription: "An AI-powered professional branding system that decrypts job-market requirements to optimize candidate materials for high-tech recruitment pipelines.",
    techStack: ["Next.js", "Generative AI", "Prisma", "Market APIs"],
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
    ],
    demoUrl: "https://apt-aptitude.vercel.app/",
    githubUrl: "https://github.com/MadzharaTF",
    documentation: {
      overview: "Full-stack optimization utility leveraging market-specific data APIs.",
      architecture: "Decoupled frontend-backend architecture integrated with serverless AI functions for recursive material refinement.",
      results: "Successfully optimized over 1,500 candidate profiles with measurable engagement increases.",
      challenges: "Ensuring high-resolution keyword density while maintaining natural professional tone."
    }
  }
];

export const SKILLS: Skill[] = [
  {
    category: "AI Engineering",
    items: [
      { name: "Prompt Synthesis", level: 98 },
      { name: "Neural Pipeline", level: 88 },
      { name: "Vector Search", level: 92 },
      { name: "Model Tuning", level: 85 }
    ]
  },
  {
    category: "Technical Systems",
    items: [
      { name: "Network Diagnostics", level: 96 }
    ]
  }
];

export const CAREER_HISTORY: Experience[] = [
  {
    role: "AI Prompt Engineering Intern",
    company: "CAPACITI Academy",
    period: "2025 - Present",
    description: [
      "Learning to architect enterprise prompt libraries and recursive data models for advanced analytical ecosystems.",
      "Assisting in system output optimization via statistical A/B testing, gaining hands-on experience in task accuracy refinement.",
      "Exploring the development of context-aware AI agents for high-frequency data ingestion and autonomous reporting."
    ]
  },
  {
    role: "Fixedline Assurance Specialist",
    company: "Telkom",
    period: "2024 - 2025",
    description: [
      "Executed technical assurance and high-fidelity diagnostics for fixed-line infrastructure.",
      "Optimized signal performance and resolved complex network hardware failures through data-driven troubleshooting.",
      "Managed mission-critical connectivity for business sectors, maintaining 99.9% operational reliability."
    ]
  }
];
