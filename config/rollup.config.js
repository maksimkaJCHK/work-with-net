import path from './path';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { visualizer } from 'rollup-plugin-visualizer';

export default [{
  input: `${path.src}/standard.js`,
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
              //"edge": "11"
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: true
      },
      compress: {
        passes: 2
      },
    }),
    sizeSnapshot(),
    sizes(),
    visualizer({
      filename: './visualizer/diag-work-with-net-standard.html',
      title: 'Стандартная сборка, включает в себя только самые необходимые расширения.',
      template: 'sunburst',
      gzipSize: true,
    }),
    visualizer({
      filename: './visualizer/row-work-with-net-standard.html',
      title: 'Стандартная сборка, включает в себя только самые необходимые расширения.',
      template: 'treemap',
      gzipSize: true,
    }),
    visualizer({
      filename: './visualizer/tree-work-with-net-standard.html',
      title: 'Стандартная сборка, включает в себя только самые необходимые расширения.',
      template: 'network',
      gzipSize: true,
    })
  ]
}, {
  // Для 11 IE может это кому-то и пригодится
  input: `${path.lib}/work-with-net-standard.js`,
  output: {
    file: `${path.lib}/ie/work-with-net-standard.js`,
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
              "ie": "11"
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: true
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
  input: `${path.src}/fullTypes.js`,
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
              //"edge": "11"
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: true
      },
      compress: {
        passes: 2
      },
    }),
    sizeSnapshot(),
    sizes(),
    visualizer({
      filename: './visualizer/diag-work-with-net-full.html',
      title: 'Полная сборка, включает в себя все расширения.',
      template: 'sunburst',
      gzipSize: true,
    }),
    visualizer({
      filename: './visualizer/row-work-with-net-full.html',
      title: 'Полная сборка, включает в себя все расширения.',
      template: 'treemap',
      gzipSize: true,
    }),
    visualizer({
      filename: './visualizer/tree-work-with-net-full.html',
      title: 'Полная сборка, включает в себя все расширения.',
      template: 'network',
      gzipSize: true,
    })
  ]
}, {
  // Для 11 IE может это кому-то и пригодится
  input: `${path.lib}/work-with-net.js`,
  output: {
    file: `${path.lib}/ie/work-with-net.js`,
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
              "ie": "11"
            }
          }
        ],
      ]
    }),
    terser({
      mangle: {
        module: true,
        properties: true
      },
      compress: {
        passes: 2
      },
    }),
    sizeSnapshot(),
    sizes(),
  ]
}];