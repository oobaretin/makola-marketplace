import type { ShoppingListState } from "@/lib/shopping-list/types";

const STORAGE_KEY = "makola.shoppingList.v1";

export function loadShoppingListState(): ShoppingListState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!isValidState(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveShoppingListState(state: ShoppingListState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage failures (private mode, quota, etc.)
  }
}

export function shoppingListStorageKey(): string {
  return STORAGE_KEY;
}

function isValidState(v: unknown): v is ShoppingListState {
  if (!v || typeof v !== "object") return false;
  const items = (v as { items?: unknown }).items;
  if (!Array.isArray(items)) return false;
  return items.every((it) => {
    if (!it || typeof it !== "object") return false;
    const o = it as Record<string, unknown>;
    return (
      typeof o.id === "string" &&
      typeof o.name === "string" &&
      typeof o.quantity === "number" &&
      typeof o.addedAt === "number"
    );
  });
}





