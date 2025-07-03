"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "experience":
        return <Experience />
      case "projects":
        return <Projects />
      case "about":
        return <About />
      case "contact":
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="flex h-screen bg-content-dark">
      {/* Left Sidebar - 33% width */}
      <div className="w-1/3 bg-sidebar-dark flex flex-col justify-center items-center border-r border-border-dark sidebar-container">
        <nav className="space-y-12 text-center">
          {sections.map((section) => (
            <div key={section.id} className="block">
              <button
                onClick={() => setActiveSection(section.id)}
                className={`text-7xl font-serif transition-all duration-300 hover:italic text-beige block w-full ${
                  activeSection === section.id ? "font-bold" : "font-normal"
                }`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* Right Content Area - 67% width */}
      <div className="w-2/3 bg-content-dark content-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
