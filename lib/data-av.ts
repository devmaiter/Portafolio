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
            subtitle: "AV Engineering Expert",
            description: "Designing and implementing advanced audio-visual systems. Specializing in protocols, signal flow, and system integration.",
            availableText: "Available for projects",
            contactButton: "Contact Me"
        },
        skills: {
            title: "AV Engineering Skills",
            description: "Expertise in audio-visual systems, protocols, and connections.",
            items: [
                { name: "Dante / AES67", level: 95 },
                { name: "Signal Processing", level: 90 },
                { name: "System Design", level: 85 },
                { name: "Crestron / Extron", level: 80 },
                { name: "Acoustics", level: 75 },
            ],
            categories: [
                {
                    title: "Audio Protocols",
                    items: ["Dante", "AES67", "AVB", "MADI", "AES/EBU"]
                },
                {
                    title: "Video & Control",
                    items: ["NDI", "SDI", "HDBaseT", "Crestron", "Q-SYS", "Extron"]
                },
                {
                    title: "Connections & Systems",
                    items: ["Video Walls", "DSP", "Livestreaming", "Acoustics", "Lutron"]
                }
            ]
        },
        experience: {
            title: "AV Projects",
            items: [
                {
                    company: "AudioVisual Pro",
                    role: "System Integrator",
                    period: "2021 - Present",
                    description: "Designing complex AV systems for corporate and event spaces."
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "AV Tech Academy",
                    degree: "Certified Technology Specialist (CTS)",
                    period: "2021",
                }
            ]
        },
        contact: {
            title: "Connect for AV",
            description: "Let's discuss your audio-visual needs.",
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
            subtitle: "Experto en Ingeniería AV",
            description: "Diseñando e implementando sistemas audiovisuales avanzados. Especializado en protocolos, flujo de señal e integración de sistemas.",
            availableText: "Disponible para proyectos",
            contactButton: "Contáctame"
        },
        skills: {
            title: "Habilidades en Ingeniería AV",
            description: "Experiencia en sistemas audiovisuales, protocolos y conexiones.",
            items: [
                { name: "Dante / AES67", level: 95 },
                { name: "Procesamiento de Señal", level: 90 },
                { name: "Diseño de Sistemas", level: 85 },
                { name: "Crestron / Extron", level: 80 },
                { name: "Acústica", level: 75 },
            ],
            categories: [
                {
                    title: "Protocolos de Audio",
                    items: ["Dante", "AES67", "AVB", "MADI", "AES/EBU"]
                },
                {
                    title: "Video y Control",
                    items: ["NDI", "SDI", "HDBaseT", "Crestron", "Q-SYS", "Extron"]
                },
                {
                    title: "Conexiones y Sistemas",
                    items: ["Video Walls", "DSP", "Livestreaming", "Acústica", "Lutron"]
                }
            ]
        },
        experience: {
            title: "Proyectos AV",
            items: [
                {
                    company: "AudioVisual Pro",
                    role: "Integrador de Sistemas",
                    period: "2021 - Presente",
                    description: "Diseñando sistemas AV complejos para espacios corporativos y de eventos."
                }
            ]
        },
        education: {
            title: "Educación",
            items: [
                {
                    institution: "Academia Tecnología AV",
                    degree: "Especialista Certificado en Tecnología (CTS)",
                    period: "2021",
                }
            ]
        },
        contact: {
            title: "Conecta para AV",
            description: "Hablemos de tus necesidades audiovisuales.",
            form: {
                name: "Nombre",
                email: "Correo",
                message: "Detalles del Proyecto",
                send: "Enviar Consulta"
            }
        }
    }
};
