import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';

const rootDir = path.resolve(__dirname);
const dstDir = path.join(rootDir, "dist");

const extensions = [".ts", ".js", ".tsx"]

export default {
  input: "./src/index.ts",
  output: {
    dir: dstDir,
    format: "cjs",
    name: "Xrm.Test"
  },
  plugins: [
    resolve({
      jsnext: true,
      extensions,
    }),
    babel({
      extensions
    }),
    commonjs({
      namedExports: {
        'react': ['isValidElementType', 'isValidElement', 'Children', 'cloneElement'],
        'react-js': ['isValidElementType', 'isValidElement', 'Children', 'cloneElement'],
        'react-is': ['ForwardRef', 'Memo', 'isFragment']
      },
    }),
  ]
};