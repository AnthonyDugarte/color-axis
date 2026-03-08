import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Sobre nosotros', href: '#about' },
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Precios', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* gradient accent line */}
      <div
        className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592, #FE6A71)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0">
            <Logo size={40} showText={true} />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-montserrat text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="font-montserrat text-sm font-semibold px-5 py-2 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6B30AB, #CD3592)' }}
            >
              Ver precios
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-montserrat text-sm font-medium text-white/80 hover:text-white py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="font-montserrat text-sm font-semibold px-5 py-3 rounded-full text-white text-center"
            style={{ background: 'linear-gradient(135deg, #6B30AB, #CD3592)' }}
            onClick={() => setOpen(false)}
          >
            Ver precios
          </a>
        </div>
      )}
    </nav>
  )
}
