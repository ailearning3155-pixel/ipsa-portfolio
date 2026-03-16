'use client';

import { useEffect } from 'react';
import TunnelParticles from '@/particles/TunnelParticles';

export default function TunnelScene({ onExitTunnel }) {
  useEffect(() => {
    const id = setTimeout(onExitTunnel, 1900);
    return () => clearTimeout(id);
  }, [onExitTunnel]);

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-950 to-black">
      <p className="z-20 text-xs uppercase tracking-[0.4em] text-white/70">Dimension Travel</p>
      <TunnelParticles />
    </section>
  );
}
