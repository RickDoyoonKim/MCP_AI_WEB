# 이미지 컴포넌트 사용 가이드

## ImageComponent

기본 이미지 컴포넌트는 다음과 같이 사용할 수 있습니다:

```tsx
<ImageComponent 
  src="이미지_경로" 
  alt="대체_텍스트"
  className="추가_스타일_클래스" // 선택사항
/>
```

### 이미지 경로 설정 방법

1. **GitHub Raw URL 사용 (권장)**
   ```
   https://raw.githubusercontent.com/RickDoyoonKim/MCP_AI_WEB/main/public/images/파일명.확장자
   ```

2. **로컬 이미지 사용 (백업용)**
   ```
   /images/파일명.확장자
   ```
   이 방법은 로컬 개발 환경에서 테스트할 때 유용합니다.

## ImageFallback

이미지 로드에 실패할 경우 대체 이미지를 표시하는 컴포넌트입니다:

```tsx
<ImageFallback 
  src="기본_이미지_경로" 
  fallbackSrc="대체_이미지_경로"
  alt="대체_텍스트"
  className="추가_스타일_클래스" // 선택사항
/>
```

### 사용 예시

```tsx
// GitHub 이미지를 주로 사용하고, 로컬 이미지를 폴백으로 사용
<ImageFallback 
  src="https://raw.githubusercontent.com/RickDoyoonKim/MCP_AI_WEB/main/public/images/example.jpg" 
  fallbackSrc="/images/example.jpg"
  alt="예시 이미지"
/>
```

이 방식은 GitHub 호스팅 이미지에 접근할 수 없을 경우 로컬 이미지를 대체 표시합니다.