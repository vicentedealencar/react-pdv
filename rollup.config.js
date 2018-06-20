import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  }, {
    file: pkg.module,
    format: 'es',
    sourcemap: true
  }],
  plugins: [
    external(),
    babel({
      babelrc: false,
      presets: ['react', ['env', { modules: false }]],
      exclude: 'node_modules/**', // only transpile our source code
      plugins: [
        'external-helpers',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: ['node_modules/react/**', 'node_modules/numeral/**']
    })
  ]
}
