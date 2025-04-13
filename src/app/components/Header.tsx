'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Site header with navigation and social links
 * Dynamically changes navigation link based on current path
 */
export default function Header() {
  const pathname = usePathname()
  const isProjectsPage = pathname === '/projects'

  return (
    <header className="py-12 text-center relative z-10">
      <h1 className="display-3 mb-4 gradient-text">
        Hello, I'm Do Yoon (Rick) Kim
      </h1>
      <p className="lead text-gray-300 mb-6 animate-gentle">
        Full Stack Developer / Vibe Coding Pioneer
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/RickDoyoonKim" 
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200"
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="GitHub Profile">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/do-yoon-kim-040333133/" 
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200"
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="LinkedIn Profile">
          <FaLinkedin />
        </a>
        <a href="mailto:dkim871023@gmail.com" 
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200"
           aria-label="Email Contact">
          <FaEnvelope />
        </a>
      </div>
      <div className="flex justify-center">
        <Link 
          href={isProjectsPage ? "/" : "/projects"} 
          className="nav-button"
        >
          {isProjectsPage ? "About Me" : "View Projects"}
        </Link>
      </div>
    </header>
  )
}