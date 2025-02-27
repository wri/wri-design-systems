import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      // resolve(),
      resolve({ extensions: ['.ts', '.tsx'] }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
      }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
      terser(),
    ],
    external: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react'],
  },
  {
    input: 'src/components/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]

// import commonjs from '@rollup/plugin-commonjs'
// import resolve from '@rollup/plugin-node-resolve'
// import typescript from '@rollup/plugin-typescript'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import terser from '@rollup/plugin-terser'
// import dts from 'rollup-plugin-dts'
// import postcss from 'rollup-plugin-postcss'
// // import packageJson from './package.json' assert { type: 'json' }
// // import babel from '@rollup/plugin-babel';

// export default [
//   {
//     input: 'src/components/index.ts',
//     // input: 'src/index.tsx',
//     output: [
//       {
//         // file: packageJson.main,
//         file: 'dist/index.cjs.js',
//         // dir: 'dist/cjs',
//         format: 'cjs',
//         sourcemap: true,
//         // preserveModules: true,
//         // preserveModulesRoot: 'src',
//       },
//       {
//         // file: packageJson.module,
//         file: 'dist/index.esm.js',
//         // dir: 'dist/esm',
//         format: 'esm',
//         sourcemap: true,
//         // preserveModules: true,
//         // preserveModulesRoot: 'src',
//       },
//     ],
//     external: [
//       'react',
//       'react-dom',
//       '@chakra-ui/react', //
//       '@emotion/react', //
//       // '@emotion/styled', //
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       // resolve({
//       //   browser: true,
//       //   dedupe: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
//       //   extensions: ['.ts', '.tsx'],
//       // }),
//       commonjs(),
//       // babel({
//       //   babelHelpers: 'bundled',
//       //   exclude: 'node_modules/**',
//       //   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
//       // }),
//       typescript({
//         tsconfig: './tsconfig.json',
//         exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
//       }),
//       postcss({ extensions: ['.css'], inject: true, extract: false }),
//       // terser(),
//     ],
//     // bundle: {
//     //   include: [
//     //     //     '@emotion/react',
//     //     '@emotion/styled',
//     //   ],
//     // },
//   },
//   {
//     input: 'src/components/index.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     // output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts()],
//     external: [/\.css$/],
//   },
// ]
