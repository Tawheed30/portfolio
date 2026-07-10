import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-center text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
