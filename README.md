<!--
 * @Author: your name
 * @Date: 2022-01-17 14:05:09
 * @LastEditTime: 2022-01-25 14:37:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\README.md
-->

# nodeJSProject

### 后端

- Node.js
- Express
- MongoDB

### 配置步骤

- 初始化
  yarn init

- 使用 Express 应用程序生成器
  yarn global add express-generator

  - 错误：express : 无法将“express”项识别为 cmdlet、函数、脚本文件或可运行程序的名称
  - 解决：npm install express express-generator -g

- 使用模板
  express -e
