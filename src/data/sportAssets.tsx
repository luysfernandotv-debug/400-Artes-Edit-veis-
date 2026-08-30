import React from 'react';

export interface ShieldData {
  id: number;
  name: string;
  svgPath: string;
  strokeWidth?: number;
  viewBox?: string;
  elements: (color: string) => React.ReactNode;
}

export const SPORT_SHIELDS: ShieldData[] = [
  {
    id: 1,
    name: "Leão Real",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L85 20 V50 C85 70 50 95 50 95 C50 95 15 70 15 50 V20 L50 5 Z" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        <path d="M50 12 L78 25 V48 C78 64 50 85 50 85 C50 85 22 64 22 48 V25 L50 12 Z" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
        {/* Crown & Lion Silhouette */}
        <path d="M40 32 L50 25 L60 32 L55 45 H45 L40 32 Z" fill={color} />
        <path d="M50 48 C43 48 38 53 38 60 H62 C62 53 57 48 50 48 Z" fill={color} />
        <path d="M46 60 H54 V72 L50 78 L46 72 V60 Z" fill={color} opacity="0.8" />
        <circle cx="50" cy="18" r="2" fill={color} />
      </svg>
    )
  },
  {
    id: 2,
    name: "Águia Imperial",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L90 20 L80 65 L50 95 L20 65 L10 20 L50 5 Z" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        {/* Wings */}
        <path d="M30 35 L45 45 L50 35 L55 45 L70 35 L80 50 L50 75 L20 50 L30 35 Z" stroke={color} strokeWidth="1.5" />
        <path d="M50 30 L53 38 H47 L50 30 Z" fill={color} />
        <circle cx="50" cy="52" r="6" stroke={color} strokeWidth="2" />
        <path d="M48 52 H52 V65 H48 V52 Z" fill={color} />
      </svg>
    )
  },
  {
    id: 3,
    name: "Estrela do Sul",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        <circle cx="50" cy="50" r="36" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
        {/* Star */}
        <path d="M50 18 L58 38 L80 40 L62 54 L68 76 L50 64 L32 76 L38 54 L20 40 L42 38 Z" fill={color} />
        <path d="M50 18 V64 L32 76 L38 54 L20 40 L42 38 Z" fill="black" fillOpacity="0.2" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Falcão FC",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15 H85 V45 C85 68 50 92 50 92 C50 92 15 68 15 45 V15 Z" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        {/* Stripes */}
        <path d="M25 25 H75 V30 H25 V25 Z" fill={color} opacity="0.3" />
        <path d="M25 35 H75 V40 H25 V35 Z" fill={color} opacity="0.3" />
        <path d="M50 48 L65 35 H35 L50 48 Z" fill={color} />
        <path d="M50 48 L68 62 L50 82 L32 62 L50 48 Z" stroke={color} strokeWidth="2" />
        <circle cx="50" cy="55" r="4" fill={color} />
      </svg>
    )
  },
  {
    id: 5,
    name: "Atlético Aliança",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L85 25 L75 75 L50 90 L25 75 L15 25 L50 10 Z" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        <path d="M30 40 H70" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M35 52 H65" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M42 64 H58" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="26" r="5" fill={color} />
      </svg>
    )
  },
  {
    id: 6,
    name: "Clube do Sol",
    svgPath: "",
    elements: (color) => (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 8 L85 20 C85 20 90 60 70 82 C55 94 50 95 50 95 C50 95 45 94 30 82 C10 60 15 20 15 20 L50 8 Z" stroke={color} strokeWidth="3" fill="black" fillOpacity="0.6" />
        <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="2" />
        {/* Rays */}
        <path d="M50 18 V24M50 76 V82M18 50 H24M76 50 H82" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M28 28 L32 32M68 68 L72 72M28 68 L32 62M68 28 L62 32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

export const TEAM_PLAYERS = [
  { name: "M. Diniz", number: 1, position: "GK", x: 50, y: 88 },
  { name: "Thiago Silva", number: 3, position: "DEF", x: 30, y: 70 },
  { name: "Léo Santos", number: 4, position: "DEF", x: 70, y: 70 },
  { name: "G. Lucas", number: 2, position: "DEF", x: 15, y: 60 },
  { name: "Ruan Carlos", number: 6, position: "DEF", x: 85, y: 60 },
  { name: "P. Henrique", number: 5, position: "MID", x: 50, y: 52 },
  { name: "Mateus Melo", number: 8, position: "MID", x: 32, y: 42 },
  { name: "Renan Costa", number: 10, position: "MID", x: 68, y: 42 },
  { name: "Vini Jr. (Amador)", number: 11, position: "ATT", x: 18, y: 22 },
  { name: "Juninho", number: 7, position: "ATT", x: 82, y: 22 },
  { name: "Artur G.", number: 9, position: "ATT", x: 50, y: 15 }
];

export const TOURNAMENT_STANDINGS = [
  { pos: 1, team: "Seu Time FC", points: 28, played: 12, wins: 9, drawn: 1, lost: 2, goals: "28:10" },
  { pos: 2, team: "Esporte Vila Verde", points: 25, played: 12, wins: 7, drawn: 4, lost: 1, goals: "21:12" },
  { pos: 3, team: "Serra Negra FC", points: 21, played: 12, wins: 6, drawn: 3, lost: 3, goals: "18:14" },
  { pos: 4, team: "Real Continental", points: 19, played: 12, wins: 5, drawn: 4, lost: 3, goals: "15:12" },
  { pos: 5, team: "Unidos do Bairro", points: 15, played: 12, wins: 4, drawn: 3, lost: 5, goals: "14:17" },
  { pos: 6, team: "Inter Lagoa", points: 12, played: 12, wins: 3, drawn: 3, lost: 6, goals: "12:19" },
  { pos: 7, team: "Juventus F.A.", points: 10, played: 12, wins: 2, drawn: 4, lost: 6, goals: "11:18" },
  { pos: 8, team: "Independente", points: 4, played: 12, wins: 1, drawn: 1, lost: 10, goals: "8:25" }
];

export const ATHLETE_IMAGES = [
  {
    id: 1,
    name: "Comemoração Épica",
    gradient: "from-amber-600/20 via-orange-950/40 to-black",
    color: "#eab308",
    svg: (color: string) => (
      <svg className="w-full h-full object-cover select-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ath1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1e1b4b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#ath1)" />
        {/* Dynamic Abstract lines representing athlete energy */}
        <path d="M20 180 C80 140, 120 100, 140 20" stroke={color} strokeWidth="1.5" opacity="0.3" strokeDasharray="10 5" />
        <path d="M0 200 C60 160, 140 120, 180 0" stroke={color} strokeWidth="0.75" opacity="0.2" />
        <path d="M50 200 C90 140, 160 80, 200 40" stroke={color} strokeWidth="3" opacity="0.15" />
        {/* Athlete Silhouette playing football */}
        <g transform="translate(15, 10)">
          {/* Torso */}
          <path d="M100 85 L112 110 L108 150 L90 150 L88 120 L90 95 Z" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Head */}
          <circle cx="98" cy="74" r="8" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Raised arms (celebration) */}
          <path d="M92 88 L72 65 L60 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M108 88 L128 65 L140 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {/* Active Legs */}
          <path d="M92 145 L78 180 L62 185" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M106 145 L118 180 L135 182" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          {/* Ball */}
          <circle cx="150" cy="180" r="7" fill="black" stroke={color} strokeWidth="2" />
          <circle cx="150" cy="180" r="3" fill={color} />
        </g>
      </svg>
    )
  },
  {
    id: 2,
    name: "Chute de Bicicleta",
    gradient: "from-teal-600/20 via-blue-950/40 to-black",
    color: "#3b82f6",
    svg: (color: string) => (
      <svg className="w-full h-full object-cover select-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ath2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#ath2)" />
        {/* Halftone / Grid overlay */}
        <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="1" strokeDasharray="1 5" opacity="0.3" />
        <path d="M10 10 L190 190M190 10 L10 190" stroke={color} strokeWidth="0.5" opacity="0.1" />
        {/* Silhouette of a bicycle kick (upside down) */}
        <g transform="translate(10, 5) scale(0.95)">
          {/* Head */}
          <circle cx="120" cy="120" r="7" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Torso tilted */}
          <path d="M115 125 L88 115 L68 128 L82 135 L105 130 Z" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Right Leg kicking high */}
          <path d="M85 116 L88 68 L115 50" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          {/* Left Leg bent */}
          <path d="M88 116 L65 95 L50 110" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          {/* Arms supporting */}
          <path d="M108 126 L120 155 L135 158" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M98 128 L95 160" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {/* Ball flying high with trail */}
          <path d="M110 52 Q125 45 138 42" stroke={color} strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="145" cy="40" r="8" fill="black" stroke={color} strokeWidth="2" />
          <path d="M141 36 L149 44 M149 36 L141 44" stroke={color} strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    id: 3,
    name: "Corrida Explosiva",
    gradient: "from-emerald-600/20 via-green-950/40 to-black",
    color: "#10b981",
    svg: (color: string) => (
      <svg className="w-full h-full object-cover select-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ath3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#ath3)" />
        {/* Dynamic diagonal stripes */}
        <path d="M-50 150 L150 -50 M0 200 L200 0 M50 250 L250 50" stroke={color} strokeWidth="8" opacity="0.1" />
        {/* Running Athlete Silhouette */}
        <g transform="translate(15, 15)">
          {/* Head bent forward */}
          <circle cx="125" cy="65" r="7.5" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Body angled forward */}
          <path d="M120 72 L100 98 L80 135 H95 L112 108 L124 80 Z" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Arms running */}
          <path d="M118 78 L138 92 L145 80" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M110 82 L90 90 L80 82" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {/* Legs sprinting */}
          <path d="M96 130 L115 168 L105 185" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M85 135 L62 148 L55 172" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          {/* Speed particles */}
          <line x1="45" y1="90" x2="65" y2="90" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="30" y1="110" x2="55" y2="110" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="40" y1="130" x2="60" y2="130" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </g>
      </svg>
    )
  },
  {
    id: 4,
    name: "Domínio no Peito",
    gradient: "from-rose-600/20 via-rose-950/40 to-black",
    color: "#f43f5e",
    svg: (color: string) => (
      <svg className="w-full h-full object-cover select-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ath4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="url(#ath4)" />
        <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="1" strokeDasharray="8 8" opacity="0.2" />
        {/* Silhouette chest control */}
        <g transform="translate(10, 10)">
          {/* Head looking up */}
          <circle cx="95" cy="62" r="8" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Torso arched backward */}
          <path d="M96 72 C108 76, 110 92, 106 108 L90 142 H76 L82 110 C82 100, 84 80, 96 72 Z" fill="#ffffff" fillOpacity="0.1" stroke={color} strokeWidth="2" />
          {/* Arms out for balance */}
          <path d="M90 78 L65 78 L52 90" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M102 80 L128 85 L138 100" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {/* Legs planted */}
          <path d="M82 140 L88 180 L98 182" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M92 140 L102 178 L115 180" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
          {/* Ball dropped from above */}
          <circle cx="118" cy="46" r="8" fill="black" stroke={color} strokeWidth="2" />
          <circle cx="118" cy="46" r="3" fill={color} />
          {/* Motion dash */}
          <line x1="118" y1="26" x2="118" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </g>
      </svg>
    )
  }
];

export const THEME_COLORS: Record<string, { primary: string; glow: string; text: string; bgBadge: string; border: string }> = {
  gold: {
    primary: "#cca33d",
    glow: "rgba(204, 163, 61, 0.45)",
    text: "text-gold-400",
    bgBadge: "bg-gold-500/10",
    border: "border-gold-500/30"
  },
  emerald: {
    primary: "#10b981",
    glow: "rgba(16, 185, 129, 0.45)",
    text: "text-emerald-400",
    bgBadge: "bg-emerald-500/10",
    border: "border-emerald-500/30"
  },
  blue: {
    primary: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.45)",
    text: "text-blue-400",
    bgBadge: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  crimson: {
    primary: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.45)",
    text: "text-rose-400",
    bgBadge: "bg-rose-500/10",
    border: "border-rose-500/30"
  }
};
