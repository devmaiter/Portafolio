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
            title: "Featured Projects",
            description: "Production-ready solutions designed to automate business operations and solve real problems.",
            items: [
                {
                    title: "AI-Agent SDLC Pipeline",
                    description: "The system I design and maintain so a small team automates the full lifecycle of a GitLab issue with AI agents: a central repository of shared skills, agents and CI where agents read the issue, propose a plan, implement on a branch following team conventions, review each other and run Playwright tests — with human review before every merge. Delivery went from 101 merged MRs in 2024 to 135 in 2025 (+34%) holding a 97% merge rate. Verified GitLab metrics in the case study.",
                    tags: ["Claude Code", "AI Agents", "GitLab CI/CD", "Playwright", "SDLC"],
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
                    title: "Julian Store — Full-stack E-commerce Demo",
                    description: "Production-ready e-commerce split into two services. Storefront in Next.js 16 + React 19 with persistent Zustand cart, JWT-authenticated checkout and a role-aware admin panel; REST API in Express + Sequelize + Postgres with Zod validation, JWT + role middleware, transactional orders, Swagger UI docs and a Docker multi-stage build. Frontend on Vercel, API + Postgres on Railway. Admins manage products and categories inline from the catalog and watch live Postgres tables refresh every 5 seconds.",
                    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Zod", "Docker", "Railway", "Vercel"],
                    link: "https://my-store-v2-web.vercel.app",
                    featured: true
                },
                {
                    title: "auth-starter — Passkeys + JWT Rotation",
                    description: "Modern authentication starter on Next.js 15 + TypeScript + Prisma + PostgreSQL. Implements JWT access tokens, opaque refresh tokens with rotation and reuse-detection cascade, and Passkeys (WebAuthn) for password-less login via Touch ID / Windows Hello / Android biometrics. Ships with a built-in ES/EN i18n module. Deployed on Vercel with Neon Postgres.",
                    tags: ["TypeScript", "Next.js 15", "Prisma", "WebAuthn / Passkeys", "JWT", "PostgreSQL"],
                    link: "https://auth-starter-api.vercel.app",
                    featured: true
                },
                {
                    title: "DevBlog - Interactive Router Platform",
                    description: "An interactive, portfolio-ready developer blogging platform built to demonstrate advanced React concepts. Features React Router v6 nested routes and layout frames, client-side route guards (authentication), state persistence using custom localStorage hooks, comment threads, a post creation/edit editor, and a reusable ES/EN i18n module.",
                    tags: ["React 19", "React Router", "CSS Modules", "Framer Motion", "i18n", "LocalStorage"],
                    featured: true
                },
                {
                    title: "TanStack Query Courses",
                    description: "Online courses catalog built with React 18, TypeScript, Vite and TanStack Query v5. Demonstrates modern server-state management: debounced search, combined filters by level and category, pagination with useTransition, lazy-loaded components with Suspense, skeleton loaders and a polished dark theme. Production-ready and fully responsive.",
                    tags: ["React", "TypeScript", "Vite", "TanStack Query", "CSS3"],
                    link: "https://tanstack-query-courses.vercel.app",
                    featured: true
                },
                {
                    title: "RecipeDux — Redux Showcase",
                    description: "Recipe finder and bookmark app built with React 18 and Redux as core state manager. Demonstrates professional Redux patterns: Redux Toolkit createSlice, createAsyncThunk for async API calls, custom curried middleware (logger), combineReducers, and modern React-Redux hooks (useSelector with shallowEqual, useDispatch). Features a live interactive demo with a real-time Redux state viewer and action log.",
                    tags: ["React", "Redux", "Redux Toolkit", "Redux Thunk", "Middleware", "React-Redux"],
                    link: "https://recipedux.vercel.app",
                    featured: true
                },
                {
                    title: "Stellar SSR Portal",
                    description: "Custom React 18 Server-Side Rendering setup built from scratch with Node/Express, Webpack 5, SWC, and Styled Components. Features a dual-pipeline data flow (server-rendered initial page and seamless client-side hydration context for SPA transitions), dynamic SEO metadata injection based on routes, rate-limit resilience with network caching and fallbacks, and a cyberpunk telemetry space control room UI displaying real-time NASA APIs.",
                    tags: ["React 18", "Node.js", "Express", "Webpack 5", "SWC", "Server-Side Rendering", "Styled Components"],
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
            title: "Proyectos Destacados",
            description: "Soluciones listas para producción diseñadas para automatizar operaciones comerciales y resolver problemas reales.",
            items: [
                {
                    title: "Pipeline SDLC con Agentes de IA",
                    description: "El sistema que diseño y mantengo para que un equipo pequeño automatice el ciclo de vida completo de un issue de GitLab con agentes de IA: un repositorio central de skills, agentes y CI compartidos donde los agentes leen el issue, proponen un plan, implementan en una rama con las convenciones del equipo, se revisan entre sí y ejecutan pruebas Playwright — con revisión humana antes de cada merge. La entrega pasó de 101 MRs fusionados en 2024 a 135 en 2025 (+34 %) manteniendo 97 % de aceptación. Métricas de GitLab verificadas en el caso de estudio.",
                    tags: ["Claude Code", "Agentes IA", "GitLab CI/CD", "Playwright", "SDLC"],
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
                    title: "Julian Store — E-commerce Full-stack",
                    description: "Demo de e-commerce lista para producción dividida en dos servicios. Storefront en Next.js 16 + React 19 con carrito persistente con Zustand, checkout autenticado con JWT y panel admin sensible al rol; API REST en Express + Sequelize + Postgres con validación Zod, middleware JWT + roles, órdenes en transacción, documentación interactiva en Swagger UI y Dockerfile multi-stage. Frontend en Vercel, API y Postgres en Railway. El admin gestiona productos y categorías inline desde el catálogo y observa las tablas de Postgres refrescándose cada 5 segundos.",
                    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Zod", "Docker", "Railway", "Vercel"],
                    link: "https://my-store-v2-web.vercel.app",
                    featured: true
                },
                {
                    title: "auth-starter — Passkeys + JWT con rotación",
                    description: "Starter de autenticación moderno sobre Next.js 15 + TypeScript + Prisma + PostgreSQL. Implementa JWT access tokens, refresh tokens opacos con rotación y reuse-detection en cascada, y Passkeys (WebAuthn) para login sin contraseña con Touch ID / Windows Hello / biometría Android. Incluye módulo i18n ES/EN propio. Desplegado en Vercel con Neon Postgres.",
                    tags: ["TypeScript", "Next.js 15", "Prisma", "WebAuthn / Passkeys", "JWT", "PostgreSQL"],
                    link: "https://auth-starter-api.vercel.app",
                    featured: true
                },
                {
                    title: "DevBlog - Plataforma Interactiva de Router",
                    description: "Plataforma interactiva de blogs técnicos diseñada para portafolio. Implementa vistas anidadas y layouts con React Router, guards de navegación y autenticación del lado del cliente, persistencia de datos (artículos, comentarios, perfiles de usuario) en localStorage, editor de publicaciones interactivo y módulo i18n ES/EN reutilizable.",
                    tags: ["React 19", "React Router", "CSS Modules", "Framer Motion", "i18n", "LocalStorage"],
                    featured: true
                },
                {
                    title: "TanStack Query Courses",
                    description: "Catálogo de cursos online construido con React 18, TypeScript, Vite y TanStack Query v5. Demuestra manejo moderno de server state: búsqueda con debounce, filtros combinados por nivel y categoría, paginación con useTransition, componentes lazy con Suspense, skeleton loaders y un dark theme cuidado. Listo para producción y responsive.",
                    tags: ["React", "TypeScript", "Vite", "TanStack Query", "CSS3"],
                    link: "https://tanstack-query-courses.vercel.app",
                    featured: true
                },
                {
                    title: "RecipeDux — Showcase de Redux",
                    description: "Buscador y guardador de recetas construido con React 18 y Redux como gestor de estado central. Demuestra patrones profesionales de Redux: createSlice y createAsyncThunk de Redux Toolkit, middleware personalizado con patrón curried (logger), combineReducers, y hooks modernos de React-Redux (useSelector con shallowEqual, useDispatch). Incluye demo interactiva con visor de estado Redux en tiempo real y log de acciones.",
                    tags: ["React", "Redux", "Redux Toolkit", "Redux Thunk", "Middleware", "React-Redux"],
                    link: "https://recipedux.vercel.app",
                    featured: true
                },
                {
                    title: "Stellar SSR Portal",
                    description: "Implementación de Server-Side Rendering (SSR) personalizado desde cero utilizando React 18, Express, Webpack 5, SWC y Styled Components. Cuenta con flujo de datos de doble pipeline (página inicial renderizada en servidor e hidratación en cliente con contexto para transiciones SPA), inyección dinámica de metadatos SEO por ruta, resiliencia ante límites de tasa de API con mocks de alta fidelidad, y una interfaz de telemetría cyberpunk con APIs de la NASA.",
                    tags: ["React 18", "Node.js", "Express", "Webpack 5", "SWC", "Server-Side Rendering", "Styled Components"],
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
