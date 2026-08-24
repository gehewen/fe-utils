/**
 * Returns the `k` most frequent elements in the array. Uses counting + bucket
 * sort by frequency. When multiple values share the same frequency, their
 * relative order is implementation-defined.
 *
 * @param nums - Array of integers.
 * @param k - Number of top elements to return (1 <= k <= number of distinct values).
 * @returns Array of the k most frequent values.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * topKFrequent([1, 1, 1, 2, 2, 3], 2); // [1, 2]
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();
  for (const v of nums) {
    counts.set(v, (counts.get(v) ?? 0) + 1);
  }
  const buckets: number[][] = [];
  for (const [value, count] of counts) {
    const bucket = buckets[count] ?? [];
    bucket.push(value);
    buckets[count] = bucket;
  }
  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    const bucket = buckets[i];
    if (bucket) {
      for (const v of bucket) {
        result.push(v);
        if (result.length === k) {
          break;
        }
      }
    }
  }
  return result;
}
