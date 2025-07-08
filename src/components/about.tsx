"use client"

import { motion } from "framer-motion"
import PhotographyCarousel from "./photography-carousel"
import { Music, Youtube } from "lucide-react"

export default function About() {
  return (
    <div style={{ paddingTop: "50vh", paddingLeft: "6rem", paddingRight: "6rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl font-serif font-semibold text-text-onyx corner-decoration text-center"
          style={{ marginBottom: "3rem", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Photography Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <h3 className="text-3xl font-serif font-medium text-text-onyx text-center" style={{ marginBottom: "1.5rem" }}>
            My Photography
          </h3>
          <PhotographyCarousel />
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* My Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-content-medium rounded-3xl p-6 shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-text-onyx mb-4">My Story</h3>
            <div className="space-y-3 text-lg text-text-onyx leading-relaxed text-left opacity-80">
              <p>
                I'm a passionate developer with over 5 years of experience in web development. I specialize in creating
                responsive, user-friendly websites and applications.
              </p>
              <p>
                My journey began during university when I discovered my passion for coding. Since then, I've worked with
                various technologies, always striving to stay updated with the latest trends.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new recipes. I believe in
                continuous learning and growth.
              </p>
            </div>
          </motion.div>

          {/* Music Module */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-content-medium rounded-3xl p-6 shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-text-onyx mb-4">My Music</h3>
            <p className="text-lg text-text-onyx leading-relaxed mb-4 text-left opacity-80">
              Music is another passion of mine. I create and share content across different platforms, exploring various
              genres and collaborating with other artists.
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="#"
                className="flex items-center space-x-2 bg-sidebar-sage text-content-light px-4 py-2 rounded-full hover:bg-text-sage transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-sidebar-sage text-content-light px-4 py-2 rounded-full hover:bg-text-sage transition-colors"
              >
                <Music className="h-5 w-5" />
                <span>SoundCloud</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-semibold text-text-onyx mb-4">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto" style={{ gap: "1.5rem" }}>
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS/SCSS", "Tailwind CSS", "Git"].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  className="bg-content-medium rounded-xl text-center text-lg text-text-onyx border border-border-gray shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ padding: "1.5rem" }}
                  whileHover={{ y: -3 }}
                >
                  {skill}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
