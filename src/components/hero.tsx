"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div style={{ paddingTop: "50vh", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "4rem" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-16"
          style={{ transform: "translateY(-50%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl font-serif font-semibold leading-tight" style={{ color: "rgb(63, 64, 63)" }}>
              Hello, I'm John Doe
            </h1>
            <h2 className="text-4xl font-serif leading-relaxed" style={{ color: "rgb(71, 88, 65)" }}>
              I'm a Full Stack Developer
            </h2>
            <p className="text-2xl leading-relaxed max-w-2xl" style={{ color: "rgb(63, 64, 63)", opacity: 0.8 }}>
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
                src="/placeholder.svg?height=500&width=400"
                alt="John Doe Profile"
                className="rounded-3xl shadow-2xl w-96 h-auto object-cover"
              />
              {/* Decorative element */}
              <div
                className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl"
                style={{ backgroundColor: "rgb(159, 184, 173)", opacity: 0.2 }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
