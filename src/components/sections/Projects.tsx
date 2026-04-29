import type { Project } from '../../lib/types';
import Card from '../ui/Card';

const projects: Project[] = [
  {
    id: 1,
    title: 'Zenith Focus Dashboard',
    description:
      'A minimal dark dashboard that helps you stay locked-in with smooth interactions and fast rendering.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/assets/hero-bg.png',
    githubUrl: 'https://github.com/Stef-6104',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Veloce Telemetry Suite',
    description:
      'A mobile-first telemetry experience with real-time updates and refined data visualizations.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    imageUrl: '/assets/mirror.png',
    githubUrl: 'https://github.com/Stef-6104',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Resonance Algorithmic Sequencer',
    description:
      'An experimental musical tool exploring patterns and structure through code-driven composition.',
    technologies: ['Python', 'Matplotlib', 'MIDI-util'],
    imageUrl: '/assets/hero-bg.png',
    githubUrl: 'https://github.com/Stef-6104',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-200/90 sm:text-base">
        A small selection of built work—focused on performance, clarity, and
        user-centered experiences.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
