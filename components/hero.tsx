"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown, Terminal, Shield, Radio } from "lucide-react"
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'

/* ── Profile → particle colour map ────────────────────────── */
const PROFILE_COLORS = {
  dev: { r: 56, g: 189, b: 248 },  // cyan-400
  sec: { r: 251, g: 113, b: 133 },  // rose-400
  av: { r: 251, g: 191, b: 36 },  // amber-400
} as const

/* ── Profile → icon ────────────────────────────────────────── */
const ProfileIcons = {
  dev: Terminal,
  sec: Shield,
  av: Radio,
} as const

/* ── Typewriter hook — CSS-based (no JS setInterval) ─────────
   Uses a stateful array of lines. Advances character-by-char at
   50ms, backspaces at 30ms. Cycles through all taglines.
──────────────────────────────────────────────────────────── */
function useTypewriter(lines: string[], pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    // Skip animation for accessibility
    if (reducedMotion) {
      setDisplayed(lines[0] ?? '')
      return
    }

    const current = lines[lineIdx] ?? ''
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 48)
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 28)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setLineIdx(l => (l + 1) % lines.length)
    }

    return () => clearTimeout(timer)
  }, [charIdx, deleting, lineIdx, lines, pause, reducedMotion])

  return displayed
}

/* ── Particle canvas (profile-aware colour) ─────────────────── */
function useParticleCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  profile: 'dev' | 'sec' | 'av',
) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect prefers-reduced-motion — no canvas at all
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const col = PROFILE_COLORS[profile]
    const particleRgb = `${col.r}, ${col.g}, ${col.b}`

    // Render at device resolution (capped at 2x) so particles stay crisp on
    // hi-DPI screens; logical coordinates remain in CSS pixels.
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const COUNT = 70
    type P = { x: number; y: number; vx: number; vy: number; size: number }
    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.8 + 0.6,
    }))

    let rafId: number
    const LINK_DIST = 140

    const tick = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleRgb}, 0.55)`
        ctx.fill()

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${particleRgb}, ${0.18 - dist / (LINK_DIST * 6)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [canvasRef, profile])
}

/* ── Floating badge helper ─────────────────────────────────── */
const STAGGER_DELAY = 0.12
const floatingBadges = {
  dev: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Python'],
  sec: ['ISO 27001', 'OWASP', 'Pentest', 'SOC 2', 'SIEM'],
  av: ['NDI', 'Dante', 'Resolume', 'DMX', 'OSC'],
} as const

/* ═══════════════════════════════════════════════════════════
   HERO COMPONENT
═══════════════════════════════════════════════════════════ */
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].hero

  const taglines = [data.availableText, data.subtitle]
  const typewriterText = useTypewriter(taglines)

  useParticleCanvas(canvasRef, profile)

  const ProfileIcon = ProfileIcons[profile]

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const scrollToProjects = useCallback(() => {
    // sec/av profiles have no #projects section — fall back to #skills
    const el = document.getElementById('projects') ?? document.getElementById('skills')
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* ── Aurora blobs — slow GPU drift behind everything ── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="aurora absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent), transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="aurora absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 65%)',
            filter: 'blur(70px)',
            animationDelay: '-9s',
          }}
        />
      </div>

      {/* ── Canvas background ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      />

      {/* ── Gradient vignette ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, var(--background) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--background))',
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

        {/* Status pill */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <ProfileIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="min-h-[1em]" aria-live="polite" aria-atomic="true">
            {typewriterText}
            <span
              className="inline-block w-[2px] h-[0.85em] ml-0.5 bg-primary align-middle"
              style={{ animation: 'caretBlink 1s step-end infinite' }}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient block">{data.title}</span>
          <span
            className="text-primary block"
            style={{ textShadow: '0 0 30px color-mix(in srgb, var(--primary) 40%, transparent)' }}
          >
            {data.subtitle}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {data.description}
        </motion.p>

        {/* Floating tech badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          aria-label="Key technologies"
        >
          {floatingBadges[profile].map((badge, i) => (
            <motion.span
              key={`${profile}-${badge}`}
              className="px-3 py-1 rounded-full text-xs font-mono border border-primary/20 bg-primary/5 text-primary/80"
              style={{
                animation: `floatY ${3.5 + i * 0.3}s ease-in-out ${i * 0.4}s infinite`,
                willChange: 'transform',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.42 + i * STAGGER_DELAY, duration: 0.35 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden glow-border transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            onClick={scrollToContact}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 70%, var(--accent)) 100%)' }}
              aria-hidden="true"
            />
            <Mail className="mr-2 h-4 w-4 relative z-10" aria-hidden="true" />
            <span className="relative z-10">{data.contactButton}</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-[1.04] active:scale-95"
            onClick={scrollToProjects}
          >
            {language === 'en' ? 'View Projects' : 'Ver Proyectos'}
            <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.64 }}
        >
          {[
            { href: 'https://github.com/oscar-julian-osorio', label: 'GitHub', Icon: Github },
            { href: 'https://linkedin.com/in/oscar-julian-osorio', label: 'LinkedIn', Icon: Linkedin },
            { href: 'mailto:contacto@oscarjulian.dev', label: 'Email', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_30%,transparent)]"
              aria-label={label}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <div style={{ animation: 'floatY 2s ease-in-out infinite' }}>
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  )
}
