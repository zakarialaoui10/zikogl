
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
const banner= `
/*
  Project: zikogl
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko.js
  Git-Wiki : https://github.com/zakarialaoui10/ziko.js/wiki
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [
  //   {
  //   file: 'dist/zikogl.cjs',
  //   format: 'cjs',
  //   banner,
  //   globals: {
  //     ziko: 'Ziko'
  //   }
  // },
  // {
  //   file: 'dist/zikogl.mjs',
  //   format: 'es',
  //   banner,
  //   globals: {
  //     ziko: 'Ziko'
  //   }
  // },
  {
    file: 'dist/zikogl.js',
    format: 'umd',
    banner,
    name:"ZikoGl",
    globals: {
      ziko: 'Ziko'
    }
  }
],
  external: ["ziko"],
  plugins: [resolve(), commonjs()
    //,terser()
    ],
};
