import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Makola Marketplace – From West Africa to West Bellfort",
  description:
    "At Makola Marketplace we believe food connects us to our roots. Quality you can trust, our in-house kitchen, and a Houston community hub in Brays Oaks.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-10 text-4xl font-black tracking-tight text-stone-950">
        From West Africa to West Bellfort: Our Story
      </h1>

      {/* Mission */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-stone-700">
          At Makola Marketplace, we believe that food is more than just
          sustenance—it&apos;s a connection to our roots, our families, and our
          culture. Since opening our doors in Houston, we&apos;ve committed
          ourselves to being the bridge between the vibrant markets of West
          Africa and your kitchen table.
        </p>
      </section>

      {/* Hero: image + story */}
      <section className="overflow-hidden py-12">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="aspect-square overflow-hidden rounded-3xl bg-stone-100 shadow-2xl md:rotate-3">
              <Image
                src="/AF9231CE-E67A-408D-BE83-0F6AAE4253EE_1_105_c.jpeg"
                alt="Makola Marketplace Houston – African Foods storefront"
                width={600}
                height={600}
                className="h-full w-full object-cover md:-rotate-3 md:transition-transform md:duration-500 md:hover:rotate-0"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-[var(--terracotta)] p-6 text-white shadow-xl md:block">
              <p className="text-center text-2xl font-black leading-none">
                100%
                <br />
                <span className="text-sm font-normal uppercase tracking-widest">
                  Authentic
                </span>
              </p>
            </div>
          </div>

          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-3xl font-black leading-tight text-stone-900 md:text-4xl">
              Bringing the Flavors of{" "}
              <span className="text-[var(--forest)]">West Africa</span> to
              Houston.
            </h2>
            <p className="leading-relaxed text-stone-600">
              Founded on the values of community and freshness, Makola
              Marketplace is more than a grocery store. We are a family-owned
              destination for those who seek the true taste of home.
            </p>
            <p className="leading-relaxed font-medium text-stone-600">
              &quot;We built this market for the grandmother looking for the
              perfect garden egg, the student missing their mom&apos;s jollof
              rice, and the Houstonian eager to explore new flavors.&quot;
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-bold text-stone-700">
                📍 Houston, TX
              </span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-bold text-stone-700">
                🍲 Hot Kitchen
              </span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-bold text-stone-700">
                📦 Wholesale Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="border-t border-stone-200 pt-12">
        <h2 className="mb-8 text-2xl font-black text-stone-900">
          Why Shop With Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-bold text-stone-800">
              Quality You Can Trust
            </h3>
            <p className="text-stone-600">
              We hand-select our tubers, grains, and proteins to ensure you only
              take home the best. From the perfect Puna Yam to the smokiest
              Catfish, quality is our baseline.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-stone-800">
              The Makola Kitchen
            </h3>
            <p className="text-stone-600">
              We don&apos;t just sell ingredients; we know how to use them. Our
              in-house kitchen serves hot, authentic meals daily, prepared with
              the same spices and love you&apos;d find in a home-cooked meal.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-stone-800">
              A Houston Community Hub
            </h3>
            <p className="text-stone-600">
              We are proud to serve the Brays Oaks district and the wider
              Houston community. Whether you are a first-time visitor curious
              about African flavors or a regular shopper looking for a taste of
              home, our doors are open.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Staff – placeholder for client to add team photo/quote */}
      <section className="mt-16 rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 px-6 py-10 text-center">
        <p className="text-sm font-medium text-stone-500">
          Meet the team — add a photo and a &quot;Welcome to the family!&quot;
          quote here to add warmth and trust.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-bold text-[var(--forest)] hover:underline"
        >
          Visit us →
        </Link>
      </section>
    </div>
  );
}
