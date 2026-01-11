"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { useShoppingList } from "@/lib/shopping-list";

export function SiteHeader() {
  const pathname = usePathname();
  const { state } = useShoppingList();
  const count = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileMenuTop, setMobileMenuTop] = useState(72);

  useEffect(() => {
    // Close mobile menu on navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (!mobileOpen) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    function updateTop() {
      const h = headerRef.current?.getBoundingClientRect().height;
      if (typeof h === "number" && Number.isFinite(h) && h > 0) {
        setMobileMenuTop(Math.ceil(h));
      }
    }
    updateTop();
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/Bold.png"
            alt="Makola Marketplace"
            width={120}
            height={120}
            className="h-20 w-auto sm:h-16 md:h-20"
            priority
          />
          <span className="sr-only">Makola Marketplace</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/departments" active={pathname === "/departments"}>
            Departments
          </NavLink>
          <NavLink href="/blog" active={pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/shopping-list"
            variant={pathname === "/shopping-list" ? "secondary" : "primary"}
          >
            Shopping List
            <span
              className={[
                "ml-1 inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold",
                pathname === "/shopping-list"
                  ? "bg-zinc-900/10 text-zinc-900"
                  : "bg-white text-zinc-900",
              ].join(" ")}
              aria-label={`${count} items in shopping list`}
            >
              {count}
            </span>
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/20 backdrop-blur-[1px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed inset-x-0 z-50 mx-auto w-full max-w-6xl px-4"
            style={{ top: mobileMenuTop }}
          >
            <div
              id="mobile-nav"
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg"
              role="dialog"
              aria-label="Menu"
              aria-modal="true"
            >
              <div className="grid gap-1 p-2">
                <MobileNavLink href="/" active={pathname === "/"}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/departments" active={pathname === "/departments"}>
                  Departments
                </MobileNavLink>
                <MobileNavLink href="/blog" active={pathname === "/blog"}>
                  Blog
                </MobileNavLink>
                <MobileNavLink href="/contact" active={pathname === "/contact"}>
                  Contact
                </MobileNavLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-full px-4 py-2 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-sm"
          : "text-zinc-700 hover:bg-zinc-900/5",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active ? "bg-zinc-900 text-white" : "text-zinc-800 hover:bg-zinc-900/5",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true" className={active ? "text-white/70" : "text-zinc-400"}>
        →
      </span>
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 5H17M3 10H17M3 15H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


