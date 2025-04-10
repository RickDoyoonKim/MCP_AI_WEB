'use client'

import React, { useState } from 'react'

interface ImageFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

// 이미지 로드에 실패할 경우 대체 이미지를 표시하는 컴포넌트
const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  style = {}
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // 이미지 로드 실패시 폴백 이미지로 대체
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