"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ShoppingListContext } from "@/lib/shopping-list/ShoppingListContext";
import {
  INITIAL_SHOPPING_LIST_STATE,
  shoppingListReducer,
} from "@/lib/shopping-list/reducer";
import {
  loadShoppingListState,
  saveShoppingListState,
  shoppingListStorageKey,
} from "@/lib/shopping-list/storage";

export function ShoppingListProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    shoppingListReducer,
    INITIAL_SHOPPING_LIST_STATE,
  );

  // Initial hydrate from localStorage
  useEffect(() => {
    const hydrated = loadShoppingListState();
    if (hydrated) dispatch({ type: "hydrate", state: hydrated });
  }, []);

  // Persist to localStorage
  useEffect(() => {
    saveShoppingListState(state);
  }, [state]);

  // Cross-tab sync (storage events only fire in other tabs)
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== shoppingListStorageKey()) return;
      const hydrated = loadShoppingListState();
      if (hydrated) dispatch({ type: "hydrate", state: hydrated });
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback((name: string) => dispatch({ type: "add", name }), []);
  const addItems = useCallback((names: string[]) => {
    names.forEach((name) => dispatch({ type: "add", name }));
  }, []);
  const addProduct = useCallback(
    (product: { id: string; category: string; name: string; unit: string }) =>
      dispatch({ type: "addProduct", product }),
    [],
  );
  const isInList = useCallback(
    (productId: string) =>
      state.items.some(
        (i) => i.productId === productId || i.id === productId,
      ),
    [state.items],
  );
  const toggleChecked = useCallback(
    (id: string) => dispatch({ type: "toggleChecked", id }),
    [],
  );
  const removeItem = useCallback(
    (id: string) => dispatch({ type: "remove", id }),
    [],
  );
  const setQuantity = useCallback(
    (id: string, quantity: number) => dispatch({ type: "setQuantity", id, quantity }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const value = useMemo(
    () => ({
      state,
      addItem,
      addItems,
      addProduct,
      isInList,
      toggleChecked,
      removeItem,
      setQuantity,
      clear,
    }),
    [
      state,
      addItem,
      addItems,
      addProduct,
      isInList,
      toggleChecked,
      removeItem,
      setQuantity,
      clear,
    ],
  );

  return <ShoppingListContext.Provider value={value}>{children}</ShoppingListContext.Provider>;
}





