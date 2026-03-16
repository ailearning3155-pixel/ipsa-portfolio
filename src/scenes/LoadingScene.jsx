'use client';

import { useEffect, useState } from 'react';

export default function LoadingScene() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((value) => (value >= 100 ? 100 : value + 4));
    }, 60);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-white/70">Loading Experience</p>
      <div className="h-1 w-72 overflow-hidden rounded-full bg-white/15">
        <div className="h-full bg-cyanGlow transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-sm text-white/60">{progress}%</p>
    </section>
  );
}
