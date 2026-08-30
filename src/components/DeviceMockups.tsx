import React from 'react';
import { TeamSettings } from '../types';
import TemplateCard from './TemplateCard';
import { THEME_COLORS } from '../data/sportAssets';
import { Laptop, Smartphone, Tablet, Layers, Eye, RefreshCw, Sliders, ChevronRight } from 'lucide-react';

interface DeviceMockupsProps {
  settings: TeamSettings;
}

export default function DeviceMockups({ settings }: DeviceMockupsProps) {
  const activeColor = THEME_COLORS[settings.themeColor] || THEME_COLORS.gold;

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[1.1] xl:aspect-[1.2] flex items-center justify-center select-none py-10">
      {/* Premium ambient light backgrounds behind mockups */}
      <div 
        className="absolute w-[80%] h-[80%] rounded-full filter blur-[100px] opacity-20 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${activeColor.primary} 0%, transparent 70%)` 
        }}
      />
      
      {/* 3D Container Wrapper with perspective */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: 1200 }}>

        {/* 1. TABLET MOCKUP - Positioned on the left back */}
        <div 
          className="absolute left-[3%] top-[15%] w-[42%] aspect-[3/4] rounded-3xl p-3 bg-neutral-900/90 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 hidden sm:block overflow-hidden origin-bottom-right"
          style={{ 
            boxShadow: `0 25px 60px -15px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.2)`,
            transform: 'rotateY(16deg) rotateX(6deg)'
          }}
        >
          {/* Tablet Inner Bezel */}
          <div className="relative w-full h-full bg-[#0d0d0d] rounded-2xl overflow-hidden border border-neutral-800 flex flex-col justify-between">
            {/* Tablet Camera Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-800 z-30" />

            {/* Tablet Content: Sports Standings & Stats App */}
            <div className="w-full h-full flex flex-col">
              {/* App Bar */}
              <div className="bg-[#141414] border-b border-neutral-900 px-3 py-2 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[8px] text-neutral-400 font-mono tracking-wider uppercase">Copa Regional App</div>
                <Layers className="w-3.5 h-3.5 text-neutral-500" />
              </div>

              {/* Tablet Live Layout */}
              <div className="flex-1 overflow-hidden p-2 flex flex-col justify-center">
                <TemplateCard type="classificacao" settings={settings} isMini={true} className="border-0 shadow-none scale-95" />
              </div>
            </div>

            {/* Screen shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.08] pointer-events-none" />
          </div>
        </div>


        {/* 2. LAPTOP MOCKUP (Notebook) - Core/Dominant element in center */}
        <div 
          className="absolute w-[80%] sm:w-[68%] md:w-[74%] lg:w-[70%] aspect-[1.6/1] z-20"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateY(-10px) rotateX(8deg) rotateY(-10deg) rotateZ(-1deg)'
          }}
        >
          {/* Laptop Screen Frame (MacBook Style) */}
          <div 
            className="w-full h-full rounded-2xl bg-neutral-900 p-2.5 border border-neutral-800 relative"
            style={{ 
              boxShadow: `0 40px 100px -20px rgba(0,0,0,1), 0 0 1px 1px rgba(255,255,255,0.05) inset`
            }}
          >
            {/* Screen Glass Inner */}
            <div className="w-full h-full rounded-xl bg-[#090909] overflow-hidden border border-neutral-950 flex flex-col relative">
              
              {/* Laptop Web Camera */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-850 z-30 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-900/60" />
              </div>

              {/* Designer Platform Dashboard UI */}
              <div className="flex-1 flex flex-col h-full text-neutral-300 font-sans">
                
                {/* Header Navbar */}
                <div className="bg-[#121212] border-b border-neutral-900 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Brand logo */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-extrabold text-[10px] shadow-lg">
                        A
                      </div>
                      <span className="text-[11px] font-bold font-display tracking-widest text-white uppercase hidden sm:inline">
                        ATHLETA STUDIO
                      </span>
                    </div>
                    {/* File info */}
                    <div className="h-4 w-[1px] bg-neutral-800 hidden sm:block"></div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase hidden sm:inline">
                      instagram_feed_pack_v1
                    </span>
                  </div>

                  {/* Status indicators */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase">Live Renderer</span>
                    </div>

                    <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 text-[9px] font-mono text-amber-500">
                      <Sliders className="w-3 h-3" />
                      <span>Pro Edition</span>
                    </div>
                  </div>
                </div>

                {/* Main Workspace Layout */}
                <div className="flex-1 flex overflow-hidden">
                  
                  {/* Left Sidebar - Template Pages */}
                  <div className="w-24 bg-[#0d0d0d] border-r border-neutral-950 p-2 flex flex-col gap-2.5 hidden sm:flex">
                    <span className="text-[7px] font-mono font-bold uppercase tracking-wider text-neutral-600 px-1">Artes (400+)</span>
                    
                    <div className="flex flex-col gap-1.5">
                      {['Feed Escalação', 'Feed Resultado', 'Story Matchday', 'Destaque Capa'].map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`p-1.5 rounded border text-[8px] font-medium transition-colors cursor-pointer text-left ${
                            idx === 0 
                              ? 'bg-neutral-900 border-neutral-800 text-white' 
                              : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300'
                          }`}
                        >
                          <div className="w-full aspect-square bg-[#030303] rounded border border-neutral-850 mb-1 flex items-center justify-center text-[10px]" style={{ color: idx === 0 ? activeColor.primary : '#555' }}>
                            {idx === 0 ? '⚽' : (idx === 1 ? '🏆' : (idx === 2 ? '📱' : '⭐'))}
                          </div>
                          <span className="truncate block leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Central Main Artboard Stage */}
                  <div className="flex-1 bg-[#060606] relative p-3 flex flex-col items-center justify-center overflow-hidden">
                    
                    {/* Top Rulers / Grid Indicator */}
                    <div className="absolute top-1 left-2 text-[8px] font-mono text-neutral-600">
                      Artboard #1 • 1080x1080px (1:1)
                    </div>

                    {/* Canvas Stage Frame containing live updating Card */}
                    <div 
                      className="w-[82%] sm:w-[65%] md:w-[60%] lg:w-[58%] aspect-square rounded-lg relative overflow-hidden transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.9)]"
                      style={{ 
                        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.95), 0 0 1px 1.5px ${activeColor.primary}30`
                      }}
                    >
                      <TemplateCard type="escalacao" settings={settings} className="scale-100 border-0" />
                    </div>

                    {/* Quick design actions overlay */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#121212]/90 border border-neutral-800 px-3 py-1 rounded-full backdrop-blur-md shadow-lg z-10">
                      <button className="flex items-center gap-1 text-[8px] font-mono text-neutral-400 hover:text-white transition-colors">
                        <Eye className="w-2.5 h-2.5" />
                        <span>Visualizar</span>
                      </button>
                      <span className="w-[1px] h-3 bg-neutral-800"></span>
                      <button className="flex items-center gap-1 text-[8px] font-mono text-neutral-400 hover:text-white transition-colors">
                        <RefreshCw className="w-2.5 h-2.5" />
                        <span>Resetar</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Sidebar - Layers & Controls */}
                  <div className="w-32 bg-[#0d0d0d] border-l border-neutral-950 p-2.5 hidden md:flex flex-col gap-3 justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-[7px] font-mono font-bold uppercase tracking-wider text-neutral-600">
                        <span>Camadas</span>
                        <span className="text-amber-500">Auto</span>
                      </div>

                      <div className="flex flex-col gap-1.5 font-mono text-[8px]">
                        {[
                          { name: 'logo_time.svg', type: 'crest', active: true },
                          { name: 'escalaçoes_ponto.gpx', type: 'field', active: true },
                          { name: 'nome_clube_txt', type: 'text', active: true },
                          { name: 'foto_principal.png', type: 'image', active: true },
                          { name: 'linhas_grade_metal', type: 'shape', active: false }
                        ].map((layer, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-center justify-between px-1.5 py-1 rounded transition-colors ${
                              layer.active ? 'bg-neutral-900/60 text-white' : 'text-neutral-500'
                            }`}
                          >
                            <span className="truncate max-w-[85px]">{layer.name}</span>
                            <span className="text-[6px] opacity-60">
                              {layer.active ? '👁️' : '🔒'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Auto Export panel */}
                    <div className="bg-neutral-900/50 border border-neutral-850 p-2 rounded flex flex-col gap-1.5">
                      <span className="text-[7px] font-mono text-neutral-500 uppercase">Exportação</span>
                      <button 
                        className="w-full py-1 rounded text-[8px] font-mono font-bold uppercase text-center transition-all"
                        style={{ backgroundColor: activeColor.primary, color: '#000' }}
                      >
                        PNG Ultra HD
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Screen reflection shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.06] pointer-events-none z-10" />
            </div>
          </div>

          {/* Laptop Base Body (Bottom Hinge & Case Bevel) */}
          <div className="w-[104%] h-3.5 bg-neutral-800 rounded-b-xl border-t border-neutral-700/80 absolute bottom-[-13.5px] left-[-2%] z-10 overflow-hidden shadow-[0_12px_25px_rgba(0,0,0,0.9)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-black rounded-b-md" /> {/* Hinge recess */}
            <div className="w-full h-1 bg-[#1a1a1a]" />
            <div className="w-full h-2.5 bg-[#262626] border-b border-[#3a3a3a]" />
          </div>
        </div>


        {/* 3. SMARTPHONE MOCKUP (Mobile) - Floating prominently on the right front */}
        <div 
          className="absolute right-[2%] sm:right-[5%] bottom-[8%] w-[26%] sm:w-[22%] aspect-[9/18.5] rounded-[2.2rem] p-2 bg-neutral-900/90 border-2 border-neutral-800 z-30 overflow-hidden"
          style={{ 
            boxShadow: `0 30px 70px -10px rgba(0,0,0,1), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 15px ${activeColor.primary}20`,
            transform: 'rotateY(-12deg) rotateX(4deg) rotateZ(2deg)'
          }}
        >
          {/* Smartphone Inner Frame */}
          <div className="relative w-full h-full bg-[#050505] rounded-[1.8rem] overflow-hidden border border-neutral-950 flex flex-col justify-between">
            
            {/* iPhone Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-black z-30 flex items-center justify-end px-1.5">
              <div className="w-1 h-1 rounded-full bg-blue-900/40 mr-1" />
              <div className="w-1 h-1 rounded-full bg-zinc-900" />
            </div>

            {/* Smartphone Live Content: 9:16 Instagram Stories Template */}
            <div className="w-full h-full">
              <TemplateCard type="stories" settings={settings} className="scale-100 border-0 h-full" />
            </div>

            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.09] pointer-events-none z-20" />
          </div>
        </div>

      </div>
    </div>
  );
}
