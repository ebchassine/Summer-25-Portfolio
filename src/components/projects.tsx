"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "React", "Stripe", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop interface built using React. Includes project organization, team collaboration, and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website template for creative professionals. Built with modern web technologies and optimized for performance and SEO.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="px-20 py-20 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif font-bold mb-20 text-text-dark text-center">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-content-beige rounded-full hover:bg-card-beige transition-colors"
                  >
                    <ExternalLink className="h-6 w-6 text-text-dark" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-content-beige rounded-full hover:bg-card-beige transition-colors"
                  >
                    <Github className="h-6 w-6 text-text-dark" />
                  </a>
                </div>
              </div>
              <div className="p-10 bg-card-beige">
                <h3 className="text-3xl font-bold mb-4 text-text-dark">{project.title}</h3>
                <p className="text-xl text-text-light leading-relaxed mb-6">{project.description}</p>
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-sidebar-beige text-content-beige text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
