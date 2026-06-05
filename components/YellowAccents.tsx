'use client';

// Accents de marque bases sur la palette sable/mer du manuel.

// Bande verticale fine sur le côté gauche
export function YellowAccentLeft({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-palenque-sand via-palenque-turquoise to-transparent ${className}`} />
  );
}

// Bande verticale fine sur le côté droit
export function YellowAccentRight({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-palenque-turquoise to-palenque-sand ${className}`} />
  );
}

// Bande horizontale en haut
export function YellowTopLine({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-palenque-sand to-transparent ${className}`} />
  );
}

// Dégradé jaune subtil en haut de section
export function YellowGradientTop({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-palenque-sand-light/70 to-transparent pointer-events-none ${className}`} />
  );
}

// Dégradé jaune subtil en bas de section
export function YellowGradientBottom({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-palenque-sand-light/70 to-transparent pointer-events-none ${className}`} />
  );
}

// Coin jaune décoratif haut-gauche
export function YellowCornerTL({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 w-24 h-24 pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-palenque-sand to-transparent" />
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-palenque-sand to-transparent" />
    </div>
  );
}

// Coin jaune décoratif haut-droite
export function YellowCornerTR({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute top-0 right-0 w-24 h-24 pointer-events-none ${className}`}>
      <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-palenque-sand to-transparent" />
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-palenque-sand to-transparent" />
    </div>
  );
}

// Coin jaune décoratif bas-gauche
export function YellowCornerBL({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 w-24 h-24 pointer-events-none ${className}`}>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-palenque-sand to-transparent" />
      <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-palenque-sand to-transparent" />
    </div>
  );
}

// Coin jaune décoratif bas-droite
export function YellowCornerBR({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 right-0 w-24 h-24 pointer-events-none ${className}`}>
      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-palenque-sand to-transparent" />
      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-palenque-sand to-transparent" />
    </div>
  );
}

// Ligne jaune ondulée décorative
export function YellowWaveLine({ className = '', position = 'top' }: { className?: string; position?: 'top' | 'bottom' }) {
  const posClass = position === 'top' ? 'top-0' : 'bottom-0 rotate-180';
  return (
    <div className={`absolute left-0 right-0 h-16 overflow-hidden pointer-events-none ${posClass} ${className}`}>
      <svg viewBox="0 0 1440 60" fill="none" className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30"
          stroke="url(#yellowGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#BCAA8E" stopOpacity="0.55" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Barre jaune verticale avec dégradé (style moderne)
export function YellowBar({ className = '', side = 'left' }: { className?: string; side?: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-8' : 'right-8';
  return (
    <div className={`absolute top-1/4 bottom-1/4 w-0.5 ${sideClass} ${className}`}>
      <div className="w-full h-full bg-gradient-to-b from-transparent via-palenque-sand/50 to-transparent" />
    </div>
  );
}

// Halo jaune subtil autour d'un élément
export function YellowGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-palenque-sand/10 blur-3xl rounded-full pointer-events-none ${className}`} />
  );
}

// Points jaunes décoratifs
export function YellowDots({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-palenque-sand/70" />
      <div className="absolute top-4 left-8 w-1.5 h-1.5 rounded-full bg-palenque-turquoise/50" />
      <div className="absolute top-8 left-2 w-1 h-1 rounded-full bg-palenque-sand/60" />
    </div>
  );
}

// Trait jaune sous les titres
export function YellowUnderline({ className = '' }: { className?: string }) {
  return (
    <div className={`h-0.5 bg-gradient-to-r from-palenque-sand via-palenque-turquoise to-transparent rounded-full mt-2 ${className}`} />
  );
}
