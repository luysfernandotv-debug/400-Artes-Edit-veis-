import React from 'react';
import { Check, Shield, Crown, Zap, Trophy, Sparkles, ChevronDown, Tag } from 'lucide-react';

export default function PricingSection() {
  return (
    <section 
      id="escolha-seu-plano"
      className="relative w-full bg-[#ffffff] text-neutral-900 pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden"
      style={{ marginTop: '-20px' }}
    >
      <style>{`
        .gold-border-icon {
          background: linear-gradient(#ffffff, #ffffff) padding-box,
                      linear-gradient(120deg, #d4af37, #fff6d1, #aa7c11, #fff6d1, #d4af37) border-box !important;
          border: 2.5px solid transparent !important;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.2) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
        }
        .premium-gold-card {
          background: linear-gradient(#ffffff, #ffffff) padding-box,
                      linear-gradient(120deg, #d4af37, #fef08a, #b45309, #fef08a, #d4af37) border-box !important;
          border: 3px solid transparent !important;
        }
      `}</style>
      
      {/* Golden metallic spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-[40%] h-[40%] rounded-full filter blur-[150px] opacity-20 bg-amber-200" />
        <div className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] rounded-full filter blur-[160px] opacity-20 bg-blue-100" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 border border-amber-400/80 rounded-full pl-1.5 pr-3.5 py-1 text-[9px] font-mono uppercase tracking-[0.15em] shadow-sm"
          >
            <div
              className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-none"
            >
              <Crown className="w-3 h-3 text-white fill-white" />
            </div>
            <span style={{ color: '#78350f', fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '11px', letterSpacing: '0.05em' }}>
              Condição Especial de Lançamento
            </span>
          </div>

          {/* EXACT COPY TÍTULO: ESCOLHA SEU PLANO */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-950 uppercase leading-none"
            style={{ fontSize: '52px', lineHeight: '43px' }}
          >
            ESCOLHA SEU PLANO
          </h2>

          {/* EXACT COPY SUBTÍTULO: Escolha a opção ideal para você */}
          <p 
            className="text-base sm:text-lg font-bold font-sans"
            style={{ fontSize: '21px', color: '#000000', borderColor: '#000000' }}
          >
            Escolha a opção ideal para você
          </p>
        </div>

        {/* PLANS GRID CONTAINER */}
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start px-2 sm:px-4">
          
          {/* COLUMN 1 - PLANO BÁSICO + DESTAQUE */}
          <div className="flex flex-col space-y-4">
            {/* CARD 01 - PLANO BÁSICO */}
            <div
              className="bg-white border-[3px] border-blue-600 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden shadow-[0_12px_40px_rgba(37,99,235,0.18)] hover:border-blue-700 hover:shadow-[0_18px_50px_rgba(37,99,235,0.25)] h-full"
            >
              <div className="space-y-6">
                <div className="flex justify-center items-center text-center w-full">
                  <h3 
                    className="text-4xl sm:text-5xl font-black font-display text-blue-600 uppercase tracking-tight mt-1 text-center"
                    style={{ fontWeight: '900' }}
                  >
                    PLANO BÁSICO
                  </h3>
                </div>

                {/* MOCKUP GRANDE DO PRODUTO (PLANO BÁSICO) */}
                <div className="w-full flex items-center justify-center relative my-4 p-0 overflow-hidden">
                  <img 
                    src="https://i.ibb.co/HLNh3k4V/1-1.png" 
                    alt="Mockup Plano Básico" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain relative z-10 scale-105 sm:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BLOCO VOCÊ RECEBE */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <span className="text-xs sm:text-sm font-black font-mono text-white uppercase tracking-widest bg-blue-600 border border-blue-700 px-5 py-2 rounded-xl shadow-md flex items-center gap-2.5 justify-center">
                      <span className="text-amber-300 font-bold text-sm inline-block">
                        ↓
                      </span>
                      <span>VOCÊ RECEBE</span>
                      <span className="text-amber-300 font-bold text-sm inline-block">
                        ↓
                      </span>
                    </span>
                  </div>
                  
                  {/* LISTA DE BENEFÍCIOS */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-4 h-4 text-white stroke-[3.5]" />
                      </div>
                      <span 
                        className="text-base sm:text-lg text-neutral-900 font-bold"
                        style={{ fontSize: '15px', lineHeight: '23px' }}
                      >
                        400 Artes Editáveis para Futebol Amador
                      </span>
                    </div>
                  </div>
                </div>

                {/* SEPARADOR DISCRETO */}
                <div className="border-t-2 border-blue-300 my-4" />

                {/* BLOCO DE PREÇO */}
                <div className="py-2 text-center flex flex-col items-center justify-center space-y-1.5">
                  <span className="text-base sm:text-lg text-black font-mono block text-center font-bold">
                    De <span className="text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 47,90</span> por apenas:
                  </span>
                  <div className="flex items-baseline justify-center gap-1 my-1">
                    <span className="text-6xl sm:text-7xl font-black font-display text-center tracking-tight text-emerald-600">
                      <span>R$ </span>
                      <span>19,90</span>
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 border border-emerald-700 text-xs sm:text-sm font-black font-mono text-white mt-1 shadow-md">
                    <Tag className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>Você economiza R$ 27,10</span>
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="pt-6">
                <a
                  href="https://pay.lowify.com.br/checkout?product_id=4B6Boe"
                  className="w-full inline-flex items-center justify-center gap-2 text-center font-black font-mono uppercase tracking-[0.1em] text-white bg-blue-600 hover:bg-blue-700 px-5 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-[0_4px_18px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.5)] border border-blue-500 cursor-pointer"
                >
                  <span style={{ fontSize: '20px', lineHeight: '25px' }}>QUERO SOMENTE O BÁSICO</span>
                </a>
                <span className="block text-center text-xs sm:text-sm font-mono text-emerald-600 uppercase tracking-wider mt-3 font-bold">
                  Acesso Imediato • Seguro
                </span>
              </div>
            </div>

            {/* BLOCO DE DESTAQUE "92% DAS PESSOAS APROVEITAM A OFERTA ABAIXO:" */}
            <div
              className="w-full bg-[#dc2626] border-2 border-red-600 rounded-2xl p-4 sm:p-5 text-center shadow-[0_8px_25px_rgba(220,38,38,0.3)] flex flex-col items-center justify-center relative overflow-hidden"
            >
              <p 
                className="text-white font-extrabold leading-snug tracking-tight font-sans text-center"
                style={{ fontSize: '18px', lineHeight: '24px' }}
              >
                92% das pessoas aproveitam a<br />
                oferta abaixo:
              </p>
              <div
                className="mt-2 flex items-center justify-center"
              >
                <ChevronDown 
                  className="text-yellow-300 stroke-[3.5]" 
                  style={{ width: '20px', height: '20px', fontSize: '20px' }}
                />
              </div>
            </div>
          </div>

          {/* CARD 02 - PLANO COMPLETO */}
          <div
            className="bg-white border-[4px] border-amber-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-[0_16px_45px_rgba(245,158,11,0.25)] hover:border-amber-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.35)] scale-100 md:scale-105 mt-6 sm:mt-0 pt-8 sm:pt-9 h-full"
          >
            {/* Badge "MAIS VENDIDO" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 font-black text-xs sm:text-sm font-mono px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.4)] border-2 border-yellow-200 tracking-[0.12em] uppercase whitespace-nowrap">
                MAIS VENDIDO
              </span>
            </div>

            {/* Visual spotlight backglow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 via-transparent to-yellow-100/40 pointer-events-none rounded-3xl" />

            <div className="space-y-6">
              <div className="flex justify-center items-center text-center w-full">
                <h3 
                  className="text-4xl sm:text-5xl font-black font-display text-amber-500 uppercase tracking-tight mt-1 text-center"
                  style={{ fontWeight: '900', fontSize: '42px', lineHeight: '38px' }}
                >
                  PLANO COMPLETO
                </h3>
              </div>

              {/* MOCKUP GRANDE DO PRODUTO (PLANO COMPLETO) */}
              <div className="w-full flex items-center justify-center relative my-4 p-0 overflow-hidden">
                <img 
                  src="https://i.ibb.co/1GMFTX4J/Decorative-Square-Frame-Initials-Logo-4-1.jpg" 
                  alt="Mockup Plano Completo" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain relative z-10 scale-105 sm:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* BLOCO VOCÊ RECEBE */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <span className="text-xs sm:text-sm font-black font-mono text-neutral-950 uppercase tracking-widest bg-amber-400 border border-amber-500 px-5 py-2 rounded-xl shadow-md flex items-center gap-2.5 justify-center">
                    <span className="text-neutral-950 font-bold text-sm inline-block">
                      ↓
                    </span>
                    <span>VOCÊ RECEBE</span>
                    <span className="text-neutral-950 font-bold text-sm inline-block">
                      ↓
                    </span>
                  </span>
                </div>
                
                {/* LISTA DE BENEFÍCIOS COM CHECKS AMARELOS SÓLIDOS */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-500">
                      <Check className="w-4 h-4 text-neutral-950 stroke-[3.5]" />
                    </div>
                    <span className="text-base sm:text-lg text-neutral-900 font-bold">
                      400 Artes Editáveis Para Futebol Amador
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-500">
                      <Check className="w-4 h-4 text-neutral-950 stroke-[3.5]" />
                    </div>
                    <span className="text-base sm:text-lg text-neutral-900 font-bold">
                      Todas as Categorias Disponíveis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-500">
                      <Check className="w-4 h-4 text-neutral-950 stroke-[3.5]" />
                    </div>
                    <span className="text-base sm:text-lg text-neutral-900 font-bold">
                      Área de Membros
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-500">
                      <Check className="w-4 h-4 text-neutral-950 stroke-[3.5]" />
                    </div>
                    <span className="text-base sm:text-lg text-neutral-900 font-bold">
                      Acesso Imediato
                    </span>
                  </div>
                </div>
              </div>

              {/* SEPARADOR DISCRETO */}
              <div className="border-t-2 border-amber-300 my-5" />

              {/* BLOCO DE BÔNUS */}
              <div className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <span
                    className="text-xs sm:text-sm font-black font-mono text-neutral-950 bg-amber-400 border-2 border-amber-500 px-5 py-2.5 rounded-2xl shadow-md flex items-center gap-2 justify-center uppercase tracking-widest text-center"
                  >
                    <span>🎁 TODOS OS BÔNUS INCLUSOS</span>
                  </span>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Bônus #01 — Pack de Stories para Dia de Jogo",
                    "Bônus #02 — Kit Patrocinador Profissional",
                    "Bônus #03 — Pack de Escudos Editáveis",
                    "Bônus #04 — Canva Sem Complicação",
                    "Bônus #05 — Pack Especial de Stories Interativos",
                    "Bônus #06 — Área de Membros Exclusiva"
                  ].map((bonus, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-500">
                        <Check className="w-4 h-4 text-neutral-950 stroke-[3.5]" />
                      </div>
                      <span className="text-sm sm:text-base text-black font-bold">
                        {bonus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEPARADOR DISCRETO */}
              <div className="border-t-2 border-amber-300 my-5" />

              {/* BLOCO DE PREÇO */}
              <div className="py-2 text-center flex flex-col items-center justify-center space-y-1.5">
                <span className="text-base sm:text-lg text-black font-mono block text-center font-bold">
                  De <span className="text-red-600 font-extrabold line-through decoration-red-600 decoration-2">R$ 197,90</span> por apenas:
                </span>
                <div className="flex items-baseline justify-center gap-1 my-1">
                  <span className="text-6xl sm:text-7xl font-black font-display text-center tracking-tight text-emerald-600">
                    <span style={{ color: '#16a34a' }}>R$ </span>
                    <span style={{ color: '#16a34a' }}>29,90</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 border border-emerald-700 text-xs sm:text-sm font-black font-mono text-white mt-1 shadow-md">
                  <Tag className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <span>Você economiza R$ 168,00</span>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="https://pay.lowify.com.br/checkout?product_id=HX4hW2"
                className="w-full inline-flex items-center justify-center gap-2 text-center font-black font-mono uppercase tracking-[0.1em] text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-4.5 rounded-2xl transition-all duration-300 shadow-[0_6px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.6)] border border-emerald-500 cursor-pointer"
              >
                <span style={{ fontSize: '20px', lineHeight: '22px' }}>QUERO O PLANO COMPLETO</span>
              </a>
              <span className="block text-center text-xs sm:text-sm font-mono text-amber-700 uppercase tracking-widest font-extrabold mt-3">
                🔥 Recomendado por 94% dos Usuários
              </span>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
