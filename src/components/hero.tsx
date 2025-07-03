"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="h-full flex flex-col justify-center items-center px-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-5xl text-center space-y-12">
        <h1 className="text-8xl font-serif font-bold mb-12 text-text-dark leading-tight">Hello, I'm John Doe</h1>
        <h2 className="text-5xl font-serif text-text-medium mb-16 leading-relaxed">I'm a Full Stack Developer</h2>
        <p className="text-3xl text-text-light leading-relaxed max-w-4xl mx-auto">
          I specialize in building beautiful, functional, and user-friendly websites and applications. Welcome to my
          portfolio where you can explore my experience, projects, and more.
        </p>
      </div>
    </motion.div>
  )
}
