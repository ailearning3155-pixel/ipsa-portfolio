'use client';

import Avatar from '@/components/Avatar';
import NavigationCube from '@/components/NavigationCube';

export default function CharacterScene({ onOpenPortfolio }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-zinc-950 to-black">
      <Avatar />
      <NavigationCube onSelect={onOpenPortfolio} />
    </section>
  );
}
