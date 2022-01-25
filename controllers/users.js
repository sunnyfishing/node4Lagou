/*
 * @Author: your name
 * @Date: 2022-01-25 15:39:38
 * @LastEditTime: 2022-01-25 17:01:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\controllers\users.js
 */

const usersModel = require('../models/users')
const signUp = (req, res, next) =>{
  const {username, password} = req.body
  console.log('username',username)
  usersModel.signup({
    username,
    password
  })
  // res.send('respond with a resource');     // 直接返回
  // 使用模板返回
  res.render('succ', {          // 第一个参数是使用的模板文件名；第二个参数是要返回的内容
    data:JSON.stringify({username})
  })
}
exports.signUp = signUp