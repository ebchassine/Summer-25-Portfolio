"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with Next.js and Stripe integration. Features user authentication, product catalog, and secure payment processing.",
      image:  "images/folders/placeholder.png??height=400&width=600",
      technologies: ["Next.js", "React", "Stripe", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop interface. Includes project organization, team collaboration, and real-time updates.",
      image:  "images/folders/placeholder.png?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio template for creative professionals. Built with modern web technologies and optimized for performance.",
      image:  "images/folders/placeholder.png?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div style={{ paddingTop: "50vh", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-serif font-semibold text-text-dark corner-decoration text-center"
          style={{ marginBottom: "4rem", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "2rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 h-80"
              style={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90 mb-4">{project.description}</p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap mb-4" style={{ gap: "0.5rem" }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
