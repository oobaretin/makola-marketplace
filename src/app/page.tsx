import Link from "next/link";
import { Button } from "@/components/Button";
import { BlogCard } from "@/components/BlogCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { QuickAddForm } from "@/components/QuickAddForm";
import { getBlogPosts } from "@/lib/blog";
import { DEPARTMENTS } from "@/lib/departments";
import { getHomeHeroSlides } from "@/lib/hero-slides";
import { STORE_INFO } from "@/lib/store-info";

export default function Home() {
  const featuredPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-10 -z-10 h-80 bg-gradient-to-b from-amber-200/60 via-emerald-100/30 to-transparent blur-2xl" />
      <div className="absolute inset-x-0 -top-16 -z-10 h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.30),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.26),transparent_50%)]" />

      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-7 pt-2">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Plan your next Makola run.
          </h1>

          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Build a shopping list in seconds — add anything you want, then shop in-store.
            (No delivery.)
          </p>

          <QuickAddForm />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/departments" variant="primary">
              Browse departments
            </Button>
            <Button href="/shopping-list" variant="ghost">
              View my list
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-zinc-950">Visit us</div>
                <div className="text-sm text-zinc-700">
                  {STORE_INFO.addressLine1}, {STORE_INFO.addressLine2}
                </div>
                <div className="text-sm">
                  <a className="link font-medium text-zinc-900" href={STORE_INFO.phoneHref}>
                    {STORE_INFO.phoneDisplay}
                  </a>
                  <span className="mx-2 text-zinc-300">•</span>
                  <Link className="link font-medium text-zinc-900" href="/contact">
                    Hours & directions
                  </Link>
                </div>
              </div>

              <div className="space-y-2 sm:border-l sm:border-zinc-200 sm:pl-6">
                <div className="text-sm font-semibold text-zinc-950">In-store only</div>
                <div className="text-sm leading-7 text-zinc-600">
                  No delivery. Build your list here, then shop in-store faster.
                </div>
                <div>
                  <Link className="text-sm font-medium text-emerald-700 hover:text-emerald-800" href="/shopping-list">
                    Open my list →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <HeroCarousel
            slides={getHomeHeroSlides()}
          />

          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-700">
            {[
              "Fast list",
              "Fewer duplicates",
              "Shop faster",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950">Starter list ideas</div>
            <div className="mt-1 text-sm text-zinc-600">
              No products yet — use these to kickstart your shopping list.
            </div>
          </div>
          <Button href="/departments" variant="secondary" size="sm">
            Browse all departments
          </Button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <ul className="divide-y divide-zinc-200/80">
            {DEPARTMENTS.slice(0, 4).map((d) => (
              <li key={d.slug} className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-zinc-950">{d.name}</div>
                    <div className="mt-1 text-sm text-zinc-600">{d.description}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {d.starterItems.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-zinc-900/5 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              From the blog
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Shopping list tips, pantry basics, and in-store strategies.
            </p>
          </div>
          <Button href="/blog" variant="ghost">
            View all posts
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
