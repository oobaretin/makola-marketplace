"use client";

import { createContext } from "react";
import type { ShoppingListState } from "@/lib/shopping-list/types";

export type ProductForList = {
  id: string;
  category: string;
  name: string;
  unit: string;
};

export type ShoppingListApi = {
  state: ShoppingListState;
  addItem: (name: string) => void;
  addItems: (names: string[]) => void;
  addProduct: (product: ProductForList) => void;
  isInList: (productId: string) => boolean;
  toggleChecked: (id: string) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

export const ShoppingListContext = createContext<ShoppingListApi | null>(null);





