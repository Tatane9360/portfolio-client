import './index.css';
import useGsapAnimations from './hooks/useGsapAnimations';
import Dot from './components/Dot';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { whatsapp } from './legal';

export default function App() {
  useGsapAnimations();
  // The floating button would cover the FAQ toggles and the contact links (which already offer WhatsApp).
  const [bas, setBas] = useState(false);
  useEffect(() => {
    const vus = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? vus.add(e.target) : vus.delete(e.target)));
      setBas(vus.size > 0);
    });
    document.querySelectorAll('#faq, #contact, footer').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative antialiased selection:bg-ink selection:text-paper">
      <a href="#contenu" className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-paper focus:px-4 focus:py-3 focus:text-ink">Aller au contenu</a>
      <Dot />
      <Navbar />
      <main id="contenu">
        <Hero />
        <Approach />
        <Stats />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {whatsapp && !bas && (
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Discuter sur WhatsApp" className="fade-in fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-ink ring-1 ring-paper/40 transition-[scale,box-shadow] duration-[160ms] ease-out hover:ring-paper active:scale-[0.97] md:right-10 md:bottom-8">
          <img src="/whatsapp.svg" alt="" width="28" height="28" />
        </a>
      )}
    </div>
  );
}
