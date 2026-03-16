'use client';

import { useEffect } from 'react';
import PortalParticles from '@/particles/PortalParticles';

export default function PortalScene({ onEnterTunnel }) {
  useEffect(() => {
    const id = setTimeout(onEnterTunnel, 1800);
    return () => clearTimeout(id);
  }, [onEnterTunnel]);

  return (
    <section className="relative flex h-full w-full items-center justify-center bg-black">
      <div className="h-56 w-56 rounded-full border-2 border-neonViolet shadow-[0_0_80px_rgba(139,92,246,0.8)]" />
      <PortalParticles />
    </section>
  );
}
