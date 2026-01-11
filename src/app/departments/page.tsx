import { AddToListButton } from "@/components/AddToListButton";
import { Button } from "@/components/Button";
import { DEPARTMENTS } from "@/lib/departments";

export const metadata = {
  title: "Departments",
};

export default function DepartmentsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Departments
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          We’re not listing products yet. These are starter ideas to help you build a
          shopping list quickly — click <span className="font-semibold">Add to list</span>.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/shopping-list" variant="primary">
            View my list
          </Button>
          <Button href="/" variant="ghost">
            Back home
          </Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {DEPARTMENTS.map((d) => (
          <section
            key={d.slug}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950">{d.name}</h2>
                <p className="mt-1 text-sm text-zinc-600">{d.description}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {d.starterItems.map((name) => (
                <ProductTile key={name} name={name} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ProductTile({ name }: { name: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className="flex aspect-square w-full items-center justify-center bg-white p-8"
        aria-hidden="true"
        title="Image placeholder"
        style={{
          background: placeholderGradient(name),
        }}
      >
        <div className="h-full w-full rounded-2xl bg-white/75 shadow-[inset_0_0_0_1px_rgba(24,24,27,0.06)]" />
      </div>

      <div className="space-y-3 px-5 pb-5 pt-4">
        <div className="text-center text-sm font-semibold text-zinc-950">
          <span className="text-zinc-950">$—</span>{" "}
          <span className="font-medium text-zinc-500">USD</span>
        </div>

        <div className="text-center text-lg font-semibold leading-snug text-zinc-950">
          {name}
        </div>

        <div className="flex items-center justify-center gap-3 text-xs text-zinc-500">
          <Stars rating={0} />
          <span>No reviews</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full border border-zinc-300" />
          <span>Choose a store to see availability</span>
        </div>
      </div>

      <div className="border-t border-zinc-200/80 bg-zinc-50/70 p-4">
        <AddToListButton name={name} className="w-full justify-center" size="md" />
      </div>
    </div>
  );
}

function placeholderGradient(seed: string): string {
  // Stable "marketplace" color variety without shipping extra images.
  const colors = [
    ["#fde68a", "#34d399"], // amber → emerald
    ["#fecaca", "#fdba74"], // rose → orange
    ["#a7f3d0", "#93c5fd"], // mint → blue
    ["#ddd6fe", "#fbcfe8"], // violet → pink
    ["#bbf7d0", "#fef3c7"], // green → cream
  ];
  const idx = stableHash(seed) % colors.length;
  const [a, b] = colors[idx]!;
  return `linear-gradient(135deg, ${a}, ${b})`;
}

function stableHash(input: string): number {
  // Simple deterministic hash for UI-only use.
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function Stars({ rating }: { rating: number }) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < r} />
      ))}
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={filled ? "text-zinc-900" : "text-zinc-300"}
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}


