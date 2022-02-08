const orgModal = require('../models/org')

// 新增
const newOrg = async(req, res, next) => {
  const {orgName } = req.body
  const creator = req.headers.author
  const createTime = `${new Date().getTime()}`
  let isExit = await orgModal.findOrg(orgName)
  console.log('isExit',isExit)
  if(isExit) {
    res.render('fail', {
      data:JSON.stringify({
        message:'组织名已存在'
      })
    })
  }else{
    await orgModal.newOrg(orgName, createTime, creator)
    res.render('succSimp', {
      data:JSON.stringify({
        message:'成功'
      })
    })
  }
}

// 查询
const list = async(req, res, next)=>{
  const {orgName, pageSize, pageNum} = req.body
  const findList = await orgModal.findListPageParam(pageNum, pageSize, orgName?{orgName}:undefined)
  const count = await orgModal.count( orgName?{orgName}:undefined)
  res.render('succ', {
    data:JSON.stringify(findList),
    total:JSON.stringify(count)
  })
}

// 树列表
const treeList = async(req, res, next) => {
  const {parentId} = req.body
  res.set('content-type', 'application/json; charset=utf-8')
  let treeList
  if(parentId){
    treeList = await orgModal.findListByParentId(parentId)
  }else{
    treeList = await orgModal.findList()
  }
  res.render('succSimp', {
    data:JSON.stringify(treeList)
  })
}

module.exports = {
  newOrg,
  treeList,
  list
}