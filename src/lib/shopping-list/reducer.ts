import type { ShoppingListItem, ShoppingListState } from "@/lib/shopping-list/types";

export type ShoppingListAction =
  | { type: "hydrate"; state: ShoppingListState }
  | { type: "add"; name: string }
  | { type: "remove"; id: string }
  | { type: "setQuantity"; id: string; quantity: number }
  | { type: "clear" };

export const INITIAL_SHOPPING_LIST_STATE: ShoppingListState = { items: [] };

export function shoppingListReducer(
  state: ShoppingListState,
  action: ShoppingListAction,
): ShoppingListState {
  switch (action.type) {
    case "hydrate": {
      return action.state;
    }
    case "add": {
      const name = normalizeName(action.name);
      if (!name) return state;
      const existing = state.items.find((i) => i.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      const item: ShoppingListItem = {
        id: makeId(),
        name,
        quantity: 1,
        addedAt: Date.now(),
      };
      return { items: [item, ...state.items] };
    }
    case "remove": {
      return { items: state.items.filter((i) => i.id !== action.id) };
    }
    case "setQuantity": {
      const quantity = clampQuantity(action.quantity);
      if (quantity <= 0) return { items: state.items.filter((i) => i.id !== action.id) };
      return {
        items: state.items.map((i) => (i.id === action.id ? { ...i, quantity } : i)),
      };
    }
    case "clear": {
      return { items: [] };
    }
    default: {
      return state;
    }
  }
}

function normalizeName(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function clampQuantity(value: number): number {
  if (!Number.isFinite(value)) return 1;
  return Math.max(0, Math.min(99, Math.round(value)));
}

function makeId(): string {
  // Short, URL-safe-ish unique id (not crypto; fine for client-only state)
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}





