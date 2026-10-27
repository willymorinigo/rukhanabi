import React, { useState } from 'react';
import { DISCIPLINES, WORKSHOPS } from '../data/therapeuticData';
import { Discipline, Workshop } from '../types';
import { ArrowRight, CheckCircle2, Info, Sun, X, HeartHandshake, Palette, HeartPulse } from 'lucide-react';

interface DisciplinesSectionProps {
  onSelectActivity: (activityName: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectActivity }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'disciplinas' | 'talleres'>('all');
  const [selectedDisciplineDetail, setSelectedDisciplineDetail] = useState<Discipline | null>(null);
  const [selectedWorkshopDetail, setSelectedWorkshopDetail] = useState<Workshop | null>(null);

  return (
    <section id="disciplinas" className="py-12 sm:py-20 bg-[#fff6da] border-y border-[#ebdca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-bold text-[#e44b3a] mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e44b3a]" />
            <span>Especialidades Médicas, Terapias y Talleres</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
            Disciplinas y Talleres en Rukhá Nabí
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#445144] leading-relaxed">
            Contamos con un equipo interdisciplinario de docentes y profesionales de la salud certificados para acompañar a niños, jóvenes y familias.
          </p>

          {/* Filter Tabs - Horizontal scrollable on mobile */}
          <div className="mt-4 sm:mt-6 flex items-center gap-1.5 p-1 bg-[#f5e7c1] rounded-2xl w-full sm:w-fit border border-[#ebdca8] overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-white text-[#242e24] shadow-xs'
                  : 'text-[#445144] hover:text-[#242e24]'
              }`}
            >
              Ver Todo ({DISCIPLINES.length + WORKSHOPS.length})
            </button>
            <button
              onClick={() => setActiveTab('disciplinas')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === 'disciplinas'
                  ? 'bg-[#3a94c1] text-white shadow-xs'
                  : 'text-[#445144] hover:text-[#242e24]'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Disciplinas ({DISCIPLINES.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('talleres')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === 'talleres'
                  ? 'bg-[#609c60] text-white shadow-xs'
                  : 'text-[#445144] hover:text-[#242e24]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Talleres ({WORKSHOPS.length})</span>
            </button>
          </div>
        </div>

        {/* 1. DISCIPLINAS SECTION */}
        {(activeTab === 'all' || activeTab === 'disciplinas') && (
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-[#ebdca8]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#3a94c1]/15 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-4 h-4 text-[#3a94c1]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#242e24]">
                  Disciplinas Clínicas, Médicas y Evaluaciones
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs text-[#526352] font-semibold">
                10 especialidades
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {DISCIPLINES.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#e8d9a8] hover:border-[#3a94c1] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Unboxed category info */}
                    <div className="flex items-center justify-between gap-2 text-xs text-[#526352] mb-1.5 font-medium">
                      <span className={`font-bold ${
                        item.category === 'medica' ? 'text-[#e44b3a]' : item.category === 'evaluacion' ? 'text-[#3a94c1]' : 'text-[#609c60]'
                      }`}>
                        {item.category === 'medica'
                          ? 'Especialidad Médica'
                          : item.category === 'evaluacion'
                          ? 'Evaluación Diagnóstica'
                          : 'Terapia Integral'}
                      </span>
                      <span aria-hidden="true" className="text-[#ebdca8]">·</span>
                      <span>{item.ageRange}</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-[#242e24] tracking-tight mb-2 group-hover:text-[#3a94c1] transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#445144] leading-relaxed mb-3">
                      {item.shortDesc}
                    </p>

                    {/* Daily application with warm background */}
                    <div className="bg-[#fff9e6] border border-[#f3e1a8] rounded-xl p-3 mb-3">
                      <p className="text-[11px] font-bold text-[#9b7811] mb-0.5 flex items-center gap-1.5">
                        <Sun className="w-3.5 h-3.5 text-[#c99f12]" />
                        Impacto cotidiano:
                      </p>
                      <p className="text-xs text-[#3b473b] italic">
                        «{item.dailyLifeApplication}»
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1 mb-4">
                      {item.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-[#445144]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#609c60] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#f0e4be] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedDisciplineDetail(item)}
                      className="text-xs font-semibold text-[#445144] hover:text-[#242e24] flex items-center gap-1 py-1.5 px-2 rounded-lg hover:bg-[#fff6da] transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Detalles</span>
                    </button>

                    <button
                      onClick={() => onSelectActivity(item.name)}
                      className="text-xs font-bold text-white bg-[#3a94c1] hover:bg-[#2e7da6] active:bg-[#25688c] py-2 px-3.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-2xs"
                    >
                      <span>Agendar / Consultas</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TALLERES SECTION */}
        {(activeTab === 'all' || activeTab === 'talleres') && (
          <div>
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-[#ebdca8]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#609c60]/15 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4 text-[#609c60]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#242e24]">
                  Nuestros Talleres Lúdicos, Expresivos y de Vida Cotidiana
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs text-[#526352] font-semibold">
                13 talleres
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {WORKSHOPS.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e8d9a8] hover:border-[#609c60] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#609c60] mb-1.5">
                      <span>{workshop.focus}</span>
                      <span className="text-[#ebdca8]">·</span>
                      <span className="text-[#556655] font-medium">{workshop.targetGroup}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#242e24] tracking-tight mb-2">
                      {workshop.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#445144] leading-relaxed mb-3">
                      {workshop.shortDesc}
                    </p>

                    <div className="space-y-1 mb-4">
                      {workshop.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#445144]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#609c60] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#f0e4be] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedWorkshopDetail(workshop)}
                      className="text-xs font-semibold text-[#445144] hover:text-[#242e24] flex items-center gap-1 cursor-pointer py-1.5 px-2 rounded-lg hover:bg-[#fff6da]"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Info</span>
                    </button>
                    <button
                      onClick={() => onSelectActivity(`Taller de ${workshop.name}`)}
                      className="text-xs font-bold text-white bg-[#609c60] hover:bg-[#4e844e] active:bg-[#407040] py-2 px-3.5 rounded-xl transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
                    >
                      <span>Inscribirme / Consultar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-[#f7cb38] shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#fff6da] border border-[#f7cb38] text-[#c99f12] flex items-center justify-center shrink-0 mt-0.5">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#e44b3a]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#242e24]">
                ¿Querés combinar terapias individuales con talleres grupales?
              </h4>
              <p className="text-xs sm:text-sm text-[#445144] max-w-xl mt-1">
                Diseñamos esquemas integrados donde la sesión terapéutica se complementa con talleres de habilidades sociales, huerta o cocina para maximizar la autonomía.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectActivity('Esquema combinado de Terapia + Taller')}
            className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#e44b3a] hover:bg-[#c93c2c] rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-xs text-center"
          >
            Consultar Esquema Integrado
          </button>
        </div>

      </div>

      {/* Discipline Detail Modal */}
      {selectedDisciplineDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#fff6da] rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 border-2 border-[#3a94c1] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDisciplineDetail(null)}
              className="absolute top-3 right-3 text-[#445144] hover:text-[#242e24] p-1.5 rounded-xl hover:bg-[#f3e3b5]"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-[#3a94c1] uppercase tracking-wider mb-1">
              {selectedDisciplineDetail.category === 'medica' ? 'Especialidad Médica' : 'Terapia'} · Edades: {selectedDisciplineDetail.ageRange}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#242e24] mb-3">
              {selectedDisciplineDetail.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#3b473b] leading-relaxed mb-4">
              {selectedDisciplineDetail.fullDesc}
            </p>

            <div className="bg-white rounded-2xl p-3.5 border border-[#e8d9a8] mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e44b3a] mb-1">
                Aplicación en el día a día
              </h4>
              <p className="text-xs sm:text-sm text-[#3b473b] italic">
                {selectedDisciplineDetail.dailyLifeApplication}
              </p>
            </div>

            <div className="space-y-1.5 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#526352]">
                Beneficios terapéuticos principales
              </h4>
              {selectedDisciplineDetail.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#3b473b]">
                  <CheckCircle2 className="w-4 h-4 text-[#609c60] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-[#ebdca8]">
              <button
                onClick={() => {
                  const name = selectedDisciplineDetail.name;
                  setSelectedDisciplineDetail(null);
                  onSelectActivity(name);
                }}
                className="flex-1 py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white bg-[#3a94c1] hover:bg-[#2e7da6] rounded-xl transition-colors cursor-pointer text-center"
              >
                Consultar turnos y cobertura
              </button>
              <button
                onClick={() => setSelectedDisciplineDetail(null)}
                className="py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-[#445144] hover:bg-[#f3e3b5] rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Workshop Detail Modal */}
      {selectedWorkshopDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#fff6da] rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 border-2 border-[#609c60] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedWorkshopDetail(null)}
              className="absolute top-3 right-3 text-[#445144] hover:text-[#242e24] p-1.5 rounded-xl hover:bg-[#f3e3b5]"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-[#609c60] uppercase tracking-wider mb-1">
              Taller Lúdico Grupal · {selectedWorkshopDetail.focus}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#242e24] mb-1">
              Taller de {selectedWorkshopDetail.name}
            </h3>
            <p className="text-xs text-[#526352] mb-3 font-semibold">
              Destinado a: {selectedWorkshopDetail.targetGroup}
            </p>

            <p className="text-xs sm:text-sm text-[#3b473b] leading-relaxed mb-4">
              {selectedWorkshopDetail.shortDesc}
            </p>

            <div className="space-y-1.5 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#526352]">
                Logros y propósitos del taller
              </h4>
              {selectedWorkshopDetail.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#3b473b]">
                  <CheckCircle2 className="w-4 h-4 text-[#609c60] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-[#ebdca8]">
              <button
                onClick={() => {
                  const name = `Taller de ${selectedWorkshopDetail.name}`;
                  setSelectedWorkshopDetail(null);
                  onSelectActivity(name);
                }}
                className="flex-1 py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white bg-[#609c60] hover:bg-[#4e844e] rounded-xl transition-colors cursor-pointer text-center"
              >
                Inscribirme al taller
              </button>
              <button
                onClick={() => setSelectedWorkshopDetail(null)}
                className="py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-[#445144] hover:bg-[#f3e3b5] rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
