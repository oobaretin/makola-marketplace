"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
};

export function HeroCarousel({
  slides,
  autoPlayMs = 6500,
  priorityFirst = true,
}: {
  slides: HeroSlide[];
  autoPlayMs?: number;
  priorityFirst?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const regionId = useId();

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const count = safeSlides.length;

  useEffect(() => {
    if (count <= 1) return;
    if (isPaused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs);
    return () => window.clearInterval(t);
  }, [autoPlayMs, count, isPaused]);

  if (count === 0) return null;
  const safeIndex = ((index % count) + count) % count;
  const active = safeSlides[safeIndex]!;

  function go(delta: number) {
    if (count <= 1) return;
    setIndex((i) => (i + delta + count) % count);
  }

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Hero images"
        aria-describedby={regionId}
        className="relative aspect-[16/10] w-full sm:aspect-[16/9]"
        tabIndex={0}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${safeIndex * 100}%)` }}
          >
            {safeSlides.map((s, i) => (
              <div key={s.src + i} className="relative h-full w-full flex-none">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  priority={priorityFirst && i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div id={regionId} className="sr-only">
            Slide {index + 1} of {count}
          </div>

          {(active.label || active.description) && (
            <div className="max-w-xl">
              {active.label ? (
                <div className="text-sm font-semibold tracking-tight text-white">{active.label}</div>
              ) : null}
              {active.description ? (
                <div className="mt-1 text-xs leading-5 text-white/90 sm:text-sm">{active.description}</div>
              ) : null}
            </div>
          )}
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200/70 transition hover:bg-white group-hover:block focus:block focus:outline-none focus:ring-2 focus:ring-amber-500 sm:left-4"
              onClick={() => go(-1)}
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200/70 transition hover:bg-white group-hover:block focus:block focus:outline-none focus:ring-2 focus:ring-amber-500 sm:right-4"
              onClick={() => go(1)}
            >
              Next
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="flex items-center justify-between gap-4 border-t border-zinc-200/70 px-4 py-3">
          <div className="flex items-center gap-2" aria-label="Slide navigation">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === safeIndex ? "true" : "false"}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === safeIndex ? "bg-amber-600" : "bg-zinc-300 hover:bg-zinc-400",
                ].join(" ")}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="text-xs text-zinc-500">
            {safeIndex + 1}/{count}
          </div>
        </div>
      ) : null}
    </div>
  );
}


