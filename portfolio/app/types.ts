// Define the project type
export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: string;
    github?: string;
  }