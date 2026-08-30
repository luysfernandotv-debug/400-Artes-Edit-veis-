import React, { useState, useEffect } from 'react';
import { TeamSettings, ThemeColor } from '../types';
import { SPORT_SHIELDS, ATHLETE_IMAGES, THEME_COLORS } from '../data/sportAssets';
import DeviceMockups from './DeviceMockups';
import { Sparkles, Trophy, Settings2, Shield, Eye, Flame, Check, HelpCircle, ChevronRight } from 'lucide-react';

export default function Hero() {
  // Load LiteVideo script
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://app.litevideo.net/p.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://app.litevideo.net/p.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Master states representing customizable parameters for the sports template library
  const [settings, setSettings] = useState<TeamSettings>({
    teamName: "GAVIÕES FC",
    shortName: "GAV",
    crestIndex: 0, // "Leão Real"
    themeColor: "gold",
    athleteImageIndex: 0, // "Comemoração Épica"
    opponentName: "PALMEIRINHAS",
    opponentCrestIndex: 4, // "Atlético Aliança"
    opponentScore: 1,
    teamScore: 3
  });

  const [activeTab, setActiveTab] = useState<'editor' | 'templates'>('editor');

  const updateSetting = (updates: Partial<TeamSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...updates };
      // Keep shortName in sync if teamName changes
      if (updates.teamName) {
        next.shortName = updates.teamName.slice(0, 3).toUpperCase();
      }
      return next;
    });
  };

  const activeColor = THEME_COLORS[settings.themeColor] || THEME_COLORS.gold;

  return (
    <section 
      id="landing-hero"
      className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      {/* 1. Background Grid & Atmospheric Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep background mesh and subtle grid */}
        <div 
          className="absolute inset-0 opacity-10 bg-radial-gradient"
          style={{ 
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        />
        
        {/* Soft graphite base transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 via-black to-black" />

        {/* Themed Ambient Light Glows */}
        <div 
          className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] rounded-full filter blur-[140px] opacity-15"
          style={{ backgroundColor: activeColor.primary }}
        />
        <div 
          className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] rounded-full filter blur-[120px] opacity-10"
          style={{ backgroundColor: activeColor.primary }}
        />

        {/* Tiny Golden Metallic Accents / Glitter stars */}
        <div className="absolute top-[15%] right-[12%] w-[1px] h-[60px] bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute bottom-[20%] left-[8%] w-[1px] h-[80px] bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Textual Content, Customizer, VSL Player, and Mobile Mockups */}
        <div 
          className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 sm:space-y-8"
          style={{ marginTop: '-20px' }}
        >
          {/* HEADLINE: Exact Copy requested */}
          <h1 
            className="font-extrabold font-display tracking-tight text-white text-center"
            style={{ fontSize: '39px', lineHeight: '35.8px' }}
          >
            Mais de <span style={{ color: '#FFDC00' }}>400 Artes Editáveis</span> para deixar o <span style={{ backgroundImage: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Instagram</span> do seu Baba, Pelada, Time ou Campeonato <span style={{ color: '#FFDC00' }}>Amador</span> muito mais <span style={{ color: '#10B981' }}>profissional</span>
          </h1>

          {/* SUBHEADLINE: Exact Copy requested */}
          <div 
            className="space-y-2 text-center"
          >
            <p 
              className="font-medium"
              style={{
                fontFamily: 'Inter, sans-serif',
                lineHeight: '18.5px',
                fontSize: '16px',
                color: '#ffffff',
                marginTop: '-5px'
              }}
            >
              Troque apenas a foto, o nome e o escudo
              <br />
              Em poucos minutos, sua arte estará pronta para publicar no Instagram
            </p>
          </div>

          {/* VSL Embed Video Player */}
          <div 
            className="w-full max-w-[340px] sm:max-w-[360px] mx-auto overflow-hidden rounded-2xl shadow-2xl border-2 border-amber-500/90 bg-neutral-900/50"
            style={{
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
            }}
          >
            <div 
              className="w-full"
              dangerouslySetInnerHTML={{
                __html: `<lt-v2 v="9c2cc006-0d75-40fc-96af-1d8390d0e6b2" ar="9:16" sc="0" st="0" ib="ff0000" io="100" ps="huge" ph="8" ct="[[]]"></lt-v2>`
              }}
            />
          </div>

          {/* CUSTOM CTA BUTTON: Exact requested text, gold metallic look, high-contrast, tactile height >=56px on mobile */}
          <div 
            className="flex flex-col gap-3 pt-2"
          >
            <a 
              id="b5ffaddf-9884-f057-9ccc-31d4ee3abd09"
              href="#escolha-seu-plano"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="animate-gentle-pulse relative group w-full inline-flex items-center justify-center font-display text-[11px] sm:text-[13px] font-black tracking-[0.2em] uppercase text-black bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 min-h-[56px] px-8 py-4 sm:py-4.5 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.985]"
              style={{ 
                boxShadow: `0 12px 35px -8px ${activeColor.glow}`
              }}
            >
              <span 
                className="relative z-10 flex items-center justify-center gap-2"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: '900',
                  fontSize: '19px',
                  lineHeight: '22px',
                  fontStyle: 'normal',
                  textDecorationLine: 'none',
                  textAlign: 'center',
                  height: 'auto',
                  width: 'auto',
                  letterSpacing: '0.05em'
                }}
              >
                QUERO AS 400 ARTES
                <ChevronRight className="w-6 h-6 text-black stroke-[3.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Huge, dominating Mockups Composition (ONLY DESKTOP NOW) */}
        {/* Occupies 7 columns on Desktop (nearly 60-70% visual area impact) */}
        <div className="hidden lg:flex lg:col-span-7 items-center justify-center">
          <DeviceMockups settings={settings} />
        </div>

      </div>
    </section>
  );
}
