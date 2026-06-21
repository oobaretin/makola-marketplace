"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { STORE_INFO } from "@/lib/store-info";
import type { ShoppingListItem } from "@/lib/shopping-list/types";
import { formatListForWhatsApp } from "@/lib/shopping-list/formatForWhatsApp";

function formatListAsText(items: ShoppingListItem[]): string {
  const lines = items.map(
    (i) => (i.quantity > 1 ? `${i.name} (${i.quantity})` : i.name),
  );
  const header = `${STORE_INFO.name} — Shopping list\n${STORE_INFO.addressLine1}, ${STORE_INFO.addressLine2}\n`;
  return header + lines.join("\n");
}

export function ListExportButtons({
  items,
  disabled,
  onClear,
}: {
  items: ShoppingListItem[];
  disabled: boolean;
  onClear?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleCopy = async () => {
    const text = formatListAsText(items);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const handleShare = async () => {
    const text = formatListAsText(items);
    const title = `${STORE_INFO.name} — Shopping list`;
    try {
      if (navigator.share) {
        await navigator.share({ title, text });
        return;
      }
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
    }
    await handleCopy();
  };

  const handleShareWhatsApp = () => {
    const text = formatListForWhatsApp(items);
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-3">
      {disabled ? (
        <p className="text-center text-xs text-stone-500">
          Add items to your list to share via WhatsApp.
        </p>
      ) : null}

      <button
        type="button"
        onClick={handleShareWhatsApp}
        disabled={disabled}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 font-bold text-white shadow-lg transition hover:bg-[#20ba5a] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        Share List via WhatsApp
      </button>

      <button
        type="button"
        onClick={() => setMoreOpen((v) => !v)}
        className="text-sm font-medium text-stone-600 underline-offset-2 hover:text-stone-900 hover:underline"
        aria-expanded={moreOpen}
      >
        {moreOpen ? "Hide options" : "More options (Print, Copy, Share)"}
      </button>

      {moreOpen ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => window.print()}
            disabled={disabled}
          >
            Print
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            disabled={disabled}
            aria-live="polite"
          >
            {copied ? "Copied!" : "Copy list"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleShare}
            disabled={disabled}
          >
            Share / SMS
          </Button>
          {onClear ? (
            <Button
              type="button"
              variant="danger"
              size="sm"
              onClick={onClear}
              disabled={disabled}
            >
              Clear all
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
