'use client'

import React, { useState, useEffect } from 'react'

interface ImageFallbackProps {
  src: string
  fallbackSrc?: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
}

/**
 * Component that displays a placeholder or alternative image if the original image fails to load
 * Includes mobile optimizations and priority loading support
 */
const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  style = {},
  priority = false
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true)
    setHasError(false)
    
    // Create a new image object to preload
    const img = new Image()
    img.src = src
    
    img.onload = () => {
      setImgSrc(src)
      setIsLoading(false)
    }
    
    img.onerror = () => {
      if (fallbackSrc) {
        // Try loading the fallback image
        const fallbackImg = new Image()
        fallbackImg.src = fallbackSrc
        
        fallbackImg.onload = () => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }
        
        fallbackImg.onerror = () => {
          setIsLoading(false)
          setHasError(true)
        }
      } else {
        setIsLoading(false)
        setHasError(true)
      }
    }
    
    // Set priority images immediately to avoid layout shift
    if (priority) {
      setImgSrc(src)
    }
    
    return () => {
      // Cleanup
      img.onload = null
      img.onerror = null
    }
  }, [src, fallbackSrc, priority])

  // Handle image load errors by switching to fallback image or applying default style
  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Skeleton loader shown while loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Image with fixed aspect ratio container */}
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${hasError && !fallbackSrc ? 'bg-gray-300' : ''} ${className}`}
          style={style}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : hasError && !fallbackSrc ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <span className="text-gray-500">{alt}</span>
        </div>
      ) : null}
    </div>
  )
}

export default ImageFallback