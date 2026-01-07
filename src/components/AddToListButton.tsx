"use client";

import { Button } from "@/components/Button";
import { useShoppingList } from "@/lib/shopping-list";

export function AddToListButton({
  name,
  size = "sm",
  className,
}: {
  name: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const { addItem } = useShoppingList();
  return (
    <Button
      type="button"
      size={size}
      variant="secondary"
      className={className}
      onClick={() => addItem(name)}
      aria-label={`Add ${name} to shopping list`}
    >
      Add to list
    </Button>
  );
}





