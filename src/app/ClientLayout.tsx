"use client"

import type React from "react"
import "./globals.css"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set document title on client side to avoid hydration issues
  useEffect(() => {
    document.title = "John Doe - Portfolio"
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="description" content="Full Stack Developer Portfolio showcasing experience, projects, and skills" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="m-0 p-0" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
