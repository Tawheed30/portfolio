import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { getGithubRepos } from "@/lib/github";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { ProjectCardLink } from "@/components/ProjectCard";
import RepoCard from "@/components/RepoCard";

export const metadata: Metadata = {
  title: "Projects | Mohammed Tawheed",
  description:
    "All of Mohammed Tawheed's cybersecurity and detection engineering projects — featured builds plus every public GitHub repository.",
};

export default async function ProjectsPage() {
  const repos = await getGithubRepos();

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <p className="mt-6 font-mono text-sm text-accent">Everything I&apos;ve built</p>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Projects</h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Featured, hand-described projects below, followed by every public repository on my
            GitHub — the repo list updates automatically as I push new work.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mt-12 mb-4 text-lg font-semibold text-foreground">Featured Projects</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60} className="h-full">
              <ProjectCardLink project={project} />
            </Reveal>
          ))}
        </div>

        {repos.length > 0 && (
          <>
            <Reveal>
              <h2 className="mt-12 mb-4 text-lg font-semibold text-foreground">
                All GitHub Repositories
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <Reveal key={repo.id} delay={i * 40} className="h-full">
                  <RepoCard repo={repo} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
