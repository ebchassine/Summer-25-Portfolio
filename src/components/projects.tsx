"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop interface built using React. Includes project organization, team collaboration, and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website template for creative professionals. Built with modern web technologies and optimized for performance and SEO.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="px-20 py-16 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif font-bold mb-20 text-text-dark text-center">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-10 bg-card-beige">
                <h3 className="text-3xl font-bold mb-6 text-text-dark">{project.title}</h3>
                <p className="text-xl text-text-light leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
