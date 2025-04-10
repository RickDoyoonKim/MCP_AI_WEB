'use client'

import React from 'react'

interface ImageComponentProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

// Next.js의 Image 컴포넌트 대신 일반 img 태그를 사용하는 컴포넌트
const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className = '',
  style = {}
}) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={style}
      />
    </div>
  )
}

export default ImageComponent