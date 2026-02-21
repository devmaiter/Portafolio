"use client"

import { useEffect, useState, useRef } from "react"
import { CircuitBackground } from "@/components/circuit-background"
import { Zap, Calendar, MapPin, Briefcase } from "lucide-react"
import { useProfile, useLanguage } from "@/app/providers"
import { portfolioData } from "@/lib/data"
import type { ExperienceItem } from "@/lib/data"

/* ── Default tag colors per index (fallback) ─────────── */
const DEFAULT_COLORS = ["#d946ef", "#06b6d4", "#8b5cf6", "#f97316", "#22d3ee", "#ef4444"]

function TimelineNode({
  isActive,
  color,
  index,
}: {
  isActive: boolean
  color: string
  index: number
}) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer pulse ring */}
      <div
        className="absolute w-8 h-8 rounded-full transition-all duration-700"
        style={{
          backgroundColor: isActive ? `${color}15` : "transparent",
          boxShadow: isActive ? `0 0 20px ${color}30, 0 0 40px ${color}10` : "none",
          animation: isActive ? "pulse 2s ease-in-out infinite" : "none",
          animationDelay: `${index * 200}ms`,
        }}
      />
      {/* Inner dot */}
      <div
        className="relative w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10"
        style={{
          backgroundColor: isActive ? color : "transparent",
          borderColor: isActive ? color : "var(--border)",
          boxShadow: isActive ? `0 0 12px ${color}60` : "none",
        }}
      />
    </div>
  )
}

function ExperienceCard({
  experience,
  index,
  isVisible,
  isHovered,
  onHover,
  onLeave,
  tagColor,
}: {
  experience: ExperienceItem
  index: number
  isVisible: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  tagColor: string
}) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      <div
        className="group relative"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Glow border */}
        <div
          className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(${
              isLeft ? "135deg" : "225deg"
            }, ${tagColor}50, transparent 50%, ${tagColor}25)`,
          }}
        />

        {/* Card body */}
        <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-500 group-hover:border-neon/30 overflow-hidden">
          {/* Corner accent lines */}
          <div
            className="absolute top-0 left-0 w-10 h-px transition-all duration-500"
            style={{ backgroundColor: isHovered ? `${tagColor}60` : "var(--neon-dim)" }}
          />
          <div
            className="absolute top-0 left-0 h-10 w-px transition-all duration-500"
            style={{ backgroundColor: isHovered ? `${tagColor}60` : "var(--neon-dim)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-10 h-px transition-all duration-500"
            style={{ backgroundColor: isHovered ? `${tagColor}60` : "var(--neon-dim)" }}
          />
          <div
            className="absolute bottom-0 right-0 h-10 w-px transition-all duration-500"
            style={{ backgroundColor: isHovered ? `${tagColor}60` : "var(--neon-dim)" }}
          />

          {/* Background glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${
                isLeft ? "80% 20%" : "20% 20%"
              }, ${tagColor}08, transparent 70%)`,
            }}
          />

          {/* Company name */}
          <div className="flex items-center gap-2 mb-2">
            <Zap
              className="w-4 h-4 transition-colors duration-300"
              style={{ color: tagColor }}
            />
            <span
              className="text-sm font-mono tracking-wider uppercase transition-colors duration-300"
              style={{ color: tagColor }}
            >
              {experience.company}
            </span>
          </div>

          {/* Role */}
          <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
            {experience.role}
          </h3>

          {/* Date & Location */}
          <div className="flex items-center gap-4 mb-4 text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-sm font-mono">{experience.period}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm font-mono">{experience.location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {experience.description}
          </p>

          {/* Tags */}
          {experience.tags && experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full border transition-all duration-300 group-hover:shadow-sm"
                  style={{
                    color: tagColor,
                    borderColor: `${tagColor}40`,
                    backgroundColor: `${tagColor}10`,
                    boxShadow: isHovered
                      ? `0 0 8px ${tagColor}15`
                      : "none",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { profile } = useProfile()
  const { language } = useLanguage()
  const data = portfolioData[language][profile].experience

  const label = language === "en" ? "Experience" : "Experiencia"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen bg-background overflow-hidden py-24 px-4 md:px-8"
    >
      {/* Background layers */}
      <CircuitBackground />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,70,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,70,239,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(217,70,239,0.06) 0%, rgba(217,70,239,0.01) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neon/30 bg-neon/5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-sm font-mono text-neon tracking-widest uppercase">
              {"// "}{label}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {data.title}
          </h2>

          {/* Animated underline */}
          <div className="flex items-center justify-center mt-4">
            <div
              className={`h-0.5 rounded-full bg-neon transition-all duration-1000 ease-out ${
                isVisible ? "w-20" : "w-0"
              }`}
              style={{
                boxShadow: "0 0 8px var(--neon-dim), 0 0 16px var(--neon-dim)",
              }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div
              className={`h-full transition-all duration-[2000ms] ease-out origin-top ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--neon-dim) 10%, var(--neon) 50%, var(--neon-dim) 90%, transparent)",
                boxShadow: "0 0 6px var(--neon-dim)",
              }}
            />
          </div>

          {/* Mobile: left vertical line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px">
            <div
              className={`h-full transition-all duration-[2000ms] ease-out origin-top ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--neon-dim) 10%, var(--neon) 50%, var(--neon-dim) 90%, transparent)",
                boxShadow: "0 0 6px var(--neon-dim)",
              }}
            />
          </div>

          {/* Experience items */}
          <div className="flex flex-col gap-12 md:gap-16">
            {data.items.map((exp, index) => {
              const isLeft = index % 2 === 0
              const tagColor = exp.tagColor || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
              return (
                <div
                  key={`${exp.company}-${index}`}
                  className="relative flex items-start"
                >
                  {/* ---- MOBILE layout ---- */}
                  <div className="md:hidden flex items-start gap-5 w-full">
                    {/* Timeline node */}
                    <div className="flex-shrink-0 relative z-10 mt-6">
                      <TimelineNode
                        isActive={isVisible}
                        color={tagColor}
                        index={index}
                      />
                    </div>

                    {/* Card */}
                    <div className="flex-1 min-w-0">
                      <ExperienceCard
                        experience={exp}
                        index={index}
                        isVisible={isVisible}
                        isHovered={hoveredIndex === index}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                        tagColor={tagColor}
                      />
                    </div>
                  </div>

                  {/* ---- DESKTOP layout ---- */}
                  <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] w-full items-start">
                    {/* Left column */}
                    <div
                      className={
                        isLeft ? "pr-8" : "pr-8 flex items-start justify-end"
                      }
                    >
                      {isLeft ? (
                        <ExperienceCard
                          experience={exp}
                          index={index}
                          isVisible={isVisible}
                          isHovered={hoveredIndex === index}
                          onHover={() => setHoveredIndex(index)}
                          onLeave={() => setHoveredIndex(null)}
                          tagColor={tagColor}
                        />
                      ) : (
                        <div
                          className={`flex flex-col items-end gap-1 pt-6 transition-all duration-700 ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }`}
                          style={{
                            transitionDelay: `${300 + index * 150}ms`,
                          }}
                        >
                          <span
                            className="text-sm font-mono"
                            style={{ color: tagColor }}
                          >
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Center node */}
                    <div className="flex justify-center pt-6 relative z-10">
                      <TimelineNode
                        isActive={isVisible}
                        color={tagColor}
                        index={index}
                      />
                    </div>

                    {/* Right column */}
                    <div
                      className={
                        isLeft
                          ? "pl-8 flex items-start"
                          : "pl-8"
                      }
                    >
                      {isLeft ? (
                        <div
                          className={`flex flex-col gap-1 pt-6 transition-all duration-700 ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }`}
                          style={{
                            transitionDelay: `${300 + index * 150}ms`,
                          }}
                        >
                          <span
                            className="text-sm font-mono"
                            style={{ color: tagColor }}
                          >
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      ) : (
                        <ExperienceCard
                          experience={exp}
                          index={index}
                          isVisible={isVisible}
                          isHovered={hoveredIndex === index}
                          onHover={() => setHoveredIndex(index)}
                          onLeave={() => setHoveredIndex(null)}
                          tagColor={tagColor}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-neon/30" />
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-neon/40" />
            <span className="text-xs font-mono text-neon/40 tracking-widest">
              {"{ exp }"}
            </span>
          </div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-neon/30" />
        </div>
      </div>
    </section>
  )
}
