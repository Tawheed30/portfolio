"use client";

import { useEffect, useState } from "react";
import type { Tweet } from "@/lib/tweets";
import { formatDate } from "@/lib/date";
import { TwitterIcon } from "@/components/icons";

export default function TweetCarousel({ tweets }: { tweets: Tweet[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (tweets.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % tweets.length), 6000);
    return () => clearInterval(id);
  }, [tweets.length]);

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {tweets.map((tweet, i) => (
            <div key={i} className="w-full shrink-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-muted">
                <TwitterIcon className="h-4 w-4" />
                <span className="font-mono text-xs">
                  {formatDate(tweet.date, { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground">
                {tweet.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {tweets.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {tweets.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show post ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
