import { SITE_URL } from "@/lib/site-url";
import { STORE_INFO } from "@/lib/store-info";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: STORE_INFO.name,
    url: SITE_URL,
    telephone: STORE_INFO.phoneDisplay,
    image: `${SITE_URL}/Bold.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_INFO.addressLine1,
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77031",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.6556748,
      longitude: -95.5381652,
    },
    openingHoursSpecification: STORE_INFO.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.hours.includes("11 AM") ? "11:00" : "09:00",
      closes: "21:00",
    })),
    priceRange: "$$",
    servesCuisine: ["West African", "Nigerian", "Ghanaian"],
    description:
      "African grocery store in Houston. Build your shopping list online and shop in-store.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
