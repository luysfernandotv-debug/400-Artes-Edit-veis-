import React, { useState, useEffect } from 'react';

export default function PromoBanner() {
  const COUNTDOWN_DURATION = 30 * 60; // 30 minutes in seconds
  const [remainingMs, setRemainingMs] = useState<number>(COUNTDOWN_DURATION * 1000);

  useEffect(() => {
    const STORAGE_KEY = 'scarcity_countdown_30m_end';
    const storedEnd = localStorage.getItem(STORAGE_KEY);
    let endTime: number;

    if (storedEnd) {
      endTime = parseInt(storedEnd, 10);
      // If the saved end time is in the past, reset it for a new 30-minute session
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
    const interval = setInterval(updateTimer, 43);

    return () => clearInterval(interval);
  }, []);

  const totalSecs = Math.floor(remainingMs / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  const centis = Math.floor((remainingMs % 1000) / 10);

  return (
    <div 
      id="faixa-escassez-topo"
      className="relative w-full bg-[#dc2626] text-white py-2 px-4 shadow-[0_4px_25px_rgba(220,38,38,0.35)] select-none border-b border-red-700/40"
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center flex-wrap gap-x-3 gap-y-1.5 text-center">
        <span 
          className="font-sans font-black tracking-tight text-white uppercase whitespace-nowrap"
          style={{ fontSize: '16px', letterSpacing: '0.02em' }}
        >
          ATENÇÃO: O TEMPO ESTÁ ACABANDO!
        </span>

        {/* High-visibility countdown timer with tabular numbers */}
        <span 
          className="font-mono font-black text-base sm:text-lg md:text-xl text-white bg-[#991b1b] px-2.5 py-1 rounded-md tracking-wider shadow-inner border border-red-400/30 leading-none inline-flex items-center justify-center tabular-nums"
        >
          <span>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span>
          <span className="text-xs sm:text-sm text-white/80 ml-0.5">.{centis.toString().padStart(2, '0')}</span>
        </span>
      </div>
    </div>
  );
}

