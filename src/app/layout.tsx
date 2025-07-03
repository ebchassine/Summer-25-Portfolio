import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "John Doe - Portfolio",
  description: "Full Stack Developer Portfolio showcasing experience, projects, and skills",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0">{children}</body>
    </html>
  )
}
