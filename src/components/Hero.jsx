'use client';

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 pointer-events-none z-0 transition-colors" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte principal */}
        <div className="max-w-xl text-center md:text-left space-y-6 animate-slideInLeft">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Pulse Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80">
            Énergie, Technologies, Construction. Ensemble, construisons l’avenir de l’Afrique.
          </p>
          <a
            href="#services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Découvrez nos services
          </a>
        </div>

        {/* Logo ou illustration */}
        <div className="w-full max-w-md animate-slideInRight">
          <img
            src="/images/logo1.png"
            alt="Logo Pulse"
            className="w-full h-auto drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Animations CSS inlined (JSX style) */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
