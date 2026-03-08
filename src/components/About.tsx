export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#CD3592] uppercase mb-4">
              Nuestra historia
            </p>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-black leading-tight mb-6">
              ¿Qué es{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Color Axis?
              </span>
            </h2>
            <p className="font-montserrat text-base text-gray-700 leading-relaxed mb-5">
              Color Axis nace de la intersección entre la ingeniería funcional y la pasión por la
              imagen. Somos una marca dedicada al diseño y desarrollo de soluciones modulares para
              el entorno fotográfico, creada para responder a los retos de movilidad, costo y
              eficiencia que enfrentan los creadores visuales hoy en día.
            </p>
            <p className="font-montserrat text-base text-gray-700 leading-relaxed mb-8">
              Nuestro sistema manual de cambio de fondos no es solo una herramienta, sino el eje
              central de un estudio dinámico. A través del uso de fabricación digital y un diseño
              mecánico intuitivo, permitimos que fotógrafos y creadores de contenido profesionalicen
              su espacio de trabajo sin las limitaciones de los sistemas tradicionales pesados y
              costosos.
            </p>
            <blockquote className="border-l-4 pl-6 italic text-gray-600 font-montserrat text-base" style={{ borderColor: '#6B30AB' }}>
              "La técnica no debe limitar la creatividad, sino potenciarla."
            </blockquote>
          </div>

          {/* Visual panel */}
          <div className="relative">
            {/* Main card */}
            <div
              className="rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #2440A7 50%, #6B30AB 100%)',
              }}
            >
              {/* Decorative waves */}
              <svg
                className="absolute top-4 right-4 opacity-30"
                width="80"
                height="60"
                viewBox="0 0 80 60"
              >
                {[0, 18, 36].map((y) => (
                  <path
                    key={y}
                    d={`M0 ${y + 8} Q20 ${y} 40 ${y + 8} Q60 ${y + 16} 80 ${y + 8}`}
                    fill="none"
                    stroke="#CD3592"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              {/* Big CA */}
              <div className="mb-8">
                <svg width="120" height="80" viewBox="0 0 160 110" fill="none">
                  <defs>
                    <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0C8DE3" />
                      <stop offset="100%" stopColor="#CD3592" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M48 8C27.1 8 10 25.1 10 46C10 66.9 27.1 84 48 84C56.8 84 64.9 80.9 71.2 75.6L61.6 66C57.6 69.6 52.1 71.8 48 71.8C33.9 71.8 22.2 60.1 22.2 46C22.2 31.9 33.9 20.2 48 20.2C52.1 20.2 57.6 22.4 61.6 26L71.2 16.4C64.9 11.1 56.8 8 48 8Z"
                    fill="url(#about-grad)"
                  />
                  <rect x="62" y="10" width="4" height="76" rx="2" transform="rotate(10 62 10)" fill="rgba(255,255,255,0.4)" />
                  <path d="M80 94L92 8H100L112 94H98L96 74H97.5L92 34L86.5 74H88L86 94H80Z" fill="white" />
                </svg>
              </div>

              <div
                className="text-2xl font-black tracking-widest font-montserrat mb-1"
                style={{
                  background: 'linear-gradient(90deg, #0C8DE3, #CD3592)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                COLORAXIS
              </div>
              <p className="font-montserrat text-xs font-light tracking-[0.25em] text-white/60 uppercase mb-6">
                Aurimar Makers
              </p>
              <p className="font-montserrat text-sm text-white/80 leading-relaxed">
                En Color Axis, creemos que la técnica no debe limitar la creatividad, sino potenciarla.
              </p>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592, #FE6A71)' }}
              />
            </div>

            {/* Stats strip */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { value: '5', unit: 'pasos', label: 'De montaje' },
                { value: '3D', unit: 'impresión', label: 'Componentes' },
                { value: '1.7m', unit: 'altura', label: 'Estándar' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div
                    className="font-montserrat font-black text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #6B30AB, #CD3592)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-montserrat text-xs font-semibold text-gray-800">{stat.unit}</div>
                  <div className="font-montserrat text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
