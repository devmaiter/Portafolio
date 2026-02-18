"use client"

import { useRef } from "react"
import { Code2, Shield, Terminal, Cpu, Database, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Desarrollo Frontend",
    icon: Code2,
    skills: ["React.js", "Angular", "HTML5", "CSS3", "JavaScript (ES6+)", "Elm"],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
  },
  {
    title: "Ciberseguridad & Soporte",
    icon: Shield,
    skills: ["Bitdefender GravityZone", "Patch Management", "Gestión de Vulnerabilidades", "Soporte Nivel 2/3"],
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    title: "Automatización & Scripting",
    icon: Terminal,
    skills: ["PowerShell", "Bash", "Integraciones API", "Automatización de Procesos"],
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    title: "Protocolos & Sistemas",
    icon: Cpu,
    skills: ["Q-SYS", "Modbus", "Integración IoT", "Hardware Integration"],
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-400",
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// HABILIDADES"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Stack Tecnológico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinando desarrollo de software con seguridad informática para crear soluciones robustas y seguras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative p-6 rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <category.icon className="w-full h-full" />
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 mb-4 ${category.iconColor}`}>
                  <category.icon className="h-5 w-5" />
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-background/50 border border-border/50 text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style code block */}
        <div className="mt-12 rounded-xl border border-border overflow-hidden bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2">skills.ts</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
              <code>
                <span className="text-primary">const</span> <span className="text-amber-400">developer</span> = {"{"}
                {"\n"}  <span className="text-muted-foreground">name:</span> <span className="text-emerald-400">&quot;Oscar Julián Osorio&quot;</span>,
                {"\n"}  <span className="text-muted-foreground">role:</span> <span className="text-emerald-400">&quot;Frontend Developer & Security Specialist&quot;</span>,
                {"\n"}  <span className="text-muted-foreground">experience:</span> <span className="text-rose-400">3</span>,
                {"\n"}  <span className="text-muted-foreground">passion:</span> <span className="text-emerald-400">&quot;Building secure & scalable solutions&quot;</span>
                {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
