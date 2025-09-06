export default function ConstructionHero() {
  return (
    <section
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/construction/construction.jpg')" }}
    >
      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Réaliser vos ambitions <br /> de <span className="text-teal-400">construction durable</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 drop-shadow-md">
          Solutions sur mesure pour bâtir des espaces qui durent, alliant innovation et respect de l’environnement.
        </p>
        <a
          href="#services"
          className="inline-block bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-400 focus:outline-none text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition"
          aria-label="Découvrir nos services"
        >
          Découvrir nos services
        </a>
      </div>

      {/* Effet zoom doux sur l'image */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-105" style={{ backgroundImage: "url('/images/construction/construction.jpg')" }} aria-hidden="true"></div>
    </section>
  );
}
