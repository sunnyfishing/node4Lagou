var express = require('express');
var router = express.Router();

// 引入中间件
const {signUp} = require('../controllers/users')

/* GET users listing. */
router.post('/new', signUp);

module.exports = router;
