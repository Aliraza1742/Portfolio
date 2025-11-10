'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Try different image formats in order
  const imageFormats = ['/profile.jpg', '/profile.jpeg', '/profile.png', '/profile.webp'];

  const handleImageError = () => {
    if (currentImageIndex < imageFormats.length - 1) {
      // Try next image format
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // All formats failed
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold ${className}`}>
        Your Initials
      </div>
    );
  }

  return (
    <Image
      src={imageFormats[currentImageIndex]}
      alt="Profile"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 0vw, 320px"
      onError={handleImageError}
    />
  );
}

