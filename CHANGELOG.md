# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-08-24

### Added

- Initial release with 27 algorithm functions across 5 namespaces
- `algo.string` (7): `reverse`, `isPalindrome`, `isAnagram`, `firstUniqueChar`, `indexOf`, `longestCommonPrefix`, `longestSubstringWithoutRepeating`
- `algo.array` (11): `rotate`, `twoSum`, `removeDuplicates`, `moveZeroes`, `intersection`, `containsDuplicate`, `groupAnagrams`, `mergeSortedArrays`, `mergeIntervals`, `topKFrequent`, `majorityElement`
- `algo.number` (5): `atoi`, `plusOne`, `hammingDistance`, `missingNumber`, `dayOfWeek`
- `algo.math` (2): `reverseInt`, `romanToInt`
- `algo.dp` (2): `maxSubarray`, `climbStairs`
- Dual ESM and CJS output via tsup
- Subpath imports (`fe-utils/string`, `fe-utils/array`, etc.)
- TypeScript strict mode with `noUncheckedIndexedAccess`
- Vitest test suite with ~135 cases
- Biome for linting and formatting
- TypeDoc API documentation
