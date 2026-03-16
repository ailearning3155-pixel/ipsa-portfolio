'use client';

import { useEffect, useMemo, useState } from 'react';
import CameraController from '@/core/CameraController';
import LoadingScene from '@/scenes/LoadingScene';
import WaterScene from '@/scenes/WaterScene';
import PortalScene from '@/scenes/PortalScene';
import TunnelScene from '@/scenes/TunnelScene';
import CharacterScene from '@/scenes/CharacterScene';
import PortfolioScene from '@/scenes/PortfolioScene';

const SEQUENCE = ['loading', 'water', 'portal', 'tunnel', 'character', 'portfolio'];

export default function SceneManager() {
  const [scene, setScene] = useState('loading');

  const sceneIndex = useMemo(() => SEQUENCE.indexOf(scene), [scene]);

  useEffect(() => {
    if (scene !== 'loading') return;
    const id = setTimeout(() => setScene('water'), 1800);
    return () => clearTimeout(id);
  }, [scene]);

  const nextScene = () => {
    if (sceneIndex < 0 || sceneIndex >= SEQUENCE.length - 1) return;
    setScene(SEQUENCE[sceneIndex + 1]);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-night">
      <CameraController scene={scene} />
      <div key={scene} className="h-full w-full transition-opacity duration-700">
          {scene === 'loading' && <LoadingScene />}
          {scene === 'water' && <WaterScene onTriggerPortal={nextScene} />}
          {scene === 'portal' && <PortalScene onEnterTunnel={nextScene} />}
          {scene === 'tunnel' && <TunnelScene onExitTunnel={nextScene} />}
          {scene === 'character' && <CharacterScene onOpenPortfolio={nextScene} />}
          {scene === 'portfolio' && <PortfolioScene />}
      </div>
    </main>
  );
}
