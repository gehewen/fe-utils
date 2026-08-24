/**
 * Reverses the given string. Unicode-safe (handles surrogate pairs via the
 * spread/Array.from trick which splits on code points, not UTF-16 code units).
 *
 * @param s - The input string.
 * @returns A new string with the characters in reverse order.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * reverse('hello');        // 'olleh'
 * reverse('a😀b');         // 'b😀a'  (emoji preserved as one code point)
 */
export function reverse(s: string): string {
  return Array.from(s).reverse().join('');
}
