/**
 * Recipe-to-List — increase basket size by adding all ingredients for a dish.
 * Uses authentic names (Gari, Shito, Ugu, etc.).
 */
export type Recipe = {
  slug: string;
  name: string;
  shortDescription: string;
  /** All ingredients to add to list (authentic names) */
  ingredients: string[];
};

export const RECIPES: Recipe[] = [
  {
    slug: "jollof-rice",
    name: "Jollof Rice",
    shortDescription: "One-pot tomato rice with peppers and spices.",
    ingredients: [
      "Parboiled rice",
      "Tomatoes",
      "Tomato paste",
      "Scotch bonnet pepper",
      "Onions",
      "Red bell pepper",
      "Vegetable oil",
      "Thyme",
      "Curry powder",
      "Bay leaves",
      "Stock cube",
      "Salt",
    ],
  },
  {
    slug: "waakye",
    name: "Waakye",
    shortDescription: "Rice and beans with sorghum leaves.",
    ingredients: [
      "Rice",
      "Black-eyed peas",
      "Dried sorghum leaves (waakye leaves)",
      "Onions",
      "Tomatoes",
      "Scotch bonnet pepper",
      "Vegetable oil",
      "Stock cube",
      "Salt",
    ],
  },
  {
    slug: "egusi-soup",
    name: "Egusi Soup",
    shortDescription: "Melon seed soup with leafy greens.",
    ingredients: [
      "Egusi (melon seeds)",
      "Palm oil",
      "Leafy greens (spinach or ugu)",
      "Onions",
      "Tomatoes",
      "Scotch bonnet pepper",
      "Crayfish",
      "Stockfish",
      "Stock cube",
      "Salt",
    ],
  },
  {
    slug: "eba-and-soup",
    name: "Eba & Soup",
    shortDescription: "Garri swallow with any soup.",
    ingredients: [
      "Garri",
      "Palm oil",
      "Leafy greens (ugu or bitterleaf)",
      "Onions",
      "Tomatoes",
      "Pepper",
      "Crayfish",
      "Stock cube",
      "Salt",
    ],
  },
  {
    slug: "banku-and-tilapia",
    name: "Banku & Tilapia",
    shortDescription: "Fermented corn/cassava with grilled fish.",
    ingredients: [
      "Banku (or corn dough)",
      "Tilapia (fresh or frozen)",
      "Pepper",
      "Onions",
      "Tomatoes",
      "Ginger",
      "Oil",
      "Salt",
    ],
  },
  {
    slug: "fried-rice",
    name: "Fried Rice",
    shortDescription: "Stir-fried rice with vegetables.",
    ingredients: [
      "Jasmine rice or long-grain rice",
      "Vegetable oil",
      "Onions",
      "Carrots",
      "Green peas",
      "Green beans",
      "Eggs",
      "Soy sauce",
      "Stock cube",
      "Salt",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}
