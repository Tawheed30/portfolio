import { about, achievements } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="01" title="About" />
          <div className="max-w-3xl space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 max-w-3xl rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">Key Achievements</h3>
            <ul className="mt-3 space-y-2.5">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
