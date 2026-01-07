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
                <div
                  key={name}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="aspect-[4/3] w-full"
                    aria-hidden="true"
                    title="Image placeholder"
                    style={{
                      background: placeholderGradient(name),
                    }}
                  />
                  <div className="p-4">
                    <div className="min-w-0">
                      <div className="line-clamp-2 text-sm font-semibold text-zinc-950">
                        {name}
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">
                        Price coming soon • In-store only
                      </div>
                    </div>
                    <AddToListButton name={name} className="mt-4 w-full justify-center" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
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


