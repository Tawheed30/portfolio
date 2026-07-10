import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="04" title="Certifications" />
          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60"
              >
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer}
                  {cert.id && (
                    <>
                      {" · "}
                      <span className="font-mono text-xs">{cert.id}</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
