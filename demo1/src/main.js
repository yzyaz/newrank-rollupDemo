import { num1, num2 } from './a'; // 引入但未使用不会被打包,当然未引入的更不会

// 未使用的变量,函数不会被打包
const a = 'aaaaa';

const fun = (f1, f2) => f1 + f2;

console.log('num1', num1);

// 注:对Window的操作还是会被打包(可以去了解下副作用相关)
window.fun1 = fun;

export default fun;

// npx rollup ./src/main.js -f es -o ./dist/bundle.js
