import React from 'react';
import { HEALTH_MODEL_DIMENSIONS } from '../data/therapeuticData';
import { Activity, Sun, HeartHandshake, Smile, Check } from 'lucide-react';

export const HealthConceptSection: React.FC = () => {
  const iconList = [
    <Activity className="w-5 h-5 text-[#3a94c1]" />,
    <Sun className="w-5 h-5 text-[#c99f12]" />,
    <HeartHandshake className="w-5 h-5 text-[#e44b3a]" />,
  ];

  const borderList = ['border-t-[#3a94c1]', 'border-t-[#f7cb38]', 'border-t-[#e44b3a]'];
  const bgIconList = ['bg-[#3a94c1]/10', 'bg-[#f7cb38]/20', 'bg-[#e44b3a]/10'];

  const dailyActivities = [
    'Vestirse solos y abotonarse',
    'Jugar con pares y esperar turnos',
    'Estudiar y comprender consignas',
    'Cocinar recetas simples y amasar',
    'Moverse con seguridad y equilibrio',
    'Comunicar deseos y emociones sin frustración',
    'Participar plenamente en la escuela',
    'Disfrutar momentos en familia y comunidad'
  ];

  return (
    <section id="enfoque" className="py-16 sm:py-20 bg-[#fff6da] border-b border-[#ebdca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#3a94c1] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3a94c1]" />
            <span>Marco Conceptual y Bio-Psico-Social</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
            ¿Qué entendemos por salud?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b473b] leading-relaxed">
            Según la <strong>Organización Mundial de la Salud (OMS)</strong>, la salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#475447] leading-relaxed">
            Este modelo reconoce que la discapacidad no es una condición aislada, sino una <strong>experiencia que depende de la interacción con el entorno y las barreras</strong> que la persona enfrenta en su vida cotidiana.
          </p>
        </div>

        {/* CIF Dimensions - 3 Bento Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {HEALTH_MODEL_DIMENSIONS.map((dim, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border-t-4 ${borderList[idx]} border-x border-b border-[#e8d9a8] shadow-xs hover:shadow-md transition-shadow`}
            >
              <div className={`w-10 h-10 rounded-xl ${bgIconList[idx]} flex items-center justify-center mb-4`}>
                {iconList[idx]}
              </div>
              <h3 className="text-lg font-bold text-[#242e24] mb-2">
                {dim.title}
              </h3>
              <p className="text-sm text-[#445144] leading-relaxed">
                {dim.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-[#f0e4be] text-xs font-bold text-[#609c60]">
                Dimensión CIF (OMS 2001)
              </div>
            </div>
          ))}
        </div>

        {/* "Todo lo cotidiano cuenta" - Interactive Activity Board */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#609c60] shadow-md">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#609c60] mb-2">
              <Smile className="w-4 h-4 text-[#609c60]" />
              <span>Ocupación y Vida Diaria</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#242e24] mb-3">
              ¡Todo lo que hacemos ocupando nuestro tiempo tiene valor terapéutico!
            </h3>
            <p className="text-sm sm:text-base text-[#445144] leading-relaxed mb-6">
              Desde levantarse por la mañana hasta compartir una cena familiar, cada gesto es una oportunidad de aprendizaje, conexión y conquista de autonomía.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {dailyActivities.map((act, index) => (
              <div
                key={index}
                className="bg-[#fff6da] rounded-xl p-3.5 border border-[#ebdca8] flex items-center gap-2.5 shadow-2xs hover:border-[#609c60] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#609c60] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#242e24]">
                  {act}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
