import './index.css';
import useGsapAnimations from './hooks/useGsapAnimations';
import Dot from './components/Dot';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useGsapAnimations();

  return (
    <div className="relative antialiased selection:bg-red selection:text-paper">
      <Dot />
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
