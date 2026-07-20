"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HackIntro } from "@/components/hack-intro"

export default function Home() {
  // Always show intro on every page load/refresh
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    // Small pause to let the exit animation play, then reveal portfolio
    setTimeout(() => setIntroComplete(true), 500)
  }

  return (
    <>
      {/* ── Hack Intro Overlay ── */}
      <AnimatePresence>
        {showIntro && (
          <HackIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* ── Portfolio — fades in after intro ── */}
      <AnimatePresence>
        {introComplete && (
          <motion.main
            className="min-h-screen bg-background"
            initial={{ opacity: 0, filter: 'brightness(0)' }}
            animate={{ opacity: 1, filter: 'brightness(1)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
