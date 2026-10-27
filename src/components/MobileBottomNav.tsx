import React, { useState, useEffect } from 'react';
import { Home, Compass, Stethoscope, Camera, CalendarCheck } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      const sections = [
        { id: 'turnos-precios', key: 'turnos' },
        { id: 'galeria', key: 'galeria' },
        { id: 'disciplinas', key: 'disciplinas' },
        { id: 'metodologia', key: 'metodologia' },
      ];

      let current = 'inicio';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          if (scrollPos >= el.offsetTop) {
            current = section.key;
            break;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, key: string) => {
    setActiveTab(key);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      aria-label="Navegación móvil app"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#ebdca8] px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 pb-[calc(0.375rem+env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        
        {/* Tab 1: Inicio */}
        <button
          onClick={() => scrollToSection('top', 'inicio')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeTab === 'inicio' ? 'text-[#e44b3a]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Inicio</span>
          {activeTab === 'inicio' && (
            <span className="w-1 h-1 rounded-full bg-[#e44b3a] -mt-0.5" />
          )}
        </button>

        {/* Tab 2: Metodología */}
        <button
          onClick={() => scrollToSection('metodologia', 'metodologia')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeTab === 'metodologia' ? 'text-[#609c60]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Proceso</span>
          {activeTab === 'metodologia' && (
            <span className="w-1 h-1 rounded-full bg-[#609c60] -mt-0.5" />
          )}
        </button>

        {/* Tab 3: Disciplinas */}
        <button
          onClick={() => scrollToSection('disciplinas', 'disciplinas')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeTab === 'disciplinas' ? 'text-[#3a94c1]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Stethoscope className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Disciplinas</span>
          {activeTab === 'disciplinas' && (
            <span className="w-1 h-1 rounded-full bg-[#3a94c1] -mt-0.5" />
          )}
        </button>

        {/* Tab 4: Galería */}
        <button
          onClick={() => scrollToSection('galeria', 'galeria')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeTab === 'galeria' ? 'text-[#f7cb38]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Camera className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Galería</span>
          {activeTab === 'galeria' && (
            <span className="w-1 h-1 rounded-full bg-[#f7cb38] -mt-0.5" />
          )}
        </button>

        {/* Tab 5: Agendar Turnos (Highlighted App Button) */}
        <button
          onClick={() => {
            scrollToSection('turnos-precios', 'turnos');
            onOpenBooking();
          }}
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-2xl bg-[#e44b3a] text-white shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <CalendarCheck className="w-5 h-5 text-white" />
          <span className="text-[10px] font-bold tracking-tight text-white">Turnos</span>
        </button>

      </div>
    </nav>
  );
};
