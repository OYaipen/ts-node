var express = require('express');
var router = express.Router();

router.use('/api/sales', require('./sale'));

module.exports = router
