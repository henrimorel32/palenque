export default function PreloadHeroAssets() {
  const images = [
    '/images/plage.webp',
    '/images/plageSoleil.webp',
    '/images/hamacDansEau.webp',
    '/images/vueAerienne1.webp',
  ];

  return (
    <>
      {/* LCP image : fetchpriority haute */}
      <link
        rel="preload"
        as="image"
        href={images[0]}
        type="image/webp"
        fetchPriority="high"
      />
      {/* Images suivantes : preload standard */}
      {images.slice(1).map((src) => (
        <link key={src} rel="preload" as="image" href={src} type="image/webp" />
      ))}
      {/*
        Note : il n'existe pas de standard fiable pour <link rel="preload" as="video">.
        La vidéo est déclarée avec preload="metadata" dans le composant HeroParallax.
        On évite ici de gaspiller une connexion HTTP avec un preload invalide.
      */}
    </>
  );
}
