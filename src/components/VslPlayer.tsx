import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCw, Sparkles, Check, CheckCircle2, ChevronRight, Upload, Type, Image } from 'lucide-react';
import { SPORT_SHIELDS, THEME_COLORS } from '../data/sportAssets';
import { TeamSettings } from '../types';

interface VslPlayerProps {
  settings: TeamSettings;
  onUpdateSettings?: (updates: Partial<TeamSettings>) => void;
}

export default function VslPlayer({ settings, onUpdateSettings }: VslPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const activeColor = THEME_COLORS[settings.themeColor] || THEME_COLORS.gold;

  // Walkthrough phases
  const steps = [
    {
      title: "1. Escolha a Arte",
      desc: "Navegue por centenas de layouts para Stories, Escalações, Resultados e Classificações.",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />
    },
    {
      title: "2. Troque o Escudo",
      desc: "Substitua o escudo do time em um clique. O software gera os reflexos e cores automaticamente.",
      icon: <Upload className="w-4 h-4 text-amber-400" />
    },
    {
      title: "3. Edite o Nome",
      desc: "Digite o nome do seu clube e campeonato. Os textos se ajustam de forma perfeita no layout.",
      icon: <Type className="w-4 h-4 text-amber-400" />
    },
    {
      title: "4. Altere a Foto",
      desc: "Escolha uma imagem de ação do seu time ou atleta. Filtros esportivos profissionais são aplicados na hora.",
      icon: <Image className="w-4 h-4 text-amber-400" />
    },
    {
      title: "5. Arte Pronta!",
      desc: "Clique em exportar e receba o material em Ultra HD pronto para bombar seu Instagram.",
      icon: <Check className="w-4 h-4 text-emerald-400" />
    }
  ];

  // Auto-advance simulation steps when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            // Loop back or stay at end
            return 0;
          }
          return prev + 1;
        });
      }, 4000); // 4 seconds per step
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentStep === steps.length - 1) {
      setCurrentStep(0);
    }
  };

  const selectStep = (index: number) => {
    setCurrentStep(index);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <div 
      id="vsl-player-container"
      className="w-full max-w-xl mx-auto rounded-3xl bg-[#0f0f0f] border border-neutral-800 p-1 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden"
    >
      {/* Outer framing wrapper */}
      <div className="relative aspect-[16/10] w-full bg-[#080808] rounded-[1.6rem] overflow-hidden group">
        
        {/* Subtle grid pattern for technical theme */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isPlaying ? (
            /* PREPLAY STATE: High-Quality Thumbnail */
            <motion.div 
              key="thumbnail"
              className="absolute inset-0 z-10 flex flex-col justify-between p-6 cursor-pointer"
              onClick={togglePlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background abstract sports overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />
              <div className="absolute inset-0 bg-[#070707] opacity-40 z-0" />
              
              {/* Abstract sports visual elements */}
              <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-20 z-0">
                <svg className="w-full h-full text-gold-500" viewBox="0 0 100 100" fill="none">
                  <path d="M0 100 C40 80, 80 40, 100 0" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M30 10 L80 90" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Tag/Badge at the top */}
              <div className="z-10 flex justify-between items-center w-full">
                <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 bg-neutral-900/90 px-3 py-1.5 rounded-full border border-neutral-800/80">
                  DEMONSTRAÇÃO INTERATIVA
                </span>
                <span className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  30 SEGUNDOS
                </span>
              </div>

              {/* Central Premium Beating Play Button */}
              <div className="z-10 my-auto flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  {/* Glowing auras */}
                  <div className="absolute -inset-4 rounded-full bg-gold-500/20 filter blur-xl animate-pulse group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 opacity-70 animate-ping" />
                  
                  {/* Play Button */}
                  <button 
                    className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-gold-400 to-amber-500 flex items-center justify-center text-black shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95"
                    style={{ boxShadow: `0 0 30px ${activeColor.glow}` }}
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                </div>
                
                <div className="text-center">
                  <h3 className="text-sm font-extrabold font-display tracking-widest text-white uppercase">
                    Veja Como Funciona em Segundos
                  </h3>
                  <p className="text-[10px] text-neutral-400 font-sans mt-0.5 max-w-[280px]">
                    Assista ao criador automatizado processar uma arte esportiva profissional em tempo real.
                  </p>
                </div>
              </div>

              {/* Footer design values */}
              <div className="z-10 w-full flex justify-between items-center text-[8px] font-mono text-neutral-500">
                <span>00:30 • ASSISTIR AGORA</span>
                <span>DESENHADO PARA CONVERSÃO</span>
              </div>
            </motion.div>
          ) : (
            /* ACTIVE PLAYING STATE: Interactive walkthrough editor */
            <motion.div 
              key="video-walkthrough"
              className="absolute inset-0 z-10 bg-[#060606] flex flex-col justify-between p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Walkthrough Header */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <span className="text-[10px] text-amber-400 font-bold font-mono">{currentStep + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-wide leading-none">
                      {steps[currentStep].title}
                    </h4>
                    <span className="text-[8px] text-neutral-500 font-sans block mt-0.5">
                      Editor Automatizado Athleta
                    </span>
                  </div>
                </div>

                {/* Control bar */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={togglePlay}
                    className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-all"
                  >
                    <Pause className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => setCurrentStep(0)}
                    className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-all"
                    title="Restart"
                  >
                    <RotateCw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Central Visualization Chamber */}
              <div className="flex-1 my-3 bg-[#0a0a0a] border border-neutral-900 rounded-xl overflow-hidden relative flex flex-col md:flex-row justify-center items-center p-3 gap-4">
                
                {/* Visual Canvas Demonstration (Left) */}
                <div className="w-[50%] max-w-[140px] aspect-square relative rounded-lg border border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center bg-[#0d0d0d]">
                  
                  {/* Simulated Design Canva rendering dynamically */}
                  {currentStep === 0 && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                      <Sparkles className="w-8 h-8 text-amber-500 animate-pulse mb-1.5" />
                      <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest animate-pulse">Buscando</span>
                      <span className="text-[10px] font-bold text-white uppercase">400+ Modelos</span>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="w-full h-full relative flex items-center justify-center bg-[#070707] p-2">
                      {/* Shield selection animation */}
                      <div className="absolute inset-0 bg-neutral-900/10 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                          animate={{ scale: [0.5, 1.1, 1], rotate: 0, opacity: 1 }}
                          transition={{ duration: 1 }}
                          className="w-12 h-12 mb-1"
                        >
                          {SPORT_SHIELDS[settings.crestIndex].elements(activeColor.primary)}
                        </motion.div>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          ✓ Escudo Atualizado
                        </span>
                      </div>
                      <div className="w-12 h-12 opacity-30">
                        {SPORT_SHIELDS[(settings.crestIndex + 1) % 6].elements('#555')}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#070707] p-2 text-center">
                      <div className="w-8 h-8 opacity-40 mb-1">
                        {SPORT_SHIELDS[settings.crestIndex].elements(activeColor.primary)}
                      </div>
                      {/* Typing simulation */}
                      <div className="bg-black/80 border border-neutral-800 px-2 py-1 rounded text-center">
                        <motion.span 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                          className="text-[9px] font-display font-black uppercase text-white tracking-widest whitespace-nowrap overflow-hidden block border-r border-amber-500 animate-caret"
                        >
                          {settings.teamName || 'GAVIÕES FC'}
                        </motion.span>
                      </div>
                      <span className="text-[7px] font-sans text-neutral-500 mt-2">Ajuste de tamanho inteligente</span>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="w-full h-full relative flex items-center justify-center bg-[#070707] overflow-hidden">
                      {/* Photo Sliding In */}
                      <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0 bg-neutral-900"
                      >
                        <svg className="w-full h-full text-amber-500" viewBox="0 0 100 100" fill="none">
                          <rect width="100" height="100" fill="#111" />
                          <circle cx="50" cy="50" r="30" stroke={activeColor.primary} strokeWidth="1" opacity="0.3" />
                          <path d="M50 20 L50 80 M20 50 L80 50" stroke={activeColor.primary} strokeWidth="0.5" opacity="0.2" />
                        </svg>
                      </motion.div>
                      <div className="z-10 bg-black/60 px-2 py-1 border border-neutral-800 rounded">
                        <span className="text-[8px] font-mono text-amber-400">✓ Filtro Esportivo</span>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="w-full h-full relative flex flex-col items-center justify-center bg-[#050505] p-2 text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-10 h-10 mb-1"
                      >
                        {SPORT_SHIELDS[settings.crestIndex].elements(activeColor.primary)}
                      </motion.div>
                      <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase">Arte Gerada!</span>
                      <span className="text-[7px] font-sans text-neutral-400">Pronta em 4K Ultra HD</span>
                    </div>
                  )}

                </div>

                {/* Conceptual Text Explanation (Right) */}
                <div className="flex-1 text-left flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-mono uppercase tracking-wider mb-1">
                    {steps[currentStep].icon}
                    <span>Passo {currentStep + 1} de 5</span>
                  </div>
                  <h5 className="text-xs font-black text-white uppercase font-display">
                    {steps[currentStep].title}
                  </h5>
                  <p className="text-[10px] text-neutral-400 font-sans mt-1 leading-relaxed max-w-[200px] md:max-w-none">
                    {steps[currentStep].desc}
                  </p>
                </div>

              </div>

              {/* Progress Stepper Bars */}
              <div className="grid grid-cols-5 gap-1 pt-1.5 border-t border-neutral-900">
                {steps.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => selectStep(idx)}
                    className="h-1 rounded-full cursor-pointer relative overflow-hidden transition-colors"
                    style={{ backgroundColor: idx <= currentStep ? '#222' : '#111' }}
                  >
                    {idx === currentStep && (
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="absolute h-full left-0 top-0"
                        style={{ backgroundColor: activeColor.primary }}
                      />
                    )}
                    {idx < currentStep && (
                      <div className="absolute inset-0" style={{ backgroundColor: activeColor.primary }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
