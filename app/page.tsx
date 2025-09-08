import Hero1 from './components/hero1';
import Hero3 from './components/hero3';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
     

      {/* <Hero /> */}
      <Hero3/>
      <Hero1/>
      <Link href="/service"></Link>
      <Link href="/contactus"></Link>
      <Link href="/aboutus"></Link>
    </main>

  );
}
