import Link from "next/link";
import { githubUsername } from "@/data/portfolio";
import { getGithubRepos } from "@/lib/github";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import RepoCard from "@/components/RepoCard";
import { ExternalArrowIcon } from "@/components/icons";

export default async function GithubRepos() {
  const repos = (await getGithubRepos()).slice(0, 4);

  if (repos.length === 0) {
    return null;
  }

  return (
    <section id="github" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <SectionHeading index="06" title="Latest from GitHub" className="mb-0" />
            </div>
            <Link
              href="/projects"
              className="flex shrink-0 items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View all
              <ExternalArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="mb-6 max-w-xl text-sm text-muted">
            Pulled live from{" "}
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              github.com/{githubUsername}
            </a>{" "}
            — new repos show up here automatically.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 60} className="h-full">
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
