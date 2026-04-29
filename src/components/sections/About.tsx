const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Tailwind CSS',
  'UI/UX',
];

const experience = [
  {
    role: 'Research-driven Software Developer',
    detail:
      'Building reliable systems with a focus on performance, clean architecture, and user-centric experiences.',
  },
  {
    role: 'Computer Science Researcher',
    detail:
      'Exploring algorithms and real-world problem spaces—turning experimentation into practical implementation.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 lg:items-start">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-wide text-white sm:text-5xl">
            Hello there!
          </h2>

          <div className="mt-8 space-y-6 text-zinc-200/90">
            <p className="text-base leading-7 sm:text-lg">
              I am a software developer and Computer Science researcher
              driven by the challenge of turning complex problems into
              streamlined, user-centric solutions. My approach to development
              is heavily influenced by a minimalist aesthetic—I believe that
              powerful software should feel effortless to use and clear to
              look at.
            </p>

            <p className="text-base leading-7 sm:text-lg">
              Whether I&apos;m optimizing mobile applications or exploring the
              nuances of context-aware systems, I prioritize performance and
              precision. When I&apos;m not refining code or developing thorough
              documentation, I&apos;m usually exploring non-linear storytelling in
              games or experimenting with audio production.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Skills & Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">Education / Experience</h3>
            <div className="mt-4 space-y-4">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.role}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-200/90">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

