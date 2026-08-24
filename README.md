# fe-utils

> Curated frontend algorithm utilities in TypeScript, ported from the Chinese algorithm study guide "算法101" (101 problems).

**Other languages:** [简体中文](README.zh-CN.md)

A zero-dependency, dual ESM/CJS algorithm library for frontend developers. 27 functions across 5 namespaces covering string manipulation, array operations, number parsing, math, and dynamic programming.

> **📦 Distribution status:** The library is available via **GitHub only**. It is **not yet published to the public npm registry** under the name `fe-utils` — `pnpm add fe-utils` and `npm install fe-utils` will not work today. The npm release is tracked in the [Roadmap](#roadmap) section. Until then, follow the [Install from GitHub](#install-from-github-current) instructions below.

## Features

- **Pure functions** by default — most array operations return new values, inputs are not mutated
- **Universal runtime** — works in modern browsers and Node.js ≥ 18
- **Tree-shakeable** — subpath imports (`fe-utils/string`, `fe-utils/array`, ...) keep bundles small
- **Strictly typed** — full TypeScript with `noUncheckedIndexedAccess` for safer code
- **Well-tested** — 154 unit tests, ~98% line coverage with Vitest
- **Zero runtime dependencies**

## Install

You have two options. **Use the GitHub one** — npm is not yet available.

### Install from GitHub (current, recommended)

The repository lives at [github.com/gehewen/fe-utils](https://github.com/gehewen/fe-utils). Install it with pnpm or npm using a git URL.

#### With pnpm

```bash
pnpm add github:gehewen/fe-utils
```

**pnpm 11 users**: if the command fails with `ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED`, pnpm is blocking the `prepare` script that builds the library at install time. Approve it by creating a `pnpm-workspace.yaml` at the root of your project:

```yaml
# pnpm-workspace.yaml
allowBuilds:
  fe-utils@*: true
```

Then run `pnpm install` again. (pnpm 9 and 10 do not need this step.)

#### With npm

```bash
npm install github:gehewen/fe-utils
```

npm runs the `prepare` script automatically without extra configuration.

#### Verify the install worked

Run this in your project to confirm everything is wired up:

```bash
node -e "import('fe-utils').then(m => console.log(m.algo.string.reverse('hello')))"
```

You should see `olleh` printed. If you see `Cannot find module 'fe-utils'` or `Cannot find module './dist/index.js'`, the `prepare` build did not run — see the [Troubleshooting](#troubleshooting) section.

### Install from npm (planned, **not yet available**)

```bash
# ⛔ Do not run these yet — the package is not on the npm registry
pnpm add fe-utils
npm install fe-utils
```

> The `fe-utils` package name is reserved for the future npm release. Until that release ships, the only working install path is [from GitHub](#install-from-github-current-recommended). Track the npm release in [Roadmap](#roadmap).

## Usage

### Full namespace (ESM)

```ts
import { algo } from 'fe-utils';

algo.string.reverse('hello');                       // 'olleh'
algo.string.isPalindrome('A man, a plan, Panama');   // true
algo.array.containsDuplicate([1, 2, 3, 1]);         // true
algo.array.mergeIntervals([[1,3],[2,6],[8,10]]);     // [[1,6],[8,10]]
algo.number.dayOfWeek(24, 8, 2026);                  // 1 (Monday)
algo.math.reverseInt(-123);                          // -321
algo.dp.climbStairs(5);                              // 8
```

### Subpath import (smaller bundle)

The library declares `"sideEffects": false` and per-namespace subpath exports, so importing from a subpath lets your bundler drop unused functions entirely:

```ts
// Only the string namespace ships to the browser
import { string } from 'fe-utils/string';
string.reverse('hello');

// Or pull a single function
import { mergeIntervals } from 'fe-utils/array';
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1,6],[8,10],[15,18]]
```

### CommonJS

```js
const { algo } = require('fe-utils');
algo.string.reverse('hello'); // 'olleh'

// Or per-namespace
const { mergeIntervals } = require('fe-utils/array');
```

## API

### `algo.string` — 7 functions

| Function | Signature | Description |
|---|---|---|
| `reverse` | `(s: string) => string` | Reverse a string (Unicode-safe via `Array.from`) |
| `isPalindrome` | `(s: string) => boolean` | Palindrome check, case-insensitive, alphanumeric only |
| `isAnagram` | `(s: string, t: string) => boolean` | Check if two strings are anagrams |
| `firstUniqueChar` | `(s: string) => number` | Index of the first non-repeating char, `-1` if none |
| `indexOf` | `(haystack, needle) => number` | Substring search; naive O(n·m) |
| `longestCommonPrefix` | `(strs: string[]) => string` | Common prefix of an array of strings |
| `longestSubstringWithoutRepeating` | `(s: string) => number` | Length of the longest substring with all unique chars |

### `algo.array` — 11 functions

| Function | Signature | Description |
|---|---|---|
| `rotate` | `(arr: number[], k: number) => number[]` | Pure rotation; supports negative `k` |
| `twoSum` | `(nums: number[], target: number) => [number, number] \| null` | Two indices whose values sum to target |
| `removeDuplicates` | `(sortedArr: number[]) => number` | In-place dedup of a sorted array; returns new length |
| `moveZeroes` | `(arr: number[]) => number[]` | Move all zeros to the end; pure |
| `intersection` | `(nums1: number[], nums2: number[]) => number[]` | Unique intersection, sorted ascending |
| `containsDuplicate` | `(nums: number[]) => boolean` | `true` if any value appears more than once |
| `groupAnagrams` | `(strs: string[]) => string[][]` | Group strings that are anagrams of each other |
| `mergeSortedArrays` | `(nums1, m, nums2, n) => number[]` | Merge two sorted arrays; pure |
| `mergeIntervals` | `(intervals: [number, number][]) => [number, number][]` | Merge overlapping intervals (calendar use case) |
| `topKFrequent` | `(nums: number[], k: number) => number[]` | The `k` most frequent values (tag clouds, trending) |
| `majorityElement` | `(nums: number[]) => number` | Boyer-Moore majority vote; O(n) time, O(1) space |

### `algo.number` — 5 functions

| Function | Signature | Description |
|---|---|---|
| `atoi` | `(s: string) => number` | String to 32-bit int with overflow clamping |
| `plusOne` | `(digits: number[]) => number[]` | Increment a big-integer represented as a digit array |
| `hammingDistance` | `(x: number, y: number) => number` | Number of bit positions that differ |
| `missingNumber` | `(nums: number[]) => number` | Find the missing number in `[0..n]` |
| `dayOfWeek` | `(day: number, month: number, year: number) => number` | `0` = Sun, `1` = Mon, …, `6` = Sat (Zeller's algorithm, no `Date`) |

### `algo.math` — 2 functions

| Function | Signature | Description |
|---|---|---|
| `reverseInt` | `(n: number) => number` | Reverse a 32-bit int; returns `0` on overflow |
| `romanToInt` | `(s: string) => number` | Roman numeral to int; range 1-3999 |

### `algo.dp` — 2 functions

| Function | Signature | Description |
|---|---|---|
| `maxSubarray` | `(nums: number[]) => number` | Maximum sum of any contiguous subarray (Kadane's); throws `RangeError` on empty input |
| `climbStairs` | `(n: number) => number` | Distinct ways to climb `n` stairs taking 1 or 2 steps at a time |

## Why these 27 and not all 101?

The source material covers the full LeetCode universe (linked lists, trees, graphs, DP, backtracking, …). From that, we picked the 27 functions that map to real, recurring frontend problems:

| Use case | Functions that solve it |
|---|---|
| Form & input validation | `isPalindrome`, `isAnagram`, `containsDuplicate`, `firstUniqueChar` |
| Autocomplete & search | `longestCommonPrefix`, `indexOf`, `longestSubstringWithoutRepeating` |
| Calendar / scheduling UIs | `mergeIntervals`, `dayOfWeek` |
| Tag clouds, trending, recommendations | `topKFrequent`, `majorityElement` |
| Sliders, carousels, paginated data | `rotate` |
| Data normalization | `removeDuplicates`, `moveZeroes`, `intersection`, `groupAnagrams` |
| Diff / similarity tools | `hammingDistance` |
| Big-integer arithmetic (e.g. serial numbers) | `atoi`, `plusOne`, `reverseInt` |
| Classic DP patterns (for interviews) | `maxSubarray`, `climbStairs` |

Linked-list, tree, graph, and complex backtracking problems are intentionally excluded — they map poorly to typical frontend JS work without significant additional data structures. See the [Roadmap](#roadmap) for what's planned.

## Project structure

```
src/
├── string/      7 functions + barrel
├── array/      11 functions + barrel
├── number/      5 functions + barrel
├── math/        2 functions + barrel
├── dp/          2 functions + barrel
├── __smoke__/   ESM + CJS dual-consumption smoke tests
└── index.ts     aggregates namespaces into `algo`
```

## Development

To work on the library itself (not consume it):

```bash
git clone https://github.com/gehewen/fe-utils.git
cd fe-utils
pnpm install
pnpm test            # 154 unit tests
pnpm test:coverage   # v8 coverage report
pnpm typecheck       # tsc --noEmit, strict
pnpm lint            # biome check
pnpm lint:fix        # biome check --write
pnpm format          # biome format --write
pnpm build           # tsup → dist/
pnpm gen:docs        # typedoc → docs/
pnpm verify          # typecheck + lint + test + build
```

Continuous integration runs `pnpm verify` plus coverage upload on every push and PR to `main`. The `main` branch is protected: merging requires a passing `verify` check.

## Troubleshooting

### `ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED` (pnpm 11)

This is the most common issue. pnpm 11 blocks the `prepare` build script by default for safety. Fix it by adding to your project's `pnpm-workspace.yaml`:

```yaml
# pnpm-workspace.yaml
allowBuilds:
  fe-utils@*: true
```

Then run `pnpm install` again. pnpm 9 and 10 do not have this restriction.

### `Cannot find module 'fe-utils'` after install

The `prepare` script did not run, so `node_modules/fe-utils/dist/` is missing. Check the error output from `pnpm install` for build-script errors. The fix is the same as above — add the `allowBuilds` entry and reinstall.

### `Cannot find module './dist/index.js'` from inside fe-utils

The package was installed but its `dist/` folder was not built. The most common cause on pnpm 11 is the same `allowBuilds` issue above.

### `pnpm add fe-utils` fails with "no such package"

That's expected. The package is not on the npm registry yet. Use the [GitHub install](#install-from-github-current-recommended) instead.

## Roadmap

- [x] **v0.1.0** — Initial release on GitHub (2026-08-24). 27 functions, dual ESM/CJS, full type definitions, CI green.
- [ ] **v0.2.0** — Publish to the public npm registry under the name `fe-utils`. After this, `pnpm add fe-utils` will work.
- [ ] **v0.3.0** — Add the next batch of frontend-relevant algorithms: linked lists (reverse, cycle detection, merge), trees (BFS/DFS traversals), stacks/queues.
- [ ] **v1.0.0** — API freeze. Optional browser-specific utilities (debounce, throttle, deepClone, LRU).

## License

[MIT](LICENSE)
