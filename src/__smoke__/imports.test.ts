/**
 * Smoke tests verifying that the library can be consumed both as ESM and CJS
 * after the tsup build. These tests dynamically load the built artifacts and
 * exercise representative functions from each namespace.
 *
 * Skipped unless the `dist/` directory exists (i.e. after `pnpm build`).
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const here = dirname(fileURLToPath(import.meta.url));
const distRoot = resolve(here, '../../dist');
const distExists = existsSync(resolve(distRoot, 'index.js'));
const distCjsExists = existsSync(resolve(distRoot, 'index.cjs'));

describe.skipIf(!distExists)('ESM smoke', () => {
  it('imports the algo namespace and calls a representative function', async () => {
    const { algo } = await import(resolve(distRoot, 'index.js'));
    expect(algo.string.reverse('hello')).toBe('olleh');
    expect(algo.array.containsDuplicate([1, 2, 3])).toBe(false);
    expect(algo.number.dayOfWeek(24, 8, 2026)).toBe(1);
    expect(algo.math.reverseInt(123)).toBe(321);
    expect(algo.dp.climbStairs(4)).toBe(5);
  });

  it('imports a subpath (string) directly', async () => {
    const { reverse } = await import(resolve(distRoot, 'string/index.js'));
    expect(reverse('abc')).toBe('cba');
  });

  it('imports a subpath (array) directly', async () => {
    const { mergeIntervals } = await import(resolve(distRoot, 'array/index.js'));
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
      ]),
    ).toEqual([[1, 6]]);
  });
});

describe.skipIf(!distCjsExists)('CJS smoke', () => {
  it('requires the algo namespace and calls a representative function', () => {
    const require = createRequire(import.meta.url);
    const mod = require(resolve(distRoot, 'index.cjs')) as {
      algo: {
        string: { reverse: (s: string) => string };
        array: { containsDuplicate: (n: number[]) => boolean };
      };
    };
    expect(mod.algo.string.reverse('hello')).toBe('olleh');
    expect(mod.algo.array.containsDuplicate([1, 2, 3])).toBe(false);
  });

  it('requires a subpath (number) directly', () => {
    const require = createRequire(import.meta.url);
    const mod = require(resolve(distRoot, 'number/index.cjs')) as {
      atoi: (s: string) => number;
    };
    expect(mod.atoi('42')).toBe(42);
  });
});
