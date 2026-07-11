import { profile, socials } from "@/data/portfolio";
import { socialIconMap } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="11" title="Contact" />
          <div className="max-w-xl">
            <p className="leading-relaxed text-muted">
              Open to SOC Analyst, Cybersecurity Analyst, and SIEM Analyst
              roles. Feel free to reach out — I usually reply within a day.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 block max-w-full break-words text-xl font-semibold text-accent transition-colors hover:underline sm:text-2xl"
            >
              {profile.email}
            </a>
            <p className="mt-2 font-mono text-sm text-muted">{profile.phone}</p>

            <div className="mt-8 flex items-center gap-5">
              {socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-muted transition-all hover:-translate-y-0.5 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
