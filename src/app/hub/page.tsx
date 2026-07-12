import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { ExternalArrowIcon } from "@/components/icons";
import { formatDate } from "@/lib/date";
import hubStatus from "@/data/hub-status.json";

export const metadata: Metadata = {
  title: "Hub | Mohammed Tawheed",
  description:
    "A live-ish health snapshot of every active project — synced daily from an internal monitoring system that runs typecheck, build, and test-suite checks, not just git status.",
  alternates: {
    canonical: "/hub",
  },
};

type Severity = "crit" | "attention" | "warn" | "ok";

const SEVERITY_LABEL: Record<Severity, string> = {
  crit: "Critical",
  attention: "Attention",
  warn: "Stale",
  ok: "Stable",
};

const SEVERITY_DOT: Record<Severity, string> = {
  crit: "bg-red-400",
  attention: "bg-orange-400",
  warn: "bg-amber-400",
  ok: "bg-emerald-400",
};

const SEVERITY_TEXT: Record<Severity, string> = {
  crit: "text-red-400",
  attention: "text-orange-400",
  warn: "text-amber-400",
  ok: "text-emerald-400",
};

export default function HubPage() {
  const { generatedAt, counts, projects } = hubStatus as {
    generatedAt: string;
    counts: Record<Severity, number>;
    projects: {
      name: string;
      github: string;
      language: string | null;
      severity: Severity;
      note: string;
      lastCommit: string | null;
    }[];
  };

  const sorted = [...projects].sort((a, b) => {
    const order: Record<Severity, number> = { crit: 0, attention: 1, warn: 2, ok: 3 };
    return order[a.severity] - order[b.severity];
  });

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Hub" }]} />
          <p className="mt-6 font-mono text-sm text-accent">Behind the projects</p>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Hub</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            I run every project above through an internal monitoring system I built — not just
            &quot;does it have recent commits,&quot; but actual typecheck, build, and test-suite
            runs, with bugs found and fixed automatically where it&apos;s safe to do so. This page
            is a sanitized daily snapshot of that system — local paths and private repos are
            excluded, and this is read-only (the real dashboard has live action buttons, kept
            internal for obvious reasons).
          </p>
          <p className="mt-3 font-mono text-xs text-muted">
            Last synced {formatDate(generatedAt, { month: "short", day: "numeric", year: "numeric" })}
            {" · "}
            {formatDate(generatedAt, { hour: "numeric", minute: "2-digit" })}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(["crit", "attention", "warn", "ok"] as Severity[]).map((sev) => (
              <div
                key={sev}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className={`font-mono text-2xl font-semibold ${SEVERITY_TEXT[sev]}`}>
                  {counts[sev] ?? 0}
                </div>
                <div className="mt-1 text-xs text-muted">{SEVERITY_LABEL[sev]}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mt-12 mb-4 text-lg font-semibold text-foreground">
            Project health ({sorted.length})
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p, i) => (
            <Reveal key={p.name} delay={i * 40} className="h-full">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-accent">
                    {p.name}
                  </h3>
                  <ExternalArrowIcon className="h-3.5 w-3.5 shrink-0 text-muted" />
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${SEVERITY_DOT[p.severity]}`} />
                  <span className={`font-mono text-xs ${SEVERITY_TEXT[p.severity]}`}>
                    {SEVERITY_LABEL[p.severity]}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted">{p.note}</p>
                <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted">
                  {p.language && (
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {p.language}
                    </span>
                  )}
                  {p.lastCommit && (
                    <span>
                      {formatDate(p.lastCommit, { month: "short", day: "numeric" })}
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
