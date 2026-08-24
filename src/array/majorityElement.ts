/**
 * Returns the element that appears more than ⌊n/2⌋ times using the Boyer-Moore
 * voting algorithm. Assumes a majority element always exists.
 *
 * @param nums - Array of numbers (non-empty, majority guaranteed).
 * @returns The majority element.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * majorityElement([3, 2, 3]);             // 3
 * majorityElement([2, 2, 1, 1, 1, 2, 2]); // 2
 */
export function majorityElement(nums: number[]): number {
  if (nums.length === 0) {
    throw new RangeError('majorityElement requires a non-empty array');
  }
  let candidate = nums[0] as number;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i] as number;
      count = 1;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}
