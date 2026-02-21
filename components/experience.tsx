"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Building2, Calendar, MapPin } from "lucide-react"
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'

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

export function Experience() {
  const { ref: sectionRef, inView } = useInView(0.05)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].experience

  const label = language === 'en' ? 'EXPERIENCE' : 'EXPERIENCIA'

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 px-6 relative"
    >
      {/* Gradient background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 100% 50%, color-mix(in srgb, var(--primary) 4%, transparent), transparent 70%)',
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
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" role="list">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, var(--primary), color-mix(in srgb, var(--primary) 20%, transparent))',
            }}
            aria-hidden="true"
          />

          {data.items.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={index}
                role="listitem"
                className={`relative mb-12 last:mb-0 ${isLeft ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%]'}`}
                initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Timeline dot with pulse ring */}
                <div
                  className="absolute top-3 left-0 md:left-1/2 md:-translate-x-1/2 z-10"
                  aria-hidden="true"
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'var(--primary)',
                      animation: `dotPulse ${2.5 + index * 0.3}s ease-in-out infinite`,
                      opacity: 0.3,
                    }}
                  />
                  <span
                    className="relative flex h-4 w-4 rounded-full border-2 border-primary bg-background"
                    style={{ boxShadow: '0 0 10px color-mix(in srgb, var(--primary) 50%, transparent)' }}
                  />
                </div>

                {/* Card */}
                <div className={`ml-8 md:ml-0 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.article
                    className="group p-6 rounded-xl border border-border glass hover:border-primary/50 hover:glow-border transition-all duration-300"
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {exp.role}
                    </h3>

                    <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Shimmer overlay on hover */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
                      aria-hidden="true"
                    >
                      <div
                        className="absolute inset-y-0 w-1/3 skew-x-[-20deg]"
                        style={{
                          background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--primary) 5%, transparent), transparent)',
                          animation: 'shimmer 1.4s ease-in-out infinite',
                        }}
                      />
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
