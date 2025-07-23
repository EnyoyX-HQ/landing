"use client";

import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackContent: React.ReactNode;
}

export const ImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  fallbackContent 
}: ImageWithFallbackProps): JSX.Element => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <>{fallbackContent}</>;
  }

  return (
    <img
      className={className}
      alt={alt}
      src={src}
      onError={() => setImageError(true)}
    />
  );
};