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
      className="h-full flex flex-col justify-center items-center px-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-5xl text-center space-y-16">
        <h2 className="text-6xl font-serif font-bold mb-12 text-text-dark">Contact Me</h2>
        <p className="text-3xl text-text-light leading-relaxed max-w-4xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm always
          interested in discussing new opportunities and projects.
        </p>

        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold mb-6 text-text-dark">John Doe</h3>
          <p className="text-2xl text-text-medium mb-2">john.doe@example.com</p>
          <p className="text-2xl text-text-medium">+1 (555) 123-4567</p>
        </div>

        <div className="flex justify-center gap-12">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-card-beige rounded-3xl hover:bg-border-beige transition-colors border border-border-beige shadow-lg"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <social.icon className="h-10 w-10 text-text-medium" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
