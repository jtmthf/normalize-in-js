import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import camelCase from 'lodash.camelcase';

process.env.NODE_ENV = 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const template = (pkg, umd) => ({
  input: 'src/index.ts',
  external: [
    ...(umd ? [] : Object.keys(pkg.dependencies || {})),
    ...[...Object.keys(pkg.peerDependencies || {}), 'styled-jsx/style'],
  ],
  output: (umd ? ['umd'] : ['cjs', 'es']).map((format) => ({
    name: camelCase(pkg.name),
    file:
      pkg[format === 'umd' ? 'unpkg' : format === 'cjs' ? 'main' : 'module'],
    format,
    sourcemap: true,
    globals: {
      '@emotion/core': 'emotionCore',
      'styled-components': 'styledComponents',
      'styled-jsx/style': 'styledJsx',
      react: 'React',
    },
  })),
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime',
      rootMode: 'upward',
      exclude: /node_modules/,
    }),
    ...(umd
      ? [
          replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
          terser(),
        ]
      : []),
  ],
});

export default (pkg, { umd = true } = {}) =>
  [umd && template(pkg, true), template(pkg, false)].filter(Boolean);
