"use client";

import Link from "next/link";
import { ARRIVED_TODAY } from "@/lib/arrived-today";
import { STORE_INFO } from "@/lib/store-info";

export function ArrivedTodayBanner() {
  if (!ARRIVED_TODAY.enabled || ARRIVED_TODAY.items.length === 0) return null;

  return (
    <div
      className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--terracotta)]/30 bg-gradient-to-r from-[var(--terracotta)]/10 to-[var(--gold)]/10 px-4 py-3 text-sm"
      role="region"
      aria-label="Fresh arrivals today"
    >
      <span className="font-semibold text-[var(--terracotta-muted)]">{ARRIVED_TODAY.label}:</span>
      <span className="text-stone-800">
        {ARRIVED_TODAY.items.join(", ")}
      </span>
      <span className="text-stone-600">— just in. Come get yours.</span>
      <Link
        href={STORE_INFO.mapsUrl}
        className="ml-auto font-medium text-[var(--forest)] underline underline-offset-2 hover:text-[var(--forest-light)]"
      >
        Directions →
      </Link>
    </div>
  );
}
