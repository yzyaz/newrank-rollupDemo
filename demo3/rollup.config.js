export default (arg) => {
  console.log('arg', arg);

  // if(configDebug){
  //   return ...
  // }

  return {
    input: 'src/main.js', // 入口
    output: {
      // 出口
      file: 'dist/bundle.js', // 出口文件
      format: 'es', // 打包格式
      // exports: 'auto', // 有意打包cjs配置
    },
  };
};

// npx rollup -c --configDebug
// npx rollup -c --configDebug=yes
