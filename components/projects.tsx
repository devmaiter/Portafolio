"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { useLanguage, useProfile, useSkillFilter } from "@/app/providers"
import { portfolioData, type Language, type ProjectItem } from "@/lib/data"
import { MrsChart } from "@/components/mrs-chart"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ""

// Cada proyecto es un capítulo: imagen o gráfica grande a un lado, la historia al otro, alternando.
function Media({ project, language }: { project: ProjectItem; language: Language }) {
  if (project.image) {
    return (
      <figure className="overflow-hidden rounded-xl ring-1 ring-border/70 bg-card/40 shadow-[0_40px_90px_-50px_color-mix(in_srgb,var(--primary)_55%,transparent)]">
        <img
          src={`${BASE}${project.image.src}`}
          alt={project.image.alt}
          loading="lazy"
          className="block aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </figure>
    )
  }
  if (project.visual === "mrs-por-ano") {
    return (
      <div className="rounded-xl ring-1 ring-border/70 bg-card/40 p-6 sm:p-8">
        <MrsChart language={language} />
      </div>
    )
  }
  // Sin imagen: la cifra del proyecto ocupa el panel.
  return (
    <div
      className="relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-xl ring-1 ring-border/70 bg-card/40 p-8"
      style={{
        backgroundImage: "radial-gradient(color-mix(in srgb, var(--primary) 22%, transparent) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <span className="font-mono text-6xl font-bold leading-none text-primary sm:text-7xl">{project.metric?.value}</span>
      <span className="mt-4 max-w-sm text-sm text-muted-foreground">{project.metric?.label}</span>
    </div>
  )
}

function Capitulo({ project, index, language }: { project: ProjectItem; index: number; language: Language }) {
  const [nombre, subtitulo] = project.title.split(" — ")
  const mediaPropia = Boolean(project.image || project.visual)
  const externo = project.link?.startsWith("http")
  const derecha = index % 2 === 1

  return (
    <motion.li
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`md:col-span-7 ${derecha ? "md:order-2" : ""}`}>
        <Media project={project} language={language} />
      </div>

      <div className="min-w-0 md:col-span-5">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <span className="min-w-0">{project.context}</span>
        </div>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{nombre}</h3>
        {subtitulo && <p className="mt-1 text-lg text-muted-foreground">{subtitulo}</p>}

        {project.metric && mediaPropia && (
          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-3xl font-bold text-primary">{project.metric.value}</span>
            <span className="text-sm text-muted-foreground">{project.metric.label}</span>
          </p>
        )}

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <p className="mt-5 font-mono text-xs leading-relaxed text-foreground/70">{project.tags.join("  ·  ")}</p>

        {(project.link || project.github) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {project.link && (
              <a
                href={project.link}
                {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {project.linkLabel ?? (language === "en" ? "View" : "Ver")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {language === "en" ? "Code" : "Código"}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.li>
  )
}

export function Projects() {
  const { language } = useLanguage()
  const { profile } = useProfile()
  const { skillFilter, setSkillFilter } = useSkillFilter()

  const data = portfolioData[language][profile].projects

  // Si en Habilidades tocaron una tecnología, se ven solo los proyectos que la usan.
  const lista = useMemo(() => {
    if (!data) return []
    if (skillFilter === "All") return data.items
    return data.items.filter((p) => p.tags.includes(skillFilter))
  }, [data, skillFilter])

  // Los perfiles sin proyectos (seguridad, AV) no muestran la sección.
  if (!data) return null

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border/40 px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            {"// "}{language === "en" ? "Selected work" : "Trabajo seleccionado"}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{data.title}</h2>
          <p className="mt-4 text-muted-foreground">{data.description}</p>
        </motion.header>

        {skillFilter !== "All" && (
          <p className="mb-12 flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
            <span>
              {language === "en" ? "Projects with" : "Proyectos con"} <span className="text-primary">{skillFilter}</span>
              {lista.length === 0 && (language === "en" ? ": none yet." : ": todavía ninguno.")}
            </span>
            <button type="button" onClick={() => setSkillFilter("All")} className="text-foreground underline underline-offset-4">
              {language === "en" ? "Show all" : "Ver todos"}
            </button>
          </p>
        )}

        <ol className="grid gap-24 md:gap-32">
          {lista.map((project, i) => (
            <Capitulo key={project.title} project={project} index={i} language={language} />
          ))}
        </ol>
      </div>
    </section>
  )
}
