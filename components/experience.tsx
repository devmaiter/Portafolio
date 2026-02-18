"use client"

import { Building2, Calendar, ExternalLink, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Ingeniero de Soporte / Desarrollador Full Stack",
    company: "Integral IT",
    period: "2025 – Actualidad",
    description: [
      "Lideré la implementación y configuración de políticas de seguridad en Bitdefender GravityZone, gestionando el módulo de Patch Management para asegurar la integridad de la infraestructura.",
      "Desarrollé scripts en PowerShell para la automatización de tareas administrativas y renombrado masivo de archivos, reduciendo el tiempo operativo manual.",
      "Colaboré en proyectos de integración de hardware y software, incluyendo la conexión de sistemas de aire acondicionado mediante protocolo Modbus con ecosistemas Q-SYS.",
    ],
    tags: ["Bitdefender", "PowerShell", "Q-SYS", "Modbus", "IoT"],
    highlight: "Caso de éxito: Universidad de La Sabana",
    current: true,
  },
  {
    title: "Desarrollador Frontend & Soporte TI",
    company: "Konrradf SAS",
    period: "2019 – 2024",
    description: [
      "Desarrollé interfaces de usuario dinámicas y responsivas utilizando React y Angular, asegurando una experiencia de usuario (UX) fluida.",
      "Brindé soporte técnico integral, diagnosticando y resolviendo incidencias de hardware y software para minimizar el tiempo de inactividad.",
      "Participé en el ciclo completo de desarrollo de software, desde la toma de requerimientos hasta el despliegue y mantenimiento.",
    ],
    tags: ["React", "Angular", "HTML5", "CSS3", "JavaScript"],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// EXPERIENCIA"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Trayectoria Profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Construyendo soluciones que combinan desarrollo de software con seguridad informática.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-primary border-primary shadow-lg shadow-primary/50"
                    : "bg-background border-primary/50"
                } ${index % 2 === 0 ? "left-0 md:left-1/2 md:-translate-x-1/2" : "left-0 md:left-1/2 md:-translate-x-1/2"}`}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
                )}
              </div>

              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="group p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  {exp.current && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                      </span>
                      Actual
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>

                  <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ChevronRight className={`h-4 w-4 text-primary shrink-0 mt-0.5 ${index % 2 === 0 ? "md:order-last" : ""}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.highlight && (
                    <div className={`flex items-center gap-2 text-sm text-primary mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">{exp.highlight}</span>
                    </div>
                  )}

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
