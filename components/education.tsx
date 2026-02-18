"use client"

import { GraduationCap, Award, ExternalLink } from "lucide-react"

const education = [
  {
    title: "Analista de Sistemas de Información",
    institution: "SENA",
    year: "2025",
    type: "education",
    icon: GraduationCap,
  },
  {
    title: "Certificado Profesional en Ciberseguridad",
    institution: "Google",
    year: "2023",
    type: "certification",
    icon: Award,
    badge: "Google Career Certificate",
  },
  {
    title: "Misión TIC 2022",
    institution: "Ministerio de las TIC",
    year: "2020",
    type: "program",
    icon: Award,
    badge: "Programa Nacional",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// EDUCACIÓN & CERTIFICACIONES"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Formación Continua
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprometido con el aprendizaje constante en tecnología y seguridad informática.
          </p>
        </div>

        <div className="grid gap-4">
          {education.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex items-center gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.institution} • {item.year}
                </p>
              </div>

              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        {/* Security badge section */}
        <div className="mt-12 p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Especialista en Seguridad Certificado
              </h3>
              <p className="text-muted-foreground">
                Certificado por Google en ciberseguridad con experiencia práctica en la implementación de soluciones de seguridad empresarial como Bitdefender GravityZone, gestión de vulnerabilidades y patch management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Shield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
