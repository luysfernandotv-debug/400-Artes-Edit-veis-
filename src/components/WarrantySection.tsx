import React from 'react';
import { ShieldCheck, Sparkles, Award, Star, Check, ChevronRight } from 'lucide-react';

export default function WarrantySection() {
  return (
    <section 
      id="garantia"
      className="relative w-full bg-[#030303] text-white pt-10 sm:pt-14 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background radial gold glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full filter blur-[150px] opacity-10 bg-amber-500/10" />
      </div>

      <div className="w-full max-w-4xl mx-auto z-10 relative flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* LARGE CENTRED PREMIUM WARRANTY SEAL */}
        <div
          className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center group"
        >
          {/* Outer glowing border ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-neutral-900 to-amber-500/30 p-1" />
          
          {/* Inner solid graphite container */}
          <div className="w-[96%] h-[96%] rounded-full bg-[#070707] border border-neutral-800 flex flex-col items-center justify-center p-4 relative shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            
            {/* Subtle background star pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent pointer-events-none" />

            {/* Shield Check Icon - Center piece */}
            <div className="relative">
              <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-amber-500 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]" />
              <div className="absolute inset-0 bg-amber-500/10 blur-[6px] rounded-full opacity-100" />
            </div>

            {/* Seal bottom metric */}
            <span className="text-sm sm:text-base font-mono text-white font-black tracking-[0.2em] uppercase mt-2">
              7 DIAS
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
              Garantido
            </span>

          </div>

          {/* Golden floating particles/stars */}
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-500 rounded-full" />
          <div className="absolute bottom-4 left-2 w-1 h-1 bg-amber-400 rounded-full" />
        </div>

        {/* COPY CONTENT - EXACT COPY COMPLIANCE */}
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
          
          {/* EXACT COPY TÍTULO: GARANTIA */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase leading-none"
          >
            GARANTIA
          </h2>

          {/* EXACT COPY TEXTS: */}
          <div 
            className="space-y-3 sm:space-y-4 font-sans text-neutral-400"
          >
            <p className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Seu investimento está totalmente protegido
            </p>

            <p className="text-lg sm:text-xl font-black text-amber-400 uppercase tracking-wide">
              Você tem 7 dias de garantia incondicional
            </p>

            <p className="text-sm sm:text-base font-medium text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Se por qualquer motivo achar que o Pack não é para você, basta solicitar o reembolso dentro do prazo
            </p>

            {/* Highlight columns representation of Sem Burocracia, Sem Perguntas, Sem Riscos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto pt-3 border-t border-neutral-900">
              {[
                'Sem burocracia.',
                'Sem perguntas.',
                'Sem riscos.'
              ].map((text, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#070707] border border-neutral-800 rounded-xl px-4 py-2.5 flex items-center justify-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-black font-display text-white uppercase tracking-widest whitespace-nowrap">
                    {text.replace('.', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Green CTA Button "Quero Acessar Agora" */}
          <div className="pt-4 sm:pt-5 flex justify-center text-center w-full">
            <a
              href="#escolha-seu-plano"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-black font-mono text-base sm:text-lg uppercase tracking-wider shadow-[0_10px_35px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_45px_rgba(16,185,129,0.7)] transition-all duration-300 cursor-pointer border border-emerald-400/50"
            >
              <span>Quero Acessar Agora</span>
              <ChevronRight className="w-5 h-5 text-neutral-950 stroke-[3]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
