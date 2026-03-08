export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 20%, #2440A7 50%, #6B30AB 70%, #CD3592 90%, #FE6A71 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wavy lines - brand motif */}
        <svg
          className="absolute top-20 right-10 opacity-20"
          width="120"
          height="80"
          viewBox="0 0 120 80"
        >
          {[0, 20, 40].map((y) => (
            <path
              key={y}
              d={`M0 ${y + 10} Q30 ${y} 60 ${y + 10} Q90 ${y + 20} 120 ${y + 10}`}
              fill="none"
              stroke="#CD3592"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>
        <svg
          className="absolute bottom-32 left-8 opacity-20"
          width="100"
          height="70"
          viewBox="0 0 100 70"
        >
          {[0, 20, 40].map((y) => (
            <path
              key={y}
              d={`M0 ${y + 10} Q25 ${y} 50 ${y + 10} Q75 ${y + 20} 100 ${y + 10}`}
              fill="none"
              stroke="#6B30AB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>
        {/* Diagonal stripes decoration */}
        <svg className="absolute bottom-0 left-0 opacity-10" width="200" height="200" viewBox="0 0 200 200">
          {[0, 20, 40, 60, 80, 100].map((i) => (
            <line key={i} x1={i} y1="200" x2={i + 80} y2="0" stroke="#FE6A71" strokeWidth="8" />
          ))}
        </svg>
        {/* Glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: '#6B30AB' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: '#CD3592' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Big CA monogram */}
        <div className="mb-8 flex justify-center">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0C8DE3" />
                <stop offset="50%" stopColor="#6B30AB" />
                <stop offset="100%" stopColor="#CD3592" />
              </linearGradient>
            </defs>
            {/* C */}
            <path
              d="M72 16C41.07 16 16 41.07 16 72C16 102.93 41.07 128 72 128C85.6 128 98 122.8 107.2 114.4L93.6 100.8C88 106 80.4 109.2 72 109.2C51.4 109.2 34.8 92.6 34.8 72C34.8 51.4 51.4 34.8 72 34.8C80.4 34.8 88 38 93.6 43.2L107.2 29.6C98 21.2 85.6 16 72 16Z"
              fill="url(#hero-grad)"
            />
            {/* Slash */}
            <rect
              x="88"
              y="20"
              width="6"
              height="120"
              rx="3"
              transform="rotate(12 88 20)"
              fill="rgba(255,255,255,0.5)"
            />
            {/* A */}
            <path
              d="M108 144L124 16H136L152 144H132L129 112H131L124 56L117 112H119L116 144H108Z"
              fill="white"
            />
          </svg>
        </div>

        {/* COLORAXIS logotype */}
        <div className="mb-6">
          <h1 className="font-montserrat font-black text-5xl sm:text-6xl lg:text-8xl tracking-wider leading-none">
            <span
              style={{
                background: 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              COLOR
            </span>
            <span className="text-white">AXIS</span>
          </h1>
          <p className="font-montserrat font-light text-xs sm:text-sm tracking-[0.4em] text-white/60 mt-2 uppercase">
            Aurimar Makers
          </p>
        </div>

        {/* Tagline */}
        <h2 className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-4">
          El estudio siempre contigo
        </h2>
        <p className="font-montserrat font-light text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sistema modular de cambio de fondos fotográficos — portátil, de bajo costo y diseñado
          para fotógrafos independientes y creadores de contenido.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="font-montserrat font-semibold px-8 py-4 rounded-full text-white text-base transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #6B30AB, #CD3592)' }}
          >
            Ver características
          </a>
          <a
            href="#how-it-works"
            className="font-montserrat font-semibold px-8 py-4 rounded-full text-white text-base border border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            Cómo funciona
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
