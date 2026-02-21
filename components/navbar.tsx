'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { Monitor, Shield, Speaker, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useProfile, useLanguage } from '@/app/providers'
import { portfolioData } from '@/lib/data'
import { ThemePicker } from '@/components/theme-picker'

export function Navbar() {
  const { profile, setProfile } = useProfile()
  const { language, setLanguage } = useLanguage()
  const data = portfolioData[language][profile]
  const [scrolled, setScrolled] = useState(false)

  // Scroll shadow via IntersectionObserver on the hero section (no scroll listener = better perf)
  useEffect(() => {
    const sentinel = document.getElementById('hero')
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const profileLabel = {
    dev: language === 'en' ? 'Development' : 'Desarrollo',
    sec: language === 'en' ? 'Security' : 'Seguridad',
    av: language === 'en' ? 'AV Engineering' : 'Ingeniería AV',
  }[profile]

  const profileColors = {
    dev: 'border-cyan-500/60 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20',
    sec: 'border-rose-500/60 text-rose-400 bg-rose-500/10 hover:bg-rose-500/20',
    av: 'border-amber-500/60 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20',
  }[profile]

  const profiles = [
    { id: 'dev' as const, Icon: Monitor, cls: 'text-cyan-400 bg-cyan-500/10', label: language === 'en' ? 'Development' : 'Desarrollo' },
    { id: 'sec' as const, Icon: Shield, cls: 'text-rose-400 bg-rose-500/10', label: language === 'en' ? 'Security' : 'Seguridad' },
    { id: 'av' as const, Icon: Speaker, cls: 'text-amber-400 bg-amber-500/10', label: language === 'en' ? 'AV Engineering' : 'Ingeniería AV' },
  ]

  const CurrentIcon = profiles.find(p => p.id === profile)?.Icon ?? Monitor

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border/40 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'glass'
        }`}
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between px-4 gap-4">

        {/* ── Left: Glitch logo + Profile Switcher ── */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="#hero"
            className="font-bold text-lg font-mono shrink-0 hidden sm:block glitch"
            data-text="OJ.dev"
            aria-label="OJ.dev — back to top"
          >
            OJ<span className="text-primary">.</span>dev
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all duration-200 shrink-0 ${profileColors ?? ''}`}
                title="Cambiar Perfil / Switch Profile"
                aria-label="Switch profile"
              >
                <CurrentIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">{profileLabel}</span>
                <ChevronDown className="h-3 w-3 opacity-60" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="font-mono w-48 glass-strong">
              {profiles.map(({ id, label, Icon, cls }) => (
                <DropdownMenuItem
                  key={id}
                  onClick={() => setProfile(id)}
                  className={`gap-2 cursor-pointer ${profile === id ? cls : ''}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ── Center: Nav links with animated underline ── */}
        <div className="hidden md:flex gap-5 flex-1 justify-center">
          {data.navbar.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* ── Right: Language pill + Theme picker ── */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            title="Cambiar Idioma / Switch Language"
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
            className="relative flex items-center gap-1 rounded-full border border-primary/50 bg-primary/10 px-3 py-1.5 text-xs font-bold font-mono text-primary transition-all duration-200 hover:bg-primary/25 hover:border-primary hover:scale-105 active:scale-95"
          >
            <span className="relative flex h-1.5 w-1.5 mr-0.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            {language === 'en' ? '🇬🇧 EN' : '🇨🇴 ES'}
            <span className="text-primary/40 mx-0.5" aria-hidden="true">→</span>
            <span className="text-muted-foreground/70">{language === 'en' ? 'ES' : 'EN'}</span>
          </button>

          <ThemePicker />
        </div>
      </div>
    </nav>
  )
}
