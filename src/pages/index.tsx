import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import React from 'react';

// import { GetStaticPaths } from 'next';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
