'use client'

import React from 'react'
import useImageLoader from '../hooks/useImageLoader'

interface ImageFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

// 향상된 이미지 폴백 컴포넌트 - 커스텀 훅 사용
const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  style = {}
}) => {
  // 커스텀 훅을 사용하여 이미지 로딩 상태 관리
  const { imgSrc, isLoading, handleError } = useImageLoader({
    primarySrc: src,
    fallbackSrc: fallbackSrc
  })

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30">
          <div className="animate-pulse">이미지 로딩 중...</div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        style={style}
      />
    </div>
  )
}

export default ImageFallback