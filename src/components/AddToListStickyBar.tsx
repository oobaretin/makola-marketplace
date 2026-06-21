"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useShoppingList } from "@/lib/shopping-list";

export function AddToListStickyBar() {
  const pathname = usePathname();
  const { state } = useShoppingList();

  const count = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );

  if (pathname === "/shopping-list" || count === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(calc(100%-2rem),24rem)] -translate-x-1/2">
      <Link
        href="/shopping-list"
        className="flex items-center justify-between rounded-2xl bg-[var(--forest)] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[var(--forest-light)] active:scale-[0.98]"
      >
        <span>
          {count} {count === 1 ? "item" : "items"} on your list
        </span>
        <span className="text-white/90">View list →</span>
      </Link>
    </div>
  );
}
