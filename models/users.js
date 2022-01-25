/*
 * @Author: your name
 * @Date: 2022-01-25 16:43:55
 * @LastEditTime: 2022-01-25 16:46:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\models\users.js
 */
const {Users} = require('../utils/db')

const signup = ({username, password}) => {
  // 传给数据库
  const users = new Users({
    username,
    password
  })
  users.save()    // 保存
}

exports.signup = signup