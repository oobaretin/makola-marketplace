"use client";

import { useEffect, useState } from "react";
import { getStoreOpenStatus } from "@/lib/store-hours";

export function StoreOpenBadge({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState(() => getStoreOpenStatus());

  useEffect(() => {
    setStatus(getStoreOpenStatus());
    const interval = window.setInterval(() => setStatus(getStoreOpenStatus()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium",
        status.isOpen
          ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
          : "bg-stone-100 text-stone-700 ring-1 ring-stone-200",
        className,
      ].join(" ")}
      role="status"
      aria-live="polite"
    >
      <span
        className={[
          "h-2 w-2 rounded-full",
          status.isOpen ? "bg-emerald-500" : "bg-stone-400",
        ].join(" ")}
        aria-hidden
      />
      <span className="font-semibold">{status.statusText}</span>
      <span className="text-current/80">· {status.detailText}</span>
    </div>
  );
}
