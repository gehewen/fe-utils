/**
 * Merges all overlapping intervals in a collection. Useful for calendar event
 * merging, time-slot consolidation, and scheduling UIs. Each interval is
 * `[start, end]` (end inclusive). Intervals are sorted by start before merging.
 *
 * @param intervals - Array of `[start, end]` tuples.
 * @returns A new array of merged, non-overlapping intervals, sorted by start.
 * @complexity Time O(n log n), Space O(n).
 *
 * @example
 * mergeIntervals([[1,3],[2,6],[8,10],[15,18]]); // [[1,6],[8,10],[15,18]]
 * mergeIntervals([[1,4],[4,5]]);                 // [[1,5]]
 */
export function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length <= 1) {
    return intervals.map(([s, e]) => [s, e]);
  }
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
  const first = sorted[0];
  if (first === undefined) {
    return [];
  }
  const result: [number, number][] = [];
  let current: [number, number] = [first[0], first[1]];
  for (let i = 1; i < sorted.length; i++) {
    const next = sorted[i];
    if (next === undefined) {
      continue;
    }
    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = [next[0], next[1]];
    }
  }
  result.push(current);
  return result;
}
