import React, { useState, useRef, useEffect } from 'react';
import { 
  Folder, Smartphone, Laptop, Tablet, LayoutGrid, Award, Shield, Users, 
  Tv, Instagram, FileText, Gift, Bookmark, ArrowRight, ArrowLeft, Star, Sparkles, Check, CheckCircle, CheckCircle2
} from 'lucide-react';
import { SPORT_SHIELDS, ATHLETE_IMAGES } from '../data/sportAssets';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  templatesCount: number;
  description: string;
  items: {
    title: string;
    description: string;
    type: 'feed' | 'story' | 'banner';
    tag: string;
    shieldIndex: number;
    athleteIndex: number;
    accent: string;
  }[];
}

export default function WhatYouWillReceive() {
  const [activeCategory, setActiveCategory] = useState<string>('feeds');
  const [imgError, setImgError] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: 'feeds',
      name: 'Feed do Instagram',
      icon: <Instagram className="w-4 h-4" />,
      templatesCount: 150,
      description: 'Formatos quadrados e verticais de alto engajamento para alimentar o feed do seu time diariamente',
      items: []
    },
    {
      id: 'stories',
      name: 'Stories Interativos',
      icon: <Smartphone className="w-4 h-4" />,
      templatesCount: 120,
      description: 'Aumente o engajamento com enquetes, lembretes de transmissão e cronômetros de contagem regressiva',
      items: []
    },
    {
      id: 'competicoes',
      name: 'Estatísticas & Rodadas',
      icon: <Award className="w-4 h-4" />,
      templatesCount: 80,
      description: 'Tabelas completas de pontuação, artilharia, cartões e cronograma de jogos da competição',
      items: []
    },
    {
      id: 'comunicados',
      name: 'Marketing & Eventos',
      icon: <FileText className="w-4 h-4" />,
      templatesCount: 50,
      description: 'Modelos profissionais para rifas, sorteios, comunicados de treinos, avisos oficiais e capas',
      items: []
    }
  ];

  const activeCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="tudo-o-que-voce-vai-receber"
      className="relative w-full bg-[#ffffff] text-neutral-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden"
      style={{ marginTop: '-12px', paddingTop: '24px' }}
    >
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full filter blur-[150px] opacity-15 bg-emerald-200/50" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-15 bg-blue-200/50" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          {/* EXACT COPY TÍTULO: TUDO O QUE VOCÊ VAI RECEBER */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-normal text-neutral-950 uppercase mx-auto mt-4 sm:mt-6"
            style={{ fontFamily: 'Arial, sans-serif', fontSize: '32px', lineHeight: '29px', fontWeight: '900' }}
          >
            TUDO O QUE VOCÊ <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 font-black">VAI RECEBER</span>
          </h2>

          {/* EXACT COPY TEXTO */}
          <p 
            className="text-neutral-900 w-full max-w-2xl mx-auto mt-3 font-bold"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '22px',
              lineHeight: '22px',
              fontWeight: 'bold',
              borderColor: '#000000'
            }}
          >
            Mais de 400 artes editáveis para cuidar de todo o Instagram do seu futebol amador
          </p>

          {/* User Showcase Image */}
          <div className="pt-3 pb-2 flex justify-center max-w-2xl mx-auto px-4">
            <img 
              src="https://i.ibb.co/1GMFTX4J/Decorative-Square-Frame-Initials-Logo-4-1.jpg" 
              alt="Mais de 400 artes editáveis" 
              className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-neutral-200 object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          {/* Premium Solid Green Deliverables Checklist Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 max-w-4xl mx-auto pt-6 pb-2 px-2"
            style={{ marginTop: '-10px' }}
          >
            {[
              "Mais de 400 Artes Editáveis",
              "Artes para Competições",
              "Artes para Classificação",
              "Artes para Mata-mata",
              "Artes para Resultados",
              "Artes para Escalações",
              "Artes para Craque da Rodada",
              "Artes para Bola Murcha",
              "Artes para Time da Rodada",
              "Artes para Artilharia",
              "Artes para Goleiros",
              "Artes para Patrocinadores",
              "Artes para Sorteios e Rifas",
              "Artes para Stories",
              "Artes para Feed do Instagram",
              "Artes para Identidade Visual",
              "Capas para Destaques",
              "Foto de Perfil",
              "Logos Editáveis",
              "Pack Campeonato Completo",
              "Pack Champions League da Várzea",
              "Pack Goleiro",
              "Pack Identidade Visual para Instagram",
              "Atualizações Futuras (Plano Completo)",
              "Acesso Vitalício (Plano Completo)",
              "Área de Membros Organizada",
              "Aulas de Edição",
              "Edição pelo Celular ou Computador"
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center gap-3 transition-all duration-200 hover:scale-[1.01]"
                style={{
                  backgroundColor: '#059669',
                  border: '2px solid #34d399',
                  boxShadow: '0 8px 20px -4px rgba(5, 150, 105, 0.35)'
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <CheckCircle 
                    style={{ 
                      color: '#ffffff', 
                      width: '22px', 
                      height: '22px'
                    }} 
                  />
                </div>
                <span 
                  className="uppercase tracking-wider text-white font-bold text-left"
                  style={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    lineHeight: '1.4'
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>



        {/* Categories Vertical Sequence */}
        <div className="space-y-16 -mt-6 sm:-mt-10">
          {categories.filter(category => category.items.length > 0).map((category) => (
            <div 
              key={category.id} 
              id={`category-${category.id}`} 
              className="space-y-6 scroll-mt-24 text-left border-t border-neutral-200 pt-10 first:border-none first:pt-0"
            >
              {/* Category Info Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {category.icon}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {category.templatesCount} ARTES EDITÁVEIS
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-neutral-900 mt-1">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-2xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Categorized templates horizontal track */}
              <div className="relative w-full overflow-hidden">
                <div 
                  className="w-full flex gap-4 sm:gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-1 touch-pan-x"
                >
                  {category.items.map((item, idx) => (
                    <div
                      key={`${category.id}-${idx}`}
                      className="min-w-[85vw] sm:min-w-[310px] max-w-[320px] bg-white border border-neutral-200 rounded-3xl p-5 flex flex-col justify-between snap-start hover:border-emerald-300 hover:shadow-lg transition-all group shrink-0"
                    >
                      {/* Category Card Header */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                          {item.tag}
                        </span>
                        <div className="w-7 h-7">
                          {SPORT_SHIELDS[item.shieldIndex].elements(item.accent)}
                        </div>
                      </div>

                      {/* High Quality Visual Graphic Preview Box */}
                      <div className="w-full aspect-square bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center relative overflow-hidden mb-4">
                        
                        {/* Athlete SVG representation */}
                        <div className="absolute inset-0 opacity-15 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                          {ATHLETE_IMAGES[item.athleteIndex].svg(item.accent)}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                        <div className="z-10 text-center p-4">
                          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                            PREVIEW ARTE
                          </span>
                          <h4 className="text-sm font-black font-display tracking-tight text-white uppercase mt-1" style={{ color: item.accent }}>
                            {item.title}
                          </h4>
                        </div>

                        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-neutral-500 uppercase">
                          4K Ultra Res
                        </div>
                      </div>

                      {/* Title & Support */}
                      <div className="space-y-1.5 text-left">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                          {item.title}
                        </h4>
                        <p className="text-[10px] font-sans text-neutral-600 leading-normal">
                          {item.description}
                        </p>
                      </div>

                      {/* Accent bottom line */}
                      <div className="w-full h-1 bg-neutral-100 rounded-full mt-4 overflow-hidden">
                        <div className="h-full w-[35%] rounded-full" style={{ backgroundColor: item.accent }} />
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLEMENTARY MOCKUPS GRID (Dozens of high-res mockups grouped beautifully) */}
        <div 
          className="pt-12 border-t border-neutral-200"
          style={{ marginTop: '-48px' }}
        >
          <div className="text-center mb-10 max-w-2xl mx-auto space-y-2">
            <style>{`
              .blue-glow-text {
                background: linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
              }
            `}</style>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-normal text-neutral-950 uppercase mx-auto"
              style={{ fontFamily: 'Arial, sans-serif', fontSize: '33px', lineHeight: '31px', fontWeight: '900' }}
            >
              UMA ÁREA DE MEMBROS FEITA PARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 font-black">FACILITAR AS DIVULGAÇÕES</span>
            </h3>
            <p 
              className="font-bold font-sans"
              style={{ color: '#000000', fontSize: '22px', lineHeight: '21px' }}
            >
              Artes organizadas por categorias + videoaulas para você aprender a editar, personalizar e usar seus materiais com facilidade
            </p>
          </div>

          {/* Interactive Bento Box Layout displaying mockup varieties */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1 (12 cols): Premium Member Area Showcase */}
            <div className="md:col-span-12 bg-white border border-blue-500/30 shadow-[0_10px_30px_rgba(37,99,235,0.1)] rounded-3xl p-0 relative overflow-hidden flex items-center justify-center group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_16px_40px_rgba(37,99,235,0.18)]">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full filter blur-[120px] opacity-15 bg-blue-400 pointer-events-none" />

              {/* Image presentation container */}
              <div className="w-full flex justify-center items-center relative overflow-hidden rounded-3xl">
                {!imgError ? (
                  <img 
                    src="https://i.ibb.co/5x9txjjt/Design-sem-nome-1.jpg" 
                    alt="Área de Membros" 
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgError(true)}
                    className="w-full h-auto block object-cover rounded-3xl shadow-xl transition-all duration-500 group-hover:scale-[1.01]"
                  />
                ) : (
                  <div className="w-full bg-neutral-900 border border-blue-500/30 rounded-2xl p-4 sm:p-8 flex flex-col gap-6 shadow-2xl text-left">
                    {/* Mockup Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                          <LayoutGrid className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-white tracking-wide uppercase">Área de Membros VIP</h4>
                          <span className="text-xs text-blue-400 font-mono">400+ Artes Editáveis no Canva</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 uppercase">
                          Acesso Liberado
                        </span>
                      </div>
                    </div>

                    {/* Mockup Content Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: 'Feed Instagram', count: '150 Artes', color: '#3b82f6', tag: 'Pack Principal' },
                        { title: 'Stories Interativos', count: '120 Artes', color: '#8b5cf6', tag: 'Engajamento' },
                        { title: 'Campeonatos', count: '80 Artes', color: '#10b981', tag: 'Tabelas & Jogos' },
                        { title: 'Identidade Visual', count: '50 Artes', color: '#f59e0b', tag: 'Logos & Capas' }
                      ].map((card, idx) => (
                        <div key={idx} className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 flex flex-col justify-between gap-3 hover:border-blue-500/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">{card.tag}</span>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-white uppercase">{card.title}</h5>
                            <span className="text-xs text-neutral-400 font-mono">{card.count}</span>
                          </div>
                          <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: card.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
}
