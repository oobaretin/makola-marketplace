import { STORE_INFO } from "@/lib/store-info";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Contact
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Call us, visit our store, or check hours before you come in.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-950">Store</div>
          <div className="mt-3 text-sm text-zinc-700">
            {STORE_INFO.addressLine1}
            <br />
            {STORE_INFO.addressLine2}
          </div>
          <div className="mt-4 text-sm">
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              href={STORE_INFO.phoneHref}
            >
              {STORE_INFO.phoneDisplay}
            </a>
          </div>
          <div className="mt-5 text-sm text-zinc-600">{STORE_INFO.notes.delivery}</div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-950">Hours</div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200/80">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-200/80">
                {STORE_INFO.hours.map((h) => (
                  <tr key={h.day}>
                    <td className="px-4 py-3 font-medium text-zinc-900">{h.day}</td>
                    <td className="px-4 py-3 text-right text-zinc-700">{h.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}





