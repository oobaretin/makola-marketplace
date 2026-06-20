import { describe, expect, it } from "vitest";
import {
  INITIAL_SHOPPING_LIST_STATE,
  shoppingListReducer,
} from "@/lib/shopping-list/reducer";

describe("shoppingListReducer", () => {
  it("adds a custom item", () => {
    const next = shoppingListReducer(INITIAL_SHOPPING_LIST_STATE, {
      type: "add",
      name: "  Palm Oil  ",
    });
    expect(next.items).toHaveLength(1);
    expect(next.items[0]?.name).toBe("Palm Oil");
    expect(next.items[0]?.quantity).toBe(1);
  });

  it("increments quantity for duplicate names", () => {
    const first = shoppingListReducer(INITIAL_SHOPPING_LIST_STATE, {
      type: "add",
      name: "Gari",
    });
    const second = shoppingListReducer(first, { type: "add", name: "gari" });
    expect(second.items).toHaveLength(1);
    expect(second.items[0]?.quantity).toBe(2);
  });

  it("adds a catalog product once", () => {
    const product = {
      id: "p1",
      category: "produce",
      name: "Puna Yam (Large)",
      unit: "per tuber",
    };
    const once = shoppingListReducer(INITIAL_SHOPPING_LIST_STATE, {
      type: "addProduct",
      product,
    });
    const twice = shoppingListReducer(once, { type: "addProduct", product });
    expect(once.items).toHaveLength(1);
    expect(twice.items).toHaveLength(1);
    expect(twice.items[0]?.productId).toBe("p1");
  });

  it("toggles checked state", () => {
    const added = shoppingListReducer(INITIAL_SHOPPING_LIST_STATE, {
      type: "add",
      name: "Plantains",
    });
    const id = added.items[0]!.id;
    const checked = shoppingListReducer(added, { type: "toggleChecked", id });
    expect(checked.items[0]?.checked).toBe(true);
  });

  it("clears all items", () => {
    const withItem = shoppingListReducer(INITIAL_SHOPPING_LIST_STATE, {
      type: "add",
      name: "Fufu",
    });
    const cleared = shoppingListReducer(withItem, { type: "clear" });
    expect(cleared.items).toHaveLength(0);
  });
});
