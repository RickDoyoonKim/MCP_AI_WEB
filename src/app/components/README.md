# Image Component Usage Guide

## ImageComponent

Basic image component can be used as follows:

```tsx
<ImageComponent 
  src="image_path" 
  alt="alt_text"
  className="additional_style_classes" // optional
/>
```

### Image Path Configuration Methods

1. **Using GitHub Raw URL (Recommended)**
   ```
   https://raw.githubusercontent.com/RickDoyoonKim/MCP_AI_WEB/main/public/images/filename.extension
   ```

2. **Using Local Images (Backup)**
   ```
   /images/filename.extension
   ```
   This method is useful when testing in a local development environment.

## ImageFallback

A component that displays an alternative image if the original image fails to load:

```tsx
<ImageFallback 
  src="primary_image_path" 
  fallbackSrc="fallback_image_path"
  alt="alt_text"
  className="additional_style_classes" // optional
/>
```

### Usage Example

```tsx
// Using GitHub image as primary source with local image as fallback
<ImageFallback 
  src="https://raw.githubusercontent.com/RickDoyoonKim/MCP_AI_WEB/main/public/images/example.jpg" 
  fallbackSrc="/images/example.jpg"
  alt="Example Image"
/>
```

This approach displays the local image as a substitute when the GitHub-hosted image is not accessible.