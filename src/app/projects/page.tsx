'use client'

import ImageFallback from '../components/ImageFallback'

// Project data with Imgur image URLs
const projects = [
  {
    id: 1,
    title: "Vibe Coding Webpage",
    description: "A modern, responsive personal portfolio website built with Next.js and React. Features include dynamic page transitions, interactive network background animation, and a clean, minimalist design. The site showcases professional experience and projects while maintaining optimal performance and accessibility.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Animation"],
    demoLink: "https://mcp-ai-web.vercel.app/",
    sourceLink: "https://github.com/RickDoyoonKim/MCP_AI_WEB",
    image: "https://i.imgur.com/SU60KQu.jpg",
    fallbackImage: "/images/project-1.png"
  }
  // ... other projects can be added here
]

export default function Projects() {
  return (
    <section className="py-12">
      <div className="glass-card p-8">
        <h2 className="display-5 text-center mb-8 gradient-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
                <ImageFallback
                  src={project.image}
                  fallbackSrc={project.fallbackImage}
                  alt={project.title}
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="nav-button text-sm">View Demo</a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="nav-link text-sm">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}