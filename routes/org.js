var express = require('express')
var router = express.Router()

const {newOrg, treeList, list} = require('../controllers/org.js')

router.post('/new', newOrg)
router.get('/treeList', treeList)
router.get('/list', list)

module.exports = router;