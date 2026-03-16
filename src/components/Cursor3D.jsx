'use client';

import { useEffect, useState } from 'react';

export default function Cursor3D() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <span
      className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-cyanGlow/70 shadow-glow"
      style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
    />
  );
}
