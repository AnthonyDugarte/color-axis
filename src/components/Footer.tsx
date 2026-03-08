const footerLinks = [
  { label: 'Sobre nosotros', href: '#about' },
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Precios', href: '#pricing' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-black">
      {/* Gradient top border */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #0C8DE3, #2440A7, #6B30AB, #CD3592, #FE6A71)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            {/* Inline mini logo */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
                <defs>
                  <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0C8DE3" />
                    <stop offset="50%" stopColor="#6B30AB" />
                    <stop offset="100%" stopColor="#CD3592" />
                  </linearGradient>
                </defs>
                <path
                  d="M38 12C22.536 12 10 24.536 10 40C10 55.464 22.536 68 38 68C45.2 68 51.8 65.2 56.8 60.6L49.6 53.4C46.6 56.2 42.5 58 38 58C28.06 58 20 49.94 20 40C20 30.06 28.06 22 38 22C42.5 22 46.6 23.8 49.6 26.6L56.8 19.4C51.8 14.8 45.2 12 38 12Z"
                  fill="url(#footer-grad)"
                />
                <rect x="44" y="14" width="4" height="52" rx="2" transform="rotate(15 44 14)" fill="rgba(255,255,255,0.4)" />
                <path d="M56 68L64 12H70L78 68H68L66.5 56H67.5L64 30L60.5 56H61.5L60 68H56Z" fill="white" />
              </svg>
              <div>
                <div
                  className="font-montserrat font-black text-lg tracking-widest"
                  style={{
                    background: 'linear-gradient(90deg, #0C8DE3, #CD3592)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  COLORAXIS
                </div>
                <div className="font-montserrat text-xs font-light tracking-[0.25em] text-white/40 uppercase">
                  Aurimar Makers
                </div>
              </div>
            </div>
            <p className="font-montserrat text-sm text-white/50 leading-relaxed max-w-xs">
              Sistema modular de cambio de fondos fotográficos. Portátil, de bajo costo y diseñado
              para creadores visuales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-white/40 uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-montserrat text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-white/40 uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6B30AB, #CD3592)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a
                  href="mailto:contacto@aurimar.com"
                  className="font-montserrat text-sm text-white/60 hover:text-white transition-colors"
                >
                  contacto@aurimar.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0C8DE3, #2440A7)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m4 4V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-montserrat text-sm text-white/60">Venezuela</span>
              </div>
            </div>

            {/* Social placeholders */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: 'Instagram',
                  icon: (
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                  ),
                },
                {
                  label: 'TikTok',
                  icon: (
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  ),
                },
                {
                  label: 'WhatsApp',
                  icon: (
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-montserrat text-xs text-white/30">
            © {new Date().getFullYear()} ColorAxis — Aurimar Makers. Todos los derechos reservados.
          </p>
          <p className="font-montserrat text-xs text-white/20">
            Fabricado con pasión en Venezuela 🇻🇪
          </p>
        </div>
      </div>
    </footer>
  )
}
