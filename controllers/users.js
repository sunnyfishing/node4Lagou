/*
 * @Author: your name
 * @Date: 2022-01-25 15:39:38
 * @LastEditTime: 2022-01-26 15:08:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\controllers\users.js
 */

const usersModel = require('../models/users')

const signUp = async (req, res, next) =>{
  const {username, password} = req.body

  // 判断是否存在该用户名
  let findUserRes = await usersModel.findUser(username)   // 存在时对象，不存在时null
  if(findUserRes){
    // 重复名，返回错误信息
    res.render('fail', {          // 第一个参数是使用的模板文件名；第二个参数是要返回的内容
      data:JSON.stringify({
        message:'用户名已存在'
      })
    })
  }else{
    // 注册用户
    let signupResult = await usersModel.signup({
      username,
      password
    })
    // 使用模板返回
    res.render('succ', {          // 第一个参数是使用的模板文件名；第二个参数是要返回的内容
      data:JSON.stringify({username})
    })
  }

}
exports.signUp = signUp