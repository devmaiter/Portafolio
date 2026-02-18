"use client"

import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <span className="font-bold text-foreground">
                OJ<span className="text-primary">.</span>dev
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Oscar Julián Osorio. Todos los derechos reservados.
            </p>
          </div>

          {/* Center message */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
            <span>y mucho</span>
            <span className="font-mono text-primary">{"<código />"}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/oscar-julian-osorio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/oscar-julian-osorio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:contacto@oscarjulian.dev"
              className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
