# fe-utils

> 从中文算法小册子"算法101"（101 道题）精选而来的前端 TypeScript 算法工具库。

一个零依赖、双 ESM/CJS 输出的算法库，为前端开发者打造。横跨 5 个命名空间共 27 个函数，覆盖字符串处理、数组操作、数字解析、数学运算、动态规划。

> **📦 分发状态：** 当前仅通过 **GitHub** 提供。**尚未发布到公共 npm registry**——`pnpm add fe-utils` 和 `npm install fe-utils` 现在都不工作。npm 发布计划在 [Roadmap](#roadmap) 一节中。在那之前，请按下面的 [从 GitHub 安装](#从-github-安装当前可用推荐) 步骤操作。

**其他语言版本：** [English](README.md)

## 特性

- **纯函数优先**——大部分数组操作返回新值，不修改入参
- **通用运行时**——兼容现代浏览器和 Node.js ≥ 18
- **支持 tree-shaking**——子路径导入（`fe-utils/string`、`fe-utils/array` 等）让打包体积最小
- **严格类型**——完整 TypeScript，开启 `noUncheckedIndexedAccess` 写更安全的代码
- **测试覆盖完整**——154 个单元测试，行覆盖率 ~98%，使用 Vitest
- **零运行时依赖**

## 安装

有两种方式，**请使用 GitHub 方式**——npm 暂不可用。

### 从 GitHub 安装（当前可用，推荐）

源码仓库在 [github.com/gehewen/fe-utils](https://github.com/gehewen/fe-utils)。用 pnpm 或 npm 配合 git URL 安装。

#### 使用 pnpm

```bash
pnpm add github:gehewen/fe-utils
```

**pnpm 11 用户注意**：如果命令报 `ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED`，说明 pnpm 阻止了安装时构建库的 `prepare` 脚本。在你项目根目录新建 `pnpm-workspace.yaml` 授权：

```yaml
# pnpm-workspace.yaml
allowBuilds:
  fe-utils@*: true
```

然后再次运行 `pnpm install`。（pnpm 9 和 10 不需要这一步。）

#### 使用 npm

```bash
npm install github:gehewen/fe-utils
```

npm 会自动运行 `prepare` 脚本，不需要额外配置。

#### 验证安装是否成功

在你的项目里跑这条命令确认一切正常：

```bash
node -e "import('fe-utils').then(m => console.log(m.algo.string.reverse('hello')))"
```

应该看到 `olleh`。如果报 `Cannot find module 'fe-utils'` 或 `Cannot find module './dist/index.js'`，说明 `prepare` 构建没跑——看下面的 [常见问题](#常见问题) 一节。

### 从 npm 安装（计划中，**暂不可用**）

```bash
# ⛔ 现在还不要跑这些——这个包还没上 npm registry
pnpm add fe-utils
npm install fe-utils
```

> `fe-utils` 这个包名是给未来的 npm 版本预留的。在 npm 版本发布之前，唯一能用的安装方式是 [从 GitHub 安装](#从-github-安装当前可用推荐)。npm 发布时间跟踪在 [Roadmap](#roadmap)。

## 用法

### 完整命名空间（ESM）

```ts
import { algo } from 'fe-utils';

algo.string.reverse('hello');                       // 'olleh'
algo.string.isPalindrome('A man, a plan, Panama');   // true
algo.array.containsDuplicate([1, 2, 3, 1]);         // true
algo.array.mergeIntervals([[1,3],[2,6],[8,10]]);     // [[1,6],[8,10]]
algo.number.dayOfWeek(24, 8, 2026);                  // 1 (周一)
algo.math.reverseInt(-123);                          // -321
algo.dp.climbStairs(5);                              // 8
```

### 子路径导入（更小打包体积）

库声明了 `"sideEffects": false` 且每个命名空间都有子路径导出，从子路径导入可以让打包器完全删除未用到的函数：

```ts
// 只把 string 命名空间打进浏览器
import { string } from 'fe-utils/string';
string.reverse('hello');

// 或者只导入单个函数
import { mergeIntervals } from 'fe-utils/array';
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1,6],[8,10],[15,18]]
```

### CommonJS

```js
const { algo } = require('fe-utils');
algo.string.reverse('hello'); // 'olleh'

// 或按命名空间
const { mergeIntervals } = require('fe-utils/array');
```

## API

### `algo.string` — 7 个函数

| 函数 | 签名 | 说明 |
|---|---|---|
| `reverse` | `(s: string) => string` | 反转字符串（通过 `Array.from` 保证 Unicode 安全） |
| `isPalindrome` | `(s: string) => boolean` | 回文检查，大小写无关，只看字母和数字 |
| `isAnagram` | `(s: string, t: string) => boolean` | 判断两个字符串是否互为字母异位词 |
| `firstUniqueChar` | `(s: string) => number` | 首个不重复字符的下标，没有则返回 `-1` |
| `indexOf` | `(haystack, needle) => number` | 子串查找，朴素 O(n·m) |
| `longestCommonPrefix` | `(strs: string[]) => string` | 字符串数组的最长公共前缀 |
| `longestSubstringWithoutRepeating` | `(s: string) => number` | 最长无重复字符子串的长度 |

### `algo.array` — 11 个函数

| 函数 | 签名 | 说明 |
|---|---|---|
| `rotate` | `(arr: number[], k: number) => number[]` | 纯函数版旋转，支持负数 `k`（向左转） |
| `twoSum` | `(nums: number[], target: number) => [number, number] \| null` | 找和为目标值的两个下标 |
| `removeDuplicates` | `(sortedArr: number[]) => number` | 原地去重（输入必须已排序），返回去重后长度 |
| `moveZeroes` | `(arr: number[]) => number[]` | 把所有零移到末尾，纯函数 |
| `intersection` | `(nums1: number[], nums2: number[]) => number[]` | 去重后的交集，升序 |
| `containsDuplicate` | `(nums: number[]) => boolean` | 有重复元素返回 `true` |
| `groupAnagrams` | `(strs: string[]) => string[][]` | 把字母异位词分组 |
| `mergeSortedArrays` | `(nums1, m, nums2, n) => number[]` | 合并两个有序数组，纯函数 |
| `mergeIntervals` | `(intervals: [number, number][]) => [number, number][]` | 合并重叠区间（日程场景） |
| `topKFrequent` | `(nums: number[], k: number) => number[]` | 出现频率最高的 `k` 个值（标签云、热榜） |
| `majorityElement` | `(nums: number[]) => number` | Boyer-Moore 多数元素，O(n) 时间 O(1) 空间 |

### `algo.number` — 5 个函数

| 函数 | 签名 | 说明 |
|---|---|---|
| `atoi` | `(s: string) => number` | 字符串转 32 位整数，带溢出保护 |
| `plusOne` | `(digits: number[]) => number[]` | 把以数字数组表示的大整数加一 |
| `hammingDistance` | `(x: number, y: number) => number` | 两个数二进制位不同的位置数 |
| `missingNumber` | `(nums: number[]) => number` | 在 `[0..n]` 中找出缺失的那个数字 |
| `dayOfWeek` | `(day: number, month: number, year: number) => number` | `0`=周日，`1`=周一，…，`6`=周六（Zeller 公式，不依赖 `Date`） |

### `algo.math` — 2 个函数

| 函数 | 签名 | 说明 |
|---|---|---|
| `reverseInt` | `(n: number) => number` | 反转 32 位整数，溢出返回 `0` |
| `romanToInt` | `(s: string) => number` | 罗马数字转整数，范围 1-3999 |

### `algo.dp` — 2 个函数

| 函数 | 签名 | 说明 |
|---|---|---|
| `maxSubarray` | `(nums: number[]) => number` | 最大连续子数组和（Kadane 算法），空数组抛 `RangeError` |
| `climbStairs` | `(n: number) => number` | 爬 `n` 阶楼梯的方案数（每次 1 或 2 步） |

## 为什么是这 27 个，而不是 101 个全收？

源材料覆盖完整的 LeetCode 题库（链表、树、图、动态规划、回溯…）。我们从中挑选了能映射到真实、反复出现的前端问题的 27 个：

| 场景 | 对应函数 |
|---|---|
| 表单 & 输入校验 | `isPalindrome`、`isAnagram`、`containsDuplicate`、`firstUniqueChar` |
| 自动补全 & 搜索 | `longestCommonPrefix`、`indexOf`、`longestSubstringWithoutRepeating` |
| 日历 / 排程类 UI | `mergeIntervals`、`dayOfWeek` |
| 标签云、热榜、推荐 | `topKFrequent`、`majorityElement` |
| 轮播、跑马灯、分页数据 | `rotate` |
| 数据归一化 | `removeDuplicates`、`moveZeroes`、`intersection`、`groupAnagrams` |
| Diff / 相似度工具 | `hammingDistance` |
| 大整数运算（序列号等） | `atoi`、`plusOne`、`reverseInt` |
| 经典 DP 模式（面试向） | `maxSubarray`、`climbStairs` |

链表、树、图、复杂回溯题被刻意排除——它们在典型前端 JS 工作里要么用不上，要么需要额外的数据结构支持，难以复用。后续计划在 [Roadmap](#roadmap) 里。

## 项目结构

```
src/
├── string/      7 个函数 + 桶文件
├── array/      11 个函数 + 桶文件
├── number/      5 个函数 + 桶文件
├── math/        2 个函数 + 桶文件
├── dp/          2 个函数 + 桶文件
├── __smoke__/   ESM + CJS 双消费方式的冒烟测试
└── index.ts     把所有命名空间聚合成 `algo`
```

## 开发

要参与开发本库本身（而不是使用它）：

```bash
git clone https://github.com/gehewen/fe-utils.git
cd fe-utils
pnpm install
pnpm test            # 154 个单元测试
pnpm test:coverage   # v8 覆盖率报告
pnpm typecheck       # tsc --noEmit，严格模式
pnpm lint            # biome check
pnpm lint:fix        # biome check --write
pnpm format          # biome format --write
pnpm build           # tsup → dist/
pnpm gen:docs        # typedoc → docs/
pnpm verify          # typecheck + lint + test + build
```

持续集成（CI）在每次 push 和 PR 时跑 `pnpm verify` 并上传覆盖率。`main` 分支已设保护：合入需要通过 `verify` 检查。

## 常见问题

### `ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED`（pnpm 11）

最常见的问题。pnpm 11 默认阻止 `prepare` 构建脚本来保证安全。修复方法是往你项目的 `pnpm-workspace.yaml` 加：

```yaml
# pnpm-workspace.yaml
allowBuilds:
  fe-utils@*: true
```

然后再次 `pnpm install`。pnpm 9 和 10 没有这个限制。

### 安装后报 `Cannot find module 'fe-utils'`

`prepare` 脚本没跑，导致 `node_modules/fe-utils/dist/` 缺失。查一下 `pnpm install` 的输出里有没有构建脚本相关的错误。修复方法同上——加 `allowBuilds` 然后重装。

### 报 `Cannot find module './dist/index.js'`（在 fe-utils 包内部）

包装上了但 `dist/` 没构建。pnpm 11 上最常见的原因还是 `allowBuilds` 那个坑。

### `pnpm add fe-utils` 报"no such package"

这是预期的。这个包还没上 npm registry。请改用 [从 GitHub 安装](#从-github-安装当前可用推荐)。

## Roadmap

- [x] **v0.1.0** — 在 GitHub 上首发（2026-08-24）。27 个函数、双 ESM/CJS、完整类型定义、CI 全绿。
- [ ] **v0.2.0** — 发布到公共 npm registry，包名 `fe-utils`。发布后 `pnpm add fe-utils` 即可用。
- [ ] **v0.3.0** — 补全下一批前端相关的算法：链表（反转、环检测、合并）、树（BFS/DFS 遍历）、栈/队列。
- [ ] **v1.0.0** — API 冻结。可选的浏览器专用工具（debounce、throttle、deepClone、LRU）。

## 许可证

[MIT](LICENSE)
