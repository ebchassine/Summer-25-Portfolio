"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Youtube, Music, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
    { name: "SoundCloud", icon: Music, url: "https://soundcloud.com" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "john.doe@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
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

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-card-beige rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <info.icon className="h-8 w-8 text-sidebar-beige mb-4" />
              <h3 className="text-xl font-semibold text-text-dark mb-2">{info.label}</h3>
              <p className="text-lg text-text-medium">{info.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-12">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-card-beige rounded-3xl hover:bg-border-beige transition-all duration-300 border border-border-beige shadow-lg hover:shadow-xl"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
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
