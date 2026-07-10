import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ProjectCardLink } from "@/components/ProjectCard";
import { ExternalArrowIcon } from "@/components/icons";

export default function Projects() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <SectionHeading index="05" title="Projects" className="mb-0" />
            </div>
            <Link
              href="/projects"
              className="flex shrink-0 items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View all
              <ExternalArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
              <ProjectCardLink project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
