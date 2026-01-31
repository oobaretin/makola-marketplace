"use client";

import { Button } from "@/components/Button";
import { useShoppingList } from "@/lib/shopping-list";
import type { Recipe } from "@/lib/recipes";

export function RecipeToListItem({ recipe }: { recipe: Recipe }) {
  const { addItems } = useShoppingList();

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow">
      <div>
        <h3 className="text-base font-semibold text-zinc-950">{recipe.name}</h3>
        <p className="mt-1 text-sm text-zinc-600">{recipe.shortDescription}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {recipe.ingredients.slice(0, 4).map((ing) => (
          <span
            key={ing}
            className="rounded-full bg-zinc-900/5 px-2.5 py-1 text-xs font-medium text-zinc-700"
          >
            {ing}
          </span>
        ))}
        {recipe.ingredients.length > 4 && (
          <span className="rounded-full bg-zinc-900/5 px-2.5 py-1 text-xs font-medium text-zinc-500">
            +{recipe.ingredients.length - 4} more
          </span>
        )}
      </div>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => addItems(recipe.ingredients)}
        aria-label={`Add all ingredients for ${recipe.name} to shopping list`}
      >
        Add all to list
      </Button>
    </div>
  );
}
