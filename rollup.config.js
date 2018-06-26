import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import external from 'rollup-plugin-peer-deps-external'
import { uglify } from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV

import pkg from './package.json'

const config = {
  input: 'src/index.js',
  external: ['react', 'redux'],
  output: {
    format: 'umd',
    name: 'ReactPdv',
    globals: {
      react: 'React',
      redux: 'Redux'
    }
  },
  // output: [{
  //   file: pkg.main,
  //   format: 'cjs',
  //   sourcemap: true
  // }, {
  //   file: pkg.module,
  //   format: 'es',
  //   sourcemap: true
  // }],
  plugins: [
    resolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()

    // external(),
    // babel({
    //   babelrc: false,
    //   presets: ['react', ['env', { modules: false }]],
    //   exclude: 'node_modules/**', // only transpile our source code
    //   plugins: [
    //     'external-helpers',
    //     'transform-class-properties',
    //     'transform-object-rest-spread'
    //   ]
    // }),
    // resolve({
    //   customResolveOptions: {
    //     moduleDirectory: 'node_modules'
    //   }
    // }),
    // commonjs({
    //   include: ['node_modules/react/**', 'node_modules/numeral/**']
    // })
  ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config