import React from 'react';
import { TeamSettings } from '../types';
import { SPORT_SHIELDS, TEAM_PLAYERS, TOURNAMENT_STANDINGS, ATHLETE_IMAGES, THEME_COLORS } from '../data/sportAssets';

interface TemplateCardProps {
  type: 'escalacao' | 'resultado' | 'classificacao' | 'stories' | 'capas';
  settings: TeamSettings;
  className?: string;
  isMini?: boolean; // For sidebar thumbnail usage
}

function TemplateCard({ type, settings, className = '', isMini = false }: TemplateCardProps) {
  const currentShield = SPORT_SHIELDS[settings.crestIndex] || SPORT_SHIELDS[0];
  const opponentShield = SPORT_SHIELDS[settings.opponentCrestIndex] || SPORT_SHIELDS[1];
  const activeColor = THEME_COLORS[settings.themeColor] || THEME_COLORS.gold;
  const athlete = ATHLETE_IMAGES[settings.athleteImageIndex] || ATHLETE_IMAGES[0];

  // Helper to format names nicely
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 3).toUpperCase();
  };

  switch (type) {
    case 'escalacao':
      return (
        <div 
          id="template-escalacao"
          className={`aspect-square w-full relative bg-[#060606] border border-neutral-800 overflow-hidden flex flex-col justify-between font-display text-white shadow-2xl transition-all duration-300 ${className}`}
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #151515 0%, #060606 100%)' }}
        >
          {/* Subtle field grid pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            {/* Outlines of a soccer field */}
            <div className="absolute top-[8%] bottom-[8%] left-[8%] right-[8%] border border-white rounded-lg"></div>
            <div className="absolute top-[8%] left-[30%] right-[30%] bottom-[8%] border-l border-r border-white"></div>
            {/* Center Circle */}
            <div className="absolute top-[40%] bottom-[40%] left-[40%] right-[40%] border border-white rounded-full"></div>
            {/* Penalty boxes */}
            <div className="absolute bottom-[8%] left-[25%] right-[25%] h-[15%] border-t border-l border-r border-white"></div>
            <div className="absolute top-[8%] left-[25%] right-[25%] h-[15%] border-b border-l border-r border-white"></div>
          </div>

          {/* Premium diagonal slices & glowing gold accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-30%] left-[-40%] w-[80%] h-[160%] bg-gradient-to-tr from-transparent via-neutral-900/40 to-transparent rotate-12"></div>
            {/* Tech golden/themed line */}
            <div 
              className="absolute top-0 right-[25%] w-[1px] h-full opacity-30" 
              style={{ background: `linear-gradient(to bottom, transparent, ${activeColor.primary}, transparent)` }}
            />
            {/* Subtle glow behind the crest */}
            <div 
              className="absolute top-[8%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full filter blur-[32px] opacity-40"
              style={{ backgroundColor: activeColor.primary }}
            />
          </div>

          {/* Header */}
          <div className="pt-5 px-5 z-10 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 drop-shadow-lg">
                {currentShield.elements(activeColor.primary)}
              </div>
              <div className="text-left">
                <span className="block text-[9px] tracking-[0.2em] uppercase font-mono text-neutral-400">Escalação Oficial</span>
                <span className="block text-sm font-extrabold tracking-tight text-white uppercase truncate max-w-[140px]">
                  {settings.teamName || 'Seu Time'}
                </span>
              </div>
            </div>
            <div className="mt-2 h-[2px] w-12 rounded-full" style={{ backgroundColor: activeColor.primary }} />
          </div>

          {/* Player Formation Grid */}
          <div className="flex-1 relative z-10 px-4 py-2">
            {TEAM_PLAYERS.map((player, idx) => (
              <div 
                key={idx}
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ left: `${player.x}%`, top: `${player.y - 5}%` }}
              >
                {/* Jersey Number Circle */}
                <div 
                  className={`flex items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-115 ${isMini ? 'w-5 h-5 text-[8px]' : 'w-7 h-7 text-[10px]'} font-mono font-bold`}
                  style={{ 
                    backgroundColor: 'rgba(10, 10, 10, 0.85)', 
                    borderColor: activeColor.primary,
                    boxShadow: `0 0 10px ${activeColor.glow}`
                  }}
                >
                  <span style={{ color: activeColor.primary }}>{player.number}</span>
                </div>
                {/* Player Name */}
                <span className={`mt-0.5 whitespace-nowrap bg-black/75 px-1.5 py-0.5 rounded text-white font-sans ${isMini ? 'text-[7px]' : 'text-[9px]'} font-medium border border-neutral-800 uppercase`}>
                  {player.name}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Sponsor/Logo strip */}
          <div className="pb-3 px-5 z-10 flex justify-between items-center border-t border-neutral-900 bg-black/40 backdrop-blur-xs py-2">
            <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">Campeonato Regional</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[7px] font-sans text-neutral-400">Powered by</span>
              <span className="text-[8px] font-extrabold tracking-wider uppercase text-white">Athleta</span>
            </div>
          </div>
        </div>
      );

    case 'resultado':
      return (
        <div 
          id="template-resultado"
          className={`aspect-square w-full relative bg-[#070707] border border-neutral-800 overflow-hidden flex flex-col justify-between font-display text-white shadow-2xl transition-all duration-300 ${className}`}
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #171717 0%, #070707 100%)' }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Technical grid overlay */}
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute top-[20%] left-[-10%] w-[120%] h-[2px] bg-white opacity-20 rotate-12"></div>
            <div className="absolute top-[80%] left-[-10%] w-[120%] h-[2px] bg-white opacity-20 rotate-12"></div>
          </div>

          {/* Glow behind the score */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 rounded-full filter blur-[40px] opacity-25 pointer-events-none"
            style={{ backgroundColor: activeColor.primary }}
          />

          {/* Header */}
          <div className="pt-6 px-6 z-10 flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">Fim de Jogo</span>
            <span className="text-lg font-black tracking-tight uppercase" style={{ color: activeColor.primary }}>
              Resultado Oficial
            </span>
            <div className="w-8 h-[2px] mt-1" style={{ backgroundColor: activeColor.primary }} />
          </div>

          {/* Core score match-up */}
          <div className="flex-1 flex items-center justify-center px-4 gap-2 z-10">
            {/* Team A */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-2 drop-shadow-xl transition-transform hover:scale-105">
                {currentShield.elements(activeColor.primary)}
              </div>
              <span className="text-xs font-bold uppercase tracking-wide truncate max-w-[100px] text-white">
                {settings.teamName || 'Seu Time'}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5">Casa</span>
            </div>

            {/* Score Numbers */}
            <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-inner">
              <span className="text-3xl font-black font-mono tracking-tight text-white px-2">
                {settings.teamScore}
              </span>
              <span className="text-neutral-600 font-mono text-sm">-</span>
              <span className="text-3xl font-black font-mono tracking-tight text-neutral-300 px-2">
                {settings.opponentScore}
              </span>
            </div>

            {/* Team B */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-2 opacity-90 drop-shadow-xl transition-transform hover:scale-105">
                {opponentShield.elements('#d4d4d8')}
              </div>
              <span className="text-xs font-bold uppercase tracking-wide truncate max-w-[100px] text-neutral-300">
                {settings.opponentName || 'Rival FC'}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5">Visitante</span>
            </div>
          </div>

          {/* Match Details Footer */}
          <div className="pb-4 px-6 z-10 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-400">
              <span>🏟️ Estádio Municipal</span>
              <span>•</span>
              <span>Público: 1.250</span>
            </div>
            <div className="w-full h-[1px] bg-neutral-900 my-1" />
            <div className="w-full flex justify-between items-center text-[7px] text-neutral-500 font-mono uppercase tracking-widest mt-1">
              <span>Arte Editável Esportiva</span>
              <span>InstaArtes</span>
            </div>
          </div>
        </div>
      );

    case 'classificacao':
      return (
        <div 
          id="template-classificacao"
          className={`aspect-square w-full relative bg-[#050505] border border-neutral-800 overflow-hidden flex flex-col justify-between font-display text-white shadow-2xl transition-all duration-300 ${className}`}
        >
          {/* Minimal lines & geometric shapes for a very Stripe/Linear feel */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-neutral-900 to-transparent opacity-50 pointer-events-none"></div>

          {/* Header */}
          <div className="pt-5 px-5 z-10 flex justify-between items-center border-b border-neutral-900 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7">
                {currentShield.elements(activeColor.primary)}
              </div>
              <div className="text-left">
                <span className="block text-[8px] tracking-widest font-mono text-neutral-500 uppercase">Tabela de Classificação</span>
                <span className="block text-xs font-extrabold uppercase tracking-tight text-white">Copa Regional Amadora</span>
              </div>
            </div>
            <div className={`px-2 py-0.5 rounded-full ${activeColor.bgBadge} border ${activeColor.border} text-[8px] font-mono text-white`}>
              Rodada 12
            </div>
          </div>

          {/* Standings Table */}
          <div className="flex-1 z-10 px-4 py-2 flex flex-col justify-center">
            {/* Table Header */}
            <div className="flex text-[8px] font-mono text-neutral-500 uppercase tracking-wider py-1 px-1.5 border-b border-neutral-900">
              <span className="w-6 text-center">Pos</span>
              <span className="flex-1 text-left">Clube</span>
              <span className="w-8 text-center font-bold text-neutral-400">Pts</span>
              <span className="w-6 text-center">PJ</span>
              <span className="w-6 text-center">V</span>
              <span className="w-8 text-center hidden sm:block">Sg</span>
            </div>

            {/* Table Rows (Max 5 or 6 rows depending on isMini) */}
            <div className="flex flex-col mt-1 divide-y divide-neutral-950">
              {TOURNAMENT_STANDINGS.slice(0, isMini ? 4 : 5).map((row, idx) => {
                // If it is pos 1, use dynamic customized team name
                const isCustomTeam = idx === 0;
                const teamName = isCustomTeam ? (settings.teamName || 'Seu Time FC') : row.team;
                
                return (
                  <div 
                    key={row.pos}
                    className={`flex items-center text-[10px] py-1.5 px-1.5 transition-colors ${
                      isCustomTeam 
                        ? 'bg-neutral-900/65 rounded-sm border-l-2' 
                        : 'hover:bg-neutral-900/20'
                    }`}
                    style={{ borderLeftColor: isCustomTeam ? activeColor.primary : 'transparent' }}
                  >
                    {/* Position */}
                    <span className={`w-6 text-center font-mono font-bold ${
                      isCustomTeam ? activeColor.text : 'text-neutral-400'
                    }`}>
                      {row.pos}
                    </span>
                    
                    {/* Crest + Name */}
                    <span className="flex-1 flex items-center gap-1.5 font-sans font-semibold text-left truncate">
                      <span className="w-3.5 h-3.5 flex-shrink-0">
                        {isCustomTeam ? currentShield.elements(activeColor.primary) : SPORT_SHIELDS[(idx + 1) % 6].elements('#a1a1aa')}
                      </span>
                      <span className={`truncate max-w-[120px] uppercase tracking-wide text-[9px] ${isCustomTeam ? 'text-white' : 'text-neutral-300'}`}>
                        {teamName}
                      </span>
                    </span>

                    {/* Stats */}
                    <span className={`w-8 text-center font-mono font-bold ${
                      isCustomTeam ? activeColor.text : 'text-white'
                    }`}>
                      {row.points}
                    </span>
                    <span className="w-6 text-center font-mono text-neutral-400 text-[9px]">{row.played}</span>
                    <span className="w-6 text-center font-mono text-neutral-400 text-[9px]">{row.wins}</span>
                    <span className="w-8 text-center font-mono text-neutral-400 text-[9px] hidden sm:block">
                      {isCustomTeam ? "+18" : (idx === 1 ? "+9" : "+4")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="pb-3 px-5 z-10 flex justify-between items-center text-[7px] font-mono text-neutral-500 uppercase tracking-widest border-t border-neutral-900 py-2 bg-neutral-950/20">
            <span>Classificação em Tempo Real</span>
            <span style={{ color: activeColor.primary }}>★ G-4 Classifica</span>
          </div>
        </div>
      );

    case 'stories':
      return (
        <div 
          id="template-stories"
          className={`aspect-[9/16] w-full relative bg-[#040404] border border-neutral-800 overflow-hidden flex flex-col justify-between font-display text-white shadow-2xl transition-all duration-300 ${className}`}
        >
          {/* Athlete image cover */}
          <div className="absolute inset-0 z-0">
            {athlete.svg(activeColor.primary)}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
          </div>

          {/* Subtle themed light glows */}
          <div 
            className="absolute top-[25%] right-[-10%] w-48 h-48 rounded-full filter blur-[48px] opacity-25 pointer-events-none"
            style={{ backgroundColor: activeColor.primary }}
          />

          {/* Header */}
          <div className="pt-6 px-5 z-10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                {currentShield.elements(activeColor.primary)}
              </div>
              <div className="text-left">
                <span className="block text-[8px] font-mono tracking-widest text-neutral-400 uppercase">Matchday Story</span>
                <span className="block text-[10px] font-extrabold uppercase text-white truncate max-w-[100px]">
                  {settings.teamName || 'Seu Time'}
                </span>
              </div>
            </div>
            <span className="text-[7px] font-mono border border-neutral-700/60 rounded px-1.5 py-0.5 bg-black/60 backdrop-blur-xs text-neutral-300 tracking-wider">
              HOJE ÀS 19:00
            </span>
          </div>

          {/* Huge Dynamic Headline in center */}
          <div className="px-5 text-center z-10 flex flex-col items-center justify-center my-auto">
            <div 
              className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold"
              style={{ color: activeColor.primary }}
            >
              É DIA DE DECISÃO
            </div>
            
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-white mt-1 leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              DIA DE <br />
              <span className="bg-gradient-to-r from-white via-white/90 to-neutral-400 bg-clip-text text-transparent">COMBATE</span>
            </h1>

            {/* Glowing active outline block */}
            <div className="mt-4 flex items-center justify-center gap-4 bg-black/85 backdrop-blur-md border border-neutral-800/80 rounded-2xl px-5 py-3 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10">
                  {currentShield.elements(activeColor.primary)}
                </div>
                <span className="text-[8px] font-bold tracking-tight uppercase text-white mt-1.5 truncate max-w-[60px]">
                  {settings.shortName || 'SEU'}
                </span>
              </div>

              <span className="text-xs font-mono font-bold text-neutral-500 italic">X</span>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10">
                  {opponentShield.elements('#ffffff')}
                </div>
                <span className="text-[8px] font-bold tracking-tight uppercase text-neutral-300 mt-1.5 truncate max-w-[60px]">
                  {getInitials(settings.opponentName || 'Rival')}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pb-6 px-5 z-10 flex flex-col items-center gap-1.5">
            <div className="w-8 h-[2px] mb-1" style={{ backgroundColor: activeColor.primary }} />
            <span className="text-[8px] font-mono tracking-[0.25em] text-neutral-400 uppercase">Campeonato Municipal 2026</span>
            <span className="text-[9px] font-sans text-neutral-500">Transmissão Ao Vivo no Insta</span>
          </div>
        </div>
      );

    case 'capas':
      return (
        <div 
          id="template-capas"
          className={`aspect-square w-full relative bg-[#050505] border border-neutral-800 overflow-hidden flex flex-col justify-between items-center font-display text-white shadow-2xl transition-all duration-300 ${className}`}
        >
          {/* Circular radial lines as high end background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-80 h-80 rounded-full border border-neutral-800"></div>
            <div className="absolute w-60 h-60 rounded-full border border-neutral-800/80"></div>
            <div className="absolute w-40 h-40 rounded-full border border-neutral-800/50"></div>
            <div className="absolute w-20 h-20 rounded-full border border-neutral-800/20"></div>
            {/* Tech grid dots */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          </div>

          {/* Active colored glows in back */}
          <div 
            className="absolute w-40 h-40 rounded-full filter blur-[50px] opacity-20 pointer-events-none"
            style={{ backgroundColor: activeColor.primary }}
          />

          {/* Header */}
          <div className="pt-5 px-5 z-10 w-full flex justify-between items-center">
            <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">Destaques</span>
            <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">Capa Oficial</span>
          </div>

          {/* Main Badge/Shield centered with massive premium feel */}
          <div className="z-10 flex flex-col items-center justify-center my-auto">
            {/* Double ring border */}
            <div 
              className="p-3.5 rounded-full border transition-transform hover:rotate-3 duration-500"
              style={{ 
                borderColor: `${activeColor.primary}20`,
                boxShadow: `0 0 35px ${activeColor.glow}`
              }}
            >
              <div 
                className="w-20 h-20 bg-neutral-900/90 rounded-full flex items-center justify-center border p-3"
                style={{ borderColor: activeColor.primary }}
              >
                <div className="w-12 h-12">
                  {currentShield.elements(activeColor.primary)}
                </div>
              </div>
            </div>
            
            <h3 className="mt-4 text-sm font-extrabold tracking-widest uppercase text-white">
              {settings.teamName || 'SEU TIME'}
            </h3>
            <span className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5 tracking-widest">
              Jogos da Temporada
            </span>
          </div>

          {/* Footer branding */}
          <div className="pb-4 px-5 z-10 w-full flex justify-center items-center gap-1.5 border-t border-neutral-950 pt-2.5">
            <span className="text-[7px] font-mono text-neutral-500 tracking-wider uppercase">Futebol Amador Profissional</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default React.memo(TemplateCard);
