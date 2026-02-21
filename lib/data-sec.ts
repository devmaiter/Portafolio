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
            subtitle: "Cybersecurity Specialist",
            description: "Protecting digital assets and ensuring system integrity. Expertise in penetration testing and security auditing.",
            availableText: "Available for consulting",
            contactButton: "Contact Me"
        },
        skills: {
            title: "Security Skills",
            description: "Tools and methodologies for securing digital environments.",
            items: [
                { name: "Penetration Testing", level: 85 },
                { name: "Network Security", level: 90 },
                { name: "Cryptography", level: 80 },
                { name: "Security Auditing", level: 85 },
                { name: "Python Scripting", level: 80 },
            ],
            categories: [
                {
                    title: "Offensive",
                    items: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux"]
                },
                {
                    title: "Defensive",
                    items: ["Firewalls", "IDS/IPS", "SIEM", "Hardening"]
                },
                {
                    title: "Compliance",
                    items: ["ISO 27001", "GDPR", "NIST", "OWASP"]
                }
            ]
        },
        experience: {
            title: "Security Experience",
            items: [
                {
                    company: "SecureNet Systems",
                    role: "Security Analyst",
                    period: "2022 - Present",
                    location: "Remote",
                    description: "Conducting vulnerability assessments, penetration testing, and security audits for enterprise clients.",
                    tags: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit"],
                    tagColor: "#ef4444"
                },
                {
                    company: "CyberDefense Corp.",
                    role: "SOC Analyst",
                    period: "2021 - 2022",
                    location: "Remote",
                    description: "Monitoring security events, incident response, and threat analysis using SIEM tools and forensic techniques.",
                    tags: ["Splunk", "Wireshark", "OSINT", "Python"],
                    tagColor: "#f59e0b"
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    institution: "Cyber Institute",
                    degree: "Certified Ethical Hacker",
                    period: "2022",
                }
            ]
        },
        contact: {
            title: "Secure Communication",
            description: "Reach out for security consultations.",
            form: {
                name: "Name",
                email: "Email",
                message: "Encrypted Message",
                send: "Send Securely"
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
            subtitle: "Especialista en Ciberseguridad",
            description: "Protegiendo activos digitales y asegurando la integridad del sistema. Experiencia en pruebas de penetración y auditoría de seguridad.",
            availableText: "Disponible para consultoría",
            contactButton: "Contáctame"
        },
        skills: {
            title: "Habilidades de Seguridad",
            description: "Herramientas y metodologías para asegurar entornos digitales.",
            items: [
                { name: "Pruebas de Penetración", level: 85 },
                { name: "Seguridad de Redes", level: 90 },
                { name: "Criptografía", level: 80 },
                { name: "Auditoría de Seguridad", level: 85 },
                { name: "Scripting Python", level: 80 },
            ],
            categories: [
                {
                    title: "Ofensiva",
                    items: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux"]
                },
                {
                    title: "Defensiva",
                    items: ["Firewalls", "IDS/IPS", "SIEM", "Hardening"]
                },
                {
                    title: "Cumplimiento",
                    items: ["ISO 27001", "GDPR", "NIST", "OWASP"]
                }
            ]
        },
        experience: {
            title: "Experiencia en Seguridad",
            items: [
                {
                    company: "SecureNet Systems",
                    role: "Analista de Seguridad",
                    period: "2022 - Presente",
                    location: "Remoto",
                    description: "Realizando evaluaciones de vulnerabilidad, pruebas de penetración y auditorías de seguridad para clientes empresariales.",
                    tags: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit"],
                    tagColor: "#ef4444"
                },
                {
                    company: "CyberDefense Corp.",
                    role: "Analista SOC",
                    period: "2021 - 2022",
                    location: "Remoto",
                    description: "Monitoreo de eventos de seguridad, respuesta a incidentes y análisis de amenazas usando herramientas SIEM y técnicas forenses.",
                    tags: ["Splunk", "Wireshark", "OSINT", "Python"],
                    tagColor: "#f59e0b"
                }
            ]
        },
        education: {
            title: "Educación",
            items: [
                {
                    institution: "Instituto Cyber",
                    degree: "Hacker Ético Certificado",
                    period: "2022",
                }
            ]
        },
        contact: {
            title: "Comunicación Segura",
            description: "Contáctame para consultas de seguridad.",
            form: {
                name: "Nombre",
                email: "Correo",
                message: "Mensaje Encriptado",
                send: "Enviar Seguramente"
            }
        }
    }
};
