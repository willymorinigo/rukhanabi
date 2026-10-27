import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/therapeuticData';
import { CheckCircle2, ChevronRight, CalendarCheck, FileSearch, Target, Award } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    CalendarCheck,
    FileSearch,
    Target,
    Award
  ];

  const stepColors = [
    { border: 'border-[#609c60]', text: 'text-[#609c60]', bg: 'bg-[#609c60]', lightBg: 'bg-[#609c60]/10', name: 'Verde' },
    { border: 'border-[#3a94c1]', text: 'text-[#3a94c1]', bg: 'bg-[#3a94c1]', lightBg: 'bg-[#3a94c1]/10', name: 'Azul' },
    { border: 'border-[#f7cb38]', text: 'text-[#b88c0a]', bg: 'bg-[#f7cb38]', lightBg: 'bg-[#f7cb38]/15', name: 'Amarillo' },
    { border: 'border-[#e44b3a]', text: 'text-[#e44b3a]', bg: 'bg-[#e44b3a]', lightBg: 'bg-[#e44b3a]/10', name: 'Coral' },
  ];

  const currentTheme = stepColors[activeStep];

  return (
    <section id="metodologia" className="py-12 sm:py-20 bg-[#fff6da] border-b border-[#ebdca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#609c60] mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#609c60]" />
            <span>Metodología Clínica y Humana</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
            ¿Cómo trabajamos en Rukhá Nabí?
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#445144] leading-relaxed">
            Un proceso estructurado, riguroso y afectuoso en cuatro etapas interconectadas, diseñado para brindar certidumbre a las familias y acompañamiento continuo a cada niño y adolescente.
          </p>
        </div>

        {/* Step Selector Tabs for Desktop / Tablets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            const theme = stepColors[idx];
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? `bg-white ${theme.border} border-2 shadow-md ring-2 ring-[#ebdca8]`
                    : 'bg-white/70 hover:bg-white border-[#ebdca8] text-[#445144]'
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className={`text-[11px] sm:text-xs font-bold tracking-wider ${isActive ? theme.text : 'text-stone-400'}`}>
                    PASO {step.number}
                  </span>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? theme.text : 'text-stone-400'}`} />
                </div>
                <div className="font-bold text-sm sm:text-lg text-[#242e24] mb-0.5">
                  {step.title}
                </div>
                <div className="text-[11px] sm:text-xs text-[#556655] line-clamp-1">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#e8d9a8] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className={`px-2.5 py-1 rounded-md ${currentTheme.lightBg} ${currentTheme.text} font-bold`}>
                  Fase {METHODOLOGY_STEPS[activeStep].number}
                </span>
                <span aria-hidden="true" className="text-[#ebdca8]">·</span>
                <span className="text-[#556655] truncate">{METHODOLOGY_STEPS[activeStep].subtitle}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-[#242e24] tracking-tight">
                {METHODOLOGY_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-lg text-[#3b473b] leading-relaxed">
                {METHODOLOGY_STEPS[activeStep].description}
              </p>

              {/* Deliverables / Checklist for this phase */}
              <div className="pt-2 sm:pt-3 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#526352]">
                  Qué se logra en este periodo:
                </p>
                {METHODOLOGY_STEPS[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3b473b]">
                    <CheckCircle2 className="w-4 h-4 text-[#609c60] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mini Card / Quote */}
            <div className="lg:col-span-4 bg-[#fff9e6] border border-[#f3e1a8] rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9b7811]">
                El valor de cada etapa
              </p>
              <p className="text-xs sm:text-sm text-[#3b473b] leading-relaxed italic">
                «En RUKHÁ NABÍ cada paso cuenta, y cada niño es acompañado en su proceso con amor, dedicación y alegría. Respetamos los tiempos, los procesos y buscamos potenciar las habilidades.»
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-[#526352]">
                <span className="font-medium">Paso {activeStep + 1} de 4</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % METHODOLOGY_STEPS.length)}
                  className="inline-flex items-center gap-1 font-bold text-[#e44b3a] hover:text-[#c93c2c] cursor-pointer"
                >
                  <span>Siguiente paso</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
