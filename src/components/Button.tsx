"use client";

import Link from "next/link";
import { forwardRef } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton | ButtonAsLink>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children, ...rest } = props;

    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition",
      "disabled:pointer-events-none disabled:opacity-50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-5 text-sm",
      variantClasses(variant),
      className ?? "",
    ].join(" ");

    if ("href" in rest && typeof rest.href === "string") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { prefetch, ...linkRest } = rest;
      return (
        <Link {...linkRest} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button {...rest} ref={ref} className={classes}>
        {children}
      </button>
    );
  },
);

function variantClasses(variant: NonNullable<BaseProps["variant"]>): string {
  switch (variant) {
    case "primary":
      return [
        "text-white shadow-sm",
        "bg-gradient-to-r from-emerald-600 via-emerald-600 to-amber-500",
        "hover:from-emerald-500 hover:via-emerald-500 hover:to-amber-400",
        "active:from-emerald-600 active:via-emerald-600 active:to-amber-500",
      ].join(" ");
    case "secondary":
      return "bg-amber-400 text-zinc-950 shadow-sm hover:bg-amber-300 active:bg-amber-400";
    case "ghost":
      return "bg-transparent text-zinc-900 hover:bg-zinc-900/5 active:bg-zinc-900/10";
    case "danger":
      return "bg-rose-600 text-white shadow-sm hover:bg-rose-500 active:bg-rose-600";
    default:
      return "bg-zinc-900 text-white hover:bg-zinc-800";
  }
}


