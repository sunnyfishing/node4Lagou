/*
 * @Author: your name
 * @Date: 2022-01-25 16:43:55
 * @LastEditTime: 2022-01-26 14:59:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\models\users.js
 */
const {Users} = require('../utils/db')

// 注册
const signup = ({username, password}) => {
  // 传给数据库-异步操作
  const users = new Users({
    username,
    password
  })
  return users.save()    // 保存
}

// 查询
const findUser = (username) => {
  return Users.findOne({username})
}

exports.signup = signup
exports.findUser = findUser