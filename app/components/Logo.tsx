'use client';

import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    );
  }

  return (
    <div className="relative h-10 w-auto flex items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={40}
        className={`object-contain transition-all duration-300 ${
          theme === 'dark' 
            ? 'brightness-0 invert group-hover:brightness-0 group-hover:invert-0' 
            : 'brightness-100'
        }`}
        priority
      />
    </div>
  );
}
