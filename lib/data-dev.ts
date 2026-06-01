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
            subtitle: "Software Developer",
            description: "Specialized in React, Next.js, and modern web technologies. Building scalable and performant applications.",
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
                    title: "Waly-Connect",
                    description: "A comprehensive WhatsApp Automation Gateway & CRM Handoff Platform for SMBs in LATAM. Connects Evolution API with a custom Node.js/Express backend and a React manager panel. Handles auto-replies, business hours verification, and live human takeover with active session management.",
                    tags: ["React", "Node.js", "Evolution API", "PostgreSQL", "Redis", "Docker"],
                    github: "https://github.com/oscar-julian/waly-connect",
                    featured: true
                },
                {
                    title: "Julian Store — Full-stack E-commerce Demo",
                    description: "Production-ready e-commerce split into two services. Storefront in Next.js 16 + React 19 with persistent Zustand cart, JWT-authenticated checkout and a role-aware admin panel; REST API in Express + Sequelize + Postgres with Zod validation, JWT + role middleware, transactional orders, Swagger UI docs and a Docker multi-stage build. Frontend on Vercel, API + Postgres on Railway. Admins manage products and categories inline from the catalog and watch live Postgres tables refresh every 5 seconds.",
                    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Zod", "Docker", "Railway", "Vercel"],
                    github: "https://github.com/devmaiter/my-store-v2-web",
                    link: "https://my-store-v2-web.vercel.app",
                    featured: true
                },
                {
                    title: "AI Email Assistant",
                    description: "An autonomous agent that processes, categorizes, and generates draft responses for business emails. Orchestrated via n8n with OpenAI's GPT-4, utilizing Outlook/Gmail webhooks to classify intent and retrieve context, reducing manual support workload by 70%.",
                    tags: ["n8n", "OpenAI API", "Node.js", "Google APIs", "Automation"],
                    featured: true
                },
                {
                    title: "Lead Harvester & Smart Outreach",
                    description: "High-performance Python lead scraper built with Playwright that extracts local business leads. Automatically enriches data using GPT models, saves results to PostgreSQL/Supabase, and schedules personalized outreach workflows.",
                    tags: ["Python", "Playwright", "PostgreSQL", "Supabase", "OpenAI"],
                    featured: true
                },
                {
                    title: "auth-starter — Passkeys + JWT Rotation",
                    description: "Modern authentication starter on Next.js 15 + TypeScript + Prisma + PostgreSQL. Implements JWT access tokens, opaque refresh tokens with rotation and reuse-detection cascade, and Passkeys (WebAuthn) for password-less login via Touch ID / Windows Hello / Android biometrics. Ships with a built-in ES/EN i18n module. Deployed on Vercel with Neon Postgres.",
                    tags: ["TypeScript", "Next.js 15", "Prisma", "WebAuthn / Passkeys", "JWT", "PostgreSQL"],
                    github: "https://github.com/devmaiter/auth-starter",
                    link: "https://auth-starter-api.vercel.app",
                    featured: true
                },
                {
                    title: "DevBlog - Interactive Router Platform",
                    description: "An interactive, portfolio-ready developer blogging platform built to demonstrate advanced React concepts. Features React Router v6 nested routes and layout frames, client-side route guards (authentication), state persistence using custom localStorage hooks, comment threads, a post creation/edit editor, and a reusable ES/EN i18n module.",
                    tags: ["React 19", "React Router", "CSS Modules", "Framer Motion", "i18n", "LocalStorage"],
                    github: "https://github.com/devmaiter/react-router-blog",
                    featured: true
                },
                {
                    title: "TanStack Query Courses",
                    description: "Online courses catalog built with React 18, TypeScript, Vite and TanStack Query v5. Demonstrates modern server-state management: debounced search, combined filters by level and category, pagination with useTransition, lazy-loaded components with Suspense, skeleton loaders and a polished dark theme. Production-ready and fully responsive.",
                    tags: ["React", "TypeScript", "Vite", "TanStack Query", "CSS3"],
                    github: "https://github.com/devmaiter/tanstack-query-courses",
                    link: "https://tanstack-query-courses.vercel.app",
                    featured: true
                },
                {
                    title: "RecipeDux — Redux Showcase",
                    description: "Recipe finder and bookmark app built with React 18 and Redux as core state manager. Demonstrates professional Redux patterns: Redux Toolkit createSlice, createAsyncThunk for async API calls, custom curried middleware (logger), combineReducers, and modern React-Redux hooks (useSelector with shallowEqual, useDispatch). Features a live interactive demo with a real-time Redux state viewer and action log.",
                    tags: ["React", "Redux", "Redux Toolkit", "Redux Thunk", "Middleware", "React-Redux"],
                    github: "https://github.com/oscar-julian/recipedux",
                    link: "https://recipedux.vercel.app",
                    featured: true
                },
                {
                    title: "Stellar SSR Portal",
                    description: "Custom React 18 Server-Side Rendering setup built from scratch with Node/Express, Webpack 5, SWC, and Styled Components. Features a dual-pipeline data flow (server-rendered initial page and seamless client-side hydration context for SPA transitions), dynamic SEO metadata injection based on routes, rate-limit resilience with network caching and fallbacks, and a cyberpunk telemetry space control room UI displaying real-time NASA APIs.",
                    tags: ["React 18", "Node.js", "Express", "Webpack 5", "SWC", "Server-Side Rendering", "Styled Components"],
                    github: "https://github.com/devmaiter/stellar-ssr-portal",
                    link: "https://stellar-ssr-portal.vercel.app",
                    featured: true
                }
            ]
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    company: "Tech Solutions Inc.",
                    role: "Senior Frontend Developer",
                    period: "2023 - Present",
                    location: "Remote",
                    description: "Leading the development of high-performance web applications with modern architectures and immersive user experiences.",
                    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    tagColor: "#d946ef"
                },
                {
                    company: "Digital Agency Co.",
                    role: "Full Stack Developer",
                    period: "2021 - 2023",
                    location: "Madrid, ES",
                    description: "Developing e-commerce platforms and internal management systems with third-party API integrations and payment gateways.",
                    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                    tagColor: "#06b6d4"
                },
                {
                    company: "Startup Labs",
                    role: "Junior Frontend Developer",
                    period: "2020 - 2021",
                    location: "Barcelona, ES",
                    description: "Building responsive and accessible user interfaces for SaaS applications, collaborating in multidisciplinary agile teams.",
                    tags: ["React", "JavaScript", "SASS", "Git"],
                    tagColor: "#8b5cf6"
                },
                {
                    company: "Freelance",
                    role: "Web Developer",
                    period: "2019 - 2020",
                    location: "Remote",
                    description: "Designing and developing custom websites for local and international clients, from landing pages to online stores.",
                    tags: ["HTML5", "CSS3", "JavaScript", "WordPress"],
                    tagColor: "#f97316"
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "University of Technology",
                    degree: "B.S. in Computer Science",
                    period: "2019 - 2023",
                    description: "Focus on Software Engineering and Web Development."
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
            subtitle: "Desarrollador de Software",
            description: "Especializado en React, Next.js y tecnologías web modernas. Construyendo aplicaciones escalables y performantes.",
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
                    title: "Waly-Connect",
                    description: "Un sistema modular de automatización de WhatsApp y panel de administración para PyMEs en LATAM. Conecta la API de Evolution con un backend en Node.js/Express y una interfaz React. Maneja respuestas automáticas, horarios de atención y pausa del bot para atención humana.",
                    tags: ["React", "Node.js", "Evolution API", "PostgreSQL", "Redis", "Docker"],
                    github: "https://github.com/oscar-julian/waly-connect",
                    featured: true
                },
                {
                    title: "Julian Store — E-commerce Full-stack",
                    description: "Demo de e-commerce lista para producción dividida en dos servicios. Storefront en Next.js 16 + React 19 con carrito persistente con Zustand, checkout autenticado con JWT y panel admin sensible al rol; API REST en Express + Sequelize + Postgres con validación Zod, middleware JWT + roles, órdenes en transacción, documentación interactiva en Swagger UI y Dockerfile multi-stage. Frontend en Vercel, API y Postgres en Railway. El admin gestiona productos y categorías inline desde el catálogo y observa las tablas de Postgres refrescándose cada 5 segundos.",
                    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Zod", "Docker", "Railway", "Vercel"],
                    github: "https://github.com/devmaiter/my-store-v2-web",
                    link: "https://my-store-v2-web.vercel.app",
                    featured: true
                },
                {
                    title: "Agente IA de Correos",
                    description: "Agente autónomo que procesa, clasifica y genera borradores de respuesta para correos comerciales. Orquestado con n8n y GPT-4 de OpenAI, utilizando webhooks de Gmail para clasificar intenciones y recuperar contexto de clientes, reduciendo el soporte manual en un 70%.",
                    tags: ["n8n", "OpenAI API", "Node.js", "APIs de Google", "Automatización"],
                    featured: true
                },
                {
                    title: "Lead Harvester & Smart Outreach",
                    description: "Scraper de leads de alto rendimiento desarrollado en Python y Playwright. Extrae prospectos comerciales locales, los enriquece automáticamente usando modelos GPT, los almacena en PostgreSQL y programa envíos de contacto inicial personalizados.",
                    tags: ["Python", "Playwright", "PostgreSQL", "Supabase", "OpenAI"],
                    featured: true
                },
                {
                    title: "auth-starter — Passkeys + JWT con rotación",
                    description: "Starter de autenticación moderno sobre Next.js 15 + TypeScript + Prisma + PostgreSQL. Implementa JWT access tokens, refresh tokens opacos con rotación y reuse-detection en cascada, y Passkeys (WebAuthn) para login sin contraseña con Touch ID / Windows Hello / biometría Android. Incluye módulo i18n ES/EN propio. Desplegado en Vercel con Neon Postgres.",
                    tags: ["TypeScript", "Next.js 15", "Prisma", "WebAuthn / Passkeys", "JWT", "PostgreSQL"],
                    github: "https://github.com/devmaiter/auth-starter",
                    link: "https://auth-starter-api.vercel.app",
                    featured: true
                },
                {
                    title: "DevBlog - Plataforma Interactiva de Router",
                    description: "Plataforma interactiva de blogs técnicos diseñada para portafolio. Implementa vistas anidadas y layouts con React Router, guards de navegación y autenticación del lado del cliente, persistencia de datos (artículos, comentarios, perfiles de usuario) en localStorage, editor de publicaciones interactivo y módulo i18n ES/EN reutilizable.",
                    tags: ["React 19", "React Router", "CSS Modules", "Framer Motion", "i18n", "LocalStorage"],
                    github: "https://github.com/devmaiter/react-router-blog",
                    featured: true
                },
                {
                    title: "TanStack Query Courses",
                    description: "Catálogo de cursos online construido con React 18, TypeScript, Vite y TanStack Query v5. Demuestra manejo moderno de server state: búsqueda con debounce, filtros combinados por nivel y categoría, paginación con useTransition, componentes lazy con Suspense, skeleton loaders y un dark theme cuidado. Listo para producción y responsive.",
                    tags: ["React", "TypeScript", "Vite", "TanStack Query", "CSS3"],
                    github: "https://github.com/devmaiter/tanstack-query-courses",
                    link: "https://tanstack-query-courses.vercel.app",
                    featured: true
                },
                {
                    title: "RecipeDux — Showcase de Redux",
                    description: "Buscador y guardador de recetas construido con React 18 y Redux como gestor de estado central. Demuestra patrones profesionales de Redux: createSlice y createAsyncThunk de Redux Toolkit, middleware personalizado con patrón curried (logger), combineReducers, y hooks modernos de React-Redux (useSelector con shallowEqual, useDispatch). Incluye demo interactiva con visor de estado Redux en tiempo real y log de acciones.",
                    tags: ["React", "Redux", "Redux Toolkit", "Redux Thunk", "Middleware", "React-Redux"],
                    github: "https://github.com/oscar-julian/recipedux",
                    link: "https://recipedux.vercel.app",
                    featured: true
                },
                {
                    title: "Stellar SSR Portal",
                    description: "Implementación de Server-Side Rendering (SSR) personalizado desde cero utilizando React 18, Express, Webpack 5, SWC y Styled Components. Cuenta con flujo de datos de doble pipeline (página inicial renderizada en servidor e hidratación en cliente con contexto para transiciones SPA), inyección dinámica de metadatos SEO por ruta, resiliencia ante límites de tasa de API con mocks de alta fidelidad, y una interfaz de telemetría cyberpunk con APIs de la NASA.",
                    tags: ["React 18", "Node.js", "Express", "Webpack 5", "SWC", "Server-Side Rendering", "Styled Components"],
                    github: "https://github.com/devmaiter/stellar-ssr-portal",
                    link: "https://stellar-ssr-portal.vercel.app",
                    featured: true
                }
            ]
        },
        experience: {
            title: "Experiencia Laboral",
            items: [
                {
                    company: "Tech Solutions Inc.",
                    role: "Desarrollador Frontend Senior",
                    period: "2023 - Presente",
                    location: "Remoto",
                    description: "Liderando el desarrollo de aplicaciones web de alto rendimiento con arquitecturas modernas y experiencias de usuario inmersivas.",
                    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    tagColor: "#d946ef"
                },
                {
                    company: "Digital Agency Co.",
                    role: "Desarrollador Full Stack",
                    period: "2021 - 2023",
                    location: "Madrid, ES",
                    description: "Desarrollo de plataformas e-commerce y sistemas de gestión internos con integraciones de APIs de terceros y pasarelas de pago.",
                    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                    tagColor: "#06b6d4"
                },
                {
                    company: "Startup Labs",
                    role: "Desarrollador Frontend Jr.",
                    period: "2020 - 2021",
                    location: "Barcelona, ES",
                    description: "Construcción de interfaces de usuario responsivas y accesibles para aplicaciones SaaS, colaborando en equipos ágiles multidisciplinarios.",
                    tags: ["React", "JavaScript", "SASS", "Git"],
                    tagColor: "#8b5cf6"
                },
                {
                    company: "Freelance",
                    role: "Desarrollador Web",
                    period: "2019 - 2020",
                    location: "Remoto",
                    description: "Diseño y desarrollo de sitios web personalizados para clientes locales e internacionales, desde landing pages hasta tiendas online.",
                    tags: ["HTML5", "CSS3", "JavaScript", "WordPress"],
                    tagColor: "#f97316"
                }
            ]
        },
        education: {
            title: "Educación",
            items: [
                {
                    institution: "Universidad de Tecnología",
                    degree: "Ingeniería en Sistemas",
                    period: "2019 - 2023",
                    description: "Enfoque en Ingeniería de Software y Desarrollo Web."
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
