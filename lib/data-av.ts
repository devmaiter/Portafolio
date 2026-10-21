import type { ProfileData } from './data';

export const avData: Record<'en' | 'es', ProfileData> = {
    en: {
        navbar: {
            items: [
                { label: "Home", href: "#hero" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
            ]
        },
        hero: {
            title: "Oscar Julián Osorio",
            subtitle: "Software for Live AV",
            description: "I build tools for audio, lighting and video crews: show control over OSC and Art-Net, grandMA2 automation, rider-driven production sheets and network utilities for Dante rigs.",
            availableText: "Available for projects",
            contactButton: "Contact Me"
        },
        skills: {
            title: "AV Engineering Skills",
            description: "Protocols and systems I work with in my tools.",
            items: [
                { name: "OSC / Art-Net", level: 80 },
                { name: "Dante networks", level: 70 },
                { name: "grandMA2 Lua", level: 75 },
                { name: "Production paperwork", level: 80 },
                { name: "Python / TypeScript", level: 85 },
            ],
            categories: [
                {
                    title: "Protocols",
                    items: ["OSC", "Art-Net", "Dante", "UDP", "WebSockets"]
                },
                {
                    title: "Systems",
                    items: ["grandMA2", "Resolume", "Onyx"]
                },
                {
                    title: "Production",
                    items: ["Riders", "Backline", "Input lists", "RF planning"]
                }
            ]
        },
        experience: {
            title: "AV Projects",
            items: [
                {
                    company: "loop-av-middleware",
                    role: "Real-time show control",
                    period: "2026",
                    location: "Own project",
                    description: "Middleware that bridges OSC, Art-Net, UDP and WebSockets to drive Resolume and Onyx during live shows, with a web dashboard for the operator.",
                    tags: ["TypeScript", "OSC", "Art-Net", "WebSockets"],
                    tagColor: "#06b6d4"
                },
                {
                    company: "grandMA2 kit",
                    role: "Lighting console automation",
                    period: "2026",
                    location: "Own project",
                    description: "Lua plugins for grandMA2 onPC: an importer that loads a predefined library (31 effects, 233 macros, 68 MAtricks) and a color picker, plus a Python generator that builds the patch from a rider.",
                    tags: ["Lua", "Python", "grandMA2"],
                    tagColor: "#a259ff"
                },
                {
                    company: "Backline",
                    role: "Festival production sheet",
                    period: "2026",
                    location: "Own project",
                    description: "Production sheet for a multi-band festival: reads each band's rider, builds the backline and input lists per band and adds up the festival totals.",
                    tags: ["JavaScript", "Riders", "Backline"],
                    tagColor: "#f59e0b"
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
                },
                {
                    institution: "Self-study in networked audio",
                    degree: "Dante / AoIP and RF for in-ear monitors",
                    period: "2026",
                    description: "Hands-on lab on Dante networks and link-budget and intermodulation calculations for wireless in-ear systems."
                }
            ]
        },
        contact: {
            title: "Connect for AV",
            description: "Need a tool for your crew or your show? Let's talk.",
            form: {
                name: "Name",
                email: "Email",
                message: "Project Details",
                send: "Send Inquiry"
            }
        }
    },
    es: {
        navbar: {
            items: [
                { label: "Inicio", href: "#hero" },
                { label: "Habilidades", href: "#skills" },
                { label: "Experiencia", href: "#experience" },
                { label: "Educación", href: "#education" },
                { label: "Contacto", href: "#contact" },
            ]
        },
        hero: {
            title: "Oscar Julián Osorio",
            subtitle: "Software para AV en Vivo",
            description: "Construyo herramientas para equipos de audio, luces y video: control de shows por OSC y Art-Net, automatización de grandMA2, hojas de producción a partir de riders y utilidades de red para sistemas Dante.",
            availableText: "Disponible para proyectos",
            contactButton: "Contáctame"
        },
        skills: {
            title: "Habilidades en Ingeniería AV",
            description: "Protocolos y sistemas con los que trabajan mis herramientas.",
            items: [
                { name: "OSC / Art-Net", level: 80 },
                { name: "Redes Dante", level: 70 },
                { name: "Lua para grandMA2", level: 75 },
                { name: "Documentación de producción", level: 80 },
                { name: "Python / TypeScript", level: 85 },
            ],
            categories: [
                {
                    title: "Protocolos",
                    items: ["OSC", "Art-Net", "Dante", "UDP", "WebSockets"]
                },
                {
                    title: "Sistemas",
                    items: ["grandMA2", "Resolume", "Onyx"]
                },
                {
                    title: "Producción",
                    items: ["Riders", "Backline", "Input lists", "Planeación RF"]
                }
            ]
        },
        experience: {
            title: "Proyectos AV",
            items: [
                {
                    company: "loop-av-middleware",
                    role: "Control de shows en tiempo real",
                    period: "2026",
                    location: "Proyecto propio",
                    description: "Middleware que conecta OSC, Art-Net, UDP y WebSockets para controlar Resolume y Onyx en shows en vivo, con un dashboard web para el operador.",
                    tags: ["TypeScript", "OSC", "Art-Net", "WebSockets"],
                    tagColor: "#06b6d4"
                },
                {
                    company: "Kit grandMA2",
                    role: "Automatización de consola de luces",
                    period: "2026",
                    location: "Proyecto propio",
                    description: "Plugins Lua para grandMA2 onPC: un importador que carga una librería predefinida (31 efectos, 233 macros, 68 MAtricks) y un selector de color, más un generador en Python que arma el patch a partir de un rider.",
                    tags: ["Lua", "Python", "grandMA2"],
                    tagColor: "#a259ff"
                },
                {
                    company: "Backline",
                    role: "Hoja de producción de festival",
                    period: "2026",
                    location: "Proyecto propio",
                    description: "Hoja de producción para un festival con varias bandas: lee el rider de cada banda, arma el backline y el input list por banda y suma los totales del festival.",
                    tags: ["JavaScript", "Riders", "Backline"],
                    tagColor: "#f59e0b"
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
                },
                {
                    institution: "Autoformación en audio en red",
                    degree: "Dante / AoIP y RF para monitores in-ear",
                    period: "2026",
                    description: "Laboratorio práctico de redes Dante y cálculos de link budget e intermodulación para sistemas in-ear inalámbricos."
                }
            ]
        },
        contact: {
            title: "Conecta para AV",
            description: "¿Necesitas una herramienta para tu equipo o tu show? Hablemos.",
            form: {
                name: "Nombre",
                email: "Correo",
                message: "Detalles del Proyecto",
                send: "Enviar Consulta"
            }
        }
    }
};
