export type ShoppingListItemId = string;

export type ShoppingListItem = {
  id: ShoppingListItemId;
  name: string;
  quantity: number;
  addedAt: number; // unix ms
  /** When true, item is checked off (strike-through, dim, moved to bottom). */
  checked?: boolean;
  /** Set when added from catalog; used for "Added" state on product cards. */
  productId?: string;
  unit?: string;
  category?: string;
};

export type ShoppingListState = {
  items: ShoppingListItem[];
};





