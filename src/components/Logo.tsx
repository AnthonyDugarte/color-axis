interface LogoProps {
  size?: number
  showText?: boolean
  textColor?: 'white' | 'dark'
}

export default function Logo({ size = 64, showText = true, textColor = 'white' }: LogoProps) {
  const gradId = `ca-grad-${size}`
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C8DE3" />
            <stop offset="50%" stopColor="#6B30AB" />
            <stop offset="100%" stopColor="#CD3592" />
          </linearGradient>
        </defs>
        {/* C letter */}
        <path
          d="M38 12C22.536 12 10 24.536 10 40C10 55.464 22.536 68 38 68C45.2 68 51.8 65.2 56.8 60.6L49.6 53.4C46.6 56.2 42.5 58 38 58C28.06 58 20 49.94 20 40C20 30.06 28.06 22 38 22C42.5 22 46.6 23.8 49.6 26.6L56.8 19.4C51.8 14.8 45.2 12 38 12Z"
          fill={`url(#${gradId})`}
        />
        {/* Diagonal slash */}
        <rect
          x="44"
          y="14"
          width="4"
          height="52"
          rx="2"
          transform="rotate(15 44 14)"
          fill={textColor === 'white' ? '#ffffff' : '#000000'}
          opacity="0.7"
        />
        {/* A letter */}
        <path
          d="M56 68L64 12H70L78 68H68L66.5 56H67.5L64 30L60.5 56H61.5L60 68H56Z"
          fill={textColor === 'white' ? '#ffffff' : '#1a1a1a'}
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-montserrat font-black tracking-widest text-sm"
            style={{
              background: 'linear-gradient(90deg, #0C8DE3, #6B30AB, #CD3592)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: size * 0.22,
              letterSpacing: '0.15em',
            }}
          >
            COLOR
            <span style={{ WebkitTextFillColor: textColor === 'white' ? '#0C8DE3' : '#0C8DE3' }}>
              AXIS
            </span>
          </span>
          <span
            className="font-montserrat font-light tracking-[0.3em] uppercase"
            style={{
              fontSize: size * 0.1,
              color: textColor === 'white' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
            }}
          >
            Aurimar Makers
          </span>
        </div>
      )}
    </div>
  )
}
