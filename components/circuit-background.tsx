"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationId: number
        let particles: Array<{
            x: number; y: number; speed: number; progress: number
            path: Array<{ x: number; y: number }>
        }> = []

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }

        const generatePath = () => {
            const w = canvas.offsetWidth, h = canvas.offsetHeight
            const points: Array<{ x: number; y: number }> = []
            let x = Math.random() * w, y = Math.random() * h
            const segments = 4 + Math.floor(Math.random() * 6)
            points.push({ x, y })
            for (let i = 0; i < segments; i++) {
                if (Math.random() > 0.5) x += (Math.random() - 0.5) * 200
                else y += (Math.random() - 0.5) * 200
                x = Math.max(0, Math.min(w, x)); y = Math.max(0, Math.min(h, y))
                points.push({ x, y })
            }
            return points
        }

        const spawnParticle = () => {
            if (particles.length < 15)
                particles.push({ x: 0, y: 0, speed: 0.003 + Math.random() * 0.005, progress: 0, path: generatePath() })
        }

        const drawCircuitLines = () => {
            const w = canvas.offsetWidth, h = canvas.offsetHeight
            ctx.strokeStyle = "rgba(217,70,239,0.06)"; ctx.lineWidth = 1
            for (let y = 0; y < h; y += 60) {
                ctx.beginPath(); ctx.moveTo(0, y); let x = 0
                while (x < w) {
                    const segLen = 20 + Math.random() * 80; x += segLen
                    ctx.lineTo(Math.min(x, w), y)
                    if (Math.random() > 0.7 && x < w) {
                        const tl = 20 + Math.random() * 40
                        ctx.lineTo(x, y + (Math.random() > 0.5 ? tl : -tl)); ctx.moveTo(x, y)
                    }
                }
                ctx.stroke()
            }
            for (let y = 30; y < h; y += 80)
                for (let x = 30; x < w; x += 100)
                    if (Math.random() > 0.7) {
                        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2)
                        ctx.fillStyle = "rgba(217,70,239,0.15)"; ctx.fill()
                    }
        }

        const animate = () => {
            const w = canvas.offsetWidth, h = canvas.offsetHeight
            ctx.clearRect(0, 0, w, h); drawCircuitLines()
            if (Math.random() > 0.95) spawnParticle()
            particles.forEach((p) => {
                p.progress += p.speed; if (p.progress > 1) p.progress = 0
                const pl = p.path.length - 1, si = Math.floor(p.progress * pl)
                const sp = (p.progress * pl) % 1
                const from = p.path[Math.min(si, pl)], to = p.path[Math.min(si + 1, pl)]
                if (from && to) {
                    p.x = from.x + (to.x - from.x) * sp; p.y = from.y + (to.y - from.y) * sp
                    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20)
                    g.addColorStop(0, "rgba(217,70,239,0.6)"); g.addColorStop(0.5, "rgba(217,70,239,0.15)"); g.addColorStop(1, "rgba(217,70,239,0)")
                    ctx.beginPath(); ctx.arc(p.x, p.y, 20, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
                    ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(240,171,252,0.9)"; ctx.fill()
                }
            })
            particles = particles.filter((p) => p.progress < 0.99)
            animationId = requestAnimationFrame(animate)
        }

        resize(); window.addEventListener("resize", resize); animate()
        return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animationId) }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
