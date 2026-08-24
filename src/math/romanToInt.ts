/**
 * Converts a Roman numeral string (1-3999) to an integer. Subtractive
 * notation is supported (e.g. `IV` = 4, `MCMXCIV` = 1994).
 *
 * @param s - A Roman numeral string, uppercase, range 1-3999.
 * @returns The integer value.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * romanToInt('III');     // 3
 * romanToInt('LVIII');   // 58
 * romanToInt('MCMXCIV'); // 1994
 */
export function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = values[s[i] as string] ?? 0;
    const next = values[s[i + 1] as string] ?? 0;
    if (cur < next) {
      result -= cur;
    } else {
      result += cur;
    }
  }
  return result;
}
