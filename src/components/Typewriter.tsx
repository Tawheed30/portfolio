"use client";

import { useEffect, useState } from "react";

type Phase = "typing" | "pauseFull" | "deleting" | "pauseEmpty";

export default function Typewriter({
  text,
  speed = 75,
  deleteSpeed = 40,
  pauseFull = 1800,
  pauseEmpty = 500,
  className = "",
}: {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseFull?: number;
  pauseEmpty?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setCount(text.length), 0);
      return () => clearTimeout(id);
    }

    let delay = speed;
    let next: () => void;

    if (phase === "typing") {
      if (count < text.length) {
        next = () => setCount((c) => c + 1);
      } else {
        delay = pauseFull;
        next = () => setPhase("pauseFull");
      }
    } else if (phase === "pauseFull") {
      next = () => setPhase("deleting");
    } else if (phase === "deleting") {
      delay = deleteSpeed;
      if (count > 0) {
        next = () => setCount((c) => c - 1);
      } else {
        delay = pauseEmpty;
        next = () => setPhase("pauseEmpty");
      }
    } else {
      next = () => setPhase("typing");
    }

    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [count, phase, text, speed, deleteSpeed, pauseFull, pauseEmpty]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
    </span>
  );
}
