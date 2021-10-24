import resolve from '@rollup/plugin-node-resolve'; // 帮助 Rollup 查找外部模块(就是引入第三方的库)
import commonjs from '@rollup/plugin-commonjs'; // 引入第三方包中含有commenjs的,先通过这个插件转为module类型的在rollup中使用,避免出问题
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts', '.tsx', '.json'];

export default {
  input: 'src/main.ts', // 入口
  output: {
    // 出口
    file: 'dist/bundle.min.js', // 出口文件
    format: 'es', // 打包格式
    // exports: 'auto', // 有意打包cjs配置
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve({
      // 省略引入文件时的后缀
      extensions,
    }),
    terser(),
  ],
  // 指出应将哪些模块视为外部模块
  external: ['lodash'],
};

// npx rollup -c
