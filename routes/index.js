var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var country = "VietNam"; // string
  var year = 2023; // integer
  var grade = 7.5;
  var pass = true;
  var gender = 'm';

  res.render('index', {
    title: 'Home Page',
    country: country,
    year: year,
    grade: grade,
    pass: pass,
    gender: gender
  });
});

module.exports = router;
