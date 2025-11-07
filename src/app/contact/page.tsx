"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Contact() {
  // Images numérotées pour le carrousel
  const carouselImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Logo en arrière-plan transparent */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.06] sm:opacity-[0.08] z-0 pb-8 sm:pb-12 lg:pb-16">
          <Image
            src="/logos/logo-crig.png"
            alt="CRIG Logo Background"
            width={900}
            height={900}
            className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] object-contain"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 sm:mb-16 text-center">
            Contact
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Colonne gauche : Informations de contact */}
            <div className="space-y-8">
              {/* Email */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-blue flex items-center justify-center">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                      Email
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      Contactez-nous par email pour toute question ou demande d&apos;information.
                    </p>
                    <a
                      href="mailto:crig.up13@gmail.com"
                      className="inline-flex items-center gap-2 text-sky-blue hover:text-[#0077C7] font-medium text-sm sm:text-base transition-colors"
                    >
                      crig.up13@gmail.com
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                      WhatsApp
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      Rejoignez notre groupe WhatsApp pour échanger avec les membres et être informé des activités.
                    </p>
                    <a
                      href="https://chat.whatsapp.com/FebffGigTjaD7AWqNx3oOi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm sm:text-base transition-colors"
                    >
                      Rejoindre le groupe
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                      <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                      Instagram
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      Suivez-nous sur Instagram pour découvrir nos projets et nos activités en temps réel.
                    </p>
                    <a
                      href="https://instagram.com/le.crig"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm sm:text-base transition-colors"
                    >
                      @le.crig
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : Carrousel Instagram */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Nos derniers posts
                </h2>
                <ImageCarousel 
                  images={carouselImages} 
                  instagramPostUrl="https://www.instagram.com/p/DKfkmNiist3/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

