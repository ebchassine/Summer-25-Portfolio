"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function PhotographyCarousel() {
  // Placeholder images - replace with actual images from src/images/photography
  const images = [
    "/placeholder.svg?height=400&width=600&text=Photography+1",
    "/placeholder.svg?height=400&width=600&text=Photography+2",
    "/placeholder.svg?height=400&width=600&text=Photography+3",
    "/placeholder.svg?height=400&width=600&text=Photography+4",
    "/placeholder.svg?height=400&width=600&text=Photography+5",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState<number[]>([])

  // Initialize with 3 random images
  useEffect(() => {
    const shuffled = [...Array(images.length)].map((_, i) => i).sort(() => Math.random() - 0.5)
    setVisibleImages(shuffled.slice(0, 3))
  }, [images.length])

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const availableIndices = [...Array(images.length)].map((_, i) => i)
        const newIndices = [...prev]

        // Replace one random image with a new random one
        const replaceIndex = Math.floor(Math.random() * 3)
        const unusedIndices = availableIndices.filter((i) => !newIndices.includes(i))

        if (unusedIndices.length > 0) {
          newIndices[replaceIndex] = unusedIndices[Math.floor(Math.random() * unusedIndices.length)]
        }

        return newIndices
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="w-full mb-16">
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {visibleImages.map((imageIndex, position) => (
          <motion.div
            key={`${imageIndex}-${position}`}
            className="relative overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={images[imageIndex] || "/placeholder.svg"}
                alt={`Photography ${imageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              visibleImages.includes(index) ? "bg-sidebar-beige" : "bg-border-beige"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
