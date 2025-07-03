"use client"

import { motion } from "framer-motion"
import { Calendar, Building2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      logo: "/src/images/icons/tech-solutions.png", // Placeholder path
      description:
        "Led the development of responsive web applications using React, Next.js, and TypeScript. Implemented state management solutions and optimized performance across multiple projects. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      logo: "/src/images/icons/digital-innovations.png", // Placeholder path
      description:
        "Developed and maintained client websites, implemented new features, and collaborated with designers to create engaging user interfaces. Worked extensively with modern JavaScript frameworks and responsive design principles.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "Jun 2016 - Feb 2018",
      logo: "/src/images/icons/creative-web.png", // Placeholder path
      description:
        "Assisted in the development of websites using HTML, CSS, and JavaScript. Worked on bug fixes and small feature implementations. Gained experience in version control, testing, and deployment processes.",
    },
  ]

  return (
    <div className="px-20 py-20 min-h-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-serif font-bold mb-24 text-text-dark text-center">Experience</h2>
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border border-border-beige rounded-3xl p-12 shadow-xl bg-card-beige hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex gap-8">
                {/* Left side - Company logo and date */}
                <div className="flex flex-col items-center space-y-4 min-w-[120px]">
                  <div className="w-20 h-20 bg-sidebar-beige rounded-2xl flex items-center justify-center shadow-lg">
                    {/* Placeholder for company logo */}
                    <Building2 className="h-10 w-10 text-content-beige" />
                    {/* Replace with: <img src={exp.logo || "/placeholder.svg"} alt={exp.company} className="w-16 h-16 object-contain" /> */}
                  </div>
                  <div className="text-center">
                    <div className="flex items-center text-text-medium text-lg">
                      <Calendar className="h-5 w-5 mr-2" />
                    </div>
                    <p className="text-text-medium text-sm font-medium mt-1">{exp.period}</p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-2 text-text-dark">{exp.title}</h3>
                  <h4 className="text-2xl text-text-medium mb-6 font-medium">{exp.company}</h4>
                  <p className="text-xl text-text-light leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
