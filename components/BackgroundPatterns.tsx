'use client';

// Composant réutilisable pour les décors de fond modernes

export function DotsPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${className}`}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function WavePattern({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`absolute w-full overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill="currentColor"
          fillOpacity="0.03"
        />
        <path
          d="M0 80C240 40 480 100 720 80C960 60 1200 100 1440 80V120H0V80Z"
          fill="currentColor"
          fillOpacity="0.05"
        />
      </svg>
    </div>
  );
}

export function BlobShape({ 
  color = 'bg-yellow-400', 
  className = '' 
}: { 
  color?: string; 
  className?: string;
}) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${color} ${className}`}
      style={{
        filter: 'blur(80px)',
      }}
    />
  );
}

export function TropicalLeaves({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden ${className}`}>
      {/* Feuille 1 */}
      <svg className="absolute -top-10 -left-10 w-64 h-64 text-green-600 rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 Q20 30 15 60 Q10 90 50 95 Q90 90 85 60 Q80 30 50 10" />
      </svg>
      {/* Feuille 2 */}
      <svg className="absolute top-1/4 -right-10 w-48 h-48 text-green-600 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 Q20 30 15 60 Q10 90 50 95 Q90 90 85 60 Q80 30 50 10" />
      </svg>
      {/* Feuille 3 */}
      <svg className="absolute bottom-10 left-1/4 w-40 h-40 text-green-600 rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 Q20 30 15 60 Q10 90 50 95 Q90 90 85 60 Q80 30 50 10" />
      </svg>
    </div>
  );
}

export function GradientOrbs({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}

export function DiagonalStripes({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${className}`}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect x="0" y="0" width="20" height="40" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stripes)" />
      </svg>
    </div>
  );
}

export function CirclesPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-stone-200 rounded-full opacity-20" />
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-stone-200 rounded-full opacity-10" />
      <div className="absolute bottom-20 left-10 w-40 h-40 border-2 border-stone-200 rounded-full opacity-15" />
      <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-yellow-300 rounded-full opacity-20" />
    </div>
  );
}

export function MeshGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(at 0% 0%, hsla(45,100%,70%,1) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsla(200,100%,80%,1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsla(340,100%,80%,1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(120,100%,80%,1) 0px, transparent 50%)
          `,
          filter: 'blur(60px)',
          transform: 'scale(1.2)',
        }}
      />
    </div>
  );
}
