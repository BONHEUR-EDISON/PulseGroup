// src/app/layout.jsx

import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import DarkModeInit from '@/components/DarkModeInit';

export const metadata = {
  title: 'Pulse Group',
  description: 'Pulse Group — Énergy, Technologies, Construction. Build your dreams.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ClientLayoutWrapper>
          <DarkModeInit />
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
