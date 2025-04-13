'use client'

import ImageFallback from '@/app/components/ImageFallback'
import { Project } from '@/app/projects/data'

interface ProjectCardProps {
  project: Project;
  isPriority?: boolean;
}

/**
 * Reusable project card component
 * Displays a single project with image, description and links
 */
export default function ProjectCard({ project, isPriority = false }: ProjectCardProps) {
  return (
    <div className="glass-card group hover:scale-105 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <ImageFallback
          src={project.image}
          fallbackSrc={project.fallbackImage}
          alt={project.title}
          style={{ objectPosition: 'center top' }}
          priority={isPriority}
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
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="nav-button text-sm">View Demo</a>
          )}
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="nav-link text-sm">Source Code</a>
        </div>
      </div>
    </div>
  )
}