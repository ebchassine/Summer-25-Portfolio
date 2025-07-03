"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Youtube, Music } from "lucide-react"

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
    { name: "SoundCloud", icon: Music, url: "https://soundcloud.com" },
  ]

  return (
    <motion.div
      className="h-full flex flex-col justify-center items-center px-16 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-4xl text-center space-y-12">
        <h2 className="text-6xl font-serif font-bold mb-8 text-beige">Contact Me</h2>
        <p className="text-3xl text-beige-muted leading-relaxed max-w-3xl">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm always
          interested in discussing new opportunities and projects.
        </p>

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-beige">John Doe</h3>
          <p className="text-2xl text-beige-muted">john.doe@example.com</p>
          <p className="text-2xl text-beige-muted">+1 (555) 123-4567</p>
        </div>

        <div className="flex justify-center gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card-dark rounded-2xl hover:bg-gray-600 transition-colors border border-border-dark shadow-lg"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <social.icon className="h-8 w-8 text-beige-muted" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
