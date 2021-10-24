import { add } from 'lodash';
import { num1 } from './a';

// 未使用的变量,函数不会被打包
const a = 'aaaaa';

const fun = (f1: number, f2: number) => add(f1, f2);

console.log('num1', num1);

//@ts-ignore 注:对Window的操作还是会被打包(可以去了解下副作用相关)
window.fun1 = fun;

export default fun;
