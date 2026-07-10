"use client";

import { SunIcon, MoonIcon } from "@/components/icons";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export default function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    root.style.setProperty("--theme-toggle-x", `${x}px`);
    root.style.setProperty("--theme-toggle-y", `${y}px`);

    const apply = () => {
      root.dataset.theme = next;
      window.localStorage.setItem("theme", next);
    };

    const doc = document as ViewTransitionDocument;
    if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark/light theme"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent ${className}`}
    >
      <SunIcon className="theme-icon-sun h-4 w-4" />
      <MoonIcon className="theme-icon-moon h-4 w-4" />
    </button>
  );
}
