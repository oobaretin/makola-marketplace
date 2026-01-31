"use client";

import Link from "next/link";
import { getTodaysSpecial, isKitchenOpen } from "@/lib/data/kitchen";
import { getProductById } from "@/lib/data/products";
import { useShoppingList } from "@/lib/shopping-list";

export default function DailySpecial() {
  const { addProduct, isInList } = useShoppingList();
  const todaySpecial = getTodaysSpecial();
  const product = getProductById(todaySpecial.productId);
  const added = product ? isInList(todaySpecial.productId) : false;
  const kitchenOpen = isKitchenOpen();

  const handleAddSpecial = () => {
    if (product) {
      addProduct(product);
    }
  };

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 p-6 text-white shadow-xl">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <span className="rounded bg-white/20 px-2 py-1 text-xs font-black uppercase backdrop-blur-sm">
            Today&apos;s Kitchen Special
          </span>
          <h2 className="mt-2 text-2xl font-black">{todaySpecial.dish}</h2>
        </div>
        <div className="rounded-lg bg-white px-3 py-1 text-2xl font-bold text-red-600">
          {todaySpecial.price}
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-red-100">
        {todaySpecial.description}
      </p>

      {!kitchenOpen && (
        <p className="mb-4 rounded-lg bg-white/15 px-3 py-2 text-sm text-white/95">
          Kitchen opens at 11:00 AM — Add to list now to pick up later!
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleAddSpecial}
          disabled={added}
          className={
            added
              ? "flex-1 cursor-default rounded-xl bg-white/40 py-3 font-bold text-white/80"
              : "flex-1 rounded-xl bg-white py-3 font-bold text-red-600 transition hover:bg-red-50 active:scale-95"
          }
        >
          {added ? "Added" : "+ Add to My List"}
        </button>
        <Link
          href="/blog/makola-kitchen-food-to-go"
          className="flex-1 rounded-xl border border-white/40 py-3 text-center font-bold transition hover:bg-white/10"
        >
          Full Menu
        </Link>
      </div>
    </div>
  );
}
