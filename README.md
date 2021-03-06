<!--
 * @Author: your name
 * @Date: 2022-01-17 14:05:09
 * @LastEditTime: 2022-01-26 15:39:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\README.md
-->

# nodeJSProject

- 起 node 服务：npm start
- 起数据库：mongo

### 后端

- Node.js 语言
- Express 框架
- MongoDB 数据库
- ejs 模板
- bcrypt 密码加密
- mongoose 数据库语法
- robo 3T 数据库可视化工具

### 连接过程

1. 通过 bin/www 起服务
2. 服务接收到请求后，在 app.js 进行路由分发到 rouers 文件夹下的具体业务路由
3. 在业务路由里面匹配对应的操作路由
4. 在路由中对数据处理的部分进行抽离到 controllers
5. controllers 中使用 res.render 将数据渲染到 views 模板(ejs)中并返回接口
6. controllers 中引入 models
7. models 中是接收数据并传给数据库
8. utils/db.js 创建并初始化数据库

### 配置步骤

- 初始化
  yarn init

- 使用 Express 应用程序生成器
  yarn global add express-generator

  - 错误：express : 无法将“express”项识别为 cmdlet、函数、脚本文件或可运行程序的名称
  - 解决：npm install express express-generator -g

- 使用模板
  express -e

- 起服务
  npm start
  默认是使用的 bin/www 文件中的 3000 端口起的服务

- 路由
  在 routers 中创建具体业务的路由代码。
  然后在 app.js 中引入业务路由文件，并使用 app.use('/', routers) 来合并路由

- 抽离 controllers
  把 routes 中的中间件抽离到 controllers 中（把数据处理逻辑放在 C 中）

  - 直接返回
    res.send('respond with a resource'); // 直接返回

  - 模板渲染
    res.render('ejsName', {data:JSON.stringify({...})}) 第一个参数是模板名，第二个参数是传给模板的内容

  - 接收参数（post）
    const {username} = req.body

  - 在使用 models 时要使用 async-await 来处理数据库异步问题

- 模板
  views 中的 ejs 文件是将返回内容填充到设置的模板中，并返回给前端。
  在 controllers 中 使用 res.render 来指定使用的模板及要返回的内容

  - 模板内容
    errorCode 是错误码；
    data 是装填 controllers 给的数据；
  - 对应的接口里的内容是 result.data 里面的内容

- 数据库
  - 【问题】： mongo: command not found
    配置全局环境变量 C:\mongodb\bin
  - 链接数据库的工具：mongoose。link：http://www.mongoosejs.net/
  - 创建数据库链接 utils/db.js
    - mongodb://localhost/test
      test 为数据库名称，会自动创建数据库
  - 创建 models 用来做数据库操作
    然后暴露给 controllers，让 controllers 传值

### 相关工具

#### bcrypt

- 异步加密
- utils/tools/ bcryptHash

#### cors

- 跨域工具

### mongoDB 常用操作

#### 增

- models/users signup

#### 查

- models/users findUser
  查找是否存在

### 笔记

- post 请求获取参数
  req.body.pageSize
- get 请求获取参数
  req.query.pageSize

### 报错

- Cannot set headers after they are sent to the client

* res.render()要放在嵌套的 if-else 里面
