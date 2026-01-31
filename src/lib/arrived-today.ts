/**
 * "Arrived Today" banner — FOMO for fresh items (e.g. Kenkey, Yams).
 * Toggle enabled/items in one place; leave empty array to hide banner.
 */
export const ARRIVED_TODAY: {
  enabled: boolean;
  label: string;
  items: readonly string[];
} = {
  enabled: true,
  label: "Arrived today",
  items: ["Fresh Kenkey", "Yams", "Plantain"],
};
