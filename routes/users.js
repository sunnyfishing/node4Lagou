var express = require('express');
var router = express.Router();

// 引入中间件
const {signUp, list, deleteData, batchDelete} = require('../controllers/users')

/* GET users listing. */
router.post('/new', signUp);
router.get('/get', list);
router.post('/delete', deleteData);
router.post('/batchDelete', batchDelete);

module.exports = router;
