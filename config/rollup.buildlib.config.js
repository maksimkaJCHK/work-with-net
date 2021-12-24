import path from './path';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

export default [{
  // Стандартная библиотека, не все типы
  input: `${path.src}/library-standard.js`,
  output: {
    file: `${path.lib}/work-with-net-standard.js`,
    name: 'work-with-net-standard',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "debug": false,
            "useBuiltIns": "entry",
            "modules": false,
            "corejs": 3,
            "targets": {
              "chrome": "58",
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: false
      },
      compress: {
        passes: 2
      },
    }),
    sizeSnapshot(),
    sizes(),
  ]
}, {
  // Все типы
  input: `${path.src}/library.js`,
  output: {
    file: `${path.lib}/work-with-net.js`,
    name: 'work-with-net',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "debug": false,
            "useBuiltIns": "entry",
            "modules": false,
            "corejs": 3,
            "targets": {
              "chrome": "58",
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: false
      },
      compress: {
        passes: 2
      },
    }),
    sizeSnapshot(),
    sizes(),
  ]
},
];