/**
 * Returns the count of unique values in a sorted array. The function mutates
 * the input in place (per the LeetCode convention) by shifting unique values
 * to the front. If you need immutability, copy the array first.
 *
 * @param sortedArr - A sorted array of numbers in ascending order.
 * @returns The number of unique elements.
 * @complexity Time O(n), Space O(1).
 *
 * @example
 * const arr = [1, 1, 2];
 * const len = removeDuplicates(arr); // 2
 * arr.slice(0, len);                  // [1, 2]
 */
export function removeDuplicates(sortedArr: number[]): number {
  if (sortedArr.length === 0) {
    return 0;
  }
  let writeIndex = 1;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i - 1]) {
      sortedArr[writeIndex] = sortedArr[i] as number;
      writeIndex++;
    }
  }
  return writeIndex;
}
