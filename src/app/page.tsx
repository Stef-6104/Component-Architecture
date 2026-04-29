import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <div className="space-y-24 bg-zinc-950">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
