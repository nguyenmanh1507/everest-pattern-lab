import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'source/js/app.js',
  output: {
    file: 'source/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      // namedExports: {
      //   'node_modules/siema/dist/siema.min.js': ['Siema']
      // }
    })
  ]
}
