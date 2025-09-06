// src/components/ClientLayoutWrapper.jsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/ui/PageLoader';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayoutOnRoutes = [
    '/construction',
    '/energie',
    '/technologies',
  ];

  const shouldHideLayout = hideLayoutOnRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <main className="flex-1">
        {children}
        {!shouldHideLayout && <PageLoader />}
      </main>

      {!shouldHideLayout && <Footer />}
    </>
  );
}
