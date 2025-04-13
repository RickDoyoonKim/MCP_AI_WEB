'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import NetworkBackground from './components/NetworkBackground'
import Header from './components/Header'
import PerformanceMonitor from './components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

/**
 * Root layout component that wraps all pages
 * Provides common UI elements and structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Do Yoon (Rick) Kim - Portfolio</title>
        <meta name="description" content="Personal portfolio and blog" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-[#020617] via-black to-[#020617] text-white">
          <NetworkBackground />
          <div className="content-wrapper">
            <Header />
            <div className="container mx-auto px-4">
              {children}
            </div>
          </div>
          {/* Performance monitor (only visible in development) */}
          <PerformanceMonitor />
        </main>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" />
      </body>
    </html>
  )
}