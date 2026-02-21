"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

/* ── ~7 second hack intro sequence ──────────────────────── */
interface TerminalLine {
    text: string
    type: 'command' | 'output' | 'error' | 'success' | 'warning' | 'progress'
    delay: number
    duration: number
}

const SEQUENCE: TerminalLine[] = [
    { text: 'oscar@portfolio:~$ sudo nmap -sV target.sys', type: 'command', delay: 100, duration: 340 },
    { text: '22/tcp open ssh  443/tcp open https  8443/tcp [REDACTED]', type: 'warning', delay: 50, duration: 140 },
    { text: 'oscar@portfolio:~$ python3 exploit.py --target 192.168.1.1', type: 'command', delay: 150, duration: 380 },
    { text: '[!] Firewall triggered — applying polymorphic bypass...', type: 'error', delay: 40, duration: 190 },
    { text: '[*] Shellcode injected (1337 bytes) ✓', type: 'output', delay: 50, duration: 140 },
    { text: 'oscar@portfolio:~$ hashcat -m 1800 hashes.txt rockyou.txt', type: 'command', delay: 140, duration: 360 },
    { text: 'Progress.........: 14823492/14344391 (100.0%)', type: 'progress', delay: 55, duration: 150 },
    { text: 'oscar@portfolio:~$ ssh -i id_rsa root@target.sys', type: 'command', delay: 150, duration: 310 },
    { text: 'Authenticated.', type: 'success', delay: 190, duration: 110 },
    { text: '████  ACCESS GRANTED  ████', type: 'success', delay: 100, duration: 90 },
]

const GLITCH_CHARS = '!@#$%^&*<>[]{}|\\/?~`ÅΩ∑∂ƒ©√∫≈01'
function glitch(text: string, i = 0.42): string {
    return text.split('').map(c => Math.random() < i ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)] : c).join('')
}

function Scanlines() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.13) 2px,rgba(0,0,0,0.13) 4px)' }}
            aria-hidden="true"
        />
    )
}

function MatrixCanvas() {
    const ref = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = ref.current; if (!canvas) return
        const ctx = canvas.getContext('2d'); if (!ctx) return
        canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight
        const cols = Math.floor(canvas.width / 14)
        const drops = Array(cols).fill(1) as number[]
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフへホ'
        let rafId: number
        const tick = () => {
            ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = '#00ff41'; ctx.font = '12px "JetBrains Mono",monospace'
            for (let i = 0; i < drops.length; i++) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, drops[i] * 14)
                if (drops[i] * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0
                drops[i]++
            }
            rafId = requestAnimationFrame(tick)
        }
        tick(); return () => cancelAnimationFrame(rafId)
    }, [])
    return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true" />
}

export function HackIntro({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<{ text: string; type: string }[]>([])
    const [typing, setTyping] = useState('')
    const [phase, setPhase] = useState<'typing' | 'granted' | 'glitch'>('typing')
    const [progress, setProgress] = useState(0)
    const [glitchText, setGlitchText] = useState('████  ACCESS GRANTED  ████')
    const termRef = useRef<HTMLDivElement>(null)
    const lineIdx = useRef(0)
    const cancelled = useRef(false)

    useEffect(() => { const el = termRef.current; if (el) el.scrollTop = el.scrollHeight }, [lines, typing])

    useEffect(() => {
        if (phase !== 'typing' || !lines.find(l => l.type === 'progress')) return
        let p = 0
        const iv = setInterval(() => { p += 5; setProgress(Math.min(p, 100)); if (p >= 100) clearInterval(iv) }, 16)
        return () => clearInterval(iv)
    }, [lines, phase])

    const run = useCallback(async () => {
        for (let i = 0; i < SEQUENCE.length; i++) {
            if (cancelled.current) return
            const item = SEQUENCE[i]
            await new Promise(r => setTimeout(r, item.delay))
            if (cancelled.current) return
            const msPerChar = item.duration / Math.max(item.text.length, 1)
            for (let c = 0; c <= item.text.length; c++) {
                if (cancelled.current) return
                setTyping(item.text.slice(0, c))
                await new Promise(r => setTimeout(r, msPerChar))
            }
            setLines(prev => [...prev, { text: item.text, type: item.type }])
            setTyping(''); lineIdx.current = i + 1
        }
        if (cancelled.current) return
        await new Promise(r => setTimeout(r, 200))
        setPhase('granted')
        const base = '████  ACCESS GRANTED  ████'; let n = 0
        const iv = setInterval(() => {
            n++
            setGlitchText(n < 7 ? glitch(base) : base)
            if (n >= 10) {
                clearInterval(iv)
                setTimeout(() => { setPhase('glitch'); setTimeout(onComplete, 550) }, 280)
            }
        }, 45)
    }, [onComplete])

    useEffect(() => { cancelled.current = false; run(); return () => { cancelled.current = true } }, [run])

    const color = (t: string) => ({ command: '#e2e8f0', success: '#00ff88', error: '#ff4455', warning: '#fbbf24', progress: '#38bdf8', output: '#94a3b8' }[t] ?? '#94a3b8')
    const isGranted = phase !== 'typing'
    const skip = () => { cancelled.current = true; onComplete() }

    return (
        <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
            animate={phase === 'glitch' ? { opacity: [1, 0.4, 1, 0.1, 0.6, 0], x: [0, -5, 5, -3, 3, 0] } : {}}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            aria-modal="true"
        >
            <MatrixCanvas />
            <Scanlines />
            <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true"
                style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%,transparent 25%,rgba(0,0,0,0.88) 100%)' }} />

            <motion.div
                className="relative z-30 w-full max-w-2xl mx-4"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                role="log" aria-live="polite"
            >
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-t-xl"
                    style={{ background: '#12121f', borderBottom: '1px solid #1e3a5f' }}>
                    <span className="w-3 h-3 rounded-full bg-rose-500" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="ml-3 text-xs font-mono text-slate-500">oscar@portfolio:~$ — bash — 80×24</span>
                </div>

                {/* Terminal body */}
                <div ref={termRef} className="rounded-b-xl overflow-y-auto" style={{
                    background: 'rgba(5,5,14,0.98)',
                    border: `1px solid ${isGranted ? '#00ff88' : '#1e3a5f'}`,
                    borderTop: 'none', height: '340px', padding: '14px 18px',
                    fontFamily: '"JetBrains Mono","Fira Code",monospace', fontSize: '13px', lineHeight: '1.75',
                    transition: 'border-color 0.3s,box-shadow 0.3s',
                    boxShadow: isGranted
                        ? '0 0 50px rgba(0,255,136,0.3),inset 0 0 40px rgba(0,255,136,0.05)'
                        : '0 0 30px rgba(0,80,255,0.12)',
                }}>
                    {lines.map((line, i) => (
                        <div key={i} style={{ color: color(line.type) }}>
                            {line.type === 'command' && <span style={{ color: '#00ff88' }}>❯ </span>}
                            {line.type === 'success' && line.text.includes('ACCESS GRANTED') ? (
                                <motion.span style={{
                                    color: '#00ff88', fontWeight: 'bold', letterSpacing: '0.18em',
                                    textShadow: '0 0 24px #00ff88, 0 0 60px rgba(0,255,136,0.4)',
                                    display: 'block', textAlign: 'center', fontSize: '15px', marginTop: '8px',
                                }}
                                    animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 0.35, repeat: Infinity }}>
                                    {glitchText}
                                </motion.span>
                            ) : line.text}
                        </div>
                    ))}

                    {typing && (
                        <div style={{ color: color(SEQUENCE[lineIdx.current]?.type ?? 'output') }}>
                            {SEQUENCE[lineIdx.current]?.type === 'command' && <span style={{ color: '#00ff88' }}>❯ </span>}
                            {typing}
                            <span aria-hidden="true" style={{
                                display: 'inline-block', width: '8px', height: '1em', background: '#00ff88',
                                marginLeft: '2px', verticalAlign: 'text-bottom',
                                animation: 'caretBlink 0.7s step-end infinite',
                            }} />
                        </div>
                    )}

                    {lines.some(l => l.type === 'progress') && progress < 100 && (
                        <div className="mt-1">
                            <div style={{ color: '#38bdf8', fontSize: '12px', marginBottom: '4px' }}>Cracking... {progress}%</div>
                            <div style={{ background: '#1e3a5f', borderRadius: '2px', height: '5px' }}>
                                <div style={{
                                    height: '100%', borderRadius: '2px', width: `${progress}%`,
                                    background: 'linear-gradient(90deg,#0ea5e9,#00ff88)',
                                    boxShadow: '0 0 10px #00ff88', transition: 'width 0.03s linear',
                                }} />
                            </div>
                        </div>
                    )}
                </div>

                <p className="text-center text-xs font-mono mt-2 cursor-pointer select-none transition-colors hover:text-slate-400"
                    style={{ color: '#2d3748' }} onClick={skip}>
                    [ click anywhere to skip ]
                </p>
            </motion.div>

            <div className="absolute inset-0 z-20 cursor-pointer" onClick={skip} role="button" aria-label="Skip intro" />
        </motion.div>
    )
}
