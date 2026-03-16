'use client';

import Cursor3D from '@/components/Cursor3D';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';

export default function PortfolioScene() {
  return (
    <section className="relative h-full w-full overflow-y-auto bg-night">
      <Cursor3D />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </section>
  );
}
