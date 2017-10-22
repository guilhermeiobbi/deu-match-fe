var express = require('express');
var router  = express.Router();
var ApplicantService = require('../services/ApplicantService')

router.get('/', ApplicantService);
router.get('/', function(req, res) {
    res.render('applicants.pug');
});

module.exports = router;
