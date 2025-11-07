"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  instagramPostUrl?: string;
}

export default function ImageCarousel({ images, instagramPostUrl }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // URL Instagram avec l'index de l'image (img_index commence à 2)
  const getInstagramUrl = (index: number) => {
    if (!instagramPostUrl) return "#";
    const imgIndex = index + 2; // img_index commence à 2
    return `${instagramPostUrl}?img_index=${imgIndex}`;
  };

  // Précharger la première image
  useEffect(() => {
    if (images.length > 0) {
      const img = new window.Image();
      img.src = images[0];
      img.onload = () => setImageLoaded(true);
    }
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full">
      {/* Conteneur du carrousel */}
      <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200">
        {/* Image actuelle */}
        <a
          href={getInstagramUrl(currentIndex)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full bg-gray-100 block cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
          style={{ aspectRatio: '1 / 1', minHeight: '400px' }}
        >
          <Image
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
            priority={currentIndex === 0}
            quality={90}
            onLoad={() => setImageLoaded(true)}
          />
        </a>

        {/* Flèche gauche */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Flèche droite */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Indicateurs de pagination */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-sky-blue"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

