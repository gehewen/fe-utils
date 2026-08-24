/**
 * Finds the missing number in an array containing `n` distinct numbers taken
 * from the range `[0, n]`. Uses Gauss's sum formula: the missing number equals
 * `n(n+1)/2 - sum(arr)`.
 *
 * @param nums - Array of `n` distinct integers in the range `[0, n]`.
 * @returns The missing integer.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * missingNumber([3, 0, 1]);   // 2
 * missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // 8
 */
export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, v) => acc + v, 0);
  return expectedSum - actualSum;
}
