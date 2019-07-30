import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import svg from 'rollup-plugin-svg';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'wavelet-faucet',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'react',
        "styled-components": 'styled-components',
      }
    },
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      resolve(),
      json(),
        svg({ base64: true}),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs()
    ]
  },
  {
    input: 'src/index.js',
    external: Object.keys(pkg.peerDependencies || {}),
      plugins: [
          resolve(),
          json(),
          svg({ base64: true}),
          babel({
              exclude: 'node_modules/**'
          }),
          commonjs()
      ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
