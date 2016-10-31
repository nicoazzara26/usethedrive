var express = require('express');
var router = express.Router();
var google_drive_service = require('../services/google-drive-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  var subjects = google_drive_service.subjects()

  res.render('subjectsview', { title: 'UseTheDrive' , subjects: subjects});

});


module.exports = router;
