"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      logo: "/src/images/icons/tech-solutions.png",
      description:
        "Led development of responsive web applications using React, Next.js, and TypeScript. Implemented state management solutions and optimized performance.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      logo: "/src/images/icons/digital-innovations.png",
      description:
        "Developed and maintained client websites, implemented new features, and collaborated with designers to create engaging user interfaces.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "Jun 2016 - Feb 2018",
      logo: "/src/images/icons/creative-web.png",
      description:
        "Assisted in website development using HTML, CSS, and JavaScript. Worked on bug fixes and feature implementations.",
    },
  ]

  return (
    <div style={{ paddingTop: "50vh", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "4rem" }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-6xl font-serif font-semibold corner-decoration text-center"
          style={{
            marginBottom: "4rem",
            transform: "translateY(-50%)",
            color: "rgb(63, 64, 63)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.2 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="rounded-2xl hover:shadow-xl transition-shadow duration-300"
              style={{
                padding: "2rem",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgb(206, 208, 206)",
                border: "1px solid rgb(206, 208, 206)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex" style={{ gap: "2rem" }}>
                {/* Left side - Company logo */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: "rgb(159, 184, 173)" }}
                  >
                    <Building2 className="h-8 w-8" style={{ color: "rgb(230, 232, 230)" }} />
                  </div>
                  <p
                    className="text-sm font-medium mt-2 text-center leading-tight"
                    style={{ color: "rgb(71, 88, 65)" }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold" style={{ marginBottom: "0.5rem", color: "rgb(63, 64, 63)" }}>
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-medium" style={{ marginBottom: "1rem", color: "rgb(71, 88, 65)" }}>
                    {exp.company}
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: "rgb(63, 64, 63)", opacity: 0.8 }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
