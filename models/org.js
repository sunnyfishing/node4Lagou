const {Org} = require('../utils/db')

// 新增
const newOrg = (orgName, createTime, creator) => {
  const orgs = new Org({
    orgName, createTime, creator
  })
  return orgs.save()
}

// 是否存在
const findOrg = (orgName) => {
  return Org.findOne({orgName})
}

// 无条件查询
const findList = () => {
  return Org.find()     // 直接查
}
// parentId查询
const findListByParentId = (parentId) => {
  return Org.find(parentId)     // 直接查
}
// 条件分页查询
const findListPageParam = (pageNum, pageSize, conditions) => {
  const skipNum = (pageNum-1) * pageSize
  return Org
    .find(conditions)     // 条件查
    .skip(skipNum)     // 跳过 num * size 条
    .limit(pageSize)    // 查size条
    .sort({_id: -1})    // 倒叙。正序写法：{id:'asc'}
}
// 获取条数
const count = (conditions) => {
  return Org.count(conditions)
}

module.exports={
  newOrg,
  findOrg,
  findList,
  findListByParentId,
  findListPageParam,
  count
}