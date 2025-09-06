'use client';

import { useEffect } from 'react';

export default function DarkModeInit() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark'; // persiste le mode sombre
  }, []);

  return null;
}
