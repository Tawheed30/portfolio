import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-accent transition-colors hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-muted" : "text-accent"}>{item.label}</span>
            )}
            {!isLast && <span className="text-border">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
