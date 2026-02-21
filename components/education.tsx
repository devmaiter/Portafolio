"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'

function useInView(threshold = 0.12) {
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

const ICON_COLORS = [
  { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary' },
  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
]

const ICONS = [GraduationCap, Award, BookOpen, GraduationCap, Award]

export function Education() {
  const { ref: sectionRef, inView } = useInView(0.08)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].education

  const label = language === 'en' ? 'EDUCATION' : 'EDUCACIÓN'

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="education"
      aria-labelledby="education-heading"
      className="py-24 px-6 relative"
    >
      {/* Gradient tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 0% 100%, color-mix(in srgb, var(--primary) 5%, transparent), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            {'// '}{label}
          </p>
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4" role="list">
          {data.items.map((item, index) => {
            const colorStyle = ICON_COLORS[index % ICON_COLORS.length]
            const Icon = ICONS[index % ICONS.length]

            return (
              <motion.article
                key={index}
                role="listitem"
                className="group relative flex items-start gap-6 p-6 rounded-xl border border-border glass hover:border-primary/50 hover:glow-border transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                {/* Gradient icon container */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl ${colorStyle.bg} border ${colorStyle.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: 'inset 0 1px 0 color-mix(in srgb, white 8%, transparent)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon className={`h-6 w-6 ${colorStyle.text}`} />
                  </div>
                </div>

                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {item.institution}
                    <span className="mx-2 text-border">•</span>
                    <time>{item.period}</time>
                  </p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Award icon appears on hover */}
                <div
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center"
                  aria-hidden="true"
                >
                  <Award className="h-5 w-5 text-primary/60" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
