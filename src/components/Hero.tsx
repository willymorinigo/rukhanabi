import React from 'react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-[#1e261f] text-white">
      {/* Background Video taking 100% width and height */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay for high contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 sm:to-black/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b231c]/90 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Foreground Hero Content over gradient */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15] text-balance drop-shadow-md">
            Donde las infancias son{' '}
            <span className="text-[#f7cb38] underline decoration-[#e44b3a] decoration-wavy decoration-3">
              protagonistas
            </span>{' '}
            de su propio desarrollo.
          </h1>

          {/* P Paragraph */}
          <p className="text-base sm:text-xl text-stone-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            RUKHÁ NABÍ es un espacio pensado con el corazón. Un lugar de crecimiento, expresión y acompañamiento, creado para que cada niño y niña pueda desplegar su potencial en un entorno amoroso, cálido y respetuoso.
          </p>

          {/* Action Button */}
          <div className="pt-3 sm:pt-5">
            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#e44b3a] hover:bg-[#c93c2c] active:bg-[#b03022] rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Agendar Sesión y Consultas</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
