export type Profile = 'dev' | 'sec' | 'av';
export type Language = 'en' | 'es';

export interface ProjectId {
    title: string;
    description: string;
    link?: string;
    tech?: string[];
}

export interface Skill {
    name: string;
    level: number; // 0-100
    category?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    description?: string;
}

export interface ProfileData {
    hero: {
        title: string;
        subtitle: string;
        description: string;
        availableText: string;
        contactButton: string;
    };
    skills: {
        title: string;
        description: string;
        items: Skill[];
        categories: {
            title: string;
            items: string[];
        }[];
    };
    experience: {
        title: string;
        items: ExperienceItem[];
    };
    education: {
        title: string;
        items: EducationItem[];
    };
    contact: {
        title: string;
        description: string;
        form: {
            name: string;
            email: string;
            message: string;
            send: string;
        };
    };
    navbar: {
        items: { label: string; href: string }[];
    }
}

// ─── Import per-profile data ──────────────────────────────────────────────────
import { devData } from './data-dev';
import { secData } from './data-sec';
import { avData } from './data-av';

export const portfolioData: Record<Language, Record<Profile, ProfileData>> = {
    en: {
        dev: devData.en,
        sec: secData.en,
        av: avData.en,
    },
    es: {
        dev: devData.es,
        sec: secData.es,
        av: avData.es,
    },
};
