"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="h-full flex flex-col justify-center items-center px-16 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-8xl font-serif font-bold mb-8 text-beige leading-tight">Hello </h1>
        <h2 className="text-5xl font-serif text-beige-muted mb-12 leading-relaxed">this is placeholder Text</h2>
        <p className="text-3xl text-beige-light leading-relaxed max-w-3xl">
          I specialize in building beautiful, functional, and user-friendly websites and applications. Welcome to my
          portfolio where you can explore my experience, projects, and more.
        </p>
      </div>
    </motion.div>
  )
}
