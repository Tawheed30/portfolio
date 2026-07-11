import Link from "next/link";
import { posts } from "@/data/blog";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { formatDate } from "@/lib/date";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-24 px-6 py-5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="10" title="Writing" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
              >
                <span className="font-mono text-xs text-muted">
                  {formatDate(post.date, { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <h3 className="mt-2 flex-1 text-sm font-semibold text-foreground group-hover:text-accent">
                  {post.title}
                </h3>
                <span className="mt-4 font-mono text-xs text-accent">Read →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            href="/blog"
            className="mt-6 inline-block font-mono text-sm text-accent hover:underline"
          >
            View all posts →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
