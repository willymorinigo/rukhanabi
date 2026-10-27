import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/therapeuticData';
import { Testimonial } from '../types';
import { Quote, Star, PlusCircle, CheckCircle2, X } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [relation, setRelation] = useState('');
  const [childInfo, setChildInfo] = useState('');
  const [therapy, setTherapy] = useState('');
  const [quote, setQuote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !quote) return;

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      author,
      relation: relation || 'Familiar',
      childInfo: childInfo || 'Paciente infantil',
      therapy: therapy || 'Atención Interdisciplinaria',
      quote,
      date: 'Reciente'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setAuthor('');
      setRelation('');
      setChildInfo('');
      setTherapy('');
      setQuote('');
    }, 1800);
  };

  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-[#fff6da] border-b border-[#ebdca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-bold text-[#e44b3a] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e44b3a]" />
              <span>Voces y Recorridos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
              Testimonios de las familias que nos eligen
            </h2>
            <p className="mt-3 text-base text-[#445144] leading-relaxed">
              Cada niño tiene su propio tiempo y su propio brillo. Compartimos las vivencias de mamás, papás y cuidadores que caminan a nuestro lado.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#3a94c1] hover:bg-[#2e7da6] rounded-xl transition-colors shrink-0 cursor-pointer w-fit shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Compartir experiencia familiar</span>
          </button>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8d9a8] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Stars and Therapy Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f7cb38] text-[#f7cb38]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#526352]">
                    {t.date}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-9 h-9 text-[#f7cb38]/30 absolute -top-3.5 -left-2 -z-0" />
                  <p className="relative z-10 text-sm sm:text-base text-[#3b473b] leading-relaxed italic">
                    «{t.quote}»
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#f0e4be] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#242e24]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#526352]">
                    {t.relation} {t.childInfo ? `(${t.childInfo})` : ''}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-[#1f4e1f] bg-[#eef7ee] border border-[#a8d3a8] px-2.5 py-1 rounded-lg">
                    {t.therapy}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Testimonial Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#fff6da] rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-[#3a94c1] shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#445144] hover:text-[#242e24] p-1.5 rounded-xl hover:bg-[#f3e3b5]"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-[#609c60] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#242e24] mb-1">
                  ¡Muchas gracias por tus palabras!
                </h3>
                <p className="text-sm text-[#445144]">
                  Tu testimonio fue agregado al espacio de experiencias de Rukha Nabi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#e44b3a] mb-1">
                    Comunidad Rukha Nabi
                  </div>
                  <h3 className="text-2xl font-bold text-[#242e24]">
                    Compartí la experiencia de tu familia
                  </h3>
                  <p className="text-xs text-[#526352] mt-1">
                    Tus palabras ayudan a otras familias a encontrar un espacio de contención y amor para sus hijos.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3b473b] mb-1">
                    Tu nombre y apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ej. Martín López"
                    className="w-full text-sm p-3 rounded-xl border border-[#ebdca8] bg-white focus:border-[#3a94c1] outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Vínculo (ej. Mamá de...)
                    </label>
                    <input
                      type="text"
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      placeholder="Ej. Papá de Cami"
                      className="w-full text-sm p-3 rounded-xl border border-[#ebdca8] bg-white focus:border-[#3a94c1] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3b473b] mb-1">
                      Disciplina o Taller
                    </label>
                    <input
                      type="text"
                      value={therapy}
                      onChange={(e) => setTherapy(e.target.value)}
                      placeholder="Ej. Terapia Ocupacional"
                      className="w-full text-sm p-3 rounded-xl border border-[#ebdca8] bg-white focus:border-[#3a94c1] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3b473b] mb-1">
                    Tu testimonio o vivencia en Rukha Nabi *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Contanos sobre los avances de tu hijo/a, el vínculo con los terapeutas, o cómo los acompañaron en la escuela y el hogar..."
                    className="w-full text-sm p-3 rounded-xl border border-[#ebdca8] bg-white focus:border-[#3a94c1] outline-hidden"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 text-sm font-bold text-white bg-[#e44b3a] hover:bg-[#c93c2c] rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    Publicar testimonio
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="py-3 px-4 text-sm font-semibold text-[#445144] hover:bg-[#f3e3b5] rounded-xl transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
