import type { ShoppingListItem, ShoppingListState } from "@/lib/shopping-list/types";

export type ProductPayload = {
  id: string;
  category: string;
  name: string;
  unit: string;
};

export type ShoppingListAction =
  | { type: "hydrate"; state: ShoppingListState }
  | { type: "add"; name: string }
  | { type: "addProduct"; product: ProductPayload }
  | { type: "toggleChecked"; id: string }
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
      return {
        items: action.state.items.map((i) => ({
          ...i,
          checked: i.checked ?? false,
        })),
      };
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
        id: makeCustomId(),
        name,
        quantity: 1,
        addedAt: Date.now(),
        checked: false,
      };
      return { items: [item, ...state.items] };
    }
    case "addProduct": {
      const p = action.product;
      const alreadyInList = state.items.some(
        (i) => i.productId === p.id || i.id === p.id,
      );
      if (alreadyInList) return state;
      const item: ShoppingListItem = {
        id: p.id,
        productId: p.id,
        name: p.name,
        unit: p.unit,
        category: p.category,
        quantity: 1,
        addedAt: Date.now(),
        checked: false,
      };
      return { items: [item, ...state.items] };
    }
    case "toggleChecked": {
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, checked: !(i.checked ?? false) } : i,
        ),
      };
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
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function makeCustomId(): string {
  // Custom items use prefix so they don't collide with product ids
  return `custom_${makeId()}`;
}





