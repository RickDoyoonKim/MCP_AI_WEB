'use client'

import React, { useState } from 'react'

interface ImageFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

// Image component with fallback support
const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  style = {}
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Handle image load error by switching to fallback image
  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        className={`w-full h-full object-cover ${className}`}
        style={style}
      />
    </div>
  )
}

export default ImageFallback