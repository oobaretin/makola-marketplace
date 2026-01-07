"use client";

import { createContext } from "react";
import type { ShoppingListState } from "@/lib/shopping-list/types";

export type ShoppingListApi = {
  state: ShoppingListState;
  addItem: (name: string) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

export const ShoppingListContext = createContext<ShoppingListApi | null>(null);





