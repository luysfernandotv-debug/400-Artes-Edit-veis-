import React from 'react';
import { Palette } from 'lucide-react';

function BeforeAfterComparison() {
  const [sliderPercent, setSliderPercent] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState<number>(16 / 9);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);

  const beforeUrl = "https://i.ibb.co/jvs1fynS/IMG-8148.jpg";
  const afterUrl = "https://i.ibb.co/S7XYT2sh/IMG-7484.jpg";

  React.useEffect(() => {
    if (!containerRef.current) return;
    
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    updateSize();

    const img = new window.Image();
    img.src = beforeUrl;
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    };

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleMove = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPercent(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div 
        className="flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.2em] bg-neutral-50 rounded-full px-5 py-2 shadow-sm"
        style={{ borderColor: '#f97316', borderWidth: '2px', borderStyle: 'solid' }}
      >
        <button 
          onClick={() => setSliderPercent(0)}
          className={`transition-all duration-300 ${sliderPercent < 45 ? "text-amber-600 font-extrabold scale-105" : "text-neutral-600 hover:text-neutral-900"}`}
        >
          ANTES
        </button>
        <button
          onClick={() => setSliderPercent(50)}
          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all duration-300 ${sliderPercent >= 45 && sliderPercent <= 55 ? "bg-amber-500 text-white font-bold" : "text-neutral-500 hover:text-neutral-800"}`}
        >
          50/50
        </button>
        <button 
          onClick={() => setSliderPercent(100)}
          className={`transition-all duration-300 ${sliderPercent > 55 ? "text-amber-600 font-extrabold scale-105" : "text-neutral-600 hover:text-neutral-900"}`}
        >
          DEPOIS
        </button>
      </div>

      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative w-full overflow-hidden bg-neutral-100 border border-neutral-300 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] cursor-ew-resize select-none touch-none"
        style={{ aspectRatio: `${aspectRatio}` }}
      >
        <img 
          src={beforeUrl} 
          alt="Antes"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        <div 
          className="absolute inset-y-0 left-0 overflow-hidden will-change-[width]"
          style={{ 
            width: `${sliderPercent}%`
          }}
        >
          <img 
            src={afterUrl} 
            alt="Depois"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-y-0 left-0 object-cover select-none pointer-events-none"
            style={{ width: containerWidth || '100%', height: '100%', maxWidth: 'none' }}
          />
        </div>

        <div 
          className="absolute inset-y-0 w-0.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] will-change-[left]"
          style={{ 
            left: `${sliderPercent}%`
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 p-[2.5px] flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.6)] cursor-ew-resize hover:scale-110 transition-transform">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-amber-300 shadow-inner text-orange-600">
              <div className="flex gap-1 items-center justify-center">
                <span className="text-xs font-black leading-none select-none text-orange-600">&lsaquo;</span>
                <span className="text-xs font-black leading-none select-none text-orange-600">&rsaquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HighlightsSection() {
  // List of materials matching exact copy requirements
  const materialsList = [
    'Destaques',
    'Capas',
    'Logos',
    'Escudos editáveis',
    'Stories',
    'Banners',
    'Capas de campeonato'
  ];

  return (
    <section 
      id="destaques-e-identidade-visual"
      className="relative w-full bg-[#ffffff] text-neutral-900 pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden"
      style={{ marginTop: '-32px' }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[30%] right-[-5%] w-[45%] h-[45%] rounded-full filter blur-[150px] opacity-15" 
          style={{ backgroundColor: '#fef08a' }}
        />
        <div 
          className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full filter blur-[140px] opacity-15" 
          style={{ backgroundColor: '#fed7aa' }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* HEADER BLOCK - EXACT COPY REQUIRED */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* EXACT COPY TÍTULO */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-neutral-950 uppercase leading-none"
            style={{ fontSize: '35px', lineHeight: '32px' }}
          >
            ANTES E DEPOIS: <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">OLHA A DIFERENÇA</span>
          </h2>

          {/* EXACT COPY SUBTÍTULO: */}
          <div 
            className="flex flex-col items-center gap-1.5 text-neutral-700 font-sans max-w-2xl mx-auto"
          >
            <p 
              className="text-center font-bold text-neutral-800"
              style={{ fontSize: '21px', lineHeight: '21px', borderColor: '#000000' }}
            >
              Com as artes certas, seu Instagram deixa de parecer improvisado e ganha uma identidade visual profissional
            </p>
          </div>
        </div>

        {/* COMPARATIVO ANTES E DEPOIS */}
        <div 
          className="pt-2 max-w-4xl mx-auto space-y-6"
          style={{ 
            marginBottom: '0px',
            marginTop: '-32px'
          }}
        >
          <BeforeAfterComparison />
        </div>



      </div>
    </section>
  );
}
