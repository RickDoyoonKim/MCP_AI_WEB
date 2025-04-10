'use client'

import { useState, useEffect } from 'react'

interface UseImageLoaderOptions {
  primarySrc: string
  fallbackSrc: string
}

/**
 * 이미지 로딩 상태를 관리하는 커스텀 훅
 * 
 * 기본 이미지 로드를 시도하고 실패하면 폴백 이미지로 전환합니다.
 * 
 * @param options.primarySrc 기본 이미지 경로
 * @param options.fallbackSrc 폴백 이미지 경로
 * @returns 현재 표시할 이미지 경로와 로딩 상태
 */
export function useImageLoader({ primarySrc, fallbackSrc }: UseImageLoaderOptions) {
  const [imgSrc, setImgSrc] = useState<string>(primarySrc)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    // 이미지를 미리 로드하여 로딩 상태를 확인
    const img = new Image()
    
    img.onload = () => {
      setImgSrc(primarySrc)
      setIsLoading(false)
      setHasError(false)
    }
    
    img.onerror = () => {
      console.warn(`이미지 로드 실패: ${primarySrc}, 폴백 이미지 사용: ${fallbackSrc}`)
      setImgSrc(fallbackSrc)
      setIsLoading(false)
      setHasError(true)
    }
    
    img.src = primarySrc
    
    return () => {
      // 클린업: 이미지 로드 취소
      img.onload = null
      img.onerror = null
    }
  }, [primarySrc, fallbackSrc])

  // 현재 이미지 소스가 변경되면 폴백 이미지를 다시 로드 시도
  const handleError = () => {
    if (!hasError) {
      console.warn(`handleError 실행: 폴백 이미지로 전환 ${fallbackSrc}`)
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return {
    imgSrc,
    isLoading,
    hasError,
    handleError
  }
}

export default useImageLoader