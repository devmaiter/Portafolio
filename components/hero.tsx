"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56, 189, 248, 0.5)"
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 - dist / 1000})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponible para nuevos proyectos
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="text-foreground">Oscar Julián</span>
          <br />
          <span className="text-primary">Osorio</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 font-mono">
          {"<"}<span className="text-primary">Desarrollador</span>{" /> + {"}<span className="text-primary">Ciberseguridad</span>{"}"}
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Ingeniero de Soporte y Desarrollador de Software con{" "}
          <span className="text-foreground font-medium">3 años de experiencia</span> combinando el desarrollo frontend con la gestión de seguridad informática y soporte técnico avanzado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="group">
            <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Contáctame
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent">
            Ver Proyectos
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/oscar-julian-osorio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/oscar-julian-osorio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:contacto@oscarjulian.dev"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
