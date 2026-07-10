import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}
