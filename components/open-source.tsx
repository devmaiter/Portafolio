"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/app/providers"
import type { Language } from "@/lib/data"
import { fechaCorta } from "@/lib/data-certs"
import { fusionados, enRevision, textosOss, urlPr, BUSQUEDA_PRS, type PullRequest } from "@/lib/data-oss"

const COLOR_LENGUAJE: Record<string, string> = {
  Go: "#00ADD8",
  Java: "#b07219",
  TypeScript: "#3178c6",
  Python: "#3572A5",
}

function Fila({ pr, language, verPr, revision = false }: { pr: PullRequest; language: Language; verPr: string; revision?: boolean }) {
  const [dueno, nombre] = pr.repo.split("/")
  return (
    <li className="grid gap-3 border-t border-border/60 py-6 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto] sm:gap-8">
      <div className="min-w-0">
        <p className="truncate font-mono text-xs text-muted-foreground">{dueno}/</p>
        <p className={`truncate font-mono text-base font-semibold ${revision ? "text-muted-foreground" : "text-foreground"}`}>{nombre}</p>
        <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: COLOR_LENGUAJE[pr.lenguaje] ?? "var(--primary)" }} aria-hidden="true" />
          {pr.lenguaje}
          {!revision && (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={pr.fecha}>{fechaCorta(pr.fecha, language)}</time>
            </>
          )}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{pr.texto[language]}</p>
      <a
        href={urlPr(pr)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 self-start whitespace-nowrap font-mono text-sm text-primary underline-offset-4 hover:underline"
      >
        {verPr} #{pr.numero}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </li>
  )
}

export function OpenSource() {
  const { language } = useLanguage()
  const t = textosOss[language]
  const proyectos = new Set(fusionados.map((p) => p.repo)).size

  const cifras = [
    { valor: fusionados.length, texto: t.fusionados },
    { valor: proyectos, texto: t.proyectos },
    { valor: enRevision.length, texto: t.revision },
  ]

  return (
    <section id="open-source" className="relative border-t border-border/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid gap-10 md:grid-cols-12 md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-7">
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">{"// "}{t.eyebrow}</p>
            <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">{t.titulo}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t.resumen}</p>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-6 md:col-span-5 md:justify-end">
            {cifras.map((c) => (
              <div key={c.texto}>
                <dt className="sr-only">{c.texto}</dt>
                <dd className="font-mono text-5xl font-bold tabular-nums text-primary">{c.valor}</dd>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{c.texto}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <ol className="mt-14">
          {fusionados.map((pr) => (
            <Fila key={`${pr.repo}#${pr.numero}`} pr={pr} language={language} verPr={t.verPr} />
          ))}
        </ol>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.tituloRevision}</h3>
        <ol className="mt-2">
          {enRevision.map((pr) => (
            <Fila key={`${pr.repo}#${pr.numero}`} pr={pr} language={language} verPr={t.verPr} revision />
          ))}
        </ol>

        <a
          href={BUSQUEDA_PRS}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-primary underline-offset-4 hover:underline"
        >
          {t.verTodo}
        </a>
      </div>
    </section>
  )
}
