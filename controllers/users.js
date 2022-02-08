/*
 * @Author: your name
 * @Date: 2022-01-25 15:39:38
 * @LastEditTime: 2022-01-26 15:39:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJSProject\controllers\users.js
 */

const usersModel = require('../models/users')
const { bcryptHash } = require('../utils/tools')

// 注册
const signUp = async (req, res, next) =>{
  const {username, password,phone} = req.body
  
  // 设置返回格式
  res.set('content-type', 'application/json; charset=utf-8')

  // 判断是否存在该用户名
  let findUserRes = await usersModel.findUser(username)   // 存在时对象，不存在时null
  console.log('findUserRes',findUserRes)
  if(findUserRes){
    console.log('fail')
    // 重复名，返回错误信息
    res.render('fail', {          // 第一个参数是使用的模板文件名；第二个参数是要返回的内容
      data:JSON.stringify({
        message:'用户名已存在'
      })
    })
  }else{
    console.log('succ')
    const bcryptPassword = await bcryptHash(password)
    // 注册用户
    let signupResult = await usersModel.signup({
      username,
      password:bcryptPassword,
      phone
    })
    console.log('signupResult',signupResult)

    // 使用模板返回
    res.render('succSimp', {          // 第一个参数是使用的模板文件名；第二个参数是要返回的内容
      data:JSON.stringify({
        message:'注册成功'
      })
    })
  }

}

// 查询
const list = async (req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')
  const {pageNum, pageSize, username} = req.query
  console.log('req.query',req.query)
  // const findList = await usersModel.findList()
  // const findList = await usersModel.findListPage(pageNum, pageSize)
  const findList = await usersModel.findListPageParam(pageNum, pageSize, username?{username}:undefined)
  const count = await usersModel.count( username?{username}:undefined)
  res.render('succ', {
    data:JSON.stringify(findList),
    total:JSON.stringify(count)
  })
}

// 单条删除
const deleteData = async(req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')
  const {id} = req.body
  console.log('id',id)
  const result = await usersModel.deleteData(id)
  console.log('result',result)
  if(result){
    res.render('succSimp', {
      data: JSON.stringify({message:'删除成功'})
    })
  }else{
    res.render('fail',{
      data:JSON.stringify({message:'删除失败'})
    })
  }
}

// 多条删除
const batchDelete = async(req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')
  const {ids} = req.body
  const result = await usersModel.batchDelete(ids)
  if(result){
    res.render('succSimp', {
      data: JSON.stringify({message:'删除成功'})
    })
  }else{
    res.render('fail',{
      data:JSON.stringify({message:'删除失败'})
    })
  }
}

module.exports={
  signUp,
  list,
  deleteData,
  batchDelete
}