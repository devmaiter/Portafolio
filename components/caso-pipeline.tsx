"use client"

import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/app/providers"
import { MrsChart } from "@/components/mrs-chart"

// Caso de estudio del pipeline SDLC (Konrradf). Las áreas van por lo que hacen, sin nombres internos de repositorios.
const AREAS = [
  { es: "Panel de administración de servicios internos (Elm + PHP)", en: "Internal services admin panel (Elm + PHP)", mrs: 69 },
  { es: "Sitio público de avalúos en línea", en: "Public online appraisals site", mrs: 64 },
  { es: "Núcleo TypeScript del framework interno", en: "TypeScript core of the in-house framework", mrs: 59 },
  { es: "Administrador del producto de avalúos", en: "Appraisals product admin", mrs: 51 },
  { es: "Administrador del CMS de páginas", en: "Pages CMS admin", mrs: 46 },
  { es: "CMS público de páginas", en: "Public pages CMS", mrs: 32 },
  { es: "Versionado de cambios de base de datos", en: "Database change versioning", mrs: 23 },
  { es: "Backend de un sistema interno", en: "Backend of an internal system", mrs: 18 },
  { es: "Otros 4 repositorios", en: "4 other repositories", mrs: 7 },
]

const T = {
  es: {
    volver: "Portafolio",
    eyebrow: "Caso de estudio · Konrradf · 2024–2026",
    titulo: "Pipeline SDLC con agentes de IA",
    lead: "Diseño y mantengo el pipeline con el que un equipo pequeño automatiza el ciclo de vida completo de un issue de GitLab usando agentes de IA, con revisión humana en cada entrega.",
    fuente: "Datos de la API de GitLab, de noviembre de 2022 al 15 de julio de 2026.",
    cifras: [
      { v: "369", k: "MRs fusionados" },
      { v: "97 %", k: "tasa de fusión" },
      { v: "6 354", k: "commits" },
      { v: "+34 %", k: "de 2024 a 2025" },
    ],
    pasos: [
      { t: "Problema", d: "Un equipo reducido mantiene varios productos en producción a la vez. Cada issue exigía repetir a mano el mismo ciclo: entender, planificar, implementar, revisar y probar. La capacidad de revisión era el cuello de botella." },
      { t: "Solución", d: "Un repositorio central de skills, agentes y CI compartidos sobre Claude Code. Los agentes leen el issue, proponen un plan, implementan en una rama con las convenciones del equipo, se revisan entre sí y ejecutan pruebas Playwright. Cada MR pasa por una persona antes de fusionarse." },
      { t: "Resultado", d: "El ciclo del issue a producción quedó automatizado de punta a punta: el equipo revisa en lugar de teclear. El ritmo pasó de 101 MRs fusionados en 2024 a 135 en 2025, manteniendo la aceptación en 97 %." },
    ],
    flujo: ["issue", "definir", "planificar", "implementar", "revisar", "probar", "MR", "una persona aprueba", "producción"],
    tituloAnos: "Ritmo de entrega sostenido y creciente",
    textoAnos: "2025 cerró con 135 Merge Requests fusionados, más de 11 por mes.",
    tituloAreas: "Contribución a toda la plataforma",
    textoAreas: "Desde el sitio público y los paneles de administración hasta el núcleo del framework interno y el versionado de la base de datos.",
    mrs: "MRs",
    tituloPracticas: "Cómo trabajo",
    practicas: [
      { t: "Entregas pequeñas y frecuentes", d: "Cada Merge Request resuelve una sola cosa. 369 fusionados desde 2023, con meses de 11 o más." },
      { t: "97 % de aceptación", d: "De 379 MRs abiertos, 369 terminaron fusionados en la rama principal." },
      { t: "Convenciones y trazabilidad", d: "Ramas con prefijo, changelog y versionado en cada entrega, y títulos de MR estandarizados." },
      { t: "CI/CD dentro del flujo", d: "Pipelines de GitLab que integran develop en las ramas de trabajo, etiquetan versiones y publican a producción." },
    ],
    tituloEntregas: "Entregas destacadas de 2026",
    entregas: [
      { f: "jul", t: "Bloques de contenido para el CMS", d: "Slider de imágenes y nuevos bloques para el constructor de páginas." },
      { f: "2026", t: "Editor de texto enriquecido", d: "Integrado en los sitios con puertos de Elm y un proxy en PHP." },
      { f: "feb–abr", t: "Gestión de ofertas de servicio en Elm", d: "Formulario, listado, edición y borrado con modales, selección de íconos y galería de imágenes." },
      { f: "feb–mar", t: "Categorías de fotos", d: "Procedimientos almacenados en MySQL y su uso desde el frontend para asignar imágenes por categoría." },
      { f: "abr", t: "Formularios para campañas", d: "Ajuste de los formularios de la página de inicio para campañas de Google Ads." },
    ],
    tituloStack: "Stack de trabajo",
    stack: [
      { t: "Backend", d: "PHP sobre arquitectura propia, APIs internas" },
      { t: "Frontend", d: "Elm, TypeScript, JavaScript, SASS" },
      { t: "Datos", d: "MySQL, procedimientos almacenados, triggers" },
      { t: "Calidad", d: "Playwright, GitLab CI/CD" },
      { t: "IA", d: "Claude Code, agentes y skills propias" },
    ],
    cierre: "Volver al portafolio",
  },
  en: {
    volver: "Portfolio",
    eyebrow: "Case study · Konrradf · 2024–2026",
    titulo: "AI-agent SDLC pipeline",
    lead: "I design and maintain the pipeline a small team uses to automate the full lifecycle of a GitLab issue with AI agents, with human review on every delivery.",
    fuente: "Data from the GitLab API, November 2022 to July 15, 2026.",
    cifras: [
      { v: "369", k: "merged MRs" },
      { v: "97%", k: "merge rate" },
      { v: "6,354", k: "commits" },
      { v: "+34%", k: "from 2024 to 2025" },
    ],
    pasos: [
      { t: "Problem", d: "A small team keeps several products in production at once. Every issue meant repeating the same cycle by hand: understand, plan, implement, review and test. Review capacity was the bottleneck." },
      { t: "Solution", d: "A central repository of shared skills, agents and CI on Claude Code. Agents read the issue, propose a plan, implement on a branch following team conventions, review each other and run Playwright tests. Every MR goes through a person before it is merged." },
      { t: "Result", d: "The issue-to-production cycle is automated end to end: the team reviews instead of typing. Delivery went from 101 merged MRs in 2024 to 135 in 2025, holding a 97% merge rate." },
    ],
    flujo: ["issue", "define", "plan", "implement", "review", "test", "MR", "a person approves", "production"],
    tituloAnos: "Steady, growing delivery",
    textoAnos: "2025 closed with 135 merged Merge Requests, more than 11 a month.",
    tituloAreas: "Work across the whole platform",
    textoAreas: "From the public site and admin panels to the core of the in-house framework and database versioning.",
    mrs: "MRs",
    tituloPracticas: "How I work",
    practicas: [
      { t: "Small, frequent deliveries", d: "Each Merge Request solves one thing. 369 merged since 2023, with months of 11 or more." },
      { t: "97% acceptance", d: "Of 379 MRs opened, 369 were merged into the main branch." },
      { t: "Conventions and traceability", d: "Prefixed branches, changelog and versioning on every delivery, and standard MR titles." },
      { t: "CI/CD inside the flow", d: "GitLab pipelines that merge develop into work branches, tag versions and publish to production." },
    ],
    tituloEntregas: "Highlighted 2026 deliveries",
    entregas: [
      { f: "Jul", t: "Content blocks for the CMS", d: "Image slider and new blocks for the page builder." },
      { f: "2026", t: "Rich text editor", d: "Wired into the sites through Elm ports and a PHP proxy." },
      { f: "Feb–Apr", t: "Service offers management in Elm", d: "Form, list, edit and delete with modals, icon picker and image gallery." },
      { f: "Feb–Mar", t: "Photo categories", d: "MySQL stored procedures used from the frontend to assign images by category." },
      { f: "Apr", t: "Campaign forms", d: "Home page forms adjusted for Google Ads campaigns." },
    ],
    tituloStack: "Work stack",
    stack: [
      { t: "Backend", d: "PHP on an in-house architecture, internal APIs" },
      { t: "Frontend", d: "Elm, TypeScript, JavaScript, SASS" },
      { t: "Data", d: "MySQL, stored procedures, triggers" },
      { t: "Quality", d: "Playwright, GitLab CI/CD" },
      { t: "AI", d: "Claude Code, agents and in-house skills" },
    ],
    cierre: "Back to the portfolio",
  },
}

function Titulo({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{"// "}{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>
    </div>
  )
}

export function CasoPipeline() {
  const { language, setLanguage } = useLanguage()
  const t = T[language]
  const max = Math.max(...AREAS.map((a) => a.mrs))

  return (
    <main className="min-h-screen bg-background px-6 pb-24 text-foreground">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-6">
        <a href="../" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.volver}
        </a>
        <div className="flex gap-1 font-mono text-xs" role="group" aria-label="Idioma / Language">
          {(["es", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLanguage(l)}
              aria-pressed={language === l}
              className={`rounded px-2 py-1 uppercase ${language === l ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      <article className="mx-auto max-w-5xl">
        <header className="pt-10 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-6xl">{t.titulo}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t.lead}</p>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.cifras.map((c) => (
              <div key={c.k} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{c.k}</dt>
                <dd className="font-mono text-4xl font-bold tabular-nums text-primary">{c.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">{t.fuente}</p>
        </header>

        <section className="grid gap-10 border-t border-border/60 py-16 md:grid-cols-3">
          {t.pasos.map((p, i) => (
            <div key={p.t}>
              <p className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-xl font-bold">{p.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
          <p className="font-mono text-xs leading-loose text-muted-foreground md:col-span-3">
            {t.flujo.map((paso, i) => (
              <span key={paso}>
                {i > 0 && <span className="px-2 text-primary" aria-hidden="true">→</span>}
                <span className={i === 0 || i === t.flujo.length - 1 ? "" : "text-foreground"}>{paso}</span>
              </span>
            ))}
          </p>
        </section>

        <section className="grid gap-10 border-t border-border/60 py-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Titulo eyebrow={language === "en" ? "activity" : "actividad"}>{t.tituloAnos}</Titulo>
            <p className="text-muted-foreground">{t.textoAnos}</p>
          </div>
          <div className="rounded-xl bg-card/40 p-6 ring-1 ring-border/70 sm:p-8 md:col-span-7">
            <MrsChart language={language} />
          </div>
        </section>

        <section className="border-t border-border/60 py-16">
          <Titulo eyebrow={language === "en" ? "areas" : "áreas"}>{t.tituloAreas}</Titulo>
          <p className="mb-10 max-w-2xl text-muted-foreground">{t.textoAreas}</p>
          <ul className="grid gap-4">
            {AREAS.map((a) => (
              <li key={a.es} className="grid items-center gap-2 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)_3rem] sm:gap-6">
                <span className="text-sm text-foreground">{a[language]}</span>
                <span className="h-2.5 overflow-hidden rounded-full bg-border/50" aria-hidden="true">
                  <span className="block h-full rounded-full bg-primary" style={{ width: `${(a.mrs / max) * 100}%` }} />
                </span>
                <span className="font-mono text-sm tabular-nums text-muted-foreground sm:text-right">
                  {a.mrs}<span className="sr-only"> {t.mrs}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-12 border-t border-border/60 py-16 md:grid-cols-2">
          <div>
            <Titulo eyebrow={language === "en" ? "practices" : "prácticas"}>{t.tituloPracticas}</Titulo>
            <ul className="grid gap-6">
              {t.practicas.map((p) => (
                <li key={p.t}>
                  <p className="font-semibold">{p.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Titulo eyebrow="2026">{t.tituloEntregas}</Titulo>
            <ol className="grid gap-6">
              {t.entregas.map((e) => (
                <li key={e.t} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4">
                  <span className="pt-0.5 font-mono text-xs uppercase text-primary">{e.f}</span>
                  <span>
                    <span className="block font-semibold">{e.t}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{e.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border/60 py-16">
          <Titulo eyebrow="stack">{t.tituloStack}</Titulo>
          <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.stack.map((s) => (
              <div key={s.t}>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.t}</dt>
                <dd className="mt-1 text-foreground">{s.d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <a href="../#contact" className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline underline-offset-4">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.cierre}
        </a>
      </article>
    </main>
  )
}
