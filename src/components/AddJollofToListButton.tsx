"use client";

import Link from "next/link";
import { useState } from "react";
import { getProductById } from "@/lib/data/products";
import { useShoppingList } from "@/lib/shopping-list";

/** Jollof Rice ingredients: rice, palm oil, tomato paste, Scotch bonnet, red onions, Maggi. */
const JOLLOF_INGREDIENT_IDS = ["s1", "s2", "s6", "p3", "p4", "s7"];

export function AddJollofToListButton() {
  const { addProduct, isInList } = useShoppingList();
  const [added, setAdded] = useState(false);

  const itemsToAdd = JOLLOF_INGREDIENT_IDS.map((id) => getProductById(id)).filter(
    (p): p is NonNullable<typeof p> => p != null,
  );

  const allInList = itemsToAdd.every((p) => isInList(p.id));

  const addJollofToList = () => {
    itemsToAdd.forEach((item) => addProduct(item));
    setAdded(true);
  };

  return (
    <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6">
      <h3 className="text-xl font-bold text-orange-800">Perfect Jollof Rice Pack</h3>
      <p className="mb-4 mt-2 text-sm text-orange-700">
        Need everything for Jollof? We&apos;ve got the rice, oil, peppers, and spices ready.
      </p>
      {allInList || added ? (
        <p className="text-sm font-medium text-orange-800">
          All Jollof ingredients added to your list!{" "}
          <Link href="/shopping-list" className="underline hover:no-underline">
            View your list →
          </Link>
        </p>
      ) : (
        <button
          type="button"
          onClick={addJollofToList}
          className="w-full rounded-lg bg-orange-600 py-3 font-black text-white transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
        >
          + Add All Ingredients to List
        </button>
      )}
    </div>
  );
}
