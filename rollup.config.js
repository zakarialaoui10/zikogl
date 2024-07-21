
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/zikogl.cjs',
    format: 'cjs',
    globals: {
      ziko: 'Ziko'
    }
  },{
    file: 'dist/zikogl.mjs',
    format: 'es',
    globals: {
      ziko: 'Ziko'
    }
  },
  {
    file: 'dist/zikogl.js',
    format: 'umd',
    name:"ZikoThree",
    globals: {
      ziko: 'Ziko'
    }
  }
],
  external: ["ziko"],
  plugins: [resolve(), commonjs(),terser()],
};
