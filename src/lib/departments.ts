export type Department = {
  slug: string;
  name: string;
  description: string;
  starterItems: string[];
};

// No products yet — these are starter ideas so users can build a list fast.
export const DEPARTMENTS: Department[] = [
  {
    slug: "wazobia-deals",
    name: "Makola Deals",
    description: "Weekly ideas to kickstart your list (no online checkout).",
    starterItems: ["Jasmine rice", "Palm oil", "Crayfish", "Plantain chips"],
  },
  {
    slug: "produce",
    name: "Produce",
    description: "Fresh staples and cooking essentials.",
    starterItems: ["Plantain", "Onions", "Tomatoes", "Scotch bonnet pepper"],
  },
  {
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    description: "Fresh, frozen, and pantry-friendly options.",
    starterItems: ["Spinach", "Okra", "Mixed vegetables", "Mango"],
  },
  {
    slug: "frozen-fruits-vegetables",
    name: "Frozen Fruits & Vegetables",
    description: "Stock up for smoothies, soups, and stews.",
    starterItems: ["Frozen spinach", "Frozen okra", "Frozen mixed vegetables", "Frozen berries"],
  },
  {
    slug: "dry-fruits-vegetables",
    name: "Dry Fruits & Vegetables",
    description: "Dry pantry items for soups and traditional dishes.",
    starterItems: ["Dried okra", "Dried bitterleaf", "Dried ugu", "Dried peppers"],
  },
  {
    slug: "grains",
    name: "Grains",
    description: "Rice, beans, and pantry staples for everyday meals.",
    starterItems: ["Parboiled rice", "Jasmine rice", "Brown beans", "Black-eyed peas"],
  },
  {
    slug: "rice",
    name: "Rice",
    description: "Long grain, parboiled, basmati, and more.",
    starterItems: ["Parboiled rice", "Basmati rice", "Jollof rice seasoning", "Rice flour"],
  },
  {
    slug: "beans",
    name: "Beans",
    description: "Dried beans and legumes for stews and sides.",
    starterItems: ["Black-eyed peas", "Brown beans", "Pigeon peas", "Lentils"],
  },
  {
    slug: "fufu-flour",
    name: "Fufu & Flour",
    description: "Swallow staples and cooking flours.",
    starterItems: ["Pounded yam flour", "Semolina", "Cassava flour", "Plantain flour"],
  },
  {
    slug: "frozen-fufu-flour",
    name: "Frozen Fufu & Flour",
    description: "Quick prep staples for busy days.",
    starterItems: ["Frozen fufu", "Frozen pounded yam", "Frozen amala", "Frozen eba"],
  },
  {
    slug: "garri",
    name: "Garri",
    description: "Classic garri options for soaking or eba.",
    starterItems: ["White garri", "Yellow garri", "Groundnut (peanuts)", "Sugar"],
  },
  {
    slug: "noodles-pasta",
    name: "Noodles & Pasta",
    description: "Comfort staples for quick meals.",
    starterItems: ["Instant noodles", "Spaghetti", "Macaroni", "Tomato sauce"],
  },
  {
    slug: "oil",
    name: "Oil",
    description: "Cooking oils for frying, stews, and sauces.",
    starterItems: ["Palm oil", "Groundnut oil", "Vegetable oil", "Coconut oil"],
  },
  {
    slug: "condiment",
    name: "Condiment",
    description: "Sauces, spreads, and pantry boosters.",
    starterItems: ["Tomato paste", "Pepper sauce", "Mayonnaise", "Ketchup"],
  },
  {
    slug: "seeds-spices",
    name: "Seeds & Spices",
    description: "Flavor makers: spice blends, aromatics, and seeds.",
    starterItems: ["Suya spice", "Curry powder", "Thyme", "Uziza seeds"],
  },
  {
    slug: "canned-fruits-vegetables",
    name: "Canned Fruits & Vegetables",
    description: "Shelf-stable pantry staples.",
    starterItems: ["Canned tomato", "Canned corn", "Canned peas", "Fruit cocktail"],
  },
  {
    slug: "canned-seafood",
    name: "Canned Seafood",
    description: "Easy protein for quick meals.",
    starterItems: ["Canned sardines", "Canned mackerel", "Canned tuna", "Canned salmon"],
  },
  {
    slug: "seafood",
    name: "Seafood",
    description: "Seafood essentials for soups and stews.",
    starterItems: ["Fresh fish", "Shrimp", "Crab", "Periwinkle"],
  },
  {
    slug: "frozen-seafood",
    name: "Frozen Seafood",
    description: "Stock the freezer for weeknight cooking.",
    starterItems: ["Frozen shrimp", "Frozen tilapia", "Frozen mackerel", "Frozen calamari"],
  },
  {
    slug: "dry-seafood",
    name: "Dry Seafood",
    description: "Stockfish, crayfish, and dried seafood staples.",
    starterItems: ["Stockfish", "Smoked fish", "Crayfish", "Dried shrimp"],
  },
  {
    slug: "meats",
    name: "Meats",
    description: "Proteins for soups, stews, and grills.",
    starterItems: ["Goat meat", "Beef", "Chicken", "Turkey"],
  },
  {
    slug: "snacks",
    name: "Snacks",
    description: "Treats and quick bites.",
    starterItems: ["Plantain chips", "Chin chin", "Biscuits", "Peanuts"],
  },
  {
    slug: "drinks",
    name: "Drinks",
    description: "Beverages for every taste.",
    starterItems: ["Malt drink", "Ginger drink", "Zobo (hibiscus)", "Palm wine (if available)"],
  },
  {
    slug: "beverages",
    name: "Beverages",
    description: "Tea, coffee, and drink mixers.",
    starterItems: ["Tea", "Coffee", "Evaporated milk", "Sugar"],
  },
  {
    slug: "dairy",
    name: "Dairy",
    description: "Milk, yogurt, and more.",
    starterItems: ["Evaporated milk", "Powdered milk", "Butter", "Yogurt"],
  },
  {
    slug: "bakery",
    name: "Bakery",
    description: "Breads and baked treats.",
    starterItems: ["Bread", "Buns", "Meat pie", "Chin chin"],
  },
  {
    slug: "cereal-pudding",
    name: "Cereal & Pudding",
    description: "Breakfast and dessert staples.",
    starterItems: ["Custard powder", "Cornflakes", "Oats", "Pap mix"],
  },
  {
    slug: "herbal-teas-medicine",
    name: "Herbal Teas, Drinks & Medicine",
    description: "Traditional teas and wellness essentials.",
    starterItems: ["Ginger tea", "Moringa tea", "Hibiscus tea", "Bitter kola"],
  },
  {
    slug: "utensils",
    name: "Utensils",
    description: "Kitchen tools for everyday cooking.",
    starterItems: ["Wooden spoon", "Mortar & pestle", "Sieve", "Cooking pot"],
  },
  {
    slug: "books-games",
    name: "Books & Games",
    description: "Fun extras for the family.",
    starterItems: ["Cookbook", "Playing cards", "Board game", "Story book"],
  },
];


