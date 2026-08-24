import * as array from './array/index';
import * as dp from './dp/index';
import * as math from './math/index';
import * as number from './number/index';
import * as string from './string/index';

export { string, array, number, math, dp };

/** Top-level algorithm namespace. */
export const algo = { string, array, number, math, dp } as const;
