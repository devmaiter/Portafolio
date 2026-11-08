import type { Language } from './data';

// Certificados de Platzi: los mismos que publica devmaiter.github.io. Cada uno enlaza a su
// página pública de verificación. Los nombres van como los emite Platzi (en español).
export interface Certificado {
    nombre: string;
    fecha: string; // ISO, fecha del diploma
    url: string;
}

const PERFIL = 'https://platzi.com/p/f1000161620/';
const ruta = (id: string) => `${PERFIL}ruta/${id}-ruta/diploma/detalle/`;
const curso = (id: string) => `${PERFIL}curso/${id}-course/diploma/detalle/`;

export const rutas: Certificado[] = [
    { nombre: 'Full Stack Developer con JavaScript', fecha: '2026-11-06', url: ruta('100') },
    { nombre: 'Desarrollo Frontend con JavaScript', fecha: '2026-11-06', url: ruta('30065') },
    { nombre: 'Diseño y Desarrollo Frontend', fecha: '2026-11-05', url: ruta('30064') },
    { nombre: 'Fundamentos del Desarrollo Web Profesional', fecha: '2026-11-05', url: ruta('30063') },
    { nombre: 'Desarrollo Frontend con React.js', fecha: '2026-05-31', url: ruta('30068') },
    { nombre: 'Inglés Básico A1', fecha: '2026-01-10', url: ruta('8309') },
];

export const cursosDestacados: Certificado[] = [
    { nombre: 'Curso de Backend con Node.js: API REST con Express.js', fecha: '2025-07-16', url: curso('2485') },
    { nombre: 'Curso de Introducción a la Administración de Servidores Linux', fecha: '2025-04-07', url: curso('5877') },
    { nombre: 'Curso de Redes de Internet - Profesional', fecha: '2026-02-15', url: curso('1770') },
    { nombre: 'Curso Profesional de Git y GitHub', fecha: '2024-03-14', url: curso('1557') },
    { nombre: 'Curso de React.js: Patrones de Render y Composición', fecha: '2026-07-18', url: curso('2457') },
    { nombre: 'Curso de Vue.js: Componentes y Composition API', fecha: '2026-03-04', url: curso('2820') },
    { nombre: 'Curso de JavaScript Engine (V8) y el Navegador', fecha: '2026-03-04', url: curso('1798') },
    { nombre: 'Curso de Construcción de Oraciones en Inglés', fecha: '2026-01-17', url: curso('8024') },
];

export const textosCertificados: Record<Language, {
    titulo: string;
    resumen: string;
    rutas: string;
    cursos: string;
    verTodos: string;
    enCurso: string;
    perfil: string;
}> = {
    es: {
        titulo: 'Certificaciones',
        resumen: '6 rutas y 62 cursos aprobados en Platzi entre 2021 y 2026. Cada diploma tiene su página pública de verificación.',
        rutas: 'Rutas completas',
        cursos: 'Cursos destacados',
        verTodos: 'Ver los 62 certificados en Platzi →',
        enCurso: 'En curso: ruta Programación y Desarrollo de Software (27 %).',
        perfil: PERFIL,
    },
    en: {
        titulo: 'Certifications',
        resumen: '6 learning paths and 62 courses completed on Platzi between 2021 and 2026. Every diploma has a public verification page. Course names are in Spanish, as Platzi issues them.',
        rutas: 'Completed learning paths',
        cursos: 'Featured courses',
        verTodos: 'See all 62 certificates on Platzi →',
        enCurso: 'In progress: Software Programming and Development path (27%).',
        perfil: PERFIL,
    },
};

export function fechaCorta(iso: string, language: Language): string {
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'es-CO', {
        day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
    }).format(new Date(`${iso}T00:00:00Z`));
}
