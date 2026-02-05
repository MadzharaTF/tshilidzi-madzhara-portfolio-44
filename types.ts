
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentation: ProjectDocs;
}

export interface ProjectDocs {
  overview: string;
  architecture: string;
  results: string;
  challenges: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
