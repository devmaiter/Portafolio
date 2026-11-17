// Logos de marcas desde Simple Icons (licencia CC0), pintados con el color de cada habilidad.
export function BrandIcon({ icon, className = "w-4 h-4" }: { icon: { path: string; title: string }; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

// PowerShell no está en Simple Icons: su marca es un paralelogramo con «>_».
export function PowerShellIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5.2 3h17.3c.9 0 1.5.8 1.3 1.7l-3.3 14.6c-.2.9-1 1.7-1.9 1.7H1.3C.4 21-.2 20.2 0 19.3L3.3 4.7C3.5 3.8 4.3 3 5.2 3z" fill="currentColor" />
      <path d="M7.2 7.6l5.6 4.3-7.3 4.6" fill="none" stroke="#0b0d12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6 16.5h4.6" fill="none" stroke="#0b0d12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
