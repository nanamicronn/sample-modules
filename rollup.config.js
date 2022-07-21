// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
//
// export default [
//   {
//     input: "src/index.ts",
//     output: {
//       file: "dist/index.js",
//       format: "esm",
//       sourcemap: true,
//     },
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//     ],
//   },
//   {
//     input: "dist/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
// ];

import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs({
        include: ['node_modules/**'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
    external: ['react', 'react-dom', '@emotion/styled', '@emotion/react'],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],
  },
];
