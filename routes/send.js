var express = require('express');
var router  = express.Router();
var TranslateService = require('../services/TranslateService')

router.post('/', TranslateService);

module.exports = router;
