import type { Language } from './data';

// Contribuciones open source verificadas en GitHub (gh search prs --author devmaiter).
export interface PullRequest {
    repo: string;      // owner/name
    numero: number;
    lenguaje: string;
    fecha: string;     // ISO, día en que se fusionó o se abrió
    texto: Record<Language, string>;
}

const pr = (repo: string, numero: number) => `https://github.com/${repo}/pull/${numero}`;
export const urlPr = (p: PullRequest) => pr(p.repo, p.numero);

export const fusionados: PullRequest[] = [
    {
        repo: 'prod-forge/backend', numero: 46, lenguaje: 'TypeScript', fecha: '2026-11-17',
        texto: {
            es: 'La lista paginada de tareas podía repetir o saltarse elementos cuando varias tenían el mismo valor en el campo de orden. Ahora desempata por id y el orden es estable entre páginas. Con pruebas.',
            en: 'The paginated todo list could repeat or skip items when several shared the same sort value. It now breaks ties by id, so the order is stable across pages. With tests.',
        },
    },
    {
        repo: 'prod-forge/backend', numero: 41, lenguaje: 'TypeScript', fecha: '2026-11-15',
        texto: {
            es: 'El filtro «completed» de la API de tareas aceptaba cualquier valor y devolvía datos equivocados. Ahora solo acepta true o false y responde 422 con lo demás. Con pruebas.',
            en: 'The «completed» filter of the todos API accepted any value and returned the wrong data. It now only takes true or false and answers 422 otherwise. With tests.',
        },
    },
    {
        repo: 'authorjapps/zerocode', numero: 785, lenguaje: 'Java', fecha: '2026-07-22',
        texto: {
            es: 'Retiro completo de la integración con WireMock: dependencia, código y pruebas.',
            en: 'Full removal of the WireMock integration: dependency, code and tests.',
        },
    },
    {
        repo: 'aminueza/terraform-provider-minio', numero: 1040, lenguaje: 'Go', fecha: '2026-07-17',
        texto: {
            es: 'La limpieza de replicación de sitio ya no corre cuando no hay entorno de pruebas de aceptación.',
            en: 'Site-replication cleanup no longer runs when there is no acceptance-test environment.',
        },
    },
    {
        repo: 'aminueza/terraform-provider-minio', numero: 1032, lenguaje: 'Go', fecha: '2026-07-17',
        texto: {
            es: 'Pruebas de aceptación para tres fuentes de datos: licencia, notificaciones de bucket y estado de replicación.',
            en: 'Acceptance tests for three data sources: license info, bucket notifications and replication status.',
        },
    },
    {
        repo: 'aminueza/terraform-provider-minio', numero: 1031, lenguaje: 'Go', fecha: '2026-07-17',
        texto: {
            es: 'Los endpoints de las pruebas salen de variables de entorno, no de valores escritos en el código.',
            en: 'Test endpoints come from environment variables instead of hard-coded values.',
        },
    },
];

export const enRevision: PullRequest[] = [
    {
        repo: 'AlexSergey/rockpack', numero: 117, lenguaje: 'TypeScript', fecha: '2026-11-17',
        texto: {
            es: 'El ejecutor de pruebas ignoraba -t, -u, --bail y --ci sin avisar. Ahora los pasa a Jest con una lista blanca, y el número de --bail ya no se confunde con una ruta.',
            en: 'The test runner silently dropped -t, -u, --bail and --ci. It now forwards them to Jest through an allowlist, and the --bail count is no longer read as a path.',
        },
    },
    {
        repo: 'ianare/exif-py', numero: 259, lenguaje: 'Python', fecha: '2026-07-17',
        texto: {
            es: 'Corrige un IndexError con etiquetas que traen la lista de valores vacía.',
            en: 'Fixes an IndexError on tags with an empty values list.',
        },
    },
    {
        repo: 'ianare/exif-py', numero: 260, lenguaje: 'Python', fecha: '2026-07-17',
        texto: {
            es: 'Corrige un TypeError en miniaturas con valores mal formados.',
            en: 'Fixes a TypeError on thumbnail tags with malformed values.',
        },
    },
];

export const textosOss: Record<Language, {
    eyebrow: string; titulo: string; resumen: string;
    fusionados: string; proyectos: string; revision: string;
    tituloRevision: string; verPr: string; verTodo: string;
}> = {
    es: {
        eyebrow: 'OPEN SOURCE',
        titulo: 'Código aceptado en proyectos de otros equipos',
        resumen: 'Cada cambio pasó por las convenciones, la integración continua y la revisión de código de equipos que no me conocían.',
        fusionados: 'PRs fusionados',
        proyectos: 'proyectos',
        revision: 'en revisión',
        tituloRevision: 'En revisión',
        verPr: 'Ver PR',
        verTodo: 'Ver todos en GitHub →',
    },
    en: {
        eyebrow: 'OPEN SOURCE',
        titulo: "Code accepted into other teams' projects",
        resumen: "Every change went through the conventions, CI and code review of teams that didn't know me.",
        fusionados: 'merged PRs',
        proyectos: 'projects',
        revision: 'in review',
        tituloRevision: 'In review',
        verPr: 'View PR',
        verTodo: 'See all on GitHub →',
    },
};

export const BUSQUEDA_PRS = 'https://github.com/search?q=author%3Adevmaiter+is%3Apr+-user%3Adevmaiter&type=pullrequests';
