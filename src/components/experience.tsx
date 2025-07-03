"use client"

import { motion } from "framer-motion"
import { Calendar, Building2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      description:
        "Led the development of responsive web applications using React, Next.js, and TypeScript. Implemented state management solutions and optimized performance across multiple projects. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      description:
        "Developed and maintained client websites, implemented new features, and collaborated with designers to create engaging user interfaces. Worked extensively with modern JavaScript frameworks and responsive design principles.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "Jun 2016 - Feb 2018",
      description:
        "Assisted in the development of websites using HTML, CSS, and JavaScript. Worked on bug fixes and small feature implementations. Gained experience in version control, testing, and deployment processes.",
    },
  ]

  return (
    <div className="px-16 py-12">
      <div className="max-w-5xl">
        <h2 className="text-6xl font-serif font-bold mb-16 text-beige">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border border-border-dark rounded-xl p-8 shadow-lg bg-card-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3 className="text-4xl font-bold mb-3 text-beige">{exp.title}</h3>
              <div className="flex items-center text-beige-muted mb-6 text-2xl">
                <Building2 className="h-6 w-6 mr-3" />
                <span className="mr-8">{exp.company}</span>
                <Calendar className="h-6 w-6 mr-3" />
                <span>{exp.period}</span>
              </div>
              <p className="text-2xl text-beige-light leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
