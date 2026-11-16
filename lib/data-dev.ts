import type { ProfileData } from './data';

export const devData: Record<'en' | 'es', ProfileData> = {
    en: {
        navbar: {
            items: [
                { label: "Home", href: "#hero" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
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
            description: "Software that is in use: at my job, at an events company, in a bar and in other teams' projects.",
            items: [
                {
                    title: "AI-Agent SDLC Pipeline",
                    description: "The system I design and maintain so a small team automates the full lifecycle of a GitLab issue with AI agents: a central repository of shared skills, agents and CI where agents read the issue, propose a plan, implement on a branch following team conventions, review each other and run Playwright tests — with human review before every merge. Delivery went from 101 merged MRs in 2024 to 135 in 2025 (+34%) holding a 97% merge rate. Verified GitLab metrics in the case study.",
                    tags: ["Claude Code", "AI Agents", "GitLab CI/CD", "Playwright", "SDLC"],
                    link: "https://devmaiter.github.io/",
                    linkLabel: "Case study",
                    featured: true
                },
                {
                    title: "Per-diem & Shifts Dashboard — internal tool for Circuito",
                    description: "Built for the staffing coordinator at Circuito, who used to cross-check the clock-in/out spreadsheet against the meals log by hand every pay period to work out what each person was owed. Now he uploads both files and sees, per person, the day-by-day schedule, which meals were given and what was paid. The app matches names written differently (accents, surname first) and flags incomplete punches, shifts over 20 hours and records with no event. Underneath: a 7-rule per-diem engine with Colombian holidays, a FastAPI + PostgreSQL backend with JWT, and automated tests on every layer. Designed to be read on a phone.",
                    tags: ["Python", "Streamlit", "pandas", "FastAPI", "PostgreSQL", "pytest"],
                    image: { src: "/proyectos/viaticos-detalle-persona.jpg", alt: "Per-diem dashboard: one person's schedule, day by day" },
                    featured: true
                },
                {
                    title: "Loop — live show control",
                    description: "Middleware that ties Resolume, Onyx and Reaper together during a show: it listens to OSC, fires strobes and color over UDP and Art-Net, and gives the operator a web panel on a tablet. It runs in a real bar and was bought by the AV company Multiaudio. Version 3.0.0 ships as a Windows .exe with automated tests. The case study has photos, video and the code.",
                    tags: ["TypeScript", "Node.js", "OSC", "Art-Net", "WebSockets"],
                    image: { src: "/proyectos/loop-bar.jpg", alt: "Loop running the lights in the bar" },
                    link: "https://devmaiter.github.io/loop/",
                    linkLabel: "Case study",
                    github: "https://github.com/devmaiter/loop-av-middleware",
                    featured: true
                },
                {
                    title: "NetQuick — switch networks on Windows in seconds",
                    description: "Floating tray widget for Windows that changes the machine's IP or network in one click, with saved profiles for static IP and DHCP. Before applying it checks the IP is free (ping plus an ARP probe), and if the new address leaves you without a gateway it counts down 30 seconds and goes back to the previous config on its own. Scanner compatible with Dante networks. Open source, with tests, CI and releases that publish the .exe with its SHA-256.",
                    tags: ["Python", "Tkinter", "Windows", "pytest", "GitHub Actions"],
                    github: "https://github.com/devmaiter/NetQuick",
                    featured: true
                },
                {
                    title: "Open source contributions",
                    description: "Pull requests merged into other teams' projects, under their conventions and their code review. terraform-provider-minio (Go): three PRs with acceptance tests and fixes to the test infrastructure. zerocode (Java): full removal of the WireMock integration — dependency, code and tests.",
                    tags: ["Go", "Java", "Terraform", "Testing", "Code review"],
                    link: "https://github.com/search?q=author%3Adevmaiter+is%3Apr+is%3Amerged+-user%3Adevmaiter&type=pullrequests",
                    linkLabel: "Merged PRs",
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
                url: "https://devmaiter.github.io"
            }
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "Production as classroom — self-taught engineering",
                    degree: "Continuous software engineering training",
                    period: "2019 - Present",
                    description: "Learning proven in production: 3+ years sustaining a commercial platform, a proprietary architecture mastered layer by layer, and an AI-agent SDLC pipeline designed from scratch."
                },
                {
                    institution: "Open source as school",
                    degree: "Merged contributions to third-party projects",
                    period: "2026",
                    description: "PRs merged in terraform-provider-minio (Go) and zerocode (Java) — other teams' codebases, their conventions, their code reviews."
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
            description: "Software que está en uso: en mi trabajo, en una empresa de eventos, en un bar y en proyectos de otros equipos.",
            items: [
                {
                    title: "Pipeline SDLC con Agentes de IA",
                    description: "El sistema que diseño y mantengo para que un equipo pequeño automatice el ciclo de vida completo de un issue de GitLab con agentes de IA: un repositorio central de skills, agentes y CI compartidos donde los agentes leen el issue, proponen un plan, implementan en una rama con las convenciones del equipo, se revisan entre sí y ejecutan pruebas Playwright — con revisión humana antes de cada merge. La entrega pasó de 101 MRs fusionados en 2024 a 135 en 2025 (+34 %) manteniendo 97 % de aceptación. Métricas de GitLab verificadas en el caso de estudio.",
                    tags: ["Claude Code", "Agentes IA", "GitLab CI/CD", "Playwright", "SDLC"],
                    link: "https://devmaiter.github.io/",
                    linkLabel: "Caso de estudio",
                    featured: true
                },
                {
                    title: "Viáticos y turnos — herramienta interna para Circuito",
                    description: "La hice para el coordinador de personal de Circuito, que en cada periodo cruzaba a mano el Excel de entradas y salidas con la bitácora de comidas para saber qué pagarle a cada persona. Ahora sube los dos archivos y ve, por persona, su horario día por día, qué comidas se le dieron y lo que se pagó. La app empareja nombres escritos distinto (tildes, apellidos primero) y señala marcaciones incompletas, jornadas de más de 20 horas y registros sin evento. Por debajo: motor de las 7 reglas de viáticos con festivos de Colombia, backend FastAPI + PostgreSQL con JWT y pruebas automáticas en cada capa. Pensada para leerse en el celular.",
                    tags: ["Python", "Streamlit", "pandas", "FastAPI", "PostgreSQL", "pytest"],
                    image: { src: "/proyectos/viaticos-detalle-persona.jpg", alt: "Dashboard de viáticos: horario de una persona día por día" },
                    featured: true
                },
                {
                    title: "Loop — control de show en vivo",
                    description: "Middleware que une Resolume, Onyx y Reaper durante un show: escucha OSC, dispara estrobos y color por UDP y Art-Net, y le da al operador un panel web en una tablet. Se usa en un bar y lo compró la empresa de eventos Multiaudio. La versión 3.0.0 se entrega como .exe de Windows, con pruebas automáticas. El caso de estudio tiene fotos, video y el código.",
                    tags: ["TypeScript", "Node.js", "OSC", "Art-Net", "WebSockets"],
                    image: { src: "/proyectos/loop-bar.jpg", alt: "Loop manejando las luces en el bar" },
                    link: "https://devmaiter.github.io/loop/",
                    linkLabel: "Caso de estudio",
                    github: "https://github.com/devmaiter/loop-av-middleware",
                    featured: true
                },
                {
                    title: "NetQuick — cambiar de red en Windows en segundos",
                    description: "Widget flotante para Windows, en la bandeja del sistema, que cambia la IP o la red del equipo con un clic, con perfiles guardados de IP fija y DHCP. Antes de aplicar revisa que la IP esté libre (ping y sonda ARP), y si la nueva dirección deja el equipo sin puerta de enlace, cuenta 30 segundos y vuelve sola a la configuración anterior. Escáner compatible con redes Dante. Código abierto, con pruebas, CI y versiones que publican el .exe con su SHA-256.",
                    tags: ["Python", "Tkinter", "Windows", "pytest", "GitHub Actions"],
                    github: "https://github.com/devmaiter/NetQuick",
                    featured: true
                },
                {
                    title: "Contribuciones open source",
                    description: "Pull requests fusionados en proyectos de otros equipos, con sus convenciones y su revisión de código. terraform-provider-minio (Go): tres PRs con pruebas de aceptación y arreglos de la infraestructura de pruebas. zerocode (Java): retiro completo de la integración con WireMock: dependencia, código y pruebas.",
                    tags: ["Go", "Java", "Terraform", "Testing", "Code review"],
                    link: "https://github.com/search?q=author%3Adevmaiter+is%3Apr+is%3Amerged+-user%3Adevmaiter&type=pullrequests",
                    linkLabel: "PRs fusionados",
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
                url: "https://devmaiter.github.io"
            }
        },
        education: {
            title: "Educación",
            items: [
                {
                    institution: "La producción como aula — ingeniería autodidacta",
                    degree: "Formación continua en ingeniería de software",
                    period: "2019 - Presente",
                    description: "Aprendizaje probado en producción: 3+ años sosteniendo una plataforma comercial, una arquitectura propia dominada capa por capa y un pipeline SDLC con agentes de IA diseñado desde cero."
                },
                {
                    institution: "El open source como escuela",
                    degree: "Contribuciones fusionadas en proyectos de terceros",
                    period: "2026",
                    description: "PRs mergeados en terraform-provider-minio (Go) y zerocode (Java) — código ajeno, sus convenciones y sus code reviews."
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
