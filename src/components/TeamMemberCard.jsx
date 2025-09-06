'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamMemberCard({ name, role, img, linkedIn }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl bg-white dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="relative w-full h-64">
        <Image
          src={img}
          alt={`Photo de ${name}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 text-center">
        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>

        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Profil LinkedIn de ${name}`}
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5H5a2.5 2.5 0 002.5-2.48v-.02A2.5 2.5 0 005 3.5H4.98zM2 8.98v12.02h5v-12H2zm7 0v12.02h5v-6.02c0-3 3-2.89 3 0v6.02h5v-7.98c0-6-6-5.78-8-2.83v-.21H9z" />
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  );
}
