'use client'

import { useEffect, useState } from 'react'

/**
 * Performance monitoring component for development
 * Displays FPS counter and memory usage
 * Only visible in development mode
 */
export default function PerformanceMonitor() {
  const [fps, setFps] = useState<number>(0)
  const [memory, setMemory] = useState<string>('0 MB')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  
  useEffect(() => {
    // Only enable in development mode
    if (process.env.NODE_ENV !== 'development') return
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Initial visibility
    setIsVisible(true)
    
    // FPS calculation variables
    let frameCount = 0
    let lastTime = performance.now()
    let frameTime = 0
    
    // FPS calculation function
    const calculateFps = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime > lastTime + 1000) {
        // Calculate FPS every second
        const elapsedTime = currentTime - lastTime
        const currentFps = Math.round((frameCount * 1000) / elapsedTime)
        setFps(currentFps)
        
        // Reset counters
        frameCount = 0
        lastTime = currentTime
        
        // Update memory usage if available
        if (window.performance && (performance as any).memory) {
          const memoryInfo = (performance as any).memory
          const memoryUsed = Math.round(memoryInfo.usedJSHeapSize / 1048576)
          const memoryTotal = Math.round(memoryInfo.jsHeapSizeLimit / 1048576)
          setMemory(`${memoryUsed}/${memoryTotal} MB`)
        }
      }
      
      frameId = requestAnimationFrame(calculateFps)
    }
    
    // Start FPS calculation
    let frameId = requestAnimationFrame(calculateFps)
    
    // Toggle monitoring visibility with "p" key
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'p') {
        setIsVisible(prev => !prev)
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed bottom-0 left-0 bg-black/70 text-white p-2 z-50 text-xs font-mono">
      <div>FPS: <span className={fps < 30 ? 'text-red-500' : fps < 55 ? 'text-yellow-500' : 'text-green-500'}>
        {fps}
      </span></div>
      <div>Memory: {memory}</div>
      <div>Mode: {isMobile ? 'Mobile' : 'Desktop'}</div>
      <div className="text-gray-400 text-[10px]">Press 'p' to toggle</div>
    </div>
  )
}