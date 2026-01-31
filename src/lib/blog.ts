export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readTimeMinutes: number;
  coverImageSrc?: string; // public/ path, e.g. "/blog-cover.jpeg"
  coverImagePosition?: string; // CSS object-position, e.g. "50% 25%"
  coverHint?: string; // placeholder label until real images exist
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

/** Slug that shows the "Add all Jollof ingredients to my list" button. */
export const JOLLOF_LIST_POST_SLUG = "ultimate-jollof-rice-shopping-list";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "where-to-find-authentic-west-african-ingredients-houston",
    title: "Where to Find Authentic West African Ingredients in Houston",
    excerpt:
      "Just moved to Houston? Here’s where to get fresh Ugu, bitter leaf, Puna yam, and other West African staples—plus how to build your list before you go.",
    publishedAt: "2026-01-08",
    readTimeMinutes: 5,
    coverHint: "West African ingredients Houston",
    content: [
      {
        type: "p",
        text: "If you’ve just moved to Houston—or you’re tired of driving across town for one bag of gari—you’re not alone. Finding authentic West African ingredients can feel hit-or-miss unless you know where to look.",
      },
      {
        type: "p",
        text: "Makola Marketplace is on W. Bellfort Ave in Houston, and we stock the items that are hardest to find elsewhere: fresh Ugu, bitter leaf, Puna yam, Scotch bonnets, plantains (green and ripe), palm oil, and pantry staples like jasmine rice, brown beans, and egusi.",
      },
      { type: "h2", text: "What you can find at Makola (and why it matters)" },
      {
        type: "p",
        text: "We focus on Nigerian and Ghanaian groceries so you don’t have to guess which store has what. Think tubers and produce (yams, plantains, cassava, garden eggs), pantry and grains (gari, rice, beans, egusi, ogbono), oils and liquids (palm oil, vegetable oil, shito, malt drinks), and proteins (stockfish, smoked catfish, goat meat, oxtail, hen).",
      },
      { type: "h2", text: "Before you drive: build your list online" },
      {
        type: "p",
        text: "We’re in-store only—no delivery. So the best move is to build your shopping list on this site before you come. Add everything you need (produce, pantry, oils, meat), then shop in one trip. You’ll save time and avoid the “I forgot one thing” second drive.",
      },
      {
        type: "ul",
        items: [
          "Browse our produce department and add items to your list.",
          "Check pantry and grains for rice, beans, gari, and soup bases.",
          "Add oils and liquids, then proteins—so your list matches how the store is laid out.",
        ],
      },
      {
        type: "p",
        text: "We’re at 9051 W Bellfort Ave, Houston, TX 77031. Build your list, then visit us—we’re your Houston home for African flavors.",
      },
    ],
  },
  {
    slug: "ultimate-jollof-rice-shopping-list",
    title: "The Ultimate Jollof Rice Shopping List",
    excerpt:
      "Every ingredient you need for Jollof rice—Jasmine rice, tomato paste, Scotch bonnets, palm oil, and more. Add the full list to your Makola list in one tap.",
    publishedAt: "2026-01-08",
    readTimeMinutes: 4,
    coverHint: "Jollof rice shopping list",
    content: [
      {
        type: "p",
        text: "Whether you’re cooking for a party or just craving a proper Jollof, having the right ingredients in one place saves time and stress. Here’s the full list of what you need—and how to add it all to your Makola shopping list in one tap.",
      },
      { type: "h2", text: "Jollof rice ingredients (the full list)" },
      {
        type: "ul",
        items: [
          "Jasmine rice (or long-grain parboiled)",
          "Red palm oil",
          "Vegetable oil",
          "Tomato paste",
          "Fresh tomatoes",
          "Scotch bonnet peppers",
          "Onions",
          "Red bell pepper",
          "Curry powder",
          "Thyme",
          "Bay leaves",
          "Stock cubes",
          "Salt",
        ],
      },
      {
        type: "p",
        text: "We carry Jasmine rice, red palm oil, vegetable oil, Scotch bonnet peppers, and more at Makola. Use the button below to add all the Jollof staples we stock to your list—then shop in-store at 9051 W Bellfort Ave.",
      },
      { type: "h2", text: "Add all Jollof ingredients to your list" },
      {
        type: "p",
        text: "Tap the button below to add Jasmine rice, palm oil, vegetable oil, Scotch bonnets, and brown beans (optional side) to your Makola list. You can adjust quantities on your list before you shop.",
      },
    ],
  },
  {
    slug: "makola-kitchen-food-to-go",
    title: "Makola Kitchen (Food To Go): what to expect + how to shop around it",
    excerpt:
      "Inside Makola’s kitchen: what “food to go” means, how it’s prepared, and a simple way to build a grocery list that matches your meal plan.",
    publishedAt: "2026-01-06",
    readTimeMinutes: 7,
    coverImageSrc: "/blog-kitchen-food-to-go.jpeg",
    coverHint: "Food to go",
    content: [
      {
        type: "p",
        text: "If you’ve ever walked into Makola and caught that “something is cooking” smell, you already know the kitchen is part of the experience. The Food To Go area is a practical option for busy days: you can grab a ready meal, then finish your grocery run without making a second stop.",
      },
      {
        type: "p",
        text: "This guide breaks down what you’ll typically find, how to order efficiently, and how to pair a Food To Go meal with the right pantry items—so you get dinner today and a smarter plan for the rest of the week.",
      },
      { type: "h2", text: "What “Food To Go” means at Makola" },
      {
        type: "p",
        text: "Think of it as a short, focused menu of popular favorites prepared for quick pickup. Some items may be ready, while others are finished in small batches. The goal is speed and consistency: good food without waiting like a full sit-down restaurant.",
      },
      {
        type: "ul",
        items: [
          "Best for: lunch breaks, quick dinners, and “I don’t feel like cooking today” nights",
          "Great add-on: grab a meal, then shop ingredients for tomorrow",
          "Pro move: plan your grocery list around the proteins/sides you enjoy most",
        ],
      },
      { type: "h2", text: "How to order without slowing down your store run" },
      {
        type: "p",
        text: "The easiest way to keep your trip smooth is to treat Food To Go like the first checkpoint of your visit: decide quickly, place your order, then shop while it’s prepared (or pick up immediately if it’s ready).",
      },
      {
        type: "ul",
        items: [
          "Decide your “main” first (protein or centerpiece), then pick sides",
          "If you’re shopping for a family, order by portions, not by “one plate each”",
          "Ask what’s freshest or just came out—those are often the fastest pickups too",
          "Shop your list while you wait; avoid standing around and doing a second lap",
        ],
      },
      { type: "h2", text: "Build a grocery list that matches your Food To Go favorites" },
      {
        type: "p",
        text: "Here’s the simple framework: use today’s meal as a clue for what your kitchen will need later. If you loved the flavor, buy the pantry pieces that let you recreate it at home—without guessing in the spice aisle.",
      },
      {
        type: "ul",
        items: [
          "If you grab rice-based meals: add parboiled rice, tomato paste, onions, and seasoning cubes",
          "If you love grilled flavors: add suya spice, thyme, onions, and a quick marinade ingredient (oil + seasoning)",
          "If your plate comes with a sauce/stew: add palm oil or groundnut oil (depending on preference), crayfish, and dried pepper",
          "If you want easy “next-day” meals: add a pack of plantain, a bag of beans, and one vegetable you’ll actually cook",
        ],
      },
      { type: "h2", text: "A smart weekly rhythm: one Food To Go day + two home-cooked days" },
      {
        type: "p",
        text: "If you’re trying to save time without losing variety, try this: make Food To Go your mid-week reset. Then use the groceries you bought during that trip to cover two simple home meals. You’ll spend less mental energy planning—and still eat well.",
      },
      {
        type: "ul",
        items: [
          "Day 1: Food To Go + restock a few pantry basics",
          "Day 2: A simple rice/beans meal using what you bought",
          "Day 3: A quick stew/sauce meal (protein + sauce + a staple like rice, fufu, or swallow)",
        ],
      },
      { type: "h2", text: "Storage + reheating tips (keep it tasting fresh)" },
      {
        type: "p",
        text: "Food To Go is best the day you buy it, but it can still reheat well if you store it right. Cool it quickly, seal it, and reheat in a way that restores moisture instead of drying everything out.",
      },
      {
        type: "ul",
        items: [
          "Rice: reheat with a small splash of water; cover it so steam does the work",
          "Grilled items: reheat briefly; overcooking makes it tough—use medium heat and stop early",
          "Sauces/stews: reheat slowly; add a spoon of water if it thickens too much",
        ],
      },
      { type: "h2", text: "One last tip: shop the kitchen, then shop the aisles" },
      {
        type: "p",
        text: "The kitchen is a shortcut to decision-making. Once you’ve picked a meal, your grocery list becomes obvious: buy the staples and flavor builders that match what you just enjoyed. That’s how you leave Makola with dinner handled and a better plan for the week.",
      },
    ],
  },
  {
    slug: "makola-in-store-shopping-experience",
    title: "A first-timer’s guide to shopping inside Makola (what it feels like + how to do it smoothly)",
    excerpt:
      "A real, walk-through style guide: what you’ll see when you enter, how to navigate aisles, how to keep your list tight, and how to leave with everything—without stress.",
    publishedAt: "2026-01-06",
    readTimeMinutes: 8,
    coverImageSrc: "/blog-in-store-shopping-experience.jpeg",
    coverImagePosition: "50% 25%",
    coverHint: "In-store shopping",
    content: [
      {
        type: "p",
        text: "Shopping at Makola isn’t just “grab a few things and go.” It’s the kind of store where the selection can pull you in—new snacks, pantry staples you haven’t tried yet, and familiar brands that feel like home. That’s the magic, but it can also make your trip longer than you planned.",
      },
      {
        type: "p",
        text: "This post is an easy-to-follow walkthrough of the in-store experience: how to enter with a plan, how to move through the aisles efficiently, and how to leave with the right mix of today’s needs and next week’s staples.",
      },
      { type: "h2", text: "Before you go: the 2-minute plan that saves you 20 minutes" },
      {
        type: "p",
        text: "The difference between a smooth Makola run and an unplanned “wander and wonder” run is a short list with structure. Don’t start with “aisles.” Start with meals and essentials.",
      },
      {
        type: "ul",
        items: [
          "Pick 2 meals you want this week (and 1 quick fallback meal)",
          "Write the “must-haves” (rice, oil, seasoning, onions, etc.) before anything else",
          "Set a budget for “fun finds” so you can explore without regret",
          "If you’re buying for a family: decide quantities up front (rice size, meat portions, etc.)",
        ],
      },
      { type: "h2", text: "What it feels like when you walk in" },
      {
        type: "p",
        text: "You’ll notice a mix of familiar staples and specialty items—often with strong scents from spices and prepared foods. It’s normal to feel like you want to slow down and browse. That’s fine, but choose your moment: browse after you’ve secured your essentials.",
      },
      { type: "h2", text: "The best way to shop the store: essentials first, exploration second" },
      {
        type: "p",
        text: "Here’s the simple rule: lock in the items that your meals depend on, then browse for extras. That keeps you from getting to checkout and realizing you forgot the basics.",
      },
      {
        type: "ul",
        items: [
          "Staples: rice, beans, flour/swallow items, oils",
          "Flavor builders: seasoning cubes, dried pepper, crayfish, suya spice, thyme/curry",
          "Proteins: fresh/frozen options, plus one backup protein for the week",
          "Produce + aromatics: onions, tomatoes/peppers, greens (what you’ll actually use)",
          "Snacks + drinks: last—this is where you can overspend fast",
        ],
      },
      { type: "h2", text: "How to avoid duplicates (and why it’s so common here)" },
      {
        type: "p",
        text: "Makola has variations of the same category—different brands, sizes, and “best for” use cases. Duplicates happen when you’re shopping by vibe instead of by purpose.",
      },
      {
        type: "ul",
        items: [
          "Write the exact item name (e.g., “palm oil” instead of “oil”)",
          "Add quantities in parentheses (e.g., “mackerel (2)”)",
          "If you’re unsure between two brands, pick one today and note the other for next time",
          "Do a 30-second scan before checkout: what did you buy twice by accident?",
        ],
      },
      { type: "h2", text: "A realistic “new shopper” basket (so you don’t overdo it)" },
      {
        type: "p",
        text: "If you’re building your pantry from scratch, it’s tempting to buy everything. Instead, start with a baseline you can actually cook with this week.",
      },
      {
        type: "ul",
        items: [
          "Rice + beans",
          "Tomato paste + onions",
          "Palm oil or groundnut oil (choose one to start)",
          "Seasoning cubes + one signature spice blend (suya or curry/thyme combo)",
          "One protein you love (plus a backup like frozen fish or chicken)",
        ],
      },
      { type: "h2", text: "Checkout: the last-minute routine that prevents a second trip" },
      {
        type: "p",
        text: "Before you pay, pause for a quick final check. This is where you catch the missing “small but critical” items that ruin a meal plan.",
      },
      {
        type: "ul",
        items: [
          "Did I get the staple? (rice/flour/swallow item)",
          "Did I get a flavor base? (oil + seasoning + pepper)",
          "Do I have at least one protein for two meals?",
          "Did I buy duplicates that I don’t need?",
        ],
      },
      { type: "h2", text: "The best part: you’ll shop faster every time" },
      {
        type: "p",
        text: "Makola gets easier the more you shop with a system. After 2–3 visits, you’ll know your go-to aisles, your preferred brands, and your pantry baseline. Your trips become faster—and your meals get better because you’re buying with intention, not panic.",
      },
    ],
  },
  {
    slug: "shopping-list-on-the-website",
    title: "The shopping list on this website: how it helps you shop faster (and waste less)",
    excerpt:
      "Why the Makola shopping list feature matters, how to use it before and during your trip, and a simple workflow that keeps your pantry stocked without duplicate buys.",
    publishedAt: "2026-01-06",
    readTimeMinutes: 6,
    coverImageSrc: "/blog-shopping-list-cover.svg",
    coverHint: "Shopping list",
    content: [
      {
        type: "p",
        text: "Makola Marketplace is in-store only—so your shopping list is your secret weapon. The shopping list on this website is designed to do one thing: help you walk into the store with a plan and walk out with everything you actually need (without buying duplicates).",
      },
      {
        type: "p",
        text: "If you’ve ever done the “two laps” problem—first lap for browsing, second lap because you forgot the basics—this is for you. Below is a simple, repeatable way to use the list so your trips feel smoother, faster, and cheaper over time.",
      },
      { type: "h2", text: "What the website shopping list is (and what it’s not)" },
      {
        type: "p",
        text: "It’s not a delivery cart, and it’s not a complicated meal planner. It’s a lightweight checklist you control—made for real shopping: quick adds, quantities, and a clear view of what’s left.",
      },
      {
        type: "ul",
        items: [
          "Built for in-store shopping (not shipping)",
          "Designed to reduce duplicates and forgotten essentials",
          "Simple enough to use on your phone while you shop",
        ],
      },
      { type: "h2", text: "Why it’s useful: 4 problems it solves" },
      {
        type: "p",
        text: "Most shopping stress comes from a few predictable issues. The list helps by making those issues visible before you’re standing in an aisle.",
      },
      {
        type: "ul",
        items: [
          "Forgetting basics (oil, rice, seasoning, onions) because you got distracted by new items",
          "Buying duplicates because you can’t remember what’s already at home",
          "Over-shopping snacks/drinks because you didn’t set a boundary for “extras”",
          "Slow trips because your list isn’t structured and you bounce between aisles",
        ],
      },
      { type: "h2", text: "The simple workflow: before the trip, during the trip, after the trip" },
      {
        type: "p",
        text: "If you only remember one thing, remember this: the list works best when it’s updated in three small moments—before, during, and after shopping.",
      },
      { type: "h2", text: "1) Before the trip (3–5 minutes)" },
      {
        type: "ul",
        items: [
          "Pick 2 meals you want this week (and one fallback meal)",
          "Add the ingredients you’re missing (don’t guess—check your pantry quickly)",
          "Add your baseline staples if they’re low (seasoning cubes, rice, oil, crayfish, tomato paste)",
          "Set a “fun finds” limit: 1–3 items max so you can browse without derailing the budget",
        ],
      },
      { type: "h2", text: "2) During the trip (shop like a one-pass route)" },
      {
        type: "p",
        text: "Use your list like a route. Don’t chase individual items randomly—group them mentally, then shop each group in one pass.",
      },
      {
        type: "ul",
        items: [
          "Staples first (rice, oils, flour/swallow items)",
          "Flavor builders next (seasoning, pepper, crayfish, spices)",
          "Proteins next (fresh/frozen, plus one backup protein)",
          "Produce last (what you’ll actually cook this week)",
          "Snacks and drinks last (this is where the list protects your budget)",
        ],
      },
      { type: "h2", text: "3) After the trip (30 seconds)" },
      {
        type: "p",
        text: "This is the step most people skip—and it’s the reason duplicates happen next time. Right after you unload groceries, do a quick update so the list stays truthful.",
      },
      {
        type: "ul",
        items: [
          "Remove what you bought",
          "Add one note for next time (e.g., “buy bigger rice bag” or “try different brand”)",
          "If something is now low, add it immediately so your next trip is easy",
        ],
      },
      { type: "h2", text: "Naming + quantities: the small tweak that makes the list feel “smart”" },
      {
        type: "p",
        text: "The list is only as useful as the words on it. Write items the way you’d want to see them when you’re tired, busy, and standing in a crowded aisle.",
      },
      {
        type: "ul",
        items: [
          "Be specific: “palm oil” vs “oil”",
          "Add quantities: “mackerel (2)” or “rice (10lb)”",
          "Add a quick note when needed: “thyme (powder)” or “pepper (dried)”",
        ],
      },
      { type: "h2", text: "The payoff: faster trips and fewer regrets" },
      {
        type: "p",
        text: "A good list isn’t about being strict—it’s about being free. When you know you already have your essentials covered, you can enjoy browsing without forgetting what matters. That’s how your Makola run becomes a routine instead of a project.",
      },
    ],
  },
  {
    slug: "african-pantry-starters",
    title: "African pantry starters (beginner-friendly checklist)",
    excerpt:
      "New to cooking African food at home? Start with a small, flexible pantry you can actually use—then build it up based on the meals you love.",
    publishedAt: "2026-01-04",
    readTimeMinutes: 8,
    coverImageSrc: "/blog-pantry-starters-cover.png",
    coverHint: "Pantry starters",
    content: [
      {
        type: "p",
        text: "Every home pantry is different, but a few staples show up again and again across many West African kitchens. The goal isn’t to buy “everything African” in one trip—it’s to build a small base that lets you cook 5–8 meals without feeling stuck.",
      },
      {
        type: "p",
        text: "This guide is beginner-friendly and practical: what to buy first, what each item is used for, smart quantities, and an easy upgrade path so you don’t overspend.",
      },
      { type: "h2", text: "Start with your 3 anchors (so you don’t feel overwhelmed)" },
      {
        type: "p",
        text: "Most meals come together with three anchor categories: a staple (what fills you up), a flavor base (what makes it taste like home), and a protein (what makes it satisfying). If you cover these, the rest is optional.",
      },
      {
        type: "ul",
        items: [
          "Staples: rice, beans, gari/semolina/flour (choose one to start)",
          "Flavor base: oil + tomato paste + seasoning",
          "Protein: fish, chicken, beef, or beans (pick the one you’ll actually cook)",
        ],
      },
      { type: "h2", text: "Core staples (buy these first)" },
      {
        type: "ul",
        items: [
          "Rice (parboiled is a great all-rounder; jasmine is a fast-cooking option)",
          "Beans (black‑eyed peas or brown beans — great for stews and sides)",
          "Tomato paste (the base for many stews and rice dishes)",
          "Seasoning cubes (for quick depth; use with moderation)",
        ],
      },
      { type: "h2", text: "Oils: pick one to start (then add the other later)" },
      {
        type: "p",
        text: "Don’t feel like you need every oil on day one. Start with one oil you’ll use weekly, then add the second once you know your cooking style.",
      },
      {
        type: "ul",
        items: [
          "Palm oil: bold flavor and color; common in many soups and stews",
          "Groundnut (peanut) oil: neutral and versatile; great for frying and everyday cooking",
        ],
      },
      { type: "h2", text: "Flavor builders (the small items that do the heavy lifting)" },
      {
        type: "p",
        text: "These are the “make it taste right” ingredients. Start with a small set, then expand based on the dishes you repeat most.",
      },
      {
        type: "ul",
        items: [
          "Curry powder + thyme (easy starter combo for stews and rice)",
          "Dried pepper (for heat and aroma; start small and adjust)",
          "Crayfish (adds savory depth to soups/stews; a little goes far)",
          "Suya spice (optional but great for quick grilled flavor at home)",
        ],
      },
      { type: "h2", text: "Beginner quantities (so you don’t overspend)" },
      {
        type: "p",
        text: "If you’re just starting, buy smaller sizes first. Once you know what you actually use, upgrade to bigger bags and tubs.",
      },
      {
        type: "ul",
        items: [
          "Rice: start with 5–10 lb (or one bag you can finish in 2–4 weeks)",
          "Beans: 2–4 lb",
          "Tomato paste: 2–4 cans/tins",
          "Oil: one medium bottle to start",
          "Seasoning + spices: small packs/jars first (then bulk later)",
        ],
      },
      { type: "h2", text: "A starter pantry in 3 trips (easy upgrade path)" },
      {
        type: "p",
        text: "If you don’t want to do one big haul, this is the simplest way to build a pantry that keeps working.",
      },
      {
        type: "ul",
        items: [
          "Trip 1 (baseline): rice + oil + tomato paste + seasoning + onions",
          "Trip 2 (depth): beans + dried pepper + crayfish + one spice blend",
          "Trip 3 (variety): one new staple (gari/semolina/flour) + one “treat” item (snack/drink) + backup protein",
        ],
      },
      { type: "h2", text: "Substitutions (when you can’t find the exact thing)" },
      {
        type: "p",
        text: "You can still cook well even if you’re missing one item. Here are safe swaps that won’t ruin a dish.",
      },
      {
        type: "ul",
        items: [
          "Groundnut oil ↔ neutral vegetable oil (for frying and everyday cooking)",
          "Fresh pepper blend ↔ dried pepper + a little water (start mild)",
          "Crayfish ↔ a small amount of fish seasoning (different flavor, still adds depth)",
          "Tomato paste shortage ↔ use a smaller amount plus blended tomatoes (cook longer to reduce)",
        ],
      },
      { type: "h2", text: "Storage tips (keep flavors fresh)" },
      {
        type: "ul",
        items: [
          "Keep rice/beans in airtight containers to prevent pantry pests",
          "Store spices in a cool, dry place (heat + light kills aroma)",
          "Seal crayfish and dried pepper well (they’re aromatic and can scent everything)",
        ],
      },
      {
        type: "p",
        text: "Once you have the basics, you can specialize for soups, stews, grills, or snacks based on what you actually cook. Start small, repeat meals you love, then expand—your pantry will build itself naturally.",
      },
    ],
  },
];

export function getBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}



