/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodologySection } from './components/MethodologySection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { HealthConceptSection } from './components/HealthConceptSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingPricingForm } from './components/BookingPricingForm';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [selectedActivityForForm, setSelectedActivityForForm] = useState<string | null>(null);

  const scrollToForm = (activityName?: string) => {
    if (activityName) {
      setSelectedActivityForForm(activityName);
    }
    const formElement = document.getElementById('turnos-precios');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff6da] text-[#273129] flex flex-col selection:bg-[#f7cb38] selection:text-[#273129] pb-14 lg:pb-0">
      {/* Top Navigation Bar with dynamic scroll shrink and white background */}
      <Navbar onOpenBooking={() => scrollToForm()} />

      <main className="flex-1">
        {/* Hero Section with hero.mp4 video */}
        <Hero onScrollToForm={() => scrollToForm()} />

        {/* Metodología en 4 Etapas ("Cómo Trabajamos") */}
        <MethodologySection />

        {/* Disciplinas Terapéuticas, Médicas y Talleres Lúdicos */}
        <DisciplinesSection onSelectActivity={(name) => scrollToForm(name)} />

        {/* Enfoque de Salud OMS y Modelo CIF 2001 */}
        <HealthConceptSection />

        {/* Formulario con disciplinas y talleres pre-cargados para coordinar consultas y sesiones */}
        <BookingPricingForm
          selectedActivityName={selectedActivityForForm}
          onClearSelectedActivity={() => setSelectedActivityForForm(null)}
        />

        {/* Galería de Fotos (Galería) */}
        <GallerySection />

        {/* Testimonios de Familias y Pacientes */}
        <TestimonialsSection />

        {/* Mapa Interactivo de Villa Elisa, Redes Sociales y Contacto */}
        <LocationMapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Mobile Bottom App Navigation Bar */}
      <MobileBottomNav onOpenBooking={() => scrollToForm()} />
    </div>
  );
}
