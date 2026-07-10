/**
 * Formats an ISO date string using UTC so the displayed calendar date matches
 * the source date regardless of the viewer's local timezone (avoids the
 * classic off-by-one-day bug for date-only strings like "2026-05-12").
 */
export function formatDate(
  iso: string,
  options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" }
) {
  return new Date(iso).toLocaleDateString("en-US", { ...options, timeZone: "UTC" });
}
