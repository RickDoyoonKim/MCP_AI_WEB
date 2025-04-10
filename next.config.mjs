/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
    domains: ["vercel.app", "raw.githubusercontent.com"],
  },
  output: 'standalone',
};

export default nextConfig;