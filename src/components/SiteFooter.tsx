import Link from "next/link";
import Image from "next/image";
import { STORE_INFO } from "@/lib/store-info";

export function SiteFooter() {
  return (
    <>
      {/* In-store conversion: "Live" feel — offline notice + WhatsApp + Maps */}
      <div className="border-t border-stone-200/80 bg-stone-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-4">
          <p className="mb-4 text-center text-sm font-medium text-stone-700">
            No delivery. We are a traditional market—build your list and visit us today!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={STORE_INFO.whatsappCheckStockHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20BD5A]"
            >
              WhatsApp — ask if in stock
            </a>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm transition hover:bg-stone-50"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-stone-200/80 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center">
                <Image
                  src="/Bold.png"
                  alt="Makola Marketplace"
                  width={140}
                  height={140}
                  className="h-16 w-auto sm:h-16"
                />
                <span className="sr-only">{STORE_INFO.name}</span>
              </div>
              <div className="text-sm text-stone-600">
                Your Houston home for African flavors. In-store only.
              </div>
              <div className="text-sm text-stone-600">
                <span className="font-medium text-stone-900">No delivery</span> — plan your list, shop in-store.
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-stone-950">Visit</div>
              <div className="text-sm text-stone-600">
                {STORE_INFO.addressLine1}
                <br />
                {STORE_INFO.addressLine2}
              </div>
              <a
                className="text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900"
                href={STORE_INFO.phoneHref}
              >
                {STORE_INFO.phoneDisplay}
              </a>
              <a
                className="block text-sm font-medium text-[var(--forest)] hover:underline"
                href={STORE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp — check stock
              </a>
              <div className="pt-1 flex flex-wrap gap-x-2 gap-y-1">
                <a
                  className="text-sm font-medium text-[var(--terracotta)] hover:underline"
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
                <span className="text-stone-300">•</span>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[var(--terracotta)] hover:underline"
                >
                  Hours
                </Link>
              </div>
            </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-stone-950">Quick links</div>
            <div className="grid gap-2 text-sm">
              <Link className="text-stone-700 hover:text-stone-950" href="/">
                Home
              </Link>
              <Link className="text-stone-700 hover:text-stone-950" href="/departments">
                Departments
              </Link>
              <Link className="text-stone-700 hover:text-stone-950" href="/blog">
                Blog
              </Link>
              <Link className="text-stone-700 hover:text-stone-950" href="/shopping-list">
                Shopping List
              </Link>
              <Link className="text-stone-700 hover:text-stone-950" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-200/80 pt-6 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </div>
          <div>
            This site includes a shopping-list tool only. It does not process online
            orders or delivery.
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}


