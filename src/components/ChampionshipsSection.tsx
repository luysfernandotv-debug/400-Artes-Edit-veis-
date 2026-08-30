import React, { useRef } from 'react';
import { 
  Trophy, Shield, Calendar, Users, Award, Goal, ChevronLeft, ChevronRight, ChevronDown,
  Tv, Sparkles, Smartphone, Laptop, Tablet, Grid, Clock, Star, AlertCircle, ArrowRight,
  Check, Swords, Layers, Zap
} from 'lucide-react';
import { SPORT_SHIELDS, ATHLETE_IMAGES } from '../data/sportAssets';

interface Championship {
  id: string;
  badge: string;
  title: string;
  badgeText?: string;
  mainHeading?: string;
  subtitle: string;
  themeColor: string;
  borderColorClass?: string;
  itemBorderClass?: string;
  checkColorClass?: string;
  brandGradient: string;
  accentGlow: string;
  screens: {
    title: string;
    type: 'tabela' | 'rodada' | 'final' | 'stories';
    data: any;
  }[];
}

export default function ChampionshipsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const championships: Championship[] = [
    {
      id: 'brasileirao',
      badge: '🏆 Brasileirão',
      title: 'Brasileirão',
      badgeText: 'ARTES EDITÁVEIS BRASILEIRÃO',
      mainHeading: 'ARTES EDITÁVEIS PARA USAR NO INSTAGRAM',
      subtitle: 'Artes inspiradas no Brasileirão para você usar durante toda a competição\nDivulgue rodadas, resultados, classificação e os principais momentos do seu campeonato com uma identidade visual profissional',
      themeColor: '#22c55e', // Emerald/Yellowish Green
      borderColorClass: 'border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      itemBorderClass: 'border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.15)]',
      checkColorClass: 'text-emerald-400',
      brandGradient: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #14532d 100%)',
      accentGlow: 'rgba(34, 197, 94, 0.25)',
      screens: [
        {
          title: 'Tabela do Campeonato',
          type: 'tabela',
          data: {
            title: 'SÉRIE A - VÁRZEA',
            rows: [
              { pos: 1, team: 'União da Quebrada', pts: 32, j: 14, sg: '+16' },
              { pos: 2, team: 'Estrela Vermelha', pts: 29, j: 14, sg: '+12' },
              { pos: 3, team: 'Fúria Alvinegra', pts: 26, j: 14, sg: '+8' },
              { pos: 4, team: 'Sport Real Bairro', pts: 22, j: 14, sg: '+3' },
            ]
          }
        },
        {
          title: 'Grande Final',
          type: 'final',
          data: {
            title: 'A GRANDE DECISÃO',
            teamA: 'UNIÃO QUEBRADA',
            teamAScore: 2,
            teamB: 'ESTRELA VERMELHA',
            teamBScore: 1,
            sub: '🏆 CAMPEÃO SÉRIE A'
          }
        }
      ]
    },
    {
      id: 'laliga',
      badge: '🏆 La Liga',
      title: 'La Liga',
      badgeText: 'ARTES EDITÁVEIS LA LIGA',
      mainHeading: 'ARTES EDITÁVEIS PARA USAR NO INSTAGRAM',
      subtitle: 'Artes inspiradas na La Liga para você usar durante toda a competição\nDivulgue rodadas, resultados, classificação e os principais momentos do seu campeonato com uma identidade visual profissional',
      themeColor: '#ef4444', // Crimson Red
      borderColorClass: 'border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]',
      itemBorderClass: 'border-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.15)]',
      checkColorClass: 'text-red-400',
      brandGradient: 'linear-gradient(135deg, #1e0000 0%, #3a0000 50%, #0f0000 100%)',
      accentGlow: 'rgba(239, 68, 68, 0.25)',
      screens: [
        {
          title: 'Estatísticas Gerais',
          type: 'tabela',
          data: {
            title: 'LIGA DAS ESTRELAS',
            rows: [
              { pos: 1, team: 'Galácticos FC', pts: 36, j: 15, sg: '+22' },
              { pos: 2, team: 'Catalunha Amador', pts: 33, j: 15, sg: '+18' },
              { pos: 3, team: 'Atlético Municipal', pts: 28, j: 15, sg: '+9' },
              { pos: 4, team: 'Real Madrid da Vila', pts: 25, j: 15, sg: '+4' },
            ]
          }
        },
        {
          title: 'Melhores da Rodada',
          type: 'final',
          data: {
            title: 'Destaque da Liga',
            teamA: 'GALÁCTICOS FC',
            teamAScore: 4,
            teamB: 'CATALUNHA AMADOR',
            teamBScore: 0,
            sub: 'Destaque: Benzema (03 Gols)'
          }
        }
      ]
    },
    {
      id: 'champions-varzea',
      badge: '🏆 Champions League da Várzea',
      title: 'Champions League da Várzea',
      badgeText: 'ARTES EDITÁVEIS CHAMPIONS LEAGUE',
      mainHeading: 'ARTES EDITÁVEIS PARA USAR NO INSTAGRAM',
      subtitle: 'Artes inspiradas na Champions League para você usar durante toda a competição\nDivulgue rodadas, resultados, classificação e os principais momentos do seu campeonato com uma identidade visual profissional',
      themeColor: '#eab308', // Luxury Gold
      borderColorClass: 'border-2 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]',
      itemBorderClass: 'border-yellow-500/50 shadow-[0_0_8px_rgba(234,179,8,0.15)]',
      checkColorClass: 'text-yellow-400',
      brandGradient: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #020817 100%)',
      accentGlow: 'rgba(234, 179, 8, 0.3)',
      screens: [
        {
          title: 'Fase de Grupos',
          type: 'tabela',
          data: {
            title: 'CHAMPIONS VÁRZEA',
            rows: [
              { pos: 1, team: 'Elite do Morro', pts: 18, j: 6, sg: '+14' },
              { pos: 2, team: 'Internazionale Sul', pts: 12, j: 6, sg: '+5' },
              { pos: 3, team: 'Ajax do Asfalto', pts: 6, j: 6, sg: '-4' },
              { pos: 4, team: 'Boca da Vila', pts: 0, j: 6, sg: '-15' },
            ]
          }
        },
        {
          title: 'Grande Final',
          type: 'final',
          data: {
            title: 'FINAL DA CHAMPIONS',
            teamA: 'ELITE DO MORRO',
            teamAScore: 3,
            teamB: 'INTERNAZIONALE',
            teamBScore: 2,
            sub: '🏆 CAMPEÃO EUROPEU DA VÁRZEA'
          }
        }
      ]
    }
  ];

  return (
    <section 
      id="campeonatos-completos"
      className="relative w-full bg-[#030303] text-white pt-8 sm:pt-12 pb-0 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
      style={{
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        paddingTop: '32px',
        paddingBottom: '0px'
      }}
    >
      {/* Cinematic atmospheric lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[20%] left-[5%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-10 transition-all duration-700 bg-amber-500/10" 
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full filter blur-[130px] opacity-15 transition-all duration-700 bg-amber-500/15" 
        />
        <div className="absolute top-[5%] right-[20%] w-[1px] h-[100px] bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER: Strict Copy requested */}
        <div 
          className="text-center max-w-4xl mx-auto space-y-4"
          style={{
            marginTop: '0px'
          }}
        >
          <div 
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em]"
            style={{
              border: '1.2px solid rgba(255, 215, 0, 0.55)',
              boxShadow: '0 4px 20px rgba(255, 215, 0, 0.15), inset 0 0 8px rgba(255, 215, 0, 0.05)',
              backgroundColor: 'rgba(10, 10, 10, 0.9)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
            }}
          >
            <Trophy 
              className="w-3.5 h-3.5" 
              style={{ 
                color: '#FFD700', 
                fill: '#FFD700',
                filter: 'drop-shadow(0 1px 3px rgba(255, 215, 0, 0.6))' 
              }} 
            />
            <span
              style={{
                color: '#FFD700',
                fontFamily: 'Inter',
                fontWeight: 'bold',
                letterSpacing: '0.15em'
              }}
            >
              ARTES INSPIRADAS NO FUTEBOL PROFISSIONAL
            </span>
          </div>

          {/* EXACT COPY TÍTULO: SEU CAMPEONATO / TORNEIO COM CARA DE GRANDE COMPETIÇÃO */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight max-w-3xl mx-auto"
            style={{
              fontSize: '29px'
            }}
          >
            SEU CAMPEONATO / TORNEIO COM CARA DE GRANDE COMPETIÇÃO
          </h2>

          {/* EXACT COPY SUBTÍTULO: */}
          <div 
            className="flex flex-col items-center gap-1.5 text-neutral-400 font-sans max-w-2xl mx-auto"
          >
            <p 
              className="text-base sm:text-lg font-bold text-white text-center max-w-2xl mx-auto"
              style={{
                fontSize: '22px',
                lineHeight: '26px'
              }}
            >
              <span className="text-amber-400 font-extrabold">Artes Prontas</span> para usar, inspirados na <span className="text-cyan-400 font-extrabold">Champions League</span>, <span className="font-extrabold" style={{ color: '#00E676' }}>Brasileirão</span> e <span className="font-extrabold" style={{ color: '#FF3333' }}>La Liga</span> para divulgar cada fase do seu campeonato no <span style={{ backgroundImage: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', fontWeight: 800 }}>Instagram</span>
            </p>
            <div 
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center max-w-2xl mx-auto my-3 sm:my-4"
              style={{
                fontSize: '16px',
                marginTop: '16px',
                marginBottom: '16px'
              }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200 font-bold text-xs sm:text-sm shadow-sm">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                Grupos
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200 font-bold text-xs sm:text-sm shadow-sm">
                <Swords className="w-5 h-5 text-red-400 shrink-0" />
                Mata-mata
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200 font-bold text-xs sm:text-sm shadow-sm">
                <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
                Quartas
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200 font-bold text-xs sm:text-sm shadow-sm">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                Semifinais
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-300 font-extrabold text-xs sm:text-sm shadow-sm">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                Final
              </span>
            </div>
            <p 
              className="text-xs sm:text-sm text-neutral-500 text-center font-medium mt-1 max-w-lg mx-auto"
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'Outfit',
                fontSize: '21px',
                lineHeight: '24px'
              }}
            >
              Você recebe <span style={{ backgroundImage: 'linear-gradient(135deg, #FFE066, #F5B041)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}>artes completas</span> inspirados nas maiores competições do <span style={{ color: '#22C55E', textShadow: '0 0 8px rgba(34, 197, 94, 0.45)', fontWeight: 'bold' }}>futebol</span>
            </p>
          </div>
        </div>


        {/* Championships Vertical Sequence */}
        <div className="space-y-12 sm:space-y-16">
          {championships.map((camp) => (
            <div
              key={camp.id}
              id={`championship-${camp.id}`}
              className={`bg-[#0b0b0b] rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center scroll-mt-24 text-left mx-auto w-full transition-all ${
                camp.borderColorClass || 'border border-neutral-900'
              }`}
            >
              {/* Dynamic subtle ambient pattern background for card */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ 
                  background: camp.brandGradient,
                  maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 70%)'
                }}
              />

              {/* Card visual showcase left side (7 cols of desktop) */}
              <div className="lg:col-span-7 relative flex items-center justify-center py-6 min-h-[220px] sm:min-h-[280px] md:min-h-[380px]" style={{ perspective: 1000 }}>
                
                <div 
                  className="w-full h-full max-w-[500px] flex items-center justify-center p-2 rounded-2xl bg-[#0a0a0a]/60 border border-neutral-800/80 relative overflow-hidden group"
                  style={{ boxShadow: `0 20px 50px ${camp.accentGlow}` }}
                >
                  <img 
                    src={
                      camp.id === 'brasileirao' 
                        ? "https://i.ibb.co/chpLC1nM/Decorative-Square-Frame-Initials-Logo-1.jpg" 
                        : camp.id === 'laliga'
                        ? "https://i.ibb.co/0jx6ZD55/Decorative-Square-Frame-Initials-Logo-2-1.jpg"
                        : "https://i.ibb.co/chd67zmk/Decorative-Square-Frame-Initials-Logo-3-1.jpg"
                    } 
                    alt={`${camp.title} Completo`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[350px] object-contain rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.025]"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>

              {/* Card textual info right side (5 cols of desktop) */}
              <div className="lg:col-span-5 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6 z-10">
                <div 
                  className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full font-bold font-mono uppercase mx-auto transition-all" 
                  style={{ 
                    color: camp.themeColor,
                    fontSize: '13px'
                  }}
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span>{camp.badgeText || camp.title}</span>
                </div>

                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-black font-display text-white uppercase leading-tight text-center mx-auto"
                  style={{ 
                    textAlign: 'center',
                    fontSize: '22px'
                  }}
                >
                  {camp.mainHeading || 'ARTES EDITÁVEIS PARA USAR NO INSTAGRAM'}
                </h3>

                <p 
                  className="text-sm sm:text-base font-sans text-neutral-300 leading-relaxed text-center mx-auto whitespace-pre-line"
                  style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    fontSize: '16px'
                  }}
                >
                  {camp.subtitle}
                </p>

                <div className="border-t border-neutral-900 pt-4 sm:pt-5 space-y-3 w-full max-w-xs mx-auto text-center">
                  <span 
                    className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block text-center"
                    style={{
                      textAlign: 'center',
                      fontSize: '15px',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontFamily: 'Outfit, sans-serif'
                    }}
                  >
                    MODELOS DE ARTES DISPONÍVEIS
                  </span>
                  
                  <div 
                    className="grid grid-cols-2 gap-x-3 gap-y-2 font-semibold text-neutral-300 w-full"
                    style={{
                      textAlign: 'left',
                      fontSize: '12px'
                    }}
                  >
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Placar da Rodada</span>
                    </div>
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Classificação Dinâmica</span>
                    </div>
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Resultados</span>
                    </div>
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Próximos Jogos</span>
                    </div>
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Stories Interativos</span>
                    </div>
                    <div className={`flex items-center gap-1.5 justify-start bg-neutral-950/40 px-2.5 py-1.5 rounded-lg border ${camp.itemBorderClass || 'border-neutral-800/50'}`}>
                      <Check className={`w-3.5 h-3.5 ${camp.checkColorClass || 'text-emerald-400'} shrink-0 stroke-[3.5px]`} />
                      <span className="text-white font-bold leading-tight">Destaques</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* METADATA SUPPORTING LIST (STRICTLY COMPLIANT WITH USER REQUEST TEXT COPY) */}
        <div 
          className="pt-6 border-t border-neutral-950"
          style={{
            marginLeft: '0px',
            marginTop: '0px',
            marginBottom: '0px'
          }}
        >
          <div className="text-center mb-0 max-w-4xl mx-auto space-y-4">
            <h2 
              className="font-black font-display tracking-tight uppercase text-white"
              style={{ 
                fontSize: '34px',
                lineHeight: '34px'
              }}
            >
              TUDO PRONTO PARA DIVULGAR SEU CAMPEONATO / TORNEIO
            </h2>
            <p 
              className="font-semibold font-display text-neutral-400 max-w-xl mx-auto uppercase tracking-wide"
              style={{ 
                color: '#ffffff',
                fontSize: '15px',
                lineHeight: '17px'
              }}
            >
              Escolha a arte, edite as informações e publique cada momento da competição no Instagram
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
