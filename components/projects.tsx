"use client"

import { useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FolderGit2, Github, ExternalLink, Filter } from "lucide-react"
import { useLanguage, useProfile, useSkillFilter } from "@/app/providers"
import { portfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const { language } = useLanguage()
  const { profile } = useProfile()
  const { skillFilter, setSkillFilter } = useSkillFilter()

  const projectsData = useMemo(() => {
    return portfolioData[language][profile].projects
  }, [language, profile])

  const selectedTag = skillFilter
  const setSelectedTag = setSkillFilter

  // Cursor-following spotlight: write CSS vars directly on the card,
  // no React re-render per mousemove
  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }, [])

  // Collect all unique tags for filter buttons
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    projectsData?.items.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag))
    })
    return ["All", ...Array.from(tagsSet)]
  }, [projectsData])

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (!projectsData) return []
    if (selectedTag === "All") return projectsData.items
    return projectsData.items.filter(project => project.tags.includes(selectedTag))
  }, [projectsData, selectedTag])

  // Profiles without a projects dataset (sec/av) simply hide the section
  if (!projectsData) return null

  // Profile-specific color accents
  const borderGlowColor = {
    dev: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    sec: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    av: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
  }[profile]

  const activeTagClass = {
    dev: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    sec: "bg-rose-500/20 text-rose-400 border-rose-500/40",
    av: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  }[profile]

  const tagHoverClass = {
    dev: "hover:border-cyan-500/50 hover:text-cyan-400",
    sec: "hover:border-rose-500/50 hover:text-rose-400",
    av: "hover:border-amber-500/50 hover:text-amber-400",
  }[profile]

  const lineGradient = {
    dev: "from-cyan-500/60 to-transparent",
    sec: "from-rose-500/60 to-transparent",
    av: "from-amber-500/60 to-transparent",
  }[profile]

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-background/50 border-t border-border/40">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20 z-0">
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: profile === "dev" 
              ? "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" 
              : profile === "sec" 
              ? "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)" 
              : "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{language === "en" ? "CASE STUDIES" : "CASOS DE ESTUDIO"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4"
          >
            {projectsData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base"
          >
            {projectsData.description}
          </motion.p>
        </div>

        {/* Dynamic Filters */}
        {(allTags.length > 2 || selectedTag !== "All") && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-2 font-mono">
              <Filter className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Filter:" : "Filtrar:"}</span>
            </div>
            {(allTags.includes(selectedTag) ? allTags : [...allTags, selectedTag]).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full border text-xs font-mono transition-all duration-200 ${
                  selectedTag === tag
                    ? activeTagClass
                    : `border-border/60 bg-transparent text-muted-foreground ${tagHoverClass}`
                }`}
              >
                {tag === "All" ? (language === "en" ? "All" : "Todos") : tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-6 rounded-xl border border-dashed border-border/60 bg-card/30"
          >
            <p className="text-foreground font-mono mb-2">
              {language === "en"
                ? `No projects with "${selectedTag}" yet.`
                : `Aún no hay proyectos con "${selectedTag}".`}
            </p>
            <button
              onClick={() => setSelectedTag("All")}
              className="text-xs font-mono text-primary hover:underline"
            >
              {language === "en" ? "← Show all projects" : "← Mostrar todos los proyectos"}
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                onMouseMove={handleSpotlight}
                className={`group spotlight-card shine flex flex-col justify-between rounded-xl border border-border/40 bg-card/40 p-6 glass-strong transition-colors duration-300 will-change-transform ${borderGlowColor}`}
              >
                <div>
                  {/* Card Glowing Line */}
                  <div className={`h-0.5 w-12 bg-gradient-to-r ${lineGradient} mb-6`} />

                  <h3 className="text-xl font-bold font-mono tracking-tight group-hover:text-primary transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(t => (
                      <Badge 
                        key={t} 
                        variant="outline" 
                        className="font-mono text-[10px] border-border bg-background/30 text-muted-foreground"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 border-t border-border/20 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
