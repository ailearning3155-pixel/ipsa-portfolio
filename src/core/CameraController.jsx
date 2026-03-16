'use client';

import { useMemo } from 'react';

export default function CameraController({ scene }) {
  const hint = useMemo(() => {
    switch (scene) {
      case 'water':
        return 'Top-down drift camera active';
      case 'portal':
        return 'Dolly-in to portal';
      case 'tunnel':
        return 'Warp-speed tunnel camera';
      case 'character':
        return 'Slow hero orbit';
      default:
        return 'Idle cinematic camera';
    }
  }, [scene]);

  return (
    <div className="pointer-events-none absolute left-4 top-4 z-40 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/70">
      {hint}
    </div>
  );
}
