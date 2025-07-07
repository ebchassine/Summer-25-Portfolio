"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.054-.049-.1-.099-.1zm1.49.265c-.058 0-.106.053-.113.115l-.193 1.889.193 1.839c.007.06.055.113.113.113.057 0 .104-.053.112-.113l.217-1.839-.217-1.889c-.008-.062-.055-.115-.112-.115zm1.455.186c-.061 0-.111.058-.118.122l-.18 1.703.18 1.659c.007.064.057.121.118.121.06 0 .109-.057.117-.121l.2-1.659-.2-1.703c-.008-.064-.057-.122-.117-.122zm1.43.203c-.064 0-.116.061-.123.128l-.167 1.5.167 1.456c.007.067.059.127.123.127.063 0 .114-.06.121-.127l.184-1.456-.184-1.5c-.007-.067-.058-.128-.121-.128zm1.406.221c-.067 0-.121.064-.128.134l-.154 1.279.154 1.235c.007.07.061.133.128.133.066 0 .119-.063.126-.133l.171-1.235-.171-1.279c-.007-.07-.06-.134-.126-.134zm1.383.243c-.07 0-.126.067-.133.14l-.141 1.036.141 1.014c.007.073.063.139.133.139.069 0 .124-.066.131-.139l.157-1.014-.157-1.036c-.007-.073-.062-.14-.131-.14zm1.361.267c-.073 0-.131.07-.138.146l-.128.793.128.772c.007.076.065.145.138.145.072 0 .129-.069.136-.145l.142-.772-.142-.793c-.007-.076-.064-.146-.136-.146zm1.337.29c-.076 0-.134.073-.141.153l-.114.55.114.531c.007.08.065.152.141.152.075 0 .132-.072.139-.152l.127-.531-.127-.55c-.007-.08-.064-.153-.139-.153zm1.314.315c-.079 0-.137.076-.144.159l-.101.307.101.291c.007.083.065.158.144.158.078 0 .135-.075.142-.158l.112-.291-.112-.307c-.007-.083-.064-.159-.142-.159zm4.394 1.298c-.399 0-.765.161-1.031.421-.259.252-.421.6-.421.988 0 .775.63 1.406 1.406 1.406h6.063c.994 0 1.797-.806 1.797-1.797 0-.994-.803-1.797-1.797-1.797-.061 0-.119.003-.178.009-.22-.863-1.005-1.507-1.944-1.507-.347 0-.67.09-.952.248-.335-.704-1.044-1.191-1.869-1.191-.354 0-.686.09-.974.248-.248-.576-.815-.974-1.476-.974-.888 0-1.608.720-1.608 1.608v.338z" />
        </svg>
      ),
    },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "john.doe@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ]

  return (
    <div style={{ paddingTop: "50vh", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "4rem" }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-6xl font-serif font-semibold text-text-dark corner-decoration text-center"
          style={{ marginBottom: "3rem", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.2 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-2xl text-text-light leading-relaxed max-w-3xl mx-auto text-center"
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm always
          interested in discussing new opportunities and projects.
        </motion.p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: "4rem" }}>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-card-beige rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <info.icon className="h-8 w-8 text-sidebar-beige mb-3" />
              <h3 className="text-xl font-medium text-text-dark mb-2">{info.label}</h3>
              <p className="text-lg text-text-medium">{info.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card-beige rounded-2xl hover:bg-border-beige transition-all duration-300 border border-border-beige shadow-lg hover:shadow-xl"
              whileHover={{ y: -5, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-text-medium">{social.icon}</div>
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
