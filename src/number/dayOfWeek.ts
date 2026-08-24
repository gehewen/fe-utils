/**
 * Returns the day of the week for the given Gregorian date using Zeller's
 * congruence (or an equivalent formula). No `Date` / timezone dependency.
 *
 * @param day - Day of the month (1-31).
 * @param month - Month of the year (1-12).
 * @param year - The full year (e.g. 2026, supports any Gregorian year).
 * @returns Day of the week as a number: 0 = Sunday, 1 = Monday, ..., 6 = Saturday.
 * @complexity Time O(1), Space O(1).
 *
 * @example
 * dayOfWeek(24, 8, 2026);  // 1 (Monday)
 * dayOfWeek(1, 1, 1970);   // 4 (Thursday)
 */
export function dayOfWeek(day: number, month: number, year: number): number {
  // Zeller's congruence: h = (q + ⌊13(m+1)/5⌋ + K + ⌊K/4⌋ + ⌊J/4⌋ − 2J) mod 7
  // h = 0 => Saturday, 1 => Sunday, 2 => Monday, ... 6 => Friday
  let m = month;
  let y = year;
  if (m <= 2) {
    m += 12;
    y -= 1;
  }
  const K = y % 100;
  const J = Math.floor(y / 100);
  const h =
    (day + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
  // Map h (0=Sat, 1=Sun, 2=Mon, ..., 6=Fri) to 0=Sun, 1=Mon, ..., 6=Sat
  return (((h - 1 + 7) % 7) + 7) % 7;
}
