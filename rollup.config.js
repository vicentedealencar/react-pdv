import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  },
  external: ['react'],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
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
    commonjs({
      include: ['node_modules/react/**', 'node_modules/numeral/**']
    })
  ]
}
