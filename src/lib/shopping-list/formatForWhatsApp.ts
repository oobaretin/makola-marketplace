import type { ShoppingListItem } from "@/lib/shopping-list/types";

/** WhatsApp message: checkmarks, name (unit), then "See you at the store!" */
export function formatListForWhatsApp(items: ShoppingListItem[]): string {
  const listItems = items
    .map(
      (i) =>
        `${i.checked ? "✅" : "⬜"} ${i.name} (${i.unit ?? "item"}${i.quantity > 1 ? ` x${i.quantity}` : ""})`,
    )
    .join("\n");
  return `My Makola Marketplace List:\n\n${listItems}\n\nSee you at the store! 📍 9051 W Bellfort Ave`;
}
