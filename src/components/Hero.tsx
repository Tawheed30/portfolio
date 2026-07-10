import Link from "next/link";
import { profile, socials } from "@/data/portfolio";
import { socialIconMap, VerifiedIcon } from "@/components/icons";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden px-6 pt-20 pb-6"
    >
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-blob-delayed pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-accent-2/20 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          <Typewriter text={profile.name} className="font-mono [word-spacing:-0.35em]" />
          <VerifiedIcon
            className="ml-2 inline-block h-6 w-6 align-middle sm:h-8 sm:w-8"
            aria-label="Verified"
          />
          <span className="animate-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-accent align-middle" />
        </h1>
        <h2 className="mt-4 text-xl font-medium text-muted sm:text-2xl">
          {profile.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-muted">{profile.location}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={profile.resumeUrl}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_0_24px_-4px_var(--accent)]"
          >
            Download Resume
          </a>
          <Link
            href="/#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-5">
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
    </section>
  );
}
