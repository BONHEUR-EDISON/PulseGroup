'use client';

import { useInView } from '@/hooks/useInView';

export default function ProjectCard({ title, description, image, href }) {
  const [ref, isInView] = useInView();

  return (
    <a
      ref={ref}
      href={href}
      className={`group block bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
        hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500`}
      aria-label={`Voir le projet : ${title}`}
    >
      <div className="relative h-52 sm:h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
}
