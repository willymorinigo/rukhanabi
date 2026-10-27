import { Discipline, Workshop, MethodologyStep, QuickMessage, Testimonial, GalleryItem } from '../types';

export const CLINIC_INFO = {
  name: 'RUKHÁ NABÍ',
  tagline: 'Centro de Atención Integral de Neurodesarrollo Infantojuvenil',
  subtitle: 'Centro de Atención Integral de Neurodesarrollo Infantojuvenil',
  location: 'Calle 9 número 2094, Villa Elisa, Buenos Aires',
  addressStreet: 'Calle 9 número 2094',
  neighborhood: 'Villa Elisa',
  city: 'La Plata, Buenos Aires',
  fullAddress: 'Calle 9 número 2094, Villa Elisa, Buenos Aires, Argentina',
  phone: '1133694727',
  phoneFormatted: '+54 9 11 3369-4727',
  phoneDisplay: '11 3369-4727',
  whatsappUrl: 'https://wa.me/5491133694727',
  googleMapsUrl: 'https://www.google.com/maps/place/RUKHA+NABI/@-34.8532636,-58.0925855,17z/data=!4m6!3m5!1s0x95a2df00034021ad:0x13ebc7ec8c1257d5!8m2!3d-34.8532636!4d-58.0925855!16s%2Fg%2F11xcldqj6_',
  googleMapsShortUrl: 'https://maps.app.goo.gl/zBbd6974ksJoE9Pz5',
  coordinates: {
    lat: -34.8532636,
    lng: -58.0925855,
  },
  instagramUrl: 'https://www.instagram.com/rukha_nabi/',
  instagramHandle: '@rukha_nabi',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61575632121961&ref=PROFILE_EDIT_xav_ig_profile_page_web#',
  modalities: 'Obras Sociales, Prepagas y Atención Particular',
  hours: 'Lunes a Viernes de 08:30 a 19:30 hs · Sábados con turnos programados',
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'psicologia',
    name: 'Psicología',
    shortDesc: 'Abordaje integral del mundo emocional, conducta, regulación y acompañamiento cercano a las familias.',
    fullDesc: 'Espacio cálido y confidencial para comprender y tramitar emociones, miedos, cambios vitales y situaciones conductuales. Trabajamos en estrecha alianza con los cuidadores, brindando orientación y contención permanente.',
    dailyLifeApplication: 'Manejo de desbordes emocionales, tolerancia a la frustración, fortalecimiento de la autoestima y construcción de vínculos saludables.',
    ageRange: 'Infancias y Adolescencias',
    category: 'terapia',
    benefits: ['Gestión saludable de emociones y angustias', 'Fortalecimiento de la seguridad personal', 'Orientación constante a padres y cuidadores']
  },
  {
    id: 'psicopedagogia',
    name: 'Psicopedagogía',
    shortDesc: 'Potenciación de procesos de aprendizaje, funciones ejecutivas y articulación directa con las escuelas.',
    fullDesc: 'Evaluamos e intervenimos en el estilo singular de aprender de cada niño y joven, diseñando adaptaciones curriculares, facilitadores pedagógicos y estrategias de estudio significativas.',
    dailyLifeApplication: 'Organización de tareas escolares, comprensión de textos, concentración y disfrute en el aula.',
    ageRange: '4 a 18 años',
    category: 'terapia',
    benefits: ['Entrenamiento de memoria y funciones ejecutivas', 'Articulación con gabinetes escolares', 'Estrategias pedagógicas personalizadas']
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    shortDesc: 'Desarrollo del lenguaje expresivo, comprensivo, habla, deglución y comunicación alternativa (SAAC).',
    fullDesc: 'El lenguaje es el puente hacia la sociedad y el pensamiento. Acompañamos el desarrollo del habla, la articulación, la comprensión y el uso de tableros de comunicación aumentativa/alternativa.',
    dailyLifeApplication: 'Pedir lo que necesita sin frustración, relatar lo vivido en la escuela y sostener conversaciones ricas con pares y adultos.',
    ageRange: 'Bebés, Niños y Adolescentes',
    category: 'terapia',
    benefits: ['Articulación y fluidez del habla', 'Comprensión de consignas complejas', 'Implementación de sistemas aumentativos (SAAC)']
  },
  {
    id: 'musicoterapia',
    name: 'Musicoterapia',
    shortDesc: 'El sonido, el ritmo y la melodía como canales privilegiados de conexión vincular, relajación y expresión sin palabras.',
    fullDesc: 'Utilizamos experiencias sonoras activas y receptivas para facilitar la comunicación no verbal, favorecer la expresión de afectos y estimular áreas motrices y cognitivas desde una vía artística y sensible.',
    dailyLifeApplication: 'Descargar tensiones de la jornada escolar, sincronizar la respiración y conectar con la mirada y el ritmo compartido.',
    ageRange: 'Todas las edades',
    category: 'terapia',
    benefits: ['Canal no verbal de expresión emocional', 'Estimulación auditiva y rítmica', 'Sincronía vincular y bienestar']
  },
  {
    id: 'terapia-ocupacional',
    name: 'Terapia Ocupacional',
    shortDesc: 'Independencia en las actividades de la vida diaria, integración sensorial y destrezas de motricidad fina.',
    fullDesc: 'Acompañamos a los niños a ser independientes en su rutina: vestirse, higienizarse, comer, jugar y participar en la escuela. A través de la integración sensorial regulamos la respuesta a estímulos del entorno.',
    dailyLifeApplication: 'Desde abotonarse la camisa, usar cubiertos, atarse cordones hasta tolerar texturas y regular su nivel de energía en el aula.',
    ageRange: '1 a 18 años',
    category: 'terapia',
    benefits: ['Autorregulación sensorial y motriz', 'Autonomía en alimentación, higiene y vestido', 'Grafomotricidad y destreza manual']
  },
  {
    id: 'kinesiologia',
    name: 'Kinesiología',
    shortDesc: 'Rehabilitación psicomotriz, función respiratoria, tono muscular y movimiento seguro en el espacio.',
    fullDesc: 'Abordaje kinésico pediátrico enfocado en el desarrollo neuromuscular, la postura, la respiración y la biomecánica corporal, facilitando el movimiento eficiente y seguro en las actividades cotidianas.',
    dailyLifeApplication: 'Caminar sin tropezar, subir y bajar escalones con estabilidad, optimizar la mecánica respiratoria y ganar resistencia física.',
    ageRange: 'Bebés a Adolescentes',
    category: 'terapia',
    benefits: ['Control postural y alineación corporal', 'Fuerza muscular y equilibrio', 'Terapia respiratoria pediátrica']
  },
  {
    id: 'pediatria',
    name: 'Pediatría',
    shortDesc: 'Cuidado integral de la salud infantil, seguimiento del crecimiento, prevención y chequeos evolutivos.',
    fullDesc: 'Atención clínica pediátrica con mirada empática y respetuosa, trabajando en equipo con las demás áreas del centro para una visión holística del desarrollo del niño.',
    dailyLifeApplication: 'Control del crecimiento físico, pautas de alimentación y descanso, y acompañamiento integral a las dudas de crianza.',
    ageRange: '0 a 16 años',
    category: 'medica',
    benefits: ['Controles de niño sano e hitos madurativos', 'Acompañamiento en pautas de crianza', 'Mirada interdisciplinaria con las terapias']
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    shortDesc: 'Alimentación saludable, abordaje de selectividad alimentaria y nutrición en el neurodesarrollo.',
    fullDesc: 'Especialistas en nutrición infantil y juvenil, con abordaje respetuoso de la selectividad alimentaria sensorial (muy frecuente en infancias con desafíos sensoriales), garantizando un aporte nutricional óptimo sin presiones.',
    dailyLifeApplication: 'Incorporar nuevos alimentos y texturas a la mesa familiar, disfrutar la hora de comer y sostener una nutrición equilibrada.',
    ageRange: 'Lactantes, Niños y Adolescentes',
    category: 'medica',
    benefits: ['Abordaje sensorial de la selectividad alimentaria', 'Educación alimentaria para toda la familia', 'Planes nutricionales adaptados a necesidades particulares']
  },
  {
    id: 'neurologia-infantojuvenil',
    name: 'Neurología Infantojuvenil',
    shortDesc: 'Diagnóstico médico especializado, seguimiento neurobiológico y orientación en tratamientos terapéuticos.',
    fullDesc: 'Evaluación y tratamiento médico de los desafíos del neurodesarrollo, epilepsias, trastornos del aprendizaje, condición del espectro autista y atención integral del sistema nervioso en crecimiento.',
    dailyLifeApplication: 'Diagnóstico temprano oportuno, prescripción médica para obras sociales e indicación precisa de la frecuencia de tratamientos.',
    ageRange: '0 a 18 años',
    category: 'medica',
    benefits: ['Diagnóstico médico certero y seguimiento evolutivo', 'Confección de informes médicos para CUD y Obras Sociales', 'Articulación con terapeutas del centro']
  },
  {
    id: 'evaluaciones-neurodesarrollo',
    name: 'Evaluaciones de Neurodesarrollo',
    shortDesc: 'Baterías diagnósticas estandarizadas interdisciplinarias para detectar fortalezas y áreas de apoyo.',
    fullDesc: 'Proceso formal de evaluación clínica mediante herramientas validadas internacionalmente (escalas de desarrollo, ADOS-2, ADI-R, WISC, perfil sensorial) para una comprensión precisa y respetuosa de cada perfil neurocognitivo.',
    dailyLifeApplication: 'Contar con un mapa claro y objetivo de las capacidades del niño para guiar la intervención escolar, familiar y terapéutica.',
    ageRange: 'Desde los 12 meses',
    category: 'evaluacion',
    benefits: ['Informes completos interdisciplinarios', 'Detección oportuna de barreras y facilitadores', 'Orientación terapéutica con objetivos medibles']
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'habilidades-sociales',
    name: 'Habilidades Sociales',
    shortDesc: 'Espacio lúdico grupal para entrenar la empatía, la escucha, la resolución de conflictos y el juego compartido con pares.',
    targetGroup: 'Niños y Adolescentes',
    focus: 'Socialización y Vínculos',
    benefits: ['Aprender a iniciar y mantener conversaciones', 'Tolerar la espera de turnos y reglas de juego', 'Construir amistades significativas']
  },
  {
    id: 'ceramica',
    name: 'Cerámica',
    shortDesc: 'Exploración táctil con arcilla, modelado tridimensional, motricidad fina y desarrollo de la paciencia creadora.',
    targetGroup: 'Infancias y Jóvenes',
    focus: 'Arte Táctil y Regulación',
    benefits: ['Estimulación propioceptiva y táctil profunda', 'Concentración y calma a través del modelado', 'Creación de objetos propios funcionales']
  },
  {
    id: 'ritmos',
    name: 'Ritmos',
    shortDesc: 'Movimiento, percusión corporal, danza y coordinación motriz gruesa al compás de la música.',
    targetGroup: 'Infancias y Adolescentes',
    focus: 'Coordinación y Ritmo',
    benefits: ['Liberación de energía y endorfinas', 'Esquema corporal y conciencia temporal', 'Diversión en grupo']
  },
  {
    id: 'expresion-musical',
    name: 'Expresión Musical',
    shortDesc: 'Encuentro con instrumentos variados, ensamble sonoro, improvisación y canto lúdico.',
    targetGroup: 'Niños y Niñas',
    focus: 'Música y Expresión',
    benefits: ['Descubrimiento de la propia voz sonora', 'Escucha activa del otro', 'Desarrollo de la creatividad']
  },
  {
    id: 'huerta',
    name: 'Huerta',
    shortDesc: 'Siembra, cuidado de plantas, conexión con la naturaleza y aprendizaje sobre los ciclos vitales en el espacio exterior.',
    targetGroup: 'Todas las edades',
    focus: 'Naturaleza y Sustentabilidad',
    benefits: ['Contacto sensorial con la tierra y agua', 'Responsabilidad y constancia en el riego', 'Valoración de alimentos naturales']
  },
  {
    id: 'arte',
    name: 'Arte',
    shortDesc: 'Pintura, collage, texturas y técnicas plásticas mixtas para expresar el mundo interno con libertad.',
    targetGroup: 'Infancias y Adolescentes',
    focus: 'Artes Visuales y Creatividad',
    benefits: ['Descarga emocional a través del color', 'Desarrollo de la motricidad fina', 'Sentido de logro y valor estético']
  },
  {
    id: 'yoga-mindfulness',
    name: 'Yoga y Mindfulness',
    shortDesc: 'Posturas lúdicas de animales, respiración consciente y técnicas de relajación para gestionar el estrés.',
    targetGroup: 'Niños y Familias',
    focus: 'Calma y Autoconciencia',
    benefits: ['Técnicas de autorregulación emocional', 'Flexibilidad y equilibrio corporal', 'Pausas de calma en la rutina diaria']
  },
  {
    id: 'vida-laboral-vocacional',
    name: 'Preparación Para la Vida Laboral y Orientación Vocacional',
    shortDesc: 'Acompañamiento a jóvenes en la transición a la adultez: armado de CV, entrenamiento de entrevistas, intereses y autonomía.',
    targetGroup: 'Jóvenes y Adolescentes',
    focus: 'Autonomía y Futuro',
    benefits: ['Descubrimiento de talentos e intereses vocacionales', 'Simulacros de entrevistas y roles laborales', 'Autogestión del tiempo y dinero']
  },
  {
    id: 'juego-movimiento-bebes',
    name: 'Juego y Movimientos Libres para Bebés',
    shortDesc: 'Basado en el movimiento libre (enfoque Pikler) sobre pisos cálidos, explorando posturas con seguridad.',
    targetGroup: 'Bebés de 6 a 24 meses junto a cuidadores',
    focus: 'Primera Infancia',
    benefits: ['Hitos motores autónomos sin forzamiento', 'Vínculo amoroso y de confianza con la familia', 'Exploración segura del espacio']
  },
  {
    id: 'sensibilidad-gestantes',
    name: 'Sensibilidad Musical para Familias Gestantes',
    shortDesc: 'Vínculo prenatal a través de nanas, vibración sonora, respiración y conexión afectiva antes del nacimiento.',
    targetGroup: 'Familias gestantes',
    focus: 'Gestación y Apego',
    benefits: ['Comunicación temprana madre/padre-bebé', 'Reducción de la ansiedad del embarazo', 'Preparación amorosa para la bienvenida']
  },
  {
    id: 'alfabetizacion-funcional',
    name: 'Alfabetización Funcional',
    shortDesc: 'Aproximación amigable a las letras, carteles de la vida diaria, lectura comprensiva y firmas personales.',
    targetGroup: 'Niños en etapa escolar y jóvenes',
    focus: 'Lectoescritura Práctica',
    benefits: ['Lectura de indicaciones del entorno cotidiano', 'Seguridad en la escritura propia', 'Participación activa en su comunidad']
  },
  {
    id: 'reposteria-panaderia',
    name: 'Repostería y Panadería',
    shortDesc: 'Cocina terapéutica: amasar, medir ingredientes, seguir recetas y disfrutar del compartir preparaciones ricas.',
    targetGroup: 'Niños, Jóvenes y Familias',
    focus: 'Vida Diaria y Autonomía',
    benefits: ['Estimulación multisensorial olfativa y gustativa', 'Matemática práctica (pesos, medidas y tiempos)', 'Gran satisfacción y autonomía culinaria']
  },
  {
    id: 'club-lectores-escritores',
    name: 'Club de Lectores y Escritores',
    shortDesc: 'Rincón de cuentos, narración oral, creación de historias ilustradas y pasión compartida por los libros.',
    targetGroup: 'Infancias curiosas',
    focus: 'Literatura Infantil y Imaginación',
    benefits: ['Enriquecimiento del vocabulario y dicción', 'Pensamiento crítico y creativo', 'Amor por la lectura compartida']
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Entrevista Inicial',
    subtitle: 'Encuentro con la familia',
    description: 'Se trata de un primer encuentro cálido con los adultos responsables del niño o adolescente. En este espacio recabamos datos de su historia, un recorrido amoroso de su desarrollo y de su vida hasta el momento, escuchando las principales inquietudes y expectativas familiares.',
    deliverables: [
      'Anamnesis clínica y evolutiva completa',
      'Revisión de informes previos o derivaciones médicas',
      'Escucha de necesidades y prioridades cotidianas de la familia'
    ]
  },
  {
    number: '02',
    title: 'Periodo de Evaluación',
    subtitle: 'Observación clínica y pruebas específicas',
    description: 'Comprende el proceso en el que, mediante la observación clínica durante sesiones lúdicas y la aplicación de herramientas de evaluación estandarizadas y específicas que el profesional considere pertinentes, se detectan las fortalezas singulares del niño y las áreas que necesitan refuerzo.',
    deliverables: [
      'Evaluación en contexto de juego y confort',
      'Detección precisa de barreras y facilitadores',
      'Elaboración de informe diagnóstico interdisciplinario'
    ]
  },
  {
    number: '03',
    title: 'Intervención Terapéutica',
    subtitle: 'Trabajo focalizado sobre objetivos',
    description: 'La entrevista inicial, la observación clínica y las evaluaciones aplicadas permiten plantear objetivos de trabajo claros, medibles y concretos. El periodo de intervención es aquel en el que se trabaja enteramente sobre esos objetivos, respetando los tiempos y deseos de cada persona.',
    deliverables: [
      'Plan de tratamiento personalizado y dinámico',
      'Sesiones individuales o talleres según necesidad',
      'Articulación constante con escuelas y profesionales externos'
    ]
  },
  {
    number: '04',
    title: 'Revaluación Continua',
    subtitle: 'Medición de logros y proyección',
    description: 'Los objetivos se plantean para ser cumplidos en un determinado periodo de tiempo. Tras ese trayecto, se revalúan los avances con las mismas herramientas del inicio para observar la evolución, ajustar metas, sumar nuevos desafíos o considerar el alta de la prestación.',
    deliverables: [
      'Comparativa objetiva de avances alcanzados',
      'Ajuste o renovación de objetivos terapéuticos',
      'Evaluación de alta terapéutica o continuidad de prestación'
    ]
  }
];

export const QUICK_MESSAGES: QuickMessage[] = [
  {
    id: 'admision',
    title: 'Solicitar Entrevista Inicial',
    text: '¡Hola equipo de Rukhá Nabí! 👋 Quisiera solicitar información sobre turnos disponibles y coordinar una entrevista inicial para el espacio. Muchas gracias!'
  },
  {
    id: 'obras-sociales-2028',
    title: 'Admisión / Obra Social',
    text: '¡Hola equipo de Rukhá Nabí! 👋 Les escribo para consultar sobre el proceso de admisión y la presentación de documentación para Obra Social / Prepaga. Muchas gracias!'
  },
  {
    id: 'precios-particular',
    title: 'Modalidad Particular',
    text: '¡Hola equipo de Rukhá Nabí! 👋 Quisiera consultar por la modalidad, horarios y valores de las sesiones particulares y talleres. Muchas gracias!'
  },
  {
    id: 'talleres-ludicos',
    title: 'Consultar por Talleres',
    text: '¡Hola equipo de Rukhá Nabí! 👋 Me gustaría recibir información sobre la disponibilidad de cupos y horarios para los talleres lúdicos y de habilidades sociales. Muchas gracias!'
  },
  {
    id: 'evaluacion-neuro',
    title: 'Evaluaciones Diagnósticas',
    text: '¡Hola equipo de Rukhá Nabí! 👋 Quisiera solicitar información sobre el circuito de evaluaciones de neurodesarrollo e informes interdisciplinarios. Muchas gracias!'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Gomez',
    relation: 'Mamá de Mateo',
    childInfo: '6 años',
    therapy: 'Terapia Ocupacional e Integración Sensorial',
    quote: 'En Rukha Nabi encontramos no solo terapeutas excelentes, sino un lugar donde nos sentimos comprendidos desde el primer minuto en Villa Elisa. Mateo antes se desbordaba en el jardín por los ruidos; hoy no solo disfruta el aula sino que aprendió a vestirse solo con una sonrisa enorme.',
    date: 'Febrero 2026'
  },
  {
    id: '2',
    author: 'Gonzalo y Claudia Fernandez',
    relation: 'Papás de Sofía',
    childInfo: '4 años',
    therapy: 'Fonoaudiología y Estimulación Temprana',
    quote: 'El acompañamiento del equipo fonoaudiológico fue un antes y un después. Sofi pasó de frustrarse por no poder comunicarse a cantar y explicarnos sus juegos favoritos. La calidez humana de todo el espacio en Calle 9 es insuperable.',
    date: 'Enero 2026'
  },
  {
    id: '3',
    author: 'Valeria Rivas',
    relation: 'Mamá de Lucas',
    childInfo: '9 años',
    therapy: 'Psicopedagogía y Taller de Repostería',
    quote: 'La articulación que hacen con la escuela de Lucas fue clave. Los docentes y los profesionales de Rukhá trabajan en equipo constante. Lucas recuperó las ganas de ir a la escuela y los talleres de cocina le dieron una autonomía que nunca imaginamos.',
    date: 'Noviembre 2025'
  },
  {
    id: '4',
    author: 'Esteban Martinez',
    relation: 'Papá de Benjamín',
    childInfo: '7 años',
    therapy: 'Kinesiología y Musicoterapia',
    quote: 'Agradecemos enormemente que respeten los tiempos y deseos de Benja. No es un lugar rígido: todo pasa por el juego, la empatía y la alegría. Las instalaciones son súper luminosas y seguras.',
    date: 'Diciembre 2025'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sala Principal de Juego y Psicomotricidad',
    category: 'Salas Terapéuticas',
    description: 'Espacio diáfano con luz natural, hamaca sensorial de tela, mobiliario Montessori de madera de pino y recursos táctiles para el desarrollo integral.',
    imageSrc: '/src/assets/images/hero_pediatric_therapy_1793107309026.jpg',
    tag: 'Juego Libre y Vínculo'
  },
  {
    id: 'g2',
    title: 'Gimnasio de Integración Sensorial',
    category: 'Integración Sensorial',
    description: 'Equipamiento específico con bloques de escalada suaves, rampa de balance, pared táctil multivariada y columpio sensorial para la modulación de estímulos.',
    imageSrc: '/src/assets/images/therapy_sensory_room_1793107309988.jpg',
    tag: 'Regulación y Movimiento'
  },
  {
    id: 'g3',
    title: 'Mesa de Estimulación y Motricidad Fina',
    category: 'Sesiones Individuales',
    description: 'Trabajo personalizado donde a través de plastilina terapéutica, encastres de madera y juegos de ingenio se entrenan destrezas motoras y cognitivas.',
    imageSrc: '/src/assets/images/therapy_play_session_1793107310947.jpg',
    tag: 'Enfoque Singular'
  },
  {
    id: 'g4',
    title: 'Recepción y Espacio de Encuentro',
    category: 'Instalaciones',
    description: 'Entorno cálido y sereno para la llegada de las familias en Villa Elisa, mesa lúdica de bienvenida para los pequeños y sector administrativo para admisiones.',
    imageSrc: '/src/assets/images/therapy_facility_garden_1793107309890.jpg',
    tag: 'Calidez y Bienvenida'
  }
];

export const HEALTH_MODEL_DIMENSIONS = [
  {
    title: 'Funciones y Estructuras Corporales',
    desc: 'Evaluamos y estimulamos el tono muscular, la postura, la integración sensorial, la respiración, la voz y los procesos neurocognitivos.',
    iconName: 'Activity'
  },
  {
    title: 'Actividades Cotidianas y Participación',
    desc: 'El foco central: vestirse solos, comer, jugar con amigos, comunicarse, aprender en la escuela y disfrutar de la vida comunitaria.',
    iconName: 'Sparkles'
  },
  {
    title: 'Factores Contextuales y Ambientales',
    desc: 'Trabajamos eliminando barreras del entorno (en el hogar, el aula y la sociedad) y potenciando los facilitadores amorosos de la familia.',
    iconName: 'HeartHandshake'
  }
];

export const ADMISSION_REQUIREMENTS_2028 = [
  {
    id: 'req1',
    title: 'Instructivo de Discapacidad 2028 Actualizado',
    detail: 'Solicitar a tu obra social o prepaga el instructivo vigente con las pautas de presentación.'
  },
  {
    id: 'req2',
    title: 'Planillas y Formularios Oficiales',
    detail: 'Descargar o pedir en la delegación los formularios requeridos para tramitar las autorizaciones anuales.'
  },
  {
    id: 'req3',
    title: 'Certificado Único de Discapacidad (CUD)',
    detail: 'Verificar la vigencia del CUD y tener copia legible ante cualquier requerimiento de auditoría médica.'
  },
  {
    id: 'req4',
    title: 'Orden Médica y Resumen de Historia Clínica',
    detail: 'Prescripción emitida por el pediatra o neurólogo tratante indicando la prestación sugerida y frecuencia semanal.'
  },
  {
    id: 'req5',
    title: 'Informes de Rukha Nabi para Presentación',
    detail: 'Nuestro equipo confecciona los planes de tratamiento y presupuestos oficiales solicitados por cada prestadora.'
  }
];
