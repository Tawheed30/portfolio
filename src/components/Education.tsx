import { education } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="08" title="Education" />
          <div className="space-y-4">
            {education.map((entry) => (
              <div
                key={entry.degree}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <p className="font-semibold text-foreground">{entry.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {entry.institution} · {entry.location}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
