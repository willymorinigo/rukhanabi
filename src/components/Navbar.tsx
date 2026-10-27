import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, formatWhatsAppUrl } from '../data/therapeuticData';
import { MessageCircle, Menu, X } from 'lucide-react';
import logo from '@/assets/logos/logo.svg';

interface NavbarProps {
  onOpenBooking: () => void;
}

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks: NavLinkItem[] = [
    { id: 'metodologia', label: 'CÓMO TRABAJAMOS', href: '#metodologia' },
    { id: 'disciplinas', label: 'DISCIPLINAS Y TALLERES', href: '#disciplinas' },
    { id: 'enfoque', label: 'SALUD Y ENFOQUE', href: '#enfoque' },
    { id: 'galeria', label: 'GALERÍA', href: '#galeria' },
    { id: 'ubicacion', label: 'UBICACIÓN', href: '#ubicacion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Shrink header on scroll
      setIsScrolled(window.scrollY > 25);

      // Section spy to highlight active section button
      const scrollPosition = window.scrollY + 140; // account for sticky header offset
      const sectionIds = navLinks.map((link) => link.id);

      let current = '';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-stone-200 transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-2.5 sm:py-3 shadow-md' : 'py-4 sm:py-5 lg:py-6 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 transition-all duration-300">
          
          {/* Zone 1: Official Brand Logo - White background header, large & shrinks on scroll */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 transition-transform duration-300"
            aria-label="Rukha Nabi - Inicio"
          >
            <img
              src={logo}
              alt="Rukha Nabi - Acompañando procesos desde la profesión y el amor"
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'h-10 sm:h-12'
                  : 'h-14 sm:h-16 lg:h-20'
              }`}
            />
          </a>

          {/* Zone 2: Navigation Links in UPPERCASE with dynamic section active state */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-bold tracking-wider text-[#2f392f]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 transition-all duration-200 whitespace-nowrap shrink-0 border-b-2 ${
                    isActive
                      ? 'text-[#e44b3a] border-[#e44b3a]'
                      : 'text-[#2f392f] hover:text-[#e44b3a] border-transparent hover:border-[#e44b3a]/40'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e44b3a]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white bg-[#e44b3a] hover:bg-[#c93c2c] active:bg-[#b03022] rounded-xl shadow-xs transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${
                isScrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-xs sm:text-sm'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>TURNOS Y SESIONES</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#2f392f] hover:text-[#e44b3a] hover:bg-stone-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors border-l-4 ${
                    isActive
                      ? 'bg-[#fff6da] text-[#e44b3a] border-[#e44b3a]'
                      : 'text-[#2f392f] hover:text-[#e44b3a] hover:bg-stone-50 border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#e44b3a] hover:bg-[#c93c2c] active:bg-[#b03022] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>AGENDAR SESIÓN / CONSULTAS</span>
            </button>
            <a
              href={formatWhatsAppUrl('¡Hola equipo de Rukhá Nabí! \u{1F44B} Quisiera solicitar información sobre turnos y consultas para el espacio. Muchas gracias!')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1f4e1f] bg-[#eef7ee] border border-[#a8d3a8] rounded-xl hover:bg-[#dff0df] transition-colors"
            >
              <span>WHATSAPP DIRECTO ({CLINIC_INFO.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
