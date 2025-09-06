'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

export default function ConstructionNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Ajout pour gérer le menu déroulant mobile

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/construction" className="flex items-center space-x-3">
          <img src="/images/logo.svg" alt="Logo Pulse" className="w-9 h-9" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-semibold text-teal-600 dark:text-teal-300">Pulse Construction</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Solutions BTP</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/construction" className="hover:text-teal-600 dark:hover:text-teal-400">Accueil</Link>

          {/* Dropdown Services */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1">
              Services <FiChevronDown size={16} />
            </button>
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-md py-2 transition-all duration-200 ${
              isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <Link href="/construction/services/architecture" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">🏛 Architecture & Design</Link>
              <Link href="/construction/services/ingenierie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">🧠 Ingénierie & Étude</Link>
              <Link href="/construction/services/renovation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">🏗 Rénovation</Link>
            </div>
          </div>

          <Link href="/construction/projects" className="hover:text-teal-600 dark:hover:text-teal-400">Projets</Link>
          <Link href="/construction/contact" className="hover:text-teal-600 dark:hover:text-teal-400">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 space-y-3">
          <Link href="/construction" onClick={() => setMobileMenuOpen(false)} className="block py-1">🏠 Accueil</Link>

          {/* Services Dropdown Mobile */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-2 font-semibold"
            >
              Services
              <FiChevronDown className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-2 mt-2">
                <Link href="/construction/services/architecture" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:underline">🏛 Architecture & Design</Link>
                <Link href="/construction/services/ingenierie" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:underline">🧠 Ingénierie & Étude</Link>
                <Link href="/construction/services/renovation" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:underline">🏗 Rénovation</Link>
              </div>
            )}
          </div>

          <Link href="/construction/projects" onClick={() => setMobileMenuOpen(false)} className="block py-1">📂 Projets</Link>
          <Link href="/construction/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">📞 Contact</Link>
        </div>
      )}
    </header>
  );
}
