"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PhotographyCarousel() {
  const images = [
    "/placeholder.svg?height=400&width=600&text=Photography+1",
    "/placeholder.svg?height=400&width=600&text=Photography+2",
    "/placeholder.svg?height=400&width=600&text=Photography+3",
    "/placeholder.svg?height=400&width=600&text=Photography+4",
    "/placeholder.svg?height=400&width=600&text=Photography+5",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(images.length - 1)

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex(nextIndex)
      setNextIndex((nextIndex + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [currentIndex, nextIndex, images.length])

  return (
    <div className="w-full mb-16">
      <div className="flex max-w-6xl mx-auto h-80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${prevIndex}`}
            className="w-1/3 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images[prevIndex] || "/placeholder.svg"}
              alt={`Photography ${prevIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Center image */}
        <motion.div
          key={`center-${currentIndex}`}
          className="w-1/3 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Photography ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${nextIndex}`}
            className="w-1/3 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images[nextIndex] || "/placeholder.svg"}
              alt={`Photography ${nextIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-sidebar-beige" : "bg-border-beige"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
