import Link from "next/link";
import { ArrivedTodayBanner } from "@/components/ArrivedTodayBanner";
import { Button } from "@/components/Button";
import { BlogCard } from "@/components/BlogCard";
import DailySpecial from "@/components/DailySpecial";
import HowItWorks from "@/components/HowItWorks";
import { getBlogPosts } from "@/lib/blog";
import { categories } from "@/lib/data/products";
import { STORE_INFO } from "@/lib/store-info";

const ESSENTIALS_GRID = [
  { label: "Produce", href: "/departments?c=produce", chip: "produce" },
  { label: "Pantry", href: "/departments?c=pantry", chip: "pantry" },
  { label: "Protein & Fish", href: "/departments?c=meat", chip: "meat" },
  { label: "Flours & Swallows", href: "/departments?c=flour", chip: "flour" },
  { label: "Drinks", href: "/departments?c=drinks", chip: "drinks" },
  { label: "Snacks", href: "/departments?c=snacks", chip: "snacks" },
] as const;

export default function HomePage() {
  const featuredPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-10 -z-10 h-64 bg-gradient-to-b from-[var(--forest)]/10 via-[var(--terracotta)]/5 to-transparent blur-2xl" />

      <ArrivedTodayBanner />

      {/* Hero */}
      <section className="pt-2 pb-10 text-center sm:pt-6 sm:pb-14">
        <h1 className="text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
          Your Houston Home for African Flavors.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
          Plan your trip, save your time. Build your list, then shop in-store.
        </p>
        <p className="mx-auto mt-2 text-sm font-medium text-stone-500">
          In-store only — no delivery. No checkout on this site.
        </p>

        {/* Action Hub */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/departments" variant="primary" size="md" className="min-w-[200px]">
            Browse Departments
          </Button>
          <Button href="/shopping-list" variant="secondary" size="md" className="min-w-[200px]">
            View My List
          </Button>
        </div>
      </section>

      {/* How it Works — no-delivery model */}
      <HowItWorks />

      {/* Hungry Shopper – Kitchen callout */}
      <div className="my-6 border-l-4 border-red-600 bg-red-50 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-red-900">Hungry while you shop?</h3>
            <p className="text-sm text-red-700">
              Our kitchen is serving fresh Jollof, Suya, and Soup today.
            </p>
          </div>
          <Link
            href="/blog/makola-kitchen-food-to-go"
            className="shrink-0 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Today's rotating kitchen special */}
      <DailySpecial />

      {/* The Essentials – 6-item grid */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-stone-950 sm:text-2xl">
          The Essentials
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          Jump to a category and add items to your list.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {ESSENTIALS_GRID.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white py-8 shadow-sm transition hover:border-[var(--forest)]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2"
            >
              <span className="text-base font-semibold text-stone-950">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recipe-to-list (optional – keep if desired) */}
      <section className="py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
              Cook a dish — add the whole list
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              One tap adds all ingredients. Bigger basket, less forgetting.
            </p>
          </div>
          <Button href="/departments" variant="ghost" size="sm">
            Browse all
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.slice(0, 4).map((c) => (
            <Link
              key={c.id}
              href={`/departments?c=${c.id}`}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
              From the blog
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Shopping tips, pantry basics, and in-store strategies.
            </p>
          </div>
          <Button href="/blog" variant="ghost">
            View all posts
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* Location / Hours – persistent at bottom */}
      <section className="border-t border-stone-200 bg-white/80 py-10">
        <h2 className="text-lg font-semibold text-stone-950">Location & Hours</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-stone-700">
              {STORE_INFO.addressLine1}, {STORE_INFO.addressLine2}
            </p>
            <p className="mt-2 text-sm text-stone-600">
              <a className="link font-medium text-stone-900" href={STORE_INFO.phoneHref}>
                {STORE_INFO.phoneDisplay}
              </a>
            </p>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-[var(--forest)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <div>
            <ul className="space-y-1 text-sm text-stone-700">
              {STORE_INFO.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500">{STORE_INFO.notes.delivery}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
