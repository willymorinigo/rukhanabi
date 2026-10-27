import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/therapeuticData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/549${CLINIC_INFO.phone}?text=${encodeURIComponent(
    'Hola Rukhá Nabí! Quiero consulta'
  )}`;

  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-18 lg:bottom-5 right-4 sm:right-5 z-40 flex flex-col items-end gap-2">
      {/* Small Dismissible Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#fff6da] text-[#242e24] text-xs py-2 px-3.5 rounded-2xl shadow-lg border border-[#ebdca8]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#609c60] shrink-0" />
          <span className="font-bold">¿Turnos o consultas rápidas? Escribinos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#609c60] hover:text-[#242e24] p-0.5 rounded cursor-pointer ml-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#609c60] hover:bg-[#4e844e] active:bg-[#407040] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contactar por WhatsApp para turnos rápidos"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Active Ping */}
        <span className="absolute top-0 right-0 -mt-0.5 -mr-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7cb38] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#f7cb38] border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};
