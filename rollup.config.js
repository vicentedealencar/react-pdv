import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      babelrc: false,
      // TODO: extend pkg.babel
      // import pkg from './package.json'
      // pkg.babel === { presets: [ 'react', 'env' ], plugins: [ 'transform-class-properties', 'transform-object-rest-spread' ] }
      presets: [
        'react',
        [
          'env',
          {
            'modules': false
          }
        ]
      ],
      plugins: [
        'external-helpers',
        'transform-class-properties',
        'transform-object-rest-spread'
      ],
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs({
        // namedExports: {
        //   // left-hand side can be an absolute path, a path
        //   // relative to the current directory, or the name
        //   // of a module in node_modules
        //   'numeral': [ 'default' ]
        // }
    })
  ]
}
