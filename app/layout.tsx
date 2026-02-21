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
  title: 'Oscar Julián Osorio | Dev · Security · AV Engineering',
  description:
    'Portfolio de Oscar Julián Osorio — Desarrollador de Software, Especialista en Ciberseguridad e Ingeniero de Sistemas AV. Basado en Colombia.',
  keywords: ['portfolio', 'developer', 'cybersecurity', 'AV engineering', 'fullstack', 'Colombia'],
  authors: [{ name: 'Oscar Julián Osorio' }],
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
