import Hero1 from './components/hero1';
import Hero3 from './components/hero3';
import SectionCoreTech from './components/section-core-tech';
import SectionCTA from './components/section-cta';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-scroll snap-y snap-mandatory h-[calc(100vh-7rem)] overflow-y-scroll overflow-x-hidden scroll-smooth mt-28">
      {/* Section 1: Hero landing - unchanged */}
      <section className="snap-start snap-always h-[calc(100vh-7rem)] w-full relative min-h-0 flex-shrink-0">
        <Hero3 />
      </section>
      {/* Section 2: Crafted by BITSPARX + illustration - light section; header switches to white when this is in view */}
      <section id="section-hero1" className="snap-start snap-always h-[calc(100vh-7rem)] w-full relative flex-shrink-0 overflow-visible">
        <Hero1 />
      </section>
      {/* Section 3: Our Core Technologies - one viewport so next section appears on scroll */}
      <section className="snap-start snap-always h-[calc(100vh-7rem)] w-full relative flex-shrink-0 overflow-hidden">
        <SectionCoreTech />
      </section>
      {/* Section 4: CTA - light blue like section 2; header white when in view */}
      <section id="section-cta" className="snap-start snap-always min-h-[calc(100vh-7rem)] w-full relative flex-shrink-0">
        <SectionCTA />
      </section>
      <Link href="/service"></Link>
      <Link href="/contactus"></Link>
      <Link href="/aboutus"></Link>
    </main>

  );
}
