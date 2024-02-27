
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

const banner= `
/*
  Project: ziko-three
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko.js
  Git-Wiki : https://github.com/zakarialaoui10/ziko.js/wiki
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/ziko-three.cjs',
    format: 'cjs',
    banner,
  },{
    file: 'dist/ziko-three.mjs',
    format: 'es',
    banner,
  },
  {
    file: 'dist/ziko-three.js',
    format: 'umd',
    name:"ZikoThree",
    banner,
  },
  {
    file: 'dist/ziko-three.min.js',
    format: 'umd',
    name:"ZikoThree",
    banner,
    plugins:[terser({
      output: {
        comments: (node, { type, value }) => type === 'comment2' && value.includes('Author'),
      },
    })]
  },
  
],
external: ["ziko.js"],
  plugins: [
    resolve(), 
    commonjs(),
    // babel({
    //   babelHelpers: 'bundled', // or 'runtime'
    //   //exclude: 'node_modules/**',
    // }), 
  ],
};
