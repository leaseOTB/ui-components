import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel'


import pkg from "./package.json";

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  external,
  output: [
    { format: 'cjs', file: pkg.main },
    { format: 'esm', file: pkg.module }
  ]
};