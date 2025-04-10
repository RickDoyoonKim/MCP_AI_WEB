# 로컬 이미지 폴더

이 폴더는 로컬에서 테스트하기 위한 이미지 파일들을 저장하는 폴더입니다.
Vercel 배포시 문제가 발생할 경우, 이 폴더의 이미지를 사용할 수 있습니다.

## 사용 방법

ImageComponent에서 이미지 경로를 변경하여 사용할 수 있습니다:

```jsx
// GitHub RAW URL 대신 로컬 이미지 사용
<ImageComponent
  src="/images/anime-profile.png"
  alt="Profile"
/>
```

## 주의사항

- 반드시 `/images/파일명.확장자` 형식으로 경로 지정
- 이미지 파일은 이 폴더에 직접 저장할 것