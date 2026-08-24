/**
 * Returns the Hamming distance between two non-negative integers — the number
 * of bit positions at which the corresponding bits differ. Implemented via
 * XOR + Brian Kernighan's bit-counting algorithm.
 *
 * @param x - First non-negative integer.
 * @param y - Second non-negative integer.
 * @returns The Hamming distance.
 * @complexity Time O(log n), Space O(1).
 *
 * @example
 * hammingDistance(1, 4); // 2 (binary 001 vs 100)
 * hammingDistance(0, 0); // 0
 */
export function hammingDistance(x: number, y: number): number {
  let xor = (x ^ y) >>> 0;
  let count = 0;
  while (xor !== 0) {
    xor &= xor - 1;
    count++;
  }
  return count;
}
