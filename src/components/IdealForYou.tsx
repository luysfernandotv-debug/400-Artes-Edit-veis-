import React, { useState, useEffect } from 'react';
import { 
  Instagram, Clock, Share2, Sparkles, Trophy, ShieldAlert, Layers, 
  Smartphone, ShieldCheck, Library, Hourglass, Lightbulb, Grid, Play, Pause, RefreshCw, Check,
  ChevronDown, ChevronRight, ArrowDown
} from 'lucide-react';
import { SPORT_SHIELDS, ATHLETE_IMAGES } from '../data/sportAssets';

interface Benefit {
  id: number;
  text: string;
  icon: React.ReactNode;
}

export default function IdealForYou() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);
  const [progress, setProgress] = useState(0);

  const benefits: Benefit[] = [
    {
      id: 1,
      text: "Ter um Instagram muito mais organizado e profissional para o seu Futebol Amador",
      icon: <Instagram className="w-5 h-5 text-amber-500" />
    },
    {
      id: 2,
      text: "Publicar Craque da Rodada, Bola Murcha, Artilharia, Resultados, Classificação, Escalações e muito mais sem perder horas criando artes",
      icon: <Trophy className="w-5 h-5 text-amber-500" />
    },
    {
      id: 3,
      text: "Fazer os jogadores compartilharem mais as publicações da página, aumentando o alcance do seu campeonato",
      icon: <Share2 className="w-5 h-5 text-amber-500" />
    },
    {
      id: 4,
      text: "Dar muito mais destaque para patrocinadores, apoiadores e parceiros",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      id: 5,
      text: "Criar uma identidade visual que realmente valorize o nível da sua resenha ou campeonato",
      icon: <Layers className="w-5 h-5 text-amber-500" />
    },
    {
      id: 6,
      text: "Parar de improvisar uma arte diferente toda semana",
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />
    },
    {
      id: 7,
      text: "Ter modelos profissionais prontos para praticamente todas as publicações do Futebol Amador",
      icon: <Grid className="w-5 h-5 text-amber-500" />
    },
    {
      id: 8,
      text: "Editar tudo de forma extremamente simples pelo Canva Grátis usando apenas o celular ou computador",
      icon: <Smartphone className="w-5 h-5 text-amber-500" />
    },
    {
      id: 9,
      text: "Passar muito mais credibilidade para jogadores, patrocinadores e torcedores que acompanham o seu campeonato",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
    },
    {
      id: 10,
      text: "Ter acesso a uma biblioteca com mais de 400 Artes Editáveis, pronta para ser utilizada durante toda a temporada",
      icon: <Library className="w-5 h-5 text-amber-500" />
    },
    {
      id: 11,
      text: "Economizar horas de trabalho toda semana utilizando artes prontas e profissionais",
      icon: <Hourglass className="w-5 h-5 text-amber-500" />
    },
    {
      id: 12,
      text: "Nunca mais ficar sem ideia do que postar no Instagram do seu time ou campeonato",
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />
    },
    {
      id: 13,
      text: "Manter todas as suas postagens seguindo a mesma identidade visual, transmitindo organização e profissionalismo",
      icon: <Layers className="w-5 h-5 text-amber-500" />
    }
  ];

  // Templates slideshow data for the interactive video on the right
  const videoShowcases = [
    {
      title: "CRAQUE DA RODADA",
      subtitle: "Arte Votada #1",
      color: "#f59e0b",
      accent: "rgba(245, 158, 11, 0.2)",
      shieldIndex: 1,
      athleteIndex: 2
    },
    {
      title: "TABELA ATUALIZADA",
      subtitle: "Arte Votada #2",
      color: "#3b82f6",
      accent: "rgba(59, 130, 246, 0.2)",
      shieldIndex: 3,
      athleteIndex: 1
    },
    {
      title: "CONFRONTO DO DIA",
      subtitle: "Arte Votada #3",
      color: "#22c55e",
      accent: "rgba(34, 197, 94, 0.2)",
      shieldIndex: 0,
      athleteIndex: 0
    },
    {
      title: "BOLA MURCHA DA SEMANA",
      subtitle: "Arte Votada #4",
      color: "#ef4444",
      accent: "rgba(239, 68, 68, 0.2)",
      shieldIndex: 2,
      athleteIndex: 3
    }
  ];

  // Playback timer simulating high-end sequential template showcase video
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 200;
    const stepDuration = 3500;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveFrame((prevFrame) => (prevFrame + 1) % videoShowcases.length);
          return 0;
        }
        return prev + (intervalTime / stepDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, videoShowcases.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restartPlay = () => {
    setActiveFrame(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const currentShowcase = videoShowcases[activeFrame];

  return (
    <section 
      id="ideal-para-voce"
      className="relative w-full bg-[#030303] text-white pt-2 pb-12 sm:pt-4 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
      style={{ 
        paddingTop: '8px',
        marginLeft: '0px', 
        marginTop: '0px',
        marginBottom: '0px'
      }}
    >
      <style>{`
        @keyframes goldBorderShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gold-shimmer-card {
          position: relative;
          background: #070707;
          background-clip: padding-box;
          border: 2px solid transparent;
          border-radius: 1rem;
        }
        .gold-shimmer-card::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          z-index: -1;
          background: linear-gradient(90deg, #d4af37, #f3e5ab, #aa7c11, #f3e5ab, #d4af37);
          background-size: 300% 300%;
          border-radius: 1.05rem;
          animation: goldBorderShimmer 6s ease infinite;
          opacity: 0.5;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .gold-shimmer-card:hover::before {
          opacity: 1;
          filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.6));
        }
        .gold-shimmer-card {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), 0 0 10px rgba(212, 175, 55, 0.08);
          transition: all 0.3s ease;
        }
        .gold-shimmer-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 18px rgba(212, 175, 55, 0.25);
        }
      `}</style>
      {/* Golden spotlight ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-5 bg-amber-500" />
        <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-10 bg-amber-500/20" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Grid: Responsive 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* VIDEO CONTAINER (Desktop and Tablet only) */}
          <div className="hidden md:flex lg:col-span-5 space-y-6 order-2 lg:sticky lg:top-24 flex-col" style={{ marginLeft: '0px', marginTop: '0px' }}>
            
            {/* The Video Player Block (Desktop and Tablet) */}
            <div className="hidden md:flex relative w-full aspect-[4/5] bg-[#0c0c0c] border border-neutral-850 rounded-3xl p-1.5 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between">
              
              {/* Header inside the player */}
              <div className="bg-[#111] border-b border-neutral-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400">DEMO • ARTES EM AÇÃO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-amber-500">400+ ARTES</span>
                </div>
              </div>

              {/* Player Body rendering continuous preview with animations */}
              <div className="flex-1 bg-[#050505] relative p-6 flex flex-col justify-between overflow-hidden">
                {/* Dynamic color spotlight based on current slide */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${currentShowcase.accent} 0%, transparent 60%)`
                  }}
                />

                {/* Simulated athlete visual in background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
                  {ATHLETE_IMAGES[currentShowcase.athleteIndex].svg(currentShowcase.color)}
                </div>

                <div className="z-10 flex justify-between items-start">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    {currentShowcase.subtitle}
                  </span>
                  <div className="w-8 h-8 opacity-95">
                    {SPORT_SHIELDS[currentShowcase.shieldIndex].elements(currentShowcase.color)}
                  </div>
                </div>

                <div className="my-auto text-center z-10 space-y-3">
                  <div
                    key={currentShowcase.title}
                    className="space-y-1.5 transition-all duration-300"
                  >
                    <span className="inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-amber-400 border border-neutral-800">
                      CANVA EDITÁVEL
                    </span>
                    <h3 className="text-3xl font-black font-display text-white tracking-tighter leading-none" style={{ color: currentShowcase.color }}>
                      {currentShowcase.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 max-w-xs mx-auto font-sans">
                      Arraste fotos de seus próprios atletas, edite escudos e cores em segundos!
                    </p>
                  </div>
                </div>

                <div className="z-10 flex justify-between items-center text-[8px] font-mono text-neutral-600 border-t border-neutral-900/60 pt-3">
                  <span>PACK PREMIUM VÁRZEA</span>
                  <span>PREVIEW AUTOMÁTICO</span>
                </div>
              </div>

              {/* Progress bar controller */}
              <div className="bg-[#111] p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={togglePlay}
                    className="p-1.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all"
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                  </button>
                  <button 
                    onClick={restartPlay}
                    className="p-1.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-all"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex-1 mx-4 bg-neutral-950 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="text-[10px] font-mono text-neutral-500">
                  0{activeFrame + 1} / 0{videoShowcases.length}
                </span>
              </div>

            </div>

            {/* Mobile Image Carousel removed as requested */}

          </div>

          {/* LEFT COLUMN: Texts & Benefits Grid */}
          <div className="lg:col-span-7 space-y-6 order-1 text-left">
            
            {/* Header titles */}
            <div className="space-y-4">
              {/* EXACT COPY TÍTULO: AS 400 ARTES EDITÁVEIS PARA FUTEBOL AMADOR SÃO IDEAIS PARA VOCÊ QUE DESEJA... */}
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-tight uppercase leading-none"
                style={{ textAlign: 'center', fontSize: '26px' }}
              >
                AS <span style={{ color: '#fbbf24' }}>400 ARTES EDITÁVEIS</span> PARA <span style={{ color: '#22c55e' }}>FUTEBOL</span> AMADOR SÃO IDEAIS PARA VOCÊ QUE DESEJA...
              </h2>

              {/* EXACT COPY TEXTO INTRODUTÓRIO: */}
              <div 
                className="space-y-2 text-neutral-400 font-sans"
              >
                <p className="text-sm sm:text-base font-bold text-white" style={{ textAlign: 'center', fontSize: '15px', marginBottom: '15px' }}>
                  Mais do que economizar tempo, este Pack foi criado para transformar completamente a forma como você organiza e divulga o seu time, campeonato ou torneio
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider flex items-center justify-center gap-2.5" style={{ textAlign: 'center', marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '0px', color: '#ffffff', fontWeight: 'bold', paddingLeft: '0px', paddingRight: '1px', paddingTop: '3px', paddingBottom: '-2px', fontSize: '16px' }}>
                  <ArrowDown className="w-5 h-5 text-emerald-400 stroke-[2.5] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  Com ele, você consegue:
                  <ArrowDown className="w-5 h-5 text-emerald-400 stroke-[2.5] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </p>
              </div>
            </div>

            {/* BENEFITS LIST - Grade de benefícios (Each in an individual card) */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="gold-shimmer-card p-5 flex items-start gap-4 transition-all duration-300 group"
                >
                  {/* Icon wrapper with gold metallic theme details */}
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center justify-center transition-all group-hover:border-amber-500/30">
                    <div className="relative">
                      {benefit.icon}
                      <div className="absolute inset-0 bg-amber-500/10 blur-[4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center min-h-[44px]">
                    {/* EXACT copy checkmark + text */}
                    <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5 text-base sm:text-lg">✔️</span>
                      <span className="text-white text-sm sm:text-base font-medium" style={{ color: '#ffffff', fontSize: '16px' }}>{benefit.text}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Green CTA Button "Quero Acessar Agora" */}
            <div className="mt-8 sm:mt-10 flex justify-center text-center w-full">
              <a
                id="8b05dc28-80de-c7bd-a233-6b746f80fb3f"
                href="#escolha-seu-plano"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="animate-scale-pulse inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-black font-mono text-base sm:text-lg uppercase tracking-wider shadow-[0_10px_35px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_45px_rgba(16,185,129,0.7)] transition-all duration-300 cursor-pointer border border-emerald-400/50"
                style={{ maxWidth: '100%' }}
              >
                <span style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'Outfit' }}>Quero Acessar Agora</span>
                <ChevronRight className="w-5 h-5 text-neutral-950 stroke-[3]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
