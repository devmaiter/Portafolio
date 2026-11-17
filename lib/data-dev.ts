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
            description: "4 years developing at Konrradf, a software company, taking its products to production: 6,354 commits and 369 merged MRs with a 97% merge rate — and a system of AI agents that helps the team ship more, with a person approving every change.",
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
                    title: "AI agents for a development team — more deliveries, same quality",
                    context: "Konrradf · 2024–2026",
                    metric: { value: "+34%", label: "more changes shipped to production in 2025 than in 2024, with 97% approved" },
                    description: "Problem: a small team was maintaining several products at once, and every task was done start to finish by hand. Solution: I built a system where AI agents read the task, propose a plan, write the change, review it and test it, and a person approves it before it reaches production. Result: the team went from 101 deliveries in 2024 to 135 in 2025, with 97% approved.",
                    tags: ["Claude Code", "AI Agents", "GitLab CI/CD", "Playwright"],
                    visual: "mrs-por-ano",
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
                    description: "Building and maintaining Konrradf's software products end-to-end on a proprietary architecture, no heavy frameworks, full control over every layer. 6,354 commits and 369 merged Merge Requests since 2023, with a self-publishing CI pipeline.",
                    tags: ["Full-Stack", "TypeScript", "CI/CD", "GitLab"],
                    tagColor: "#d946ef"
                }
            ]
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
                    description: "Learning proven in production: 4 years building the products of a software company, a proprietary architecture mastered layer by layer, and a system of AI agents for the team, built from scratch."
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
            description: "4 años desarrollando en Konrradf, una empresa de software, llevando sus productos a producción: 6 354 commits y 369 MRs fusionados con 97 % de aceptación — y un sistema de agentes de IA que ayuda al equipo a entregar más, con una persona aprobando cada cambio.",
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
                    title: "Agentes de IA para un equipo de desarrollo — más entregas, misma calidad",
                    context: "Konrradf · 2024–2026",
                    metric: { value: "+34 %", label: "más cambios llevados a producción en 2025 que en 2024, con 97 % aprobados" },
                    description: "Problema: un equipo pequeño mantenía varios productos a la vez y cada tarea se hacía completa a mano. Solución: armé un sistema en el que agentes de IA leen la tarea, proponen un plan, escriben el cambio, lo revisan y lo prueban, y una persona lo aprueba antes de que salga a producción. Resultado: el equipo pasó de 101 entregas en 2024 a 135 en 2025, con 97 % aprobadas.",
                    tags: ["Claude Code", "Agentes de IA", "GitLab CI/CD", "Playwright"],
                    visual: "mrs-por-ano",
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
                    description: "Construyo y mantengo de punta a punta los productos de software de Konrradf, sobre una arquitectura propia sin frameworks pesados, con control total en cada capa. 6 354 commits y 369 Merge Requests fusionados desde 2023, con CI que publica solo.",
                    tags: ["Full-Stack", "TypeScript", "CI/CD", "GitLab"],
                    tagColor: "#d946ef"
                }
            ]
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
                    description: "Aprendizaje probado en producción: 4 años construyendo los productos de una empresa de software, una arquitectura propia dominada capa por capa y un sistema de agentes de IA para el equipo, hecho desde cero."
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
