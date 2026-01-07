import Link from "next/link";
import Image from "next/image";
import { STORE_INFO } from "@/lib/store-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center">
              <Image
                src="/Bold.png"
                alt="Makola Marketplace"
                width={140}
                height={140}
                className="h-20 w-auto"
              />
              <span className="sr-only">{STORE_INFO.name}</span>
            </div>
            <div className="text-sm text-zinc-600">
              African groceries for Houston. Build a list, then shop in-store.
            </div>
            <div className="text-sm text-zinc-600">
              <span className="font-medium text-zinc-900">No delivery</span> — in-store only.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950">Visit</div>
            <div className="text-sm text-zinc-600">
              {STORE_INFO.addressLine1}
              <br />
              {STORE_INFO.addressLine2}
            </div>
            <a
              className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              href={STORE_INFO.phoneHref}
            >
              {STORE_INFO.phoneDisplay}
            </a>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-sm font-medium text-amber-700 hover:text-amber-800"
              >
                View hours →
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-zinc-950">Quick links</div>
            <div className="grid gap-2 text-sm">
              <Link className="text-zinc-700 hover:text-zinc-950" href="/">
                Home
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-950" href="/departments">
                Departments
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-950" href="/blog">
                Blog
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-950" href="/shopping-list">
                Shopping List
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-950" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500">
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
  );
}


