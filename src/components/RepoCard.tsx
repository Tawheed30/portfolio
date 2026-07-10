import type { Repo } from "@/lib/github";
import { ExternalArrowIcon, StarIcon } from "@/components/icons";
import { formatDate } from "@/lib/date";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-accent">
          {repo.name}
        </h3>
        <ExternalArrowIcon className="h-3.5 w-3.5 shrink-0 text-muted" />
      </div>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
        {repo.description ?? "No description provided."}
      </p>
      <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <StarIcon className="h-3.5 w-3.5 text-accent" />
          {repo.stargazers_count}
        </span>
        <span>
          {formatDate(repo.pushed_at, { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>
    </a>
  );
}
