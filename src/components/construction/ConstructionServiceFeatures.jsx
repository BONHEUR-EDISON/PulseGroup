'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDraftingCompass, FaTools, FaHardHat } from 'react-icons/fa';

// 👁️ Hook Intersection Observer avec options
function useInView({
  threshold = 0.3,
  root = null,
  rootMargin = '0px',
  triggerOnce = true,
  disabled = false,
  forceInView = false,
} = {}) {
  const [inView, setInView] = useState(forceInView);
  const ref = useRef(null);

  useEffect(() => {
    if (disabled || forceInView) return;

    if (!ref.current || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) observer.unobserve(ref.current);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, disabled, forceInView]);

  return { ref, inView };
}

// 💎 Composant principal
export default function ServiceFeatures() {
  const services = [
    {
      title: 'Architecture & Design',
      description: 'Conception créative et durable, mêlant innovation et respect de l’environnement pour des espaces uniques.',
      icon: <FaDraftingCompass className="w-10 h-10 text-teal-600" />,
      href: '/construction/services/architecture',
    },
    {
      title: 'Ingénierie & Étude',
      description: 'Analyse technique approfondie, planification avancée et gestion de projets pour garantir fiabilité et qualité.',
      icon: <FaTools className="w-10 h-10 text-teal-600" />,
      href: '/construction/services/ingenierie',
    },
    {
      title: 'Construction & Rénovation',
      description: 'Exécution précise et efficace, rénovation experte avec des matériaux durables et des standards élevés.',
      icon: <FaHardHat className="w-10 h-10 text-teal-600" />,
      href: '/construction/services/renovation',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100">
          Nos Services d’Excellence
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-14 max-w-3xl mx-auto">
          Des solutions sur mesure, alliant expertise technique et créativité pour bâtir l’avenir durable.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ title, description, icon, href }, i) => {
            const { ref, inView } = useInView();

            return (
              <motion.a
                key={title}
                ref={ref}
                href={href}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                className="group block p-8 bg-white dark:bg-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 ease-in-out"
                aria-label={`En savoir plus sur ${title}`}
              >
                <div className="mb-6 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 w-16 h-16 mx-auto transition group-hover:bg-teal-200 dark:group-hover:bg-teal-700">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 dark:text-white transition group-hover:text-teal-600">
                  {title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="text-center">
                  <button
                    type="button"
                    className="inline-block px-6 py-2 border border-teal-600 text-teal-600 rounded-full text-sm font-medium hover:bg-teal-600 hover:text-white transition"
                  >
                    En savoir plus
                  </button>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
