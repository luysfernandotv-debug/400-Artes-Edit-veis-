import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  id?: string;
  children: React.ReactNode;
  minHeight?: string;
  className?: string;
}

export default function LazySection({
  id,
  children,
  minHeight = '150px',
  className = ''
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(() => {
    // SSR or no IntersectionObserver support fallback
    return typeof window === 'undefined' || !('IntersectionObserver' in window);
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    // If targeted by hash or scrolled to, render immediately
    if (id && window.location.hash === `#${id}`) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '800px 0px 800px 0px' // Preload 800px before scrolling into viewport
      }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    const handleHash = () => {
      if (id && window.location.hash === `#${id}`) {
        setIsVisible(true);
      }
    };

    // Listen for click events on anchor links pointing to this section ID
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (anchor && id) {
        const href = anchor.getAttribute('href');
        if (href === `#${id}`) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    document.addEventListener('click', handleGlobalClick, { capture: true, passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHash);
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, [id, isVisible]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={className}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: minHeight,
        minHeight: isVisible ? undefined : minHeight
      }}
    >
      {isVisible ? children : null}
    </div>
  );
}

