export default function MissionVision() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0d0d1a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#0C8DE3] uppercase mb-3">
            Nuestra identidad
          </p>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white">
            Misión &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6B30AB, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Visión
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="relative rounded-2xl overflow-hidden p-8 bg-white/5 border border-white/10">
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #0C8DE3, #2440A7)' }}
            />
            {/* Wavy decoration */}
            <svg className="absolute bottom-4 right-4 opacity-15" width="80" height="56" viewBox="0 0 80 56">
              {[0, 18, 36].map((y) => (
                <path
                  key={y}
                  d={`M0 ${y + 8} Q20 ${y} 40 ${y + 8} Q60 ${y + 16} 80 ${y + 8}`}
                  fill="none" stroke="#0C8DE3" strokeWidth="2.5" strokeLinecap="round"
                />
              ))}
            </svg>

            <div className="mb-6">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: 'linear-gradient(135deg, #0C8DE3, #2440A7)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white" />
                </svg>
              </div>
              <h3 className="font-montserrat font-black text-2xl text-white mb-2">Misión</h3>
            </div>

            <p className="font-montserrat text-sm text-white/75 leading-relaxed mb-4">
              Brindar a fotógrafos independientes y creadores de contenido una solución de fondos
              fotográficos modular, portátil y de bajo costo que profesionalice sus producciones
              visuales.
            </p>
            <p className="font-montserrat text-sm text-white/75 leading-relaxed">
              A través de un diseño mecánico innovador y fabricación digital, facilitamos el montaje
              eficiente y el intercambio versátil de escenarios en cualquier entorno de trabajo.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="font-montserrat text-xs text-white/40 leading-relaxed">
                <span className="font-semibold text-white/60">¿Por qué esta misión?</span> — Se
                enfoca en el problema que resuelve actualmente (altos costos y baja movilidad) y en
                su mercado meta (estudios independientes y creadores).
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="relative rounded-2xl overflow-hidden p-8 border border-white/10"
            style={{ background: 'linear-gradient(135deg, #6B30AB22, #CD359222)' }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #6B30AB, #CD3592, #FE6A71)' }}
            />
            {/* Wavy decoration */}
            <svg className="absolute bottom-4 right-4 opacity-15" width="80" height="56" viewBox="0 0 80 56">
              {[0, 18, 36].map((y) => (
                <path
                  key={y}
                  d={`M0 ${y + 8} Q20 ${y} 40 ${y + 8} Q60 ${y + 16} 80 ${y + 8}`}
                  fill="none" stroke="#CD3592" strokeWidth="2.5" strokeLinecap="round"
                />
              ))}
            </svg>

            <div className="mb-6">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: 'linear-gradient(135deg, #6B30AB, #CD3592)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white" />
                </svg>
              </div>
              <h3 className="font-montserrat font-black text-2xl text-white mb-2">Visión</h3>
            </div>

            <p className="font-montserrat text-sm text-white/75 leading-relaxed mb-4">
              Consolidarnos como la solución modular de referencia para el sector creativo y
              audiovisual, democratizando el acceso a herramientas de estudio profesionales mediante
              la innovación en el diseño y la sostenibilidad de la fabricación aditiva.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="font-montserrat text-xs text-white/40 leading-relaxed">
                <span className="font-semibold text-white/60">¿Por qué esta visión?</span> — Se
                proyecta hacia el futuro como una base sólida para el escalamiento productivo,
                destacando la impresión 3D para ofrecer alternativas competitivas frente a sistemas
                comerciales tradicionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
