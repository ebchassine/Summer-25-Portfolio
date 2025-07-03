"use client"

import { motion } from "framer-motion"
import PhotographyCarousel from "./photography-carousel"

export default function About() {
  return (
    <div className="px-20 py-20 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif font-bold mb-16 text-text-dark text-center">About Me</h2>

        {/* Photography Carousel */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-3xl font-serif font-semibold mb-8 text-text-dark text-center">My Photography</h3>
          <PhotographyCarousel />
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Profile"
              className="rounded-3xl w-full max-w-md h-auto shadow-xl"
            />
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-8 text-text-dark">My Story</h3>
            <div className="space-y-8 text-2xl text-text-light leading-relaxed">
              <p>
                I'm a passionate developer with over 5 years of experience in web development. I specialize in creating
                responsive, user-friendly websites and applications that provide exceptional user experiences.
              </p>
              <p>
                My journey in web development began during my university years when I discovered my passion for coding.
                Since then, I've worked with various technologies and frameworks, always striving to stay updated with
                the latest trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new recipes. I believe in
                continuous learning and enjoy tackling new challenges that push me to grow as a developer.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-12 text-text-dark">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS/SCSS", "Tailwind CSS", "Git"].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  className="bg-card-beige rounded-2xl p-8 text-center text-2xl text-text-medium border border-border-beige shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
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
