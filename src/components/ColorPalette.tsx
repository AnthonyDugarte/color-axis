const palette = [
  { hex: '#000000', name: 'Negro', role: 'Color principal', textColor: 'white' },
  { hex: '#FFFFFF', name: 'Blanco', role: 'Fondo y espacios', textColor: 'black', border: true },
  { hex: '#0C8DE3', name: 'Azul cielo', role: 'COLOR', textColor: 'white' },
  { hex: '#2440A7', name: 'Azul marino', role: 'Profundidad', textColor: 'white' },
  { hex: '#6B30AB', name: 'Púrpura', role: 'Acento principal', textColor: 'white' },
  { hex: '#CD3592', name: 'Rosa fuerte', role: 'Energía', textColor: 'white' },
  { hex: '#FE6A71', name: 'Salmón', role: 'Calidez', textColor: 'white' },
]

const weights = [
  { weight: 300, label: 'Light' },
  { weight: 400, label: 'Regular' },
  { weight: 600, label: 'SemiBold' },
  { weight: 700, label: 'Bold' },
  { weight: 800, label: 'ExtraBold' },
  { weight: 900, label: 'Black' },
]

export default function ColorPalette() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] text-[#CD3592] uppercase mb-3">
            Identidad visual
          </p>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-black">
            Paleta de colores &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6B30AB, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              tipografía
            </span>
          </h2>
        </div>

        {/* Color swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {palette.map((color) => (
            <div key={color.hex} className="flex flex-col">
              <div
                className="aspect-square rounded-2xl shadow-md mb-3 flex flex-col justify-end p-3 transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: color.hex,
                  border: color.border ? '2px solid #e5e7eb' : undefined,
                }}
              >
                <span
                  className="font-montserrat font-bold text-xs tracking-wider"
                  style={{ color: color.textColor === 'white' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.6)' }}
                >
                  {color.hex}
                </span>
              </div>
              <p className="font-montserrat font-semibold text-xs text-black">{color.name}</p>
              <p className="font-montserrat text-xs text-gray-400">{color.role}</p>
            </div>
          ))}
        </div>

        {/* Gradient bar */}
        <div
          className="h-3 rounded-full mb-16"
          style={{ background: 'linear-gradient(90deg, #000000, #2440A7, #6B30AB, #CD3592, #FE6A71)' }}
        />

        {/* Typography section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-montserrat font-black text-2xl text-black mb-2">Tipografía</h3>
            <p
              className="font-montserrat font-black text-6xl sm:text-8xl leading-none mb-4"
              style={{
                background: 'linear-gradient(135deg, #000, #6B30AB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Montserrat
            </p>
            <p className="font-montserrat text-sm text-gray-500 mb-4">
              Tipografía de estilo Sans Serif de trazos limpios y proporciones equilibradas.
            </p>
            <div className="space-y-1 text-sm font-montserrat text-gray-700">
              <p><span className="font-semibold">Color:</span> Transmite la energía y diversidad de opciones que el sistema ofrece al fotógrafo.</p>
              <p><span className="font-semibold">Axis:</span> Presenta un peso visual robusto, reforzando la idea de resistencia, durabilidad y precisión técnica de las piezas fabricadas en 3D.</p>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-sm text-gray-500 uppercase tracking-widest mb-5">
              Pesos tipográficos
            </h4>
            <div className="space-y-3">
              {weights.map(({ weight, label }) => (
                <div key={weight} className="flex items-baseline gap-4">
                  <span className="font-montserrat text-xs text-gray-400 w-20 flex-shrink-0">{label} {weight}</span>
                  <span
                    className="font-montserrat text-lg sm:text-2xl text-black leading-tight"
                    style={{ fontWeight: weight }}
                  >
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
