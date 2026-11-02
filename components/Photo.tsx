// Platzhalterfotos von Unsplash (kostenlos nutzbar, Unsplash-Lizenz). Vor dem Livegang durch eigene Fotos ersetzen:
// Eigene Bilder unter /public/bilder/ ablegen und hier als id "/bilder/datei.jpg" übergeben.
export default function Photo({
  id,
  alt,
  priority,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: {
  id: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (id.startsWith("/")) {
    return <img className="photo" src={id} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />;
  }
  const base = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75`;
  return (
    <img
      className="photo"
      src={`${base}&w=900`}
      srcSet={`${base}&w=600 600w, ${base}&w=900 900w, ${base}&w=1400 1400w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
