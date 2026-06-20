"use client";

import Link from "next/link";
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

/** Group items by category (store-ready). Only for remaining (unchecked) items. */
function groupRemainingByCategory(
  items: ShoppingListItem[],
): Map<string, ShoppingListItem[]> {
  const remaining = items.filter((i) => !(i.checked ?? false));
  const byCategory = new Map<string, ShoppingListItem[]>();
  for (const item of remaining) {
    const cat =
      item.category && CATEGORY_ORDER.includes(item.category)
        ? item.category
        : OTHER_CATEGORY;
    const list = byCategory.get(cat) ?? [];
    list.push(item);
    byCategory.set(cat, list);
  }
  for (const [, list] of byCategory) {
    list.sort((a, b) => a.addedAt - b.addedAt);
  }
  return byCategory;
}

const SECTION_ORDER = [...CATEGORY_ORDER, OTHER_CATEGORY];

const EMPTY_ESSENTIALS = ["Bread", "Milk"];

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

export default function ShoppingListPage() {
  const { state, removeItem, setQuantity, clear, toggleChecked } = useShoppingList();

  const remaining = useMemo(
    () => state.items.filter((i) => !(i.checked ?? false)),
    [state.items],
  );
  const completed = useMemo(
    () => state.items.filter((i) => i.checked ?? false).sort((a, b) => a.addedAt - b.addedAt),
    [state.items],
  );
  const remainingByCategory = useMemo(
    () => groupRemainingByCategory(state.items),
    [state.items],
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white p-4 shadow-sm">
        <h1 className="text-xl font-black text-stone-900">My Makola List</h1>
        <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-stone-500">
          {remaining.length} {remaining.length === 1 ? "Item" : "Items"} Remaining
        </p>
      </header>

      <div className="space-y-4 p-4">
        {/* Quick add + export (compact) */}
        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <QuickAddForm
            placeholder="Search for Fufu, Palm Oil, etc..."
            className="gap-2"
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <ListExportButtons
              items={state.items}
              disabled={state.items.length === 0}
            />
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
          <p className="mt-3 text-xs text-stone-500">
            <strong>Don&apos;t see it?</strong>{" "}
            <a
              href={STORE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--forest)] underline"
            >
              Ask on WhatsApp
            </a>
          </p>
        </div>

        {state.items.length === 0 ? (
          /* Empty State */
          <div className="py-20 text-center">
            <div className="mb-4 text-5xl" aria-hidden>
              🛒
            </div>
            <h2 className="text-lg font-bold text-stone-800">Your list is empty</h2>
            <p className="mt-1 text-stone-500">Add some plantains to get started!</p>
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
          <>
            {/* To-Buy Section (remaining, grouped by category) */}
            <section className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                Sorted by category — matches store layout
              </p>
              {SECTION_ORDER.map((categoryId) => {
                const items = remainingByCategory.get(categoryId);
                if (!items?.length) return null;
                const categoryLabel =
                  categoryId === OTHER_CATEGORY
                    ? "Other"
                    : categories.find((c) => c.id === categoryId)?.name ?? categoryId;
                return (
                  <div key={categoryId}>
                    <h2 className="mb-2 text-sm font-bold text-stone-700">
                      {categoryLabel}
                    </h2>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <RemainingRow
                          key={item.id}
                          item={item}
                          onToggle={() => toggleChecked(item.id)}
                          onRemove={() => removeItem(item.id)}
                          onSetQuantity={(q) => setQuantity(item.id, q)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Completed Section — "In Your Cart" */}
            {completed.length > 0 && (
              <section className="border-t border-stone-200 pt-4">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-400">
                  In Your Cart
                </h3>
                <div className="space-y-2 opacity-60">
                  {completed.map((item) => (
                    <CompletedRow
                      key={item.id}
                      item={item}
                      onToggle={() => toggleChecked(item.id)}
                      onRemove={() => removeItem(item.id)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      {/* Persistent "Add More Items" button for mobile */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-stone-200 bg-white/80 p-4 backdrop-blur-md">
        <Link
          href="/departments"
          className="block w-full rounded-2xl bg-[var(--forest)] py-4 text-center font-bold text-white shadow-lg transition hover:bg-[var(--forest-light)] active:bg-[var(--forest-dark)]"
        >
          + Add More Items
        </Link>
      </div>
    </div>
  );
}

function QuickAddChip({ name }: { name: string }) {
  const { addItem } = useShoppingList();
  return (
    <button
      type="button"
      onClick={() => addItem(name)}
      className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 shadow-sm transition active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70"
    >
      + {name}
    </button>
  );
}

function RemainingRow({
  item,
  onToggle,
  onRemove,
  onSetQuantity,
}: {
  item: ShoppingListItem;
  onToggle: () => void;
  onRemove: () => void;
  onSetQuantity: (q: number) => void;
}) {
  return (
    <div
      className="flex cursor-pointer items-center rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition active:bg-stone-100"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={item.checked ?? false}
    >
      <input
        type="checkbox"
        checked={item.checked ?? false}
        onChange={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="h-7 w-7 shrink-0 cursor-pointer rounded-full border-2 border-[var(--forest)] text-[var(--forest)] focus:ring-2 focus:ring-[var(--gold)]/70 focus:ring-offset-0"
        aria-label={`Check off ${item.name}`}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="ml-4 min-w-0 flex-1">
        <p className="font-bold text-stone-800">{item.name}</p>
        {item.unit && (
          <p className="text-xs text-stone-400">{item.unit}</p>
        )}
        {item.quantity > 1 && (
          <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2" onClick={(e) => e.stopPropagation()}>
        {item.quantity > 1 && (
          <div className="flex items-center rounded-full border border-stone-200 bg-stone-50">
            <button
              type="button"
              className="h-8 w-8 rounded-full text-stone-600 hover:bg-stone-200 disabled:opacity-50"
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
              className="h-8 w-8 rounded-full text-stone-600 hover:bg-stone-200"
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
          className="p-2 text-stone-300 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:rounded-lg"
          aria-label={`Remove ${item.name}`}
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CompletedRow({
  item,
  onToggle,
  onRemove,
}: {
  item: ShoppingListItem;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center rounded-lg border border-transparent bg-stone-100 p-3">
      <input
        type="checkbox"
        checked={item.checked ?? false}
        onChange={onToggle}
        className="h-5 w-5 shrink-0 rounded-full border-stone-300 text-stone-400 focus:ring-0"
        aria-label={`Uncheck ${item.name}`}
      />
      <span className="ml-3 flex-1 truncate text-sm italic leading-tight line-through text-stone-500">
        {item.name}
        {item.quantity > 1 ? ` × ${item.quantity}` : ""}
      </span>
      <button
        type="button"
        onClick={onRemove}
        className="p-1 text-stone-400 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:rounded"
        aria-label={`Remove ${item.name}`}
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
