import { githubUsername } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ContributionsResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

const LEVEL_CLASSES = [
  "bg-foreground/10",
  "bg-accent/30",
  "bg-accent/55",
  "bg-accent/80",
  "bg-accent",
];

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

async function getContributions(): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

export default async function GithubContributions() {
  const data = await getContributions();

  if (!data || data.contributions.length === 0) {
    return null;
  }

  const days = data.contributions;
  const total = Object.values(data.total)[0] ?? days.reduce((sum, d) => sum + d.count, 0);

  const firstDay = new Date(days[0].date).getUTCDay();
  const padded: (ContributionDay | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...days,
  ];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  const monthMarkers: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstReal = week.find((d) => d !== null);
    if (!firstReal) return;
    const month = new Date(firstReal.date).getUTCMonth();
    if (month !== lastMonth) {
      monthMarkers.push({ label: MONTH_LABELS[month], weekIndex: i });
      lastMonth = month;
    }
  });

  return (
    <section id="contributions" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="02" title="GitHub Contributions" />
          <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
            <div className="mb-4 flex items-center justify-between font-mono text-sm text-muted">
              <span className="flex items-center gap-2 uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Contributions
              </span>
              <span>
                <span className="font-semibold text-foreground">{total}</span> total
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-flex flex-col gap-1.5">
                <div className="flex gap-[4px] text-xs text-muted">
                  {weeks.map((_, i) => {
                    const marker = monthMarkers.find((m) => m.weekIndex === i);
                    return (
                      <span key={i} className="w-[13px] shrink-0 whitespace-nowrap">
                        {marker ? marker.label : ""}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-[4px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex shrink-0 flex-col gap-[4px]">
                      {week.map((day, di) =>
                        day ? (
                          <div
                            key={di}
                            title={`${day.count} contributions on ${day.date}`}
                            style={{ animationDelay: `${Math.min(wi * 12 + di * 3, 900)}ms` }}
                            className={`animate-cell-in h-[13px] w-[13px] shrink-0 cursor-pointer rounded-[3px] transition-transform duration-150 hover:scale-125 ${LEVEL_CLASSES[day.level]}`}
                          />
                        ) : (
                          <div key={di} className="h-[13px] w-[13px] shrink-0" />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-muted">
              <span>Less</span>
              {LEVEL_CLASSES.map((cls) => (
                <div key={cls} className={`h-[13px] w-[13px] rounded-[3px] ${cls}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
