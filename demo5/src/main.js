import num1 from './b';
// 未使用的变量,函数不会被打包
const a = 'aaaaa';

import('./a.js').then((res) => {
  console.log('ajs-res', res);
});

console.log('bjs', num1);

export default fun;
