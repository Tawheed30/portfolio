import { projects } from "@/data/portfolio";
import { ExternalArrowIcon } from "@/components/icons";

export const projectCardClass =
  "group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover";

export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const href = "href" in project ? project.href : undefined;
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-xs text-accent">
          {project.status}
          {href && <ExternalArrowIcon className="h-3 w-3" />}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

export function ProjectCardLink({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const href = "href" in project ? project.href : undefined;
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={projectCardClass}>
      <ProjectCard project={project} />
    </a>
  ) : (
    <div className={projectCardClass}>
      <ProjectCard project={project} />
    </div>
  );
}
