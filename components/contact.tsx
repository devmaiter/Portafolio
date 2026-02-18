"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// CONTACTO"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Siempre estoy abierto a nuevas oportunidades y colaboraciones interesantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Información de Contacto</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contacto@oscarjulian.dev"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">contacto@oscarjulian.dev</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="text-foreground">Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Redes Profesionales</h3>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/oscar-julian-osorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/oscar-julian-osorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Visual */}
          <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Envíame un mensaje
              </h3>
              <p className="text-muted-foreground mb-6">
                ¿Tienes un proyecto en mente? ¡Me encantaría escucharte!
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                contacto@oscarjulian.dev
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                Disponible para proyectos <span className="text-primary font-medium">freelance</span> y <span className="text-primary font-medium">posiciones remotas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
