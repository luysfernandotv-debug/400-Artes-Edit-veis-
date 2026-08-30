import React from 'react';
import { 
  Gift, Sparkles, Star, Shield, Trophy, Smartphone, Laptop, Tablet, Layers, 
  Calendar, RotateCw, Hourglass, Bookmark, ArrowRight, Zap, Check, Monitor, Download, Lock
} from 'lucide-react';
import { SPORT_SHIELDS, ATHLETE_IMAGES } from '../data/sportAssets';

interface BonusItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  originalPrice: string;
  currentPrice: string;
  mockupType: 'stories' | 'sponsor' | 'shields' | 'canva' | 'interactive' | 'portal';
  accentColor: string;
  athleteIndex: number;
  shieldIndex: number;
  imageUrl: string;
}

export default function BonusSection() {
  const bonuses: BonusItem[] = [
    {
      id: 'stories-dia-de-jogo',
      tag: 'BÔNUS 01',
      title: 'Pack de Stories para Dia de Jogo',
      description: 'Tenha modelos prontos para movimentar os Stories antes, durante e depois das partidas',
      deliverables: [
        'Contagem Regressiva',
        'Dia de Jogo',
        'Resultado Final',
        'Destaques da Rodada'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'stories',
      accentColor: '#f97316', // Vibrant Orange
      athleteIndex: 1,
      shieldIndex: 1,
      imageUrl: 'https://i.ibb.co/GfS7k3tC/Decorative-Square-Frame-Initials-Logo-6-1.jpg'
    },
    {
      id: 'kit-patrocinador',
      tag: 'BÔNUS 02',
      title: 'Kit Patrocinador Profissional',
      description: 'Artes prontas para valorizar patrocinadores e deixar seu time ou campeonato muito mais profissional',
      deliverables: [
        'Agradecimento ao Patrocinador',
        'Divulgação de Parceiros',
        'Parceiros Oficiais',
        'Patrocinador da Rodada'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'sponsor',
      accentColor: '#d4af37', // Gold
      athleteIndex: 0,
      shieldIndex: 4,
      imageUrl: 'https://i.ibb.co/jPCVnGyn/Decorative-Square-Frame-Initials-Logo-7-1.jpg'
    },
    {
      id: 'escudos-editaveis',
      tag: 'BÔNUS 03',
      title: 'Pack de Escudos Editáveis',
      description: 'Modelos exclusivos para criar escudos personalizados para seu time ou campeonato em poucos minutos',
      deliverables: [
        'Fácil Personalização',
        'Visual Profissional',
        'Escudos Prontos para Editar',
        'Pronto para Usar nas Artes'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'shields',
      accentColor: '#f43f5e', // Crimson
      athleteIndex: 3,
      shieldIndex: 0,
      imageUrl: 'https://i.ibb.co/pBwKcx0Q/Chat-GPT-Image-22-de-jun-de-2026-23-15-19-1-removebg-preview.png'
    },
    {
      id: 'canva-facil',
      tag: 'BÔNUS 04',
      title: 'Canva Sem Complicação',
      description: 'Aprenda em poucos minutos a editar qualquer arte pelo celular ou computador, mesmo que você nunca tenha utilizado o Canva',
      deliverables: [
        'Passo a Passo Simples',
        'Sem Experiência Necessária',
        'Do Zero ao Primeiro Post'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'canva',
      accentColor: '#06b6d4', // Cyan
      athleteIndex: 2,
      shieldIndex: 2,
      imageUrl: 'https://i.ibb.co/C52DrXyJ/canva-arte.jpg'
    },
    {
      id: 'stories-interativos',
      tag: 'BÔNUS 05',
      title: 'Pack Especial de Stories Interativos',
      description: 'Aumente a participação dos jogadores e seguidores com Stories prontos para gerar muito mais interação',
      deliverables: [
        'Enquetes',
        'Quem Foi o Craque?',
        'Melhor Gol da Rodada',
        'Perguntas e Votações'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'interactive',
      accentColor: '#f59e0b', // Amber/Yellow
      athleteIndex: 1,
      shieldIndex: 5,
      imageUrl: 'https://i.ibb.co/PsF9wdT8/Chat-GPT-Image-23-de-jun-de-2026-01-03-57-removebg-preview-1.png'
    },
    {
      id: 'membros-exclusiva',
      tag: 'BÔNUS 06',
      title: 'Área de Membros Exclusiva',
      description: 'Tenha acesso a todas as artes e bônus organizados em um único lugar, de forma simples e rápida',
      deliverables: [
        'Acesso Imediato',
        'Organização Simples',
        'Download Rápido',
        'Atualizações Futuras'
      ],
      originalPrice: 'R$27',
      currentPrice: 'GRÁTIS',
      mockupType: 'portal',
      accentColor: '#10b981', // Emerald
      athleteIndex: 2,
      shieldIndex: 3,
      imageUrl: 'https://i.ibb.co/SSvQ636/Chat-GPT-Image-22-de-jun-de-2026-23-31-35-1-removebg-preview-1-1.png'
    }
  ];

  return (
    <section 
      id="bonus"
      className="relative w-full bg-[#030303] text-white pt-10 sm:pt-14 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
    >
      <style>{`
        .premium-gold-badge {
          background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                      linear-gradient(120deg, #d4af37, #fff6d1, #aa7c11, #fff6d1, #d4af37) border-box !important;
          border: 2.5px solid transparent !important;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.1) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .premium-gold-badge:hover {
          box-shadow: 0 0 25px rgba(212, 175, 55, 0.25) !important;
          filter: brightness(1.1);
        }
        .premium-orange-icon {
          background: linear-gradient(#070707, #070707) padding-box,
                      linear-gradient(120deg, #ff6b00, #ffedd5, #ea580c, #ffedd5, #ff6b00) border-box !important;
          border: 2.5px solid transparent !important;
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.15) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
        }
        .premium-orange-icon:hover {
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.3) !important;
        }
      `}</style>
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-[0.07] bg-amber-500/10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full filter blur-[160px] opacity-[0.08] bg-amber-500/15" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div 
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white premium-gold-badge"
          >
            <Gift className="w-3.5 h-3.5 text-amber-500" />
            <span style={{ fontWeight: 'bold', color: '#ffffff' }}>Materiais Exclusivos Incluídos</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent uppercase leading-normal pt-2 pb-1 overflow-visible"
            style={{ fontSize: '45px', marginBottom: '0px' }}
          >
            6 BÔNUS
          </h2>

          <div 
            className="flex flex-col items-center gap-1.5 text-neutral-400 font-sans max-w-2xl mx-auto"
          >
            <p 
              className="text-lg sm:text-xl font-bold text-white text-center"
              style={{ color: '#ffffff', fontSize: '27px', marginBottom: '8px' }}
            >
              E ainda tem muito mais...
            </p>
            <p 
              className="text-xs sm:text-sm text-neutral-400 text-center uppercase tracking-wider"
              style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '14px', marginBottom: '-20px' }}
            >
              Ao entrar hoje você também recebe acesso a materiais exclusivos
            </p>
          </div>
        </div>

        {/* Bonus Grid Layout: 2 columns on desktop (lg), 2 on tablet (md), 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {bonuses.map((bonus, idx) => (
            <div
              key={bonus.id}
              className="bg-[#070707] border-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-lg"
              style={{
                borderColor: `${bonus.accentColor}35`,
              }}
            >
              {/* Internal glowing decoration */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.06]"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${bonus.accentColor} 0%, transparent 70%)`
                }}
              />

              <div>
                {/* Badge/Tag */}
                <div className="flex justify-between items-center mb-5 relative z-10">
                  <span 
                    className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded border"
                    style={{
                      backgroundColor: `${bonus.accentColor}18`,
                      color: bonus.accentColor,
                      borderColor: `${bonus.accentColor}40`
                    }}
                  >
                    {bonus.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 uppercase font-black">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>INCLUSO</span>
                  </span>
                </div>

                {/* PREMIUM MOCKUP CONTAINER */}
                <div className="w-full flex items-center justify-center relative mb-6">
                  <div className="flex items-center justify-center relative z-10 w-full p-1">
                    <img 
                      src={bonus.imageUrl} 
                      alt={bonus.title} 
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[580px] object-contain rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Name & Description */}
                <div className="text-left space-y-2 relative z-10">
                  <h3 
                    className="text-xl sm:text-2xl font-black font-display text-white uppercase tracking-tight leading-none group-hover:text-amber-400 transition-colors duration-300"
                    style={{ 
                      textAlign: 'center', 
                      color: bonus.accentColor,
                      fontSize: '30px',
                      marginLeft: '0px',
                      marginBottom: '5px',
                      marginTop: '-8px'
                    }}
                  >
                    {bonus.title}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans min-h-[40px] mx-auto"
                    style={{ 
                      textAlign: 'center', 
                      color: '#ffffff',
                      lineHeight: '21px',
                      fontSize: '19px',
                      marginTop: '8px'
                    }}
                  >
                    {bonus.description}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-neutral-900 my-4 relative z-10" />

                {/* Deliverables checklist using gorgeous gold check badges */}
                <div className="space-y-3 z-10 relative">
                  <span 
                    className="flex items-center justify-center gap-2.5 font-sans tracking-widest uppercase font-black"
                    style={{ 
                      fontSize: '20px', 
                      color: '#ffffff',
                      textAlign: 'center',
                      display: 'flex',
                      width: '100%',
                      marginTop: '20px',
                      marginBottom: '16px',
                      height: '24px',
                      textShadow: `0 0 10px ${bonus.accentColor}30`
                    }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ color: bonus.accentColor }}
                    >
                      ↓
                    </span>
                    <span>
                      Você recebe
                    </span>
                    <span
                      className="font-bold text-base"
                      style={{ color: bonus.accentColor }}
                    >
                      ↓
                    </span>
                  </span>
                  <div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3"
                    style={{ color: '#ffffff', textAlign: 'center', ...(idx === 1 ? { fontSize: '16px' } : {}) }}
                  >
                    {bonus.deliverables.map((del, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex items-center gap-2.5 justify-center"
                        style={{ color: '#ffffff' }}
                      >
                        <div 
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border shrink-0 shadow-sm"
                          style={{
                            backgroundColor: `${bonus.accentColor}20`,
                            borderColor: `${bonus.accentColor}50`
                          }}
                        >
                          <Check 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" 
                            style={{ color: bonus.accentColor }}
                          />
                        </div>
                        <span 
                          className="text-sm sm:text-base text-white font-bold font-sans tracking-wide leading-snug"
                          style={{ color: '#ffffff', fontSize: idx === 0 ? '18px' : idx === 1 ? '15px' : '17px' }}
                        >
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Tag with Riscado and GRÁTIS */}
              <div className="mt-6 pt-5 border-t border-neutral-900/80 flex items-center z-10 relative justify-center">
                <div className="flex flex-col items-center justify-center text-center space-y-1">
                  <span 
                    className="text-3xl sm:text-4xl font-black font-display text-emerald-400 tracking-tight leading-none"
                    style={{ fontSize: '35px' }}
                  >
                    {bonus.currentPrice === 'GRÁTIS' ? 'Grátis' : bonus.currentPrice}
                  </span>
                  <span 
                    className="text-lg font-bold relative inline-block tracking-tight"
                    style={{ color: '#ff0000', fontSize: '18px' }}
                  >
                    {bonus.originalPrice}
                    <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-red-600 rounded" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* METADATA SUPPORTING CONTAINER INCREASING PERCEIVED VALUE */}
        <div className="pt-2 -mt-4 border-t border-neutral-950 text-center max-w-4xl mx-auto">
          <div className="bg-[#070707]/40 border border-neutral-900 rounded-2xl p-6 sm:p-8 space-y-4">
            {/* Elegant orange-bordered icons row */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div 
                className="w-12 h-12 premium-orange-icon"
              >
                <Zap className="w-5.5 h-5.5 text-orange-400" />
              </div>
              <div 
                className="w-12 h-12 premium-orange-icon"
              >
                <Shield className="w-5.5 h-5.5 text-orange-400" />
              </div>
              <div 
                className="w-12 h-12 premium-orange-icon"
              >
                <Trophy className="w-5.5 h-5.5 text-orange-400" />
              </div>
            </div>
            <span 
              className="text-amber-500 uppercase tracking-[0.2em] font-bold"
              style={{ fontSize: '15px', fontFamily: 'Outfit, sans-serif' }}
            >
              Oferta Extremamente Limitada
            </span>
            <p 
              className="font-sans leading-relaxed max-w-2xl mx-auto"
              style={{ fontWeight: 'bold', fontSize: '14px', color: '#ffffff' }}
            >
              Ao garantir o seu acesso hoje, todos os bônus acima serão adicionados automaticamente à sua área de membros, com <span className="text-white font-extrabold">custo zero</span>. O investimento se paga na sua primeira publicação esportiva de alta qualidade.
            </p>
          </div>

          {/* FAIXA DE ESCASSEZ NO TOPO DO CHECKOUT / ABAIXO DO BLOCO - BORDA INFINITA DE FORA A FORA */}
          <div 
            id="faixa-escassez-bonus"
            className="mt-8 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#dc2626] text-white py-3.5 px-4 sm:px-8 border-y-2 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.4)] select-none"
          >
            <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div style={{ fontSize: '18px' }}>
                <div 
                  className="font-sans font-black tracking-tight text-white uppercase"
                  style={{ fontSize: '18px', lineHeight: '20px' }}
                >
                  OFERTA EXTREMAMENTE LIMITADA
                </div>
                <div 
                  className="font-sans font-bold text-white/90 uppercase tracking-wide mt-0.5"
                  style={{ fontSize: '18px', lineHeight: '20px' }}
                >
                  DURA APENAS:
                </div>
              </div>

              <div className="shrink-0">
                <span 
                  className="font-mono font-black text-xl sm:text-2xl text-white bg-[#b91c1c] px-4 py-1.5 rounded-xl tracking-widest border border-red-500 inline-block leading-none shadow-inner"
                >
                  <BonusCountdown />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function BonusCountdown() {
  const COUNTDOWN_DURATION = 30 * 60; // 30 minutes in seconds
  const [remainingMs, setRemainingMs] = React.useState<number>(COUNTDOWN_DURATION * 1000);

  React.useEffect(() => {
    const STORAGE_KEY = 'scarcity_countdown_30m_end';
    const storedEnd = localStorage.getItem(STORAGE_KEY);
    let endTime: number;

    if (storedEnd) {
      endTime = parseInt(storedEnd, 10);
      if (isNaN(endTime) || Date.now() > endTime) {
        endTime = Date.now() + COUNTDOWN_DURATION * 1000;
        localStorage.setItem(STORAGE_KEY, endTime.toString());
      }
    } else {
      endTime = Date.now() + COUNTDOWN_DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, endTime.toString());
    }

    const updateTimer = () => {
      const remaining = Math.max(0, endTime - Date.now());
      setRemainingMs(remaining);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 43); // fast update for milliseconds/centiseconds
    return () => clearInterval(interval);
  }, []);

  const totalSecs = Math.floor(remainingMs / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  const centis = Math.floor((remainingMs % 1000) / 10);

  return (
    <>
      {`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
      <span className="text-base sm:text-lg text-white/80 ml-0.5">.{centis.toString().padStart(2, '0')}</span>
    </>
  );
}

