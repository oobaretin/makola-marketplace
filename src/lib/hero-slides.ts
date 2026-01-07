import fs from "node:fs";
import path from "node:path";

export type HomeHeroSlide = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
};

const BASE_SLIDES: HomeHeroSlide[] = [
  {
    src: "/DE6D2392-E0F3-4CF1-95E6-7224276EF45F.jpeg",
    alt: "Makola Marketplace store photo",
    label: "Makola Marketplace",
    description: "In-store essentials, pantry staples, and more.",
  },
  {
    src: "/AF9231CE-E67A-408D-BE83-0F6AAE4253EE_1_105_c.jpeg",
    alt: "Featured products at Makola Marketplace",
    label: "New arrivals",
    description: "Fresh picks for your next trip.",
  },
];

const SLIDE_COPY_CAPTIONS: Record<string, Pick<HomeHeroSlide, "label" | "description">> = {
  "/hero-slide-01.png": { label: "Inside Makola", description: "A quick look at the store experience." },
  "/hero-slide-02.png": { label: "More to explore", description: "Discover new favorites for your pantry." },
  "/hero-slide-03.png": { label: "Store moments", description: "Highlights from around the shop." },
  "/hero-slide-04.png": { label: "More aisles", description: "More items to discover on your next run." },
  "/hero-slide-05.png": { label: "Featured corner", description: "Quick picks and seasonal finds." },
  "/hero-slide-06.png": { label: "In-store favorites", description: "Snap your list, then shop in-store." },
};

export function getHomeHeroSlides(): HomeHeroSlide[] {
  const publicDir = path.join(process.cwd(), "public");
  const names = safeReadDir(publicDir);

  const numbered = names
    .map((name) => {
      const m = /^hero-slide-(\d{2})\.(png|jpe?g|webp)$/i.exec(name);
      if (!m) return null;
      return { name, n: Number(m[1]) };
    })
    .filter(Boolean) as Array<{ name: string; n: number }>;

  numbered.sort((a, b) => a.n - b.n);

  const extraSlides: HomeHeroSlide[] = numbered.map(({ name }) => {
    const src = `/${name}`;
    const caption = SLIDE_COPY_CAPTIONS[src];
    return {
      src,
      alt: "Makola Marketplace photo",
      ...(caption ?? {}),
    };
  });

  return [...BASE_SLIDES, ...extraSlides];
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}




