export default {
  // 入口
  input: 'src/main.js',
  // 出口
  output: [
    // 引入代码拆分(import()),只能用dir出口
    {
      dir: 'dist/splitting',
      format: 'es',
      manualChunks(id) {
        console.log('id', id);
        if (id.includes('b.js')) {
          return 'vendor';
        }
      },
      chunkFileNames: 'yzy-[name]-[hash].js',
      entryFileNames: 'index-[name].js',
    },
  ],
};

// npx rollup -c
