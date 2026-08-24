/**
 * Counts the number of distinct ways to climb `n` stairs taking 1 or 2 steps
 * at a time. This is the classic Fibonacci-style problem. `climbStairs(0)` is
 * defined as 1 (one way: do nothing).
 *
 * @param n - Number of stairs (non-negative integer).
 * @returns The number of distinct ways to reach the top.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * climbStairs(2); // 2  (1+1, 2)
 * climbStairs(3); // 3  (1+1+1, 1+2, 2+1)
 */
export function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
