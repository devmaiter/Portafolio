"use client"

import type { Language } from "@/lib/data"

// Merge Requests fusionados por año en GitLab (Konrradf). 2026: corte al 15 de julio.
const DATOS = [
  { ano: "2023", valor: 71 },
  { ano: "2024", valor: 101 },
  { ano: "2025", valor: 135 },
  { ano: "2026", valor: 62, parcial: true },
]
const MAX = 135

const TEXTOS = {
  es: { titulo: "Cambios llevados a producción por año", nota: "2026: corte al 15 de julio.", mrs: "cambios llevados a producción", hasta: "hasta el 15 de julio" },
  en: { titulo: "Changes shipped to production per year", nota: "2026: data up to July 15.", mrs: "changes shipped to production", hasta: "up to July 15" },
}

export function MrsChart({ language }: { language: Language }) {
  const t = TEXTOS[language]
  return (
    <figure className="w-full">
      <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.titulo}</figcaption>
      <div className="mt-6 grid h-52 grid-cols-4 items-end gap-4 sm:gap-6">
        {DATOS.map((d) => (
          <div key={d.ano} className="flex h-full flex-col items-center justify-end gap-2">
            <span className="font-mono text-sm font-semibold tabular-nums text-foreground">{d.valor}</span>
            <div
              role="img"
              aria-label={`${d.ano}: ${d.valor} ${t.mrs}${d.parcial ? ` ${t.hasta}` : ""}`}
              className="w-full max-w-16 rounded-t-md"
              style={{
                height: `${(d.valor / MAX) * 100}%`,
                background: d.parcial
                  ? "repeating-linear-gradient(135deg, color-mix(in srgb, var(--primary) 55%, transparent) 0 6px, color-mix(in srgb, var(--primary) 25%, transparent) 6px 12px)"
                  : "linear-gradient(to top, color-mix(in srgb, var(--primary) 55%, transparent), var(--primary))",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-4 gap-4 border-t border-border pt-2 sm:gap-6">
        {DATOS.map((d) => (
          <span key={d.ano} className="text-center font-mono text-xs tabular-nums text-muted-foreground">
            {d.ano}{d.parcial ? "*" : ""}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">* {t.nota}</p>
    </figure>
  )
}
