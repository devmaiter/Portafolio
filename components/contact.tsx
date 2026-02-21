"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send, MapPin, ExternalLink } from "lucide-react"
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'

function useInView(threshold = 0.1) {
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

const SOCIAL_LINKS = [
  { href: 'https://github.com/oscar-julian-osorio', label: 'GitHub', Icon: Github, color: 'hover:border-zinc-400 hover:text-zinc-300' },
  { href: 'https://linkedin.com/in/oscar-julian-osorio', label: 'LinkedIn', Icon: Linkedin, color: 'hover:border-blue-400 hover:text-blue-400' },
]

export function Contact() {
  const { ref: sectionRef, inView } = useInView(0.08)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].contact

  const label = language === 'en' ? 'CONTACT' : 'CONTACTO'
  const contactCardTitle = language === 'en' ? 'Contact Information' : 'Información de Contacto'
  const networksTitle = language === 'en' ? 'Professional Networks' : 'Redes Profesionales'
  const sendTitle = language === 'en' ? 'Let\'s work together' : 'Trabajemos juntos'
  const sendSubtitle = language === 'en'
    ? 'Have a project in mind? I\'d love to hear from you!'
    : '¿Tienes un proyecto en mente? ¡Me encantaría escucharte!'
  const availableText = language === 'en'
    ? 'Available for freelance projects & remote positions'
    : 'Disponible para proyectos freelance y posiciones remotas'

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-6 relative"
    >
      {/* Gradient tint */}
      <div
        className="absolute inset-0 pointer-events-none gradient-mesh"
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
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column — contact details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Contact info card */}
            <div className="p-6 rounded-xl border border-border glass">
              <h3 className="text-lg font-semibold mb-5 text-foreground">{contactCardTitle}</h3>
              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:contacto@oscarjulian.dev"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 group transition-all duration-200"
                  aria-label="Send email to contacto@oscarjulian.dev"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_14px_color-mix(in_srgb,var(--primary)_25%,transparent)] transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <p className="text-foreground text-sm group-hover:text-primary transition-colors duration-200">contacto@oscarjulian.dev</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{language === 'en' ? 'Location' : 'Ubicación'}</p>
                    <p className="text-foreground text-sm">Boyacá, Colombia 🇨🇴</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social networks */}
            <div className="p-6 rounded-xl border border-border glass">
              <h3 className="text-lg font-semibold mb-4 text-foreground">{networksTitle}</h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border ${color} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_15%,transparent)]`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                    <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — send message CTA */}
          <motion.div
            className="p-6 rounded-xl border border-primary/30 glass-strong"
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center py-4">
              {/* Animated send icon */}
              <div
                className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mx-auto mb-5"
                style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
                aria-hidden="true"
              >
                <Send className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{sendTitle}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{sendSubtitle}</p>

              <Button
                size="lg"
                className="w-full glow-border group relative overflow-hidden"
                asChild
              >
                <a href="mailto:contacto@oscarjulian.dev">
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 70%, var(--accent)))' }}
                    aria-hidden="true"
                  />
                  <Mail className="mr-2 h-4 w-4 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">{data.form.send}</span>
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border/40">
              <p className="text-sm text-muted-foreground text-center">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-2 relative" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </span>
                {availableText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
