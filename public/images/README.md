# Local Images Folder

This folder stores image files for local testing purposes.
These images can be used as fallbacks when issues occur during Vercel deployment.

## Usage

You can use these images by changing the image path in the ImageComponent:

```jsx
// Using local images instead of GitHub RAW URL
<ImageComponent
  src="/images/anime-profile.png"
  alt="Profile"
/>
```

## Important Notes

- Always specify paths in the format `/images/filename.extension`
- Store image files directly in this folder