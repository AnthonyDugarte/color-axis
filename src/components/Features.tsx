const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Modular y portátil',
    desc: 'Diseño desmontable que cabe en cualquier bolsa de transporte. Lleva tu estudio a donde quieras.',
    gradient: 'linear-gradient(135deg, #0C8DE3, #2440A7)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Bajo costo',
    desc: 'Componentes fabricados en 3D que reducen el costo frente a sistemas comerciales tradicionales.',
    gradient: 'linear-gradient(135deg, #2440A7, #6B30AB)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sistema de velcro',
    desc: 'Fijación rápida y segura del fondo al tubo estructural mediante cierre mágico. Sin herramientas.',
    gradient: 'linear-gradient(135deg, #6B30AB, #CD3592)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 5.34L3.93 6.75M19.07 19.07l-1.41-1.41M5.34 18.66l-1.41 1.41M21 12h-3M3 12H6M12 3V6M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mecanismo de engranaje',
    desc: 'Manivela con engranaje de persiana para un despliegue y enrollado controlado, sin esfuerzo.',
    gradient: 'linear-gradient(135deg, #CD3592, #FE6A71)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fabricación 3D',
    desc: 'Soportes y piezas clave impresas en 3D para garantizar precisión, durabilidad y bajo peso.',
    gradient: 'linear-gradient(135deg, #FE6A71, #CD3592)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="23 4 23 10 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cambio rápido de fondo',
    desc: 'Sustituye el fondo en segundos: desenrolla, separa el velcro, coloca el nuevo. Sin desmontar la estructura.',
    gradient: 'linear-gradient(135deg, #0C8DE3, #6B30AB)',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#CD3592] uppercase mb-3">
            Lo que nos distingue
          </p>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-black">
            Características del{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6B30AB, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              sistema
            </span>
          </h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto mt-4">
            Diseñado desde cero para resolver los problemas reales de fotógrafos independientes
            y creadores de contenido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: feature.gradient }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white mb-5"
                style={{ background: feature.gradient }}
              >
                {feature.icon}
              </div>

              <h3 className="font-montserrat font-bold text-lg text-black mb-3">{feature.title}</h3>
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed">{feature.desc}</p>

              {/* Bottom gradient accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: feature.gradient }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
