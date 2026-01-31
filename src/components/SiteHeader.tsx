"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
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
      className="sticky top-0 z-40 border-b border-stone-200/80 bg-[var(--background)]/95 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Makola Marketplace – Home">
          <Image
            src="/Bold.png"
            alt=""
            width={120}
            height={120}
            className="h-16 w-auto sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/departments" active={pathname === "/departments"}>
            Departments
          </NavLink>
          <NavLink href="/blog" active={pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/shopping-list"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--forest)] text-white shadow-sm transition hover:bg-[var(--forest-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2"
            aria-label={`Shopping list – ${count} items`}
          >
            <ListIcon />
            {count > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--terracotta)] px-1.5 text-xs font-bold text-white"
                aria-hidden
              >
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-zinc-900 shadow-sm transition hover:bg-stone-50 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/70 focus-visible:ring-offset-2"
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
            aria-label="Close"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed inset-x-0 z-50 mx-auto w-full max-w-6xl px-4"
            style={{ top: mobileMenuTop }}
          >
            <div
              id="mobile-nav"
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg"
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
                <MobileNavLink href="/about" active={pathname === "/about"}>
                  About
                </MobileNavLink>
                <MobileNavLink href="/contact" active={pathname === "/contact"}>
                  Contact
                </MobileNavLink>
                <MobileNavLink href="/shopping-list" active={pathname === "/shopping-list"}>
                  My List {count > 0 ? `(${count})` : ""}
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
        active
          ? "bg-[var(--forest)] text-white shadow-sm"
          : "text-stone-700 hover:bg-stone-100",
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
        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
        active ? "bg-[var(--forest)] text-white" : "text-stone-800 hover:bg-stone-100",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true" className={active ? "text-white/70" : "text-stone-400"}>
        →
      </span>
    </Link>
  );
}

function ListIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M3 5H17M3 10H17M3 15H17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M5 5L15 15M15 5L5 15" />
    </svg>
  );
}
