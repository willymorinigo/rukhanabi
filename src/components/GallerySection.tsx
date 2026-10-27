import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2, X } from 'lucide-react';
import foto0 from '@/assets/images/general/foto0.png';
import foto1 from '@/assets/images/general/foto1.png';
import foto2 from '@/assets/images/general/foto2.png';
import foto3 from '@/assets/images/general/foto3.png';
import foto4 from '@/assets/images/general/foto4.png';
import foto5 from '@/assets/images/general/foto5.png';
import foto6 from '@/assets/images/general/foto6.png';

export const GallerySection: React.FC = () => {
  // 7 uploaded real clinic photos imported from src/assets/images/general/
  const galleryImages = [foto0, foto1, foto2, foto3, foto4, foto5, foto6];

  // Common text for all photos as requested
  const commonTitle = 'RUKHÁ NABÍ · Espacio Terapéutico';
  const commonDescription =
    'Salas y espacios preparados con amor para el juego, la calma y el movimiento.';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel loop (infinite)
  useEffect(() => {
    if (!isPaused && !isLightboxOpen) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isLightboxOpen, galleryImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section id="galeria" className="py-12 sm:py-20 bg-[#fff6da] border-b border-[#ebdca8] relative">
      <div id="instalaciones" className="-top-24 absolute pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-bold text-[#609c60] mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#609c60]" />
              <span>Nuestra Galería en Villa Elisa</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
              Galería
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#445144] leading-relaxed">
              Recorrido visual por nuestras salas y espacios terapéuticos en Villa Elisa.
            </p>
          </div>

          {/* Pause / Play State Indicator button */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePause}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer shadow-2xs ${
                isPaused
                  ? 'bg-[#e44b3a] text-white border-[#e44b3a]'
                  : 'bg-white text-[#242e24] border-[#ebdca8] hover:bg-[#fffdf8]'
              }`}
              title={isPaused ? 'Reanudar carrusel automático' : 'Pausar carrusel'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-white" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? 'Pausado' : 'Auto-reproducción'}</span>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#e8d9a8] bg-white shadow-lg">
          
          {/* Main Slide Clickable to Toggle Pause */}
          <div
            onClick={togglePause}
            className="relative w-full aspect-4/3 sm:aspect-16/9 lg:aspect-21/9 max-h-[560px] bg-[#1a211a] cursor-pointer group select-none overflow-hidden"
          >
            <img
              src={galleryImages[currentIndex]}
              alt={`Galería Rukhá Nabí foto ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim for readable caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a211a]/90 via-[#1a211a]/30 to-transparent pointer-events-none" />

            {/* Top Bar Status inside Slide */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between text-white pointer-events-none">
              <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                {currentIndex + 1} / {galleryImages.length}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="pointer-events-auto w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/60 hover:bg-[#3a94c1] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Ver en pantalla completa"
                title="Ver en pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Fixed Common Caption for ALL photos */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none max-w-3xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#f7cb38]" />
                <h3 className="text-sm sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                  {commonTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed drop-shadow-sm font-medium line-clamp-2 sm:line-clamp-none">
                {commonDescription}
              </p>
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white text-[#242e24] hover:text-[#e44b3a] flex items-center justify-center shadow-lg transition-all cursor-pointer border border-[#ebdca8]"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white text-[#242e24] hover:text-[#e44b3a] flex items-center justify-center shadow-lg transition-all cursor-pointer border border-[#ebdca8]"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Thumbnail Dots */}
          <div className="p-3 sm:p-4 bg-white border-t border-[#ebdca8] flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-lg sm:rounded-xl overflow-hidden transition-all cursor-pointer shrink-0 ${
                  currentIndex === idx
                    ? 'w-12 sm:w-16 h-9 sm:h-10 border-2 border-[#e44b3a] shadow-xs scale-105'
                    : 'w-9 sm:w-12 h-7 sm:h-8 border border-[#ebdca8] opacity-60 hover:opacity-100'
                }`}
                aria-label={`Ir a foto ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Carousel instructions hint */}
        <p className="mt-2.5 text-xs text-[#526352] text-center italic">
          Toca cualquier foto para pausar o reanudar el recorrido automático.
        </p>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1a211a] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#e44b3a] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Arrows in Lightbox */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#3a94c1] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#3a94c1] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-4/3 sm:aspect-16/10 max-h-[70vh] w-full bg-black flex items-center justify-center">
              <img
                src={galleryImages[currentIndex]}
                alt={`Galería ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Common Text in Lightbox */}
            <div className="p-4 sm:p-6 bg-[#151c15] text-white border-t border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7cb38]" />
                <h4 className="text-base sm:text-xl font-bold text-white">
                  {commonTitle} ({currentIndex + 1} de {galleryImages.length})
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {commonDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
