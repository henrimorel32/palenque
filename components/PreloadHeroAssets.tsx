export default function PreloadHeroAssets() {
  const images = [
    '/images/plage.webp',
    '/images/plageSoleil.webp',
    '/images/hamacDansEau.webp',
    '/images/vueAerienne1.webp',
  ];

  return (
    <>
      {images.map((src) => (
        <link key={src} rel="preload" as="image" href={src} type="image/webp" />
      ))}
      <link rel="preload" as="video" href="/images/outputHome.webm" type="video/webm" />
    </>
  );
}
