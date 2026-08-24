/**
 * Reverses the digits of a 32-bit signed integer. Returns 0 on overflow (when
 * the reversed value would exceed the 32-bit signed range).
 *
 * @param n - The input integer (positive, negative, or zero).
 * @returns The reversed integer, or 0 on overflow.
 * @complexity Time O(log n), Space O(1).
 *
 * @example
 * reverseInt(123);   // 321
 * reverseInt(-123);  // -321
 * reverseInt(1534236469); // 0 (overflow)
 */
export function reverseInt(n: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const sign = n < 0 ? -1 : 1;
  const absStr = Math.abs(n).toString();
  const reversedStr = absStr.split('').reverse().join('');
  const reversed = Number.parseInt(reversedStr, 10) * sign;
  if (reversed > INT_MAX || reversed < INT_MIN) {
    return 0;
  }
  return reversed;
}
