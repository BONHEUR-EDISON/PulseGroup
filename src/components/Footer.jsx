"use client";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Slogan */}
        <div>
          <a href="/" className="flex items-center space-x-4 mb-6">
            <img
              src="/images/logo.png"
              alt="Pulse Technologies Logo"
              className="h-12 w-12"
              loading="lazy"
            />
            <div>
              <h2 className="font-montserrat text-teal-600 dark:text-teal-400 text-3xl font-extrabold tracking-tight">
                Pulse Group
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
                Build your dreams
              </p>
            </div>
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
            PULSE Group SARL <br />
           Build.
          </p>
        </div>

        {/* Liens rapides */}
        <nav aria-label="Liens rapides" className="space-y-3">
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-medium">
            {[
              { href: "/", label: "Accueil" },
              { href: "/about", label: "À propos" },
              { href: "/construction", label: "Construction" },
              { href: "/energie", label: "Énergie" },
              { href: "/technologies", label: "Technologies" },
              { href: "/projects", label: "Projets" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
            Contact
          </h3>
          <address className="not-italic space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>123 Rue de l'Innovation</p>
            <p>Kinshasa, République Démocratique du Congo</p>
            <p>
              Téléphone :{" "}
              <a
                href="tel:+243123456789"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
              >
                +243 12 345 6789
              </a>
            </p>
            <p>
              Email :{" "}
              <a
                href="mailto:contact@pulsetech.com"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
              >
                contact@pulsetech.com
              </a>
            </p>
          </address>
        </div>

        {/* Réseaux sociaux + newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
            Suivez-nous
          </h3>
          <div className="flex space-x-6 mb-8">
            {/* Facebook */}
            <a
              href="https://facebook.com/pulsetech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/pulsetech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1.6a9.16 9.16 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13 12.83 12.83 0 01-9.3-4.72 4.47 4.47 0 001.4 6.02A4.48 4.48 0 012 9.6v.06a4.53 4.53 0 003.62 4.44 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.05 9.05 0 012 19.54 12.79 12.79 0 008.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/pulsetech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5H5a2.5 2.5 0 002.5-2.48v-.02A2.5 2.5 0 005 3.5H4.98zM2 8.98v12.02h5v-12H2zm7 0v12.02h5v-6.02c0-3 3-2.89 3 0v6.02h5v-7.98c0-6-6-5.78-8-2.83v-.21H9z" />
              </svg>
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Abonnez-vous à notre newsletter
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci pour votre abonnement !");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Votre adresse e-mail"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-md transition-colors duration-200 font-semibold"
              >
                S’abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 text-center py-5 text-xs text-gray-500 dark:text-gray-400 select-none">
        © {new Date().getFullYear()} PULSE Group SARL — Tous droits réservés.
      </div>
    </footer>
  );
}
