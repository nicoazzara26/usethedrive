var express = require('express');
var router = express.Router();
var google_drive_service = require('../services/google-drive-service');

 /* GET subject view listing. */

router.get('/:id', function(req, res) {
  res.send('hola..');
    var id = req.params.id;
    var subjects = google_drive_service.subjects();

 res.render('subjectsview', { title: 'UseTheDrive', id:subjects.id});
 });

module.exports = router;
