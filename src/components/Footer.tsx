import React from 'react';
import { CLINIC_INFO } from '../data/therapeuticData';
import { Heart, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logos/logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e261f] text-[#d6e2d6] py-12 sm:py-16 border-t border-[#334234]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Vision */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl w-fit shadow-xs border border-[#ebdca8]">
              <img
                src={logo}
                alt="Rukha Nabi"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#f7cb38] tracking-wide">
              Centro de Atención Integral de Neurodesarrollo Infantojuvenil
            </p>
            <p className="text-xs sm:text-sm text-[#a8bda8] leading-relaxed">
              Un espacio pensado con el corazón, donde las infancias son protagonistas de su propio desarrollo. Acompañamos cada recorrido con amor, dedicación y alegría en <strong>Calle 9 número 2094, Villa Elisa, Buenos Aires</strong>.
            </p>
            <div className="pt-2 text-xs text-[#f7cb38] font-bold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#e44b3a] text-[#e44b3a]" />
              <span>«Acompañando procesos desde la profesión y el amor»</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f7cb38] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a8bda8]">
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Cómo Trabajamos (4 Etapas)
                </a>
              </li>
              <li>
                <a href="#disciplinas" className="hover:text-white transition-colors">
                  Disciplinas y Talleres
                </a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-white transition-colors">
                  Salud OMS y Modelo CIF
                </a>
              </li>
              <li>
                <a href="#admisiones-2028" className="hover:text-white transition-colors">
                  Admisiones y Obras Sociales 2028
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Testimonios de Familias
                </a>
              </li>
              <li>
                <a href="#turnos-precios" className="hover:text-white transition-colors">
                  Turnos y Sesiones
                </a>
              </li>
            </ul>
          </div>

          {/* Sede & Turnos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3a94c1] mb-4">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#a8bda8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e44b3a] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">{CLINIC_INFO.addressStreet}</p>
                  <p>{CLINIC_INFO.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#609c60] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">Turnos: {CLINIC_INFO.phoneDisplay}</p>
                  <p className="text-[11px] text-[#8ea68e]">{CLINIC_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#334234]">
              <p className="text-xs text-[#a8bda8] font-bold mb-2">Redes Oficiales:</p>
              <div className="flex items-center gap-3">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#2a362b] hover:bg-[#e44b3a] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram de Rukha Nabi"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#2a362b] hover:bg-[#3a94c1] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook de Rukha Nabi"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Marco Legal & Discapacidad */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#609c60] mb-4">
              Marco Prestacional
            </h4>
            <div className="bg-[#242f25] rounded-2xl p-4 border border-[#344336] space-y-2 text-xs text-[#a8bda8]">
              <p className="font-bold text-white">
                Obras Sociales y Particulares
              </p>
              <p className="leading-relaxed">
                Prestaciones enmarcadas en la Ley Nacional de Discapacidad N° 24.901 (Sistema de Prestaciones Básicas).
              </p>
              <p className="text-[#8ea68e] pt-1 text-[11px]">
                Equipos con matriculación profesional vigente y habilitación ministerial.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#334234] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8ea68e]">
          <p>© {new Date().getFullYear()} RUKHÁ NABÍ - Centro Terapéutico. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>{CLINIC_INFO.addressStreet}, Villa Elisa</span>
            <span aria-hidden="true" className="text-[#556b55]">·</span>
            <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
