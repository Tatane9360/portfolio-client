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

export default function App() {
  useGsapAnimations();

  return (
    <div className="relative antialiased selection:bg-ink selection:text-paper">
      <Dot />
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Stats />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
