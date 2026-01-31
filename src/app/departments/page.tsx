"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import {
  categories,
  getProductsByCategory,
  searchProducts,
  type Product,
} from "@/lib/data/products";
import { isKitchenOpen } from "@/lib/data/kitchen";
import { useShoppingList } from "@/lib/shopping-list";

const CHIP_IDS = ["all", "produce", "pantry", "meat", "flour", "drinks", "snacks", "kitchen"] as const;

function DepartmentsContent() {
  const searchParams = useSearchParams();
  const chipParam = searchParams.get("c") ?? "all";
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState<string>(
    CHIP_IDS.includes(chipParam as (typeof CHIP_IDS)[number]) ? chipParam : "all",
  );

  const filteredProducts = useMemo(() => {
    if (search.trim()) {
      return searchProducts(search);
    }
    return getProductsByCategory(activeChip);
  }, [activeChip, search]);

  const productsByCategory = useMemo(() => {
    const byCat = new Map<string, Product[]>();
    for (const p of filteredProducts) {
      const list = byCat.get(p.category) ?? [];
      list.push(p);
      byCat.set(p.category, list);
    }
    return byCat;
  }, [filteredProducts]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">
          Departments
        </h1>
        <p className="text-sm text-stone-600">
          Tap <strong>+ Add</strong> to put an item on your list. In-store only.
        </p>
        <div className="flex gap-2 pt-2">
          <Button href="/shopping-list" variant="primary" size="sm">
            View my list
          </Button>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Search bar */}
      <div className="sticky top-[calc(var(--header-height,56px)+0.25rem)] z-30 -mx-4 bg-[var(--background)]/95 px-4 py-2 backdrop-blur sm:static sm:mx-0 sm:px-0 sm:py-0">
        <label className="sr-only" htmlFor="dept-search">
          Search for items
        </label>
        <input
          id="dept-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Fufu, Palm Oil, etc..."
          className="h-12 w-full rounded-2xl border border-stone-200 bg-white px-4 text-base text-stone-950 placeholder:text-stone-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60"
          autoComplete="off"
        />
      </div>

      {/* Horizontal scroll chips */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {CHIP_IDS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActiveChip(c)}
            className={[
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
              activeChip === c
                ? "bg-[var(--forest)] text-white shadow-sm"
                : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50",
            ].join(" ")}
          >
            {c === "all" ? "All" : categories.find((cat) => cat.id === c)?.name ?? c}
          </button>
        ))}
      </div>

      {/* Product list by category */}
      <div className="space-y-8">
        {categories
          .filter((cat) => productsByCategory.has(cat.id))
          .map((cat) => (
            <section key={cat.id}>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-950">
                <span aria-hidden>{cat.icon}</span>
                {cat.name}
              </h2>
              <div className="mt-3 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <ul className="divide-y divide-stone-200">
                  {(productsByCategory.get(cat.id) ?? []).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </section>
          ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
          No items match your search. Try another term or clear the filter.
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addProduct, isInList } = useShoppingList();
  const added = isInList(product.id);
  const isKitchen = product.category === "kitchen";
  const kitchenClosed = isKitchen && !isKitchenOpen();

  return (
    <li className="flex flex-col gap-1 border-b border-stone-200 bg-white p-4 last:border-b-0">
      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-stone-800">{product.name}</h3>
          <p className="text-sm text-stone-500">{product.unit}</p>
        </div>
        <button
          type="button"
          onClick={() => addProduct(product)}
          disabled={added}
          className={[
            "shrink-0 rounded-full px-4 py-2 font-bold transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2",
            added
              ? "cursor-default bg-stone-100 text-stone-400"
              : "bg-[var(--forest)] text-white hover:bg-[var(--forest-light)]",
          ].join(" ")}
        >
          {added ? "Added" : "+ Add"}
        </button>
      </div>
      {kitchenClosed && (
        <p className="text-xs text-amber-700">
          Kitchen opens at 11:00 AM — Add to list now to pick up later!
        </p>
      )}
    </li>
  );
}

export default function DepartmentsPage() {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse rounded-2xl bg-stone-100 p-10 text-center text-stone-500">
          Loading…
        </div>
      }
    >
      <DepartmentsContent />
    </Suspense>
  );
}
