"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="h-full flex items-center justify-center px-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-7xl w-full flex items-center gap-16">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-6xl font-serif font-semibold text-text-dark leading-tight">Hello, I'm John Doe</h1>
          <h2 className="text-4xl font-serif text-text-medium leading-relaxed">I'm a Full Stack Developer</h2>
          <p className="text-2xl text-text-light leading-relaxed max-w-2xl">
            I specialize in building beautiful, functional, and user-friendly websites and applications. Welcome to my
            portfolio where you can explore my experience, projects, and more.
          </p>
        </motion.div>

        {/* Right side - Profile photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="images/folders/placeholder.png?height=500&width=400"
              alt="John Doe Profile"
              className="rounded-3xl shadow-2xl w-96 h-auto object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-sidebar-beige rounded-3xl opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
