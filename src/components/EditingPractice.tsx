import React, { useEffect } from 'react';
import { Play, Video } from 'lucide-react';

export default function EditingPractice() {
  // Load LiteVideo script
  useEffect(() => {
    if (!document.querySelector('script[src="https://app.litevideo.net/p.js"]')) {
      const script = document.createElement('script');
      script.src = "https://app.litevideo.net/p.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section 
      id="editando-na-pratica"
      className="relative w-full bg-[#030303] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
      style={{ marginTop: '-40px', marginBottom: '0px' }}
    >
      {/* Background lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full filter blur-[140px] opacity-10 bg-amber-500/10" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full filter blur-[150px] opacity-10 bg-amber-500/15" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        
        {/* Section Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large, Highly Premium Interactive Video Player Mockup */}
          {/* Represents 70% of spatial impact visually */}
          <div className="w-full lg:col-span-7 flex flex-col items-center justify-center space-y-4">
            
            {/* Header Callout pointing to video */}
            <div 
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-900/90 border border-amber-500/40 text-amber-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400/20" />
              <span>Assista ao vídeo abaixo</span>
            </div>

            {/* Clean Vertical 9:16 Video Player Container */}
            <div 
              id="canva-player-frame"
              className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] mx-auto overflow-hidden bg-transparent border-0 border-none outline-none rounded-none shadow-none"
            >
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<lt-v2 v="56885fe2-5d7e-4745-9194-4835618860a2" ar="9:16" sc="0" st="0" ib="ff0000" io="100" ps="huge" pe="4x" ph="8" ct="[[]]"></lt-v2>`
                }}
              />
            </div>

            {/* LOWER DISCRETE BUTTON: Strict layout requirement (Positioned below player, green pulsing button) */}
            <a 
              id="eb806ec3-d2f8-e677-d4fd-f3cf0493d699"
              href="#escolha-seu-plano"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="animate-scale-pulse w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-2 text-black bg-gradient-to-r from-[#10B981] via-[#4ADE80] to-[#059669] hover:opacity-95 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.985] shadow-[0_4px_20px_rgba(34,197,94,0.4)]"
            >
              <span style={{ fontSize: '18px', textAlign: 'center', lineHeight: '20px', fontFamily: 'Outfit', fontWeight: 900, textTransform: 'uppercase' }}>
                400 artes editáveis para futebol
              </span>
            </a>

          </div>

          {/* RIGHT COLUMN: Supporting Typography & Vertical Timeline Stepper */}
          {/* Aligned 30% spatial impact layout */}
          <div className="w-full lg:col-span-5 flex flex-col text-left space-y-6 lg:pl-4">
            
            {/* Header copy */}
            <div className="space-y-3 flex flex-col items-center text-center">
              {/* EXACT COPY TÍTULO: EDITAR É MUITO MAIS FÁCIL DO QUE VOCÊ IMAGINA */}
              <h2 
                className="text-2xl sm:text-3xl font-black font-display text-white uppercase leading-[1.1] mt-4 sm:mt-6"
                style={{ textAlign: 'center', marginTop: '20px' }}
              >
                EDITAR É MUITO MAIS FÁCIL DO QUE VOCÊ IMAGINA
              </h2>

              {/* EXACT COPY SUBTÍTULO: Em poucos minutos sua arte já está pronta */}
              <p 
                className="text-sm font-bold text-amber-500 uppercase font-sans"
                style={{ textAlign: 'center', fontSize: '18px', lineHeight: '20.2857px' }}
              >
                Em poucos minutos sua arte já está pronta
              </p>
            </div>

            {/* VIDEO CONTAINER COM O PLAYER LITEVIDEO */}
            <div 
              id="video-tutorial-container"
              className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/80 shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center transition-all duration-300"
              style={{
                aspectRatio: '9/16',
                border: '1px solid rgba(191, 149, 63, 0.4)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(191, 149, 63, 0.08)'
              }}
            >
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<lt-v2 v="56885fe2-5d7e-4745-9194-4835618860a2" ar="9:16" sc="0" st="0" ib="ff0000" io="100" ps="huge" pe="2x" ct="[[]]"></lt-v2>`
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
