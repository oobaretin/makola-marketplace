import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ShoppingListProvider } from "@/lib/shopping-list";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://makola-marketplace.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Makola Marketplace | African Grocery Store Houston, TX",
    template: "%s | Makola Marketplace",
  },
  description:
    "Find fresh Yams, Plantains, Palm Oil, and authentic West African staples in Houston. Build your shopping list online and shop in-store at 9051 W Bellfort Ave.",
  keywords: [
    "African grocery Houston",
    "Nigerian food Houston",
    "Ghanaian market Houston",
    "fufu",
    "palm oil",
    "plantains",
    "Makola Houston",
    "West African ingredients Houston",
  ],
  applicationName: "Makola Marketplace",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Makola Marketplace - Your Digital Shopping List",
    description:
      "Build your list, then shop for authentic African flavors in Houston.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <Script
          id="strip-cursor-ref-attrs"
          strategy="beforeInteractive"
        >{`(() => {
  try {
    const ATTR = "data-cursor-ref";
    const strip = (root) => {
      if (!root) return;
      if (root.nodeType === 1 && root.hasAttribute?.(ATTR)) root.removeAttribute(ATTR);
      root.querySelectorAll?.("[" + ATTR + "]")?.forEach((el) => el.removeAttribute(ATTR));
    };

    // Strip immediately…
    strip(document);

    // …and keep stripping during hydration since Cursor can re-add attrs.
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === ATTR) {
          m.target?.removeAttribute?.(ATTR);
        } else if (m.type === "childList") {
          m.addedNodes?.forEach((n) => strip(n));
        }
      }
    });
    obs.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [ATTR],
    });

    // Disconnect shortly after load; after hydration, mismatches won't occur.
    window.addEventListener(
      "load",
      () => {
        try {
          strip(document);
          window.setTimeout(() => obs.disconnect(), 4000);
        } catch {
          // no-op
        }
      },
      { once: true },
    );
  } catch {
    // no-op
  }
})();`}</Script>
        <ShoppingListProvider>
          <a
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-lg"
            href="#content"
          >
            Skip to content
          </a>
          <div className="min-h-dvh">
            <SiteHeader />
            <main id="content" className="mx-auto w-full max-w-6xl px-4 py-10">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ShoppingListProvider>
      </body>
    </html>
  );
}
