const HOUSTON_TZ = "America/Chicago";

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

type DaySchedule = {
  openMinutes: number;
  closeMinutes: number;
  opensLabel: string;
};

/** Mon–Sat 9 AM – 9 PM; Sun 11 AM – 9 PM (Houston local). */
const SCHEDULE: Record<number, DaySchedule> = {
  0: { openMinutes: 11 * 60, closeMinutes: 21 * 60, opensLabel: "11 AM" },
  1: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
  2: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
  3: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
  4: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
  5: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
  6: { openMinutes: 9 * 60, closeMinutes: 21 * 60, opensLabel: "9 AM" },
};

function getHoustonMinutes(now: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: HOUSTON_TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  return {
    day: WEEKDAY_MAP[weekday] ?? 1,
    minutes: hour * 60 + minute,
  };
}

export type StoreOpenStatus = {
  isOpen: boolean;
  statusText: string;
  detailText: string;
};

export function getStoreOpenStatus(now = new Date()): StoreOpenStatus {
  const { day, minutes } = getHoustonMinutes(now);
  const today = SCHEDULE[day]!;
  const closeLabel = "9 PM";

  if (minutes >= today.openMinutes && minutes < today.closeMinutes) {
    return {
      isOpen: true,
      statusText: "Open now",
      detailText: `Closes at ${closeLabel}`,
    };
  }

  if (minutes < today.openMinutes) {
    return {
      isOpen: false,
      statusText: "Closed",
      detailText: `Opens today at ${today.opensLabel}`,
    };
  }

  const tomorrow = (day + 1) % 7;
  const next = SCHEDULE[tomorrow]!;
  const tomorrowLabel =
    tomorrow === 0 ? "Sunday" : tomorrow === 1 ? "Monday" : "tomorrow";

  return {
    isOpen: false,
    statusText: "Closed",
    detailText: `Opens ${tomorrowLabel} at ${next.opensLabel}`,
  };
}
