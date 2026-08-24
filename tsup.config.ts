import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'string/index': 'src/string/index.ts',
    'array/index': 'src/array/index.ts',
    'number/index': 'src/number/index.ts',
    'math/index': 'src/math/index.ts',
    'dp/index': 'src/dp/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'es2020',
  platform: 'neutral',
  splitting: false,
  clean: true,
  treeshake: true,
  minify: false,
  shims: false,
  silent: false,
});
