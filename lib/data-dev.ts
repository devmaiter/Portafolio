import type { ProfileData } from './data';

export const devData: Record<'en' | 'es', ProfileData> = {
    en: {
        navbar: {
            items: [
                { label: "Home", href: "#hero" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Open source", href: "#open-source" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
            ]
        },
        hero: {
            title: "Oscar Julián Osorio",
            subtitle: "Full-Stack Developer",
            description: "3+ years keeping a commercial platform in production: 6,354 commits, 369 merged MRs with a 97% merge rate — and an AI-agent SDLC pipeline with human review on every delivery.",
            availableText: "Available for new projects",
            contactButton: "Contact Me"
        },
        skills: {
            title: "Development Skills",
            description: "A comprehensive stack for building modern web applications.",
            items: [
                { name: "React / Next.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "Tailwind CSS", level: 95 },
                { name: "PostgreSQL", level: 75 },
            ],
            categories: [
                {
                    title: "Frontend",
                    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
                },
                {
                    title: "Backend",
                    items: ["Node.js", "Express", "PostgreSQL", "Prisma"]
                },
                {
                    title: "Tools",
                    items: ["Git", "VS Code", "Figma", "Docker"]
                }
            ]
        },
        projects: {
            title: "Projects",
            description: "Software that is in use: at festivals, at my job, at an events company and on other people's computers.",
            items: [
                {
                    title: "BackFlow — festival backline",
                    context: "Live events production · 2026",
                    metric: { value: "168", label: "pieces of equipment tracked at 2 real festivals" },
                    description: "At a festival, each band's gear is scattered across emails, PDFs, production sheets and chats. BackFlow reads each band's technical rider (PDF, Excel, text or photo), sorts it by section, flags what seems to be missing — a drum kit with no throne, a bass with no stand — and tracks every piece by band, date and event from a phone, with warehouse and stage photos as evidence. Documents are read on the phone itself, without sending them to any server. Used at 2 festivals with about 15 bands.",
                    tags: ["TypeScript", "Elm", "In-browser OCR", "IndexedDB", "Vitest"],
                    image: { src: "/proyectos/backflow-alerta.png", alt: "BackFlow: a band's drum section warning about the pieces the rider did not ask for" },
                    featured: true
                },
                {
                    title: "AI-agent SDLC pipeline",
                    context: "Konrradf · 2024–2026",
                    metric: { value: "+34%", label: "merged MRs from 2024 to 2025, with a 97% merge rate" },
                    description: "The system I design and maintain so a small team automates the full lifecycle of a GitLab issue with AI agents: a central repository of shared skills, agents and CI where agents read the issue, propose a plan, implement on a branch following team conventions, review each other and run Playwright tests — with human review before every merge.",
                    tags: ["Claude Code", "AI Agents", "GitLab CI/CD", "Playwright", "SDLC"],
                    visual: "mrs-por-ano",
                    link: "caso-pipeline/",
                    linkLabel: "Case study",
                    featured: true
                },
                {
                    title: "Loop — live show control",
                    context: "A bar with live music · 2026",
                    metric: { value: "Sold", label: "to Multiaudio, an events company, after running in a bar" },
                    description: "Middleware that ties Resolume, Onyx and Reaper together during a show: it listens to OSC, fires strobes and color over UDP and Art-Net, and gives the operator a web panel on a tablet. Version 3.0.0 ships as a Windows .exe with automated tests.",
                    tags: ["TypeScript", "Node.js", "OSC", "Art-Net", "WebSockets"],
                    image: { src: "/proyectos/loop-bar.jpg", alt: "Loop running the lights in the bar" },
                    link: "caso-loop/",
                    linkLabel: "Case study",
                    github: "https://github.com/devmaiter/loop-av-middleware",
                    featured: true
                },
                {
                    title: "Per-diems and shifts — internal tool",
                    context: "Circuito · events staff · 2026",
                    metric: { value: "2 → 1", label: "two spreadsheets crossed by hand, now one screen per person" },
                    description: "Built for the staffing coordinator at Circuito, who used to cross-check the clock-in/out spreadsheet against the meals log by hand every pay period. Now he uploads both files and sees, per person, the day-by-day schedule, which meals were given and what was paid. It matches names written differently and flags incomplete punches, shifts over 20 hours and records with no event. Underneath: a 7-rule per-diem engine with Colombian holidays, FastAPI + PostgreSQL with JWT, and tests on every layer.",
                    tags: ["Python", "Streamlit", "pandas", "FastAPI", "PostgreSQL", "pytest"],
                    image: { src: "/proyectos/viaticos-detalle-persona.jpg", alt: "Per-diem dashboard: one person's schedule, day by day (sample data)" },
                    featured: true
                },
                {
                    title: "NetQuick — switch networks on Windows",
                    context: "Open source · Windows",
                    metric: { value: "30 s", label: "then it goes back to the previous network on its own if the new one leaves you stranded" },
                    description: "Tray widget that changes the machine's IP or network in one click, with saved static and DHCP profiles. Before applying it checks the IP is free (ping plus an ARP probe). Scanner compatible with Dante audio networks. Tests, CI, and releases that publish the .exe with its SHA-256.",
                    tags: ["Python", "Tkinter", "Windows", "pytest", "GitHub Actions"],
                    github: "https://github.com/devmaiter/NetQuick",
                    featured: true
                }
            ]
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    company: "Konrradf",
                    role: "Full-Stack Developer",
                    period: "Nov 2022 - Present",
                    location: "Colombia (Remote)",
                    description: "Building and maintaining Konrradf's product platform end-to-end on a proprietary architecture, no heavy frameworks, full control over every layer. 6,354 commits and 369 merged Merge Requests since 2023, with a self-publishing CI pipeline.",
                    tags: ["Full-Stack", "TypeScript", "CI/CD", "GitLab"],
                    tagColor: "#d946ef"
                }
            ],
            caseStudy: {
                label: "See verified GitLab metrics and the full case study →",
                url: "caso-pipeline/"
            }
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "SENA",
                    degree: "Technologist in Software Analysis and Development (ADSO)",
                    period: "In progress",
                    description: "Technology degree program. My training project is BackFlow."
                },
                {
                    institution: "Production as classroom — self-taught engineering",
                    degree: "Continuous software engineering training",
                    period: "2019 - Present",
                    description: "Learning proven in production: 3+ years sustaining a commercial platform, a proprietary architecture mastered layer by layer, and an AI-agent SDLC pipeline designed from scratch."
                }
            ]
        },
        contact: {
            title: "Get in Touch",
            description: "Interested in working together? Send me a message.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message"
            }
        }
    },
    es: {
        navbar: {
            items: [
                { label: "Inicio", href: "#hero" },
                { label: "Habilidades", href: "#skills" },
                { label: "Proyectos", href: "#projects" },
                { label: "Open source", href: "#open-source" },
                { label: "Experiencia", href: "#experience" },
                { label: "Educación", href: "#education" },
                { label: "Contacto", href: "#contact" },
            ]
        },
        hero: {
            title: "Oscar Julián Osorio",
            subtitle: "Desarrollador Full-Stack",
            description: "3+ años sosteniendo una plataforma comercial en producción: 6 354 commits, 369 MRs fusionados con 97 % de aceptación — y un pipeline SDLC con agentes de IA y revisión humana en cada entrega.",
            availableText: "Disponible para nuevos proyectos",
            contactButton: "Contáctame"
        },
        skills: {
            title: "Habilidades de Desarrollo",
            description: "Un stack completo para construir aplicaciones web modernas.",
            items: [
                { name: "React / Next.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "Tailwind CSS", level: 95 },
                { name: "PostgreSQL", level: 75 },
            ],
            categories: [
                {
                    title: "Frontend",
                    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
                },
                {
                    title: "Backend",
                    items: ["Node.js", "Express", "PostgreSQL", "Prisma"]
                },
                {
                    title: "Herramientas",
                    items: ["Git", "VS Code", "Figma", "Docker"]
                }
            ]
        },
        projects: {
            title: "Proyectos",
            description: "Software que está en uso: en festivales, en mi trabajo, en una empresa de eventos y en computadores de otras personas.",
            items: [
                {
                    title: "BackFlow — backline de festivales",
                    context: "Producción de eventos · 2026",
                    metric: { value: "168", label: "equipos controlados en 2 festivales reales" },
                    description: "En un festival, el equipo de cada banda vive regado entre correos, PDF, hojas de producción y chats. BackFlow lee el rider técnico de cada banda (PDF, Excel, texto o foto), lo ordena por sección, avisa lo que parece faltar —una batería sin silla, un bajo sin base— y deja controlar cada pieza por banda, fecha y evento desde el celular, con fotos de bodega y de tarima como evidencia. Los documentos se leen en el mismo teléfono, sin enviarlos a ningún servidor. Se usó en 2 festivales, con unas 15 bandas.",
                    tags: ["TypeScript", "Elm", "OCR en el navegador", "IndexedDB", "Vitest"],
                    image: { src: "/proyectos/backflow-alerta.png", alt: "BackFlow: la sección de batería de una banda avisa las piezas que el rider no pidió" },
                    featured: true
                },
                {
                    title: "Pipeline SDLC con agentes de IA",
                    context: "Konrradf · 2024–2026",
                    metric: { value: "+34 %", label: "MRs fusionados de 2024 a 2025, con 97 % de aceptación" },
                    description: "El sistema que diseño y mantengo para que un equipo pequeño automatice el ciclo de vida completo de un issue de GitLab con agentes de IA: un repositorio central de skills, agentes y CI compartidos donde los agentes leen el issue, proponen un plan, implementan en una rama con las convenciones del equipo, se revisan entre sí y ejecutan pruebas Playwright, con revisión humana antes de cada merge.",
                    tags: ["Claude Code", "Agentes IA", "GitLab CI/CD", "Playwright", "SDLC"],
                    visual: "mrs-por-ano",
                    link: "caso-pipeline/",
                    linkLabel: "Caso de estudio",
                    featured: true
                },
                {
                    title: "Loop — control de show en vivo",
                    context: "Un bar con música en vivo · 2026",
                    metric: { value: "Vendido", label: "a Multiaudio, empresa de eventos, después de funcionar en un bar" },
                    description: "Middleware que une Resolume, Onyx y Reaper durante un show: escucha OSC, dispara estrobos y color por UDP y Art-Net, y le da al operador un panel web en una tablet. La versión 3.0.0 se entrega como .exe de Windows, con pruebas automáticas.",
                    tags: ["TypeScript", "Node.js", "OSC", "Art-Net", "WebSockets"],
                    image: { src: "/proyectos/loop-bar.jpg", alt: "Loop manejando las luces en el bar" },
                    link: "caso-loop/",
                    linkLabel: "Caso de estudio",
                    github: "https://github.com/devmaiter/loop-av-middleware",
                    featured: true
                },
                {
                    title: "Viáticos y turnos — herramienta interna",
                    context: "Circuito · personal de eventos · 2026",
                    metric: { value: "2 → 1", label: "dos Excel cruzados a mano, ahora una pantalla por persona" },
                    description: "La hice para el coordinador de personal de Circuito, que en cada periodo cruzaba a mano el Excel de entradas y salidas con la bitácora de comidas. Ahora sube los dos archivos y ve, por persona, su horario día por día, qué comidas se le dieron y lo que se pagó. Empareja nombres escritos distinto y señala marcaciones incompletas, jornadas de más de 20 horas y registros sin evento. Por debajo: motor de las 7 reglas de viáticos con festivos de Colombia, FastAPI + PostgreSQL con JWT y pruebas en cada capa.",
                    tags: ["Python", "Streamlit", "pandas", "FastAPI", "PostgreSQL", "pytest"],
                    image: { src: "/proyectos/viaticos-detalle-persona.jpg", alt: "Dashboard de viáticos: horario de una persona día por día (datos de ejemplo)" },
                    featured: true
                },
                {
                    title: "NetQuick — cambiar de red en Windows",
                    context: "Código abierto · Windows",
                    metric: { value: "30 s", label: "y vuelve sola a la red anterior si la nueva te deja sin salida" },
                    description: "Widget de la bandeja del sistema que cambia la IP o la red del equipo con un clic, con perfiles guardados de IP fija y DHCP. Antes de aplicar revisa que la IP esté libre (ping y sonda ARP). Escáner compatible con redes de audio Dante. Pruebas, CI y versiones que publican el .exe con su SHA-256.",
                    tags: ["Python", "Tkinter", "Windows", "pytest", "GitHub Actions"],
                    github: "https://github.com/devmaiter/NetQuick",
                    featured: true
                }
            ]
        },
        experience: {
            title: "Experiencia Laboral",
            items: [
                {
                    company: "Konrradf",
                    role: "Desarrollador Full-Stack",
                    period: "Nov 2022 - Presente",
                    location: "Colombia (Remoto)",
                    description: "Construyo y mantengo la plataforma de productos de Konrradf de punta a punta, sobre una arquitectura propia sin frameworks pesados, con control total en cada capa. 6 354 commits y 369 Merge Requests fusionados desde 2023, con CI que publica solo.",
                    tags: ["Full-Stack", "TypeScript", "CI/CD", "GitLab"],
                    tagColor: "#d946ef"
                }
            ],
            caseStudy: {
                label: "Ver métricas verificadas de GitLab y el caso de estudio completo →",
                url: "caso-pipeline/"
            }
        },
        education: {
            title: "Educación",
            items: [
                {
                    institution: "SENA",
                    degree: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
                    period: "En curso",
                    description: "Formación tecnológica. Mi proyecto formativo es BackFlow."
                },
                {
                    institution: "La producción como aula — ingeniería autodidacta",
                    degree: "Formación continua en ingeniería de software",
                    period: "2019 - Presente",
                    description: "Aprendizaje probado en producción: 3+ años sosteniendo una plataforma comercial, una arquitectura propia dominada capa por capa y un pipeline SDLC con agentes de IA diseñado desde cero."
                }
            ]
        },
        contact: {
            title: "Ponte en Contacto",
            description: "¿Interesado en trabajar juntos? Envíame un mensaje.",
            form: {
                name: "Nombre",
                email: "Correo",
                message: "Mensaje",
                send: "Enviar Mensaje"
            }
        }
    }
};
