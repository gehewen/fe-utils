/**
 * Returns the index of the first occurrence of `needle` in `haystack`, or -1
 * if not found. An empty `needle` matches at index 0. Uses a naive O(n·m) scan
 * — clear and predictable; switch to KMP if perf is critical.
 *
 * @param haystack - The string to search within.
 * @param needle - The substring to find.
 * @returns The first matching index, or -1 if `needle` is not found.
 * @complexity Time O(n·m), Space O(1).
 *
 * @example
 * indexOf('hello', 'll');     // 2
 * indexOf('aaaaa', 'bba');    // -1
 * indexOf('anything', '');    // 0
 */
export function indexOf(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
}
