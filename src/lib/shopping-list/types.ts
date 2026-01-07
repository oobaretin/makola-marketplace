export type ShoppingListItemId = string;

export type ShoppingListItem = {
  id: ShoppingListItemId;
  name: string;
  quantity: number;
  addedAt: number; // unix ms
};

export type ShoppingListState = {
  items: ShoppingListItem[];
};





