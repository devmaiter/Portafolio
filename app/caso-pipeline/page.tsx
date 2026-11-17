import type { Metadata } from "next"
import { CasoPipeline } from "@/components/caso-pipeline"

export const metadata: Metadata = {
  title: "Pipeline SDLC con agentes de IA | Oscar Julián Osorio",
  description:
    "Caso de estudio: el pipeline con agentes de IA y revisión humana que llevó la entrega de 101 a 135 MRs fusionados por año (+34 %) con 97 % de aceptación.",
}

export default function Page() {
  return <CasoPipeline />
}
