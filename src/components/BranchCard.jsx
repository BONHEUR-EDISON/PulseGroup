
'use client';
import { FaTools, FaBolt, FaMicrochip } from 'react-icons/fa';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const icons = {
  Construction: <FaTools className="text-teal-600 text-3xl sm:text-4xl" />,
  Énergie: <FaBolt className="text-yellow-500 text-3xl sm:text-4xl" />,
  Technologies: <FaMicrochip className="text-indigo-500 text-3xl sm:text-4xl" />,
};

export default function BranchCard({ title, description, href }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <a
      ref={ref}
      href={href}
      className={`group block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all transform
        ${
          isInView
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-95'
        } duration-700 ease-out`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 dark:bg-gray-700">
          {icons[title] || <span className="text-3xl">❓</span>}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </a>
  );
}
