'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Interactive network background animation component
 * Creates a dynamic background with floating nodes and connecting lines
 * Responsive to screen sizes to prevent flickering on mobile devices
 */
export default function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [debug, setDebug] = useState<{
    nodeCount: number;
    connectionCount: number;
    maxDistance: number;
    isMobile: boolean;
    visible: boolean;
  }>({
    nodeCount: 0,
    connectionCount: 0,
    maxDistance: 0,
    isMobile: false,
    visible: false
  });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const nodes: HTMLDivElement[] = [];
    const connections: HTMLDivElement[] = [];
    
    // Responsive node count based on screen width
    const getResponsiveNodeCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 15; // Mobile
      if (width < 1024) return 25; // Tablet
      return 40; // Desktop
    };
    
    // Responsive connection distance based on screen width
    const getResponsiveDistance = () => {
      const width = window.innerWidth;
      if (width < 640) return 150; // Mobile - shorter connections
      if (width < 1024) return 200; // Tablet
      return 250; // Desktop
    };
    
    let numNodes = getResponsiveNodeCount();
    let maxDistance = getResponsiveDistance();
    let animationFrame: number;
    
    // Update debug state
    const updateDebugInfo = () => {
      setDebug(prev => ({
        ...prev,
        nodeCount: nodes.length,
        connectionCount: connections.length,
        maxDistance,
        isMobile: window.innerWidth < 640
      }));
    };
    
    // Toggle debug info visibility with "n" key
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'n') {
        setDebug(prev => ({
          ...prev,
          visible: !prev.visible
        }));
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    // Handle window resize and adjust node count and distance
    const handleResize = () => {
      // Clear existing nodes and connections
      nodes.forEach(node => node.remove());
      connections.forEach(conn => conn.remove());
      nodes.length = 0;
      connections.length = 0;
      
      // Cancel the animation frame
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      // Update values based on new screen size
      numNodes = getResponsiveNodeCount();
      maxDistance = getResponsiveDistance();
      
      // Update debug info
      updateDebugInfo();
      
      // Recreate the nodes
      createNodes();
      
      // Restart the animation
      animationFrame = requestAnimationFrame(updateConnections);
    };
    
    // Create nodes with positions and animations
    const createNodes = () => {
      for (let i = 0; i < numNodes; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        node.style.setProperty('--move-x', `${Math.random() * 200 - 100}px`);
        node.style.setProperty('--move-y', `${Math.random() * 200 - 100}px`);
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        
        // Slower animations on mobile to reduce CPU usage
        const animationDuration = window.innerWidth < 640 
          ? Math.random() * 20 + 30 // Slower on mobile
          : Math.random() * 15 + 20; // Normal on desktop
          
        node.style.animation = `float-network ${animationDuration}s ease-in-out infinite`;
        container.appendChild(node);
        nodes.push(node);
      }
      
      // Update debug info after creating nodes
      updateDebugInfo();
    };

    // Create connections between nearby nodes with performance optimizations
    function updateConnections() {
      // Remove previous connections
      connections.forEach(conn => conn.remove());
      connections.length = 0;

      // Only update connections every other frame on mobile
      if (window.innerWidth < 640 && Math.random() > 0.5) {
        animationFrame = requestAnimationFrame(updateConnections);
        return;
      }

      // Calculate node positions and connections
      for (let i = 0; i < nodes.length; i++) {
        // Limit the number of connections per node to improve performance
        let connectionsMade = 0;
        const maxConnectionsPerNode = window.innerWidth < 640 ? 2 : 5;
        
        for (let j = i + 1; j < nodes.length; j++) {
          if (connectionsMade >= maxConnectionsPerNode) break;
          
          const node1 = nodes[i].getBoundingClientRect();
          const node2 = nodes[j].getBoundingClientRect();
          
          const distance = Math.hypot(
            node1.x - node2.x,
            node1.y - node2.y
          );
          
          if (distance < maxDistance) {
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
            
            // Adjust opacity based on distance and screen size
            const opacity = window.innerWidth < 640
              ? 0.15 - (distance / maxDistance) * 0.1 // Less visible on mobile
              : 0.3 - (distance / maxDistance) * 0.2;
              
            line.style.opacity = `${opacity}`;
            
            container.appendChild(line);
            connections.push(line);
            connectionsMade++;
          }
        }
      }
      
      // Update debug info occasionally (not every frame to avoid performance issues)
      if (debug.visible && Math.random() > 0.95) {
        updateDebugInfo();
      }
      
      animationFrame = requestAnimationFrame(updateConnections);
    }

    // Initialize nodes and start animation
    createNodes();
    animationFrame = requestAnimationFrame(updateConnections);
    
    // Add resize listener for responsiveness
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyPress);
      nodes.forEach(node => node.remove());
      connections.forEach(conn => conn.remove());
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [debug.visible]);

  return (
    <>
      <div ref={containerRef} className="network-bg" />
      {debug.visible && process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 right-0 bg-black/70 text-white p-2 z-50 text-xs font-mono">
          <div>Nodes: {debug.nodeCount}</div>
          <div>Connections: {debug.connectionCount}</div>
          <div>Max Distance: {debug.maxDistance}px</div>
          <div>Mode: {debug.isMobile ? 'Mobile' : 'Desktop'}</div>
          <div className="text-gray-400 text-[10px]">Press 'n' to hide</div>
        </div>
      )}
    </>
  );
}