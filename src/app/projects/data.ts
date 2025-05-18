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
  },
  {
    id: 3,
    title: "Personal Expense Tracker",
    description: "A web-based expense tracking application built with ASP.NET Core MVC that helps users manage their personal finances effectively. Features include user authentication, expense management with CRUD operations, and data visualization using interactive charts for expense analysis.",
    technologies: ["ASP.NET Core MVC", "Entity Framework Core", "PostgreSQL", "Bootstrap 5", "Chart.js", "jQuery"],
    sourceLink: "https://github.com/RickDoyoonKim/personal-expense-tracker",
    image: "https://i.imgur.com/A6ve98G.png",
    fallbackImage: "/images/project-3.png"
  },
  {
    id: 4,
    title: "Voice AI Agent",
    description: "An intelligent voice assistant powered by AI that enables real-time voice conversations. This application leverages speech recognition, large language models, and voice synthesis to create natural conversational experiences. Features include real-time voice processing, seamless conversation handling, and customizable responses based on context.",
    technologies: ["Python", "OpenAI API", "Twilio", "WebSockets", "Speech Recognition", "Text-to-Speech", "FastAPI"],
    demoLink: "https://youtu.be/9lfXzSgRtN4",
    sourceLink: "https://github.com/RickDoyoonKim/voice-ai-agent",
    image: "https://www.twilio.com/_next/image?url=https%3A%2F%2Fdocs-resources.prod.twilio.com%2Fdbba7f790b0ef49d3ccabe0d8c979ddf813749b5a8021d4a59dd6242c3674b62.png&w=1200&q=100&dpl=dpl_Fphqn7EFG4PHB9eV5hFCTCUnotYk",
    fallbackImage: "/images/project-4.png"
  },
  {
    id: 5,
    title: "End-to-end AI Workflow Automation",
    description: "A comprehensive MLOps system that automates the complete machine learning lifecycle. This project integrates data processing, model training, evaluation, and deployment into a seamless workflow. Features include CI/CD pipelines for code changes, automated model retraining upon data drift detection, and efficient model evaluation to ensure continuous improvement.",
    technologies: ["Python", "TensorFlow", "MLOps", "GitHub Actions", "Docker", "Cloud Infrastructure", "CI/CD", "Machine Learning"],
    demoLink: "https://youtu.be/7l_HiHyj7pk",
    sourceLink: "https://github.com/RickDoyoonKim/end-to-end-ai-workflow-automation",
    image: "https://i.imgur.com/iBfUPvq.png",
    fallbackImage: "/images/project-5.png"
  }
];

export default projects;