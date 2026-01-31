/**
 * Weekly kitchen specials — 0 = Sunday, 1 = Monday, … 6 = Saturday.
 * productId links to catalog so "Add to list" adds the right kitchen item.
 */
export type DailySpecial = {
  dish: string;
  price: string;
  description: string;
  productId: string;
};

export const weeklySpecials: Record<number, DailySpecial> = {
  0: {
    dish: "Special Sunday Omotuo (Rice Balls)",
    price: "$15.99",
    description: "Traditional Sunday favorite served with Peanut Soup.",
    productId: "k5",
  },
  1: {
    dish: "Jollof Rice & Grilled Chicken",
    price: "$13.50",
    description: "Our signature smoky Jollof served with fried plantains.",
    productId: "k6",
  },
  2: {
    dish: "Assorted Meat Stew & White Rice",
    price: "$14.50",
    description: "Rich tomato-based stew with beef, tripe, and cow foot.",
    productId: "k7",
  },
  3: {
    dish: "Waakye Special",
    price: "$15.00",
    description: "Rice and beans served with shito, wele, and boiled egg.",
    productId: "k8",
  },
  4: {
    dish: "Egusi Soup & Pounded Yam",
    price: "$16.00",
    description: "Authentic melon seed soup with spinach and assorted meats.",
    productId: "k9",
  },
  5: {
    dish: "Fresh Tilapia & Banku",
    price: "$18.50",
    description: "Grilled or fried tilapia served with fermented corn dough.",
    productId: "k10",
  },
  6: {
    dish: "Efo Riro (Vegetable Soup)",
    price: "$15.50",
    description: "Rich spinach stew cooked with palm oil and dried fish.",
    productId: "k11",
  },
};

export function getTodaysSpecial(): DailySpecial {
  const dayIndex = new Date().getDay();
  return weeklySpecials[dayIndex] ?? weeklySpecials[1]!;
}

/** Kitchen opens at 11:00 AM (local). Before that, show "add to list to pick up later" message. */
export function isKitchenOpen(): boolean {
  const hour = new Date().getHours();
  return hour >= 11;
}
