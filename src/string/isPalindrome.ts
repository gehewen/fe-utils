/**
 * Checks whether a string is a palindrome, ignoring case and any non-alphanumeric
 * characters. An empty string (after filtering) is considered a palindrome.
 *
 * @param s - The input string.
 * @returns `true` if the string is a palindrome under the rules above.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * isPalindrome('A man, a plan, a canal: Panama'); // true
 * isPalindrome('race a car');                     // false
 */
export function isPalindrome(s: string): boolean {
  const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = filtered.length - 1;
  while (left < right) {
    if (filtered[left] !== filtered[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
