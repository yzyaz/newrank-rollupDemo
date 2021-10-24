export default {
  // 入口
  input: 'src/main.js',
  // 出口
  output: [
    {
      // cjs模式
      file: 'dist/cjs/bundle.js', // 出口文件
      format: 'cjs', // 打包格式
      exports: 'auto', // 有意打包cjs配置
    },
    {
      // es模式
      file: 'dist/es/bundle.js', // 出口文件
      format: 'es', // 打包格式
    },
    {
      // umd模式, cjs和amd的结合,需要name
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'demoName',
      globals: {
        // 告诉rollup lodash模块等同于-,用于umd/iife规范的代码
        // lodash: '_',
      },
    },
    // ...更多模式见官网
  ],
};

// npx rollup -c
