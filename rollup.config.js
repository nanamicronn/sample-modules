import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      // commonjs({
      //   include: ['node_modules/**'],
      // }),
      typescript(),
      terser()
    ],
    external: ['react', '@chakra-ui/react', '@emotion/styled', '@emotion/react'],
  },
  // {
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "cjs" }],
  //   plugins: [dts()],
  // },
];
