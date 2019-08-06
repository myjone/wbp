## htmlWebpackPlugin 会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到html中去

### plugins
1. puglin 可以在webpack运行到某个时刻的时候帮你做一些事情

### sourceMap
1.sourceMap 他是一个映射关系，他知道dist目录下main.js 实际上对应index.js中的我几行

### webpack devserevr

 devServer:{
        contentBase:'./dist',
        open:true,
    },


### 代码分割优化  code Splitting
1. 通过合理的代码分割提升性能

2. 代码分割和webpack 无关

3. 同步代码分割 只需要在：
    optimization:{
         splitChunks:{
             chunks:'all'
         }
     },
4.异步代码分割 无需做任何配置会自动配置