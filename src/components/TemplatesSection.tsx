import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Trophy, Shield, Calendar, Users, Award, Goal, ArrowLeft, ArrowRight,
  ChevronLeft, ChevronRight, CheckCircle, Flame, Star, AlertTriangle, HelpCircle,
  Megaphone, Ticket, Percent, Image, Smartphone, LayoutGrid, Palette, Instagram, Laptop
} from 'lucide-react';
import { SPORT_SHIELDS, ATHLETE_IMAGES, THEME_COLORS } from '../data/sportAssets';

// Local static image assets for the premium carousel
import imgSelecao from '../../assets/selecao_da_rodada.svg';
import imgParceiros from '../../assets/parceiros_oficiais.svg';
import imgArtilheiro from '../../assets/artilheiro.svg';
import imgProxima from '../../assets/proxima_rodada.svg';
import imgResultado from '../../assets/resultado_final.svg';
import imgBolaMurcha from '../../assets/bola_murcha.svg';
import imgCraque from '../../assets/craque_da_rodada.svg';
import imgTime from '../../assets/time_da_rodada.svg';

// Types for the carousel templates
interface VisualTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  themeColor: 'gold' | 'emerald' | 'blue' | 'crimson';
  url: string;
  render: (color: string) => React.ReactNode;
}

function CarouselSlide({ template, activeColor }: { template: VisualTemplate; activeColor: string }) {
  const [imageError, setImageError] = useState(!template.url);
  const [loading, setLoading] = useState(!!template.url);

  useEffect(() => {
    setImageError(!template.url);
    setLoading(!!template.url);
  }, [template.url]);

  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden border border-neutral-950 shadow-inner relative flex items-center justify-center">
      {!imageError && template.url ? (
        <div className="w-full h-full relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#070707] z-10">
              <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={template.url}
            alt={template.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setLoading(false)}
            onError={() => {
              setImageError(true);
              setLoading(false);
            }}
            className={`w-full h-full object-cover rounded-xl transition-all duration-300 ${
              loading ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
        </div>
      ) : (
        <div className="w-full h-full relative">
          {template.render(activeColor)}
          <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm border border-neutral-800/60 px-1.5 py-0.5 rounded text-[8px] font-mono text-neutral-400">
            Preview
          </div>
        </div>
      )}
    </div>
  );
}

function AutoplayCarousel({ templates }: { templates: VisualTemplate[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % templates.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  useEffect(() => {
    if (index >= templates.length) {
      setIndex(0);
    }
  }, [templates.length, index]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (el && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, { rootMargin: '200px 0px' });
      observer.observe(el);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (templates.length <= 1 || !isInView) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % templates.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [templates.length, isInView]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      slideNext();
    } else if (isRightSwipe) {
      slidePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (templates.length === 0) return null;

  const currentTemplate = templates[index] || templates[0];
  const colors = THEME_COLORS[currentTemplate.themeColor];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      }
    })
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden bg-[#070707] border border-neutral-900 shadow-xl group p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); slidePrev(); }}
        className="absolute left-6 top-[40%] -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); slideNext(); }}
        className="absolute right-6 top-[40%] -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </button>

      <div className="relative w-full aspect-[1/1.18] overflow-hidden">
        <div
          key={`${currentTemplate.id}-${index}`}
          className="absolute inset-0 flex flex-col justify-between transition-opacity duration-300"
        >
          <div className="w-full aspect-square">
            <CarouselSlide template={currentTemplate} activeColor={colors.primary} />
          </div>

          <div className="flex justify-between items-center px-1 py-2">
            <div>
              <span className="block text-xs font-bold text-white uppercase tracking-wider truncate max-w-[200px]">
                {currentTemplate.title}
              </span>
              <span className="block text-[9px] font-mono text-neutral-500 uppercase">
                Insta {currentTemplate.category} • HD PREMIUM
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-2.5 h-2.5 rounded-full filter blur-[2px] opacity-85"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-2 bg-black/40 backdrop-blur-sm py-1 px-2.5 rounded-full border border-neutral-900/60 w-fit mx-auto">
        {templates.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-amber-500 w-3' : 'bg-neutral-600 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Assets and component for the new premium horizontal image carousel
const CAROUSEL_IMAGES_1 = [
  { id: 'img-1-1', url: 'https://i.ibb.co/8DhGKLtr/t11-p8.jpg' },
  { id: 'img-1-2', url: 'https://i.ibb.co/mPygYwz/t11-p7.jpg' },
  { id: 'img-1-3', url: 'https://i.ibb.co/qMJYLjq3/t11-p6.jpg' },
  { id: 'img-1-4', url: 'https://i.ibb.co/whR9f5pJ/t11-p5.jpg' },
  { id: 'img-1-5', url: 'https://i.ibb.co/7tCdLMnX/t11-p4.jpg' },
  { id: 'img-1-6', url: 'https://i.ibb.co/pjTsv9Zg/t11-p3.jpg' },
  { id: 'img-1-7', url: 'https://i.ibb.co/d0NDmyng/t11-p2.jpg' },
  { id: 'img-1-8', url: 'https://i.ibb.co/LXKQCgbT/t11-p1.jpg' }
];

const CAROUSEL_IMAGES_2 = [
  { id: 'img-2-1', url: 'https://i.ibb.co/fYbg0wYH/t12-p8.jpg' },
  { id: 'img-2-2', url: 'https://i.ibb.co/dzvXDJZ/t12-p7.jpg' },
  { id: 'img-2-3', url: 'https://i.ibb.co/LX12r4Mf/t12-p6.jpg' },
  { id: 'img-2-4', url: 'https://i.ibb.co/SXtsJkY5/t12-p5.jpg' },
  { id: 'img-2-5', url: 'https://i.ibb.co/6cCgRFt2/t12-p4.jpg' },
  { id: 'img-2-6', url: 'https://i.ibb.co/TM0k1Tjt/t12-p3.jpg' },
  { id: 'img-2-7', url: 'https://i.ibb.co/d41jBGVD/t12-p2.jpg' },
  { id: 'img-2-8', url: 'https://i.ibb.co/nMn4hWXF/t12-p1.jpg' }
];

const CAROUSEL_IMAGES_3 = [
  { id: 'img-3-1', url: 'https://i.ibb.co/SXnyQnh3/t13-p8.jpg' },
  { id: 'img-3-2', url: 'https://i.ibb.co/MmPRJHC/t13-p7.jpg' },
  { id: 'img-3-3', url: 'https://i.ibb.co/s967XcnJ/t13-p6.jpg' },
  { id: 'img-3-4', url: 'https://i.ibb.co/zHNdrJzt/t13-p5.jpg' },
  { id: 'img-3-5', url: 'https://i.ibb.co/hFkrSWYr/t13-p4.jpg' },
  { id: 'img-3-6', url: 'https://i.ibb.co/JjFx9chH/t13-p3.jpg' },
  { id: 'img-3-7', url: 'https://i.ibb.co/npTXQVF/t13-p2.jpg' },
  { id: 'img-3-8', url: 'https://i.ibb.co/d4rkrp2f/t13-p1.jpg' }
];

const CAROUSEL_IMAGES_4 = [
  { id: 'img-4-1', url: 'https://i.ibb.co/JWMrVpzY/t9-p1.jpg' },
  { id: 'img-4-2', url: 'https://i.ibb.co/fzG9Qhwv/t9-p7-1.jpg' },
  { id: 'img-4-3', url: 'https://i.ibb.co/089F5J8/t9-p6.jpg' },
  { id: 'img-4-4', url: 'https://i.ibb.co/1Yyy3kVw/t9-p5.jpg' },
  { id: 'img-4-5', url: 'https://i.ibb.co/VpxQjnKY/t9-p4.jpg' },
  { id: 'img-4-6', url: 'https://i.ibb.co/QF4F7zYQ/t9-p3.jpg' },
  { id: 'img-4-7', url: 'https://i.ibb.co/8gtCKR5V/t9-p2.jpg' },
  { id: 'img-4-8', url: 'https://i.ibb.co/n2DktvR/t9-p8.jpg' }
];

interface PremiumHorizontalCarouselProps {
  images: Array<{ id: string; url: string; title?: string }>;
  reverse?: boolean;
  shiftFraction?: number;
}

function PremiumHorizontalCarousel({ images, reverse = false, shiftFraction = 0 }: PremiumHorizontalCarouselProps) {
  const visibleCount = 3;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const N = images.length;
  const singleSetPercent = N * (100 / visibleCount);
  
  const initialOffset = singleSetPercent + (singleSetPercent * shiftFraction);
  
  // Track state using refs for ultra-smooth 60fps animations without React render overhead
  const offsetRef = useRef(initialOffset);
  const isDraggingRef = useRef(false);
  const dragStartPxRef = useRef(0);
  const dragStartPercentRef = useRef(0);

  // Speed: percentage of container width per frame.
  // 0.12% per frame (approx. 7.2% per second at 60fps) is fast but smooth and premium.
  const speed = 0.12;

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;

    const animate = () => {
      if (!isDraggingRef.current) {
        if (reverse) {
          offsetRef.current -= speed;
        } else {
          offsetRef.current += speed;
        }
        
        // Wrap around seamlessly
        if (offsetRef.current >= 2 * singleSetPercent) {
          offsetRef.current -= singleSetPercent;
        } else if (offsetRef.current < singleSetPercent) {
          offsetRef.current += singleSetPercent;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}%, 0, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [singleSetPercent, reverse, isInView]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    dragStartPxRef.current = e.targetTouches[0].clientX;
    dragStartPercentRef.current = offsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const currentPx = e.targetTouches[0].clientX;
    const deltaPx = dragStartPxRef.current - currentPx;
    const containerWidth = containerRef.current.clientWidth || 1;
    const deltaPercent = (deltaPx / containerWidth) * 100;
    
    let newOffset = dragStartPercentRef.current + deltaPercent;
    
    // Wrap around seamlessly during dragging too!
    if (newOffset >= 2 * singleSetPercent) {
      newOffset -= singleSetPercent;
      dragStartPercentRef.current -= singleSetPercent;
    } else if (newOffset < singleSetPercent) {
      newOffset += singleSetPercent;
      dragStartPercentRef.current += singleSetPercent;
    }
    
    offsetRef.current = newOffset;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}%, 0, 0)`;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Mouse handlers for desktop dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartPxRef.current = e.clientX;
    dragStartPercentRef.current = offsetRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const currentPx = e.clientX;
    const deltaPx = dragStartPxRef.current - currentPx;
    const containerWidth = containerRef.current.clientWidth || 1;
    const deltaPercent = (deltaPx / containerWidth) * 100;
    
    let newOffset = dragStartPercentRef.current + deltaPercent;
    
    if (newOffset >= 2 * singleSetPercent) {
      newOffset -= singleSetPercent;
      dragStartPercentRef.current -= singleSetPercent;
    } else if (newOffset < singleSetPercent) {
      newOffset += singleSetPercent;
      dragStartPercentRef.current += singleSetPercent;
    }
    
    offsetRef.current = newOffset;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}%, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const displayImages = [...images, ...images, ...images];

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-0 group overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Outer wrapper to clip slides */}
      <div className="overflow-hidden w-full px-0">
        {/* Sliding track */}
        <div 
          ref={trackRef}
          className="flex will-change-transform"
          style={{ 
            transform: `translate3d(-${initialOffset}%, 0, 0)`
          }}
        >
          {displayImages.map((img, idx) => (
            <div 
              key={`${img.id}-clone-${idx}`} 
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-100 group/card">
                <img 
                  src={img.url} 
                  alt={img.title || ''}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 pointer-events-none"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  // Pre-designed templates demonstrating each category with incredibly high polish
  const templates: VisualTemplate[] = [
    {
      id: 'craque-rodada',
      category: 'destaque',
      title: 'Craque da Rodada',
      description: 'Destaque individual com estatísticas do melhor em campo.',
      themeColor: 'gold',
      url: 'https://starhosted.com.br/futebol/craque-da-rodada.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded text-[8px] font-mono text-amber-400">
            <Star className="w-2.5 h-2.5 fill-current" />
            <span>M.V.P</span>
          </div>

          <div className="flex justify-between items-start z-10">
            <div className="w-8 h-8 opacity-45">
              {SPORT_SHIELDS[0].elements(color)}
            </div>
            <div className="text-right">
              <span className="block text-[7px] font-mono tracking-widest text-neutral-400 uppercase">Campeonato</span>
              <span className="block text-[9px] font-bold text-white uppercase">Série Ouro</span>
            </div>
          </div>

          <div className="my-auto text-center z-10 flex flex-col items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500 shadow-xl mb-2 bg-[#121212]">
              {ATHLETE_IMAGES[0].svg(color)}
            </div>
            <span className="text-[14px] font-extrabold tracking-tight text-white uppercase font-display leading-none">
              Nenê Alagoano
            </span>
            <span className="text-[7px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
              GAVIÕES F.C. • Meio Campo
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 bg-neutral-900/60 border border-neutral-850 rounded-lg p-1.5 z-10">
            <div className="text-center">
              <span className="block text-[6px] font-mono text-neutral-500 uppercase">Gols</span>
              <span className="block text-xs font-black font-mono text-white">03</span>
            </div>
            <div className="text-center border-x border-neutral-850">
              <span className="block text-[6px] font-mono text-neutral-500 uppercase">Assists</span>
              <span className="block text-xs font-black font-mono text-white">01</span>
            </div>
            <div className="text-center">
              <span className="block text-[6px] font-mono text-neutral-500 uppercase">Chutes</span>
              <span className="block text-xs font-black font-mono text-amber-400">92%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bola-murcha',
      category: 'humor',
      title: 'Bola Murcha',
      description: 'Brincadeira saudável com o lance mais bizarro do jogo.',
      themeColor: 'crimson',
      url: 'https://starhosted.com.br/futebol/bola-murcha.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded text-[8px] font-mono text-rose-400">
            <AlertTriangle className="w-2.5 h-2.5" />
            <span>ZUEIRA</span>
          </div>

          <div className="flex justify-between items-start z-10">
            <div className="w-8 h-8 opacity-45">
              {SPORT_SHIELDS[2].elements(color)}
            </div>
            <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider">Meme da Rodada</span>
          </div>

          <div className="my-auto text-center z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-neutral-900 rounded-full border border-rose-500/30 flex items-center justify-center text-xl mb-1.5 shadow-inner">
              ⚽🎈
            </div>
            <h4 className="text-sm font-black text-rose-500 uppercase font-display leading-tight tracking-wider">
              BOLA MURCHA!
            </h4>
            <p className="text-[9px] text-neutral-400 font-sans mt-1 max-w-[120px] leading-tight">
              "Recuou a bola pro goleiro e fez contra!"
            </p>
          </div>

          <div className="border-t border-neutral-900 pt-2 text-center">
            <span className="text-[8px] font-mono text-neutral-500 uppercase">Atleta: Carlinhos Caneta</span>
          </div>
        </div>
      )
    },
    {
      id: 'time-rodada',
      category: 'destaque',
      title: 'Time da Rodada',
      description: 'A seleção com os melhores jogadores do final de semana.',
      themeColor: 'gold',
      url: 'https://starhosted.com.br/futebol/time-da-rodada.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#121212] flex flex-col items-center justify-between p-3.5 select-none overflow-hidden rounded-xl border border-neutral-850 text-white font-sans" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #080808 100%)' }}>
          {/* Subtle classic pillar background silhouettes on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-8 opacity-5 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 opacity-5 bg-gradient-to-l from-white/15 to-transparent pointer-events-none" />
          
          {/* Top Header */}
          <div className="w-full flex flex-col items-center text-center pt-1 z-10">
            {/* Monumental Logo Icon */}
            <div className="flex flex-col items-center mb-0.5">
              <svg className="w-5 h-5 text-[#DDA853] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="19" width="18" height="2" rx="0.5" />
                <rect x="5" y="17" width="14" height="2" rx="0.5" />
                <rect x="6" y="8" width="1.5" height="9" />
                <rect x="9.25" y="8" width="1.5" height="9" />
                <rect x="12.5" y="8" width="1.5" height="9" />
                <rect x="15.75" y="8" width="1.5" height="9" />
                <path d="M4 6h16l-8-4-8 4z" />
              </svg>
              <span className="text-[6px] font-sans font-bold tracking-[0.3em] text-[#DDA853] uppercase">MONUMENTAL LEAGUE</span>
            </div>
            
            <h4 className="text-[14px] leading-none font-serif font-medium tracking-wider text-white uppercase" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              TIME DA RODADA
            </h4>
            <span className="text-[7px] font-serif italic tracking-wide text-[#DDA853]/90 mt-0.5">
              Os Protagonistas da Semana
            </span>
            <div className="w-16 h-[0.5px] bg-gradient-to-r from-transparent via-[#DDA853]/40 to-transparent mt-1" />
          </div>

          {/* Players Photo Lineup Block */}
          <div className="w-full aspect-[16/10] my-1 relative rounded border border-[#DDA853]/20 bg-neutral-950 p-0.5 overflow-hidden shadow-2xl z-10">
            {/* Blurry dramatic stadium lighting backdrop */}
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#DDA853]/10 rounded-full blur-2xl" />
            
            {/* 11 Players layout inside the frame */}
            <div className="absolute inset-0 flex flex-col justify-end p-2 z-10">
              {/* Back Row - Goalkeeper + 5 players */}
              <div className="flex justify-center gap-1.5 -mb-2">
                {[
                  { id: 'gk', color: 'bg-amber-800/60' },
                  { id: 'p1', color: 'bg-neutral-800/80' },
                  { id: 'p2', color: 'bg-neutral-800/80' },
                  { id: 'p3', color: 'bg-neutral-800/80' },
                  { id: 'p4', color: 'bg-neutral-800/80' },
                  { id: 'p5', color: 'bg-neutral-800/80' }
                ].map((p) => (
                  <div key={p.id} className="w-[18px] h-[34px] relative flex flex-col items-center">
                    {/* Head */}
                    <div className="w-3 h-3 rounded-full bg-neutral-600/95 border-[0.5px] border-neutral-500/50 shadow-inner z-15" />
                    {/* Body/Jersey */}
                    <div className={`w-[16px] h-[22px] rounded-t-lg ${p.color} border-[0.5px] border-neutral-700/80 relative flex items-center justify-center -mt-0.5`}>
                      <span className="text-[4px] font-bold text-[#DDA853]/70">FC</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Front Row - 5 players */}
              <div className="flex justify-center gap-2 z-20">
                {[
                  { id: 'f1', name: 'LUCAS' },
                  { id: 'f2', name: 'RAFAEL' },
                  { id: 'f3', name: 'DIEGO' },
                  { id: 'f4', name: 'JOÃO' },
                  { id: 'f5', name: 'BRUNO' }
                ].map((p, idx) => (
                  <div key={p.id} className="w-[20px] h-[36px] relative flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    {/* Head with dynamic dark hair styling */}
                    <div className="w-3.5 h-3.5 rounded-full bg-neutral-500/90 border-[0.5px] border-neutral-400 shadow-inner relative z-10">
                      <div className="absolute top-0 inset-x-0 h-1 bg-neutral-900 rounded-t-full" />
                    </div>
                    {/* Elite FC Jersey (Black with gold detail) */}
                    <div className="w-[18px] h-[24px] rounded-t-lg bg-neutral-950 border-[0.75px] border-[#DDA853]/40 shadow-lg relative flex flex-col items-center justify-between -mt-1 py-[1px]">
                      <span className="text-[3.5px] font-sans text-amber-400 font-extrabold uppercase scale-90">ELITE</span>
                      <span className="text-[5px] font-mono text-white/95 font-black -mt-1 leading-none">{idx === 2 ? '09' : idx === 1 ? '07' : idx === 0 ? '10' : idx === 3 ? '11' : '05'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ELITE FC Central Floating Badge overlay */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-[#0c0c0c] border border-[#DDA853]/30 px-3 py-0.5 rounded-sm flex flex-col items-center shadow-lg z-30">
              <div className="flex items-center gap-1">
                <svg className="w-2 h-2 text-[#DDA853]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-[6px] font-sans tracking-widest text-neutral-200 font-bold uppercase">ELITE FC</span>
              </div>
            </div>
          </div>

          {/* Bottom Translucent Stats Glassmorphic Card */}
          <div className="w-full bg-[#1c1c1e]/65 backdrop-blur-md border border-neutral-800 rounded-lg py-1 px-1.5 flex justify-around items-center z-10 shadow-lg">
            {[
              { num: '10', name: 'LUCAS' },
              { num: '07', name: 'RAFAEL' },
              { num: '09', name: 'DIEGO' },
              { num: '11', name: 'JOÃO' },
              { num: '05', name: 'BRUNO' }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="text-[11px] font-serif text-white font-extrabold tracking-tight leading-none">
                    {item.num}
                  </span>
                  <span className="inline-block w-1 h-1 rounded-full bg-amber-500/80 my-0.5" />
                  <span className="text-[5.5px] font-mono tracking-widest text-neutral-400 font-semibold uppercase leading-none">
                    {item.name}
                  </span>
                </div>
                {idx < 4 && <div className="h-6 w-[0.5px] bg-neutral-800" />}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Footer Details */}
          <div className="w-full flex justify-between items-center px-1 pt-1 z-10 mt-1">
            {/* Nike Swoosh style brand mark */}
            <div className="text-[6px] font-mono tracking-widest text-neutral-500 flex items-center">
              <svg className="w-4 h-2 text-neutral-500/50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 12c4-2 11-1 18-9-3 6-9 10-18 9z"/>
              </svg>
            </div>
            
            {/* Equipe Destaque badge */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#DDA853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                <path d="M6 14c-1-1-2-3-2-5 0-4 3-6 3-6" strokeLinecap="round" />
                <path d="M18 14c1-1 2-3 2-5 0-4-3-6-3-6" strokeLinecap="round" />
                <path d="M8 6h8v6c0 2-2 4-4 4s-4-2-4-4V6z" fill="currentColor" fillOpacity="0.15" />
                <path d="M8 8H5v2c0 1 1 2 3 2M16 8h3v2c0 1-1 2-3 2" />
                <path d="M12 16v3M9 20h6" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[4px] font-sans font-extrabold tracking-widest text-neutral-300 uppercase">EQUIPE</span>
                <span className="text-[4px] font-sans font-extrabold tracking-widest text-amber-500 uppercase">DESTAQUE</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'selecao-rodada',
      category: 'destaque',
      title: 'Seleção da Rodada',
      description: 'O elenco dos sonhos da rodada com os craques de destaque.',
      themeColor: 'blue',
      url: 'https://starhosted.com.br/futebol/selecao-da-rodada.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest">Destaque Coletivo</span>
            <Trophy className="w-4 h-4 text-blue-400" />
          </div>

          <div className="my-auto z-10 space-y-2 text-center">
            <span className="text-[12px] font-black uppercase text-white font-display">
              SELEÇÃO DA RODADA
            </span>
            <div className="space-y-1 text-left max-w-[140px] mx-auto">
              <div className="flex justify-between text-[8px] text-neutral-300 border-b border-neutral-900 pb-0.5">
                <span>Goleiro: Souza</span>
                <span className="text-blue-400">#1</span>
              </div>
              <div className="flex justify-between text-[8px] text-neutral-300 border-b border-neutral-900 pb-0.5">
                <span>Zagueiro: Silva</span>
                <span className="text-blue-400">#4</span>
              </div>
              <div className="flex justify-between text-[8px] text-neutral-300 border-b border-neutral-900 pb-0.5">
                <span>Meia: Nenê</span>
                <span className="text-blue-400">#10</span>
              </div>
              <div className="flex justify-between text-[8px] text-neutral-300 pb-0.5">
                <span>Atacante: Lucas</span>
                <span className="text-blue-400">#9</span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-2 text-center text-[7px] font-mono text-neutral-500 uppercase">
            OS MELHORES DO FINAL DE SEMANA
          </div>
        </div>
      )
    },
    {
      id: 'artilheiro',
      category: 'destaque',
      title: 'Artilheiro',
      description: 'Quem tá com a pontaria em dia. Tabela de goleadores atualizada.',
      themeColor: 'gold',
      url: 'https://starhosted.com.br/futebol/artilheiro.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-center border-b border-neutral-900 pb-2 z-10">
            <span className="text-[8px] font-mono text-amber-500 uppercase tracking-widest">Goleadores</span>
            <Goal className="w-4 h-4 text-amber-500" />
          </div>

          <div className="my-auto z-10 space-y-1.5">
            <div className="flex justify-between items-center text-[9px] bg-neutral-900/60 px-2 py-1.5 rounded border border-neutral-850">
              <span className="font-bold text-white uppercase">1. Betinho Jr.</span>
              <span className="font-mono font-black text-amber-400">12 Gols</span>
            </div>
            <div className="flex justify-between items-center text-[9px] bg-neutral-950/40 px-2 py-1 rounded">
              <span className="text-neutral-400 uppercase">2. Diego Costa</span>
              <span className="font-mono text-neutral-300">09 Gols</span>
            </div>
            <div className="flex justify-between items-center text-[9px] bg-neutral-950/40 px-2 py-1 rounded">
              <span className="text-neutral-400 uppercase">3. Kaká (Vila)</span>
              <span className="font-mono text-neutral-300">08 Gols</span>
            </div>
          </div>

          <div className="text-center text-[7px] font-mono text-neutral-500 uppercase">
            Atualizado: Rodada 12
          </div>
        </div>
      )
    },
    {
      id: 'proximos-jogos',
      category: 'calendario',
      title: 'Próxima Rodada',
      description: 'Divulgue o dia, local e horário do próximo confronto.',
      themeColor: 'emerald',
      url: 'https://starhosted.com.br/futebol/proxima-rodada.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-center z-10">
            <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest">Matchday #13</span>
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
          </div>

          <div className="my-auto text-center z-10 flex flex-col items-center">
            <span className="text-[9px] font-bold text-white uppercase">GAVIÕES FC x UNIÃO FC</span>
            
            {/* Glowing Time Badge */}
            <div className="mt-2.5 px-4 py-1.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-[11px] font-bold text-emerald-400">
              DOMINGO • 15:30
            </div>
            
            <span className="text-[7px] font-sans text-neutral-500 uppercase tracking-wide mt-2">
              📍 Arena Central Do Bairro
            </span>
          </div>

          <div className="text-center text-[7px] font-mono text-neutral-600 uppercase">
            Compareça e apoie nosso time!
          </div>
        </div>
      )
    },
    {
      id: 'resultados-jogos',
      category: 'calendario',
      title: 'Resultado Final',
      description: 'Placar dinâmico para publicar imediatamente após o apito final.',
      themeColor: 'blue',
      url: 'https://starhosted.com.br/futebol/resultado-final.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#060606] flex flex-col justify-between p-3 overflow-hidden rounded-xl border border-neutral-850">
          <div className="text-center">
            <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-wider">RESULTADO FINAL</span>
          </div>

          <div className="flex items-center justify-center gap-2 my-auto">
            <div className="w-8 h-8">{SPORT_SHIELDS[0].elements(color)}</div>
            <div className="flex items-center gap-1.5 bg-neutral-900 px-2.5 py-1.5 rounded-lg border border-neutral-800 font-mono text-xs font-black text-white">
              <span>3</span>
              <span className="text-neutral-600">-</span>
              <span>1</span>
            </div>
            <div className="w-8 h-8">{SPORT_SHIELDS[1].elements('#888')}</div>
          </div>

          <div className="flex justify-between text-[7px] font-mono text-neutral-500">
            <span className="truncate max-w-[50px] uppercase font-bold text-white">Gaviões</span>
            <span className="truncate max-w-[50px] uppercase text-neutral-400">Unidos FC</span>
          </div>
        </div>
      )
    },
    {
      id: 'patrocinadores',
      category: 'utilitarios',
      title: 'Parceiros Oficiais',
      description: 'Agradecimento e exposição comercial de apoiadores do clube.',
      themeColor: 'gold',
      url: 'https://starhosted.com.br/futebol/parceiros-oficiais.png',
      render: (color) => (
        <div className="w-full h-full relative bg-[#070707] flex flex-col justify-between p-4 overflow-hidden rounded-xl border border-neutral-850">
          <div className="text-center z-10">
            <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Parceiros Oficiais</span>
            <h4 className="text-[10px] font-black text-white uppercase mt-0.5">APOIADORES DO ESPORTE</h4>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto z-10">
            <div className="bg-neutral-900/80 border border-neutral-850 rounded p-2 flex flex-col items-center justify-center h-10">
              <span className="text-[8px] font-bold text-neutral-300 font-display">BARBER SHOP</span>
              <span className="text-[5px] text-amber-500 font-mono">Corte & Estilo</span>
            </div>
            <div className="bg-neutral-900/80 border border-neutral-850 rounded p-2 flex flex-col items-center justify-center h-10">
              <span className="text-[8px] font-bold text-neutral-300 font-display">AUTO PEÇAS</span>
              <span className="text-[5px] text-amber-500 font-mono">Silva & Cia</span>
            </div>
            <div className="bg-neutral-900/80 border border-neutral-850 rounded p-2 flex flex-col items-center justify-center h-10">
              <span className="text-[8px] font-bold text-neutral-300 font-display">SACOLÃO VIP</span>
              <span className="text-[5px] text-amber-500 font-mono">Frutas Frescas</span>
            </div>
            <div className="bg-neutral-900/80 border border-neutral-850 rounded p-2 flex flex-col items-center justify-center h-10">
              <span className="text-[8px] font-bold text-neutral-300 font-display">DRINK BAR</span>
              <span className="text-[5px] text-amber-500 font-mono">Gelo & Cerveja</span>
            </div>
          </div>

          <div className="text-center text-[7px] font-mono text-neutral-600 uppercase">
            Apoie quem apoia nossa várzea
          </div>
        </div>
      )
    }
  ];

  const carousel1Templates = [
    templates.find(t => t.id === 'selecao-rodada'),
    templates.find(t => t.id === 'patrocinadores'),
    templates.find(t => t.id === 'artilheiro'),
    templates.find(t => t.id === 'proximos-jogos'),
    templates.find(t => t.id === 'resultados-jogos'),
    templates.find(t => t.id === 'bola-murcha'),
    templates.find(t => t.id === 'craque-rodada'),
    templates.find(t => t.id === 'time-rodada')
  ].filter(Boolean) as VisualTemplate[];

  const carousel2Templates = [
    templates.find(t => t.id === 'time-rodada'),
    templates.find(t => t.id === 'selecao-rodada')
  ].filter(Boolean) as VisualTemplate[];

  const carousel3Templates = [
    templates.find(t => t.id === 'artilheiro'),
    templates.find(t => t.id === 'proximos-jogos')
  ].filter(Boolean) as VisualTemplate[];

  const carousel4Templates = [
    templates.find(t => t.id === 'resultados-jogos'),
    templates.find(t => t.id === 'patrocinadores')
  ].filter(Boolean) as VisualTemplate[];

  // Types list as requested:
  const typesList = [
    "Craque da Rodada",
    "Bola Murcha",
    "Time da Rodada",
    "Melhor Goleiro",
    "Artilheiro",
    "Resultados",
    "Classificação",
    "Próximos Jogos",
    "Escalações",
    "Patrocinadores",
    "Sorteios",
    "Rifas",
    "Comunicados",
    "Stories",
    "Destaques",
    "Muito mais..."
  ];

  // Filters templates based on chosen tab
  const filteredTemplates = activeCategory === 'todos' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Ver Todos', icon: <LayoutGrid className="w-3 h-3" style={{ fontSize: '10px' }} /> },
    { id: 'destaque', label: 'Destaques', icon: <Trophy className="w-3 h-3" /> },
    { id: 'calendario', label: 'Tabelas & Jogos', icon: <Calendar className="w-3 h-3" style={{ fontSize: '11px' }} /> },
    { id: 'utilitarios', label: 'Utilitários', icon: <Megaphone className="w-3 h-3" /> },
    { id: 'humor', label: 'Zueira', icon: <Flame className="w-3 h-3" /> }
  ];

  return (
    <section 
      id="templates-catalog"
      className="relative w-full bg-white text-neutral-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden"
      style={{
        paddingBottom: '32px',
        paddingLeft: '16px',
        paddingTop: '45px'
      }}
    >
      {/* Dynamic background light transitions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[35%] h-[35%] rounded-full filter blur-[150px] opacity-25 bg-emerald-200/40" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full filter blur-[150px] opacity-30 bg-emerald-100/50" />
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-14 md:space-y-18">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-950 uppercase"
            style={{ fontSize: '34px', lineHeight: '36px' }}
          >
            VEJA ALGUMAS DAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">400 ARTES</span> PARA SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">BABA</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">PELADA</span> OU <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">TIME AMADOR</span>
          </h2>

          {/* Sub-supporting paragraphs */}
          <div 
            className="flex flex-col items-center gap-1 sm:gap-2 text-sm sm:text-base font-sans text-neutral-700 max-w-2xl mx-auto"
          >
            <p 
              className="font-extrabold text-neutral-900 text-center"
              style={{
                color: '#171717',
                fontSize: '21px',
                lineHeight: '22px',
                marginBottom: '12px',
                marginTop: '-10px',
                borderColor: '#000000'
              }}
            >
              Artes prontas para escalações, resultados, artilharia, classificação, craque da rodada, Bola Murcha, melhor goleiro, melhor time da rodada e muito mais
            </p>
            {/* 4 ORGANIZED BENEFIT ITEMS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl mx-auto my-3">
              <div className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 rounded-xl px-3 py-2.5 flex items-center justify-center gap-2.5 shadow-md text-center transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-700/90 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Palette className="w-3.5 h-3.5 text-white" />
                </div>
                <span 
                  className="font-black font-mono uppercase tracking-wider text-white text-left"
                  style={{ fontSize: '13px', textAlign: 'left' }}
                >
                  100% Editável no Canva
                </span>
              </div>

              <div className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 rounded-xl px-3 py-2.5 flex items-center justify-center gap-2.5 shadow-md text-center transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-700/90 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Trophy className="w-3.5 h-3.5 text-white" />
                </div>
                <span 
                  className="font-black font-mono uppercase tracking-wider text-white text-left"
                  style={{ fontSize: '13px', textAlign: 'left' }}
                >
                  Feito para Futebol Amador
                </span>
              </div>

              <div className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 rounded-xl px-3 py-2.5 flex items-center justify-center gap-2.5 shadow-md text-center transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-700/90 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-3.5 h-3.5 text-white" />
                </div>
                <span 
                  className="font-black font-mono uppercase tracking-wider text-white text-left"
                  style={{ fontSize: '13px', textAlign: 'left' }}
                >
                  Pelo Celular ou PC
                </span>
              </div>

              <div className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 rounded-xl px-3 py-2.5 flex items-center justify-center gap-2.5 shadow-md text-center transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-700/90 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
                <span 
                  className="font-black font-mono uppercase tracking-wider text-white text-left"
                  style={{ fontSize: '13px', textAlign: 'left' }}
                >
                  Feito para seu Instagram
                </span>
              </div>
            </div>
            <p 
              className="text-center mt-2 font-black uppercase tracking-wider flex items-center justify-center mx-auto"
              style={{
                color: '#171717',
                fontSize: '18px',
                lineHeight: '24px',
                width: '353.2px',
                maxWidth: '100%',
                height: '47px',
                fontFamily: 'Outfit, sans-serif'
              }}
            >
              TUDO O QUE VOCÊ PRECISA PARA O INSTAGRAM DO SEU BABA
            </p>
          </div>
        </div>


        {/* NEW MAIN PREMIUM HORIZONTAL IMAGE CAROUSEL */}
        <div 
          className="w-full relative z-10 py-1 flex flex-col gap-1.5"
          style={{
            marginTop: '-51px',
            marginBottom: '28px',
            marginLeft: '0px'
          }}
        >
          <PremiumHorizontalCarousel images={CAROUSEL_IMAGES_1} reverse={false} shiftFraction={0} />
          <PremiumHorizontalCarousel images={CAROUSEL_IMAGES_2} reverse={true} shiftFraction={0.25} />
          <PremiumHorizontalCarousel images={CAROUSEL_IMAGES_3} reverse={false} shiftFraction={0.5} />
          <PremiumHorizontalCarousel images={CAROUSEL_IMAGES_4} reverse={true} shiftFraction={0.75} />
        </div>




        {/* SUPPORTING GRID LIST */}
        <div 
          className="pt-0 border-t-0"
          style={{
            marginTop: '32px',
            paddingTop: '0px'
          }}
        >
          <div className="text-center w-full max-w-none mx-0 mb-6 sm:mb-8 px-0">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-950 uppercase mx-auto pt-4 sm:pt-6"
              style={{ fontSize: '34px', lineHeight: '32px', marginTop: '16px' }}
            >
              Tudo o que você precisa para Transformar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">Instagram</span> da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Pelada,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Baba,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Racha,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Futebol Amador</span>
            </h2>
            <p 
              className="text-neutral-900 w-full max-w-none mt-3 px-0 font-bold"
              style={{
                fontSize: '20px',
                lineHeight: '21px',
                fontWeight: 'bold',
                borderColor: '#000000'
              }}
            >
              Tenha Artes prontas para divulgar rodadas, jogadores, resultados, classificação, próximos jogos, patrocinadores, Stories e muito mais
            </p>
          </div>

          {/* SOLID GREEN CONTAINER WITH TITLE & CHECKLIST INSIDE */}
          <div 
            className="w-full max-w-[343.2px] md:max-w-4xl mx-auto p-4 sm:p-6 md:p-7 rounded-2xl flex flex-col justify-center shadow-xl"
            style={{
              minHeight: '439.6px',
              backgroundColor: '#059669',
              border: '2px solid #34d399',
              boxShadow: '0 16px 40px -8px rgba(5, 150, 105, 0.45)'
            }}
          >
            {/* TÍTULO DENTRO DO BLOCO */}
            <div className="text-center mb-5 sm:mb-6 pt-1 sm:pt-2 px-2">
              <h3 
                className="font-black font-display uppercase text-white tracking-wider text-center mx-auto"
                style={{
                  fontSize: '27px',
                  lineHeight: '27px',
                  height: '77px',
                  width: '283px',
                  maxWidth: '100%',
                  fontWeight: 950,
                  letterSpacing: '0.04em',
                  WebkitTextStroke: '0.35px rgba(255, 255, 255, 0.8)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                TODOS OS TIPOS DE ARTES QUE VOCÊ VAI RECEBER
              </h3>
            </div>

            {/* GRID DE ÍCONES E ITENS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-2.5 sm:gap-y-4 content-center items-center">
              {typesList.map((item, idx) => {
                const isAccent = item === "Muito mais...";
                const isTenth = idx === 9; // 10th item (Patrocinadores)
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-emerald-700/60 rounded-xl transition-all duration-200"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <CheckCircle style={{ color: '#ffffff', fontSize: '24px', width: '24px', height: '24px', filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))' }} />
                    </div>
                    <span 
                      className={`uppercase tracking-wider ${
                        isAccent ? 'text-yellow-300 font-black font-display' : 'text-white font-bold'
                      }`}
                      style={{ 
                        fontSize: isTenth ? '11px' : '13px', 
                        fontWeight: isAccent ? '900' : 'bold',
                        lineHeight: '1.4',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Green CTA Button "Quero Acessar Agora" */}
          <div className="mt-10 sm:mt-12 flex justify-center text-center w-full">
            <a
              id="55a29c15-8a1b-ae1b-b01b-ef347644827b"
              href="#escolha-seu-plano"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-black font-mono text-base sm:text-lg uppercase tracking-wider shadow-[0_10px_35px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_45px_rgba(16,185,129,0.7)] transition-all duration-300 cursor-pointer border border-emerald-400/50 animate-scale-pulse hover:scale-105 active:scale-95"
            >
              <span style={{ fontSize: '19px' }}>Quero Acessar Agora</span>
              <ChevronRight className="w-5 h-5 text-neutral-950 stroke-[3]" style={{ fontSize: '21px', lineHeight: '26px' }} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
