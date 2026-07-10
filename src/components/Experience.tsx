import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="03" title="Experience" />
        </Reveal>
        <div className="space-y-5">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role} · <span className="text-accent">{job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{job.period}</span>
                </div>
                <ul className="mt-5 space-y-2">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
