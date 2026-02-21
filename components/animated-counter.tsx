"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    /** Target value to count up to */
    target: number
    /** Suffix appended after the number (e.g. "+", "%", "k") */
    suffix?: string
    /** Prefix before the number (e.g. "$") */
    prefix?: string
    /** Duration in ms for the count-up animation (default 1800) */
    duration?: number
    /** CSS class names on the wrapping span */
    className?: string
}

/**
 * AnimatedCounter — scroll-triggered count-up widget.
 *
 * Technique:
 *  • Uses IntersectionObserver (not window.scroll) for performance
 *  • Uses requestAnimationFrame + easeOut for smooth deceleration
 *  • Respects prefers-reduced-motion — shows target immediately
 *  • Fires animation once (not on every scroll in/out)
 */
export function AnimatedCounter({
    target,
    suffix = '',
    prefix = '',
    duration = 1800,
    className = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const wrapperRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = wrapperRef.current
        if (!el) return

        // Accessibility: skip animation
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reducedMotion) {
            setCount(target)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true)
                }
            },
            { threshold: 0.5 },
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [started, target])

    // Run count-up once started
    useEffect(() => {
        if (!started) return

        const startTime = performance.now()

        const frame = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(frame)
        }

        const rafId = requestAnimationFrame(frame)
        return () => cancelAnimationFrame(rafId)
    }, [started, target, duration])

    return (
        <span ref={wrapperRef} className={className} aria-label={`${prefix}${target}${suffix}`}>
            {prefix}{count}{suffix}
        </span>
    )
}
