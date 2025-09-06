'use client';

import { useState, useEffect } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true); // mode sombre par défaut
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.theme;

    // Si le thème est déjà défini dans localStorage, on l'applique
    if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light');
      setDarkMode(true);
    } else {
      // Sinon, on force le mode sombre par défaut
      document.documentElement.classList.add('dark');
      setDarkMode(true);
      localStorage.theme = 'dark';
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
  };

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/construction', label: 'Construction' },
    { href: '/energie', label: 'Énergie' },
    { href: '/technologies', label: 'Technologies' },
    { href: '/projects', label: 'Projets' },
    { href: '/blog', label: 'Infos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black 
    backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Texte */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/images/logo.svg" alt="Logo Pulse DRC" className="w-9 h-9" />
          <div className="hidden sm:block leading-tight">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Pulse Group</h1>
            <p className="text-xs text-green-600 dark:text-green-400 -mt-1">build your dreams</p>
          </div>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-white">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative group transition hover:text-green-600 dark:hover:text-green-400"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center space-x-2">
          {/* Toggle dark/light */}
          <button
            onClick={toggleDarkMode}
            aria-label="Changer le thème"
            title={darkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <HiOutlineSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <HiOutlineMoon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Menu mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu mobile"
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-4 px-4 space-y-3 text-sm font-medium text-gray-800 dark:text-white">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
