const steps = [
  {
    number: '01',
    title: 'Montaje inicial del sistema',
    details: [
      'Colocar los dos trípodes sobre una superficie plana y estable.',
      'Extender ambos trípodes hasta la altura marcada (1.7 m) para una correcta alineación del eje horizontal.',
      'Verificar que ambos trípodes se encuentren a la misma altura usando el nivel de cámara.',
      'Instalar el tubo estructural entre los dos soportes impresos en 3D, asegurando que el acople quede firme.',
      'Insertar el mecanismo de engranaje con manivela en el extremo correspondiente del eje.',
    ],
    gradient: 'linear-gradient(135deg, #0C8DE3, #2440A7)',
    accent: '#0C8DE3',
  },
  {
    number: '02',
    title: 'Instalación del fondo fotográfico',
    details: [
      'Fijar la tela de fondo al tubo estructural utilizando el sistema de cierre mágico (velcro).',
      'Asegurarse de que la tela quede alineada y centrada a lo largo del eje para evitar enrollados irregulares.',
      'Realizar un enrollado inicial manual para verificar que el fondo se desplaza correctamente.',
    ],
    gradient: 'linear-gradient(135deg, #2440A7, #6B30AB)',
    accent: '#2440A7',
  },
  {
    number: '03',
    title: 'Despliegue del fondo',
    details: [
      'Sujetar la tela desde su extremo inferior.',
      'Girar la manivela del engranaje en sentido de desenrollado mientras se guía la tela hacia abajo.',
      'Detener el giro cuando el fondo alcance la longitud deseada.',
      'El sistema de engranaje permite un despliegue controlado, evitando caídas bruscas.',
    ],
    gradient: 'linear-gradient(135deg, #6B30AB, #CD3592)',
    accent: '#6B30AB',
  },
  {
    number: '04',
    title: 'Enrollado del fondo',
    details: [
      'Girar la manivela en sentido contrario para enrollar nuevamente la tela sobre el eje.',
      'Mantener una ligera tensión en el borde inferior para asegurar un enrollado uniforme.',
      'Continuar hasta que la tela quede completamente recogida sobre el tubo.',
    ],
    gradient: 'linear-gradient(135deg, #CD3592, #FE6A71)',
    accent: '#CD3592',
  },
  {
    number: '05',
    title: 'Cambio de fondo',
    details: [
      'Desenrollar completamente la tela instalada.',
      'Separar el velcro que la fija al eje.',
      'Colocar el nuevo fondo siguiendo el mismo sistema de fijación.',
      'Este método permite realizar cambios rápidos de fondo sin desmontar la estructura principal.',
    ],
    gradient: 'linear-gradient(135deg, #FE6A71, #CD3592)',
    accent: '#FE6A71',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #000000 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#0C8DE3] uppercase mb-3">
            Guía de uso
          </p>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white">
            Método de uso{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0C8DE3, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              del sistema
            </span>
          </h2>
          <p className="font-montserrat text-base text-white/60 max-w-2xl mx-auto mt-4">
            El sistema está diseñado para una operación manual sencilla, rápida y segura mediante
            un mecanismo de enrollado basado en un engranaje estándar de persiana.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 group hover:bg-white/8 transition-all duration-300"
            >
              {/* Left gradient bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: step.gradient }}
              />

              <div className="pl-8 pr-6 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div
                    className="font-montserrat font-black text-4xl sm:text-5xl leading-none"
                    style={{
                      background: step.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white mb-4">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: step.accent }}
                        />
                        <span className="font-montserrat text-sm text-white/70 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step indicator badge */}
                <div
                  className="hidden lg:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full font-montserrat font-black text-white text-sm"
                  style={{ background: step.gradient }}
                >
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="font-montserrat text-sm text-white/40">
            Para garantizar un funcionamiento adecuado y prolongar la vida útil de los componentes,
            se recomienda seguir el procedimiento en el orden indicado.
          </p>
        </div>
      </div>
    </section>
  )
}
