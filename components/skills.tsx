"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Code2, Shield, Terminal, Cpu, Database, Globe, Box, Layers, PenTool } from "lucide-react"
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'

/* ── Intersection hook for scroll-triggered entrance ───────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

/* ── Animated skill progress bar ───────────────────────────── */
function SkillBar({ label, level, delay = 0 }: { label: string; level: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-mono text-foreground/80 group-hover:text-primary transition-colors duration-200">
          {label}
        </span>
        <span className="text-xs font-mono text-primary/70">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1400ms] ease-out"
          style={{
            width: started ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 60%, var(--accent)))',
            transitionDelay: `${delay}ms`,
            boxShadow: started ? '0 0 8px color-mix(in srgb, var(--primary) 50%, transparent)' : 'none',
          }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        />
      </div>
    </div>
  )
}

/* ── Skill levels per category — tweak to taste ───────────── */
const SKILL_LEVELS: Record<string, number> = {
  // Dev
  'React': 92, 'TypeScript': 88, 'Node.js': 85, 'Next.js': 90, 'Python': 82,
  'GraphQL': 75, 'Docker': 78, 'PostgreSQL': 80, 'MongoDB': 76,
  // Security
  'Penetration Testing': 88, 'SIEM/SOC': 84, 'OWASP': 90, 'ISO 27001': 82,
  'Network Security': 86, 'Malware Analysis': 78, 'CTF': 85,
  // AV
  'Dante/AES67': 90, 'Q-SYS DSP': 88, 'Resolume': 85, 'NDI': 87,
  'DMX/Artnet': 82, 'ONYX': 80, 'QLab': 78,
}
function getLevel(skill: string) {
  return SKILL_LEVELS[skill] ?? Math.floor(70 + Math.random() * 20)
}

const CARD_COLORS = [
  { border: 'border-primary/30', icon: 'text-primary', bg: 'bg-primary/5' },
  { border: 'border-emerald-500/30', icon: 'text-emerald-400', bg: 'bg-emerald-500/5' },
  { border: 'border-amber-500/30', icon: 'text-amber-400', bg: 'bg-amber-500/5' },
  { border: 'border-rose-500/30', icon: 'text-rose-400', bg: 'bg-rose-500/5' },
  { border: 'border-blue-500/30', icon: 'text-blue-400', bg: 'bg-blue-500/5' },
  { border: 'border-purple-500/30', icon: 'text-purple-400', bg: 'bg-purple-500/5' },
]

const ICONS = [Code2, Shield, Terminal, Cpu, Database, Globe, Box, Layers, PenTool]

/* ═══════════════════════════════════════════════════════════
   SKILLS COMPONENT
═══════════════════════════════════════════════════════════ */
export function Skills() {
  const { ref: sectionRef, inView } = useInView(0.08)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].skills

  const label = language === 'en' ? 'SKILLS' : 'HABILIDADES'

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-6 relative"
    >
      {/* Subtle radial tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, var(--primary) 5%, transparent), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            {'// '}{label}
          </p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.categories.map((category, index) => {
            const Icon = ICONS[index % ICONS.length]
            const style = CARD_COLORS[index % CARD_COLORS.length]
            const skills = category.items

            return (
              <motion.div
                key={category.title}
                className={`group relative p-6 rounded-xl border ${style.border} ${style.bg} glass hover:glow-border transition-all duration-300`}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {/* Ghost icon watermark */}
                <div className="absolute top-2 right-2 w-20 h-20 opacity-[0.04] pointer-events-none" aria-hidden="true">
                  <Icon className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Card header */}
                  <div className={`inline-flex items-center gap-2 mb-5 ${style.icon}`}>
                    <div className={`p-2 rounded-lg ${style.bg} border ${style.border}`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-3">
                    {skills.map((skill, si) => (
                      <SkillBar
                        key={skill}
                        label={skill}
                        level={getLevel(skill)}
                        delay={index * 80 + si * 50}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Terminal JSON block */}
        <motion.div
          className="mt-12 rounded-xl border border-border overflow-hidden glass-strong"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* macOS traffic lights */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20" aria-hidden="true">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2">profile.json</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground leading-relaxed">
              <code>
                <span className="text-primary">const</span>{' '}
                <span className="text-amber-400">profile</span>{' = {'}
                {'\n'}{'  '}<span className="text-muted-foreground">name:</span>{' '}
                <span className="text-emerald-400">&quot;Oscar Julián Osorio&quot;</span>,
                {'\n'}{'  '}<span className="text-muted-foreground">profile:</span>{' '}
                <span className="text-emerald-400">&quot;{profile === 'dev' ? 'Developer' : profile === 'sec' ? 'Security Specialist' : 'AV Engineer'}&quot;</span>,
                {'\n'}{'  '}<span className="text-muted-foreground">status:</span>{' '}
                <span className="text-rose-400">&quot;{language === 'en' ? 'Open for work' : 'Disponible'}&quot;</span>,
                {'\n'}{'  '}<span className="text-muted-foreground">stack:</span>{' '}
                <span className="text-emerald-400">&quot;{profile === 'dev' ? 'React, Next.js, TypeScript' : profile === 'sec' ? 'Kali Linux, Python, SIEM' : 'Dante, Q-SYS, NDI'}&quot;</span>
                {'\n'}{'}'}
                <span className="text-primary">;</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
