import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "SOC Analyst Blog | Mohammed Tawheed",
  description:
    "SOC analyst blog covering alert triage, Splunk vs QRadar, MITRE ATT&CK mapping, and practical SIEM and incident response workflows.",
  keywords: [
    "SOC analyst blog",
    "cybersecurity blog",
    "SIEM tutorials",
    "Splunk QRadar",
    "MITRE ATT&CK",
    "incident response",
    "alert triage",
  ],
};

export default function BlogIndex() {
  return (
    <section className="px-6 pt-28 pb-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <p className="mt-6 font-mono text-sm text-accent">Writing</p>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Blog</h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Notes from the SOC floor — triage workflows, SIEM tooling, and detection
            engineering practices.
          </p>
        </Reveal>

        <div className="mt-10 space-y-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
