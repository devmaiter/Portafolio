'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { Profile, Language } from '@/lib/data';

interface ProfileContextType {
    profile: Profile;
    setProfile: (profile: Profile) => void;
}

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

interface SkillFilterContextType {
    skillFilter: string;
    setSkillFilter: (tag: string) => void;
}

const ProfileContext = createContext<ProfileContextType>({
    profile: 'dev',
    setProfile: () => { },
});

const LanguageContext = createContext<LanguageContextType>({
    language: 'es',
    setLanguage: () => { },
});

const SkillFilterContext = createContext<SkillFilterContextType>({
    skillFilter: 'All',
    setSkillFilter: () => { },
});

export function Providers({ children, ...props }: ThemeProviderProps) {
    const [profile, setProfile] = useState<Profile>('dev');
    const [language, setLanguage] = useState<Language>('es');
    const [skillFilter, setSkillFilter] = useState<string>('All');

    return (
        <NextThemesProvider {...props}>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <ProfileContext.Provider value={{ profile, setProfile }}>
                    <SkillFilterContext.Provider value={{ skillFilter, setSkillFilter }}>
                        {children}
                    </SkillFilterContext.Provider>
                </ProfileContext.Provider>
            </LanguageContext.Provider>
        </NextThemesProvider>
    );
}

export function useProfile() {
    return useContext(ProfileContext);
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export function useSkillFilter() {
    return useContext(SkillFilterContext);
}
