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
const signup = ({username, password,phone}) => {
  // 传给数据库-异步操作
  console.log('phone',phone)
  const users = new Users({
    username,
    password,
    phone
  })
  console.log('users',users)
  return users.save()    // 保存
}

// 查询
const findUser = (username) => {
  return Users.findOne({username})
}

// 无条件查询
const findList = () => {
  return Users.find()     // 直接查
}

// 分页查询
const findListPage = (pageNum, pageSize) => {
  const skipNum = (pageNum-1) * pageSize
  // const conditions = condition  // 条件
  return Users
    .find()     // 直接查
    .skip(skipNum)     // 跳过 num * size 条
    .limit(pageSize)    // 查size条
    .sort({_id: -1})    // 倒叙。正序写法：{id:'asc'}
}

// 条件分页查询
const findListPageParam = (pageNum, pageSize, conditions) => {
  const skipNum = (pageNum-1) * pageSize
  return Users
    .find(conditions)     // 条件查
    .skip(skipNum)     // 跳过 num * size 条
    .limit(pageSize)    // 查size条
    .sort({_id: -1})    // 倒叙。正序写法：{id:'asc'}
}

// 获取条数
const count = (conditions) => {
  return Users.count(conditions)
}

// 单条删除
const deleteData = (id) => {
  return Users.deleteOne({_id:id})
}

// 多条删除
const batchDelete = (ids) => {
  return Users.remove({_id:{$in:ids}})
}

module.exports={
  signup,
  findUser,
  findList,
  findListPage,
  findListPageParam,
  deleteData,
  batchDelete,
  count
}