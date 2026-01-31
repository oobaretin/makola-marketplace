"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { useShoppingList } from "@/lib/shopping-list";

export function QuickAddForm({
  placeholder = "Add any item… (e.g., palm oil, garri, crayfish)",
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  const { addItem } = useShoppingList();
  const [value, setValue] = useState("");
  const canAdd = useMemo(() => value.trim().length > 0, [value]);

  return (
    <form
      className={["flex w-full flex-col gap-3 sm:flex-row", className ?? ""].join(" ")}
      onSubmit={(e) => {
        e.preventDefault();
        if (!canAdd) return;
        addItem(value);
        setValue("");
      }}
    >
      <label className="sr-only" htmlFor="quick-add">
        Add an item to your shopping list
      </label>
      <input
        id="quick-add"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm text-stone-950 shadow-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60"
      />
      <Button type="submit" variant="primary" disabled={!canAdd} className="sm:w-auto">
        Add item
      </Button>
    </form>
  );
}


