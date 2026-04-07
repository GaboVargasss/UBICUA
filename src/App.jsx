import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Leaf, 
  ShieldCheck, 
  Dna, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Microscope,
  Check, // <- Icono actualizado
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Settings, // <- Icono actualizado
  User,
  MapPin,
  Quote,
  X,
  Globe,
  Camera
} from 'lucide-react';

const injectFonts = () => {
  if (document.getElementById('ubicua-fonts')) return; // Evita duplicados
  const style = document.createElement('style');
  style.id = 'ubicua-fonts';
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Rufina:wght@400;700&display=swap');
    .font-rufina { font-family: 'Rufina', serif; }
    .font-lato { font-family: 'Lato', sans-serif; }
    .bg-ubicua-teal { background-color: #007a8e; }
    .text-ubicua-teal { color: #007a8e; }
    .border-ubicua-teal { border-color: #007a8e; }
    .bg-ubicua-sand { background-color: #b79072; }
    .text-ubicua-sand { color: #b79072; }
    .border-ubicua-sand { border-color: #b79072; }
    .bg-ubicua-pastel-bg { background-color: #f0f5f6; }
    .bg-ubicua-pastel-teal { background-color: #eaf4f5; }
    .bg-ubicua-pastel-sand { background-color: #fbf8f5; }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(style);
};

const whatsappNumber = "59177922259";

const FacebookLogo = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3.6C12.3 2 11 3.3 11 5.1V8H8v4h3v10h4v-10h3.3l.7-4H15V5.5c0-.5.2-1 .8-1z" />
  </svg>
);

const InstagramLogo = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-4.37-4.37" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const programs = [
  {
    id: 'metabolic',
    title: "Metabolic Reset",
    subtitle: "Reprogramación Metabólica y Reducción de Grasa",
    icon: Activity,
    imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Programa de 12 semanas diseñado para regular tu metabolismo, controlar el apetito y reducir la grasa corporal de manera inteligente con péptidos metabólicos.",
    target: "Personas con IMC > 25 y cintura abdominal > 88 cm.",
    objectives: [
      "Reducción de 25% a 35% del peso inicial de forma permanente.",
      "Regular el apetito y mejorar la sensibilidad a la insulina.",
      "Preservar masa muscular mientras se oxida la grasa.",
      "Optimizar la función metabólica celular."
    ],
    phases: [
      { name: "Semana 1-4", title: "Detox & Desinflamación", desc: "Reducción de 3-5kg de inflamación. Inicio de péptidos (Tirzepatida/Retatrutide), plan nutricional y protocolo Biomomenttum." },
      { name: "Semana 5-8", title: "Restauración Metabólica", desc: "Optimización de la quema calórica con seguimiento nutricional y suplementación." },
      { name: "Semana 8-12", title: "Consolidación", desc: "Verificación de resultados y suplementación de mantenimiento." }
    ],
    facts: [
      { text: "Pérdida de peso sostenida superior al 20% en tratamientos guiados.", ref: "Ensayo Clínico SURMOUNT-1, N Engl J Med 2022" },
      { text: "Reversión de la resistencia a la insulina y reducción de HbA1c.", ref: "The Lancet Diabetes & Endocrinology, 2021" },
      { text: "Disminución significativa de la grasa visceral y ectópica.", ref: "Diabetes Care Journal, 2023" }
    ],
    pricing: [
      { id: 'b', name: "Básico", features: ["Medicina Funcional y Nutricionista", "3 sesiones de cámara infrarroja", "Sin suplementación"] },
      { id: 'p', name: "Plus", features: ["Suplementación completa", "Suero de Vitamina C", "10 cámaras infrarrojas", "1 Sesión de Psicología"] },
      { id: 'v', name: "VIP", features: ["Plus + 2 Sueros Lipolíticos", "1 Suero Antioxidante", "24 cámaras infrarrojas", "Psicología continua (3 meses)"] }
    ],
    science: {
      title: "Cómo trabaja Ubicua: Medicina Peptídica",
      text: "Utilizamos agonistas duales y triples de receptores (GLP-1/GIP). Los estudios demuestran que la modulación de estos receptores no solo induce la saciedad a nivel del sistema nervioso central, sino que optimiza el vaciamiento gástrico y revierte la resistencia periférica a la insulina, logrando una composición corporal superior a cualquier dieta tradicional."
    }
  },
  {
    id: 'longevity',
    title: "Longevity Protocol",
    subtitle: "Rejuvenecimiento Celular y Longevidad",
    icon: Dna,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Programa enfocado en rejuvenecimiento celular, optimización hormonal y mejora de la vitalidad, utilizando péptidos regenerativos.",
    target: "Pacientes buscando vitalidad, mejora estética profunda y envejecimiento saludable.",
    objectives: [
      "Mejorar radicalmente la energía, vitalidad y sueño.",
      "Estimular la síntesis endógena de colágeno.",
      "Acción neuroprotectora y disminución de inflamación.",
      "Mejora visible en piel, tejidos y anexos (cabello/uñas)."
    ],
    phases: [
      { name: "Semana 1-4", title: "Detox & Desinflamación", desc: "Desintoxicación hepática e intestinal, protocolo Biomomenttum y control de la inflamación de bajo grado." },
      { name: "Semana 5-8", title: "Rejuvenecimiento Celular", desc: "Estandarización de antioxidantes de mantenimiento, plan de alimentación pro-longevidad." }
    ],
    facts: [
      { text: "Modulación de la senescencia celular y protección telomérica.", ref: "Journal of Biogerontology, 2003" },
      { text: "Aumento en la síntesis de colágeno tipo I y III (Matriz extracelular).", ref: "International Journal of Molecular Sciences, 2018" },
      { text: "Protección neuronal y reducción del deterioro cognitivo asociado a la edad.", ref: "Aging Cell, 2020" }
    ],
    pricing: [
      { id: 'b', name: "Básico", features: ["Consultas médicas y nutricionales", "6 sesiones cámara infrarroja", "Sin sueros"] },
      { id: 'p', name: "Plus", features: ["Suplementación completa", "Suero Vit C + Antioxidante", "10 cámaras infrarrojas", "1 Sesión Mindfulness - Breathwork"] },
      { id: 'v', name: "VIP", features: ["Plus + 2 Sueros Anti-Aging", "1 Suero Antioxidante Extra", "24 cámaras infrarrojas", "Mindfulness avanzado"] }
    ],
    science: {
      title: "Cómo trabaja Ubicua: La Ciencia de la Senescencia",
      text: "El envejecimiento está ligado a la senescencia celular y el acortamiento de telómeros. Los péptidos bioreguladores utilizados interactúan directamente con el ADN, promoviendo la transcripción de proteínas reparadoras, estimulando la matriz extracelular (colágeno/elastina) y regulando los ejes neuroendocrinos para revertir la edad biológica."
    }
  },
  {
    id: 'regeneration',
    title: "Regeneración y Músculo",
    subtitle: "Recuperación, Rendimiento y Salud Articular",
    icon: ShieldCheck,
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Dirigido a la recuperación muscular, articular y de tejidos, ideal para mejorar el rendimiento físico o recuperaciones post-quirúrgicas.",
    target: "Deportistas, pacientes con lesiones crónicas o post-quirúrgicos.",
    objectives: [
      "Aceleración de recuperación muscular y reparación tisular.",
      "Incremento de masa muscular y mejora del rendimiento.",
      "Disminución drástica de dolores articulares (tendinitis).",
      "Mejora de la permeabilidad intestinal y desinflamación global."
    ],
    phases: [
      { name: "Semana 1-4", title: "Control Inflamatorio", desc: "Detoxificación profunda, salud gastrointestinal (Biomomenttum) y fitoterapia antiinflamatoria." },
      { name: "Semana 5-8", title: "Restauración Biológica", desc: "Terapia de péptidos para reparación de tejidos, antioxidantes y nutrición antiinflamatoria." }
    ],
    facts: [
      { text: "Angiogénesis acelerada y formación de nuevos vasos sanguíneos.", ref: "Journal of Applied Physiology, 2011" },
      { text: "Cicatrización tendinosa y reparación de tejido conectivo en un 50% menos de tiempo.", ref: "Journal of Orthopaedic Research, 2010" },
      { text: "Reparación epitelial y reversión de la permeabilidad intestinal.", ref: "Current Pharmaceutical Design, 2014" }
    ],
    pricing: [
      { id: 'b', name: "Básico", features: ["Consultas y seguimiento nutricional", "6 sesiones cámara infrarroja", "Plan antiinflamatorio base"] },
      { id: 'p', name: "Plus", features: ["Suplementación", "Suero Vit C + Antiinflamatorio", "10 cámaras infrarrojas", "1 Sesión Mindfulness"] },
      { id: 'v', name: "VIP", features: ["Plus + 2 Sueros Antiinflamatorios", "1 Antioxidante extra", "24 cámaras infrarrojas", "Terapia complementaria"] }
    ],
    science: {
      title: "Cómo trabaja Ubicua: Angiogénesis Tisular",
      text: "Nuestros protocolos incluyen péptidos con potente actividad angiogénica y moduladora de citoquinas inflamatorias. Estos compuestos reclutan fibroblastos hacia el sitio de la lesión y aceleran la formación de nueva microvasculatura, reduciendo el tiempo de cicatrización en músculos, tendones y ligamentos drásticamente."
    }
  },
  {
    id: 'microbiota',
    title: "Microbiota Activa",
    subtitle: "Sanación Gastrointestinal Profunda",
    icon: Leaf,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Reduce hasta un 70% los malestares digestivos rebalanceando tu microbiota y eliminando la inflamación sistémica desde la raíz.",
    target: "Personas con inflamación intestinal, disbiosis, SIBO, o problemas digestivos.",
    objectives: [
      "Rebalancear la microbiota intestinal y erradicar patógenos.",
      "Limpiar y reparar el tracto digestivo (sellar intestino permeable).",
      "Reducir malestares digestivos crónicos (gases, reflujo, distensión).",
      "Mejorar el eje intestino-cerebro (estado de ánimo y energía)."
    ],
    phases: [
      { name: "Semana 1-4", title: "Detox & Desinflamación", desc: "Fase de remoción de irritantes y reducción de la carga inflamatoria." },
      { name: "Semana 5-8", title: "Limpieza & Restauración", desc: "Regeneración de la mucosa, aportando enzimas y nutrientes esenciales." },
      { name: "Semana 8-12", title: "Re-equilibrio", desc: "Reinoculación de cepas probióticas y consolidación del sistema inmune." }
    ],
    facts: [
      { text: "Restauración de la barrera epitelial y modulación de zonulina.", ref: "Nutrients Journal, 2021" },
      { text: "Reducción significativa de la ansiedad mediante el Eje Intestino-Cerebro.", ref: "Gastroenterology, 2019" },
      { text: "Disminución del 70% de citoquinas proinflamatorias sistémicas.", ref: "Frontiers in Immunology, 2020" }
    ],
    pricing: [
      { id: 'b', name: "Básico", features: ["Plan nutricional personalizado", "6 cámaras infrarrojas", "Análisis de laboratorio base"] },
      { id: 'p', name: "Plus", features: ["Suero Detox + Vitamina C", "Protocolo Salud Gastrointestinal", "12 cámaras infrarrojas", "Mindfulness"] },
      { id: 'v', name: "VIP", features: ["Plus + Terapia Nervio Vago", "Fórmulas Magistrales", "24 cámaras infrarrojas", "Psicología continua"] }
    ],
    science: {
      title: "Cómo trabaja Ubicua: El Eje Intestino-Cerebro",
      text: "La disbiosis intestinal y el 'Leaky Gut' permiten el paso de endotoxinas al torrente sanguíneo, generando inflamación sistémica. Nuestro enfoque integral restaura la barrera epitelial, modula el sistema inmune intestinal (GALT) y estimula el nervio vago para asegurar una digestión, absorción y estado de ánimo óptimos."
    }
  }
];

// --- COMPONENTE PRINCIPAL DEL DASHBOARD ---
function UbicuaDashboard() {
  const initialTiers = {};
  programs.forEach(p => initialTiers[p.id] = p.pricing[1].name);
  
  const [expandedId, setExpandedId] = useState(null);
  const [selectedTiers, setSelectedTiers] = useState(initialTiers);
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null, program: null, tier: null });
  
  const [patientName, setPatientName] = useState("");
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    injectFonts();
  }, []);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  const handleSelectTier = (progId, tierName) => {
    setSelectedTiers(prev => ({ ...prev, [progId]: tierName }));
  };

  const openModal = (type, program = null) => {
    const tier = program ? selectedTiers[program.id] : null;
    setModalConfig({ isOpen: true, type, program, tier });
    setPatientName("");
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null, program: null, tier: null });
  };

  const submitBooking = () => {
    if (!patientName) return;

    let message = "";
    const { type, program, tier } = modalConfig;

    if (type === 'general') {
      message = `Hola, me llamo ${patientName.trim()} y quisiera agendar una evaluación funcional por favor.`;
    } else if (type === 'standard') {
      message = `Hola, mi nombre es ${patientName.trim()}, y quisiera agendar una evaluación funcional para el programa *${program.title}* en la modalidad *${tier}*.`;
    } else if (type === 'custom') {
      message = `Hola, mi nombre es ${patientName.trim()}, y quisiera *Personalizar un nuevo Programa* basado en el ${program.title}.`;
    }

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    closeModal();
  };

  return (
    <div className="min-h-screen bg-ubicua-pastel-bg font-lato text-gray-800 flex flex-col relative">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <img 
              src="/ubicualogoazul.png" 
              alt="UBICUA Logo" 
              className="h-10 md:h-14 w-auto object-contain" 
            />
            <p className="text-[0.6rem] tracking-[0.2em] text-gray-500 font-bold mt-0">DRA. LOLITA VARGAS</p>
            <p className="text-[0.55rem] tracking-widest text-ubicua-sand uppercase mt-0">Medicina Funcional Integrativa</p>
          </div>
          <button 
            onClick={() => openModal('general')}
            className="flex items-center gap-2 bg-ubicua-teal text-white px-5 py-2.5 rounded-full hover:bg-[#005a69] transition-colors shadow-md text-sm font-bold"
          >
            <Calendar size={18} />
            <span className="hidden md:inline">Agendar Evaluacion Funcional</span>
          </button>
        </div>
      </header>

      <div className="bg-ubicua-teal text-white py-16 px-4 relative overflow-hidden flex-shrink-0 shadow-lg">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Activity size={400} className="-mr-20 -mt-20 transform rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-rufina font-bold mb-6 leading-tight">
            Transforma tu salud desde la raíz
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto opacity-90">
            Programas integrales de medicina funcional diseñados para restaurar tu equilibrio biológico, metabólico y estético de forma permanente.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl inline-block shadow-lg">
            <p className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Sparkles className="text-ubicua-sand" size={20} />
              <span>Reserva hoy tu <strong>Sesión de Evaluacion Funcional</strong>. ¡Empieza ahora con la mente y el físico que siempre soñaste!</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20 w-full">
        <div className="bg-[#0c1e3e] bg-opacity-[0.04] p-4 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-md border border-[#0c1e3e]/5 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {programs.map((prog) => {
              const Icon = prog.icon;
              const isExpanded = expandedId === prog.id;
              const currentTier = selectedTiers[prog.id];

              return (
                <div 
                  key={prog.id} 
                  className={`bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-white
                  ${isExpanded ? 'ring-4 ring-ubicua-teal ring-opacity-20 lg:col-span-2' : 'hover:shadow-2xl hover:-translate-y-1'}`}
                >
                  <div className="cursor-pointer" onClick={() => toggleExpand(prog.id)}>
                    
                    {isExpanded && (
                      <div className="w-full h-56 md:h-72 relative overflow-hidden flex items-end">
                        <img src={prog.imageUrl} className="absolute inset-0 w-full h-full object-cover" alt={prog.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>
                        <div className="relative z-10 p-8 w-full">
                           <div className="flex items-center gap-3 mb-2">
                              <div className="bg-ubicua-teal p-2 rounded-lg text-white">
                                 <Icon size={24} />
                              </div>
                              <h3 className="text-3xl md:text-4xl font-rufina font-bold text-white tracking-wide">{prog.title}</h3>
                           </div>
                           <p className="font-lato font-light text-gray-200 max-w-2xl text-sm md:text-base">{prog.shortDesc}</p>
                        </div>
                      </div>
                    )}

                    {!isExpanded && (
                      <div className="p-8 pb-6">
                        <div className="flex items-start justify-between">
                          
                          <div className="flex items-center gap-5">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                              <img src={prog.imageUrl} className="w-full h-full object-cover rounded-2xl shadow-sm border border-gray-100" alt={prog.title} />
                              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-md border border-gray-50 text-ubicua-teal">
                                <Icon size={20} />
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Programa Integral</p>
                              <h3 className="text-2xl md:text-3xl font-rufina font-bold text-gray-900">{prog.title}</h3>
                            </div>
                          </div>

                          <button className="text-gray-400 hover:text-ubicua-teal transition-colors mt-2">
                            <ChevronDown size={28} />
                          </button>
                        </div>
                        
                        <p className="mt-6 text-ubicua-teal font-bold">{prog.subtitle}</p>
                        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{prog.shortDesc}</p>
                        
                        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Modalidades</p>
                            <p className="text-xl font-bold text-gray-900">Básico, Plus, VIP</p>
                          </div>
                          <span className="text-ubicua-sand font-bold flex items-center gap-1 hover:text-[#b79072] transition-colors bg-ubicua-pastel-sand px-4 py-2 rounded-full">
                            Ver detalles <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`transition-all duration-700 ease-in-out bg-white ${isExpanded ? 'opacity-100 max-h-[5000px]' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-8 border-t border-gray-100">
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                          <h4 className="text-lg font-rufina font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Check size={20} className="text-ubicua-sand" />
                            Objetivos Médicos
                          </h4>
                          <ul className="space-y-3 mb-8">
                            {prog.objectives.map((obj, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 bg-ubicua-pastel-sand p-3 rounded-xl border border-white shadow-sm">
                                <div className="mt-1 w-2 h-2 rounded-full bg-ubicua-teal shrink-0"></div>
                                {obj}
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-rufina font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Clock size={20} className="text-ubicua-sand" />
                            Fases del Tratamiento
                          </h4>
                          <div className="space-y-4">
                            {prog.phases.map((phase, idx) => (
                              <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-ubicua-sand"></div>
                                <div className="flex-1 pl-2">
                                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-ubicua-teal bg-ubicua-pastel-teal px-2 py-0.5 rounded-full uppercase tracking-wide">{phase.name}</span>
                                    <span className="font-bold text-gray-800 text-sm">{phase.title}</span>
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">{phase.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-rufina font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen size={20} className="text-ubicua-sand" />
                            Respaldos Médicos Reales
                          </h4>
                          <div className="space-y-4 mb-8">
                            {prog.facts.map((fact, idx) => (
                              <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-3 hover:border-ubicua-teal transition-colors">
                                <div className="text-ubicua-teal mt-0.5"><Activity size={18}/></div>
                                <div>
                                  <p className="text-sm font-bold text-gray-800 mb-1">{fact.text}</p>
                                  <p className="text-xs text-gray-400 italic font-medium">Ref: {fact.ref}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="relative bg-ubicua-pastel-teal rounded-3xl p-8 border border-white shadow-sm overflow-hidden">
                            <div className="absolute -top-4 -right-4 text-ubicua-teal opacity-10">
                              <Microscope size={120} />
                            </div>
                            <div className="absolute top-6 right-6 text-ubicua-teal opacity-30">
                              <Quote size={40} />
                            </div>
                            <h4 className="text-xl font-rufina font-bold text-ubicua-teal mb-4 flex items-center gap-2 relative z-10">
                              {prog.science.title}
                            </h4>
                            <p className="text-sm text-gray-800 leading-relaxed font-medium relative z-10">
                              {prog.science.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 bg-ubicua-pastel-bg rounded-3xl p-8 border border-gray-100 shadow-inner">
                        <h4 className="text-xl font-rufina font-bold text-gray-900 mb-6 text-center">Selecciona tu Modalidad de Inversión</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {prog.pricing.map((tier) => {
                            const isSelected = currentTier === tier.name;
                            return (
                              <div 
                                key={tier.id}
                                onClick={() => handleSelectTier(prog.id, tier.name)}
                                className={`relative cursor-pointer transition-all duration-300 rounded-3xl p-6 flex flex-col
                                  ${isSelected 
                                    ? 'border-2 border-ubicua-teal shadow-xl bg-white transform -translate-y-2' 
                                    : 'border border-gray-200 hover:border-ubicua-sand hover:shadow-md bg-white opacity-80 hover:opacity-100'}`}
                              >
                                {isSelected && (
                                  <div className="absolute -top-3 -right-3 bg-ubicua-teal text-white p-1.5 rounded-full shadow-md">
                                    <Check size={20} />
                                  </div>
                                )}
                                
                                <p className={`text-xl font-bold uppercase tracking-widest mb-6 ${isSelected ? 'text-ubicua-teal' : 'text-gray-400'}`}>
                                  Modalidad {tier.name}
                                </p>
                                
                                <ul className="flex-grow space-y-3">
                                  {tier.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <div className="mt-1 text-ubicua-sand shrink-0"><Check size={14} /></div>
                                      <span className={isSelected ? 'font-medium text-gray-800' : ''}>{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4">
                          <p className="text-center text-lg text-gray-700 font-medium italic">
                            Si quieres saber más sobre la modalidad <span className="font-bold text-ubicua-teal">"{currentTier}"</span>...
                          </p>
                          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                            <button 
                              onClick={(e) => { e.stopPropagation(); openModal('standard', prog); }}
                              className="w-full md:w-auto flex items-center justify-center gap-2 bg-ubicua-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#005a69] hover:shadow-lg transition-all"
                            >
                              <Calendar size={22} />
                              ¡AGENDA YA TU EVALUACIÓN FUNCIONAL!
                            </button>
                            
                            <button 
                              onClick={(e) => { e.stopPropagation(); openModal('custom', prog); }}
                              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-ubicua-sand border-2 border-ubicua-sand px-8 py-3.5 rounded-full font-bold hover:bg-ubicua-sand hover:text-white transition-all shadow-sm"
                            >
                              <Settings size={20} />
                              Personalizar Programa
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-center mt-6">
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleExpand(prog.id); }}
                            className="text-gray-400 hover:text-ubicua-teal inline-flex flex-col items-center gap-1 transition-colors"
                          >
                             <span className="text-xs uppercase font-bold tracking-widest">Ocultar Detalles</span>
                             <ChevronUp size={24} />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      <footer className="bg-[#111827] text-white pt-8 pb-8 px-4 sm:px-6 lg:px-8 border-t-4 border-ubicua-sand relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 opacity-5">
          <Activity size={300} />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/ubicualogocafe.png" 
              alt="UBICUA Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
            <p className="text-[0.65rem] tracking-[0.2em] text-gray-400 font-bold mt-1 mb-4">DRA. LOLITA VARGAS</p>
            
            <div className="w-24 h-24 md:w-28 md:h-28 mt-0 mb-1 rounded-full overflow-hidden border-2 border-ubicua-sand shadow-lg flex-shrink-0 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setImageModalOpen(true)}>
              <img 
                src="/yoyis.jpeg" 
                alt="Dra. Lolita Vargas" 
                className="w-full h-full object-cover" 
              />
            </div>

            <p className="text-sm text-gray-400 mt-2 text-center md:text-left leading-relaxed">
              Medicina Funcional Integrativa enfocada en la sanación real. Cada recomendación está respaldada por ciencia, formación académica, ética y un propósito profundo.
              <br/><br/>
              <strong>Especialización en:</strong><br/>
              Medicina funcional Integrativa<br/>
              Salud digestiva y Microbiota intestinal<br/>
              Bioneuroemoción
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-rufina font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 w-full text-center md:text-left">Contacto Directo</h4>
            <div className="space-y-4 w-full text-center md:text-left">
              
              <a href="https://maps.app.goo.gl/eh2LPa1qzQXBhwiZ9?g_st=iw" target="_blank" rel="noreferrer" className="flex items-start justify-center md:justify-start gap-3 text-sm text-gray-400 hover:text-ubicua-sand transition-colors group">
                <MapPin size={20} className="text-ubicua-sand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" /> 
                <span className="text-left">
                  Calle Melchor Urquidi y Buenos Aires<br/>
                  Edificio Torres de la Unión, Piso 4<br/>
                  Cochabamba, Bolivia
                </span>
              </a>

              <div className="flex gap-4 pt-2 justify-center md:justify-start">
                <a href="https://www.facebook.com/share/1Mfyp4JdXg/" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-ubicua-sand hover:bg-gray-700 transition-all shadow-sm">
                  <FacebookLogo size={20} />
                </a>
                <a href="https://www.instagram.com/ubicuamedicina?igsh=MWc3ZWNtY3Y4Z2Y4cQ==" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-ubicua-sand hover:bg-gray-700 transition-all shadow-sm">
                  <InstagramLogo size={20} />
                </a>
              </div>
              
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-rufina font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 w-full text-center md:text-left">Horarios de Atención</h4>
            <ul className="text-sm text-gray-400 w-full max-w-[240px]">
              <li className="flex justify-between py-1.5 border-b border-gray-800">
                <span className="font-bold text-gray-300">Lunes</span><span>08:15 - 13:15</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-gray-800">
                <span className="font-bold text-gray-300">Martes</span><span>14:30 - 19:00</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-gray-800">
                <span className="font-bold text-gray-300">Miércoles</span><span>08:15 - 13:15</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-gray-800">
                <span className="font-bold text-gray-300">Jueves</span><span>14:30 - 19:00</span>
              </li>
              <li className="flex justify-between py-1.5 border-b border-gray-800">
                <span className="font-bold text-gray-300">Viernes</span><span>08:15 - 13:15</span>
              </li>
              <li className="flex justify-between py-1.5 text-gray-500 mt-1">
                <span className="font-bold">Sáb y Dom</span><span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 relative z-10">
          <p>© {new Date().getFullYear()} UBICUA - Dra. Lolita Vargas. Todos los derechos reservados.</p>
          <p>Medicina Ética y Científica</p>
        </div>
      </footer>

      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="bg-ubicua-teal text-white p-6 relative flex-shrink-0">
              <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-rufina font-bold pr-8">
                {modalConfig.type === 'custom' ? 'Personalizar Programa' : 'Agendar Evaluacion Funcional'}
              </h3>
              {modalConfig.program && (
                <p className="text-sm mt-1 opacity-90 font-light">
                  {modalConfig.program.title} {modalConfig.type === 'standard' && `• Modalidad ${modalConfig.tier}`}
                </p>
              )}
            </div>

            <div className="p-6 overflow-y-auto hide-scrollbar flex-grow bg-ubicua-pastel-bg">
              
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <User size={16} className="text-ubicua-sand"/> ¿Cuál es tu nombre?
                </label>
                <input 
                  type="text" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ej. María Pérez"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ubicua-teal focus:ring-2 focus:ring-ubicua-teal focus:ring-opacity-20 outline-none transition-all shadow-sm"
                />
              </div>

            </div>

            <div className="p-6 border-t border-gray-100 bg-white flex-shrink-0">
              <button 
                onClick={submitBooking}
                disabled={!patientName}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar por WhatsApp <ArrowRight size={20} />
              </button>
              <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                <ShieldCheck size={12}/> Serás redirigido a la línea segura de Ubicua.
              </p>
            </div>

          </div>
        </div>
      )}

      {imageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity" onClick={() => setImageModalOpen(false)}>
          <div className="relative max-w-md max-h-[80vh] mx-auto">
            <button onClick={() => setImageModalOpen(false)} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors">
              <X size={32} />
            </button>
            <img 
              src="/yoyis.jpeg" 
              alt="Dra. Lolita Vargas" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </div>
  );
}

// --- ESCUDO CONTRA ERRORES ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-red-600 bg-red-50 min-h-screen font-lato">
          <h1 className="text-3xl font-bold mb-4">Ups, algo bloqueó la página:</h1>
          <p className="mb-4">Por favor, envíame este error para que lo solucione al instante:</p>
          <pre className="bg-black text-green-400 p-4 rounded overflow-auto text-sm">
            {this.state.error && this.state.error.toString()}
            <br /><br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function AppWrapper() {
  return (
    <ErrorBoundary>
      <UbicuaDashboard />
    </ErrorBoundary>
  );
}