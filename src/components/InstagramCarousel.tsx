"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, Instagram } from "lucide-react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  url: string;
}

interface InstagramPostData {
  author_name: string;
  author_url: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  title: string;
  html?: string;
}

interface InstagramCarouselProps {
  posts: InstagramPost[];
}

export default function InstagramCarousel({ posts }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postData, setPostData] = useState<{ [key: string]: InstagramPostData }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Charger les données des posts Instagram via l'API oEmbed
    posts.forEach((post) => {
      if (!postData[post.id] && !loading[post.id]) {
        setLoading((prev) => ({ ...prev, [post.id]: true }));
        
        // Nettoyer l'URL (enlever les paramètres comme ?img_index=1)
        const cleanUrl = post.url.split('?')[0];
        
        // Utiliser l'API oEmbed d'Instagram
        fetch(`https://api.instagram.com/oembed?url=${encodeURIComponent(cleanUrl)}`)
          .then((res) => {
            if (!res.ok) throw new Error("Erreur API Instagram");
            return res.json();
          })
          .then((data: InstagramPostData) => {
            setPostData((prev) => ({
              ...prev,
              [post.id]: data,
            }));
            setLoading((prev) => ({ ...prev, [post.id]: false }));
          })
          .catch((err) => {
            console.error("Erreur lors du chargement du post Instagram:", err);
            setLoading((prev) => ({ ...prev, [post.id]: false }));
          });
      }
    });
  }, [posts, postData, loading]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  if (posts.length === 0) return null;

  const currentPost = posts[currentIndex];
  const data = postData[currentPost.id];

  return (
    <div className="relative w-full">
      {/* Conteneur du carrousel */}
      <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200">
        {/* Post Instagram actuel */}
        <div className="relative w-full">
          {loading[currentPost.id] ? (
            <div className="w-full aspect-square flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Chargement du post Instagram...</p>
            </div>
          ) : data ? (
            <div className="w-full">
              {/* En-tête du post avec logo et nom du compte */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <a
                    href={data.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 hover:text-sky-blue transition-colors"
                  >
                    {data.author_name}
                  </a>
                </div>
              </div>

              {/* Image du post */}
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src={data.thumbnail_url}
                  alt={data.title || "Post Instagram"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Actions (likes, commentaires, partage) */}
              <div className="flex items-center gap-4 p-4 border-b border-gray-200">
                <button className="hover:opacity-70 transition-opacity">
                  <Heart className="w-6 h-6 text-gray-900" />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <MessageCircle className="w-6 h-6 text-gray-900" />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <Share2 className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="text-sm text-gray-900 whitespace-pre-wrap">
                  <a
                    href={data.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-sky-blue transition-colors"
                  >
                    {data.author_name}
                  </a>{" "}
                  {data.title}
                </p>
              </div>

              {/* Lien vers le post original */}
              <div className="px-4 pb-4">
                <a
                  href={currentPost.url.split('?')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-sky-blue transition-colors"
                >
                  Voir sur Instagram →
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-square flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Erreur de chargement</p>
            </div>
          )}
        </div>

        {/* Flèche gauche */}
        {posts.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Post précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Flèche droite */}
        {posts.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Post suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Indicateurs de pagination */}
        {posts.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-sky-blue"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Aller au post ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Script Instagram pour charger les embeds */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

