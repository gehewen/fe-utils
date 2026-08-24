/**
 * Returns the maximum sum of any contiguous subarray using Kadane's algorithm.
 * Throws `RangeError` if the input is empty.
 *
 * @param nums - Non-empty array of numbers.
 * @returns The maximum contiguous subarray sum.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6 (subarray [4,-1,2,1])
 * maxSubarray([1, 2, 3, 4]);                    // 10
 * maxSubarray([-1, -2, -3]);                    // -1
 */
export function maxSubarray(nums: number[]): number {
  if (nums.length === 0) {
    throw new RangeError('maxSubarray requires a non-empty array');
  }
  let currentMax = nums[0] as number;
  let globalMax = currentMax;
  for (let i = 1; i < nums.length; i++) {
    const v = nums[i] as number;
    currentMax = Math.max(v, currentMax + v);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}
