import type { Project } from '../../lib/types';

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="h-56 w-full object-cover md:h-full"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-200/90">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-zinc-100"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                GitHub
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
