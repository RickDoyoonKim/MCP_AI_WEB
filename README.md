# MCP AI Web Portfolio

A modern, responsive personal portfolio website built with Next.js and React. This project showcases professional experience and projects with a clean, minimalist design.

## Features

- Modern UI with glass morphism design elements
- Responsive layout for all device sizes
- Dynamic page transitions and animations
- Image fallback system for reliable asset loading
- Optimized for performance and accessibility

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
/src
  /app
    /components      # Reusable UI components
    /hooks           # Custom React hooks
    /projects        # Projects page
    layout.tsx       # Root layout with navigation
    page.tsx         # Home page
/public
  /images            # Local backup images
/images              # GitHub-hosted images (main source)
```

## Image Loading Strategy

This project implements a dual-source image loading strategy:

1. **Primary Source**: GitHub-hosted images via raw.githubusercontent.com
2. **Fallback Source**: Local images in the public folder

The `ImageFallback` component and `useImageLoader` hook work together to:
- Attempt loading the primary image source first
- Automatically fall back to the local version if the primary source fails
- Provide a smooth loading experience with loading indicators

## Development

1. Clone the repository:
```bash
git clone https://github.com/RickDoyoonKim/MCP_AI_WEB.git
cd MCP_AI_WEB
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel. The `next.config.mjs` file includes settings for image optimization and domain configuration necessary for proper image loading.

## License

MIT