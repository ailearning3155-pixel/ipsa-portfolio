'use client';

import { useState } from 'react';

export default function WaterScene({ onTriggerPortal }) {
  const [ripple, setRipple] = useState(false);

  const trigger = () => {
    setRipple(true);
    setTimeout(onTriggerPortal, 1100);
  };

  return (
    <section className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      <button
        className="group relative h-72 w-72 rounded-full border border-cyanGlow/40 bg-cyan-400/10 shadow-glow"
        onClick={trigger}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/5 to-violet-500/30" />
        <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-white/90">Tap Water</span>
        {ripple && <span className="absolute inset-0 animate-ping rounded-full border border-cyanGlow/60" />}
      </button>
    </section>
  );
}
