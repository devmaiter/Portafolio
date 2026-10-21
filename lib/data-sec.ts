import type { ProfileData } from './data';

export const secData: Record<'en' | 'es', ProfileData> = {
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
            subtitle: "Secure Software & Networks",
            description: "Developer who designs with security in mind: threat modeling, failure analysis and hardening of the tools I ship — from Windows network utilities to modern authentication.",
            availableText: "Available for projects",
            contactButton: "Contact Me"
        },
        skills: {
            title: "Security Skills",
            description: "Practices I apply to my own software and networks.",
            items: [
                { name: "Threat Modeling (STRIDE)", level: 75 },
                { name: "Network Analysis", level: 75 },
                { name: "Secure Authentication", level: 75 },
                { name: "Windows Hardening", level: 70 },
                { name: "Python Scripting", level: 80 },
            ],
            categories: [
                {
                    title: "Analysis",
                    items: ["STRIDE", "FMEA", "Wireshark", "Nmap"]
                },
                {
                    title: "Application",
                    items: ["JWT rotation", "WebAuthn / Passkeys", "OWASP"]
                },
                {
                    title: "Operations",
                    items: ["Hardening", "SHA-256 release verification", "CI"]
                }
            ]
        },
        experience: {
            title: "Security Work",
            items: [
                {
                    company: "NetQuick (open source)",
                    role: "Security & reliability review",
                    period: "2026",
                    location: "Own project",
                    description: "Failure-mode analysis (FMEA) and STRIDE threat model of a Windows network tool that runs with admin rights. Fixed a privilege-escalation path in its scheduled task, made profile storage atomic and added SHA-256 verification to the installer. 135 tests, CI with ruff and coverage.",
                    tags: ["STRIDE", "FMEA", "Python", "Windows", "CI"],
                    tagColor: "#ef4444"
                },
                {
                    company: "auth-starter",
                    role: "Secure authentication",
                    period: "2026",
                    location: "Own project",
                    description: "Authentication starter with short-lived JWT access tokens, opaque refresh tokens with rotation and reuse detection that revokes the whole session family, and password-less login with Passkeys (WebAuthn).",
                    tags: ["JWT", "WebAuthn", "Next.js", "Prisma"],
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
                    institution: "Open source as school",
                    degree: "Merged contributions to third-party projects",
                    period: "2026",
                    description: "PRs merged in terraform-provider-minio (Go) and zerocode (Java)."
                }
            ]
        },
        contact: {
            title: "Get in Touch",
            description: "Need a security review of your tool or network? Write to me.",
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
                { label: "Experiencia", href: "#experience" },
                { label: "Educación", href: "#education" },
                { label: "Contacto", href: "#contact" },
            ]
        },
        hero: {
            title: "Oscar Julián Osorio",
            subtitle: "Software y Redes Seguras",
            description: "Desarrollador que diseña pensando en seguridad: modelado de amenazas, análisis de fallas y endurecimiento de las herramientas que entrego — desde utilidades de red para Windows hasta autenticación moderna.",
            availableText: "Disponible para proyectos",
            contactButton: "Contáctame"
        },
        skills: {
            title: "Habilidades de Seguridad",
            description: "Prácticas que aplico a mi propio software y redes.",
            items: [
                { name: "Modelado de amenazas (STRIDE)", level: 75 },
                { name: "Análisis de redes", level: 75 },
                { name: "Autenticación segura", level: 75 },
                { name: "Hardening en Windows", level: 70 },
                { name: "Scripting Python", level: 80 },
            ],
            categories: [
                {
                    title: "Análisis",
                    items: ["STRIDE", "FMEA", "Wireshark", "Nmap"]
                },
                {
                    title: "Aplicaciones",
                    items: ["Rotación de JWT", "WebAuthn / Passkeys", "OWASP"]
                },
                {
                    title: "Operación",
                    items: ["Hardening", "Verificación SHA-256 de releases", "CI"]
                }
            ]
        },
        experience: {
            title: "Trabajo en Seguridad",
            items: [
                {
                    company: "NetQuick (open source)",
                    role: "Revisión de seguridad y confiabilidad",
                    period: "2026",
                    location: "Proyecto propio",
                    description: "Análisis de modos de falla (FMEA) y modelo de amenazas STRIDE de una herramienta de red para Windows que corre con permisos de administrador. Corregí una ruta de escalada de privilegios en su tarea programada, hice atómico el guardado de perfiles y agregué verificación SHA-256 al instalador. 135 tests, CI con ruff y cobertura.",
                    tags: ["STRIDE", "FMEA", "Python", "Windows", "CI"],
                    tagColor: "#ef4444"
                },
                {
                    company: "auth-starter",
                    role: "Autenticación segura",
                    period: "2026",
                    location: "Proyecto propio",
                    description: "Starter de autenticación con access tokens JWT de vida corta, refresh tokens opacos con rotación y detección de reúso que revoca toda la familia de sesiones, y login sin contraseña con Passkeys (WebAuthn).",
                    tags: ["JWT", "WebAuthn", "Next.js", "Prisma"],
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
                    institution: "El open source como escuela",
                    degree: "Contribuciones fusionadas en proyectos de terceros",
                    period: "2026",
                    description: "PRs mergeados en terraform-provider-minio (Go) y zerocode (Java)."
                }
            ]
        },
        contact: {
            title: "Ponte en Contacto",
            description: "¿Necesitas revisar la seguridad de tu herramienta o tu red? Escríbeme.",
            form: {
                name: "Nombre",
                email: "Correo",
                message: "Mensaje",
                send: "Enviar Mensaje"
            }
        }
    }
};
