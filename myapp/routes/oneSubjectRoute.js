var express = require('express');
var router = express.Router();
var google_drive_service = require('../services/google-drive-service');

 /* GET subject view listing. */

router.get('/:name', function(req, res) {

var subjects = google_drive_service.subjects();

var obj = subjects.filter(function(obj){

if(req.params.name == obj.name){

  res.render('onesubjectview', obj)
}

})[0];
});

module.exports = router;
