"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface Skill { name: string; icon: ReactNode; color: string }
interface SkillCardProps { title: string; icon: ReactNode; skills: Skill[]; index: number }

export function SkillCard({ title, icon, skills, index }: SkillCardProps) {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
    const [isCardHovered, setIsCardHovered] = useState(false)

    return (
        <div
            className="group relative"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => { setIsCardHovered(false); setHoveredSkill(null) }}
        >
            {/* Glow border */}
            <div
                className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg,rgba(217,70,239,0.4),transparent 50%,rgba(217,70,239,0.2))" }}
            />
            {/* Card */}
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-500 hover:border-neon/30 overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-px bg-neon/40" />
                <div className="absolute top-0 left-0 h-8 w-px bg-neon/40" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-neon/40" />
                <div className="absolute bottom-0 right-0 h-8 w-px bg-neon/40" />
                {/* BG glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 50%,rgba(217,70,239,0.05),transparent 70%)" }}
                />
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors duration-300">
                            {icon}
                        </div>
                        <div className="absolute inset-0 rounded-lg border border-neon/30 animate-ping opacity-0 group-hover:opacity-20" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                            <span className="text-xs text-neon/70 font-mono tracking-wider uppercase">
                                {isCardHovered ? "Activo" : "Online"}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, i) => (
                        <div
                            key={skill.name}
                            className="relative cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(i)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div
                                className="flex items-center gap-2.5 p-2.5 rounded-lg border transition-all duration-300"
                                style={{
                                    borderColor: hoveredSkill === i ? `${skill.color}66` : "rgba(42,42,69,0.5)",
                                    backgroundColor: hoveredSkill === i ? `${skill.color}0D` : "rgba(22,22,42,0.3)",
                                }}
                            >
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${skill.color}15`,
                                        color: skill.color,
                                        boxShadow: hoveredSkill === i ? `0 0 16px ${skill.color}40,inset 0 0 8px ${skill.color}15` : "none",
                                        border: hoveredSkill === i ? `1px solid ${skill.color}30` : "1px solid transparent",
                                    }}
                                >
                                    {skill.icon}
                                </div>
                                <span
                                    className="text-sm font-medium transition-colors duration-300 truncate"
                                    style={{ color: hoveredSkill === i ? skill.color : "var(--foreground)" }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
