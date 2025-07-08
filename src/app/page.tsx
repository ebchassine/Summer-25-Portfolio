"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  const handleSectionChange = (newSection: string) => {
    if (newSection === activeSection) return

    setIsTransitioning(true)
    setActiveSection(newSection)
  }

  const handleAnimationComplete = () => {
    setIsTransitioning(false)
    // Reset scroll position after the new content has appeared
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "auto" })
    }
  }

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
    <div className="flex h-screen" style={{ backgroundColor: "rgb(230, 232, 230)" }}>
      {/* Left Sidebar - 33% width */}
      <div
        className="w-1/3 flex flex-col justify-center items-center sidebar-container"
        style={{ backgroundColor: "rgb(159, 184, 173)" }}
      >
        <nav className="text-center" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {sections.map((section) => (
            <div key={section.id} className="block">
              <button
                onClick={() => handleSectionChange(section.id)}
                disabled={isTransitioning}
                style={{
                  color: activeSection === section.id ? "rgb(184, 50, 50)" : "rgb(230, 232, 230)",
                }}
                className={`text-7xl font-serif hover:italic block w-full transition-all duration-300 font-normal hover:opacity-80 sidebar-corner-decoration ${
                  activeSection === section.id ? "active" : ""
                } ${isTransitioning ? "pointer-events-none" : ""}`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* Right Content Area - 67% width */}
      <div ref={contentRef} className="w-2/3 content-container" style={{ backgroundColor: "rgb(230, 232, 230)" }}>
        <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
