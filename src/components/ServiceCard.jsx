'use client';

import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, text, icon, link }) {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white dark:bg-black rounded-xl shadow-md hover:shadow-lg transition-all 
      duration-300 p-6 flex flex-col items-start hover:scale-[1.02] 
      border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white"
    >
      {icon && (
        <div className="mb-4 text-4xl text-green-500 dark:text-green-400">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        {text}
      </p>
      {link && (
        <a
          href={link}
          className="mt-auto inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          En savoir plus →
        </a>
      )}
    </motion.div>
  );
}
