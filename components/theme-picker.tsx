'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Check, Palette } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ThemeOption {
    id: string
    label: string
    dark: boolean
    preview: {
        bg: string
        sidebar: string
        accent: string
        text: string
    }
}

const themes: ThemeOption[] = [
    {
        id: 'dark',
        label: 'Cyber Dark',
        dark: true,
        preview: { bg: '#0d1117', sidebar: '#161b22', accent: '#38bdf8', text: '#e6edf3' },
    },
    {
        id: 'light',
        label: 'Clean Light',
        dark: false,
        preview: { bg: '#ffffff', sidebar: '#f6f8fa', accent: '#0284c7', text: '#1f2937' },
    },
    {
        id: 'vscode-dark',
        label: 'VS Code Dark',
        dark: true,
        preview: { bg: '#1e1e1e', sidebar: '#252526', accent: '#007acc', text: '#d4d4d4' },
    },
    {
        id: 'vscode-light',
        label: 'VS Code Light',
        dark: false,
        preview: { bg: '#ffffff', sidebar: '#f3f3f3', accent: '#007acc', text: '#3b3b3b' },
    },
    {
        id: 'dracula',
        label: 'Dracula',
        dark: true,
        preview: { bg: '#282a36', sidebar: '#21222c', accent: '#bd93f9', text: '#f8f8f2' },
    },
    {
        id: 'monokai',
        label: 'Monokai',
        dark: true,
        preview: { bg: '#272822', sidebar: '#1e1f1c', accent: '#f92672', text: '#f8f8f2' },
    },
    {
        id: 'github-dark',
        label: 'GitHub Dark',
        dark: true,
        preview: { bg: '#0d1117', sidebar: '#161b22', accent: '#58a6ff', text: '#c9d1d9' },
    },
    {
        id: 'nord',
        label: 'Nord',
        dark: true,
        preview: { bg: '#2e3440', sidebar: '#3b4252', accent: '#88c0d0', text: '#eceff4' },
    },
    {
        id: 'synthwave',
        label: 'Synthwave',
        dark: true,
        preview: { bg: '#1a1a2e', sidebar: '#16213e', accent: '#ff2d78', text: '#f8f8f2' },
    },
    {
        id: 'solarized-light',
        label: 'Solarized Light',
        dark: false,
        preview: { bg: '#fdf6e3', sidebar: '#eee8d5', accent: '#268bd2', text: '#657b83' },
    },
]

export function ThemePicker() {
    const { theme, setTheme } = useTheme()
    const active = themes.find(t => t.id === theme) ?? themes[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    title="Change Color Theme"
                    className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-mono font-semibold text-foreground/80 transition-all duration-200 hover:border-primary/60 hover:bg-muted hover:text-foreground hover:scale-105 active:scale-95"
                >
                    <Palette className="h-3.5 w-3.5 text-primary" />
                    {/* 3 mini color dots showing the active theme palette */}
                    <span className="flex gap-0.5">
                        <span className="h-3 w-3 rounded-full ring-1 ring-white/10" style={{ background: active.preview.accent }} />
                        <span className="h-3 w-3 rounded-full ring-1 ring-white/10" style={{ background: active.preview.sidebar }} />
                        <span className="h-3 w-3 rounded-full ring-1 ring-white/10" style={{ background: active.preview.bg }} />
                    </span>
                    <span className="hidden sm:inline max-w-[7rem] truncate">{active.label}</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64 p-2"
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
            >
                <DropdownMenuLabel className="text-xs uppercase tracking-widest text-muted-foreground mb-1 px-2">
                    Color Theme
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Dark themes */}
                <p className="text-[10px] text-muted-foreground px-2 pt-2 pb-1 uppercase tracking-wider">Dark</p>
                {themes.filter(t => t.dark).map(t => (
                    <ThemeRow key={t.id} option={t} active={theme === t.id} onSelect={() => setTheme(t.id)} />
                ))}

                <DropdownMenuSeparator />

                {/* Light themes */}
                <p className="text-[10px] text-muted-foreground px-2 pt-2 pb-1 uppercase tracking-wider">Light</p>
                {themes.filter(t => !t.dark).map(t => (
                    <ThemeRow key={t.id} option={t} active={theme === t.id} onSelect={() => setTheme(t.id)} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


function ThemeRow({
    option,
    active,
    onSelect,
}: {
    option: ThemeOption
    active: boolean
    onSelect: () => void
}) {
    return (
        <DropdownMenuItem
            onClick={onSelect}
            className="flex items-center gap-2.5 px-2 py-2 rounded-md cursor-pointer group"
        >
            {/* Color swatch preview (3 bars like VS Code) */}
            <div
                className="flex-shrink-0 w-10 h-7 rounded overflow-hidden border border-white/10 flex flex-col gap-px"
                style={{ background: option.preview.bg }}
            >
                <div className="flex gap-px flex-1">
                    {/* sidebar strip */}
                    <div className="w-2.5 h-full" style={{ background: option.preview.sidebar }} />
                    {/* main area with accent bar */}
                    <div className="flex-1 flex flex-col gap-px pt-0.5 px-0.5">
                        <div className="h-1 rounded-sm w-3/4" style={{ background: option.preview.accent }} />
                        <div className="h-px rounded-sm w-full" style={{ background: option.preview.text, opacity: 0.4 }} />
                        <div className="h-px rounded-sm w-2/3" style={{ background: option.preview.text, opacity: 0.25 }} />
                    </div>
                </div>
            </div>

            <span className="flex-1 text-sm font-mono">{option.label}</span>

            {active && (
                <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
            )}
        </DropdownMenuItem>
    )
}
