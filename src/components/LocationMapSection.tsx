import React, { useState } from 'react';
import { CLINIC_INFO, formatWhatsAppUrl } from '../data/therapeuticData';
import { MapPin, Navigation, Phone, ExternalLink, Instagram, Facebook, Clock, Car, Bus, Copy, Check, Map } from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [mapProvider, setMapProvider] = useState<'google' | 'osm'>('google');

  const exactAddressString = 'Calle 9 número 2094, Villa Elisa, Buenos Aires';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(exactAddressString);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2200);
  };

  // Google Maps official embed with exact RUKHA NABI Place ID & coordinates in Villa Elisa
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.8258671607567!2d-58.0947742!3d-34.8532636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2df00034021ad%3A0x13ebc7ec8c1257d5!2sRUKHA%20NABI!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar';

  // OpenStreetMap embed explicitly placing marker on [-34.8532636, -58.0925855] (Calle 9 número 2094)
  const osmEmbedUrl =
    'https://www.openstreetmap.org/export/embed.html?bbox=-58.0975855%2C-34.8562636%2C-58.0875855%2C-34.8502636&layer=mapnik&marker=-34.8532636%2C-58.0925855';

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.coordinates.lat},${CLINIC_INFO.coordinates.lng}`;

  return (
    <section id="ubicacion" className="py-16 sm:py-20 bg-[#fff6da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#e44b3a] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e44b3a]" />
            <span>Ubicación y Mapa Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#242e24] tracking-tight text-balance">
            Encontranos en {exactAddressString}
          </h2>
          <p className="mt-3 text-base text-[#445144] leading-relaxed">
            Nuestro espacio terapéutico está ubicado exactamente en <strong>{exactAddressString}</strong> (Partido de La Plata), en una zona tranquila y accesible para las familias.
          </p>
        </div>

        {/* 2-Column: Details Card + Interactive Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 5-Cols: Contact Details & Social Channels */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#e8d9a8] shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Location item with copy button */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#e44b3a]/10 text-[#e44b3a] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#e44b3a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#242e24]">
                    Dirección Exacta de la Sede
                  </h3>
                  <p className="text-base font-bold text-[#e44b3a] mt-0.5">
                    {CLINIC_INFO.addressStreet}
                  </p>
                  <p className="text-xs text-[#526352]">
                    Villa Elisa, Buenos Aires, Argentina
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-[#fff6da] hover:bg-[#faeece] text-[#242e24] border border-[#ebdca8] transition-colors cursor-pointer"
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-[#609c60]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAddress ? '¡Dirección copiada!' : 'Copiar dirección'}</span>
                    </button>

                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3a94c1] hover:underline"
                    >
                      <span>Abrir en Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Turnos */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#609c60]/10 text-[#609c60] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#609c60]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#242e24]">
                    Turnos y Consultas por WhatsApp
                  </h3>
                  <p className="text-base font-bold text-[#242e24] mt-0.5">
                    {CLINIC_INFO.phoneDisplay}
                  </p>
                  <a
                    href={formatWhatsAppUrl('¡Hola equipo de Rukhá Nabí! \u{1F44B} Quisiera solicitar información sobre turnos y consultas para el espacio. Muchas gracias!')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#609c60] hover:underline mt-1"
                  >
                    <span>Enviar mensaje ahora</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#f7cb38]/20 text-[#b3890a] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#9b7811]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#242e24]">
                    Horarios de Atención
                  </h3>
                  <p className="text-xs sm:text-sm text-[#445144] mt-0.5">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Transit & Access */}
              <div className="pt-2 border-t border-[#f0e4be] space-y-2 text-xs text-[#526352]">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#609c60] shrink-0" />
                  <span>Fácil acceso vehicular y estacionamiento en calle tranquila.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#3a94c1] shrink-0" />
                  <span>Conexión con líneas 273, TALP y estación Villa Elisa (Tren Roca).</span>
                </div>
              </div>
            </div>

            {/* Social Networks Section */}
            <div className="pt-6 border-t border-[#f0e4be] space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#526352]">
                Redes Oficiales de Rukhá Nabí:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#fff6da] border border-[#ebdca8] hover:border-[#e44b3a] text-[#242e24] transition-all text-xs font-bold"
                >
                  <Instagram className="w-4 h-4 text-[#e44b3a]" />
                  <span>@rukha_nabi</span>
                  <ExternalLink className="w-3 h-3 text-[#526352] ml-auto" />
                </a>

                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#fff6da] border border-[#ebdca8] hover:border-[#3a94c1] text-[#242e24] transition-all text-xs font-bold"
                >
                  <Facebook className="w-4 h-4 text-[#3a94c1]" />
                  <span>Facebook Oficial</span>
                  <ExternalLink className="w-3 h-3 text-[#526352] ml-auto" />
                </a>
              </div>
            </div>

          </div>

          {/* Right 7-Cols: Interactive Map Component with Exact Marker */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#e8d9a8] bg-white shadow-md">
            
            {/* Top Bar inside Map with exact address tag and view toggles */}
            <div className="p-4 bg-white border-b border-[#ebdca8] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e44b3a] animate-pulse" />
                <span className="text-xs font-bold text-[#242e24]">
                  Punto exacto: {exactAddressString}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Switch between Google Maps view and OpenStreetMap pin view */}
                <div className="hidden sm:flex items-center bg-[#fff6da] border border-[#ebdca8] rounded-xl p-0.5 text-xs font-semibold">
                  <button
                    onClick={() => setMapProvider('google')}
                    className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                      mapProvider === 'google' ? 'bg-[#3a94c1] text-white shadow-2xs' : 'text-[#445144]'
                    }`}
                  >
                    Google Maps
                  </button>
                  <button
                    onClick={() => setMapProvider('osm')}
                    className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                      mapProvider === 'osm' ? 'bg-[#609c60] text-white shadow-2xs' : 'text-[#445144]'
                    }`}
                  >
                    Callejero
                  </button>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#e44b3a] hover:bg-[#c93c2c] rounded-xl transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo Llegar</span>
                </a>
              </div>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative w-full h-[380px] sm:h-[460px] bg-[#fbfbf9]">
              <iframe
                title="Ubicación exacta de Rukha Nabi en Calle 9 número 2094, Villa Elisa, Buenos Aires"
                src={mapProvider === 'google' ? googleMapsEmbedUrl : osmEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pin Overlay Card for immediate recognition */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-[#e44b3a] shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-[#e44b3a] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs font-bold text-[#242e24]">
                    RUKHÁ NABÍ
                  </p>
                </div>
                
                <p className="text-xs font-bold text-[#e44b3a] mt-1">
                  {exactAddressString}
                </p>
                <p className="text-[11px] text-[#526352] mt-0.5">
                  Coordenadas: -34.85326, -58.09258
                </p>
                
                <div className="mt-2.5 pt-2 border-t border-[#f0e4be] flex items-center justify-between text-[11px] font-bold">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3a94c1] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver ficha en Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e44b3a] hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Ruta GPS</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
