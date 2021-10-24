// 未使用的变量,函数不会被打包
const a = 'aaaaa';

const fun = (f1, f2) => f1 + f2;

// 注:对Window的操作还是会被打包(可以去了解下副作用相关)
window.fun1 = fun;

export default fun;
