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
  },
  {
    src: "/AF9231CE-E67A-408D-BE83-0F6AAE4253EE_1_105_c.jpeg",
    alt: "Featured products at Makola Marketplace",
  },
];

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

  const extraSlides: HomeHeroSlide[] = numbered.map(({ name }) => ({
    src: `/${name}`,
    alt: "Makola Marketplace photo",
  }));

  return [...BASE_SLIDES, ...extraSlides];
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}




