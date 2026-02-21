"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react"
import { useLanguage, useProfile } from '@/app/providers'
import { AnimatedCounter } from "@/components/animated-counter"

function useInView(threshold = 0.3) {
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

/* ── Stats shown in footer ──────────────────────────────── */
const STATS = [
  { target: 5, suffix: '+', labelEn: 'Years Exp.', labelEs: 'Años Exp.' },
  { target: 30, suffix: '+', labelEn: 'Projects', labelEs: 'Proyectos' },
  { target: 3, suffix: '', labelEn: 'Specializations', labelEs: 'Esp.' },
  { target: 100, suffix: '%', labelEn: 'Remote Ready', labelEs: 'Remoto' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/oscar-julian-osorio', Icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/oscar-julian-osorio', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:contacto@oscarjulian.dev', Icon: Mail, label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const { ref: footerRef, inView } = useInView(0.2)

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="border-t border-border glass"
      role="contentinfo"
    >
      {/* Stat counters strip */}
      <div className="border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map(({ target, suffix, labelEn, labelEs }, i) => (
              <motion.div
                key={labelEn}
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <dt className="text-2xl font-bold font-mono text-primary">
                  <AnimatedCounter target={target} suffix={suffix} duration={1600} />
                </dt>
                <dd className="text-xs text-muted-foreground">
                  {language === 'en' ? labelEn : labelEs}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Main footer row */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + copyright */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-2"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="Back to top"
            >
              <div
                className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={{ animation: inView ? 'pulseGlow 4s ease-in-out infinite' : 'none' }}
                aria-hidden="true"
              >
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <span className="font-bold text-foreground font-mono">
                OJ<span className="text-primary">.</span>dev
              </span>
            </a>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Oscar Julián Osorio.{' '}
              {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
          </motion.div>

          {/* Center message */}
          <motion.div
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            <span>{language === 'en' ? 'Made with' : 'Hecho con'}</span>
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500" aria-hidden="true" />
            <span>{language === 'en' ? '& lots of' : '& mucho'}</span>
            <code className="font-mono text-primary text-xs px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              {'</código>'}
            </code>
            <span>— Boyacá, Colombia 🇨🇴</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all duration-300"
                aria-label={label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
