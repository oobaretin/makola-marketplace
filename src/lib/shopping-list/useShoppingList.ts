"use client";

import { useContext } from "react";
import { ShoppingListContext } from "@/lib/shopping-list/ShoppingListContext";

export function useShoppingList() {
  const ctx = useContext(ShoppingListContext);
  if (!ctx) throw new Error("useShoppingList must be used within ShoppingListProvider");
  return ctx;
}





