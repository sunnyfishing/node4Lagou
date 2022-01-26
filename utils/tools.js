/*
 * @Author: your name
 * @Date: 2022-01-26 15:16:54
 * @LastEditTime: 2022-01-26 15:30:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\utils\tools.js
 */

// 密码加密
const bcrypt = require('bcrypt');

exports.bcryptHash = (myPlaintextPassword) =>{
  return new Promise((resolve, reject) => {
    bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
      if(err){
        reject(err)
      }
      console.log('hash',hash)
      resolve(hash)
    })
  })
}

