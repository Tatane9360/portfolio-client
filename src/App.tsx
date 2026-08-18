import './index.css';
import useGsapAnimations from './hooks/useGsapAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  useGsapAnimations();

  return (
    <div className="bg-grid antialiased selection:bg-[#FF007F] selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Expertise />
      <Process />
      <Projects />
      <FAQ />
      <Contact />
    </div>
  );
}
