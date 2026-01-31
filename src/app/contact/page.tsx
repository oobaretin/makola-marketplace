import { STORE_INFO } from "@/lib/store-info";

export const metadata = {
  title: "Contact",
  description:
    "Visit Makola Marketplace in Houston. Address, hours, phone, and directions. African grocery store at 9051 W Bellfort Ave.",
};

function MapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.95 22.5 0 19.55 0 16.125V6.375a3 3 0 013-3H5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ContactPage() {
  const weekdays = STORE_INFO.hours.filter(
    (h) => h.day !== "Sunday",
  );
  const sunday = STORE_INFO.hours.find((h) => h.day === "Sunday");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-black text-stone-900">
        Visit Us
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Details */}
        <div className="space-y-8">
          <section className="flex items-start gap-4">
            <div className="rounded-lg bg-[var(--forest)]/10 p-3 text-[var(--forest)]">
              <MapIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="mb-1 text-xl font-bold text-stone-800">
                Location
              </h2>
              <p className="text-stone-600">
                {STORE_INFO.addressLine1}
                <br />
                {STORE_INFO.addressLine2}
              </p>
              <p className="mt-2 text-sm text-stone-500">
                {STORE_INFO.locationLandmark}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-[var(--forest)] hover:underline"
                >
                  Get Directions →
                </a>
                <a
                  href={STORE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-amber-700 hover:underline"
                >
                  Check Traffic to Store
                </a>
              </div>
            </div>
          </section>

          <section className="flex items-start gap-4">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="mb-1 text-xl font-bold text-stone-800">
                Phone
              </h2>
              <a
                href={STORE_INFO.phoneHref}
                className="text-stone-600 hover:text-blue-700"
              >
                {STORE_INFO.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-stone-500">
                <a
                  href={STORE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--forest)] hover:underline"
                >
                  WhatsApp — check stock
                </a>
              </p>
            </div>
          </section>

          <section className="flex items-start gap-4">
            <div className="rounded-lg bg-orange-100 p-3 text-orange-700">
              <ClockIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="mb-1 text-xl font-bold text-stone-800">
                Hours
              </h2>
              <ul className="space-y-1 text-stone-600">
                <li>
                  <span className="font-medium">Mon – Sat:</span>{" "}
                  {weekdays[0]?.hours ?? "9:00 AM – 9:00 PM"}
                </li>
                <li>
                  <span className="font-medium">Sun:</span>{" "}
                  {sunday?.hours ?? "11:00 AM – 9:00 PM"}
                </li>
              </ul>
            </div>
          </section>

          <p className="text-sm text-stone-500">
            {STORE_INFO.notes.delivery}
          </p>
        </div>

        {/* Map Integration */}
        <div className="relative h-[450px] overflow-hidden rounded-2xl bg-stone-200 shadow-inner">
          <iframe
            src={STORE_INFO.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Makola Marketplace on Google Maps"
          />
        </div>
      </div>
    </div>
  );
}
