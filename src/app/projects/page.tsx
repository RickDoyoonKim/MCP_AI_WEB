'use client'

import ProjectCard from '@/app/components/ProjectCard'
import projects from './data'

/**
 * Projects showcase page component
 * Displays all portfolio projects in a responsive grid
 */
export default function Projects() {
  return (
    <section className="py-12">
      <div className="glass-card p-8">
        <h2 className="display-5 text-center mb-8 gradient-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isPriority={project.id === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}