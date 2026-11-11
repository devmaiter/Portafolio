"use client"

import { useEffect, useState, useRef } from "react"
import { CircuitBackground } from "@/components/circuit-background"
import { SkillCard } from "@/components/skill-card"
import { Code2, Server, Wrench, Shield, Music, Bot } from "lucide-react"
import {
  ReactIcon, NextjsIcon, TailwindIcon, TypeScriptIcon, Css3Icon,
  NodejsIcon, ExpressIcon, PostgresIcon, ApiIcon,
  GitIcon, TerminalIcon, DockerIcon,
} from "@/components/tech-icons"
import { useLanguage, useProfile } from "@/app/providers"

/* ── Animated counter (adapted from reference) ─────────── */
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  return <span ref={ref}>{count}</span>
}

function GlowingOrb() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{ background: "radial-gradient(circle,color-mix(in srgb, var(--primary) 8%, transparent) 0%,color-mix(in srgb, var(--primary) 2%, transparent) 40%,transparent 70%)" }}
      />
    </div>
  )
}

/* ── Skill datasets per profile ─────────────────────────── */
const devCategories = (lang: 'en' | 'es') => [
  {
    title: lang === 'en' ? 'Frontend' : 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "TypeScript", icon: <TypeScriptIcon className="w-5 h-5" />, color: "#3178c6" },
      { name: "React", icon: <ReactIcon className="w-5 h-5" />, color: "#61dafb" },
      { name: "Next.js", icon: <NextjsIcon className="w-5 h-5" />, color: "#e8e0f0" },
      { name: "Elm", icon: <TerminalIcon className="w-5 h-5" />, color: "#60b5cc" },
      { name: "Tailwind CSS", icon: <TailwindIcon className="w-5 h-5" />, color: "#38bdf8" },
      { name: "SASS", icon: <Css3Icon className="w-5 h-5" />, color: "#cf649a" },
    ],
  },
  {
    title: lang === 'en' ? 'Backend & Data' : 'Backend y Datos',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "PHP", icon: <TerminalIcon className="w-5 h-5" />, color: "#777bb4" },
      { name: "MySQL", icon: <TerminalIcon className="w-5 h-5" />, color: "#4479a1" },
      { name: "Node.js", icon: <NodejsIcon className="w-5 h-5" />, color: "#68a063" },
      { name: "Express", icon: <ExpressIcon className="w-5 h-5" />, color: "#e8e0f0" },
      { name: "FastAPI", icon: <ApiIcon className="w-5 h-5" />, color: "#009688" },
      { name: "PostgreSQL", icon: <PostgresIcon className="w-5 h-5" />, color: "#336791" },
    ],
  },
  {
    title: lang === 'en' ? 'AI & Automation' : 'IA y Automatización',
    icon: <Bot className="w-5 h-5" />,
    skills: [
      { name: "Claude Code", icon: <TerminalIcon className="w-5 h-5" />, color: "#d97757" },
      { name: lang === 'en' ? 'SDLC Agents' : 'Agentes SDLC', icon: <Bot className="w-5 h-5" />, color: "#00ff88" },
      { name: "Playwright", icon: <TerminalIcon className="w-5 h-5" />, color: "#2ead33" },
      { name: "GitLab CI/CD", icon: <GitIcon className="w-5 h-5" />, color: "#fc6d26" },
      { name: "Docker", icon: <DockerIcon className="w-5 h-5" />, color: "#2496ed" },
      { name: "Git", icon: <GitIcon className="w-5 h-5" />, color: "#f05032" },
    ],
  },
]

const secCategories = (lang: 'en' | 'es') => [
  {
    title: lang === 'en' ? 'Analysis' : 'Análisis',
    icon: <Shield className="w-5 h-5" />,
    skills: [
      { name: "STRIDE", icon: <TerminalIcon className="w-5 h-5" />, color: "#e34f26" },
      { name: "FMEA", icon: <TerminalIcon className="w-5 h-5" />, color: "#f97316" },
      { name: "Wireshark", icon: <TerminalIcon className="w-5 h-5" />, color: "#1d6fa4" },
      { name: "Nmap", icon: <TerminalIcon className="w-5 h-5" />, color: "#00ff88" },
    ],
  },
  {
    title: lang === 'en' ? 'Scripting' : 'Scripting',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Python", icon: <TerminalIcon className="w-5 h-5" />, color: "#3b7ebf" },
      { name: "Bash", icon: <TerminalIcon className="w-5 h-5" />, color: "#4eaa25" },
      { name: "PowerShell", icon: <TerminalIcon className="w-5 h-5" />, color: "#012456" },
    ],
  },
  {
    title: lang === 'en' ? 'Defensive' : 'Defensivo',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "JWT / Passkeys", icon: <TerminalIcon className="w-5 h-5" />, color: "#65a30d" },
      { name: "Hardening", icon: <TerminalIcon className="w-5 h-5" />, color: "#f59e0b" },
      { name: "SHA-256", icon: <TerminalIcon className="w-5 h-5" />, color: "#06b6d4" },
      { name: "OWASP", icon: <TerminalIcon className="w-5 h-5" />, color: "#a78bfa" },
    ],
  },
]

const avCategories = (lang: 'en' | 'es') => [
  {
    title: lang === 'en' ? 'Audio' : 'Audio',
    icon: <Music className="w-5 h-5" />,
    skills: [
      { name: "Dante / AES67", icon: <TerminalIcon className="w-5 h-5" />, color: "#38bdf8" },
      { name: "Q-SYS", icon: <TerminalIcon className="w-5 h-5" />, color: "#f97316" },
      { name: "Yamaha CL/QL", icon: <TerminalIcon className="w-5 h-5" />, color: "#d946ef" },
      { name: "NDI", icon: <TerminalIcon className="w-5 h-5" />, color: "#00ff88" },
    ],
  },
  {
    title: lang === 'en' ? 'Video' : 'Video',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Resolume", icon: <TerminalIcon className="w-5 h-5" />, color: "#f59e0b" },
      { name: "OBS Studio", icon: <TerminalIcon className="w-5 h-5" />, color: "#6366f1" },
      { name: "vMix", icon: <TerminalIcon className="w-5 h-5" />, color: "#e34f26" },
      { name: "Blackmagic", icon: <TerminalIcon className="w-5 h-5" />, color: "#64748b" },
    ],
  },
  {
    title: lang === 'en' ? 'Tools' : 'Herramientas',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Onyx / MA", icon: <TerminalIcon className="w-5 h-5" />, color: "#fbbf24" },
      { name: "Sketchup", icon: <TerminalIcon className="w-5 h-5" />, color: "#007acc" },
      { name: "AutoCAD", icon: <TerminalIcon className="w-5 h-5" />, color: "#e34f26" },
      { name: "Git", icon: <GitIcon className="w-5 h-5" />, color: "#f05032" },
    ],
  },
]

/* ── Stats per profile ──────────────────────────────────── */
const STATS = {
  dev: [
    { label: { en: 'Commits', es: 'Commits' }, value: 6354, suffix: '' },
    { label: { en: 'Merged MRs', es: 'MRs fusionados' }, value: 369, suffix: '' },
    { label: { en: 'Merge rate', es: 'Tasa de fusión' }, value: 97, suffix: '%' },
  ],
  sec: [
    { label: { en: 'Failure modes analyzed', es: 'Modos de falla analizados' }, value: 6, suffix: '' },
    { label: { en: 'NetQuick tests', es: 'Tests en NetQuick' }, value: 135, suffix: '' },
    { label: { en: 'Merged OSS PRs', es: 'PRs OSS mergeados' }, value: 4, suffix: '' },
  ],
  av: [
    { label: { en: 'grandMA2 macros', es: 'Macros grandMA2' }, value: 233, suffix: '' },
    { label: { en: 'Protocols bridged', es: 'Protocolos integrados' }, value: 4, suffix: '' },
    { label: { en: 'AV tools built', es: 'Herramientas AV propias' }, value: 3, suffix: '' },
  ],
}

const SECTIONS = {
  dev: { en: 'Development Skills', es: 'Habilidades de Desarrollo' },
  sec: { en: 'Security Skills', es: 'Habilidades de Seguridad' },
  av: { en: 'AV Engineering Skills', es: 'Habilidades AV' },
}

const SUBTITLES = {
  dev: { en: 'The stack I ship to production — verified GitLab metrics, 2022–2026.', es: 'El stack con el que entrego a producción — métricas de GitLab verificadas, 2022–2026.' },
  sec: { en: 'Security practices applied to my own software and networks.', es: 'Prácticas de seguridad aplicadas a mi propio software y redes.' },
  av: { en: 'Protocols and systems my AV tools work with.', es: 'Protocolos y sistemas con los que trabajan mis herramientas AV.' },
}

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════ */
export function Skills() {
  const { language } = useLanguage()
  const { profile } = useProfile()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const categories =
    profile === 'sec' ? secCategories(language) :
      profile === 'av' ? avCategories(language) :
        devCategories(language)

  const stats = STATS[profile]
  const title = SECTIONS[profile][language]
  const subtitle = SUBTITLES[profile][language]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen bg-background overflow-hidden py-20 px-4 md:px-8"
    >
      {/* Backgrounds */}
      <CircuitBackground />
      <GlowingOrb />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neon/30 bg-neon/5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-sm font-mono text-neon tracking-widest uppercase">
              {language === "en" ? "// Skills" : "// Habilidades"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            {subtitle}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mt-10">
            {stats.map((stat) => (
              <div key={stat.label.en} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon font-mono">
                  <AnimatedCounter target={stat.value} />
                  <span className="text-neon/60">{stat.suffix}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-mono">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-neon/30" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon/40 animate-pulse" />
            <span className="text-xs font-mono text-neon/40 tracking-widest">{"</>"}</span>
            <div className="w-2 h-2 rounded-full bg-neon/40 animate-pulse" style={{ animationDelay: "500ms" }} />
          </div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-neon/30" />
        </div>
      </div>
    </section>
  )
}
