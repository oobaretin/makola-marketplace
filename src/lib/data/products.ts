/**
 * Hard-coded inventory: West African Houston market categories.
 * Used for departments, shopping list grouping, and recipe bundles.
 */
export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  unit: string;
};

export const categories: Category[] = [
  { id: "produce", name: "Produce & Tubers", icon: "🥬" },
  { id: "pantry", name: "Pantry Staples", icon: "🌾" },
  { id: "meat", name: "Protein & Fish", icon: "🥩" },
  { id: "flour", name: "Flours & Swallows", icon: "🫓" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
  { id: "snacks", name: "Snacks", icon: "🍿" },
  { id: "kitchen", name: "Kitchen Menu", icon: "🍲" },
];

export const products: Product[] = [
  // PRODUCE & TUBERS
  { id: "p1", name: "Puna Yam (Large)", category: "produce", unit: "per tuber" },
  { id: "p2", name: "Green Plantains", category: "produce", unit: "per bunch" },
  { id: "p3", name: "Scotch Bonnet Peppers (Rodo)", category: "produce", unit: "small bag" },
  { id: "p4", name: "Red Onions", category: "produce", unit: "bag" },
  { id: "p5", name: "Fresh Ginger", category: "produce", unit: "lb" },
  { id: "p6", name: "Garden Eggs (African Eggplant)", category: "produce", unit: "lb" },

  // PANTRY STAPLES
  { id: "s1", name: "African Elephant Jasmine Rice", category: "pantry", unit: "50lb bag" },
  { id: "s2", name: "Red Palm Oil (Zomi)", category: "pantry", unit: "1L bottle" },
  { id: "s3", name: "Gari (White)", category: "pantry", unit: "5lb bag" },
  { id: "s4", name: "Gari (Yellow/Ijebu)", category: "pantry", unit: "5lb bag" },
  { id: "s5", name: "Honey Beans (Oloyin)", category: "pantry", unit: "4lb bag" },
  { id: "s6", name: "Tomato Paste (De Rica/Gino)", category: "pantry", unit: "tin" },
  { id: "s7", name: "Maggi Seasoning Cubes (Star)", category: "pantry", unit: "pack" },
  { id: "s8", name: "Indomie Instant Noodles", category: "pantry", unit: "case" },

  // PROTEIN & FISH
  { id: "m1", name: "Smoked Catfish (Dry)", category: "meat", unit: "each" },
  { id: "m2", name: "Stockfish Head", category: "meat", unit: "per piece" },
  { id: "m3", name: "Ground Crayfish", category: "meat", unit: "container" },
  { id: "m4", name: "Titus Sardines", category: "meat", unit: "tin" },
  { id: "m5", name: "Frozen Goat Meat (Cut)", category: "meat", unit: "5lb bag" },
  { id: "m6", name: "Hard Chicken (Old Hen)", category: "meat", unit: "each" },

  // FLOURS & SWALLOWS
  { id: "f1", name: "Pounded Yam Flour (Iyan)", category: "flour", unit: "5lb bag" },
  { id: "f2", name: "Cassava Flour (Lafun)", category: "flour", unit: "lb" },
  { id: "f3", name: "Banku Mix", category: "flour", unit: "pack" },

  // SNACKS & DRINKS
  { id: "d1", name: "Malta Guinness / Supermalt", category: "drinks", unit: "6-pack" },
  { id: "d2", name: "Plantain Chips (Spicy)", category: "snacks", unit: "bag" },
  { id: "d3", name: "Ghana Fresh Palm Drink", category: "drinks", unit: "bottle" },

  // KITCHEN MENU (Food To Go)
  { id: "k1", name: "Jollof Rice & Chicken (Plate)", category: "kitchen", unit: "Hot Meal" },
  { id: "k2", name: "Egusi Soup with Pounded Yam", category: "kitchen", unit: "Hot Meal" },
  { id: "k3", name: "Waakye (Rice & Beans)", category: "kitchen", unit: "Hot Meal" },
  { id: "k4", name: "Meat Pie / Fish Pie", category: "kitchen", unit: "Snack" },
];

export function getProductsByCategory(categoryId: string): Product[] {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function searchProducts(q: string): Product[] {
  const lower = q.trim().toLowerCase();
  if (!lower) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) || p.unit.toLowerCase().includes(lower),
  );
}

/** Category order for store-ready shopping list (matches store layout). */
export const CATEGORY_ORDER: string[] = [
  "produce",
  "pantry",
  "meat",
  "flour",
  "snacks",
  "drinks",
  "kitchen",
];
