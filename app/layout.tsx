import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers"

/* ── Typography ─────────────────────────────────────────────
   Inter     — variable body/display font (400–800 weight range)
   JetBrains Mono — monospaced code/technical font with ligatures
   Source: Web Animation Perf Guide — "Technical Mono" aesthetic
──────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  // Enable code ligatures (=>, ===, !==, etc.)
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Oscar Julián Osorio | Desarrollador Full-Stack · IA aplicada al SDLC',
  description:
    'Desarrollador full-stack con 3+ años sosteniendo una plataforma en producción: 6 354 commits, 369 MRs fusionados (97 % de aceptación) y un pipeline SDLC con agentes de IA. Colombia, remoto.',
  keywords: ['desarrollador full-stack', 'AI-assisted development', 'agentes IA', 'Claude Code', 'SDLC', 'GitLab CI/CD', 'Playwright', 'TypeScript', 'React', 'Colombia', 'remoto'],
  authors: [{ name: 'Oscar Julián Osorio' }],
  openGraph: {
    title: 'Oscar Julián Osorio — Desarrollador Full-Stack',
    description: '6 354 commits · 369 MRs fusionados · 97 % de aceptación · pipeline SDLC con agentes de IA. Métricas verificadas de GitLab, 2022–2026.',
    type: 'website',
    locale: 'es_CO',
  },
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon-dark-32x32.png`, media: '(prefers-color-scheme: dark)' },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon-light-32x32.png`, media: '(prefers-color-scheme: light)' },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <Providers attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
