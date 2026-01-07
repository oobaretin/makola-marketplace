"use client";

import { useMemo } from "react";
import { Button } from "@/components/Button";
import { QuickAddForm } from "@/components/QuickAddForm";
import { STORE_INFO } from "@/lib/store-info";
import { useShoppingList } from "@/lib/shopping-list";

export default function ShoppingListPage() {
  const { state, removeItem, setQuantity, clear } = useShoppingList();
  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Shopping List
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Add anything you want — this list is saved on your device. When you’re ready,
          shop in-store at {STORE_INFO.addressLine1}.
        </p>
      </header>

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950">Quick add</div>
            <div className="mt-1 text-sm text-zinc-600">
              Type any item and press Add.
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              variant="ghost"
              onClick={() => window.print()}
              disabled={state.items.length === 0}
            >
              Print
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => clear()}
              disabled={state.items.length === 0}
            >
              Clear
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <QuickAddForm />
        </div>
      </div>

      {state.items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <div className="text-lg font-semibold text-zinc-950">
            Your list is empty
          </div>
          <div className="mt-2 text-sm text-zinc-600">
            Browse departments for starter ideas, or add a custom item above.
          </div>
          <div className="mt-6 flex justify-center">
            <Button href="/departments" variant="secondary">
              Browse departments
            </Button>
          </div>
        </div>
      ) : (
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <div className="text-sm font-semibold text-zinc-950">
              Items ({totalItems})
            </div>
            <div className="text-xs text-zinc-500">
              Saved locally on this device
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <ul className="divide-y divide-zinc-200/80">
              {state.items.map((item) => (
                <li key={item.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-zinc-950">
                      {item.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white">
                      <button
                        type="button"
                        className="h-9 w-9 rounded-full text-zinc-700 hover:bg-zinc-900/5"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        −
                      </button>
                      <input
                        value={item.quantity}
                        onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="h-9 w-12 bg-transparent text-center text-sm font-semibold text-zinc-950 outline-none"
                        aria-label={`Quantity for ${item.name}`}
                      />
                      <button
                        type="button"
                        className="h-9 w-9 rounded-full text-zinc-700 hover:bg-zinc-900/5"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}


