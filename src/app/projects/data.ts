/**
 * Project information data source
 * Contains details for all portfolio projects
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  sourceLink: string;
  image: string;
  fallbackImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vibe Coding Webpage",
    description: "A modern, responsive personal portfolio website built with Next.js and React. Features include dynamic page transitions, interactive network background animation, and a clean, minimalist design. The site showcases professional experience and projects while maintaining optimal performance and accessibility.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Animation"],
    demoLink: "https://mcp-ai-web.vercel.app/",
    sourceLink: "https://github.com/RickDoyoonKim/MCP_AI_WEB",
    image: "https://i.imgur.com/qlDNXLh.png",
    fallbackImage: "/images/project-1.png"
  },
  {
    id: 2,
    title: "News Summary Service",
    description: "AI-powered web application that automatically summarizes web content from URLs. Features include content extraction, GPT-based summarization, keyword identification, and local storage for summary history.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenAI GPT", "Zustand"],
    sourceLink: "https://github.com/RickDoyoonKim/news-summary-app",
    image: "https://i.imgur.com/vYVzZKe.png",
    fallbackImage: "/images/project-2.png"
  }
];

export default projects;