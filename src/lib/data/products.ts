/**
 * Data structure: categories + products (hard-coded).
 * List items reference products by id for "Added" state and display.
 */
export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Product = {
  id: string;
  category: string;
  name: string;
  unit: string;
};

export const categories: Category[] = [
  { id: "produce", name: "Produce & Tubers", icon: "🥬" },
  { id: "pantry", name: "Pantry & Grains", icon: "🌾" },
  { id: "meat", name: "Meat & Fish", icon: "🥩" },
  { id: "frozen", name: "Frozen Foods", icon: "❄️" },
  { id: "liquids", name: "Liquids & Oils", icon: "🫒" },
  { id: "household", name: "Household", icon: "🧻" },
];

export const products: Product[] = [
  // Produce & Tubers
  { id: "1", category: "produce", name: "Puna Yam", unit: "per lb" },
  { id: "2", category: "produce", name: "Plantain (Ripe)", unit: "per bunch" },
  { id: "3", category: "produce", name: "Plantain (Green)", unit: "per bunch" },
  { id: "4", category: "produce", name: "Scotch Bonnet Peppers", unit: "small bag" },
  { id: "5", category: "produce", name: "Cassava", unit: "per piece" },
  { id: "6", category: "produce", name: "Garden Eggs", unit: "per bag" },
  // Pantry & Grains
  { id: "7", category: "pantry", name: "Jasmine Rice (20lb)", unit: "bag" },
  { id: "8", category: "pantry", name: "Gari", unit: "per bag" },
  { id: "9", category: "pantry", name: "Basmati Rice", unit: "per bag" },
  { id: "10", category: "pantry", name: "Brown Beans", unit: "per bag" },
  { id: "11", category: "pantry", name: "Honey Beans", unit: "per bag" },
  { id: "12", category: "pantry", name: "Egusi", unit: "per bag" },
  { id: "13", category: "pantry", name: "Ogbono", unit: "per bag" },
  // Liquids & Oils
  { id: "14", category: "liquids", name: "Red Palm Oil", unit: "1L bottle" },
  { id: "15", category: "liquids", name: "Vegetable Oil", unit: "per bottle" },
  { id: "16", category: "liquids", name: "Shito", unit: "per jar" },
  { id: "17", category: "liquids", name: "Malt drinks", unit: "per pack" },
  // Meat & Fish
  { id: "18", category: "meat", name: "Smoked Catfish", unit: "each" },
  { id: "19", category: "meat", name: "Stockfish", unit: "per piece" },
  { id: "20", category: "meat", name: "Goat Meat", unit: "per lb" },
  { id: "21", category: "meat", name: "Oxtail", unit: "per lb" },
  { id: "22", category: "meat", name: "Hen", unit: "each" },
  // Frozen
  { id: "23", category: "frozen", name: "Frozen Chopped Spinach", unit: "pack" },
  { id: "24", category: "frozen", name: "Frozen Fufu", unit: "per pack" },
  { id: "25", category: "frozen", name: "Frozen Plantain", unit: "per pack" },
  { id: "26", category: "frozen", name: "Frozen Pounded Yam", unit: "per pack" },
  // Household
  { id: "27", category: "household", name: "Tissue", unit: "per pack" },
  { id: "28", category: "household", name: "Plastic bags", unit: "per roll" },
  { id: "29", category: "household", name: "Soap", unit: "each" },
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
