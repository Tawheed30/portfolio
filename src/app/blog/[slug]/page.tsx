import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/blog";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { formatDate } from "@/lib/date";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Mohammed Tawheed`,
    description: post.excerpt,
    keywords: [...post.keywords, ...post.tags],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-6 pt-28 pb-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{post.title}</h1>
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
        </Reveal>

        <div className="mt-8 space-y-5">
          {post.content.map((block, i) => (
            <Reveal key={i} delay={Math.min(i * 60, 300)}>
              {block.heading && (
                <h2 className="mb-2 text-xl font-semibold text-foreground">{block.heading}</h2>
              )}
              <p className="leading-relaxed text-muted">{block.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
