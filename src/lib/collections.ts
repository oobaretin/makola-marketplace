/**
 * Hard-coded collections for department pages.
 * Each item has name + unit for product cards; "Add to List" adds the name.
 */
export type CollectionItem = {
  name: string;
  unit: string; // e.g. "Per Bunch", "Per Bag", "Each"
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  /** Chip filter value (All | Produce | Pantry | Meat | Frozen) */
  chip: "produce" | "pantry" | "liquids" | "meat" | "frozen" | "household";
  items: CollectionItem[];
};

export const COLLECTIONS: Collection[] = [
  {
    id: "tubers-produce",
    name: "Tubers & Produce",
    description: "Fresh yams, plantains, cassava, and peppers.",
    chip: "produce",
    items: [
      { name: "Yams", unit: "Per tuber" },
      { name: "Plantains (Green)", unit: "Per bunch" },
      { name: "Plantains (Ripe)", unit: "Per bunch" },
      { name: "Cassava", unit: "Per piece" },
      { name: "Scotch Bonnets", unit: "Per bag" },
      { name: "Garden Eggs", unit: "Per bag" },
    ],
  },
  {
    id: "pantry-grains",
    name: "Pantry / Grains",
    description: "Gari, rice, beans, and soup bases.",
    chip: "pantry",
    items: [
      { name: "Gari", unit: "Per bag" },
      { name: "Jasmine Rice", unit: "Per bag" },
      { name: "Basmati Rice", unit: "Per bag" },
      { name: "Brown Beans", unit: "Per bag" },
      { name: "Honey Beans", unit: "Per bag" },
      { name: "Egusi", unit: "Per bag" },
      { name: "Ogbono", unit: "Per bag" },
    ],
  },
  {
    id: "liquids-oils",
    name: "Liquids / Oils",
    description: "Palm oil, vegetable oil, shito, and drinks.",
    chip: "liquids",
    items: [
      { name: "Palm Oil", unit: "Per bottle" },
      { name: "Vegetable Oil", unit: "Per bottle" },
      { name: "Shito", unit: "Per jar" },
      { name: "Malt drinks", unit: "Per pack" },
    ],
  },
  {
    id: "proteins",
    name: "Proteins (Frozen / Dried)",
    description: "Stockfish, smoked fish, goat, oxtail, and more.",
    chip: "meat",
    items: [
      { name: "Stockfish", unit: "Per piece" },
      { name: "Smoked Catfish", unit: "Per piece" },
      { name: "Goat Meat", unit: "Per lb" },
      { name: "Oxtail", unit: "Per lb" },
      { name: "Hen", unit: "Each" },
    ],
  },
  {
    id: "frozen",
    name: "Frozen",
    description: "Frozen fufu, plantains, and convenience items.",
    chip: "frozen",
    items: [
      { name: "Frozen Fufu", unit: "Per pack" },
      { name: "Frozen Plantain", unit: "Per pack" },
      { name: "Frozen Pounded Yam", unit: "Per pack" },
    ],
  },
  {
    id: "household",
    name: "Household",
    description: "Everyday essentials.",
    chip: "household",
    items: [
      { name: "Tissue", unit: "Per pack" },
      { name: "Plastic bags", unit: "Per roll" },
      { name: "Soap", unit: "Each" },
    ],
  },
];

export const CHIP_LABELS: Record<string, string> = {
  all: "All",
  produce: "Produce",
  pantry: "Pantry",
  liquids: "Liquids",
  meat: "Meat",
  frozen: "Frozen",
  household: "Household",
};

export function getCollectionById(id: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.id === id);
}

export function getCollectionsByChip(chip: string): Collection[] {
  if (!chip || chip === "all") return COLLECTIONS;
  return COLLECTIONS.filter((c) => c.chip === chip);
}
