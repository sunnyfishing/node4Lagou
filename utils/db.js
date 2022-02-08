/*
 * @Author: your name
 * @Date: 2022-01-25 16:24:00
 * @LastEditTime: 2022-01-25 16:45:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\utils\db.js
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lagou',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// 构建 usersSchema
var usersSchema = mongoose.Schema({
  username:String,
  password: String,
  phone: String,
})

var Users = mongoose.model('users', usersSchema)  //会被作为Collections

exports.Users = Users