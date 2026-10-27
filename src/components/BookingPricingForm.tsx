import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, DISCIPLINES, WORKSHOPS, QUICK_MESSAGES } from '../data/therapeuticData';
import { MessageSquare, Send, CheckCircle2, Copy, AlertCircle, MapPin, HeartPulse, Palette } from 'lucide-react';

interface BookingPricingFormProps {
  selectedActivityName?: string | null;
  onClearSelectedActivity?: () => void;
}

export const BookingPricingForm: React.FC<BookingPricingFormProps> = ({
  selectedActivityName,
  onClearSelectedActivity,
}) => {
  // Form State
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [coverageType, setCoverageType] = useState<'obra-social' | 'particular' | 'ambas'>('obra-social');
  const [healthProvider, setHealthProvider] = useState('');
  const [hasCud, setHasCud] = useState<'si' | 'no' | 'en-tramite'>('si');
  const [preferredShift, setPreferredShift] = useState<'manana' | 'tarde' | 'indistinto'>('tarde');
  const [customMessage, setCustomMessage] = useState('');
  const [activeQuickMessageId, setActiveQuickMessageId] = useState<string>('admision');
  const [activityCategoryFilter, setActivityCategoryFilter] = useState<'all' | 'disciplinas' | 'talleres'>('all');
  const [submittedWeb, setSubmittedWeb] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync selected activity passed from props
  useEffect(() => {
    if (selectedActivityName) {
      if (!selectedActivities.includes(selectedActivityName)) {
        setSelectedActivities((prev) => [...prev, selectedActivityName]);
      }
    }
  }, [selectedActivityName]);

  const toggleActivity = (name: string) => {
    if (selectedActivities.includes(name)) {
      setSelectedActivities(selectedActivities.filter((item) => item !== name));
    } else {
      setSelectedActivities([...selectedActivities, name]);
    }
  };

  const handleSelectQuickMessage = (qmId: string) => {
    setActiveQuickMessageId(qmId);
    const found = QUICK_MESSAGES.find((m) => m.id === qmId);
    if (found) {
      setCustomMessage(found.text);
    }
  };

  // Compile formatted WhatsApp message
  const buildWhatsAppText = (): string => {
    const activitiesStr = selectedActivities.length > 0
      ? selectedActivities.join(', ')
      : 'Por definir en entrevista inicial';

    const lines = [
      `👋 *CONSULTA DE TURNOS Y SESIONES - RUKHÁ NABÍ*`,
      `📍 *Sede:* ${CLINIC_INFO.location}`,
      parentName ? `👤 *Adulto responsable:* ${parentName}` : '',
      childName ? `👶 *Niño/a o joven:* ${childName} (${childAge || 'edad no especificada'})` : '',
      phone ? `📞 *Teléfono de contacto:* ${phone}` : '',
      `🎯 *Disciplinas / Talleres de interés:* ${activitiesStr}`,
      `💳 *Modalidad de atención:* ${
        coverageType === 'obra-social'
          ? `Obra Social / Prepaga (${healthProvider || 'A detallar'} · CUD: ${hasCud})`
          : coverageType === 'particular'
          ? 'Atención Particular / Sesiones privadas'
          : 'Consulta mixta (Obra Social / Particular)'
      }`,
      `⏰ *Franja horaria preferida:* ${
        preferredShift === 'manana' ? 'Turno Mañana' : preferredShift === 'tarde' ? 'Turno Tarde' : 'Indistinto / A coordinar'
      }`,
      customMessage ? `\n💬 *Mensaje / Motivo de consulta:*\n${customMessage}` : ''
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppText();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/549${CLINIC_INFO.phone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedWeb(true);
  };

  const handleCopySummary = () => {
    const summary = buildWhatsAppText();
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleResetForm = () => {
    setSubmittedWeb(false);
    setSelectedActivities([]);
    setParentName('');
    setChildName('');
    setChildAge('');
    setPhone('');
    setHealthProvider('');
    setCustomMessage('');
    if (onClearSelectedActivity) onClearSelectedActivity();
  };

  return (
    <section id="turnos-precios" className="py-12 sm:py-20 bg-[#fff6da] border-b border-[#ebdca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#e44b3a] mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e44b3a]" />
            <span>Turnos Rápidos y Sesiones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
            Agendá tu sesión y coordiná tu consulta
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#445144] leading-relaxed">
            Elegí las disciplinas y talleres precargados, seleccioná un mensaje prearmado o escribí tu consulta personalizada. Te esperamos en <strong>{CLINIC_INFO.location}</strong> o podés comunicarte directamente a nuestro WhatsApp oficial <strong>{CLINIC_INFO.phoneDisplay}</strong> para coordinar turnos y sesiones.
          </p>
        </div>

        {submittedWeb ? (
          /* Web Submission Success Card */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border-2 border-[#609c60] shadow-md text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#eef7ee] text-[#609c60] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#242e24] mb-2">
              ¡Consulta recibida con éxito!
            </h3>
            <p className="text-[#445144] mb-5 text-sm sm:text-base leading-relaxed">
              Muchas gracias {parentName || 'por comunicarte'}. El equipo de admisiones de RUKHÁ NABÍ revisará tu solicitud para {childName ? `${childName}` : 'las actividades elegidas'} y te contactaremos a la brevedad al teléfono <strong>{phone || 'indicado'}</strong> para coordinar las sesiones.
            </p>

            <div className="bg-[#fff6da] border border-[#ebdca8] rounded-2xl p-4 sm:p-5 text-left mb-6 text-xs sm:text-sm text-[#3b473b] space-y-1.5 font-mono">
              <div className="font-bold text-[#242e24] font-sans mb-1 text-xs uppercase tracking-wider">
                Resumen de la consulta:
              </div>
              <p>📍 Centro: Rukhá Nabí · {CLINIC_INFO.location}</p>
              <p>👶 Paciente: {childName || 'A coordinar'} ({childAge || 'Edad a confirmar'})</p>
              <p>🩺 Modalidad: {coverageType === 'obra-social' ? `Obra Social (${healthProvider || 'Con CUD'})` : 'Atención Particular'}</p>
              <p>🎯 Disciplinas/Talleres: {selectedActivities.join(', ') || 'Orientación General'}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/549${CLINIC_INFO.phone}?text=${encodeURIComponent(buildWhatsAppText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#609c60] hover:bg-[#4e844e] rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar también por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
              </a>

              <button
                onClick={handleResetForm}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-[#242e24] hover:bg-[#fff6da] rounded-xl transition-colors border border-[#ebdca8]"
              >
                Hacer otra consulta
              </button>
            </div>
          </div>
        ) : (
          /* The Form - Single Unified Container */
          <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#e8d9a8] shadow-md space-y-6 sm:space-y-8">
              
              {/* Step 1: Preloaded Disciplines y Workshops Multi-Select */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                  <label className="text-sm font-bold text-[#242e24] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#e44b3a] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </span>
                    <span>Disciplinas médicas y talleres precargados:</span>
                  </label>
                  <span className="text-xs text-[#526352] font-bold pl-8 sm:pl-0">
                    {selectedActivities.length} seleccionado(s)
                  </span>
                </div>

                {/* Subcategory selector inside the form */}
                <div className="flex gap-1.5 p-1 bg-[#fff6da] rounded-xl w-full sm:w-fit mb-3 border border-[#ebdca8] overflow-x-auto no-scrollbar">
                  <button
                    type="button"
                    onClick={() => setActivityCategoryFilter('all')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-bold cursor-pointer shrink-0 ${
                      activityCategoryFilter === 'all' ? 'bg-white text-[#242e24] shadow-xs' : 'text-[#445144]'
                    }`}
                  >
                    Todos ({DISCIPLINES.length + WORKSHOPS.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityCategoryFilter('disciplinas')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-bold cursor-pointer flex items-center gap-1 shrink-0 ${
                      activityCategoryFilter === 'disciplinas' ? 'bg-[#3a94c1] text-white shadow-xs' : 'text-[#445144]'
                    }`}
                  >
                    <HeartPulse className="w-3 h-3" />
                    <span>Disciplinas ({DISCIPLINES.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityCategoryFilter('talleres')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-bold cursor-pointer flex items-center gap-1 shrink-0 ${
                      activityCategoryFilter === 'talleres' ? 'bg-[#609c60] text-white shadow-xs' : 'text-[#445144]'
                    }`}
                  >
                    <Palette className="w-3 h-3" />
                    <span>Talleres ({WORKSHOPS.length})</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 sm:max-h-72 overflow-y-auto pr-1">
                  {/* Disciplines */}
                  {(activityCategoryFilter === 'all' || activityCategoryFilter === 'disciplinas') &&
                    DISCIPLINES.map((d) => {
                      const isSelected = selectedActivities.includes(d.name);
                      return (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => toggleActivity(d.name)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-[#eef7fc] border-[#3a94c1] text-[#1b506b] ring-1 ring-[#3a94c1]'
                              : 'bg-[#fffdf8] hover:bg-[#fff6da] border-[#ebdca8] text-[#3b473b]'
                          }`}
                        >
                          <div className="text-xs truncate">
                            <p className="font-bold truncate">{d.name}</p>
                            <p className="text-[10px] text-[#556655]">
                              {d.category === 'medica' ? 'Especialidad Médica' : d.category === 'evaluacion' ? 'Diagnóstico' : 'Terapia Individual'}
                            </p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#3a94c1] border-[#3a94c1] text-white' : 'border-[#ebdca8] bg-white'
                          }`}>
                            {isSelected && <span className="text-[10px] leading-none">✓</span>}
                          </div>
                        </button>
                      );
                    })}

                  {/* Workshops */}
                  {(activityCategoryFilter === 'all' || activityCategoryFilter === 'talleres') &&
                    WORKSHOPS.map((w) => {
                      const activityLabel = `Taller de ${w.name}`;
                      const isSelected = selectedActivities.includes(activityLabel);
                      return (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => toggleActivity(activityLabel)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-[#eef7ee] border-[#609c60] text-[#1f4e1f] ring-1 ring-[#609c60]'
                              : 'bg-[#fffdf8] hover:bg-[#fff6da] border-[#ebdca8] text-[#3b473b]'
                          }`}
                        >
                          <div className="text-xs truncate">
                            <p className="font-bold truncate">Taller: {w.name}</p>
                            <p className="text-[10px] text-[#556655] truncate">{w.focus}</p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#609c60] border-[#609c60] text-white' : 'border-[#ebdca8] bg-white'
                          }`}>
                            {isSelected && <span className="text-[10px] leading-none">✓</span>}
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Step 2: Pre-made Messages Selector */}
              <div>
                <label className="text-sm font-bold text-[#242e24] flex items-center gap-2 mb-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#3a94c1] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </span>
                  <span>Elegí un mensaje pre-armado para agilizar tu consulta:</span>
                </label>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {QUICK_MESSAGES.map((msg) => {
                    const isActive = activeQuickMessageId === msg.id;
                    return (
                      <button
                        key={msg.id}
                        type="button"
                        onClick={() => handleSelectQuickMessage(msg.id)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#3a94c1] text-white shadow-xs'
                            : 'bg-[#fff6da] hover:bg-[#faeece] text-[#3b473b] border border-[#ebdca8]'
                        }`}
                      >
                        {msg.title}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Escribí aquí tu consulta sobre sesiones, motivos de derivación o dudas adicionales..."
                  className="w-full text-base sm:text-sm p-3 rounded-xl border border-[#ebdca8] focus:border-[#3a94c1] focus:ring-1 focus:ring-[#3a94c1] outline-hidden bg-[#fffdf8]"
                />
              </div>

              {/* Step 3: Contact y Child Details - Inputs at text-base on mobile to prevent iOS auto-zoom */}
              <div className="space-y-3.5">
                <label className="text-sm font-bold text-[#242e24] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#609c60] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <span>Datos del paciente y contacto familiar:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Nombre del adulto responsable *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Ej. Carolina Martínez"
                      className="w-full text-base sm:text-sm p-3 rounded-xl border border-[#ebdca8] focus:border-[#609c60] focus:ring-1 focus:ring-[#609c60] outline-hidden bg-[#fffdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 11 4455-6677"
                      className="w-full text-base sm:text-sm p-3 rounded-xl border border-[#ebdca8] focus:border-[#609c60] focus:ring-1 focus:ring-[#609c60] outline-hidden bg-[#fffdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Nombre del niño/a o adolescente
                    </label>
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="Ej. Mateo"
                      className="w-full text-base sm:text-sm p-3 rounded-xl border border-[#ebdca8] focus:border-[#609c60] focus:ring-1 focus:ring-[#609c60] outline-hidden bg-[#fffdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Edad del niño/a
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="Ej. 6 años"
                      className="w-full text-base sm:text-sm p-3 rounded-xl border border-[#ebdca8] focus:border-[#609c60] focus:ring-1 focus:ring-[#609c60] outline-hidden bg-[#fffdf8]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Coverage y Preferences */}
              <div className="space-y-3.5 pt-2 border-t border-[#f0e4be]">
                <label className="text-sm font-bold text-[#242e24] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f7cb38] text-[#242e24] flex items-center justify-center text-xs font-bold shrink-0">
                    4
                  </span>
                  <span>Modalidad de Atención y Cobertura:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setCoverageType('obra-social')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      coverageType === 'obra-social'
                        ? 'bg-[#fff6da] border-[#e44b3a] font-bold text-[#242e24] ring-1 ring-[#e44b3a]'
                        : 'bg-[#fffdf8] border-[#ebdca8] text-[#445144]'
                    }`}
                  >
                    <p className="text-xs font-bold">💳 Obra Social / Prepaga</p>
                    <p className="text-[11px] text-[#556655]">Trámite con CUD / Reintegro</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCoverageType('particular')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      coverageType === 'particular'
                        ? 'bg-[#fff6da] border-[#3a94c1] font-bold text-[#242e24] ring-1 ring-[#3a94c1]'
                        : 'bg-[#fffdf8] border-[#ebdca8] text-[#445144]'
                    }`}
                  >
                    <p className="text-xs font-bold">🌿 Sesiones Particulares</p>
                    <p className="text-[11px] text-[#556655]">Consultas y planes de atención</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCoverageType('ambas')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      coverageType === 'ambas'
                        ? 'bg-[#fff6da] border-[#609c60] font-bold text-[#242e24] ring-1 ring-[#609c60]'
                        : 'bg-[#fffdf8] border-[#ebdca8] text-[#445144]'
                    }`}
                  >
                    <p className="text-xs font-bold">⚖️ Asesoramiento Integral</p>
                    <p className="text-[11px] text-[#556655]">A evaluar en la entrevista</p>
                  </button>
                </div>

                {coverageType === 'obra-social' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#fff9e6] p-3.5 rounded-2xl border border-[#f3e1a8]">
                    <div>
                      <label className="block text-xs font-bold text-[#3b473b] mb-1">
                        Nombre de la Obra Social / Prepaga
                      </label>
                      <input
                        type="text"
                        value={healthProvider}
                        onChange={(e) => setHealthProvider(e.target.value)}
                        placeholder="Ej. IOMA, OSDE, Swiss Medical, etc."
                        className="w-full text-base sm:text-sm p-2.5 rounded-xl border border-[#ebdca8] bg-white outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3b473b] mb-1">
                        ¿Cuenta con Certificado Único de Discapacidad (CUD)?
                      </label>
                      <select
                        value={hasCud}
                        onChange={(e) => setHasCud(e.target.value as any)}
                        className="w-full text-base sm:text-sm p-2.5 rounded-xl border border-[#ebdca8] bg-white outline-hidden"
                      >
                        <option value="si">Sí, cuenta con CUD vigente</option>
                        <option value="en-tramite">En trámite / Por renovar</option>
                        <option value="no">No posee CUD actualmente</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#3b473b] mb-1.5">
                    Franja horaria preferida para sesiones:
                  </label>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {(['tarde', 'manana', 'indistinto'] as const).map((shift) => (
                      <button
                        key={shift}
                        type="button"
                        onClick={() => setPreferredShift(shift)}
                        className={`px-3 py-1.5 text-xs rounded-xl border cursor-pointer font-bold shrink-0 ${
                          preferredShift === shift
                            ? 'bg-[#242e24] text-white border-[#242e24]'
                            : 'bg-white text-[#445144] border-[#ebdca8] hover:bg-[#fff6da]'
                        }`}
                      >
                        {shift === 'tarde' ? 'Turno Tarde' : shift === 'manana' ? 'Turno Mañana' : 'Indistinto'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Live Bubble Simulator with Clear Emojis */}
              <div className="bg-[#e5ddd5] rounded-2xl p-3.5 sm:p-5 border border-stone-300 shadow-2xs">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-stone-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#609c60] shrink-0" />
                    <span className="text-xs font-bold text-stone-800">
                      Vista previa del mensaje de turno (con emojis):
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="text-[11px] font-bold text-[#1f4e1f] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    {copiedSummary ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSummary ? 'Copiado' : 'Copiar texto'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-2xs text-xs sm:text-sm text-stone-900 whitespace-pre-line leading-relaxed font-sans">
                  {buildWhatsAppText()}
                </div>

                <div className="mt-2 text-[11px] text-stone-600 text-center">
                  Los emojis y formato se enviarán perfectamente visibles al WhatsApp oficial.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#f0e4be] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#609c60] hover:bg-[#4e844e] active:bg-[#407040] rounded-xl transition-all shadow-md cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar directo por WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
                </button>

                <button
                  type="button"
                  onClick={handleWebSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#3a94c1] hover:bg-[#2e7da6] active:bg-[#25688c] rounded-xl transition-all shadow-sm cursor-pointer text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitud de consulta</span>
                </button>
              </div>

          </div>
        )}

      </div>
    </section>
  );
};
