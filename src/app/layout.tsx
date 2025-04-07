'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const nodes: HTMLDivElement[] = [];
    const numNodes = 40;
    const connections: HTMLDivElement[] = [];
    
    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      const node = document.createElement('div');
      node.className = 'network-node';
      node.style.setProperty('--move-x', `${Math.random() * 200 - 100}px`);
      node.style.setProperty('--move-y', `${Math.random() * 200 - 100}px`);
      node.style.left = `${Math.random() * 100}%`;
      node.style.top = `${Math.random() * 100}%`;
      node.style.animation = `float-network ${Math.random() * 15 + 20}s ease-in-out infinite`;
      container.appendChild(node);
      nodes.push(node);
    }

    // Create connections
    function updateConnections() {
      connections.forEach(conn => conn.remove());
      connections.length = 0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i].getBoundingClientRect();
          const node2 = nodes[j].getBoundingClientRect();
          
          const distance = Math.hypot(
            node1.x - node2.x,
            node1.y - node2.y
          );
          
          if (distance < 250) {
            const line = document.createElement('div');
            line.className = 'network-line';
            
            const angle = Math.atan2(
              node2.y - node1.y,
              node2.x - node1.x
            );
            
            line.style.width = `${distance}px`;
            line.style.left = `${node1.x}px`;
            line.style.top = `${node1.y}px`;
            line.style.transform = `rotate(${angle}rad)`;
            line.style.opacity = `${0.3 - (distance / 250) * 0.2}`;
            
            container.appendChild(line);
            connections.push(line);
          }
        }
      }
      
      requestAnimationFrame(updateConnections);
    }

    updateConnections();
    
    return () => {
      nodes.forEach(node => node.remove());
      connections.forEach(conn => conn.remove());
    };
  }, []);

  return <div ref={containerRef} className="network-bg" />;
}

function Header() {
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
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/do-yoon-kim-040333133/" 
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200">
          <FaLinkedin />
        </a>
        <a href="mailto:dkim871023@gmail.com" 
           className="text-2xl text-white/80 hover:text-amber-300 transition-colors duration-200">
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Do Yoon (Rick) Kim - Portfolio</title>
        <meta name="description" content="Personal portfolio and blog" />
      </head>
      <body>
        <main className="min-h-screen bg-gradient-to-br from-[#020617] via-black to-[#020617] text-white">
          <NetworkBackground />
          <div className="content-wrapper">
            <Header />
            <div className="container mx-auto px-4">
              {children}
            </div>
          </div>
        </main>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" />
      </body>
    </html>
  )
}