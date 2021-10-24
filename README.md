<a name="SeIMY"></a>
## 关于[rollup](https://rollupjs.org/)
1. 定义
- rollup 是一个用于 JavaScript 的模块打包器，它将小段代码编译成更大更复杂的东西，比如库或应用程序。
2. 与webpack比较
- rollup是一个模块化的打包工具，但是Rollup主要是针对ES Module进行打包的;
- rollup更多时候是专注于处理JavaScript代码的（当然也可以处理css、font、vue等文件）;
- rollup的配置和理念相对于webpack来说，更加的简洁和容易理解；
- 在早期webpack不支持tree shaking时，rollup具备更强的优势；
3. 场景
- 通常在实际项目开发过程中，我们都会使用webpack；
- 在对库文件进行打包时，我们通常会使用rollup；

​<br />
<a name="Wl0yl"></a>
## rollup基本使用(_demo1_)

1. 安装
- npm install rollup
2. 打包([命令行标志](https://rollupjs.org/guide/en/#command-line-flags); [输出格式](https://rollupjs.org/guide/en/#outputformat)) 
- npx rollup ./src/main.js -f iife -o dist/bundle.js  (打包浏览器的库, main.js:入口; iife:打包格式; bundle.js:出口; )
- npx rollup ./src/main.js -f amd -o dist/bundle.js ( 打包AMD的库 )
- npx rollup ./src/main.js -f cjs -o dist/bundle.js (打包CommonJS的库 )
- npx rollup ./src/main.js -f umd --name mathUtil -o dist/bundle.js (打包通用的库（umd须跟上name） )



<a name="q2pVY"></a>
## [Tree-Shaking](https://rollupjs.org/guide/en/#tree-shaking)(_demo1_)

1. Rollup 会静态分析您正在导入的代码，并将排除任何实际未使用的代码。这使您可以在现有工具和模块的基础上进行构建，而无需添加额外的依赖项或增加项目的大小。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634994829557-ca321ba8-6928-4a92-8a38-c109f8771dee.png#clientId=u8a0d8714-3428-4&from=paste&height=219&id=u6b11fbc5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=290&originWidth=772&originalType=binary&ratio=1&size=46032&status=done&style=none&taskId=udca0bfbb-0170-4b34-9f86-fb2355da366&width=584)![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634994848611-b73798df-a22b-47cb-b510-9362924ddc41.png#clientId=u8a0d8714-3428-4&from=paste&height=207&id=ua101f48d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=273&originWidth=486&originalType=binary&ratio=1&size=21902&status=done&style=none&taskId=u195fdabc-b931-40a1-9b58-d1b6f7b7d96&width=368)
<a name="S91f7"></a>
## [配置文件](https://rollupjs.org/guide/en/#configuration-files)(_demo2_)

1. 默认: rollup.config.js![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634995422873-aa34a7f9-b3f4-4913-8f05-e4f5aa7e80e8.png#clientId=u8a0d8714-3428-4&from=paste&height=267&id=BxSV2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=267&originWidth=627&originalType=binary&ratio=1&size=35130&status=done&style=none&taskId=u2b2368f3-4a05-4280-9145-2664b41ff2b&width=627)
1. 自定义文件名: rollup --config my.config.js 或 rollup -c my.config.js
1. 其中其他常用的配置,(可以看课件项目代码)
- [output.name](https://rollupjs.org/guide/en/#outputname): 打包umd格式需要; 
- [output.globals](https://rollupjs.org/guide/en/#outputglobals): 告诉rollup 哪些模块名等同,用于umd/iife规范的代码, 如globals{lodash: '_'};
- [plugins](https://rollupjs.org/guide/en/#using-plugins): 引入插件并配置(下面会讲);
- [external](https://rollupjs.org/guide/en/#external): 指出应将哪些模块视为外部模块(了解下package.json 中的一个配置, peerDependencies)

​<br />
<a name="qtYbe"></a>
## 命令传递参数(_demo3_)
npx rollup -c --configDebug 或者 npx rollup -c --configDebug=yes <br />即可在rollup.config.js中获得参数, 通过此参数即可做相应的返回, (也可用环境变量)![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634996179963-4405440d-fcd4-4fcf-90b5-abaf65d975fa.png#clientId=u8a0d8714-3428-4&from=paste&height=510&id=u6b4f36e4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=510&originWidth=849&originalType=binary&ratio=1&size=71814&status=done&style=none&taskId=u1f35cad0-23a2-43e0-a408-28ebe92ea12&width=849)
<a name="XJT0x"></a>
## 使用插件(配置见项目)

1. 列子:
- 安装 @rollup/plugin-json 作为开发依赖：npm install --save-dev @rollup/plugin-json
- 编辑您的rollup.config.js文件以包含 JSON 插件：

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634997092655-e1fa5c81-87a3-40a3-8744-f19a5e898626.png#clientId=uda9480c7-361a-4&from=paste&height=214&id=sWN7N&margin=%5Bobject%20Object%5D&name=image.png&originHeight=214&originWidth=331&originalType=binary&ratio=1&size=9502&status=done&style=none&taskId=uf1852160-cd5b-427b-a0ae-296853f4d28&width=331)

2. 常用插件-[@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)(demo4)
- 作用: 一个使用Node解析算法定位模块的Rollup插件，用于在node_modules中使用第三方模块(就是引入第三方的库)
- 常用属性: (moduleDirectories可不写,默认就是node_modules; )

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634997483093-d2a01233-5ab6-42b3-bbe7-a11d46ae1a02.png#clientId=uda9480c7-361a-4&from=paste&height=35&id=uc20020e7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=35&originWidth=405&originalType=binary&ratio=1&size=3871&status=done&style=none&taskId=ubbbf93e3-4fee-4924-aad2-8a1de1d2ebc&width=405)![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634997466127-0a51e174-f675-4ee3-bca5-8f6a4a18a37a.png#clientId=uda9480c7-361a-4&from=paste&height=146&id=u39d1307c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=146&originWidth=411&originalType=binary&ratio=1&size=16470&status=done&style=none&taskId=u2f299d80-4213-49a9-81f8-c99093a4ae7&width=411)

3. 常用插件-[@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)(demo4)
- 作用: 一些库公开了可以按原样导入的 ES 模块——the-answer就是这样的一个模块。但目前，NPM 上的大多数包都以 CommonJS 模块的形式公开。在更改之前，我们需要将 CommonJS 转换为 ES2015，然后 Rollup 才能处理它们。(引入第三方包中含有commenjs的,先通过这个插件转为module类型的在rollup中使用,避免出问题)
- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1634997657258-d0fbee22-d9c9-4c64-b7d5-08ac13827a0c.png#clientId=uda9480c7-361a-4&from=paste&height=110&id=ueb0cb568&margin=%5Bobject%20Object%5D&name=image.png&originHeight=110&originWidth=396&originalType=binary&ratio=1&size=14821&status=done&style=none&taskId=ud9e07586-4616-4671-accc-d089e80e9cf&width=396)
4. 常用插件-[@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel) (进行_polyfill_,一两句话讲不清楚, 我就不讲了吧)
- plugin-babel插件配置:

babel({<br />      extensions, // 省略引入文件时的后缀<br />      babelHelpers:'bundled', // Helpers模式<br />      exclude:'node_modules/**', // 排除文件<br />      include:'src/**', // 包含文件<br />    }),

- babel库的配置文件中的配置: 可以看课件项目代码.babelrc.js
5. 常用插件-[rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)(demo4)(还要安装 typescript)

typescript({ useTsconfigDeclarationDir:true }),

6. 常用插件-[rollup-plugin-terser](https://github.com/trysound/rollup-plugin-terser)(demo4>min.config.js)

terser()<br />​<br />
<a name="JBH6g"></a>
## 代码拆分

1. 会自动将import()引入的默认拆分

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1635056637792-6ce7aa64-72b8-44b4-8f24-f60d6d8c5f6f.png#clientId=u1c42fb87-8966-4&from=paste&height=301&id=u487454a2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=301&originWidth=339&originalType=binary&ratio=1&size=25970&status=done&style=none&taskId=uc2441f38-7441-438c-9131-9bba5486d8c&width=339)![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1635056619662-a7c170ef-c070-4063-8df4-5fa246f444c9.png#clientId=u1c42fb87-8966-4&from=paste&height=355&id=ue76c451f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=355&originWidth=526&originalType=binary&ratio=1&size=39608&status=done&style=none&taskId=ued933bd0-9562-45f9-8900-ad454377ace&width=526)

2. [output.manualChunks](https://rollupjs.org/guide/en/#outputmanualchunks) 自定义代码拆分模块

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1635056594167-b862ffc3-33d6-463d-9fab-cb0f4cc42b3b.png#clientId=u1c42fb87-8966-4&from=paste&height=538&id=ua9d4ffe8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=538&originWidth=759&originalType=binary&ratio=1&size=74705&status=done&style=none&taskId=u5a38df63-559a-445d-be8c-7be1c0f1a5f&width=759)

3. [output.chunkFileNames](https://rollupjs.org/guide/en/#outputchunkfilenames)和[output.entryFileNames](https://rollupjs.org/guide/en/#outputentryfilenames)选项来提供您自己的命名模式

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1635056912521-7f37d760-3720-4eef-8f55-a984f35e7994.png#clientId=u1c42fb87-8966-4&from=paste&height=334&id=uf92d0997&margin=%5Bobject%20Object%5D&name=image.png&originHeight=334&originWidth=707&originalType=binary&ratio=1&size=53942&status=done&style=none&taskId=u9a35417e-4567-4b48-b67c-2bfc2566bdc&width=707)<br />​

<a name="SXbLE"></a>
## react-redux分析
![image.png](https://cdn.nlark.com/yuque/0/2021/png/1034725/1635057709062-15a99635-f7e2-4d4c-8851-227c3d427916.png#clientId=u1c42fb87-8966-4&from=paste&height=396&id=u3bd230e7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=630&originalType=binary&ratio=1&size=157059&status=done&style=none&taskId=u36cdd9bb-bd02-4712-9c36-6d7c1d390af&width=630)
