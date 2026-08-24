/**
 * Parses a string into a 32-bit signed integer with overflow protection
 * (clamps to `[-2^31, 2^31 - 1]`). Skips leading whitespace, reads an optional
 * `+`/`-` sign, then consumes digits until a non-digit is found.
 *
 * @param s - The input string.
 * @returns The parsed integer, clamped to the 32-bit signed range.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * atoi('42');                  // 42
 * atoi('   -42');              // -42
 * atoi('4193 with words');     // 4193
 * atoi('2147483648');          // 2147483647 (clamped)
 */
export function atoi(s: string): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const trimmed = s.trimStart();
  if (trimmed.length === 0) {
    return 0;
  }
  let i = 0;
  let sign = 1;
  if (trimmed[0] === '+' || trimmed[0] === '-') {
    sign = trimmed[0] === '-' ? -1 : 1;
    i = 1;
  }
  let result = 0;
  while (i < trimmed.length) {
    const ch = trimmed[i] as string;
    const digit = ch.charCodeAt(0) - 48;
    if (digit < 0 || digit > 9) {
      break;
    }
    result = result * 10 + digit;
    i++;
  }
  result *= sign;
  if (result > INT_MAX) {
    return INT_MAX;
  }
  if (result < INT_MIN) {
    return INT_MIN;
  }
  return result;
}
