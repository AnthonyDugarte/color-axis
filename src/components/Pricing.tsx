const plans = [
  {
    name: 'Kit Básico',
    price: '$45',
    currency: 'USD',
    description: 'El punto de partida ideal para fotógrafos que quieren explorar el sistema.',
    includes: [
      'Tubo estructural de aluminio',
      '2 soportes impresos en 3D',
      'Mecanismo de engranaje con manivela',
      'Sistema de fijación por velcro',
    ],
    notIncludes: [
      'Telas de fondo',
      'Bolso de transporte',
    ],
    gradient: 'linear-gradient(135deg, #0C8DE3, #2440A7)',
    accentColor: '#0C8DE3',
    popular: false,
  },
  {
    name: 'Kit Estándar',
    price: '$75',
    currency: 'USD',
    description: 'La opción más popular. Todo lo que necesitas para empezar a producir.',
    includes: [
      'Todo del Kit Básico',
      '1 tela de fondo (blanco o negro)',
      'Instrucciones de montaje en PDF',
      'Soporte técnico básico',
    ],
    notIncludes: [
      'Bolso de transporte',
    ],
    gradient: 'linear-gradient(135deg, #6B30AB, #CD3592)',
    accentColor: '#CD3592',
    popular: true,
  },
  {
    name: 'Kit Completo',
    price: '$120',
    currency: 'USD',
    description: 'La solución integral para profesionales que exigen versatilidad total.',
    includes: [
      'Todo del Kit Estándar',
      '3 telas de fondo (blanco, negro y gris)',
      'Bolso de transporte personalizado',
      'Soporte técnico prioritario',
    ],
    notIncludes: [],
    gradient: 'linear-gradient(135deg, #CD3592, #FE6A71)',
    accentColor: '#FE6A71',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0d0d1a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#0C8DE3] uppercase mb-3">
            Planes y precios
          </p>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white">
            Elige tu{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0C8DE3, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              kit ideal
            </span>
          </h2>
          <p className="font-montserrat text-base text-white/60 max-w-xl mx-auto mt-4">
            Todos los kits incluyen piezas fabricadas en 3D con materiales de alta calidad.
            Precios orientativos — contáctanos para disponibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.popular ? 'border-[#CD3592]/60 scale-105 shadow-xl shadow-[#CD3592]/20' : 'border-white/10'
              }`}
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-1.5 font-montserrat text-xs font-bold text-white tracking-widest uppercase"
                  style={{ background: plan.gradient }}
                >
                  Más popular
                </div>
              )}

              {/* Top gradient bar */}
              <div
                className={`h-1 ${plan.popular ? 'mt-8' : ''}`}
                style={{ background: plan.gradient }}
              />

              <div className="p-7">
                {/* Name */}
                <h3 className="font-montserrat font-black text-xl text-white mb-2">{plan.name}</h3>
                <p className="font-montserrat text-sm text-white/60 mb-6 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="font-montserrat font-black text-5xl"
                    style={{
                      background: plan.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="font-montserrat text-sm text-white/40 ml-2">{plan.currency}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-6" />

                {/* Includes */}
                <ul className="space-y-3 mb-4">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 flex-shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle cx="8" cy="8" r="8" fill={plan.accentColor} opacity="0.2" />
                        <path d="M5 8l2 2 4-4" stroke={plan.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-montserrat text-sm text-white/75">{item}</span>
                    </li>
                  ))}
                  {plan.notIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 opacity-40">
                      <svg
                        className="mt-0.5 flex-shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle cx="8" cy="8" r="8" fill="white" opacity="0.1" />
                        <path d="M5 11l6-6M11 11L5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="font-montserrat text-sm text-white/40">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block w-full text-center font-montserrat font-semibold py-3 rounded-full text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 mt-6"
                  style={{ background: plan.gradient }}
                >
                  Solicitar kit
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-montserrat text-xs text-white/30 mt-8">
          * Precios en USD orientativos. Incluyen IVA. Sujetos a disponibilidad de stock.
          Para pedidos en Venezuela, contáctanos para precio en bolívares.
        </p>
      </div>
    </section>
  )
}
