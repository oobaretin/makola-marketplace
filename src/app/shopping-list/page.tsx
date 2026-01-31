"use client";

import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ListExportButtons } from "@/components/ListExportButtons";
import { QuickAddForm } from "@/components/QuickAddForm";
import { STORE_INFO } from "@/lib/store-info";
import { useShoppingList } from "@/lib/shopping-list";
import type { ShoppingListItem } from "@/lib/shopping-list/types";
import {
  categories,
  CATEGORY_ORDER,
} from "@/lib/data/products";

const OTHER_CATEGORY = "other";

/** Group items by category (store-ready: Produce, Pantry, Meat, etc.). Within each group: unchecked first, then checked. */
function groupItemsByCategory(items: ShoppingListItem[]): Map<string, ShoppingListItem[]> {
  const byCategory = new Map<string, ShoppingListItem[]>();
  for (const item of items) {
    const cat = item.category && CATEGORY_ORDER.includes(item.category)
      ? item.category
      : OTHER_CATEGORY;
    const list = byCategory.get(cat) ?? [];
    list.push(item);
    byCategory.set(cat, list);
  }
  for (const [, list] of byCategory) {
    const unchecked = list.filter((i) => !(i.checked ?? false)).sort((a, b) => a.addedAt - b.addedAt);
    const checked = list.filter((i) => i.checked ?? false).sort((a, b) => a.addedAt - b.addedAt);
    list.length = 0;
    list.push(...unchecked, ...checked);
  }
  return byCategory;
}

/** Section order: store layout (produce → pantry → meat → flour → snacks → drinks → other). */
function getSectionOrder(): string[] {
  return [...CATEGORY_ORDER, OTHER_CATEGORY];
}

const EMPTY_ESSENTIALS = ["Bread", "Milk"];

export default function ShoppingListPage() {
  const { state, removeItem, setQuantity, clear, toggleChecked } = useShoppingList();
  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );

  const itemsByCategory = useMemo(
    () => groupItemsByCategory(state.items),
    [state.items],
  );
  const sectionOrder = useMemo(() => getSectionOrder(), []);

  return (
    <div className="space-y-6 pb-12">
      {/* Sticky header: "My Makola List (count)" */}
      <header className="sticky top-0 z-20 -mx-4 -mt-2 flex items-center justify-between border-b border-stone-200 bg-[var(--background)]/95 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:mt-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:py-0">
        <h1 className="text-lg font-bold text-stone-950 sm:text-2xl">
          My Makola List ({state.items.length})
        </h1>
        <span
          className="rounded-full bg-[var(--forest)] px-3 py-1.5 text-sm font-semibold text-white"
          aria-live="polite"
        >
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </header>

      {/* Search bar – large, friendly */}
      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <QuickAddForm
          placeholder="Search for Fufu, Palm Oil, etc..."
          className="gap-2"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <ListExportButtons items={state.items} disabled={state.items.length === 0} />
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => clear()}
            disabled={state.items.length === 0}
          >
            Clear all
          </Button>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 px-3 py-2 text-sm text-emerald-900">
          <strong>Don&apos;t see it?</strong>{" "}
          <a
            href={STORE_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-emerald-400 underline-offset-2 hover:decoration-emerald-600"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </div>

      {state.items.length === 0 ? (
        /* Empty state */
        <div className="rounded-3xl border-2 border-dashed border-stone-300 bg-white p-10 text-center">
          <p className="text-stone-500 italic">
            Your list is empty. Visit the departments to add items!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {EMPTY_ESSENTIALS.map((name) => (
              <QuickAddChip key={name} name={name} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/departments" variant="primary">
              Browse departments
            </Button>
          </div>
        </div>
      ) : (
        <section className="space-y-6">
          <p className="text-xs text-stone-500">
            Sorted by category so your list matches the store layout.
          </p>
          {sectionOrder.map((categoryId) => {
            const sectionItems = itemsByCategory.get(categoryId);
            if (!sectionItems?.length) return null;
            const categoryLabel =
              categoryId === OTHER_CATEGORY
                ? "Other"
                : categories.find((c) => c.id === categoryId)?.name ?? categoryId;
            return (
              <div key={categoryId}>
                <h2 className="mb-2 text-sm font-semibold text-stone-700">
                  {categoryLabel}
                </h2>
                <ul className="space-y-3">
                  {sectionItems.map((item) => (
                    <ListItemRow
                      key={item.id}
                      item={item}
                      onToggleChecked={() => toggleChecked(item.id)}
                      onRemove={() => removeItem(item.id)}
                      onSetQuantity={(q) => setQuantity(item.id, q)}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

function QuickAddChip({ name }: { name: string }) {
  const { addItem } = useShoppingList();
  return (
    <button
      type="button"
      onClick={() => addItem(name)}
      className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 shadow-sm transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70"
    >
      + {name}
    </button>
  );
}

function ListItemRow({
  item,
  onToggleChecked,
  onRemove,
  onSetQuantity,
}: {
  item: ShoppingListItem;
  onToggleChecked: () => void;
  onRemove: () => void;
  onSetQuantity: (q: number) => void;
}) {
  const checked = item.checked ?? false;

  return (
    <li
      className={[
        "flex items-center gap-3 rounded-xl bg-stone-50 p-3 transition",
        checked ? "list-item-checked opacity-90" : "",
      ].join(" ")}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggleChecked}
        className="h-6 w-6 shrink-0 accent-[var(--forest)] focus:ring-2 focus:ring-[var(--gold)]/70 focus:ring-offset-0"
        aria-label={checked ? `Uncheck ${item.name}` : `Check off ${item.name}`}
      />
      <span
        className={[
          "min-w-0 flex-1 font-medium",
          checked ? "line-through text-stone-400" : "text-stone-800",
        ].join(" ")}
      >
        {item.name}
        {item.quantity > 1 ? ` × ${item.quantity}` : ""}
      </span>
      <div className="flex shrink-0 items-center gap-1">
        {item.quantity > 1 && (
          <div className="inline-flex items-center rounded-full border border-stone-200 bg-white">
            <button
              type="button"
              className="h-8 w-8 rounded-full text-stone-600 hover:bg-stone-100 disabled:opacity-50"
              onClick={() => onSetQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label={`Decrease ${item.name}`}
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium text-stone-800">
              {item.quantity}
            </span>
            <button
              type="button"
              className="h-8 w-8 rounded-full text-stone-600 hover:bg-stone-100"
              onClick={() => onSetQuantity(item.quantity + 1)}
              aria-label={`Increase ${item.name}`}
            >
              +
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={onRemove}
          className="text-sm text-red-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:rounded"
          aria-label={`Remove ${item.name}`}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
