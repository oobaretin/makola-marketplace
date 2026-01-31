export const STORE_INFO = {
  name: "Makola Marketplace",
  addressLine1: "9051 W Bellfort Ave",
  addressLine2: "Houston, TX 77031",
  phoneDisplay: "713-995-4343",
  phoneHref: "tel:+17139954343",
  /** Google Maps URL for "On the Road" (Navigator) — open directions & hours. */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Makola+Marketplace+9051+W+Bellfort+Ave+Houston+TX+77031",
  /** WhatsApp "Check Stock" — lead capture: "Don't see it? Ask us on WhatsApp." */
  whatsappHref: "https://wa.me/17139954343",
  hours: [
    { day: "Monday", hours: "9 AM – 9 PM" },
    { day: "Tuesday", hours: "9 AM – 9 PM" },
    { day: "Wednesday", hours: "9 AM – 9 PM" },
    { day: "Thursday", hours: "9 AM – 9 PM" },
    { day: "Friday", hours: "9 AM – 9 PM" },
    { day: "Saturday", hours: "9 AM – 9 PM" },
    { day: "Sunday", hours: "11 AM – 9 PM" },
  ],
  notes: {
    delivery: "No delivery — in-store shopping only.",
  },
} as const;





