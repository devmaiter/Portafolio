import type { ProfileData } from './data';

export const devData: Record<'en' | 'es', ProfileData> = {
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
